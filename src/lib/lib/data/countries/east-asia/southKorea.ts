// /src/lib/data/countries/east-asia/southKorea.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const southKoreaFlightPattern: FlightPattern = {
  country: "South Korea",
  cities: ["Seoul", "Busan", "Jeju Island"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["April", "August", "October"],
  sweetSpot: ["May", "June", "September"],
  averagePrice: 1100,
  planningTips: ["Spring and fall have the best weather"],
  notes: "Jeju Island is popular for domestic tourism"
};

export const southKoreaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free (K-ETA required)",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 10, // K-ETA fee
      applicationTime: "72 hours for K-ETA",
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