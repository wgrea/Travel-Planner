// src/lib/data/livingCostData.ts
import type { LivingCostData } from '$lib/types/living-costs';
import { thailandLivingCosts } from './countries/southeast-asia/thailand';
import { vietnamLivingCosts } from './countries/southeast-asia/vietnam';
import { indiaLivingCosts } from './countries/south-asia/india';
import { nepalLivingCosts } from './countries/south-asia/nepal';
import { japanLivingCosts } from './countries/east-asia/japan';
import { turkeyLivingCosts } from './countries/europe/southern-europe/turkey';
import { georgiaLivingCosts } from './countries/europe/caucasus/georgia';
import { azerbaijanLivingCosts } from './countries/europe/caucasus/azerbaijan';
import { spainLivingCosts } from './countries/europe/western-europe/spain';
import { argentinaLivingCosts } from './countries/south-america/argentina';
import { panamaLivingCosts } from './countries/central-america/panama';
import { unitedStatesLivingCosts } from './countries/north-america/united-states';
// Import other countries as you add them...

export interface SubRegionLivingCosts {
  subregion: string;
  countries: LivingCostData[];
}

export interface RegionData {
  region: string;
  subregions?: SubRegionLivingCosts[]; // Make subregions optional for non-European regions
  countries?: LivingCostData[]; // Make countries optional for European regions
}

export const livingCostsByRegion: RegionData[] = [
  {
    region: "Southeast Asia",
    countries: [
      thailandLivingCosts,
      vietnamLivingCosts,
      // Add other SEA countries...
    ]
  },
  {
    region: "South Asia",
    countries: [
      indiaLivingCosts,
      nepalLivingCosts,
      // Add other South Asia countries...
    ]
  },
  {
    region: "East Asia", 
    countries: [
      japanLivingCosts,
      // Add other East Asia countries...
    ]
  },
  {
    region: "Europe",
    subregions: [
      {
        subregion: "Southern Europe",
        countries: [
          turkeyLivingCosts,
        ]
      },
      {
        subregion: "Caucasus",
        countries: [
          georgiaLivingCosts,
          azerbaijanLivingCosts,
        ]
      },
      {
        subregion: "Western Europe",
        countries: [
          spainLivingCosts,
        ]
      }
    ]
  },
  {
    region: "South America",
    countries: [
      argentinaLivingCosts,
      // Add other South American countries...
    ]
  },
  {
    region: "Central America",
    countries: [
      panamaLivingCosts,
      // Add other Central American countries...
    ]
  },
  {
    region: "North America",
    countries: [
      unitedStatesLivingCosts,
      // Add other North American countries...
    ]
  }
  // Add other regions...
];

// Helper function for currency conversion
export const convertCostToCurrency = (
  amount: number, 
  fromCurrency: string, 
  toCurrency: string,
  exchangeRates: Record<string, number> // rates relative to USD
): number => {
  const usdAmount = amount / exchangeRates[fromCurrency];
  return usdAmount * exchangeRates[toCurrency];
};

// Example exchange rates (you'll want to update these regularly)
export const sampleExchangeRates: Record<string, number> = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  THB: 35,    // 1 USD = 35 THB
  JPY: 110,   // 1 USD = 110 JPY
  VND: 23000, // 1 USD = 23,000 VND
  // Add more currencies as needed
};