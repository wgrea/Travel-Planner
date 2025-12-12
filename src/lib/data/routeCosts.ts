// src/lib/data/routeCosts.ts
// Depends entirely on where you're flying FROM

// flight costs based on where you are at needs to be added.

import type { RouteCostData } from '$lib/types/flight';
import { panamaRouteCost } from './countries/central-america/panama/index';
import { argentinaRouteCost } from './countries/south-america/argentina/index';
import { brazilRouteCost } from './countries/south-america/brazil/index';
import { canadaRouteCost } from './countries/north-america/canada';
import { unitedStatesRouteCost } from './countries/north-america/united-states/index';
import { thailandRouteCost } from './countries/southeast-asia/thailand/index';
import { vietnamRouteCost } from './countries/southeast-asia/vietnam/index';
import { indonesiaRouteCost } from './countries/southeast-asia/indonesia/index';
import { portugalRouteCost } from './countries/europe/western-europe/portugal/index';
import { spainRouteCost } from './countries/europe/western-europe/spain/index';
import { georgiaRouteCost } from './countries/europe/caucasus/georgia/index';
import { azerbaijanRouteCost } from './countries/europe/caucasus/azerbaijan/index';
import { mexicoRouteCost } from './countries/north-america/mexico/index';
import { turkeyRouteCost } from './countries/europe/southern-europe/turkey/index';
import { greeceRouteCost } from './countries/europe/southern-europe/greece/index';
// Countries we've completed (add these to your imports):
import { japanRouteCost } from './countries/east-asia/japan/index';
import { italyRouteCost } from './countries/europe/southern-europe/italy/index';
import { franceRouteCost } from './countries/europe/western-europe/france/index';
import { laosRouteCost } from './countries/southeast-asia/laos/index';
import { indiaRouteCost } from './countries/south-asia/india/index';
import { bangladeshRouteCost} from './countries/south-asia/bangladesh/index';
import { nepalRouteCost } from './countries/south-asia/nepal/index';
import { moroccoRouteCost } from './countries/northern-africa/morocco/index';
import { ukRouteCost } from './countries/europe/western-europe/united-kingdom/index';

export const routeCosts: Record<string, RouteCostData> = {
  // Origin: Canada | Contains destinations FROM Canada TO other countries
  "Canada": canadaRouteCost,
  // Origin: Mexico | Contains flights FROM Mexico TO other countries
  "Mexico": mexicoRouteCost,  // Mexico → various destinations 
  // Origin: United States | Contains flights FROM USA TO other countries
  "United States": unitedStatesRouteCost,  // USA → various destinations
  // Origin: Thailand | Contains destinations FROM Thailand TO other countries
  "Thailand": thailandRouteCost,
  // Origin: Vietnam | Contains destinations FROM Vietnam TO other countries
  "Vietnam": vietnamRouteCost,
  // Origin: Indonesia | Contains destinations FROM Indonesia TO other countries
  "Indonesia": indonesiaRouteCost,
  "Panama": panamaRouteCost,
  "Argentina": argentinaRouteCost,
  "Brazil": brazilRouteCost,
  "Portugal": portugalRouteCost,
  "Spain": spainRouteCost,
  "Georgia": georgiaRouteCost,
  "Azerbaijan": azerbaijanRouteCost,
  "Turkey": turkeyRouteCost,
  "Greece": greeceRouteCost,
  "Japan": japanRouteCost,
  "Italy": italyRouteCost,
  "France": franceRouteCost,
  "Laos": laosRouteCost,
  "India": indiaRouteCost,
  "Bangladesh": bangladeshRouteCost,
  "Nepal": nepalRouteCost,
  "Morocco": moroccoRouteCost,
  "United Kingdom": ukRouteCost,
};

// src/lib/data/routeCosts.ts
// Update helper functions to use new type
export function getRoutePrice(origin: string, destination: string) {
  return routeCosts[origin]?.[destination] || null;
}

export function getCheapestDestinations(origin: string, limit: number = 3) {
  const originData = routeCosts[origin];
  if (!originData) return [];
  
  return Object.entries(originData)
    .sort(([, a], [, b]) => a.economy - b.economy)
    .slice(0, limit)
    .map(([destination, data]) => ({ destination, price: data.economy }));
}

export { defaultFlightInfo } from '$lib/types/flight';

// If you need cheapest origins TO a destination, you'd need different logic
export function getCheapestOriginsToDestination(destination: string, limit: number = 3) {
  const results = [];
  
  for (const [origin, originData] of Object.entries(routeCosts)) {
    if (originData[destination]) {
      results.push({
        origin,
        price: originData[destination].economy
      });
    }
  }
  
  return results.sort((a, b) => a.price - b.price).slice(0, limit);
}