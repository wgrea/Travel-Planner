// src/lib/data/visa/destinations/south-asia/sirLanka.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const sriLankaFlightPattern: FlightPattern = {
  country: "Sri Lanka",
  cities: ["Colombo", "Kandy", "Galle"],
  cheapestMonths: ["May", "June", "September", "October"],
  expensiveMonths: ["December", "January"],
  sweetSpot: ["January", "February", "March"],
  averagePrice: 1000,
  planningTips: ["Train travel is scenic and affordable"],
  notes: "Known for beaches and heritage sites, compact island nation"
};

export const sirLankaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Fully online ETA portal",
      freeLength: "30 days",
      workPolicy: "Digital Nomad Visa (1 year)",
      nomadVisa: true,
      incomeReq: "Not clearly defined",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "24-48 hours",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Fully online ETA portal",
      freeLength: "30 days",
      workPolicy: "Digital Nomad Visa (1 year)",
      nomadVisa: true,
      incomeReq: "Not clearly defined",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "24-48 hours",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Fully online ETA portal",
      freeLength: "30 days",
      workPolicy: "Digital Nomad Visa (1 year)",
      nomadVisa: true,
      incomeReq: "Not clearly defined",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "24-48 hours",
      entryType: "multiple"
    }
};