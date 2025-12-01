// src/lib/data/countries/europe/caucasus/georgia/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const georgiaFlightPattern: FlightPattern = {
  country: "Georgia",
  cities: ["Tbilisi", "Batumi", "Kutaisi", "Mtskheta", "Sighnaghi"],
  cheapestMonths: ["January", "February", "March", "November", "December"],
  expensiveMonths: ["June", "July", "August", "September"],
  sweetSpot: ["April", "May", "October"],
  averagePrice: 500,
  alternativeRoutes: "Fly to Istanbul (IST) or Warsaw (WAW) first, then budget airline to Georgia",
  planningTips: [
    "Book 2-3 months in advance for best prices",
    "Wizz Air offers cheap flights from many European cities to Kutaisi",
    "Turkish Airlines has good connections via Istanbul",
    "Consider different airports: TBS (Tbilisi), KUT (Kutaisi), BUS (Batumi)"
  ],
  notes: "Low-cost carriers have made Georgia much more accessible, especially from Europe"
};

export const georgiaRouteCost: RouteCostData = {
  'United States': {
    economy: 700,
    business: 1800,
    season: 'May-September (best weather), December-February (skiing)',
    bestTimeToBook: '3-4 months in advance',
    airports: ['TBS', 'KUT'],
    airlines: ['Turkish Airlines', 'Qatar Airways', 'Lufthansa', 'Air France']
  },
  'United Kingdom': {
    economy: 250,
    business: 700,
    season: 'May-September',
    bestTimeToBook: '2-3 months in advance',
    airports: ['TBS', 'KUT', 'BUS'],
    airlines: ['Wizz Air', 'Turkish Airlines', 'Georgian Airways', 'Pegasus Airlines']
  },
  'Germany': {
    economy: 200,
    business: 600,
    season: 'All year',
    bestTimeToBook: '2-3 months in advance',
    airports: ['TBS', 'KUT'],
    airlines: ['Wizz Air', 'Lufthansa', 'Turkish Airlines', 'Georgian Airways']
  },
  'France': {
    economy: 220,
    business: 650,
    season: 'May-September',
    bestTimeToBook: '2-3 months in advance',
    airports: ['TBS'],
    airlines: ['Air France', 'Turkish Airlines', 'Georgian Airways']
  },
  'Poland': {
    economy: 150,
    business: 450,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['KUT', 'TBS'],
    airlines: ['Wizz Air', 'LOT Polish Airlines', 'Ryanair']
  },
  'Turkey': {
    economy: 100,
    business: 300,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['TBS', 'BUS', 'KUT'],
    airlines: ['Turkish Airlines', 'Pegasus Airlines', 'Georgian Airways']
  },
  'United Arab Emirates': {
    economy: 300,
    business: 800,
    season: 'All year',
    bestTimeToBook: '2-3 months in advance',
    airports: ['TBS'],
    airlines: ['Flydubai', 'Qatar Airways', 'Georgian Airways']
  },
  'Russia': {
    economy: 150,
    business: 400,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['TBS', 'BUS'],
    airlines: ['Aeroflot', 'S7 Airlines', 'Georgian Airways']
  },
  'Israel': {
    economy: 200,
    business: 550,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['TBS'],
    airlines: ['Arkia', 'Georgian Airways', 'Israir']
  },
  'Ukraine': {
    economy: 120,
    business: 350,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['TBS', 'KUT'],
    airlines: ['Ukraine International Airlines', 'Windrose Airlines', 'Georgian Airways']
  }
};