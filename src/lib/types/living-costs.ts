// src/lib/types/living-costs.ts - KEEP THIS FILE AS IS
export type TravelStyle = 'budget' | 'midrange' | 'luxury';
export type AccommodationType = 'hostel' | 'guesthouse' | 'hotel' | 'apartment' | 'luxury' | 'boutiqueHotel';

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
  coffee?: number;           // Add this
  waterBottle?: number;      // Add this
  // Add any other common food/drink items
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
  baseCosts: BaseCosts;
  tips?: string[];
}

export interface LivingCostData {
  country: string;
  currency: string;
  lastUpdated: string;
  
  baseCosts: BaseCosts;
  tips?: string[];
  bestAreas?: {
    budget: string[];
    midrange: string[];
    luxury: string[];
  };
  
  cities: {
    [cityName: string]: CityData;
  };
}

export interface SubRegionLivingCosts {
  subregion: string;
  countries: LivingCostData[];
}

export interface RegionData {
  region: string;
  subregions?: SubRegionLivingCosts[];
  countries?: LivingCostData[];
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