// /src/lib/data/countries/east-asia/japan.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const japanFlightPattern: FlightPattern = {
  country: "Japan",
  cities: ["Tokyo", "Osaka", "Kyoto"],
  cheapestMonths: ["January", "February"],
  expensiveMonths: ["April", "November"],
  sweetSpot: ["May", "October"],
  averagePrice: 1200,
  alternativeRoutes: "Fly to Seoul first, then budget airline to Osaka",
  planningTips: ["Book 3-4 months in advance", "Use Google Flights alerts"],
  notes: "Cherry blossom season (April) is most expensive"
};

export const japanData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free for short stays",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
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
      workPolicy: "Work visa required for employment",
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
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};