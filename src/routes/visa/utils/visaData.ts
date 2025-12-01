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
      })
    };
  });
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