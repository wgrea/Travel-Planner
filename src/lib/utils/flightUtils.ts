// src/lib/utils/flightUtils.ts
import { 
  flyDataByRegion, 
  type FlightPattern as FlightPatternType,
  type RegionData,
  type SubRegionData
} from '$lib/data/flightPatternData';

// Update CountryData interface to include subregion
export interface CountryData {
  country: string;
  region: string;
  subregion?: string;
  cities?: string[];
  averagePrice?: number;
  sweetSpot?: string[];
  cheapestMonths?: string[];
}

// Month filtering utility with proper typing
interface FlightPatternWithMonthStatus extends FlightPatternType {
  monthStatus?: 'cheapest' | 'expensive' | 'sweet-spot' | 'normal';
}

// Helper function to get all flight pattern countries (moved from flightPatternData)
function getAllFlightPatterns(): FlightPatternType[] {
  const allCountries: FlightPatternType[] = [];
  
  flyDataByRegion.forEach((regionData: RegionData) => {
    if (regionData.subregions) {
      regionData.subregions.forEach((subregion: SubRegionData) => {
        allCountries.push(...subregion.countries);
      });
    } else if (regionData.countries) {
      allCountries.push(...regionData.countries);
    }
  });
  
  return allCountries;
}

// Helper function to get countries by region
function getFlightPatternsByRegion(regionName: string): FlightPatternType[] {
  const allCountries: FlightPatternType[] = [];
  
  flyDataByRegion.forEach((regionData: RegionData) => {
    if (regionData.region === regionName) {
      if (regionData.subregions) {
        regionData.subregions.forEach((subregion: SubRegionData) => {
          allCountries.push(...subregion.countries);
        });
      } else if (regionData.countries) {
        allCountries.push(...regionData.countries);
      }
    }
  });
  
  return allCountries;
}

export function filterFlightsByMonth(countryName: string, month: string): FlightPatternWithMonthStatus | null {
  const countryData = getCurrentFlightData(countryName);
  if (!countryData) return null;
  
  const isCheapest = countryData.cheapestMonths?.includes(month);
  const isExpensive = countryData.expensiveMonths?.includes(month);
  const isSweetSpot = countryData.sweetSpot?.includes(month);
  
  return {
    ...countryData,
    monthStatus: isCheapest ? 'cheapest' : isExpensive ? 'expensive' : isSweetSpot ? 'sweet-spot' : 'normal'
  };
}

// Baggage pricing utility
export function calculateBaggagePrice(basePrice: number, baggageOption: 'hand' | 'one' | 'multiple'): number {
  const adjustments = {
    hand: -80,    // Only hand luggage
    one: -40,     // One checked bag
    multiple: 0   // Multiple checked bags (default)
  };
  
  return Math.max(0, basePrice + adjustments[baggageOption]);
}

// Booking timeline utility
export function getBookingTimelinePrices(averagePrice: number) {
  const discounts = {
    1: 1.2,   // 20% more expensive
    3: 1.1,   // 10% more expensive
    4: 0.95,  // 5% discount
    5: 0.85,  // 15% discount
    6: 0.9,   // 10% discount
  };
  
  return Object.entries(discounts).map(([months, multiplier]) => ({
    months: parseInt(months),
    price: averagePrice * multiplier,
    label: `${months} month${months === '1' ? '' : 's'} in advance`,
    recommendation: parseInt(months) === 4 || parseInt(months) === 5 ? '⭐ Best Value' : ''
  }));
}

// Subregion utility
export function getCountriesBySubregion(subregionName: string) {
  return getAllCountries().filter(country => country.subregion === subregionName);
}

// Main function to get all countries as CountryData[]
export function getAllCountries(): CountryData[] {
  const allCountries: CountryData[] = [];
  
  flyDataByRegion.forEach((regionData: RegionData) => {
    // Handle Europe with subregions
    if (regionData.subregions) {
      regionData.subregions.forEach((subregion: SubRegionData) => {
        subregion.countries.forEach((flightPattern: FlightPatternType) => {
          allCountries.push({
            country: flightPattern.country,
            region: regionData.region,
            subregion: subregion.subregion,
            cities: flightPattern.cities,
            averagePrice: flightPattern.averagePrice,
            sweetSpot: flightPattern.sweetSpot,
            cheapestMonths: flightPattern.cheapestMonths
          });
        });
      });
    } 
    // Handle all other regions normally
    else if (regionData.countries) {
      regionData.countries.forEach((flightPattern: FlightPatternType) => {
        allCountries.push({
          country: flightPattern.country,
          region: regionData.region,
          cities: flightPattern.cities,
          averagePrice: flightPattern.averagePrice,
          sweetSpot: flightPattern.sweetSpot,
          cheapestMonths: flightPattern.cheapestMonths
        });
      });
    }
  });
  
  return allCountries;
}

export function getCurrentFlightData(selectedCountry: string): FlightPatternType | undefined {
  return getAllFlightPatterns().find(country => country.country === selectedCountry);
}

// NEW: Get countries by region
export function getCountriesByRegion(regionName: string): CountryData[] {
  return getAllCountries().filter(country => country.region === regionName);
}

// NEW: Get all unique regions
export function getAllRegions(): string[] {
  const regions = new Set<string>();
  getAllCountries().forEach(country => regions.add(country.region));
  return Array.from(regions).sort();
}

// NEW: Get all unique subregions for a region
export function getSubregionsForRegion(regionName: string): string[] {
  const subregions = new Set<string>();
  getAllCountries()
    .filter(country => country.region === regionName && country.subregion)
    .forEach(country => {
      if (country.subregion) subregions.add(country.subregion);
    });
  return Array.from(subregions).sort();
}