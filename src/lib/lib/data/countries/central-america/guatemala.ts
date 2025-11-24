// /src/lib/data/countries/central-america/guatemala.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData } from '$lib/types/flight';
import type { FlightPattern } from '$lib/data/flyData';

export const guatemalaFlightPattern: FlightPattern = {
  country: "Guatemala",
  cities: ["Guatemala City", "Antigua", "Lake Atitlán", "Flores"],
  cheapestMonths: ["May", "June", "September", "October"],
  expensiveMonths: ["December", "January", "Easter week"],
  sweetSpot: ["March", "April", "November"],
  averagePrice: 500,
  alternativeRoutes: "Fly to Mexico City first, then bus to Guatemala",
  planningTips: [
    "Antigua is the most popular base for travelers",
    "Domestic flights to Flores for Tikal save time"
  ],
  notes: "Rich Mayan heritage and colonial architecture"
};

export const guatemalaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};

export const guatemalaFlightData: FlightCostData = {
  'United States': {
    economy: 380,
    business: 850,
    season: 'year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GUA'],
    airlines: ['American', 'United', 'Delta']
  }
};