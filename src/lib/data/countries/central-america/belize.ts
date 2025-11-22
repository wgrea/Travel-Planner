// /src/lib/data/countries/central-america/belize.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight'; // ← ADD THIS IMPORT
import type { FlightPattern } from '$lib/data/flyData';

export const belizeFlightPattern: FlightPattern = {
  country: "Belize",
  cities: ["Belize City", "San Pedro", "Caye Caulker"],
  cheapestMonths: ["May", "June", "September", "October"],
  expensiveMonths: ["December", "January", "February"],
  sweetSpot: ["March", "April", "November"],
  averagePrice: 450,
  alternativeRoutes: "Fly to Cancun first, then bus/taxi to Belize",
  planningTips: ["Small country, easy to get around", "Domestic flights available to islands"],
  notes: "English speaking country, great for diving and beaches"
};

export const belizeData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 30
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 30
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 30
    }
};

// NEW - matches your visa pattern
export const belizeFlightData: FlightCostData  = {
  'United States': {
    economy: 350,
    business: 800,
    season: 'year-round',
    bestTimeToBook: '3-4 months in advance',
    airports: ['BZE'],
    airlines: ['American', 'United', 'Delta']
  },
  'Canada': {
    economy: 450,
    business: 950
  }
};

// So when you add living costs, and digital nomad information, leave them here