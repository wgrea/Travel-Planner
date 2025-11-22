// src/lib/data/visa/destinations/south-america/brazil.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const brazilFlightPattern: FlightPattern = {
  country: "Brazil",
  cities: ["Rio de Janeiro", "São Paulo", "Salvador"],
  cheapestMonths: ["May", "June"],
  expensiveMonths: ["December", "January", "February"],
  sweetSpot: ["March", "April", "July", "August", "September"],
  averagePrice: 1100,
  planningTips: ["Domestic flights can be expensive, book in advance"],
  notes: "Rio and Sao Paulo as main hubs, vast country with diverse climates"
};

export const brazilData: Record<string, VisaInfo> = {
      'United States': {
      ease: "Online with consulate visit",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa (1 year)",
      nomadVisa: true,
      incomeReq: "$1,500/month or savings",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa (1 year)",
      nomadVisa: true,
      incomeReq: "$1,500/month or savings",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa (1 year)",
      nomadVisa: true,
      incomeReq: "$1,500/month or savings",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};