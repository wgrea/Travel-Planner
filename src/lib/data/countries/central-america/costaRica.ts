// /src/lib/data/countries/central-america/costaRica.ts
import type { VisaInfo } from '$lib/types/visa';
import type { RouteCostData } from '$lib/types/flight';
import type { FlightPattern } from '$lib/data/flightPatternData';

export const costaRicaFlightPattern: FlightPattern = {
  country: "Costa Rica",
  cities: ["San José", "Liberia", "Tamarindo", "Puerto Viejo"],
  cheapestMonths: ["May", "June", "September", "October"],
  expensiveMonths: ["December", "January", "February"],
  sweetSpot: ["March", "April", "November"],
  averagePrice: 550,
  alternativeRoutes: "Consider flying to Panama first for better deals",
  planningTips: [
    "Fly into Liberia for Pacific coast destinations",
    "Domestic flights connect major destinations quickly"
  ],
  notes: "Eco-tourism hotspot with excellent infrastructure"
};

export const costaRicaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Rentista Visa for remote workers",
      nomadVisa: true,
      incomeReq: "$2,500/month for 2 years",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true,
      extensionDuration: 90
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Rentista Visa for remote workers",
      nomadVisa: true,
      incomeReq: "$2,500/month for 2 years",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true,
      extensionDuration: 90
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Rentista Visa for remote workers",
      nomadVisa: true,
      incomeReq: "$2,500/month for 2 years",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true,
      extensionDuration: 90
    }
};

export const costaRicaRouteCost: RouteCostData = {
  'United States': {
    economy: 400,
    business: 900,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['SJO', 'LIR'],
    airlines: ['American', 'United', 'Delta', 'Spirit']
  },
  'Canada': {
    economy: 450,
    business: 1000,
    season: 'Winter peak',
    bestTimeToBook: '3-4 months in advance',
    airports: ['SJO', 'LIR'],
    airlines: ['Air Canada', 'WestJet']
  },
  'Mexico': {
    economy: 300,
    business: 700,
    season: 'year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['SJO'],
    airlines: ['Aeromexico', 'Volaris']
  }
};