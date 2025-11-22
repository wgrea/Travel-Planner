// src/lib/data/visa/destinations/south-america/chile.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const chileFlightPattern: FlightPattern = {
  country: "Chile",
  cities: ["Santiago", "Valparaíso", "Puerto Natales"],
  cheapestMonths: ["May", "June", "July"],
  expensiveMonths: ["December", "January"],
  sweetSpot: ["March", "April", "September", "October"],
  averagePrice: 1100,
  planningTips: ["Country is very long north to south, plan accordingly"],
  notes: "Famous for Patagonia and deserts, diverse geography"
};

export const chileData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Temporary Residence for remote work",
      nomadVisa: true,
      incomeReq: "$1,800/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Temporary Residence for remote work",
      nomadVisa: true,
      incomeReq: "$1,800/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Temporary Residence for remote work",
      nomadVisa: true,
      incomeReq: "$1,800/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};