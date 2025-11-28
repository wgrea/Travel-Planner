// src/lib/data/flightCosts.ts
// Depends entirely on where you're flying FROM

// flight costs based on where you are at needs to be added.

import type { FlightCostData  } from '$lib/types/flight';
// rest of the countries repeat
import { belizeFlightData } from './countries/central-america/belize';
import { costaRicaFlightData } from './countries/central-america/costaRica';
import { guatemalaFlightData } from './countries/central-america/guatemala';
import { panamaFlightData } from './countries/central-america/panama';
import { argentinaFlightData } from './countries/south-america/argentina';


export const flightData: Record<string, FlightCostData > = {
  "Belize": belizeFlightData,
  "Costa Rica": costaRicaFlightData,
  "Guatemala": guatemalaFlightData,
  "Panama": panamaFlightData,
  "Argentina": argentinaFlightData,
  // ... add other countries
};


export { defaultFlightInfo } from '$lib/types/flight'; // Could do the same for types/visa.ts if this works
