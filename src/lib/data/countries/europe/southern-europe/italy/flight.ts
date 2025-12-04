//src/lib/data/countries/europe/southern-europe/italy.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const italyFlightPattern: FlightPattern = {
  country: "Italy",
  cities: ["Rome", "Florence", "Venice"],
  cheapestMonths: ["November", "January"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["April", "May", "September"],
  averagePrice: 900,
  alternativeRoutes: "Fly to Milan instead of Rome for better deals",
  planningTips: ["Train travel is efficient between cities"],
  notes: "Coastal areas crowded in summer, cities hot in August"
};

// Assuming this is part of a larger flight.ts file
export const italyRouteCost: RouteCostData = {
  // FROM: Italy | TO: United States
  'United States': {
    economy: 550,
    business: 1400,
    season: 'Peak: Summer (Jun-Aug), Shoulder: Spring/Fall, Off: Winter',
    bestTimeToBook: '3-5 months in advance for summer, 2-3 months for off-season',
    airports: ['FCO', 'MXP', 'LIN'],
    airlines: ['Alitalia (ITA Airways)', 'Delta', 'American', 'United']
  },
  
  // FROM: Italy | TO: United Kingdom
  'United Kingdom': {
    economy: 120,
    business: 350,
    season: 'Peak: Summer, Shoulder: Spring/Fall, Off: Winter',
    bestTimeToBook: '1-2 months in advance',
    airports: ['FCO', 'MXP', 'VCE', 'BLQ'],
    airlines: ['British Airways', 'EasyJet', 'Ryanair', 'Alitalia (ITA Airways)']
  },
  
  // FROM: Italy | TO: France
  'France': {
    economy: 80,
    business: 250,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['FCO', 'MXP', 'VCE', 'BLQ'],
    airlines: ['Air France', 'EasyJet', 'Ryanair', 'Alitalia (ITA Airways)']
  },
  
  // FROM: Italy | TO: Germany
  'Germany': {
    economy: 90,
    business: 280,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['FCO', 'MXP', 'VCE', 'BLQ'],
    airlines: ['Lufthansa', 'Eurowings', 'Ryanair', 'Alitalia (ITA Airways)']
  },
  
  // FROM: Italy | TO: Spain
  'Spain': {
    economy: 70,
    business: 220,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['FCO', 'MXP', 'VCE', 'BLQ'],
    airlines: ['Iberia', 'Vueling', 'Ryanair', 'Alitalia (ITA Airways)']
  },
  
  // FROM: Italy | TO: Greece
  'Greece': {
    economy: 100,
    business: 300,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '2-3 months in advance for summer',
    airports: ['FCO', 'MXP', 'VCE'],
    airlines: ['Aegean Airlines', 'Alitalia (ITA Airways)', 'Ryanair', 'EasyJet']
  },
  
  // FROM: Italy | TO: Switzerland
  'Switzerland': {
    economy: 110,
    business: 320,
    season: 'Year-round with winter/summer peaks',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MXP', 'LIN', 'VCE'],
    airlines: ['SWISS', 'EasyJet', 'Alitalia (ITA Airways)']
  },
  
  // FROM: Italy | TO: Austria
  'Austria': {
    economy: 95,
    business: 280,
    season: 'Year-round with winter/summer peaks',
    bestTimeToBook: '1-2 months in advance',
    airports: ['VCE', 'MXP', 'FCO'],
    airlines: ['Austrian Airlines', 'Ryanair', 'Alitalia (ITA Airways)']
  },
  
  // FROM: Italy | TO: Netherlands
  'Netherlands': {
    economy: 100,
    business: 310,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['FCO', 'MXP', 'VCE'],
    airlines: ['KLM', 'Transavia', 'EasyJet', 'Alitalia (ITA Airways)']
  },
  
  // FROM: Italy | TO: Portugal
  'Portugal': {
    economy: 120,
    business: 350,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['FCO', 'MXP'],
    airlines: ['TAP Portugal', 'Ryanair', 'EasyJet']
  },
  
  // FROM: Italy | TO: Turkey
  'Turkey': {
    economy: 150,
    business: 400,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '2-3 months in advance',
    airports: ['FCO', 'MXP'],
    airlines: ['Turkish Airlines', 'Pegasus Airlines', 'Alitalia (ITA Airways)']
  },
  
  // FROM: Italy | TO: Morocco
  'Morocco': {
    economy: 140,
    business: 380,
    season: 'Year-round with winter peak',
    bestTimeToBook: '2-3 months in advance',
    airports: ['FCO', 'MXP'],
    airlines: ['Royal Air Maroc', 'Ryanair', 'EasyJet']
  },
  
  // FROM: Italy | TO: Israel
  'Israel': {
    economy: 180,
    business: 450,
    season: 'Year-round with peak during holidays',
    bestTimeToBook: '2-3 months in advance',
    airports: ['FCO', 'MXP'],
    airlines: ['El Al', 'Alitalia (ITA Airways)', 'EasyJet']
  },
  
  // FROM: Italy | TO: Egypt
  'Egypt': {
    economy: 160,
    business: 420,
    season: 'Peak: Winter, Shoulder: Spring/Fall',
    bestTimeToBook: '2-3 months in advance',
    airports: ['FCO', 'MXP'],
    airlines: ['EgyptAir', 'Neos', 'Alitalia (ITA Airways)']
  },
  
  // FROM: Italy | TO: Japan
  'Japan': {
    economy: 750,
    business: 1800,
    season: 'Peak: Cherry Blossom (Mar-May) & Fall, Shoulder: Summer',
    bestTimeToBook: '3-5 months in advance',
    airports: ['FCO', 'MXP'],
    airlines: ['Alitalia (ITA Airways)', 'ANA', 'Japan Airlines', 'Lufthansa']
  }
};