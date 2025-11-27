// src/lib/types/flight.ts

// Add the CountryCode type to match your other files
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

export interface CountryInfo {
  bestMonth: string;
  cheapestMonth: string;
  cheapestCountryInCheapestMonth: string;
}

export interface CheapestCountry {
  month: string;
  countries: string[];
  avgCost: string;
}

export interface SweetSpot {
  month: string;
  country: string;
  reason: string;
  score: string;
}

export interface ExpensiveCountry {
  month: string;
  country: string;
  avgCost: string;
  peakReason: string;
}

export interface CountryPeakPeriod {
  country: string;
  mostExpensiveMonth: string;
  peakCost: string;
  avoidIfBudget: string;
}

export interface FlightInfo {
  economy: number;
  business: number;
  season?: string;
  bestTimeToBook?: string;
  airports?: string[];
  airlines?: string[];
}

export interface FlightCostData {  // ← RENAMED from FlightData
  [originCountry: string]: FlightInfo;
}

export const defaultFlightInfo: FlightInfo = {
  economy: 0,
  business: 0,
  season: 'Unknown',
  bestTimeToBook: 'Check airlines',
  airports: [],
  airlines: []
};