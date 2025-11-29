// src/lib/data/visa/destinations/south-america/argentina/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';  // ← Import from flyData.ts
import type { RouteCostData } from '$lib/types/flight';

export const argentinaFlightPattern: FlightPattern = {
  country: "Argentina",
  cities: ["Buenos Aires", "Mendoza", "Bariloche"],
  cheapestMonths: ["May", "June"],
  expensiveMonths: ["December", "January"],
  sweetSpot: ["March", "April", "September", "October"],
  averagePrice: 1150,
  planningTips: ["Long domestic flights, consider overnight buses"],
  notes: "Diverse climates from Patagonia to Buenos Aires, opposite seasons from Northern Hemisphere"
};

export const argentinaRouteCost: RouteCostData  = {
  'United States': {
    economy: 800,
    business: 1800,
    season: 'Summer peak (Dec-Feb)',
    bestTimeToBook: '4-5 months in advance',
    airports: ['EZE'],
    airlines: ['Aerolineas Argentinas', 'American', 'United']
  },
  'Brazil': {
    economy: 300,
    business: 700,
    season: 'year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['EZE'],
    airlines: ['LATAM', 'Aerolineas Argentinas']
  },
  'Chile': {
    economy: 200,
    business: 500,
    season: 'year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['EZE'],
    airlines: ['LATAM', 'Aerolineas Argentinas', 'Sky Airline']
  },
  'Spain': {
    economy: 900,
    business: 2000,
    season: 'Summer peak',
    bestTimeToBook: '4-5 months in advance',
    airports: ['EZE'],
    airlines: ['Iberia', 'Aerolineas Argentinas', 'Air Europa']
  }
};