// src/lib/utils/regionUtils.ts
// Unified region utilities for all pages

import { routeCosts } from '$lib/data/routeCosts';
import { getAllCountries } from './flightUtils';

// ============== REGION MAPPINGS ==============
// Unified mapping for ALL countries (both origins and destinations)
export const countryToRegionMap: Record<string, string> = {
  // North America
  'United States': 'North America',
  'Canada': 'North America',
  'Mexico': 'North America',
  
  // South America
  'Brazil': 'South America',
  'Argentina': 'South America',
  'Chile': 'South America',
  'Colombia': 'South America',
  'Peru': 'South America',
  
  // Europe - Western
  'United Kingdom': 'Western Europe',
  'France': 'Western Europe',
  'Germany': 'Western Europe',
  'Spain': 'Western Europe',
  'Portugal': 'Western Europe',
  'Netherlands': 'Western Europe',
  'Switzerland': 'Western Europe',
  'Belgium': 'Western Europe',
  'Ireland': 'Western Europe',
  
  // Europe - Southern
  'Italy': 'Southern Europe',
  'Turkey': 'Southern Europe',
  'Greece': 'Southern Europe',
  'Croatia': 'Southern Europe',
  
  // Europe - Eastern/Caucasus
  'Georgia': 'Eastern Europe/Caucasus',
  'Azerbaijan': 'Eastern Europe/Caucasus',
  'Poland': 'Eastern Europe/Caucasus',
  'Czech Republic': 'Eastern Europe/Caucasus',
  'Hungary': 'Eastern Europe/Caucasus',
  'Romania': 'Eastern Europe/Caucasus',
  
  // Asia - Southeast
  'Thailand': 'Southeast Asia',
  'Vietnam': 'Southeast Asia',
  'Indonesia': 'Southeast Asia',
  'Laos': 'Southeast Asia',
  'Malaysia': 'Southeast Asia',
  'Singapore': 'Southeast Asia',
  'Philippines': 'Southeast Asia',
  'Cambodia': 'Southeast Asia',
  'Myanmar': 'Southeast Asia',
  
  // Asia - East
  'Japan': 'East Asia',
  'South Korea': 'East Asia',
  'China': 'East Asia',
  'Taiwan': 'East Asia',
  
  // Asia - South
  'India': 'South Asia',
  'Bangladesh': 'South Asia',
  'Nepal': 'South Asia',
  'Sri Lanka': 'South Asia',
  
  // Middle East
  'United Arab Emirates': 'Middle East',
  'Qatar': 'Middle East',
  'Saudi Arabia': 'Middle East',
  'Israel': 'Middle East',
  
  // Africa
  'Morocco': 'Africa',
  'South Africa': 'Africa',
  'Egypt': 'Africa',
  'Kenya': 'Africa',
  
  // Central America
  'Belize': 'Central America',
  'Costa Rica': 'Central America',
  'Guatemala': 'Central America',
  'Panama': 'Central America',
  
  // Oceania
  'Australia': 'Oceania',
  'New Zealand': 'Oceania',
};

// ============== ORIGIN COUNTRIES (from routeCosts) ==============
export function getAllOriginCountries(): string[] {
  return Object.keys(routeCosts).sort();
}

export function getOriginCountriesByRegion(region: string): string[] {
  return getAllOriginCountries().filter(country => getRegionForCountry(country) === region);
}

export function getAllOriginRegions(): string[] {
  const regions = new Set<string>();
  getAllOriginCountries().forEach(country => {
    const region = getRegionForCountry(country);
    if (region) regions.add(region);
  });
  return Array.from(regions).sort();
}

// ============== DESTINATION COUNTRIES (from flight patterns) ==============
export function getAllDestinationCountries(): string[] {
  return getAllCountries().map(c => c.country);
}

export function getDestinationCountriesByRegion(region: string): string[] {
  return getAllCountries()
    .filter(country => getRegionForCountry(country.country) === region)
    .map(c => c.country);
}

export function getAllDestinationRegions(): string[] {
  const regions = new Set<string>();
  getAllCountries().forEach(country => {
    const region = getRegionForCountry(country.country);
    if (region) regions.add(region);
  });
  return Array.from(regions).sort();
}

// ============== UNIFIED FUNCTIONS ==============
export function getAllCountriesUnified(): string[] {
  const allCountries = new Set<string>();
  
  // Add origin countries
  getAllOriginCountries().forEach(country => allCountries.add(country));
  
  // Add destination countries
  getAllDestinationCountries().forEach(country => allCountries.add(country));
  
  return Array.from(allCountries).sort();
}

// In src/lib/utils/regionUtils.ts, update the getAllRegionsUnified function:
export function getAllRegionsUnified(): string[] {
  const regions = new Set<string>();
  
  // Get regions from all countries
  getAllCountriesUnified().forEach((country: string) => {
    const region = getRegionForCountry(country);
    if (region) regions.add(region);
  });
  
  return Array.from(regions).sort();
}

export function getCountriesByRegionUnified(region: string): string[] {
  return getAllCountriesUnified().filter(country => getRegionForCountry(country) === region);
}

// ============== CORE UTILITIES ==============
export function getRegionForCountry(countryName: string): string {
  // First check the map
  if (countryToRegionMap[countryName]) {
    return countryToRegionMap[countryName];
  }
  
  // Fallback: try to find in flight data
  const allFlightCountries = getAllCountries();
  const flightCountry = allFlightCountries.find(c => c.country === countryName);
  if (flightCountry?.region) {
    return flightCountry.region;
  }
  
  return 'Global';
}

export function isOriginCountry(country: string): boolean {
  return getAllOriginCountries().includes(country);
}

export function isDestinationCountry(country: string): boolean {
  return getAllDestinationCountries().includes(country);
}

export function getDestinationCount(country: string): number {
  const destinations = routeCosts[country];
  if (!destinations) return 0;
  
  // Handle both object and array formats
  if (Array.isArray(destinations)) {
    return destinations.length;
  } else if (typeof destinations === 'object') {
    return Object.keys(destinations).length;
  }
  
  return 0;
}

// ============== SUBREGION SUPPORT ==============
export const europeSubregions: Record<string, string[]> = {
  'Western Europe': ['United Kingdom', 'France', 'Spain', 'Portugal', 'Germany', 'Netherlands', 'Switzerland', 'Belgium', 'Ireland'],
  'Southern Europe': ['Italy', 'Turkey', 'Greece', 'Croatia'],
  'Eastern Europe/Caucasus': ['Georgia', 'Azerbaijan', 'Poland', 'Czech Republic', 'Hungary', 'Romania'],
};

export const asiaSubregions: Record<string, string[]> = {
  'Southeast Asia': ['Thailand', 'Vietnam', 'Indonesia', 'Laos', 'Malaysia', 'Singapore', 'Philippines', 'Cambodia', 'Myanmar'],
  'East Asia': ['Japan', 'South Korea', 'China', 'Taiwan'],
  'South Asia': ['India', 'Bangladesh', 'Nepal', 'Sri Lanka'],
};

export function getSubregionForCountry(country: string): string {
  const region = getRegionForCountry(country);
  
  if (region === 'Europe') {
    for (const [subregion, countries] of Object.entries(europeSubregions)) {
      if (countries.includes(country)) {
        return subregion;
      }
    }
  }
  
  if (region.includes('Asia')) {
    for (const [subregion, countries] of Object.entries(asiaSubregions)) {
      if (countries.includes(country)) {
        return subregion;
      }
    }
  }
  
  return region; // Fallback to main region
}

export function getCountriesBySubregion(subregion: string): string[] {
  // Check Europe subregions
  if (europeSubregions[subregion]) {
    return europeSubregions[subregion];
  }
  
  // Check Asia subregions
  if (asiaSubregions[subregion]) {
    return asiaSubregions[subregion];
  }
  
  // Return empty if not found
  return [];
}

// In your existing src/lib/utils/regionUtils.ts, ADD these functions:

// Map kebab-case to display names
export const regionDisplayNames: Record<string, string> = {
  'north-america': 'North America',
  'south-america': 'South America',
  'europe': 'Europe',
  'east-asia': 'East Asia',
  'southeast-asia': 'Southeast Asia',
  'south-asia': 'South Asia',
  'middle-east': 'Middle East',
  'central-america': 'Central America',
  'northern-africa': 'Northern Africa',
  'oceania': 'Oceania',
  'western-europe': 'Western Europe',
  'southern-europe': 'Southern Europe',
  'northern-europe': 'Northern Europe',
  'eastern-europe': 'Eastern Europe',
  'caucasus': 'Caucasus',
};

// Get display name for a region
export function getRegionDisplayName(regionKey: string): string {
  return regionDisplayNames[regionKey] || regionKey
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Check if a country has full data
export function countryHasFullData(countryName: string): boolean {
  const fullDataCountries = [
    'United States', 'Mexico', 'Brazil', 'Argentina', 'France', 'Spain',
    'Portugal', 'United Kingdom', 'Italy', 'Turkey', 'Greece', 'Georgia',
    'Azerbaijan', 'Japan', 'Thailand', 'Vietnam', 'Indonesia', 'Laos',
    'India', 'Bangladesh', 'Nepal', 'Panama', 'Morocco'
  ];
  return fullDataCountries.includes(countryName);
}