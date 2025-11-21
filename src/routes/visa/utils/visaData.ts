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

function getCitiesForCountry(country: string): string[] {
  const cityMap: Record<string, string[]> = {
    // Southeast Asia
    'Thailand': ['Bangkok', 'Chiang Mai', 'Phuket'],
    'Malaysia': ['Kuala Lumpur', 'Penang', 'Langkawi'],
    'Indonesia': ['Bali', 'Jakarta', 'Yogyakarta'],
    'Vietnam': ['Hanoi', 'Ho Chi Minh City', 'Da Nang'],
    'Philippines': ['Manila', 'Cebu', 'Palawan'],
    
    // East Asia
    'China': ['Beijing', 'Shanghai', 'Guangzhou'],
    'Japan': ['Tokyo', 'Osaka', 'Kyoto'],
    'South Korea': ['Seoul', 'Busan', 'Jeju'],
    
    // South Asia
    'India': ['Delhi', 'Mumbai', 'Goa'],
    'Nepal': ['Kathmandu', 'Pokhara', 'Chitwan'],
    'Sri Lanka': ['Colombo', 'Kandy', 'Galle'],
    
    // Europe
    'Portugal': ['Lisbon', 'Porto', 'Faro'],
    'Spain': ['Madrid', 'Barcelona', 'Valencia'],
    'France': ['Paris', 'Lyon', 'Nice'],
    'Germany': ['Berlin', 'Munich', 'Hamburg'],
    'Czech Republic': ['Prague', 'Brno', 'Český Krumlov'],
    'Poland': ['Warsaw', 'Krakow', 'Gdansk'],
    'Romania': ['Bucharest', 'Brasov', 'Cluj-Napoca'],
    'Slovenia': ['Ljubljana', 'Bled', 'Piran'],
    'Estonia': ['Tallinn', 'Tartu', 'Pärnu'],
    'Norway': ['Oslo', 'Bergen', 'Tromsø'],
    'Sweden': ['Stockholm', 'Gothenburg', 'Malmö'],
    'Croatia': ['Zagreb', 'Dubrovnik', 'Split'],
    'Greece': ['Athens', 'Thessaloniki', 'Santorini'],
    'Italy': ['Rome', 'Florence', 'Venice'],
    
    // Caucasus
    'Georgia': ['Tbilisi', 'Batumi', 'Kutaisi'],
    'Armenia': ['Yerevan', 'Gyumri', 'Dilijan'],
    'Azerbaijan': ['Baku', 'Ganja', 'Sheki'],
    
    // Americas
    'United States': ['New York', 'Los Angeles', 'Miami'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal'],
    'Mexico': ['Mexico City', 'Cancun', 'Guadalajara'],
    'Belize': ['Belize City', 'San Ignacio', 'Caye Caulker'],
    'Costa Rica': ['San José', 'Liberia', 'Puerto Viejo'],
    'Guatemala': ['Guatemala City', 'Antigua', 'Lake Atitlán'],
    'Panama': ['Panama City', 'Bocas del Toro', 'Boquete'],
    
    // South America
    'Argentina': ['Buenos Aires', 'Mendoza', 'Bariloche'],
    'Bolivia': ['La Paz', 'Sucre', 'Uyuni'],
    'Brazil': ['Rio de Janeiro', 'São Paulo', 'Florianópolis'],
    'Chile': ['Santiago', 'Valparaíso', 'Puerto Natales'],
    'Colombia': ['Bogotá', 'Medellín', 'Cartagena'],
    'Peru': ['Lima', 'Cusco', 'Arequipa'],
    
    // Oceania
    'Australia': ['Sydney', 'Melbourne', 'Brisbane'],
    'New Zealand': ['Auckland', 'Wellington', 'Queenstown'],
    
    // Middle East
    'Turkey': ['Istanbul', 'Ankara', 'Antalya'],
    'United Arab Emirates': ['Dubai', 'Abu Dhabi', 'Sharjah']
  };
  return cityMap[country] || [];
}

function getAveragePrice(country: string): number {
  const priceMap: Record<string, number> = {
    // Southeast Asia
    'Thailand': 850,
    'Malaysia': 700,
    'Indonesia': 800,
    'Vietnam': 750,
    'Philippines': 800,
    
    // East Asia
    'China': 900,
    'Japan': 950,
    'South Korea': 850,
    
    // South Asia
    'India': 600,
    'Nepal': 500,
    'Sri Lanka': 750,
    
    // Europe
    'Portugal': 650,
    'Spain': 700,
    'France': 800,
    'Germany': 750,
    'Czech Republic': 650,
    'Poland': 600,
    'Romania': 550,
    'Slovenia': 650,
    'Estonia': 600,
    'Norway': 1100,
    'Sweden': 900,
    'Croatia': 700,
    'Greece': 750,
    'Italy': 800,
    
    // Caucasus
    'Georgia': 600,
    'Armenia': 550,
    'Azerbaijan': 650,
    
    // Americas
    'United States': 1200,
    'Canada': 1000,
    'Mexico': 450,
    'Belize': 600,
    'Costa Rica': 550,
    'Guatemala': 500,
    'Panama': 600,
    
    // South America
    'Argentina': 700,
    'Bolivia': 450,
    'Brazil': 800,
    'Chile': 750,
    'Colombia': 500,
    'Peru': 550,
    
    // Oceania
    'Australia': 1200,
    'New Zealand': 1100,
    
    // Middle East
    'Turkey': 650,
    'United Arab Emirates': 900
  };
  return priceMap[country] || 700;
}

function getSweetSpot(country: string): string[] {
  const sweetSpotMap: Record<string, string[]> = {
    // Southeast Asia
    'Thailand': ['November to February'],
    'Malaysia': ['December to February', 'June to July'],
    'Indonesia': ['April to October'],
    'Vietnam': ['February to April', 'August to October'],
    'Philippines': ['December to February'],
    
    // East Asia
    'China': ['April to May', 'September to October'],
    'Japan': ['March to May', 'September to November'],
    'South Korea': ['April to June', 'September to November'],
    
    // South Asia
    'India': ['October to March'],
    'Nepal': ['October to November', 'February to April'],
    'Sri Lanka': ['December to March'],
    
    // Europe
    'Portugal': ['April to June', 'September to October'],
    'Spain': ['May to June', 'September'],
    'France': ['April to June', 'September to October'],
    'Germany': ['May to September'],
    'Czech Republic': ['May to September'],
    'Poland': ['May to September'],
    'Romania': ['May to September'],
    'Slovenia': ['May to September'],
    'Estonia': ['June to August'],
    'Norway': ['June to August'],
    'Sweden': ['June to August'],
    'Croatia': ['May to June', 'September'],
    'Greece': ['May to June', 'September to October'],
    'Italy': ['April to June', 'September to October'],
    
    // Caucasus
    'Georgia': ['May to June', 'September to October'],
    'Armenia': ['May to June', 'September to October'],
    'Azerbaijan': ['April to June', 'September to October'],
    
    // Americas
    'United States': ['April to May', 'September to October'],
    'Canada': ['June to August'],
    'Mexico': ['December to April'],
    'Belize': ['December to April'],
    'Costa Rica': ['December to April'],
    'Guatemala': ['November to April'],
    'Panama': ['December to April'],
    
    // South America
    'Argentina': ['October to April'],
    'Bolivia': ['May to October'],
    'Brazil': ['April to June', 'August to October'],
    'Chile': ['December to February'],
    'Colombia': ['December to March', 'June to September'],
    'Peru': ['May to September'],
    
    // Oceania
    'Australia': ['September to November', 'March to May'],
    'New Zealand': ['December to February'],
    
    // Middle East
    'Turkey': ['April to May', 'September to October'],
    'United Arab Emirates': ['November to March']
  };
  return sweetSpotMap[country] || ['Spring and Fall'];
}

function getCheapestMonths(country: string): string[] {
  const cheapMap: Record<string, string[]> = {
    // Southeast Asia
    'Thailand': ['May to October'],
    'Malaysia': ['March to May', 'September to November'],
    'Indonesia': ['January to March', 'October to November'],
    'Vietnam': ['May to September'],
    'Philippines': ['June to October'],
    
    // East Asia
    'China': ['January', 'November to December'],
    'Japan': ['January to February', 'June to July'],
    'South Korea': ['January to February', 'July to August'],
    
    // South Asia
    'India': ['April to September'],
    'Nepal': ['December to January', 'June to August'],
    'Sri Lanka': ['May to August'],
    
    // Europe
    'Portugal': ['November to February'],
    'Spain': ['January to March', 'November'],
    'France': ['November to March'],
    'Germany': ['January to March', 'October to December'],
    'Czech Republic': ['October to March'],
    'Poland': ['October to March'],
    'Romania': ['October to April'],
    'Slovenia': ['October to March'],
    'Estonia': ['September to May'],
    'Norway': ['September to May'],
    'Sweden': ['September to May'],
    'Croatia': ['October to April'],
    'Greece': ['November to March'],
    'Italy': ['November to March'],
    
    // Caucasus
    'Georgia': ['November to March'],
    'Armenia': ['November to March'],
    'Azerbaijan': ['November to March'],
    
    // Americas
    'United States': ['January to March', 'October to November'],
    'Canada': ['April to May', 'September to October'],
    'Mexico': ['May to November'],
    'Belize': ['May to November'],
    'Costa Rica': ['May to November'],
    'Guatemala': ['May to October'],
    'Panama': ['May to November'],
    
    // South America
    'Argentina': ['May to September'],
    'Bolivia': ['November to March'],
    'Brazil': ['February to March', 'August'],
    'Chile': ['March to May', 'September to November'],
    'Colombia': ['April to May', 'October to November'],
    'Peru': ['October to April'],
    
    // Oceania
    'Australia': ['April to August'],
    'New Zealand': ['June to August'],
    
    // Middle East
    'Turkey': ['November to March'],
    'United Arab Emirates': ['June to August']
  };
  return cheapMap[country] || ['Off-season months'];
}