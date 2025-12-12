// src/lib/utils/transportation.ts - FIXED VERSION
import type { 
  TransportationCosts, 
  RegionTransportationData,
  SubregionTransportationData 
} from '$lib/types/transportation';
import { transportationDataByRegion } from '$lib/data/transportationData';

// Get all regions
export function getAllRegions(): string[] {
  const regions = transportationDataByRegion.map(region => region.region);
  // Remove duplicates just in case
  return [...new Set(regions)];
}

// Get subregions by region
export function getSubregionsByRegion(regionName: string): string[] {
  const region = transportationDataByRegion.find(r => r.region === regionName);
  if (!region || !region.subregions) return [];
  
  return region.subregions.map(subregion => subregion.subregion);
}

// Get all countries (flattened) - FIXED
export function getAllCountries(): TransportationCosts[] {
  return transportationDataByRegion.flatMap(region => {
    if (region.subregions) {
      return region.subregions.flatMap(subregion => 
        subregion.countries.map(country => ({
          ...country,
          region: region.region, // Preserve region info
          subregion: subregion.subregion // Preserve subregion info
        }))
      );
    }
    return (region.countries || []).map(country => ({
      ...country,
      region: region.region // Preserve region info
    }));
  });
}

// Get countries by region AND optional subregion - FIXED
export function getCountriesByRegion(regionName: string, subregionName?: string): TransportationCosts[] {
  const region = transportationDataByRegion.find(r => r.region === regionName);
  if (!region) return [];
  
  if (region.subregions && subregionName) {
    // Get specific subregion's countries
    const subregion = region.subregions.find(s => s.subregion === subregionName);
    return subregion ? subregion.countries : [];
  } else if (region.subregions && !subregionName) {
    // Get all countries from all subregions in this region
    return region.subregions.flatMap(subregion => subregion.countries);
  }
  
  return region.countries || [];
}

// Get country by name - FIXED (check region first)
export function getCountryByName(countryName: string, regionName?: string): TransportationCosts | undefined {
  const allCountries = getAllCountries();
  
  if (regionName) {
    // Look for country in specific region
    return allCountries.find(country => 
      country.country.toLowerCase() === countryName.toLowerCase() &&
      country.region === regionName
    );
  }
  
  // Look in all regions (first match)
  return allCountries.find(country => 
    country.country.toLowerCase() === countryName.toLowerCase()
  );
}

// Get cities by country - FIXED
export function getCitiesByCountry(countryName: string, regionName?: string): string[] {
  const country = getCountryByName(countryName, regionName);
  if (!country || !country.cities) return [];
  
  return Object.keys(country.cities);
}

// Check if region has subregions
export function hasSubregions(regionName: string): boolean {
  const region = transportationDataByRegion.find(r => r.region === regionName);
  return !!(region && region.subregions && region.subregions.length > 0);
}

// NEW: Debug function to check data integrity
export function debugRegionData(): void {
  console.log('=== TRANSPORTATION DATA DEBUG ===');
  transportationDataByRegion.forEach(region => {
    console.log(`Region: ${region.region}`);
    if (region.subregions) {
      region.subregions.forEach(subregion => {
        console.log(`  Subregion: ${subregion.subregion}`);
        console.log(`  Countries: ${subregion.countries.map(c => c.country).join(', ')}`);
      });
    } else {
      console.log(`  Countries: ${(region.countries || []).map(c => c.country).join(', ')}`);
    }
  });
  console.log('===============================');
}