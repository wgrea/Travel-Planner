// src/lib/utils/dataUpdater.ts
import type { Country } from '../types/minimalData';
import { minimalData } from '../data/minimalData';

export interface CountryUpdate {
  countryId: string;
  updates: {
    costs?: Partial<Country['costs']>;
    visa?: Partial<Country['visa']>;
    seasonality?: Partial<Country['seasonality']>;
    filters?: Partial<Country['filters']>;
  };
  source: string;
  timestamp: string;
}

export function updateCountryData(update: CountryUpdate) {
  const existing = minimalData.countries[update.countryId];
  if (existing) {
    minimalData.countries[update.countryId] = {
      ...existing,
      ...update.updates,
      costs: { ...existing.costs, ...update.updates.costs },
      visa: { ...existing.visa, ...update.updates.visa },
      seasonality: update.updates.seasonality ? { 
        ...existing.seasonality, 
        ...update.updates.seasonality 
      } : existing.seasonality,
      filters: { ...existing.filters, ...update.updates.filters }
      // Remove lastUpdated line
    };
  }
}