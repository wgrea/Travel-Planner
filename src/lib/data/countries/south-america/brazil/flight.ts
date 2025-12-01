// src/lib/data/countries/south-america/brazil/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const brazilFlightPattern: FlightPattern = {
  country: "Brazil",
  cities: ["Rio de Janeiro", "São Paulo", "Florianópolis", "Salvador", "Fortaleza"],
  cheapestMonths: ["March", "April", "May", "September", "October"],
  expensiveMonths: ["December", "January", "February", "July"],
  sweetSpot: ["March", "April", "October", "November"],
  averagePrice: 900,
  alternativeRoutes: "Fly to Miami (MIA) or Panama City (PTY) first, then connect to Brazil",
  planningTips: [
    "Book 3-4 months in advance for best prices",
    "Avoid Carnival season (February/March) for lower prices",
    "Consider flying into different airports: GIG (Rio), GRU (São Paulo), FLN (Florianópolis)"
  ],
  notes: "Domestic flights in Brazil are extensive but can be expensive, book in advance for best deals"
};

export const brazilRouteCost: RouteCostData = {
  'United States': {
    economy: 650,
    business: 1800,
    season: 'June to August (winter in Brazil), December-February (summer)',
    bestTimeToBook: '3-5 months in advance',
    airports: ['GIG', 'GRU', 'BSB', 'SSA'],
    airlines: ['LATAM', 'American Airlines', 'United', 'Delta', 'Azul']
  },
  'Canada': {
    economy: 850,
    business: 2200,
    season: 'June to August, December-February',
    bestTimeToBook: '4-6 months in advance',
    airports: ['GRU', 'GIG'],
    airlines: ['Air Canada', 'LATAM', 'American Airlines']
  },
  'United Kingdom': {
    economy: 750,
    business: 2000,
    season: 'June to August, December-February',
    bestTimeToBook: '3-4 months in advance',
    airports: ['GRU', 'GIG'],
    airlines: ['British Airways', 'LATAM', 'TAP Air Portugal']
  },
  'Germany': {
    economy: 700,
    business: 1900,
    season: 'June to August, December-February',
    bestTimeToBook: '3-4 months in advance',
    airports: ['GRU', 'GIG'],
    airlines: ['Lufthansa', 'LATAM', 'TAP Air Portugal']
  },
  'France': {
    economy: 680,
    business: 1850,
    season: 'June to August, December-February',
    bestTimeToBook: '3-4 months in advance',
    airports: ['GRU', 'GIG'],
    airlines: ['Air France', 'LATAM', 'TAP Air Portugal']
  },
  'Spain': {
    economy: 600,
    business: 1600,
    season: 'June to August, December-February',
    bestTimeToBook: '3-4 months in advance',
    airports: ['GRU', 'GIG'],
    airlines: ['Iberia', 'LATAM', 'Air Europa']
  },
  'Portugal': {
    economy: 550,
    business: 1400,
    season: 'All year (direct flights available)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['GRU', 'GIG', 'REC', 'FOR'],
    airlines: ['TAP Air Portugal', 'LATAM', 'Azul']
  },
  'Argentina': {
    economy: 300,
    business: 800,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GRU', 'GIG', 'IGU'],
    airlines: ['LATAM', 'GOL', 'Aerolíneas Argentinas']
  },
  'Chile': {
    economy: 350,
    business: 900,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GRU', 'GIG', 'FLN'],
    airlines: ['LATAM', 'Sky Airline', 'GOL']
  },
  'Uruguay': {
    economy: 250,
    business: 600,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GRU', 'GIG', 'POA'],
    airlines: ['LATAM', 'GOL', 'Azul']
  }
};