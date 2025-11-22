//src/lib/data/countries/europe/southern-europe/italy.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const italyFlightPattern: FlightPattern = {
  country: "Italy",
  cities: ["Rome", "Florence", "Venice"],
  cheapestMonths: ["November", "January"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["April", "May", "September"],
  averagePrice: 900,
  alternativeRoutes: "Fly to Milan instead of Rome for better deals",
  planningTips: ["Train travel is efficient between cities"],
  notes: "Coastal areas crowded in summer, cities hot in August"
};

export const italyData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Self-employment Visa available",
      nomadVisa: true,
      incomeReq: "~$3,500/month",
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
      incomeReq: "~$3,500/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};