//src/lib/data/countries/europe/caucasus/czechRepublic.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const czechRepublicFlightPattern: FlightPattern = {
  country: "Czech Republic",
  cities: ["Prague", "Brno", "Český Krumlov"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["April", "May", "September", "October"],
  averagePrice: 750,
  planningTips: ["Prague is main hub", "Excellent train connections"],
  notes: "Beautiful architecture and rich history"
};

export const czechRepublicData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Freelance Visa (Zivno) available",
      nomadVisa: true,
      incomeReq: "~$6,000 in bank account",
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
      workPolicy: "Freelance Visa (Zivno) available",
      nomadVisa: true,
      incomeReq: "~$6,000 in bank account",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};