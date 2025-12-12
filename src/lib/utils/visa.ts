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

// ============== VISA TYPE DETAILS & FILTERING ==============

// And make sure this is your only VisaCategory definition:
export type VisaCategory = 
  | 'Visa-Free'
  | 'Visa on Arrival'
  | 'e-Visa'
  | 'Visa Required'
  | 'Digital Nomad Visa'
  | 'Freelance Visa'
  | 'Tourist Visa'
  | 'Business Visa'
  | 'Work Visa'
  | 'Transit Visa'
  | 'Other';

export interface VisaTypeDetails {
  type: VisaCategory;
  processingTime: string;
  cost: string;
  duration: string;
  requirements: string[];
  workAllowed: boolean;
  nomadFriendly: boolean;
}

// In your visa.ts, update the VisaFilter interface:
export interface VisaFilter {
  categories: VisaCategory[];
  workAllowed?: boolean;
  nomadFriendly?: boolean;
  processingTime?: string;
}

// Also add this helper function:
export function createDefaultVisaFilter(): VisaFilter {
  return {
    categories: [] as VisaCategory[],
    workAllowed: false,
    nomadFriendly: false
  };
}

// Determine visa category from existing data
export function getVisaCategory(visaInfo: VisaInfo): VisaCategory {
  const ease = visaInfo.ease.toLowerCase();
  const category = visaInfo.category.toLowerCase();
  
  if (visaInfo.nomadVisa) return 'Digital Nomad Visa';
  if (category.includes('nomad') || category.includes('digital')) return 'Digital Nomad Visa';
  if (category.includes('freelance') || category.includes('remote')) return 'Freelance Visa';
  if (category.includes('tourist')) return 'Tourist Visa';
  if (category.includes('business')) return 'Business Visa';
  if (category.includes('work')) return 'Work Visa';
  
  if (ease.includes('visa-free') || visaInfo.freeLength !== '0 days') return 'Visa-Free';
  if (ease.includes('arrival')) return 'Visa on Arrival';
  if (ease.includes('e-visa') || category.includes('e-visa')) return 'e-Visa';
  if (ease.includes('required') || category.includes('required')) return 'Visa Required';
  
  return 'Other';
}

// Get processing time estimate
export function getProcessingTime(visaInfo: VisaInfo): string {
  if (visaInfo.applicationTime) return visaInfo.applicationTime;
  
  const category = getVisaCategory(visaInfo);
  switch (category) {
    case 'Visa-Free':
    case 'Visa on Arrival':
      return 'On arrival';
    case 'e-Visa':
      return '1-3 days';
    case 'Digital Nomad Visa':
    case 'Freelance Visa':
      return '2-4 weeks';
    default:
      return '1-4 weeks';
  }
}

// Get cost estimate
export function getCostEstimate(visaInfo: VisaInfo): string {
  if (visaInfo.cost) return `$${visaInfo.cost}`;
  
  const category = getVisaCategory(visaInfo);
  switch (category) {
    case 'Visa-Free':
      return 'Free';
    case 'Visa on Arrival':
      return '$25-$100';
    case 'e-Visa':
      return '$30-$80';
    case 'Digital Nomad Visa':
      return '$200-$500 + income proof';
    default:
      return '$50-$300';
  }
}

// Format cost with currency conversion
export function formatVisaCost(cost: string, targetCurrency: string = 'USD'): string {
  if (!cost || cost.toLowerCase() === 'free' || cost.toLowerCase() === 'varies') {
    return cost;
  }
  
  // Extract numeric values from cost string
  const matches = cost.match(/\$([\d,.]+)/g);
  if (!matches) return cost;
  
  // Convert each amount found
  let convertedCost = cost;
  matches.forEach(match => {
    const amountStr = match.replace(/[$,]/g, '');
    const amount = parseFloat(amountStr);
    if (!isNaN(amount)) {
      const convertedAmount = convertCurrency(amount, 'USD', targetCurrency);
      const formattedAmount = formatCurrency(convertedAmount, targetCurrency);
      convertedCost = convertedCost.replace(match, formattedAmount);
    }
  });
  
  return convertedCost;
}

// Helper function to extract numeric value from cost string
export function extractVisaCostValue(cost: string): number | null {
  if (!cost || cost.toLowerCase() === 'free') return 0;
  
  const match = cost.match(/\$([\d,.]+)/);
  if (!match) return null;
  
  const amountStr = match[1].replace(/,/g, '');
  return parseFloat(amountStr);
}

// Get visa costs in specific currency
export function getVisaCostInCurrency(
  visaInfo: VisaInfo, 
  targetCurrency: string = 'USD'
): string {
  // First try to use the cost field
  if (visaInfo.cost) {
    const convertedAmount = convertCurrency(visaInfo.cost, 'USD', targetCurrency);
    return formatCurrency(convertedAmount, targetCurrency);
  }
  
  // Fall back to estimated cost
  const costEstimate = getCostEstimate(visaInfo);
  return formatVisaCost(costEstimate, targetCurrency);
}

// Update the getVisaRequirementsList function in visa.ts
function getVisaRequirementsList(visaInfo: VisaInfo): string[] {
  const requirements: string[] = ['Valid passport (6+ months)'];
  
  // Income requirement
  if (visaInfo.incomeReq && visaInfo.incomeReq !== 'Not specified') {
    requirements.push(`Proof of income: ${visaInfo.incomeReq}`);
  }
  
  // Always include these
  requirements.push('Health/travel insurance');
  requirements.push('Passport-sized photos');
  
  // Digital nomad specific
  if (visaInfo.nomadVisa) {
    requirements.push('Proof of remote work/employment');
    requirements.push('Background check (if applicable)');
  }
  
  // Visa type specific
  const category = getVisaCategory(visaInfo);
  
  // Use string checks instead of direct comparison
  const categoryStr = category.toString();
  
  if (categoryStr === 'Visa Required' || categoryStr.includes('Tourist')) {
    requirements.push('Return flight ticket');
    requirements.push('Accommodation proof');
    requirements.push('Bank statements (3-6 months)');
  }
  
  if (categoryStr.includes('Business')) {
    requirements.push('Business invitation letter');
    requirements.push('Company registration documents');
  }
  
  if (categoryStr.includes('Student')) {
    requirements.push('University acceptance letter');
    requirements.push('Proof of tuition payment');
  }
  
  return requirements;
}

// Update the getVisaTypeDetails function to include currency
export function getVisaTypeDetails(
  passportCountry: string, 
  destinationCountry: string,
  targetCurrency: string = 'USD'
): VisaTypeDetails[] {
  const visaInfo = getVisaInfo(passportCountry, destinationCountry);
  if (!visaInfo || visaInfo === defaultVisaInfo) return [];
  
  const category = getVisaCategory(visaInfo);
  const processingTime = getProcessingTime(visaInfo);
  const cost = getVisaCostInCurrency(visaInfo, targetCurrency);
  const workAllowed = !visaInfo.workPolicy.toLowerCase().includes('not allowed');
  const nomadFriendly = visaInfo.nomadVisa || category.includes('Digital Nomad') || category.includes('Freelance');
  
  const baseDetails: VisaTypeDetails = {
    type: category,
    processingTime,
    cost,
    duration: visaInfo.freeLength,
    requirements: getVisaRequirementsList(visaInfo),
    workAllowed,
    nomadFriendly
  };
  
  const details = [baseDetails];
  
  // Add additional visa types that might be available
  if (visaInfo.nomadVisa && category !== 'Digital Nomad Visa') {
    const nomadCost = formatVisaCost('$200-$500 + income proof', targetCurrency);
    details.push({
      type: 'Digital Nomad Visa',
      processingTime: '2-4 weeks',
      cost: nomadCost,
      duration: '6-12 months',
      requirements: ['Passport', 'Proof of income', 'Health insurance', 'Remote work proof'],
      workAllowed: true,
      nomadFriendly: true
    });
  }
  
  if (category === 'Visa Required' && visaInfo.freeLength !== '0 days') {
    const touristCost = formatVisaCost('$50-$150', targetCurrency);
    details.push({
      type: 'Tourist Visa',
      processingTime: '1-3 weeks',
      cost: touristCost,
      duration: visaInfo.freeLength,
      requirements: ['Passport', 'Hotel booking', 'Return ticket', 'Bank statements'],
      workAllowed: false,
      nomadFriendly: false
    });
  }
  
  return details;
}

// Also make sure the filterDestinationsByVisa function handles undefined properly
export function filterDestinationsByVisa(
  passportCountry: string,
  filter: VisaFilter,
  targetCurrency: string = 'USD'
): Array<{
  country: string;
  visaInfo: VisaInfo;
  category: VisaCategory;
  processingTime: string;
  cost: string;
  workAllowed: boolean;
  nomadFriendly: boolean;
}> {
  const results = [];
  
  for (const [destination, originMap] of Object.entries(visaData)) {
    const visaInfo = originMap[passportCountry];
    if (!visaInfo) continue;
    
    const category = getVisaCategory(visaInfo);
    const processingTime = getProcessingTime(visaInfo);
    const cost = getVisaCostInCurrency(visaInfo, targetCurrency);
    const workAllowed = !visaInfo.workPolicy.toLowerCase().includes('not allowed');
    const nomadFriendly = visaInfo.nomadVisa || category.includes('Digital Nomad') || category.includes('Freelance');
    
    // Apply filters - handle undefined boolean checks
    let matches = true;
    
    if (filter.categories.length > 0 && !filter.categories.includes(category)) {
      matches = false;
    }
    
    if (filter.workAllowed !== undefined && filter.workAllowed && !workAllowed) {
      matches = false;
    }
    
    if (filter.nomadFriendly !== undefined && filter.nomadFriendly && !nomadFriendly) {
      matches = false;
    }
    
    if (matches) {
      results.push({
        country: destination,
        visaInfo,
        category,
        processingTime,
        cost,
        workAllowed,
        nomadFriendly
      });
    }
  }
  
  return results;
}

// Get available visa categories for a passport
export function getAvailableVisaCategories(passportCountry: string): VisaCategory[] {
  const categories = new Set<VisaCategory>();
  
  for (const originMap of Object.values(visaData)) {
    const visaInfo = originMap[passportCountry];
    if (visaInfo) {
      categories.add(getVisaCategory(visaInfo));
    }
  }
  
  return Array.from(categories);
}

// Get digital nomad destinations
export function getNomadDestinations(passportCountry: string) {
  return filterDestinationsByVisa(passportCountry, {
    categories: [],
    workAllowed: true,
    nomadFriendly: true
  });
}

// Get visa-free destinations
export function getVisaFreeDestinations(passportCountry: string) {
  return filterDestinationsByVisa(passportCountry, {
    categories: ['Visa-Free', 'Visa on Arrival'],
    workAllowed: false
  });
}

