// src/lib/data/countries/southeast-asia/indonesia/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const indonesiaFlightPattern: FlightPattern = {
  country: "Indonesia",
  cities: ["Bali", "Jakarta", "Yogyakarta", "Lombok", "Surabaya"],
  cheapestMonths: ["January", "February", "September", "October"],
  expensiveMonths: ["July", "August", "December"],
  sweetSpot: ["March", "April", "May", "June", "November"],
  averagePrice: 850,
  alternativeRoutes: "Fly to Singapore (SIN) or Kuala Lumpur (KUL) first, then budget airline to Indonesia",
  planningTips: [
    "Book 2-3 months in advance for best prices",
    "Avoid peak seasons (July-Aug, Christmas/New Year)",
    "Consider different airports: DPS (Bali), CGK (Jakarta), JOG (Yogyakarta)"
  ],
  notes: "Domestic flights between islands are essential and affordable on airlines like Garuda Indonesia and Lion Air"
};

export const indonesiaRouteCost: RouteCostData = {
  'United States': {
    economy: 900,
    business: 2500,
    season: 'May to September (dry season in Bali)',
    bestTimeToBook: '3-4 months in advance',
    airports: ['DPS', 'CGK', 'JOG'],
    airlines: ['Garuda Indonesia', 'Singapore Airlines', 'Qatar Airways', 'Cathay Pacific']
  },
  'Canada': {
    economy: 1000,
    business: 2700,
    season: 'May to September',
    bestTimeToBook: '4-5 months in advance',
    airports: ['DPS', 'CGK'],
    airlines: ['Garuda Indonesia', 'Air Canada', 'Korean Air', 'Japan Airlines']
  },
  'United Kingdom': {
    economy: 700,
    business: 2000,
    season: 'May to September',
    bestTimeToBook: '3-4 months in advance',
    airports: ['DPS', 'CGK'],
    airlines: ['Garuda Indonesia', 'British Airways', 'Qatar Airways', 'Emirates']
  },
  'Australia': {
    economy: 400,
    business: 1200,
    season: 'All year (best Apr-Oct)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DPS', 'CGK'],
    airlines: ['Garuda Indonesia', 'Qantas', 'Jetstar', 'Virgin Australia']
  },
  'Singapore': {
    economy: 150,
    business: 450,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DPS', 'CGK', 'JOG', 'LOP'],
    airlines: ['Garuda Indonesia', 'Singapore Airlines', 'Lion Air', 'AirAsia']
  },
  'Malaysia': {
    economy: 120,
    business: 350,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DPS', 'CGK', 'JOG'],
    airlines: ['Garuda Indonesia', 'AirAsia', 'Malaysia Airlines', 'Batavia Air']
  },
  'Thailand': {
    economy: 180,
    business: 500,
    season: 'All year',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DPS', 'CGK'],
    airlines: ['Garuda Indonesia', 'Thai Airways', 'AirAsia', 'Lion Air']
  },
  'Japan': {
    economy: 500,
    business: 1500,
    season: 'All year',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DPS', 'CGK'],
    airlines: ['Garuda Indonesia', 'Japan Airlines', 'ANA', 'Singapore Airlines']
  },
  'South Korea': {
    economy: 450,
    business: 1300,
    season: 'All year',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DPS', 'CGK'],
    airlines: ['Garuda Indonesia', 'Korean Air', 'Asiana Airlines', 'Jeju Air']
  },
  'China': {
    economy: 350,
    business: 1000,
    season: 'All year',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DPS', 'CGK'],
    airlines: ['Garuda Indonesia', 'China Southern', 'Air China', 'XiamenAir']
  }
};