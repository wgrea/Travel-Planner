// src/lib/data/countries/east-asia/taiwan.ts

import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const taiwanFlightPattern: FlightPattern = {
  country: "Taiwan",
  cities: ["Taipei", "Kaohsiung", "Taichung"],
  cheapestMonths: ["November", "December", "January", "February"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["March", "April", "May", "September", "October"],
  averagePrice: 1050,
  planningTips: ["Excellent public transportation system"],
  notes: "Vibrant metropolitan culture with great food scene"
};