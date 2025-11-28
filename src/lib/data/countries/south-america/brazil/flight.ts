// src/lib/data/countries/south-america/brazil/flight.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { FlightCostData  } from '$lib/types/flight';

export const brazilFlightPattern: FlightPattern = {
  country: "Brazil",
  cities: ["Rio de Janeiro", "São Paulo", "Salvador"],
  cheapestMonths: ["May", "June"],
  expensiveMonths: ["December", "January", "February"],
  sweetSpot: ["March", "April", "July", "August", "September"],
  averagePrice: 1100,
  planningTips: ["Domestic flights can be expensive, book in advance"],
  notes: "Rio and Sao Paulo as main hubs, vast country with diverse climates"
};