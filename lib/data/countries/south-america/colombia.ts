// src/lib/data/visa/destinations/south-america/colombia.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { NomadData } from '$lib/data/nomadData';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const colombiaFlightPattern: FlightPattern = {
  country: "Colombia",
  cities: ["Bogotá", "Medellín", "Cartagena"],
  cheapestMonths: ["April", "May", "September", "October"],
  expensiveMonths: ["December", "January", "June", "July"],
  sweetSpot: ["February", "March", "August", "November"],
  averagePrice: 650,
  planningTips: ["Domestic flights are affordable"],
  notes: "Weather varies by region and altitude"
};

export const colombiaNomadData: NomadData = {
  country: 'Colombia',
  internet: {
    speed: 60,
    reliability: 7,
    coworkingSpaces: 28
  },
  costs: {
    coworkingMonthly: 160,
    simCardMonthly: 12,
    coffeeShopWork: 8
  },
  community: {
    expatSize: 7,
    englishLevel: 4,
    safety: 6
  }
};

export const colombiaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$900/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$900/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$900/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};