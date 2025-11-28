import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { FlightCostData  } from '$lib/types/flight';

export const thailandFlightPattern: FlightPattern = {
  country: "Thailand",
  cities: ["Bangkok", "Phuket", "Chiang Mai"],
  cheapestMonths: ["May", "June", "September"],
  expensiveMonths: ["December", "January"], 
  sweetSpot: ["February", "March", "October", "November"],
  averagePrice: 800,
  alternativeRoutes: "Fly to Kuala Lumpur first, then budget airline to Bangkok",
  planningTips: ["Book 2-3 months in advance", "Avoid Songkran festival in April"],
  notes: "Islands are more expensive than northern cities"
};


export const thailandFlightData: FlightCostData = {
  'United States': {
    economy: 900,
    business: 2500,
    season: 'November to February',
    bestTimeToBook: '4-5 months in advance',
    airports: ['BKK', 'DMK'],
    airlines: ['Thai Airways', 'Singapore Airlines', 'Qatar Airways', 'Emirates']
  },
  'Canada': {
    economy: 1000,
    business: 2700,
    season: 'November to February',
    bestTimeToBook: '5-6 months in advance',
    airports: ['BKK'],
    airlines: ['Air Canada', 'Korean Air', 'Japan Airlines']
  }
};