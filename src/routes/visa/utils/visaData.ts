// src/routes/visa/utils/visaData.ts
import { getAllDestinationCountries } from '$lib/utils/visa';
import { minimalData } from '$lib/data/minimalData';
import type { CountryData } from '$lib/components/CountrySelector.svelte';

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
      }) || getCitiesForCountry(country),
      averagePrice: getAveragePrice(country),
      sweetSpot: minimalCountry?.seasonality ? getSweetSpotFromMonths(minimalCountry.seasonality.bestMonths) : getSweetSpot(country),
      cheapestMonths: minimalCountry?.seasonality ? getSweetSpotFromMonths(minimalCountry.seasonality.worstMonths) : getCheapestMonths(country),
      visaDifficulty: minimalCountry?.visa?.difficulty
    };
  });
}

function getSweetSpotFromMonths(months?: number[]): string[] {
  if (!months || months.length === 0) return ['Year-round'];
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const bestMonths = months.map((month: number) => monthNames[month - 1]);
  
  if (bestMonths.length <= 2) return bestMonths;
  return [`${bestMonths[0]} to ${bestMonths[bestMonths.length - 1]}`];
}

function getRegionForCountry(country: string): string {
  const regionMap: Record<string, string> = {
    'Thailand': 'Southeast Asia',
    'Portugal': 'Western Europe',
    'Spain': 'Southern Europe',
    'Mexico': 'North America',
    'Brazil': 'South America',
    'Australia': 'Oceania',
    'Japan': 'East Asia',
    'Georgia': 'Eastern Europe',
    'Sri Lanka': 'South Asia',
    'Malaysia': 'Southeast Asia',
    'China': 'East Asia',
    'Indonesia': 'Southeast Asia',
    'Vietnam': 'Southeast Asia',
    'Czech Republic': 'Eastern Europe',
    'Costa Rica': 'Central America',
    'United Kingdom': 'Western Europe',
    'Germany': 'Western Europe',
    'Colombia': 'South America'
  };
  return regionMap[country] || 'Other';
}

function getCitiesForCountry(country: string): string[] {
  const cityMap: Record<string, string[]> = {
    'Thailand': ['Bangkok', 'Chiang Mai', 'Phuket'],
    'Portugal': ['Lisbon', 'Porto', 'Faro'],
    'Spain': ['Madrid', 'Barcelona', 'Valencia'],
    'Mexico': ['Mexico City', 'Cancun', 'Guadalajara'],
    'Brazil': ['Rio de Janeiro', 'São Paulo', 'Florianópolis'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane'],
    'Japan': ['Tokyo', 'Osaka', 'Kyoto'],
    'Georgia': ['Tbilisi', 'Batumi', 'Kutaisi'],
    'Sri Lanka': ['Colombo', 'Kandy', 'Galle'],
    'Malaysia': ['Kuala Lumpur', 'Penang', 'Langkawi'],
    'China': ['Beijing', 'Shanghai', 'Guangzhou'],
    'Indonesia': ['Bali', 'Jakarta', 'Yogyakarta'],
    'Vietnam': ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
    'Czech Republic': ['Prague', 'Brno', 'Český Krumlov'],
    'Costa Rica': ['San José', 'Liberia', 'Puerto Viejo'],
    'United Kingdom': ['London', 'Manchester', 'Edinburgh'],
    'Germany': ['Berlin', 'Munich', 'Hamburg'],
    'Colombia': ['Bogotá', 'Medellín', 'Cartagena']
  };
  return cityMap[country] || [];
}

function getAveragePrice(country: string): number {
  const priceMap: Record<string, number> = {
    'Thailand': 850,
    'Portugal': 650,
    'Spain': 700,
    'Mexico': 450,
    'Brazil': 800,
    'Australia': 1200,
    'Japan': 950,
    'Georgia': 600,
    'Sri Lanka': 750,
    'Malaysia': 700,
    'China': 900,
    'Indonesia': 800,
    'Vietnam': 750,
    'Czech Republic': 650,
    'Costa Rica': 550,
    'United Kingdom': 600,
    'Germany': 650,
    'Colombia': 500
  };
  return priceMap[country] || 700;
}

function getSweetSpot(country: string): string[] {
  const sweetSpotMap: Record<string, string[]> = {
    'Thailand': ['November to February'],
    'Portugal': ['April to June', 'September to October'],
    'Spain': ['May to June', 'September'],
    'Mexico': ['December to April'],
    'Brazil': ['April to June', 'August to October'],
    'Australia': ['September to November', 'March to May'],
    'Japan': ['March to May', 'September to November'],
    'Georgia': ['May to June', 'September to October'],
    'Sri Lanka': ['December to March'],
    'Malaysia': ['December to February', 'June to July'],
    'China': ['April to May', 'September to October'],
    'Indonesia': ['April to October'],
    'Vietnam': ['February to April', 'August to October'],
    'Czech Republic': ['May to September'],
    'Costa Rica': ['December to April'],
    'United Kingdom': ['May to September'],
    'Germany': ['May to September'],
    'Colombia': ['December to March', 'June to September']
  };
  return sweetSpotMap[country] || ['Spring and Fall'];
}

function getCheapestMonths(country: string): string[] {
  const cheapMap: Record<string, string[]> = {
    'Thailand': ['May to October'],
    'Portugal': ['November to February'],
    'Spain': ['January to March', 'November'],
    'Mexico': ['May to November'],
    'Brazil': ['February to March', 'August'],
    'Australia': ['April to August'],
    'Japan': ['January to February', 'June to July'],
    'Georgia': ['November to March'],
    'Sri Lanka': ['May to August'],
    'Malaysia': ['March to May', 'September to November'],
    'China': ['January', 'November to December'],
    'Indonesia': ['January to March', 'October to November'],
    'Vietnam': ['May to September'],
    'Czech Republic': ['October to March'],
    'Costa Rica': ['May to November'],
    'United Kingdom': ['January to March', 'October to November'],
    'Germany': ['January to March', 'October to December'],
    'Colombia': ['April to May', 'October to November']
  };
  return cheapMap[country] || ['Off-season months'];
}