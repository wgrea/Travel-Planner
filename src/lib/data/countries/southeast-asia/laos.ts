// src/lib/data/countries/southeast-asia/laos.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const laosFlightPattern: FlightPattern = {
  country: "Laos",
  cities: ["Vientiane", "Luang Prabang", "Vang Vieng"],
  cheapestMonths: ["April", "May", "June"],
  expensiveMonths: ["December", "January"],
  sweetSpot: ["October", "November", "December", "January", "February", "March"],
  averagePrice: 800,
  planningTips: ["Often combined with Vietnam and Cambodia trips"],
  notes: "Landlocked country with rich cultural heritage"
};