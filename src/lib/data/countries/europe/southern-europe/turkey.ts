// src/lib/data/countries/europe/southern-europe/turkey.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const turkeyFlightPattern: FlightPattern = {
  country: "Turkey",
  cities: ["Istanbul", "Cappadocia", "Antalya"],
  cheapestMonths: ["January", "February"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["April", "May", "June", "September", "October", "November"],
  averagePrice: 950,
  planningTips: ["Visa may be required depending on nationality"],
  notes: "Crossroads of Europe and Asia with rich history"
};

export const turkeyData: Record<string, VisaInfo> = {
    'United States': {
      ease: "E-Visa available",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$1,500/month",
      category: "Easy",
      duration: 90,
      cost: 50,
      applicationTime: "24 hours",
      entryType: "multiple",
      extensionsPossible: true
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$1,500/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "E-Visa available",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$1,500/month",
      category: "Easy",
      duration: 90,
      cost: 50,
      applicationTime: "24 hours",
      entryType: "multiple"
    }
};