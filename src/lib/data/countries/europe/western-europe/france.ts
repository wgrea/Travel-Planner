//src/lib/data/countries/europe/western-europe/france.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const franceFlightPattern: FlightPattern = {
  country: "France",
  cities: ["Paris", "Lyon", "Nice"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["April", "May", "September", "October"],
  averagePrice: 950,
  planningTips: ["Regional airports often cheaper than Paris", "Excellent train network"],
  notes: "Diverse regions from Alps to Mediterranean"
};

export const franceData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Long-stay Visa for remote work",
      nomadVisa: true,
      incomeReq: "~$2,700/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
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
      workPolicy: "Long-stay Visa for remote work",
      nomadVisa: true,
      incomeReq: "~$2,700/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};