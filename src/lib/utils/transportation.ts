// src/lib/utils/transportation.ts
import type { 
  TransportationCosts, 
  RegionTransportationData,
  SubregionTransportationData 
} from '$lib/types/transportation';
import { transportationDataByRegion } from '$lib/data/transportationData';

// Get all regions
export function getAllRegions(): string[] {
  return transportationDataByRegion.map(region => region.region);
}

// Get subregions by region
export function getSubregionsByRegion(regionName: string): string[] {
  const region = transportationDataByRegion.find(r => r.region === regionName);
  if (!region || !region.subregions) return [];
  
  return region.subregions.map(subregion => subregion.subregion);
}

// Get all countries (flattened)
export function getAllCountries(): TransportationCosts[] {
  return transportationDataByRegion.flatMap(region => {
    if (region.subregions) {
      return region.subregions.flatMap(subregion => subregion.countries);
    }
    return region.countries || [];
  });
}

// Get countries by region AND optional subregion
export function getCountriesByRegion(regionName: string, subregionName?: string): TransportationCosts[] {
  const region = transportationDataByRegion.find(r => r.region === regionName);
  if (!region) return [];
  
  if (region.subregions && subregionName) {
    // Get specific subregion's countries
    const subregion = region.subregions.find(s => s.subregion === subregionName);
    return subregion ? subregion.countries : [];
  } else if (region.subregions && !subregionName) {
    // Get all countries from all subregions
    return region.subregions.flatMap(subregion => subregion.countries);
  }
  
  return region.countries || [];
}

// Get country by name
export function getCountryByName(countryName: string): TransportationCosts | undefined {
  return getAllCountries().find(country => 
    country.country.toLowerCase() === countryName.toLowerCase()
  );
}

// Get cities by country
export function getCitiesByCountry(countryName: string): string[] {
  const country = getCountryByName(countryName);
  if (!country || !country.cities) return [];
  
  return Object.keys(country.cities);
}

// Check if region has subregions
export function hasSubregions(regionName: string): boolean {
  const region = transportationDataByRegion.find(r => r.region === regionName);
  return !!(region && region.subregions && region.subregions.length > 0);
}