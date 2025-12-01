// src/lib/data/countries/southeast-asia/vietnam/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const vietnamFlightPattern: FlightPattern = {
  country: "Vietnam",
  cities: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hoi An", "Ha Long", "Nha Trang"],
  cheapestMonths: ["May", "June", "September"],
  expensiveMonths: ["December", "January", "February"],
  sweetSpot: ["March", "April", "October", "November"],
  averagePrice: 750,
  alternativeRoutes: "Fly to Bangkok (BKK) or Singapore (SIN) first, then take budget airline to Vietnam",
  planningTips: [
    "Book 2-3 months in advance for best prices",
    "Avoid Tet holiday (late Jan/early Feb) for lower prices",
    "Check both HAN (Hanoi) and SGN (Ho Chi Minh) airports"
  ],
  notes: "Domestic flights within Vietnam are very affordable on airlines like VietJet Air and Bamboo Airways"
};

export const vietnamRouteCost: RouteCostData = {
  'United States': {
    economy: 850,
    business: 2400,
    season: 'November to April (dry season)',
    bestTimeToBook: '3-4 months in advance',
    airports: ['HAN', 'SGN', 'DAD'],
    airlines: ['Vietnam Airlines', 'Korean Air', 'Japan Airlines', 'Qatar Airways', 'United Airlines']
  },
  'Canada': {
    economy: 950,
    business: 2600,
    season: 'November to April',
    bestTimeToBook: '4-5 months in advance',
    airports: ['HAN', 'SGN'],
    airlines: ['Air Canada', 'Vietnam Airlines', 'Cathay Pacific', 'Korean Air']
  },
  'United Kingdom': {
    economy: 650,
    business: 1800,
    season: 'November to April',
    bestTimeToBook: '2-3 months in advance',
    airports: ['HAN', 'SGN'],
    airlines: ['Vietnam Airlines', 'British Airways', 'Qatar Airways', 'Emirates']
  },
  'Australia': {
    economy: 450,
    business: 1400,
    season: 'All year (avoid monsoon season Oct-Dec in central regions)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['HAN', 'SGN'],
    airlines: ['Vietnam Airlines', 'Qantas', 'Singapore Airlines', 'Malaysia Airlines']
  },
  'Singapore': {
    economy: 150,
    business: 400,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['HAN', 'SGN', 'DAD', 'PQC'],
    airlines: ['Vietnam Airlines', 'VietJet Air', 'Singapore Airlines', 'Scoot']
  },
  'Thailand': {
    economy: 100,
    business: 300,
    season: 'All year',
    bestTimeToBook: '2-4 weeks in advance',
    airports: ['HAN', 'SGN', 'DAD'],
    airlines: ['Vietnam Airlines', 'VietJet Air', 'Thai Airways', 'Bangkok Airways']
  },
  'Japan': {
    economy: 350,
    business: 1000,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['HAN', 'SGN', 'DAD'],
    airlines: ['Vietnam Airlines', 'Japan Airlines', 'ANA', 'Peach Aviation']
  },
  'South Korea': {
    economy: 300,
    business: 900,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['HAN', 'SGN', 'DAD'],
    airlines: ['Vietnam Airlines', 'Korean Air', 'Asiana Airlines', 'Jeju Air']
  },
  'China': {
    economy: 250,
    business: 700,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['HAN', 'SGN', 'DAD'],
    airlines: ['Vietnam Airlines', 'China Southern', 'Air China', 'Spring Airlines']
  },
  'Malaysia': {
    economy: 120,
    business: 350,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['HAN', 'SGN', 'DAD'],
    airlines: ['Vietnam Airlines', 'VietJet Air', 'Malaysia Airlines', 'AirAsia']
  }
};