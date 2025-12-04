// src/lib/data/countries/middle-east/morocco/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const moroccoFlightPattern: FlightPattern = {
  country: "Morocco",
  cities: ["Casablanca", "Marrakech", "Rabat", "Fes", "Tangier", "Agadir"],
  cheapestMonths: ["January", "February", "November", "December"],
  expensiveMonths: ["July", "August", "April", "October"],
  sweetSpot: ["March", "April", "May", "September", "October"],
  averagePrice: 650,
  planningTips: [
    "Book 2-3 months in advance for European routes",
    "Consider low-cost carriers from Europe for best deals",
    "Ramadan period offers lower prices but limited services",
    "Marrakech and Casablanca are main international gateways"
  ],
  notes: "Well-connected to Europe with many low-cost options. Good hub for North Africa travel"
};

export const moroccoRouteCost: RouteCostData = {
  // FROM: Morocco | TO: France
  'France': {
    economy: 120,
    business: 350,
    season: 'Peak: Summer (Jun-Aug) & Holidays, Shoulder: Spring/Fall',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CMN', 'RAK', 'AGA', 'FEZ'],
    airlines: ['Air France', 'Ryanair', 'EasyJet', 'Royal Air Maroc']
  },
  
  // FROM: Morocco | TO: Spain
  'Spain': {
    economy: 80,
    business: 250,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CMN', 'RAK', 'TNG', 'AGA'],
    airlines: ['Iberia', 'Ryanair', 'Vueling', 'Air Europa', 'Royal Air Maroc']
  },
  
  // FROM: Morocco | TO: United Kingdom
  'United Kingdom': {
    economy: 150,
    business: 400,
    season: 'Peak: Summer & Holidays',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CMN', 'RAK', 'AGA'],
    airlines: ['British Airways', 'EasyJet', 'Ryanair', 'Royal Air Maroc']
  },
  
  // FROM: Morocco | TO: Germany
  'Germany': {
    economy: 180,
    business: 450,
    season: 'Peak: Summer',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CMN', 'RAK', 'FEZ'],
    airlines: ['Lufthansa', 'Eurowings', 'Ryanair', 'Royal Air Maroc']
  },
  
  // FROM: Morocco | TO: Italy
  'Italy': {
    economy: 140,
    business: 380,
    season: 'Year-round with summer peak',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CMN', 'RAK'],
    airlines: ['Alitalia (ITA Airways)', 'Ryanair', 'EasyJet', 'Royal Air Maroc']
  },
  
  // FROM: Morocco | TO: Netherlands
  'Netherlands': {
    economy: 160,
    business: 420,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CMN', 'RAK'],
    airlines: ['KLM', 'Transavia', 'Ryanair', 'Royal Air Maroc']
  },
  
  // FROM: Morocco | TO: Belgium
  'Belgium': {
    economy: 150,
    business: 400,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CMN', 'RAK'],
    airlines: ['Brussels Airlines', 'Ryanair', 'Royal Air Maroc']
  },
  
  // FROM: Morocco | TO: United States
  'United States': {
    economy: 700,
    business: 1700,
    season: 'Peak: Summer & Holidays',
    bestTimeToBook: '3-5 months in advance',
    airports: ['CMN'],
    airlines: ['Royal Air Maroc', 'Air France', 'Iberia', 'Turkish Airlines']
  },
  
  // FROM: Morocco | TO: Canada
  'Canada': {
    economy: 750,
    business: 1800,
    season: 'Peak: Summer',
    bestTimeToBook: '3-5 months in advance',
    airports: ['CMN'],
    airlines: ['Royal Air Maroc', 'Air France', 'Air Canada']
  },
  
  // FROM: Morocco | TO: United Arab Emirates
  'United Arab Emirates': {
    economy: 450,
    business: 1100,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CMN', 'RAK'],
    airlines: ['Emirates', 'Etihad', 'Royal Air Maroc', 'Qatar Airways']
  },
  
  // FROM: Morocco | TO: Turkey
  'Turkey': {
    economy: 250,
    business: 600,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CMN', 'RAK'],
    airlines: ['Turkish Airlines', 'Pegasus Airlines', 'Royal Air Maroc']
  },
  
  // FROM: Morocco | TO: Tunisia
  'Tunisia': {
    economy: 200,
    business: 500,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CMN', 'RAK'],
    airlines: ['Royal Air Maroc', 'Tunisair', 'Nouvelair']
  },
  
  // FROM: Morocco | TO: Algeria
  'Algeria': {
    economy: 180,
    business: 450,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CMN', 'OUD'],
    airlines: ['Royal Air Maroc', 'Air Algérie']
  },
  
  // FROM: Morocco | TO: Egypt
  'Egypt': {
    economy: 300,
    business: 700,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CMN'],
    airlines: ['EgyptAir', 'Royal Air Maroc', 'Turkish Airlines']
  },
  
  // FROM: Morocco | TO: Saudi Arabia
  'Saudi Arabia': {
    economy: 400,
    business: 950,
    season: 'Year-round with Hajj peak',
    bestTimeToBook: '3-4 months in advance for Hajj',
    airports: ['CMN'],
    airlines: ['Saudia', 'Royal Air Maroc', 'Qatar Airways']
  },
  
  // FROM: Morocco | TO: Senegal
  'Senegal': {
    economy: 350,
    business: 850,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CMN'],
    airlines: ['Royal Air Maroc', 'Air Senegal', 'Air France']
  }
};