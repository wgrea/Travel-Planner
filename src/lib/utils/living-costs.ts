// src/lib/utils/living-costs.ts
import { livingCostsByRegion } from '../data/livingCostData';
import type { 
  CountryData, 
  TravelStyle, 
  LivingCostData, 
  RegionData, 
  SubRegionLivingCosts 
} from '../types/living-costs';

export function getAllRegions(): string[] {
  const regions: string[] = [];
  livingCostsByRegion.forEach((region: RegionData) => {
    if (region.region === "Europe" && region.subregions) {
      region.subregions.forEach((subregion: SubRegionLivingCosts) => {
        regions.push(subregion.subregion);
      });
    } else {
      regions.push(region.region);
    }
  });
  return regions;
}

export function getAllCountries(): CountryData[] {
  const allCountries: CountryData[] = [];
  
  livingCostsByRegion.forEach((region: RegionData) => {
    if (region.subregions) {
      region.subregions.forEach((subregion: SubRegionLivingCosts) => {
        if (subregion?.countries) {
          subregion.countries.forEach((country: LivingCostData) => {
            if (country && country.country) {
              allCountries.push({
                country: country.country,
                region: subregion.subregion || region.region || 'Unknown',
                cities: Object.keys(country.cities || {}),
                averagePrice: undefined
              });
            }
          });
        }
      });
    } else if (region.countries) {
      region.countries.forEach((country: LivingCostData) => {
        if (country && country.country) {
          allCountries.push({
            country: country.country,
            region: region.region || 'Unknown',
            cities: Object.keys(country.cities || {}),
            averagePrice: undefined
          });
        }
      });
    }
  });
  
  return allCountries.sort((a, b) => a.country.localeCompare(b.country));
}

export function getCountriesByRegion(regionName: string): CountryData[] {
  if (!regionName) return getAllCountries();
  
  const europeRegion = livingCostsByRegion.find((r: RegionData) => r.region === "Europe");
  if (europeRegion?.subregions) {
    const subregion = europeRegion.subregions.find((sr: SubRegionLivingCosts) => sr.subregion === regionName);
    if (subregion?.countries) {
      return subregion.countries
        .filter((country: LivingCostData) => country && country.country)
        .map((country: LivingCostData) => ({
          country: country.country,
          region: regionName,
          cities: Object.keys(country.cities || {}),
          averagePrice: 700
        }));
    }
  }
  
  return getAllCountries().filter((country: CountryData) => country.region === regionName);
}

// Helper function to get city costs
export function getCityCosts(countryName: string, cityName: string): any {
  const country = livingCostsByRegion
    .flatMap((region: RegionData) => {
      if (region.subregions) {
        return region.subregions.flatMap((subregion: SubRegionLivingCosts) => subregion.countries || []);
      }
      return region.countries || [];
    })
    .find((country: LivingCostData) => country?.country === countryName);

  if (!country || !country.cities || !country.cities[cityName]) {
    return null;
  }

  return country.cities[cityName];
}

// Helper function to safely get numeric cost with fallbacks
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

// Helper function to get daily cost for a city
export function getDailyCostForCity(countryName: string, cityName: string, travelStyle: TravelStyle): number {
  const cityData = getCityCosts(countryName, cityName);
  const country = livingCostsByRegion
    .flatMap((region: RegionData) => {
      if (region.subregions) {
        return region.subregions.flatMap((subregion: SubRegionLivingCosts) => subregion.countries || []);
      }
      return region.countries || [];
    })
    .find((country: LivingCostData) => country?.country === countryName);

  let dailyCost = 0;

  if (cityData?.baseCosts?.dailyLiving?.[travelStyle]) {
    dailyCost = cityData.baseCosts.dailyLiving[travelStyle] || 0;
  } else if (country?.baseCosts?.dailyLiving?.[travelStyle]) {
    dailyCost = country.baseCosts.dailyLiving[travelStyle] || 0;
  }

  return dailyCost;
}