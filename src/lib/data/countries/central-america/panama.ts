// /src/lib/data/countries/central-america/panama.ts
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData } from '$lib/types/flight';

export const panamaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "180 days",
      workPolicy: "Short-Stay Visa for Remote Work",
      nomadVisa: true,
      incomeReq: "$3,000/month",
      category: "Moderate",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    }
};

export const panamaFlightData: FlightCostData = {
  'United States': {
    economy: 420,
    business: 950,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '2-4 months in advance',
    airports: ['PTY'],
    airlines: ['Copa', 'American', 'United']
  }
};