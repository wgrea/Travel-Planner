// src/lib/types/minimalData.ts
// NO IMPORTS - just type definitions
// Unless necessary, avoid making a masterData.ts file

export interface Country {
  id: string;
  name: string;
  continent: string;
  region: string;
  popularCities: string[];
  visa: {
    difficulty: 'easy' | 'medium' | 'hard';
  };
  costs: {
    tier: 'low' | 'medium' | 'high';
  };
  filters: {
    activities: string[];
  };
  seasonality: {
    bestMonths: number[];
    worstMonths: number[];
  };
}

export interface City {
  id: string;
  name: string;
  countryCode: string;
  costTier: 'low' | 'medium' | 'high';
  vibe: string[];
  alternativeType?: string;
  nearbyCities?: string[];
}

export interface Filters {
  continents: string[];
  regions: string[];
  activities: string[];
  costTiers: string[];
  visaDifficulties: string[];
}

export interface MinimalData {
  countries: Record<string, Country>;
  cities: Record<string, City>;
  filters: Filters;
}