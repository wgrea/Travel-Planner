// src/lib/data/visa/destinations/southeastAsia/indonesia.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { NomadData } from '$lib/data/nomadData';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const indonesiaFlightPattern: FlightPattern = {
  country: "Indonesia",
  cities: ["Bali", "Jakarta", "Yogyakarta"],
  cheapestMonths: ["January", "February", "October"],
  expensiveMonths: ["July", "August", "December"],
  sweetSpot: ["April", "May", "September"],
  averagePrice: 900,
  planningTips: ["Domestic flights are very cheap"],
  notes: "Bali is most expensive, other islands more affordable"
};

export const indonesiaNomadData: NomadData = {
  country: 'Indonesia',
  internet: {
    speed: 55,
    reliability: 6,
    coworkingSpaces: 35
  },
  costs: {
    coworkingMonthly: 180,
    simCardMonthly: 12,
    coffeeShopWork: 7
  },
  community: {
    expatSize: 8,
    englishLevel: 5,
    safety: 7
  }
};

export const indonesiaData: Record<string, VisaInfo> = {
  "United States": {
    ease: "Visa-free for 30 days",
    freeLength: "30 days (non-extendable)",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: false,
    incomeReq: "Not applicable",
    category: "Easy",
    region: "Southeast Asia",
    duration: 30,
    cost: 0,
    applicationTime: "Visa-free",
    entryType: "single",
    extensionsPossible: false,
    extensionDuration: 0
  },
  "Germany": {
    ease: "Visa-free for 30 days",
    freeLength: "30 days",
    workPolicy: "No local work allowed",
    nomadVisa: false,
    incomeReq: "Not applicable",
    category: "Easy",
    region: "Southeast Asia",
    duration: 30,
    cost: 0,
    applicationTime: "Visa-free",
    entryType: "single",
    extensionsPossible: false,
    extensionDuration: 0
  }
};