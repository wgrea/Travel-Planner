// /src/lib/data/countries/europe/caucasus/armenia.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const armeniaFlightPattern: FlightPattern = {
  country: "Armenia",
  cities: ["Yerevan", "Gyumri", "Dilijan"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["July", "August"],
  sweetSpot: ["April", "May", "September", "October"],
  averagePrice: 850,
  planningTips: ["Visa-free for many nationalities", "Domestic travel is affordable"],
  notes: "Ancient Christian heritage and mountainous landscapes"
};

export const armeniaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      region: "Europe",           // ← MAIN REGION
      subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
          region: "Europe",           // ← MAIN REGION
    subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
          region: "Europe",           // ← MAIN REGION
    subregion: "Caucasus",      // ← SUBREGION (optional)
    }
};