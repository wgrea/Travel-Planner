// src/lib/data/countries/europe/caucasus/azerbaijan/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const azerbaijanFlightPattern: FlightPattern = {
  country: "Azerbaijan",
  cities: ["Baku", "Gabala", "Sheki", "Ganja", "Lankaran", "Quba"],
  cheapestMonths: ["January", "February", "March", "November", "December"],
  expensiveMonths: ["May", "June", "July", "August", "September"],
  sweetSpot: ["April", "October"],
  averagePrice: 550,
  alternativeRoutes: "Fly to Istanbul (IST) or Dubai (DXB) first, then connect to Azerbaijan",
  planningTips: [
    "Book 2-3 months in advance for best prices",
    "Azerbaijan Airlines often has good deals",
    "Consider e-visa requirements when booking flights",
    "Main airport is GYD (Heydar Aliyev International Airport in Baku)"
  ],
  notes: "Baku has become a major hub connecting Europe and Asia, with good flight connections"
};

export const azerbaijanRouteCost: RouteCostData = {
  'United States': {
    economy: 800,
    business: 2000,
    season: 'April-June, September-October (best weather)',
    bestTimeToBook: '3-4 months in advance',
    airports: ['GYD'],
    airlines: ['Turkish Airlines', 'Lufthansa', 'Qatar Airways', 'British Airways']
  },
  'United Kingdom': {
    economy: 300,
    business: 800,
    season: 'April-October',
    bestTimeToBook: '2-3 months in advance',
    airports: ['GYD'],
    airlines: ['British Airways', 'Azerbaijan Airlines', 'Turkish Airlines', 'Wizz Air']
  },
  'Germany': {
    economy: 250,
    business: 700,
    season: 'April-October',
    bestTimeToBook: '2-3 months in advance',
    airports: ['GYD'],
    airlines: ['Lufthansa', 'Azerbaijan Airlines', 'Turkish Airlines']
  },
  'Turkey': {
    economy: 120,
    business: 350,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GYD', 'GAN', 'NAJ'],
    airlines: ['Turkish Airlines', 'Azerbaijan Airlines', 'Pegasus Airlines']
  },
  'Russia': {
    economy: 180,
    business: 500,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GYD', 'GAN'],
    airlines: ['Aeroflot', 'Azerbaijan Airlines', 'S7 Airlines']
  },
  'United Arab Emirates': {
    economy: 250,
    business: 700,
    season: 'All year',
    bestTimeToBook: '2-3 months in advance',
    airports: ['GYD'],
    airlines: ['Flydubai', 'Etihad Airways', 'Azerbaijan Airlines']
  },
  'Qatar': {
    economy: 280,
    business: 750,
    season: 'All year',
    bestTimeToBook: '2-3 months in advance',
    airports: ['GYD'],
    airlines: ['Qatar Airways', 'Azerbaijan Airlines']
  },
  'Iran': {
    economy: 150,
    business: 400,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GYD', 'TBZ'],
    airlines: ['Iran Air', 'Azerbaijan Airlines', 'Mahan Air']
  },
  'Ukraine': {
    economy: 140,
    business: 400,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GYD'],
    airlines: ['Ukraine International Airlines', 'Azerbaijan Airlines']
  },
  'Georgia': {
    economy: 80,
    business: 250,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GYD', 'KVD'],
    airlines: ['Buta Airways', 'Georgian Airways', 'Azerbaijan Airlines']
  }
};