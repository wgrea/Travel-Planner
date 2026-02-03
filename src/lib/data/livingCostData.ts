// src/lib/data/livingCostData.ts

// When adding new country data, add a good example, this file, and the type file.

import type { RegionData, LivingCostData } from '$lib/types/living-costs';

// Your imports
import { thailandLivingCosts } from './countries/southeast-asia/thailand/index';
import { vietnamLivingCosts } from './countries/southeast-asia/vietnam/index';
import { turkeyLivingCosts } from './countries/southern-europe/turkey/index';
import { greeceLivingCosts } from './countries/southern-europe/greece/index';
import { georgiaLivingCosts } from './countries/caucasus/georgia/index';
import { azerbaijanLivingCosts } from './countries/caucasus/azerbaijan/index';
import { spainLivingCosts } from './countries/western-europe/spain/index';
import { portugalLivingCosts } from './countries/western-europe/portugal/index';
import { argentinaLivingCosts } from './countries/south-america/argentina/index';
import { brazilLivingCosts } from './countries/south-america/brazil/index';
import { panamaLivingCosts } from './countries/central-america/panama/index';
import { unitedStatesLivingCosts } from './countries/north-america/united-states/index';
import { mexicoLivingCosts } from './countries/north-america/mexico/index';
import { indonesiaLivingCosts } from './countries/southeast-asia/indonesia/index';
import { japanLivingCosts } from './countries/east-asia/japan/index';
import { italyLivingCosts } from './countries/southern-europe/italy/index';
import { franceLivingCosts } from './countries/western-europe/france/index';
import { laosLivingCosts } from './countries/southeast-asia/laos/index';
import { indiaLivingCosts } from './countries/south-asia/india/index';
import { bangladeshLivingCosts} from './countries/south-asia/bangladesh/index';
import { nepalLivingCosts } from './countries/south-asia/nepal/index';
import { moroccoLivingCosts } from './countries/northern-africa/morocco/index';
import { ukLivingCosts } from './countries/western-europe/united-kingdom/index';

export const livingCostsByRegion: RegionData[] = [
  {
    region: "Southeast Asia",
    countries: [
      thailandLivingCosts,
      vietnamLivingCosts,
      indonesiaLivingCosts,
      laosLivingCosts
    ]
  },
  {
    region: "South Asia",
    countries: [
      indiaLivingCosts,
      nepalLivingCosts,
      bangladeshLivingCosts,
    ]
  },
  {
    region: "East Asia", 
    countries: [
      japanLivingCosts,
    ]
  },
  {
    region: "Europe",
    subregions: [
      {
        subregion: "Caucasus",
        countries: [
          georgiaLivingCosts,
          azerbaijanLivingCosts,
        ]
      },
      {
        subregion: "Southern Europe",
        countries: [
          turkeyLivingCosts,
          greeceLivingCosts,
          italyLivingCosts,
        ]
      },
      {
        subregion: "Western Europe",
        countries: [
          franceLivingCosts,
          ukLivingCosts,
          spainLivingCosts,
          portugalLivingCosts,
        ]
      }
    ]
  },
  {
    region: "North Africa",
    countries: [
      moroccoLivingCosts
    ]
  },
  {
    region: "North America",
    countries: [
      unitedStatesLivingCosts,
      mexicoLivingCosts,
    ]
  },
  {
    region: "South America",
    countries: [
      argentinaLivingCosts,
      brazilLivingCosts,
    ]
  },
  {
    region: "Central America",
    countries: [
      panamaLivingCosts,
    ]
  },
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