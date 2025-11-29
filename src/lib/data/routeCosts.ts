// src/lib/data/routeCosts.ts
// Depends entirely on where you're flying FROM

// flight costs based on where you are at needs to be added.

import type { RouteCostData } from '$lib/types/flight';
import { belizeRouteCost } from './countries/central-america/belize';
import { costaRicaRouteCost } from './countries/central-america/costaRica';
import { guatemalaRouteCost } from './countries/central-america/guatemala';
import { panamaRouteCost } from './countries/central-america/panama';
import { argentinaRouteCost } from './countries/south-america/argentina'; // Make sure to change the name to RouteCost in files from FlightCosts
import { canadaRouteCost } from './countries/north-america/canada';
import { unitedStatesRouteCost } from './countries/north-america/united-states'; // ← Add this

export const routeCosts: Record<string, RouteCostData > = {  // ← Fixed to "routeCosts" (plural)
  "Canada": canadaRouteCost,
  "United States": unitedStatesRouteCost,  // ← Add United States as origin
  "Belize": belizeRouteCost,
  "Costa Rica": costaRicaRouteCost,
  "Guatemala": guatemalaRouteCost,
  "Panama": panamaRouteCost,
  "Argentina": argentinaRouteCost,
  // ... add other countries
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