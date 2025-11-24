// src/lib/data/countries//europe/western-europe/portugal.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const portugalFlightPattern: FlightPattern = {
  country: "Portugal",
  cities: ["Lisbon", "Porto", "Faro"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["March", "April", "May", "September", "October"],
  averagePrice: 825,
  planningTips: ["Easy train connections between Lisbon and Porto"],
  notes: "Mild climate in spring and fall, great for coastal exploration"
};

export const portugalData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free for 90 days",
      freeLength: "90 days in Schengen area",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "~$3,000/month or savings",
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
      duration: 0, // Unlimited for EU
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free for 90 days",
      freeLength: "90 days in Schengen area",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "~$3,000/month or savings",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: false
    }
};