// src/lib/data/visa/destinations/south-america/bolivia.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const boliviaFlightPattern: FlightPattern = {
  country: "Bolivia",
  cities: ["La Paz", "Sucre", "Uyuni"],
  cheapestMonths: ["April", "May", "June", "July", "August", "September", "October"],
  expensiveMonths: ["December", "January"],
  sweetSpot: ["May", "June", "July", "August", "September"],
  averagePrice: 850,
  planningTips: ["Acclimate to high altitude in La Paz"],
  notes: "High altitude travel considerations apply, especially in La Paz"
};

export const boliviaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 160,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};