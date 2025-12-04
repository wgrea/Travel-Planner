// src/lib/data/countries/central-america/panama/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const panamaFlightPattern: FlightPattern = {
  country: "Panama",
  cities: ["Panama City", "Bocas del Toro", "Boquete", "San Blas Islands"],
  cheapestMonths: ["May", "June", "September", "October"],
  expensiveMonths: ["December", "January", "Carnival season"],
  sweetSpot: ["March", "April", "November"],
  averagePrice: 600,
  alternativeRoutes: "Often cheaper to fly to San José, Costa Rica first",
  planningTips: [
    "Panama City has excellent flight connections",
    "Domestic flights to islands can be pricey - book early"
  ],
  notes: "US dollars accepted, modern infrastructure"
};

export const panamaRouteCost: RouteCostData = {
  // FROM: Panama | TO: United States
  'United States': {
    economy: 420,
    business: 950,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '2-4 months in advance',
    airports: ['PTY'],
    airlines: ['Copa', 'American', 'United']
  },
  'Canada': {
    economy: 500,
    business: 1100,
    season: 'Winter peak',
    bestTimeToBook: '3-4 months in advance',
    airports: ['PTY'],
    airlines: ['Air Canada', 'Copa']
  },
  'Costa Rica': {
    economy: 150,
    business: 350,
    season: 'year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['PTY'],
    airlines: ['Copa', 'Volaris']
  },
  'Colombia': {
    economy: 120,
    business: 300,
    season: 'year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['PTY'],
    airlines: ['Copa', 'Avianca', 'Viva Air']
  }
};
