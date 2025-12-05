// src/lib/utils/regionUtils.ts
import { routeCosts } from '$lib/data/routeCosts';

// Extract regions from your existing routeCosts structure
export function getRegionForCountry(country: string): string {
  // This should come from your actual data structure
  // For now, let's create a simple mapping based on where files are located
  const regionMap: Record<string, string> = {
    // From your imports, we can infer regions:
    
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
    'Brazil': 'South America',
    
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
    'Thailand': 'Southeast Asia',
    'Vietnam': 'Southeast Asia',
    'Indonesia': 'Southeast Asia',
    'Laos': 'Southeast Asia',
    'Japan': 'East Asia',
    'India': 'South Asia',
    'Bangladesh': 'South Asia',
    'Nepal': 'South Asia',
    
    // Africa
    'Morocco': 'Africa',
  };
  
  return regionMap[country] || 'Global';
}

// Get all available origin countries
export function getAllOriginCountries(): string[] {
  return Object.keys(routeCosts).sort();
}

// Get origin countries by region
export function getOriginCountriesByRegion(region: string): string[] {
  return getAllOriginCountries().filter(country => getRegionForCountry(country) === region);
}

// Get all unique regions from available origins
export function getAllOriginRegions(): string[] {
  const regions = new Set<string>();
  getAllOriginCountries().forEach(country => {
    const region = getRegionForCountry(country);
    if (region) regions.add(region);
  });
  return Array.from(regions).sort();
}