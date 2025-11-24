// src/lib/data/countries/north-america/mexico.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const mexicoFlightPattern: FlightPattern = {
  country: "Mexico",
  cities: ["Cozumel", "Cancún", "Mexico City"],
  cheapestMonths: ["May", "June", "September", "October"],
  expensiveMonths: ["December", "January"],
  sweetSpot: ["November", "December", "January", "February", "March", "April"],
  averagePrice: 450,
  planningTips: ["Many budget airlines serve Mexican destinations from US"],
  notes: "Inexpensive from US due to proximity, great for beach vacations"
};

export const mexicoData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free for tourism",
      freeLength: "180 days",
      workPolicy: "Temporary Resident Visa for remote work",
      nomadVisa: true,
      incomeReq: "~$2,600/month or savings",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free for tourism",
      freeLength: "180 days",
      workPolicy: "Temporary Resident Visa for remote work",
      nomadVisa: true,
      incomeReq: "~$2,600/month or savings",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free for tourism",
      freeLength: "180 days",
      workPolicy: "Temporary Resident Visa for remote work",
      nomadVisa: true,
      incomeReq: "~$2,600/month or savings",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};