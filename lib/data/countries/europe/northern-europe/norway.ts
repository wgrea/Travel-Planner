//src/lib/data/countries/europe/northern-europe/norway.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const norwayFlightPattern: FlightPattern = {
  country: "Norway",
  cities: ["Oslo", "Bergen", "Tromsø"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["May", "June", "September"],
  averagePrice: 1100,
  planningTips: ["Domestic flights can be expensive", "Consider overnight trains"],
  notes: "Fjords and northern lights, high cost of living"
};

export const norwayData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Independent Contractor Visa available",
      nomadVisa: true,
      incomeReq: "~$3,800/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Freedom of movement (EU/EEA)",
      freeLength: "Unlimited",
      workPolicy: "No restrictions for EU/EEA citizens",
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
      workPolicy: "Independent Contractor Visa available",
      nomadVisa: true,
      incomeReq: "~$3,800/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};