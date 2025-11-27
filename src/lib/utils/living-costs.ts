// src/lib/utils/living-costs.ts
import { livingCostsByRegion } from '$lib/data/livingCostData';
import type { CountryData, TravelStyle, LivingCostData } from '$lib/types/living-costs';

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
        // Add null/undefined checks
        if (subregion?.countries) {
          subregion.countries.forEach(country => {
            if (country && country.country) { // Check if country exists and has country property
              allCountries.push({
                country: country.country,
                region: subregion.subregion || region.region || 'Unknown',
                cities: Object.keys(country.cities || {})
              });
            }
          });
        }
      });
    } else if (region.countries) {
      region.countries.forEach(country => {
        if (country && country.country) { // Check if country exists and has country property
          allCountries.push({
            country: country.country,
            region: region.region || 'Unknown',
            cities: Object.keys(country.cities || {})
          });
        }
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
    if (subregion?.countries) {
      return subregion.countries
        .filter(country => country && country.country) // Filter out invalid countries
        .map(country => ({
          country: country.country,
          region: regionName,
          cities: Object.keys(country.cities || {}),
          averagePrice: 700
        }));
    }
  }
  
  return getAllCountries().filter(country => country.region === regionName);
}

// Helper function to get city costs
export function getCityCosts(countryName: string, cityName: string): any {
  const country = livingCostsByRegion
    .flatMap(region => {
      if (region.subregions) {
        return region.subregions.flatMap(subregion => subregion.countries);
      }
      return region.countries || [];
    })
    .find(country => country.country === countryName);

  if (!country || !country.cities || !country.cities[cityName]) {
    return null;
  }

  return country.cities[cityName];
}

// Helper function to safely get numeric cost with fallbacks - KEEP ONLY THIS ONE
export function getNumericCost(
  costData: number | { food: number; transport: number; activities: number; misc: number } | undefined, 
  fallback: number = 0
): number {
  if (typeof costData === 'number') {
    return costData;
  } else if (costData && typeof costData === 'object') {
    const values = Object.values(costData).filter(val => typeof val === 'number');
    return values.length > 0 ? values[0] : fallback;
  }
  return fallback;
}

// Helper function to get daily cost for a city - FIXED for optional properties
export function getDailyCostForCity(countryName: string, cityName: string, travelStyle: TravelStyle): number {
  const cityData = getCityCosts(countryName, cityName);
  const country = livingCostsByRegion
    .flatMap(region => {
      if (region.subregions) {
        return region.subregions.flatMap(subregion => subregion.countries);
      }
      return region.countries || [];
    })
    .find(country => country.country === countryName);

  let dailyCost = 0;

  if (cityData?.baseCosts?.dailyLiving?.[travelStyle]) {
    // Use city-specific cost
    dailyCost = cityData.baseCosts.dailyLiving[travelStyle] || 0;
  } else if (country?.baseCosts?.dailyLiving?.[travelStyle]) {
    // Fallback to country average
    dailyCost = country.baseCosts.dailyLiving[travelStyle] || 0;
  }

  return dailyCost;
}

// DELETE any duplicate getNumericCost function below this point