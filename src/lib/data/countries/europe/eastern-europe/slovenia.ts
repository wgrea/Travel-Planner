//src/lib/data/countries/europe/caucasus/slovenia.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const sloveniaFlightPattern: FlightPattern = {
  country: "Slovenia",
  cities: ["Ljubljana", "Bled", "Piran"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["April", "May", "September", "October"],
  averagePrice: 800,
  planningTips: ["Small country, easy to explore", "Close to Italian and Austrian borders"],
  notes: "Alpine scenery and Adriatic coast"
};

export const sloveniaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free for short stays",
      freeLength: "90 days in Schengen area",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "~$2,300/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: false
    },
    'Germany': {
      ease: "Freedom of movement (EU)",
      freeLength: "Unlimited",
      workPolicy: "No restrictions for EU citizens",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 0,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free for 90 days",
      freeLength: "90 days in Schengen area",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "~$2,300/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: false
    }
};