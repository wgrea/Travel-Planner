// src/lib/utils/visa.ts

import { visaData, defaultVisaInfo } from '$lib/data/visa';
import { minimalData } from '$lib/data/minimalData';
import { convertCurrency, formatCurrency } from '$lib/utils/currency';
import type { VisaInfo } from '$lib/types/visa'; // Only import VisaInfo
import type { CountryData } from '$lib/components/CountrySelector.svelte';
import type { Country } from '$lib/types/minimalData';

// ============== VISA CORE FUNCTIONS ==============
export function getVisaInfo(homeCountry: string, destinationCountry: string): VisaInfo {
  return visaData[destinationCountry]?.[homeCountry] || defaultVisaInfo;
}

export function getPassportCountries(): string[] {
  return Object.keys(visaData);
}

export function getAvailableDestinations(homeCountry: string): string[] {
  const destinations: string[] = [];
  
  Object.entries(visaData).forEach(([destination, originMap]) => {
    if (originMap[homeCountry]) {
      destinations.push(destination);
    }
  });
  
  return destinations;
}

export function getAllDestinationCountries(): string[] {
  const allDestinations = new Set<string>();
  
  Object.keys(visaData).forEach(destination => {
    if (Object.keys(visaData[destination]).length > 0) {
      allDestinations.add(destination);
    }
  });
  
  return Array.from(allDestinations);
}

export function hasVisaData(homeCountry: string, destinationCountry: string): boolean {
  return !!visaData[destinationCountry]?.[homeCountry];
}

export function checkVisaRequirements(homeCountry: string, destinationCountry: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Checking visa: ${homeCountry} → ${destinationCountry}`);
      resolve();
    }, 500);
  });
}

// ============== DOCUMENT HELPERS ==============
export interface Document {
  name: string;
  priority: 'high' | 'medium' | 'low';
  description?: string;
  category: 'required' | 'recommended' | 'optional';
}

export function getDocuments(visaInfo: VisaInfo, countryData?: Country): Document[] { 
  const baseDocs: Document[] = [
    { 
      name: 'Valid Passport (6+ months validity)', 
      priority: 'high', 
      category: 'required',
      description: 'Most countries require passport valid for 6 months beyond travel dates'
    },
    { 
      name: 'Passport scan + expiration check', 
      priority: 'medium', 
      category: 'required',
      description: 'Digital copy for applications'
    },
    { 
      name: 'Proof of income template', 
      priority: 'medium', 
      category: 'required',
      description: 'Bank statements, employment letter, or client contracts'
    }
  ];

  // Add documents based on visa type
  if (visaInfo.nomadVisa) {
    baseDocs.push(
      { 
        name: 'Digital nomad visa application', 
        priority: 'high', 
        category: 'required',
        description: 'Official application form for digital nomad visa'
      },
      { 
        name: 'Resume + portfolio links', 
        priority: 'medium', 
        category: 'recommended',
        description: 'For digital nomad visa applications'
      }
    );
  }

  // Add documents based on visa difficulty
  const visaDifficulty = countryData?.visa?.difficulty;
  if (visaDifficulty === 'hard') {
    baseDocs.push(
      { 
        name: 'Background check', 
        priority: 'medium', 
        category: 'required',
        description: 'Required for long-term stays in some countries'
      },
      { 
        name: 'Travel itinerary', 
        priority: 'low', 
        category: 'recommended',
        description: 'Detailed travel plans for visa application'
      }
    );
  }

  if (visaDifficulty === 'medium' || visaDifficulty === 'hard') {
    baseDocs.push(
      { 
        name: 'Return flight ticket', 
        priority: 'medium', 
        category: 'required',
        description: 'Proof of onward travel'
      },
      { 
        name: 'Hotel reservations', 
        priority: 'low', 
        category: 'recommended',
        description: 'Accommodation proof for visa application'
      }
    );
  }

  // Always include these
  baseDocs.push(
    { 
      name: 'Health insurance policy', 
      priority: 'medium', 
      category: 'required',
      description: 'International coverage required for many visas'
    },
    { 
      name: 'Bank statements (3 months)', 
      priority: 'medium', 
      category: 'required',
      description: 'Proof of sufficient funds'
    }
  );

  return baseDocs;
}

export function getDocumentsByCategory(documents: Document[], category: 'required' | 'recommended' | 'optional'): Document[] {
  return documents.filter(doc => doc.category === category);
}

export function getPriorityColor(priority: 'high' | 'medium' | 'low'): string {
  return {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-amber-100 text-amber-800 border-amber-200',
    low: 'bg-stone-100 text-stone-800 border-stone-200'
  }[priority];
}

// ============== MATRIX HELPERS ==============
export interface MatrixItem {
  label: string;
  value: string;
  category: 'visa' | 'cost' | 'lifestyle' | 'logistics';
  importance: 'high' | 'medium' | 'low';
}

function getBestTimeToVisit(countryData: Country): string {
  if (!countryData.seasonality?.bestMonths) return 'Year-round';
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const bestMonths = countryData.seasonality.bestMonths.map((month: number) => months[month - 1]);
  return bestMonths.join(', ');
}

function getPopularActivities(countryData: Country): string {
  if (!countryData.filters?.activities) return 'Various';
  return countryData.filters.activities.slice(0, 2).join(', ') + 
    (countryData.filters.activities.length > 2 ? '...' : '');
}

export function getVisaMatrixItems(visaInfo: VisaInfo, countryData?: Country, selectedCurrency: string = 'USD'): MatrixItem[] { 
  
  // Helper function to format income with currency conversion
  function formatIncome(incomeReq: string | undefined): string {
    if (!incomeReq) return 'Not specified';
    
    if (typeof incomeReq === 'string' && incomeReq.includes('$')) {
      const amountMatch = incomeReq.match(/\$([\d,]+)/);
      if (amountMatch) {
        const amount = parseInt(amountMatch[1].replace(/,/g, ''));
        return `${formatCurrency(
          convertCurrency(amount, 'USD', selectedCurrency),
          selectedCurrency
        )}/month`;
      }
    }
    
    return incomeReq;
  }

  const items: MatrixItem[] = [
    {
      label: 'Visa Type',
      value: visaInfo.category,
      category: 'visa',
      importance: 'high'
    },
    {
      label: 'Income Required',
      value: formatIncome(visaInfo.incomeReq),
      category: 'visa', 
      importance: 'high'
    },
    {
      label: 'Digital Nomad Visa',
      value: visaInfo.nomadVisa ? 'Available' : 'Not available',
      category: 'visa',
      importance: 'high'
    },
    {
      label: 'Visa-Free Stay',
      value: visaInfo.freeLength,
      category: 'visa',
      importance: 'medium'
    },
    {
      label: 'Work Policy',
      value: visaInfo.workPolicy,
      category: 'visa',
      importance: 'medium'
    }
  ];

  // Add country-specific items if available
  if (countryData) {
    items.push(
      {
        label: 'Cost of Living',
        value: countryData.costs?.tier ? `${countryData.costs.tier} cost` : 'Unknown',
        category: 'cost',
        importance: 'high'
      },
      {
        label: 'Visa Difficulty', 
        value: countryData.visa?.difficulty ? `${countryData.visa.difficulty}` : 'Unknown',
        category: 'visa',
        importance: 'medium'
      },
      {
        label: 'Best Time to Visit',
        value: getBestTimeToVisit(countryData),
        category: 'lifestyle',
        importance: 'medium'
      },
      {
        label: 'Popular Activities',
        value: getPopularActivities(countryData),
        category: 'lifestyle',
        importance: 'low'
      }
    );
  }

  // Add general logistics items
  items.push(
    {
      label: 'Documents Required',
      value: 'Passport + Proof of income',
      category: 'logistics',
      importance: 'high'
    },
    {
      label: 'Tax Implications',
      value: 'Foreign income often exempt',
      category: 'logistics',
      importance: 'medium'
    },
    {
      label: 'Housing Availability',
      value: 'Easy to find',
      category: 'logistics', 
      importance: 'medium'
    }
  );

  return items;
}

export function getMatrixItemsByCategory(items: MatrixItem[], category: MatrixItem['category']): MatrixItem[] {
  return items.filter(item => item.category === category);
}

// ============== COUNTRY DATA HELPERS ==============
function getRegionForCountry(country: string): string {
  const regionMap: Record<string, string> = {
    // Southeast Asia
    'Thailand': 'Southeast Asia',
    'Malaysia': 'Southeast Asia', 
    'Indonesia': 'Southeast Asia',
    'Vietnam': 'Southeast Asia',
    'Philippines': 'Southeast Asia',
    
    // East Asia
    'China': 'East Asia',
    'Japan': 'East Asia',
    'South Korea': 'East Asia',
    
    // South Asia
    'India': 'South Asia',
    'Nepal': 'South Asia',
    'Sri Lanka': 'South Asia',
    
    // Europe - Western
    'Portugal': 'Western Europe',
    'Spain': 'Southern Europe',
    'France': 'Western Europe',
    'Germany': 'Western Europe',
    'United Kingdom': 'Western Europe',
    
    // Europe - Eastern
    'Czech Republic': 'Eastern Europe',
    'Poland': 'Eastern Europe',
    'Romania': 'Eastern Europe',
    'Slovenia': 'Eastern Europe',
    
    // Europe - Northern
    'Estonia': 'Northern Europe',
    'Norway': 'Northern Europe',
    'Sweden': 'Northern Europe',
    
    // Europe - Southern
    'Croatia': 'Southern Europe',
    'Greece': 'Southern Europe',
    'Italy': 'Southern Europe',
    
    // Caucasus
    'Georgia': 'Caucasus',
    'Armenia': 'Caucasus',
    'Azerbaijan': 'Caucasus',
    
    // North America
    'United States': 'North America',
    'Canada': 'North America',
    'Mexico': 'North America',
    
    // Central America
    'Belize': 'Central America',
    'Costa Rica': 'Central America',
    'Guatemala': 'Central America',
    'Panama': 'Central America',
    
    // South America
    'Argentina': 'South America',
    'Bolivia': 'South America',
    'Brazil': 'South America',
    'Chile': 'South America',
    'Colombia': 'South America',
    'Peru': 'South America',
    
    // Oceania
    'Australia': 'Oceania',
    'New Zealand': 'Oceania',
    
    // Middle East
    'Turkey': 'Middle East',
    'United Arab Emirates': 'Middle East'
  };
  return regionMap[country] || 'Other';
}

export function getVisaCountries(): CountryData[] {
  const destinationCountries = getAllDestinationCountries();
  
  return destinationCountries.map((country: string) => {
    const countryKey = country.toLowerCase();
    const minimalCountry = minimalData.countries[countryKey];
    
    return {
      country: country,
      region: minimalCountry?.region || getRegionForCountry(country),
      cities: minimalCountry?.popularCities?.map(cityId => {
        const city = minimalData.cities[cityId];
        return city?.name || cityId;
      }) || []
    };
  });
}

export function getFilteredVisaCountries(): CountryData[] {
  return getVisaCountries().filter(country => country.region !== 'Other');
}