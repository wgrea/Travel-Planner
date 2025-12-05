// src/lib/data/regions.ts

// Add the countries that already have the earth emoji
export const regions = [
  'Southeast Asia',
  'East Asia',
  'South Asia',
  'Europe',
  'North America',
  'Latin America',
  'Africa',
  'Oceania',
  'Middle East'
] as const;

export type Region = typeof regions[number];

export const subregions = [
  // Southeast Asia
  { region: 'Southeast Asia', name: 'Mainland Southeast Asia' },
  { region: 'Southeast Asia', name: 'Maritime Southeast Asia' },
  
  // Europe
  { region: 'Europe', name: 'Western Europe' },
  { region: 'Europe', name: 'Eastern Europe' },
  { region: 'Europe', name: 'Northern Europe' },
  { region: 'Europe', name: 'Southern Europe' },
  { region: 'Europe', name: 'Central Europe' },
  
  // Asia
  { region: 'East Asia', name: 'Northeast Asia' },
  { region: 'East Asia', name: 'East Asia' },
  { region: 'South Asia', name: 'Indian Subcontinent' },
  { region: 'South Asia', name: 'Himalayan Region' },
  
  // Americas
  { region: 'North America', name: 'Northern America' },
  { region: 'North America', name: 'Caribbean' },
  { region: 'Latin America', name: 'Central America' },
  { region: 'Latin America', name: 'South America' },
  { region: 'Latin America', name: 'Andean Region' },
  
  // Africa
  { region: 'Africa', name: 'North Africa' },
  { region: 'Africa', name: 'West Africa' },
  { region: 'Africa', name: 'East Africa' },
  { region: 'Africa', name: 'Central Africa' },
  { region: 'Africa', name: 'Southern Africa' },
  
  // Middle East
  { region: 'Middle East', name: 'Gulf States' },
  { region: 'Middle East', name: 'Levant' },
  { region: 'Middle East', name: 'Middle East' },
  
  // Oceania
  { region: 'Oceania', name: 'Australasia' },
  { region: 'Oceania', name: 'Polynesia' },
  { region: 'Oceania', name: 'Melanesia' },
  { region: 'Oceania', name: 'Micronesia' }
] as const;

export type Subregion = typeof subregions[number];

// Helper function to get subregions by region
export function getSubregions(region: Region): string[] {
  return subregions
    .filter(s => s.region === region)
    .map(s => s.name);
}