//src/lib/data/countries/europe/northern-europe/estonia.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const estoniaFlightPattern: FlightPattern = {
  country: "Estonia",
  cities: ["Tallinn", "Tartu", "Pärnu"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["May", "June", "September"],
  averagePrice: 850,
  planningTips: ["Ferry connections from Helsinki", "Digital nomad friendly"],
  notes: "Modern digital society with medieval old town"
};

export const estoniaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available (first in world)",
      nomadVisa: true,
      incomeReq: "~$4,500/month",
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
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "~$4,500/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};