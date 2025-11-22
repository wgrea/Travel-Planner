// /src/lib/data/countries/central-america/panama.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData } from '$lib/types/flight';
import type { FlightPattern } from '$lib/data/flyData';

export const panamaFlightPattern: FlightPattern = {
  country: "Panama",
  cities: ["Panama City", "Bocas del Toro", "Boquete", "San Blas Islands"],
  cheapestMonths: ["May", "June", "September", "October"],
  expensiveMonths: ["December", "January", "Carnival season"],
  sweetSpot: ["March", "April", "November"],
  averagePrice: 600,
  alternativeRoutes: "Often cheaper to fly to San José, Costa Rica first",
  planningTips: [
    "Panama City has excellent flight connections",
    "Domestic flights to islands can be pricey - book early"
  ],
  notes: "US dollars accepted, modern infrastructure"
};

export const panamaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    }
};

export const panamaFlightData: FlightCostData = {
  'United States': {
    economy: 420,
    business: 950,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '2-4 months in advance',
    airports: ['PTY'],
    airlines: ['Copa', 'American', 'United']
  }
};