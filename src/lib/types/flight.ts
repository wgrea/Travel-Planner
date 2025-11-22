// src/routes/flight-costs/types/flight.ts

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