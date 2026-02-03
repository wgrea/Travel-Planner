// src/lib/data/countries/europe/western-europe/portugal/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const portugalFlightPattern: FlightPattern = {
  country: "Portugal",
  cities: ["Lisbon", "Porto", "Faro", "Madeira", "Azores", "Coimbra", "Braga"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August", "December"],
  sweetSpot: ["March", "April", "May", "September", "October"],
  averagePrice: 550,
  alternativeRoutes: "Fly to London/Madrid first, then budget airline to Portugal",
  planningTips: [
    "Book 2-3 months in advance for best prices",
    "Avoid peak summer (July-Aug) and Easter for lower prices",
    "Consider flying into different airports: LIS (Lisbon), OPO (Porto), FAO (Faro)"
  ],
  notes: "Excellent budget airline connections within Europe, domestic flights to islands can be pricey"
};

export const portugalRouteCost: RouteCostData = {
  'United States': {
    economy: 500,
    business: 1400,
    season: 'April-October (peak), November-March (shoulder/off)',
    bestTimeToBook: '3-5 months in advance',
    airports: ['LIS', 'OPO', 'FAO'],
    airlines: ['TAP Air Portugal', 'United', 'Delta', 'American Airlines', 'Azores Airlines']
  },
  'Canada': {
    economy: 600,
    business: 1600,
    season: 'April-October',
    bestTimeToBook: '4-6 months in advance',
    airports: ['LIS', 'OPO'],
    airlines: ['Air Canada', 'TAP Air Portugal', 'Air Transat']
  },
  'United Kingdom': {
    economy: 80,
    business: 250,
    season: 'All year (cheapest Nov-Feb)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LIS', 'OPO', 'FAO', 'FNC', 'PXO'],
    airlines: ['Ryanair', 'easyJet', 'British Airways', 'TAP Air Portugal', 'Jet2']
  },
  'Germany': {
    economy: 100,
    business: 300,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LIS', 'OPO', 'FAO'],
    airlines: ['Ryanair', 'Lufthansa', 'Eurowings', 'TAP Air Portugal']
  },
  'France': {
    economy: 70,
    business: 220,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LIS', 'OPO', 'FAO'],
    airlines: ['Ryanair', 'Air France', 'Transavia', 'TAP Air Portugal']
  },
  'Spain': {
    economy: 60,
    business: 180,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LIS', 'OPO', 'FAO'],
    airlines: ['Ryanair', 'Vueling', 'Iberia', 'TAP Air Portugal']
  },
  'Netherlands': {
    economy: 90,
    business: 280,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LIS', 'OPO', 'FAO'],
    airlines: ['Transavia', 'KLM', 'Ryanair', 'TAP Air Portugal']
  },
  'Italy': {
    economy: 80,
    business: 240,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LIS', 'OPO'],
    airlines: ['Ryanair', 'easyJet', 'TAP Air Portugal']
  },
  'Ireland': {
    economy: 70,
    business: 220,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LIS', 'OPO', 'FAO'],
    airlines: ['Ryanair', 'Aer Lingus']
  },
  'Switzerland': {
    economy: 110,
    business: 330,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LIS', 'OPO'],
    airlines: ['easyJet', 'Swiss', 'TAP Air Portugal']
  }
};