// src/lib/data/countries/middle-east/egypt.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const egyptFlightPattern: FlightPattern = {
  country: "Egypt",
  cities: ["Cairo", "Luxor", "Hurghada"],
  cheapestMonths: ["May", "June", "July", "August"],
  expensiveMonths: ["December", "January"],
  sweetSpot: ["October", "November", "December", "January", "February", "March", "April"],
  averagePrice: 750,
  planningTips: ["Domestic flights and trains connect major sites"],
  notes: "Noted for diving in Red Sea and ancient Egyptian sites"
};