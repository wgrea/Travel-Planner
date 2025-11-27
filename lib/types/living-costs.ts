// src/lib/types/living-costs.ts

// Updated with ALL your countries
export type CountryCode = 
  | 'Argentina'
  | 'Armenia'
  | 'Australia'
  | 'Azerbaijan'
  | 'Belize'
  | 'Bolivia'
  | 'Brazil'
  | 'Canada'
  | 'Chile'
  | 'China'
  | 'Colombia'
  | 'Costa Rica'
  | 'Croatia'
  | 'Czech Republic'
  | 'Estonia'
  | 'France'
  | 'Georgia'
  | 'Germany'
  | 'Greece'
  | 'Guatemala'
  | 'India'
  | 'Indonesia'
  | 'Italy'
  | 'Japan'
  | 'Malaysia'
  | 'Mexico'
  | 'Nepal'
  | 'New Zealand'
  | 'Norway'
  | 'Panama'
  | 'Peru'
  | 'Philippines'
  | 'Poland'
  | 'Portugal'
  | 'Romania'
  | 'Slovenia'
  | 'South Korea'
  | 'Spain'
  | 'Sri Lanka'
  | 'Sweden'
  | 'Thailand'
  | 'Turkey'
  | 'United Arab Emirates'
  | 'United States'
  | 'Vietnam';

export type TravelStyle = 'budget' | 'midrange' | 'luxury';
export type AccommodationType = 'hostel' | 'guesthouse' | 'hotel' | 'apartment' | 'luxury';

// Make all nested interfaces partial to allow overrides
export interface TransportationCosts {
  localBus?: number;
  taxi?: number;
  intercityBus?: number;
  train?: number;
}

export interface FoodCosts {
  streetFood?: number;
  restaurantMeal?: number;
  groceryWeekly?: number;
}

export interface AccommodationBudget {
  hostel?: number;
  budgetHotel?: number;
  guesthouse?: number;
}

export interface AccommodationMidrange {
  hotel?: number;
  apartment?: number;
  boutiqueHotel?: number;
}

export interface AccommodationLuxury {
  hotel?: number;
  resort?: number;
  villa?: number;
}

export interface MonthlyRent {
  studio?: number;
  oneBedroom?: number;
  threeBedroom?: number;
}

export interface AccommodationCosts {
  budget?: AccommodationBudget;
  midrange?: AccommodationMidrange;
  luxury?: AccommodationLuxury;
  monthlyRent?: MonthlyRent;
}

export interface DailyLivingBreakdown {
  food?: number;
  transport?: number;
  activities?: number;
  misc?: number;
}

export interface DailyLivingCosts {
  budget?: number;
  midrange?: number;
  luxury?: number;
  breakdown?: DailyLivingBreakdown;
}

export interface BaseCosts {
  accommodation?: AccommodationCosts;
  dailyLiving?: DailyLivingCosts;
  transportation?: TransportationCosts;
  food?: FoodCosts;
}

export interface CityData {
  baseCosts: BaseCosts;  // All properties are optional now
  tips?: string[];
}

export interface LivingCostData {
  country: string;
  countryCode: CountryCode;
  currency: string;
  lastUpdated: string;
  
  // Country-level data
  baseCosts: BaseCosts;  // All properties are optional now
  tips?: string[];
  bestAreas?: {
    budget: string[];
    midrange: string[];
    luxury: string[];
  };
  
  // City-specific data
  cities: {
    [cityName: string]: CityData;
  };
}
// For component usage (simplified version)
export interface CountryData {
  country: string;
  region: string;
  cities: string[];
  averagePrice?: number;
}

export interface CityCostData {
  baseCosts?: BaseCosts;
  dailyLiving?: {
    budget: number;
    midrange: number;
    luxury: number;
  };
  [key: string]: any;
}