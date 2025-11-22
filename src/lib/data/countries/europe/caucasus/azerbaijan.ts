// /src/lib/data/countries/europe/caucasus/azerbaijan.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
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

export const azerbaijanData: Record<string, VisaInfo> = {
    'United States': {
      ease: "E-Visa available",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 25,
      applicationTime: "3 business days",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60,
          region: "Europe",           // ← MAIN REGION
    subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "30 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "single",
          region: "Europe",           // ← MAIN REGION
    subregion: "Caucasus",      // ← SUBREGION (optional)
    },
    'United Kingdom': {
      ease: "E-Visa available",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 25,
      applicationTime: "3 business days",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60,
          region: "Europe",           // ← MAIN REGION
    subregion: "Caucasus",      // ← SUBREGION (optional)
    }
};