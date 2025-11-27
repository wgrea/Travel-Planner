// src/routes/living-costs/components/data-helpers.ts
import { livingCostsByRegion } from '$lib/data/livingCostData';
import type { CountryData, TravelStyle, LivingCostData } from './types';

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

// Helper function to extract numeric cost from complex cost breakdown
export function getNumericCost(costData: number | { food: number; transport: number; activities: number; misc: number }): number {
  if (typeof costData === 'number') {
    return costData;
  } else if (costData && typeof costData === 'object') {
    // If it's an object, sum up the values or return the first numeric value found
    const values = Object.values(costData).filter(val => typeof val === 'number');
    return values.length > 0 ? values[0] : 0;
  }
  return 0;
}

// Helper function to get daily cost for a city - FIXED VERSION
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

  if (cityData) {
    // Try different possible structures for city data
    if (cityData.baseCosts && cityData.baseCosts.dailyLiving) {
      dailyCost = cityData.baseCosts.dailyLiving[travelStyle];
    } else if (cityData.dailyLiving) {
      dailyCost = cityData.dailyLiving[travelStyle];
    } else if (typeof cityData === 'number') {
      dailyCost = cityData;
    } else if (cityData[travelStyle]) {
      dailyCost = cityData[travelStyle];
    }
  }

  // Fallback to country average if no city data found
  if (dailyCost === 0 && country?.baseCosts?.dailyLiving) {
    dailyCost = country.baseCosts.dailyLiving[travelStyle];
  }

  return dailyCost;
}