// src/lib/utils/flightUtils.ts
import { 
  flyDataByRegion, 
  getAllCountries as getAllFlightPatterns,
  getCountriesByRegion as getFlightPatternsByRegion,
  type FlightPattern,
  type RegionData,
  type SubRegionData
} from '$lib/data/flightPatternData';

// Define CountryData locally since it's specific to this utility
export interface CountryData {
  country: string;
  region: string;
  cities: string[];
  averagePrice: number;
  sweetSpot: string;
  cheapestMonths: string[];
}

export function getAllCountries(): CountryData[] {
  const allCountries: CountryData[] = [];
  
  flyDataByRegion.forEach((regionData: RegionData) => {
    // Handle Europe with subregions
    if (regionData.subregions) {
      regionData.subregions.forEach((subregion: SubRegionData) => {
        subregion.countries.forEach((flightPattern: FlightPattern) => {
          allCountries.push({
            country: flightPattern.country,
            region: subregion.subregion,
            cities: flightPattern.cities,
            averagePrice: flightPattern.averagePrice,
            sweetSpot: flightPattern.sweetSpot.join(', '),
            cheapestMonths: flightPattern.cheapestMonths
          });
        });
      });
    } 
    // Handle all other regions normally
    else if (regionData.countries) {
      regionData.countries.forEach((flightPattern: FlightPattern) => {
        allCountries.push({
          country: flightPattern.country,
          region: regionData.region,
          cities: flightPattern.cities,
          averagePrice: flightPattern.averagePrice,
          sweetSpot: flightPattern.sweetSpot.join(', '),
          cheapestMonths: flightPattern.cheapestMonths
        });
      });
    }
  });
  
  return allCountries;
}

export function getCountriesByRegion(regionName: string): FlightPattern[] {
  return getFlightPatternsByRegion(regionName);
}

export function getCurrentFlightData(selectedCountry: string): FlightPattern | undefined {
  return getAllFlightPatterns().find(country => country.country === selectedCountry);
}

export function handleCountryChange(country: string): string {
  const countryData = getAllCountries().find(c => c.country === country);
  return countryData?.region || '';
}

export function handleRegionChange(region: string): string {
  if (region) {
    const countriesInRegion = getCountriesByRegion(region);
    return countriesInRegion.length > 0 ? countriesInRegion[0].country : '';
  }
  const allCountries = getAllCountries();
  return allCountries.length > 0 ? allCountries[0].country : '';
}

// New utility functions for your planned features
export function getCheapestCountriesByMonth(month: string): FlightPattern[] {
  const allCountries = getAllFlightPatterns();
  return allCountries
    .filter(country => country.cheapestMonths.includes(month))
    .sort((a, b) => a.averagePrice - b.averagePrice);
}

export function getMostExpensiveMonthForCountry(countryName: string): string | null {
  const country = getCurrentFlightData(countryName);
  if (!country || !country.expensiveMonths || country.expensiveMonths.length === 0) {
    return null;
  }
  return country.expensiveMonths[0];
}

// Utility for loading state
export function simulateLoading(delay: number = 500): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, delay));
}