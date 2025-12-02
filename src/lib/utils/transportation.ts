// src/lib/utils/transportation.ts
import type { 
  TransportationCosts, 
  RegionTransportationData 
} from '$lib/types/transportation';
import { transportationDataByRegion } from '$lib/data/transportationData';

// Get all regions
export function getAllRegions(): string[] {
  return transportationDataByRegion.map(region => region.region);
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

// Get countries by region
export function getCountriesByRegion(regionName: string): TransportationCosts[] {
  const region = transportationDataByRegion.find(r => r.region === regionName);
  if (!region) return [];
  
  if (region.subregions) {
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