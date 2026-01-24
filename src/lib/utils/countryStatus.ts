// src/lib/utils/countryStatus.ts
export interface CountryStatus {
  id: string;
  name: string;
  region: string;
  complete: boolean;
  missingModules: string[];
}

// Not Accurate information. Just an example

// Based on your published countries from config.ts
const ALL_COUNTRIES = [
  // Southeast Asia
  { id: 'thailand', name: 'Thailand', region: 'southeast-asia' },
  { id: 'vietnam', name: 'Vietnam', region: 'southeast-asia' },
  { id: 'indonesia', name: 'Indonesia', region: 'southeast-asia' },
  { id: 'laos', name: 'Laos', region: 'southeast-asia' },
  
  // South Asia
  { id: 'india', name: 'India', region: 'south-asia' },
  { id: 'bangladesh', name: 'Bangladesh', region: 'south-asia' },
  { id: 'nepal', name: 'Nepal', region: 'south-asia' },
  
  // East Asia
  { id: 'japan', name: 'Japan', region: 'east-asia' },
  
  // Western Europe
  { id: 'spain', name: 'Spain', region: 'western-europe' },
  { id: 'france', name: 'France', region: 'western-europe' },
  { id: 'portugal', name: 'Portugal', region: 'western-europe' },
  { id: 'united-kingdom', name: 'United Kingdom', region: 'western-europe' },
  
  // Southern Europe
  { id: 'italy', name: 'Italy', region: 'southern-europe' },
  { id: 'greece', name: 'Greece', region: 'southern-europe' },
  { id: 'turkey', name: 'Turkey', region: 'southern-europe' },
  
  // North America
  { id: 'mexico', name: 'Mexico', region: 'north-america' },
  { id: 'united-states', name: 'United States', region: 'north-america' },
  
  // South America
  { id: 'argentina', name: 'Argentina', region: 'south-america' },
  { id: 'brazil', name: 'Brazil', region: 'south-america' },
  
  // Central America
  { id: 'panama', name: 'Panama', region: 'central-america' },
  
  // Caucasus
  { id: 'azerbaijan', name: 'Azerbaijan', region: 'caucasus' },
  { id: 'georgia', name: 'Georgia', region: 'caucasus' },
  
  // Northern Africa
  { id: 'morocco', name: 'Morocco', region: 'northern-africa' },
];

// For now, use sample completion status
// Later you can enhance this to check actual files
const SAMPLE_COMPLETION: Record<string, { complete: boolean; missing: string[] }> = {
  'thailand': { complete: false, missing: ['events', 'hostels'] },
  'vietnam': { complete: true, missing: [] },
  'mexico': { complete: false, missing: ['transportation', 'nomadInfo'] },
  'japan': { complete: true, missing: [] },
  'spain': { complete: false, missing: ['livingCosts'] },
  'france': { complete: true, missing: [] },
  'italy': { complete: false, missing: ['resonance', 'visa'] },
  'greece': { complete: true, missing: [] },
  'indonesia': { complete: false, missing: ['hostels', 'events'] },
  'united-kingdom': { complete: true, missing: [] },
  'portugal': { complete: true, missing: [] },
  'argentina': { complete: false, missing: ['livingCosts', 'transportation'] },
  'brazil': { complete: true, missing: [] },
  'panama': { complete: false, missing: ['nomadInfo', 'resonance'] },
  'azerbaijan': { complete: true, missing: [] },
  'georgia': { complete: false, missing: ['events', 'hostels'] },
  'morocco': { complete: true, missing: [] },
  'india': { complete: false, missing: ['visa', 'nomadInfo'] },
  'bangladesh': { complete: true, missing: [] },
  'nepal': { complete: false, missing: ['transportation'] },
  'laos': { complete: true, missing: [] },
  'turkey': { complete: false, missing: ['livingCosts'] },
  'united-states': { complete: true, missing: [] },
};

export async function getAllCountryStatus(): Promise<CountryStatus[]> {
  // Simulate a short delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Map all countries with their completion status
  const statuses = ALL_COUNTRIES.map(country => {
    const completion = SAMPLE_COMPLETION[country.id] || { complete: false, missing: ['all modules'] };
    
    return {
      id: country.id,
      name: country.name,
      region: country.region,
      complete: completion.complete,
      missingModules: completion.missing
    };
  });
  
  // Sort: incomplete first, then alphabetical
  return statuses.sort((a, b) => {
    if (a.complete !== b.complete) {
      return a.complete ? 1 : -1;
    }
    return a.name.localeCompare(b.name);
  });
}

// Helper function for incomplete countries only
export async function getIncompleteCountries(): Promise<CountryStatus[]> {
  const allStatus = await getAllCountryStatus();
  return allStatus.filter(country => !country.complete);
}