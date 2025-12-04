// src/lib/data/countries/southeast-asia/laos.ts
import type { FlightPattern } from '$lib/data/flightPatternData';  // ← Import from flyData.ts
import type { RouteCostData  } from '$lib/types/flight';

export const laosFlightPattern: FlightPattern = {
  country: "Laos",
  cities: ["Vientiane", "Luang Prabang", "Vang Vieng"],
  cheapestMonths: ["April", "May", "June"],
  expensiveMonths: ["December", "January"],
  sweetSpot: ["October", "November", "December", "January", "February", "March"],
  averagePrice: 800,
  planningTips: ["Often combined with Vietnam and Cambodia trips"],
  notes: "Landlocked country with rich cultural heritage"
};

export const laosRouteCost: RouteCostData = {
  // FROM: Laos | TO: Thailand
  'Thailand': {
    economy: 80,
    business: 200,
    season: 'Year-round with slight peak in cool season (Nov-Feb)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['VTE', 'LPQ', 'PKZ'],
    airlines: ['Lao Airlines', 'Bangkok Airways', 'Thai Airways', 'Nok Air']
  },
  
  // FROM: Laos | TO: Vietnam
  'Vietnam': {
    economy: 100,
    business: 250,
    season: 'Year-round with peak in dry season (Nov-Apr)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['VTE', 'LPQ'],
    airlines: ['Lao Airlines', 'Vietnam Airlines', 'VietJet Air']
  },
  
  // FROM: Laos | TO: Cambodia
  'Cambodia': {
    economy: 120,
    business: 300,
    season: 'Year-round with peak in dry season (Nov-Apr)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['VTE'],
    airlines: ['Lao Airlines', 'Cambodia Angkor Air']
  },
  
  // FROM: Laos | TO: Singapore
  'Singapore': {
    economy: 180,
    business: 450,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['VTE'],
    airlines: ['Scoot', 'Singapore Airlines', 'Lao Airlines']
  },
  
  // FROM: Laos | TO: Malaysia
  'Malaysia': {
    economy: 160,
    business: 400,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['VTE'],
    airlines: ['AirAsia', 'Malaysia Airlines', 'Lao Airlines']
  },
  
  // FROM: Laos | TO: China
  'China': {
    economy: 150,
    business: 380,
    season: 'Year-round with peak during holidays',
    bestTimeToBook: '2-3 months in advance for holidays',
    airports: ['VTE', 'LPQ'],
    airlines: ['China Eastern', 'Lao Airlines', 'China Southern']
  },
  
  // FROM: Laos | TO: South Korea
  'South Korea': {
    economy: 350,
    business: 800,
    season: 'Year-round with peak in spring/fall',
    bestTimeToBook: '2-3 months in advance',
    airports: ['VTE'],
    airlines: ['Korean Air', 'Asiana Airlines', 'Lao Airlines via connecting hubs']
  },
  
  // FROM: Laos | TO: Japan
  'Japan': {
    economy: 400,
    business: 950,
    season: 'Peak: Cherry Blossom & Fall, Shoulder: Summer',
    bestTimeToBook: '3-4 months in advance',
    airports: ['VTE'],
    airlines: ['Japan Airlines', 'ANA', 'Lao Airlines via connecting hubs']
  },
  
  // FROM: Laos | TO: Australia
  'Australia': {
    economy: 500,
    business: 1200,
    season: 'Peak: Australian winter (Jun-Aug), Shoulder: Spring/Fall',
    bestTimeToBook: '3-4 months in advance',
    airports: ['VTE'],
    airlines: ['Qantas', 'Jetstar', 'Lao Airlines via connecting hubs']
  },
  
  // FROM: Laos | TO: United States
  'United States': {
    economy: 1100,
    business: 2500,
    season: 'Year-round with slight peak in dry season (Nov-Apr)',
    bestTimeToBook: '4-6 months in advance',
    airports: ['VTE'],
    airlines: ['Qatar Airways', 'Korean Air', 'Japan Airlines', 'Thai Airways via connecting hubs']
  },
  
  // FROM: Laos | TO: United Kingdom
  'United Kingdom': {
    economy: 800,
    business: 1900,
    season: 'Year-round with slight peak in dry season',
    bestTimeToBook: '4-5 months in advance',
    airports: ['VTE'],
    airlines: ['Qatar Airways', 'Emirates', 'Thai Airways via connecting hubs']
  },
  
  // FROM: Laos | TO: France
  'France': {
    economy: 750,
    business: 1800,
    season: 'Year-round with slight peak in dry season',
    bestTimeToBook: '4-5 months in advance',
    airports: ['VTE'],
    airlines: ['Qatar Airways', 'Emirates', 'Thai Airways via connecting hubs']
  },
  
  // FROM: Laos | TO: Germany
  'Germany': {
    economy: 780,
    business: 1850,
    season: 'Year-round with slight peak in dry season',
    bestTimeToBook: '4-5 months in advance',
    airports: ['VTE'],
    airlines: ['Qatar Airways', 'Emirates', 'Lufthansa via connecting hubs']
  }
};