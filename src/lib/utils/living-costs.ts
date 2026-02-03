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

// src/lib/utils/living-costs.ts - SIMPLER FIX
export function getAllCountries(): CountryData[] {
  const allCountries: CountryData[] = [];
  
  livingCostsByRegion.forEach((region: RegionData) => {
    if (region.subregions) {
      // Handle Europe and other regions with subregions
      region.subregions.forEach((subregion: SubRegionLivingCosts) => {
        if (subregion?.countries) {
          subregion.countries.forEach((country: LivingCostData) => {
            if (country && country.country) {
              allCountries.push({
                country: country.country,
                region: region.region, // Main region (e.g., "Europe")
                cities: Object.keys(country.cities || {}),
                averagePrice: undefined
              });
            }
          });
        }
      });
    }
    
    // Also check for direct countries in the region
    if (region.countries) {
      region.countries.forEach((country: LivingCostData) => {
        if (country && country.country) {
          allCountries.push({
            country: country.country,
            region: region.region,
            cities: Object.keys(country.cities || {}),
            averagePrice: undefined
          });
        }
      });
    }
  });
  
  // Remove duplicates just in case
  const uniqueCountries = allCountries.filter((country, index, self) =>
    index === self.findIndex(c => c.country === country.country)
  );
  
  return uniqueCountries.sort((a, b) => a.country.localeCompare(b.country));
}

// Also fix getCountriesByRegion()
export function getCountriesByRegion(regionName: string): CountryData[] {
  if (!regionName) return getAllCountries();
  
  const allCountries = getAllCountries();
  
  // First check if it's a main region (like "Europe", "Southeast Asia")
  let filtered = allCountries.filter(country => country.region === regionName);
  
  if (filtered.length === 0) {
    // Check if it's a European subregion (like "Southern Europe")
    const europeRegion = livingCostsByRegion.find(r => r.region === "Europe");
    if (europeRegion?.subregions) {
      const subregion = europeRegion.subregions.find(sr => sr.subregion === regionName);
      if (subregion?.countries) {
        filtered = subregion.countries
          .filter(country => country && country.country)
          .map(country => ({
            country: country.country,
            region: "Europe", // Return "Europe" as the region
            cities: Object.keys(country.cities || {}),
            averagePrice: undefined
          }));
      }
    }
  }
  
  return filtered.sort((a, b) => a.country.localeCompare(b.country));
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
// In src/lib/utils/living-costs.ts, update the function:
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

  // Handle 'nomad' style specially
  if (travelStyle === 'nomad') {
    // For nomad style, calculate hostel + cafe costs
    if (cityData?.baseCosts) {
      const hostelCost = cityData.baseCosts.accommodation?.budget?.hostel || 
                        country?.baseCosts?.accommodation?.budget?.hostel || 30;
      const cafeCost = cityData.baseCosts.food?.streetFood || 
                      country?.baseCosts?.food?.streetFood || 5;
      // Nomad: hostel + 2 cafe meals per day
      dailyCost = hostelCost + (cafeCost * 2);
    } else if (country?.baseCosts) {
      const hostelCost = country.baseCosts.accommodation?.budget?.hostel || 30;
      const cafeCost = country.baseCosts.food?.streetFood || 5;
      dailyCost = hostelCost + (cafeCost * 2);
    }
  } 
  // Handle other styles
  else if (cityData?.baseCosts?.dailyLiving?.[travelStyle]) {
    dailyCost = cityData.baseCosts.dailyLiving[travelStyle] || 0;
  } else if (country?.baseCosts?.dailyLiving?.[travelStyle]) {
    dailyCost = country.baseCosts.dailyLiving[travelStyle] || 0;
  }

  return dailyCost;
}