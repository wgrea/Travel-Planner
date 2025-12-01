// src/lib/data/routeCosts.ts
// Depends entirely on where you're flying FROM

// flight costs based on where you are at needs to be added.

// src/lib/data/routeCosts.ts
import type { RouteCostData } from '$lib/types/flight';
import { belizeRouteCost } from './countries/central-america/belize';
import { costaRicaRouteCost } from './countries/central-america/costaRica';
import { guatemalaRouteCost } from './countries/central-america/guatemala';
import { panamaRouteCost } from './countries/central-america/panama';
import { argentinaRouteCost } from './countries/south-america/argentina';
import { brazilRouteCost } from './countries/south-america/brazil';
import { canadaRouteCost } from './countries/north-america/canada';
import { unitedStatesRouteCost } from './countries/north-america/united-states';
import { thailandRouteCost } from './countries/southeast-asia/thailand';
import { vietnamRouteCost } from './countries/southeast-asia/vietnam';
import { indonesiaRouteCost } from './countries/southeast-asia/indonesia';
// import { laosRouteCost } from './countries/southeast-asia/laos';
import { portugalRouteCost } from './countries/europe/western-europe/portugal';
import { spainRouteCost } from './countries/europe/western-europe/spain';
import { georgiaRouteCost } from './countries/europe/caucasus/georgia';
import { azerbaijanRouteCost } from './countries/europe/caucasus/azerbaijan';
import { mexicoRouteCost } from './countries/north-america/mexico';
// import { colombiaRouteCost } from './countries/south-america/colombia';
// import { turkeyRouteCost } from './countries/europe/southern-europe/turkey';
// import { japanRouteCost } from './countries/east-asia/japan';
// import { southKoreaRouteCost } from './countries/east-asia/south-korea';
// import { taiwanRouteCost } from './countries/east-asia/taiwan';
// import { indiaRouteCost } from './countries/south-asia/india';
// import { nepalRouteCost } from './countries/south-asia/nepal';

export const routeCosts: Record<string, RouteCostData> = {
  "Canada": canadaRouteCost,
  "United States": unitedStatesRouteCost,
  "Belize": belizeRouteCost,
  "Costa Rica": costaRicaRouteCost,
  "Guatemala": guatemalaRouteCost,
  "Panama": panamaRouteCost,
  "Argentina": argentinaRouteCost,
  "Brazil": brazilRouteCost,
  "Thailand": thailandRouteCost,
  "Vietnam": vietnamRouteCost,
  "Indonesia": indonesiaRouteCost,
  "Portugal": portugalRouteCost,
  "Spain": spainRouteCost,
  "Georgia": georgiaRouteCost,
  "Azerbaijan": azerbaijanRouteCost,
  "Mexico": mexicoRouteCost,
  // "Laos": laosRouteCost,
  // "Colombia": colombiaRouteCost,
  // "Turkey": turkeyRouteCost,
  // "Japan": japanRouteCost,
  // "South Korea": southKoreaRouteCost,
  // "Taiwan": taiwanRouteCost,
  // "India": indiaRouteCost,
  // "Nepal": nepalRouteCost
};

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