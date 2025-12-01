// src/lib/data/livingCostData.ts
// src/lib/data/livingCostData.ts
import { thailandLivingCosts } from './countries/southeast-asia/thailand';
import { vietnamLivingCosts } from './countries/southeast-asia/vietnam';
import { indiaLivingCosts } from './countries/south-asia/india';
import { nepalLivingCosts } from './countries/south-asia/nepal';
import { japanLivingCosts } from './countries/east-asia/japan';
import { turkeyLivingCosts } from './countries/europe/southern-europe/turkey';
import { georgiaLivingCosts } from './countries/europe/caucasus/georgia';
import { azerbaijanLivingCosts } from './countries/europe/caucasus/azerbaijan';
import { spainLivingCosts } from './countries/europe/western-europe/spain';
import { portugalLivingCosts } from './countries/europe/western-europe/portugal';
import { argentinaLivingCosts } from './countries/south-america/argentina';
import { brazilLivingCosts } from './countries/south-america/brazil';
import { panamaLivingCosts } from './countries/central-america/panama';
import { unitedStatesLivingCosts } from './countries/north-america/united-states';
import { mexicoLivingCosts } from './countries/north-america/mexico';
// import { colombiaLivingCosts } from './countries/south-america/colombia';
import { indonesiaLivingCosts } from './countries/southeast-asia/indonesia';
// import { laosLivingCosts } from './countries/southeast-asia/laos';
// import { southKoreaLivingCosts } from './countries/east-asia/south-korea';
// import { taiwanLivingCosts } from './countries/east-asia/taiwan';
// import { canadaLivingCosts } from './countries/north-america/canada';
// import { belizeLivingCosts } from './countries/central-america/belize';
// import { costaRicaLivingCosts } from './countries/central-america/costaRica';
// import { guatemalaLivingCosts } from './countries/central-america/guatemala';


export const livingCostsByRegion: RegionData[] = [
  {
    region: "Southeast Asia",
    countries: [
      thailandLivingCosts,
      vietnamLivingCosts,
      indonesiaLivingCosts,
      // laosLivingCosts,
    ]
  },
  {
    region: "South Asia",
    countries: [
      indiaLivingCosts,
      nepalLivingCosts,
    ]
  },
  {
    region: "East Asia", 
    countries: [
      japanLivingCosts,
      // southKoreaLivingCosts,
      // taiwanLivingCosts,
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
          portugalLivingCosts,
        ]
      }
    ]
  },
  {
    region: "South America",
    countries: [
      argentinaLivingCosts,
      brazilLivingCosts,
      // colombiaLivingCosts,
    ]
  },
  {
    region: "Central America",
    countries: [
      panamaLivingCosts,
      // belizeLivingCosts,
      // costaRicaLivingCosts,
      // guatemalaLivingCosts,
    ]
  },
  {
    region: "North America",
    countries: [
      unitedStatesLivingCosts,
      mexicoLivingCosts,
      // canadaLivingCosts,
    ]
  }
];

export interface SubRegionLivingCosts {
  subregion: string;
  countries: LivingCostData[];
}

export interface RegionData {
  region: string;
  subregions?: SubRegionLivingCosts[]; // Make subregions optional for non-European regions
  countries?: LivingCostData[]; // Make countries optional for European regions
}

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