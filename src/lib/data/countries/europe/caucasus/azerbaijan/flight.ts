// /src/lib/data/countries/europe/caucasus/azerbaijan/flight.ts
import type { FlightPattern } from '$lib/data/flyData'; 
import type { FlightCostData  } from '$lib/types/flight';

export const azerbaijanFlightPattern: FlightPattern = {
  country: "Azerbaijan",
  cities: ["Baku", "Ganja", "Sheki"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["July", "August"],
  sweetSpot: ["April", "May", "September", "October"],
  averagePrice: 900,
  planningTips: ["E-visa available online", "Modern infrastructure in Baku"],
  notes: "Mix of modern architecture and ancient history"
};