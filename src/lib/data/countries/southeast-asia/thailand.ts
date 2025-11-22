//src/lib/data/countries/southeast-asia/thailand.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

// FLIGHT PATTERN DATA (new - destination-focused)
export const thailandFlightPattern: FlightPattern  = {
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

export const thailandData: Record<string, VisaInfo> = {
  "United States": {
    ease: "Visa on arrival / Online application",
    freeLength: "30 days (extendable)",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: true,
    incomeReq: "$2,000/month",
    category: "Easy",
    region: "Southeast Asia",
    
    // New fields
    duration: 30,
    cost: 0,
    applicationTime: "On arrival",
    entryType: "single",
    extensionsPossible: true,
    extensionDuration: 30
  },
  "Germany": {
    ease: "Visa-free",
    freeLength: "30 days",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: true,
    incomeReq: "$2,000/month",
    category: "Easy",
    region: "Southeast Asia",
    
    // New fields
    duration: 30,
    cost: 0,
    applicationTime: "Not applicable",
    entryType: "single", 
    extensionsPossible: true,
    extensionDuration: 30
  }
  // Add other home countries...
};

// FLIGHT COST DATA (new - origin-specific)
export const belizeFlightData: FlightCostData  = {
  'United States': {
    economy: 800,
    business: 2000,
    season: 'year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['BKK', 'DMK'],
    airlines: ['Thai Airways', 'United', 'Delta', 'Qatar']
  },
  'United Kingdom': {
    economy: 600,
    business: 1500,
    // ...
  }
  // Add other origin countries...
};