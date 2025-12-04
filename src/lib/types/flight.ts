// src/lib/types/flight.ts

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

export interface RouteCostData {
  [destinationCountry: string]: FlightInfo;
}

export const defaultFlightInfo: FlightInfo = {
  economy: 0,
  business: 0,
  season: 'Unknown',
  bestTimeToBook: 'Check airlines',
  airports: [],
  airlines: []
};