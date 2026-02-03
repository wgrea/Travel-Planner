// src/lib/data/countries/europe/western-europe/spain/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const spainFlightPattern: FlightPattern = {
  country: "Spain",
  cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga", "Granada", "Bilbao"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August", "December"],
  sweetSpot: ["March", "April", "May", "September", "October"],
  averagePrice: 600,
  alternativeRoutes: "Fly to London/Paris first, then budget airline to Spain",
  planningTips: [
    "Book 2-3 months in advance for best prices",
    "Avoid peak summer (July-Aug) and Easter for lower prices",
    "Consider flying into different airports: MAD (Madrid), BCN (Barcelona), AGP (Malaga)"
  ],
  notes: "Excellent budget airline connections within Europe, domestic flights also affordable"
};

export const spainRouteCost: RouteCostData = {
  // FROM: Spain | TO: United States
  'United States': {
    economy: 550,
    business: 1600,
    season: 'April-October (peak), November-March (shoulder/off)',
    bestTimeToBook: '3-5 months in advance',
    airports: ['MAD', 'BCN', 'AGP'],
    airlines: ['Iberia', 'American Airlines', 'United', 'Delta', 'Air Europa']
  },
   // FROM: Spain | TO: Canada
  'Canada': {
    economy: 650,
    business: 1800,
    season: 'April-October',
    bestTimeToBook: '4-6 months in advance',
    airports: ['MAD', 'BCN'],
    airlines: ['Air Canada', 'Iberia', 'Air Transat']
  },
  'United Kingdom': {
    economy: 100,
    business: 300,
    season: 'All year (cheapest Nov-Feb)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MAD', 'BCN', 'AGP', 'PMI', 'SVQ'],
    airlines: ['British Airways', 'easyJet', 'Ryanair', 'Vueling', 'Jet2']
  },
  'Germany': {
    economy: 120,
    business: 350,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MAD', 'BCN', 'AGP', 'PMI'],
    airlines: ['Lufthansa', 'Ryanair', 'Eurowings', 'Vueling', 'Iberia']
  },
  'France': {
    economy: 80,
    business: 250,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MAD', 'BCN', 'AGP', 'PMI'],
    airlines: ['Air France', 'Vueling', 'Ryanair', 'Transavia', 'Volotea']
  },
  'Italy': {
    economy: 90,
    business: 280,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MAD', 'BCN', 'AGP'],
    airlines: ['Alitalia', 'Vueling', 'Ryanair', 'Iberia']
  },
  'Netherlands': {
    economy: 110,
    business: 320,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MAD', 'BCN', 'AGP', 'PMI'],
    airlines: ['KLM', 'Transavia', 'Ryanair', 'Vueling']
  },
  'Portugal': {
    economy: 70,
    business: 200,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MAD', 'BCN', 'SVQ', 'VLC'],
    airlines: ['TAP Air Portugal', 'Ryanair', 'Iberia', 'Vueling']
  },
  'Ireland': {
    economy: 90,
    business: 270,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MAD', 'BCN', 'AGP', 'PMI'],
    airlines: ['Ryanair', 'Aer Lingus', 'Vueling']
  },
  'Switzerland': {
    economy: 130,
    business: 380,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MAD', 'BCN', 'AGP'],
    airlines: ['Swiss', 'Vueling', 'Ryanair', 'EasyJet']
  }
};