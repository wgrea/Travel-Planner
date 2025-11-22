//src/lib/data/countries/europe/northern-europe/sweden.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const swedenFlightPattern: FlightPattern = {
  country: "Sweden",
  cities: ["Stockholm", "Gothenburg", "Malmö"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["May", "June", "September"],
  averagePrice: 1000,
  planningTips: ["Good ferry connections to neighboring countries"],
  notes: "Modern design and natural beauty"
};

export const swedenData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Self-employment Visa available",
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
      workPolicy: "Self-employment Visa available",
      nomadVisa: true,
      incomeReq: "~$2,700/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};