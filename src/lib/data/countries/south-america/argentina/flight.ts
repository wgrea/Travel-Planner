// src/lib/data/visa/destinations/south-america/argentina/flight.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { FlightCostData  } from '$lib/types/flight';

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

export const argentinaFlightData: FlightCostData = {
  'United States': {
    economy: 700,
    business: 1500,
    season: 'October to March',
    bestTimeToBook: '2-3 months in advance',
    airports: ['EZE', 'AEP'],
    airlines: ['American', 'United', 'Delta', 'Aerolíneas Argentinas']
  },
  'Canada': {
    economy: 850,
    business: 1800,
    season: 'October to March',
    bestTimeToBook: '3-4 months in advance',
    airports: ['EZE'],
    airlines: ['Air Canada', 'American', 'United']
  },
  'United Kingdom': {
    economy: 800,
    business: 1700,
    season: 'October to March',
    bestTimeToBook: '4-5 months in advance',
    airports: ['EZE'],
    airlines: ['British Airways', 'Iberia', 'Air Europa']
  },
  'Australia': {
    economy: 1500,
    business: 3000,
    season: 'October to March',
    bestTimeToBook: '5-6 months in advance',
    airports: ['EZE'],
    airlines: ['Qantas', 'Air New Zealand', 'LATAM']
  },
  'European Union': {
    economy: 750,
    business: 1600,
    season: 'October to March',
    bestTimeToBook: '3-4 months in advance',
    airports: ['EZE'],
    airlines: ['Air France', 'Lufthansa', 'KLM', 'Iberia']
  }
};