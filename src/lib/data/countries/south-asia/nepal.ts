// src/lib/data/visa/destinations/south-asia/nepal.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const nepalFlightPattern: FlightPattern = {
  country: "Nepal",
  cities: ["Kathmandu", "Pokhara", "Chitwan"],
  cheapestMonths: ["January", "February", "June", "July", "August"],
  expensiveMonths: ["October"],
  sweetSpot: ["September", "October", "November"],
  averagePrice: 950,
  planningTips: ["Trekking permits required for popular routes"],
  notes: "Popular for trekking, Himalayan views, spring and fall best for hiking"
};

export const nepalData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    },
    'Germany': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    },
    'United Kingdom': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    }
};