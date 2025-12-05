// src/lib/utils/regions.ts
// Consolidated region utilities

// Mapping of countries to regions (for origin countries)
export const countryToRegionMap: Record<string, string> = {
  // North America
  'United States': 'North America',
  'Canada': 'North America',
  'Mexico': 'North America',
  
  // South America
  'Brazil': 'South America',
  'Argentina': 'South America',
  
  // Europe
  'United Kingdom': 'Europe',
  'France': 'Europe',
  'Spain': 'Europe',
  'Portugal': 'Europe',
  'Italy': 'Europe',
  'Turkey': 'Europe',
  'Greece': 'Europe',
  'Georgia': 'Europe',
  'Azerbaijan': 'Europe',
  
  // Asia
  'Japan': 'East Asia',
  'Thailand': 'Southeast Asia',
  'Vietnam': 'Southeast Asia',
  'Indonesia': 'Southeast Asia',
  'Laos': 'Southeast Asia',
  'India': 'South Asia',
  'Bangladesh': 'South Asia',
  'Nepal': 'South Asia',
  
  // Africa
  'Morocco': 'Africa',
  
  // Central America
  'Belize': 'Central America',
  'Costa Rica': 'Central America',
  'Guatemala': 'Central America',
  'Panama': 'Central America',
};

// Subregion mapping for Europe
export const europeSubregions: Record<string, string[]> = {
  'Western Europe': ['United Kingdom', 'France', 'Spain', 'Portugal'],
  'Southern Europe': ['Italy', 'Turkey', 'Greece'],
  'Eastern Europe/Caucasus': ['Georgia', 'Azerbaijan'],
};

// Main utility functions
export function getRegionForCountry(country: string): string {
  return countryToRegionMap[country] || 'Global';
}

export function getCountriesInRegion(region: string): string[] {
  return Object.entries(countryToRegionMap)
    .filter(([_, reg]) => reg === region)
    .map(([country]) => country)
    .sort();
}

export function getSubregionForCountry(country: string, region?: string): string {
  const actualRegion = region || getRegionForCountry(country);
  
  if (actualRegion === 'Europe') {
    for (const [subregion, countries] of Object.entries(europeSubregions)) {
      if (countries.includes(country)) {
        return subregion;
      }
    }
  }
  
  return 'General';
}

export function getCountriesInSubregion(region: string, subregion: string): string[] {
  if (region === 'Europe') {
    return europeSubregions[subregion] || [];
  }
  return getCountriesInRegion(region);
}