// src/routes/living-costs/components/types.ts
export type TravelStyle = 'budget' | 'midrange' | 'luxury';
export type AccommodationType = 'hostel' | 'guesthouse' | 'hotel' | 'apartment' | 'luxury';

export interface CountryData {
  country: string;
  region: string;
  cities: string[];
  averagePrice?: number;
}

export interface BaseCosts {
  dailyLiving: {
    budget: number;
    midrange: number;
    luxury: number;
  };
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

// Use the same structure as your lib types to avoid conflicts
export interface LivingCostData {
  country: string;
  region?: string;
  currency: string;
  baseCosts: BaseCosts; // Make this required to match usage
  costBreakdown?: {
    accommodation: number | { food: number; transport: number; activities: number; misc: number };
    food: number | { food: number; transport: number; activities: number; misc: number };
    transportation: number | { food: number; transport: number; activities: number; misc: number };
    activities: number | { food: number; transport: number; activities: number; misc: number };
  };
  tips?: string[];
  cities?: {
    [cityName: string]: CityCostData;
  };
}