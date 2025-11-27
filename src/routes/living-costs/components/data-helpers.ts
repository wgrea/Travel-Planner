// src/routes/living-costs/components/data-helpers.ts
import { livingCostsByRegion } from '$lib/data/livingCostData';
import type { CountryData } from './types';

export function getAllRegions(): string[] {
  const regions: string[] = [];
  livingCostsByRegion.forEach(region => {
    if (region.region === "Europe" && region.subregions) {
      region.subregions.forEach(subregion => {
        regions.push(subregion.subregion);
      });
    } else {
      regions.push(region.region);
    }
  });
  return regions;
}

export function getAllCountries() {
  const allCountries: { country: string; region: string; cities: string[] }[] = [];
  
  livingCostsByRegion.forEach(region => {
    if (region.subregions) {
      region.subregions.forEach(subregion => {
        subregion.countries.forEach(country => {
          allCountries.push({
            country: country.country,
            region: subregion.subregion,
            cities: Object.keys(country.cities || {})
          });
        });
      });
    } else if (region.countries) {
      region.countries.forEach(country => {
        allCountries.push({
          country: country.country,
          region: region.region,
          cities: Object.keys(country.cities || {})
        });
      });
    }
  });
  
  return allCountries.sort((a, b) => a.country.localeCompare(b.country));
}

export function getCountriesByRegion(regionName: string): CountryData[] {
  if (!regionName) return getAllCountries();
  
  const europeRegion = livingCostsByRegion.find(r => r.region === "Europe");
  if (europeRegion?.subregions) {
    const subregion = europeRegion.subregions.find(sr => sr.subregion === regionName);
    if (subregion) {
      return subregion.countries.map(country => ({
        country: country.country,
        region: regionName,
        cities: Object.keys(country.cities || {}),
        averagePrice: 700
      }));
    }
  }
  
  return getAllCountries().filter(country => country.region === regionName);
}