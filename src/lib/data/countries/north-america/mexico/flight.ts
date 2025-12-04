// src/lib/data/countries/north-america/mexico/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const mexicoFlightPattern: FlightPattern = {
  country: "Mexico",
  cities: ["Mexico City", "Cancún", "Guadalajara", "Monterrey", "Los Cabos", "Puerto Vallarta"],
  cheapestMonths: ["May", "June", "September", "October"],
  expensiveMonths: ["December", "January", "March", "July", "August"],
  sweetSpot: ["April", "May", "October", "November"],
  averagePrice: 400,
  alternativeRoutes: "Fly to border cities first (San Diego, El Paso, McAllen), then cross by land",
  planningTips: [
    "Book 1-2 months in advance for best prices",
    "Avoid Spring Break (March) and Christmas holidays for lower prices",
    "Consider flying into different airports: MEX (Mexico City), CUN (Cancún), GDL (Guadalajara)"
  ],
  notes: "Many budget airlines fly within Mexico, domestic flights are affordable if booked in advance"
};

export const mexicoRouteCost: RouteCostData = {
   // FROM: Mexico | TO: United States
  'United States': {
    economy: 250,
    business: 700,
    season: 'All year, peak Dec-Apr for beach destinations',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MEX', 'CUN', 'GDL', 'MTY', 'SJD', 'PVR'],
    airlines: ['American Airlines', 'United', 'Delta', 'Volaris', 'Aeroméxico', 'Spirit', 'Frontier']
  },
  'Canada': {
    economy: 350,
    business: 900,
    season: 'Dec-Apr for winter sun destinations',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CUN', 'PVR', 'SJD', 'MEX'],
    airlines: ['Air Canada', 'WestJet', 'Aeroméxico', 'Sunwing', 'Air Transat']
  },
  'United Kingdom': {
    economy: 600,
    business: 1600,
    season: 'Nov-Apr for best weather',
    bestTimeToBook: '3-4 months in advance',
    airports: ['CUN', 'MEX'],
    airlines: ['British Airways', 'Virgin Atlantic', 'Aeroméxico']
  },
  'Germany': {
    economy: 550,
    business: 1500,
    season: 'Nov-Apr',
    bestTimeToBook: '3-4 months in advance',
    airports: ['CUN', 'MEX'],
    airlines: ['Lufthansa', 'Condor', 'Aeroméxico']
  },
  'Spain': {
    economy: 500,
    business: 1300,
    season: 'All year',
    bestTimeToBook: '2-3 months in advance',
    airports: ['MEX', 'CUN'],
    airlines: ['Iberia', 'Air Europa', 'Aeroméxico']
  },
  'France': {
    economy: 580,
    business: 1550,
    season: 'Nov-Apr',
    bestTimeToBook: '3-4 months in advance',
    airports: ['CUN', 'MEX'],
    airlines: ['Air France', 'Aeroméxico']
  },
  'Argentina': {
    economy: 700,
    business: 1800,
    season: 'All year',
    bestTimeToBook: '2-3 months in advance',
    airports: ['MEX', 'CUN'],
    airlines: ['Aeroméxico', 'LATAM', 'Aerolíneas Argentinas']
  },
  'Colombia': {
    economy: 300,
    business: 800,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MEX', 'CUN', 'MTY'],
    airlines: ['Aeroméxico', 'Viva Aerobus', 'Volaris', 'Avianca']
  },
  'Chile': {
    economy: 650,
    business: 1700,
    season: 'All year',
    bestTimeToBook: '2-3 months in advance',
    airports: ['MEX', 'CUN'],
    airlines: ['Aeroméxico', 'LATAM']
  },
  'Brazil': {
    economy: 750,
    business: 2000,
    season: 'All year',
    bestTimeToBook: '3-4 months in advance',
    airports: ['MEX', 'CUN'],
    airlines: ['Aeroméxico', 'LATAM']
  }
};