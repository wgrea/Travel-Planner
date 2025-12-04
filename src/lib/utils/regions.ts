// src/lib/utils/regions.ts

// Create the region map FIRST (outside the function)
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
  'Spain': 'Western Europe',
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

export function getRegionForCountry(country: string): string {
  return regionMap[country] || 'Other';
}

/**
 * Get all regions available in the system
 */
export function getAllRegions(): string[] {
  const regions = new Set<string>();
  
  // Add all regions from the map
  Object.values(regionMap).forEach(region => {
    regions.add(region);
  });
  
  return Array.from(regions);
}

/**
 * Get countries by region
 */
export function getCountriesByRegion(region: string): string[] {
  return Object.entries(regionMap)
    .filter(([_, countryRegion]) => countryRegion === region)
    .map(([country, _]) => country);
}