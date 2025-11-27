// src/lib/data/countries/south-america/uruguay.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const uruguayFlightPattern: FlightPattern = {
  country: "Uruguay",
  cities: ["Montevideo", "Punta del Este", "Colonia del Sacramento"],
  cheapestMonths: ["January", "February"],
  expensiveMonths: ["December"],
  sweetSpot: ["March", "April", "May"],
  averagePrice: 950,
  planningTips: ["Easy ferry connections from Buenos Aires"],
  notes: "Less touristy than Argentina or Brazil, relaxed atmosphere"
};