// src/lib/data/livingCostData.ts

// When adding new country data, add a good example, this file, and the type file.

import type { RegionData, LivingCostData } from '$lib/types/living-costs';

// Your imports
import { thailandLivingCosts } from './countries/southeast-asia/thailand';
import { vietnamLivingCosts } from './countries/southeast-asia/vietnam';
import { turkeyLivingCosts } from './countries/europe/southern-europe/turkey';
import { greeceLivingCosts } from './countries/europe/southern-europe/greece';
import { georgiaLivingCosts } from './countries/europe/caucasus/georgia';
import { azerbaijanLivingCosts } from './countries/europe/caucasus/azerbaijan';
import { spainLivingCosts } from './countries/europe/western-europe/spain';
import { portugalLivingCosts } from './countries/europe/western-europe/portugal';
import { argentinaLivingCosts } from './countries/south-america/argentina';
import { brazilLivingCosts } from './countries/south-america/brazil';
import { panamaLivingCosts } from './countries/central-america/panama';
import { unitedStatesLivingCosts } from './countries/north-america/united-states';
import { mexicoLivingCosts } from './countries/north-america/mexico';
import { indonesiaLivingCosts } from './countries/southeast-asia/indonesia';
import { japanLivingCosts } from './countries/east-asia/japan';
import { italyLivingCosts } from './countries/europe/southern-europe/italy';
import { franceLivingCosts } from './countries/europe/western-europe/france';
import { laosLivingCosts } from './countries/southeast-asia/laos';
import { indiaLivingCosts } from './countries/south-asia/india';
import { bangladeshLivingCosts} from './countries/south-asia/bangladesh';
import { nepalLivingCosts } from './countries/south-asia/nepal';
import { moroccoLivingCosts } from './countries/northern-africa/morocco';
import { ukLivingCosts } from './countries/europe/western-europe/united-kingdom';

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