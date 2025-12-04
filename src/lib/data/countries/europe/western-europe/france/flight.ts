//src/lib/data/countries/europe/western-europe/france.ts
import type { FlightPattern } from '$lib/data/flightPatternData';  // ← Import from flyData.ts
import type { FlightCostData  } from '$lib/types/flight';

export const franceFlightPattern: FlightPattern = {
  country: "France",
  cities: ["Paris", "Lyon", "Nice"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["April", "May", "September", "October"],
  averagePrice: 950,
  planningTips: ["Regional airports often cheaper than Paris", "Excellent train network"],
  notes: "Diverse regions from Alps to Mediterranean"
};

export const franceRouteCost: RouteCostData = {
  // FROM: France | TO: United States
  'United States': {
    economy: 500,
    business: 1400,
    season: 'Peak: Summer (Jun-Aug), Shoulder: Spring/Fall, Off: Winter',
    bestTimeToBook: '3-5 months in advance for summer, 2-3 months for off-season',
    airports: ['CDG', 'ORY'],
    airlines: ['Air France', 'Delta', 'American', 'United']
  },
  
  // FROM: France | TO: United Kingdom
  'United Kingdom': {
    economy: 80,
    business: 250,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CDG', 'ORY', 'LYS', 'NCE'],
    airlines: ['British Airways', 'EasyJet', 'Ryanair', 'Air France']
  },
  
  // FROM: France | TO: Germany
  'Germany': {
    economy: 100,
    business: 300,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CDG', 'ORY', 'LYS'],
    airlines: ['Lufthansa', 'Air France', 'Eurowings', 'Ryanair']
  },
  
  // FROM: France | TO: Spain
  'Spain': {
    economy: 70,
    business: 200,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CDG', 'ORY', 'BOD', 'TLS'],
    airlines: ['Iberia', 'Vueling', 'Ryanair', 'Air France']
  },
  
  // FROM: France | TO: Italy
  'Italy': {
    economy: 90,
    business: 280,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CDG', 'ORY', 'NCE'],
    airlines: ['Alitalia (ITA Airways)', 'Air France', 'EasyJet', 'Ryanair']
  },
  
  // FROM: France | TO: Switzerland
  'Switzerland': {
    economy: 120,
    business: 350,
    season: 'Year-round with winter/summer peaks',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CDG', 'GVA', 'LYS'],
    airlines: ['SWISS', 'Air France', 'EasyJet']
  },
  
  // FROM: France | TO: Belgium
  'Belgium': {
    economy: 60,
    business: 180,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CDG', 'ORY', 'LIL'],
    airlines: ['Air France', 'Brussels Airlines', 'Thalys train often cheaper']
  },
  
  // FROM: France | TO: Netherlands
  'Netherlands': {
    economy: 90,
    business: 280,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CDG', 'ORY'],
    airlines: ['KLM', 'Air France', 'Transavia', 'EasyJet']
  },
  
  // FROM: France | TO: Portugal
  'Portugal': {
    economy: 110,
    business: 320,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CDG', 'ORY', 'BOD'],
    airlines: ['TAP Portugal', 'Air France', 'EasyJet', 'Ryanair']
  },
  
  // FROM: France | TO: Greece
  'Greece': {
    economy: 150,
    business: 400,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '2-3 months in advance for summer',
    airports: ['CDG', 'ORY'],
    airlines: ['Aegean Airlines', 'Air France', 'EasyJet', 'Ryanair']
  },
  
  // FROM: France | TO: Morocco
  'Morocco': {
    economy: 130,
    business: 350,
    season: 'Year-round with winter peak',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CDG', 'ORY', 'MRS'],
    airlines: ['Royal Air Maroc', 'Air France', 'Ryanair', 'EasyJet']
  },
  
  // FROM: France | TO: Algeria
  'Algeria': {
    economy: 160,
    business: 420,
    season: 'Year-round with holiday peaks',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CDG', 'ORY', 'MRS'],
    airlines: ['Air Algérie', 'Air France']
  },
  
  // FROM: France | TO: Tunisia
  'Tunisia': {
    economy: 140,
    business: 380,
    season: 'Year-round with summer peak',
    bestTimeToBook: '2-3 months in advance',
    airports: ['CDG', 'ORY', 'MRS'],
    airlines: ['Tunisair', 'Air France', 'Nouvelair']
  },
  
  // FROM: France | TO: Japan
  'Japan': {
    economy: 800,
    business: 2000,
    season: 'Peak: Cherry Blossom & Fall, Shoulder: Summer',
    bestTimeToBook: '3-5 months in advance',
    airports: ['CDG'],
    airlines: ['Air France', 'ANA', 'Japan Airlines']
  },
  
  // FROM: France | TO: Canada
  'Canada': {
    economy: 550,
    business: 1500,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '3-4 months in advance',
    airports: ['CDG'],
    airlines: ['Air France', 'Air Canada', 'WestJet']
  }
};