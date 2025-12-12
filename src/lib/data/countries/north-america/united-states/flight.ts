// src/lib/data/countries/north-america/united-states/flight.ts

import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const unitedStatesFlightPattern: FlightPattern = {
  country: "United States",
  cities: ["New York", "Los Angeles", "Chicago", "Miami", "Las Vegas"],
  cheapestMonths: ["January", "February", "September"],
  expensiveMonths: ["June", "July", "December"],
  sweetSpot: ["May", "October"],
  averagePrice: 0, // This will be overridden by flightData
  planningTips: [
    "Consider flying into secondary airports for better deals",
    "Book domestic flights 3-4 weeks in advance for best prices",
    "Use nearby cities as alternatives (e.g., Oakland instead of San Francisco)"
  ]
};

export const unitedStatesRouteCost: RouteCostData = {
  // FROM: United States | TO: Canada
  'Canada': {
    economy: 200,
    business: 500,
    season: 'year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['JFK', 'LAX', 'ORD', 'MIA'],
    airlines: ['American', 'United', 'Delta', 'Air Canada']
  },
  
  // FROM: United States | TO: United Kingdom
  'United Kingdom': {
    economy: 500,
    business: 1100,
    season: 'Summer peak',
    bestTimeToBook: '3-4 months in advance for summer',
    airports: ['JFK', 'LAX', 'ORD'],
    airlines: ['American', 'British Airways', 'United']
  },
  // FROM: United States | TO: Australia
  'Australia': {
    economy: 1100,
    business: 2400,
    season: 'year-round',
    bestTimeToBook: '5-6 months in advance',
    airports: ['LAX', 'SFO', 'JFK'],
    airlines: ['United', 'American', 'Qantas', 'Delta']
  },
  
  // FROM: United States | TO: Mexico
  'Mexico': {
    economy: 300,
    business: 700,
    season: 'year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LAX', 'DFW', 'ORD', 'MIA'],
    airlines: ['American', 'United', 'Delta', 'Aeromexico']
  },
  
  // FROM: United States | TO: Costa Rica
  'Costa Rica': {
    economy: 400,
    business: 900,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['SJO', 'LIR'],
    airlines: ['American', 'United', 'Delta', 'Spirit']
  },
  
  // FROM: United States | TO: Panama
  'Panama': {
    economy: 420,
    business: 950,
    season: 'Dry season (Dec-Apr)',
    bestTimeToBook: '2-4 months in advance',
    airports: ['PTY'],
    airlines: ['Copa', 'American', 'United']
  },
  
  // FROM: United States | TO: Belize
  'Belize': {
    economy: 350,
    business: 800,
    season: 'year-round',
    bestTimeToBook: '3-4 months in advance',
    airports: ['BZE'],
    airlines: ['American', 'United', 'Delta']
  },
  
  // FROM: United States | TO: Guatemala
  'Guatemala': {
    economy: 380,
    business: 850,
    season: 'year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['GUA'],
    airlines: ['American', 'United', 'Delta']
  },
  
  // FROM: United States | TO: Argentina
  'Argentina': {
    economy: 800,
    business: 1800,
    season: 'Summer peak (Dec-Feb)',
    bestTimeToBook: '4-5 months in advance',
    airports: ['EZE'],
    airlines: ['American', 'United', 'Aerolineas Argentinas']
  },
  
  // FROM: United States | TO: Thailand (NEW - Add this!)
  'Thailand': {
    economy: 900,
    business: 2500,
    season: 'November to February',
    bestTimeToBook: '4-5 months in advance',
    airports: ['BKK', 'DMK'],
    airlines: ['Thai Airways', 'Singapore Airlines', 'Qatar Airways', 'Emirates']
  },

   // ===== NEW ADDITIONS BELOW =====
  
  // FROM: United States | TO: Azerbaijan (🌍 in structure)
  'Azerbaijan': {
    economy: 1200,
    business: 2800,
    season: 'Spring (Apr-Jun) and Autumn (Sep-Nov)',
    bestTimeToBook: '3-5 months in advance',
    airports: ['GYD'],
    airlines: ['Turkish Airlines', 'Qatar Airways', 'Lufthansa', 'British Airways']
  },
  
  // FROM: United States | TO: Georgia (🌍 in structure)
  'Georgia': {
    economy: 1100,
    business: 2600,
    season: 'May to October',
    bestTimeToBook: '3-4 months in advance',
    airports: ['TBS'],
    airlines: ['Turkish Airlines', 'Qatar Airways', 'Lufthansa', 'Air France']
  },
  
  // FROM: United States | TO: Portugal (🌍 in structure)
  'Portugal': {
    economy: 600,
    business: 1400,
    season: 'Summer peak (Jun-Aug)',
    bestTimeToBook: '3-5 months in advance',
    airports: ['LIS', 'OPO'],
    airlines: ['TAP Air Portugal', 'United', 'Delta', 'American']
  },
  
  // FROM: United States | TO: Spain (🌍 in structure)
  'Spain': {
    economy: 550,
    business: 1300,
    season: 'Summer peak (Jun-Aug)',
    bestTimeToBook: '3-5 months in advance',
    airports: ['MAD', 'BCN'],
    airlines: ['Iberia', 'American', 'United', 'Delta']
  },
  
  // FROM: United States | TO: Brazil (🌍 in structure)
  'Brazil': {
    economy: 700,
    business: 1600,
    season: 'December to March (Summer)',
    bestTimeToBook: '4-6 months in advance for Carnival',
    airports: ['GRU', 'GIG'],
    airlines: ['LATAM', 'American', 'United', 'Delta']
  },
  
  // FROM: United States | TO: Indonesia (🌍 in structure)
  'Indonesia': {
    economy: 1000,
    business: 2300,
    season: 'Dry season (Apr-Oct)',
    bestTimeToBook: '4-6 months in advance',
    airports: ['CGK', 'DPS'],
    airlines: ['Garuda Indonesia', 'Singapore Airlines', 'Cathay Pacific', 'Qatar Airways']
  },
  
  // FROM: United States | TO: Vietnam (🌍 in structure)
  'Vietnam': {
    economy: 950,
    business: 2200,
    season: 'November to April',
    bestTimeToBook: '4-5 months in advance',
    airports: ['HAN', 'SGN'],
    airlines: ['Vietnam Airlines', 'Korean Air', 'Japan Airlines', 'Singapore Airlines']
  },

    // FROM: United States | TO: Greece
  'Greece': {
    economy: 550,
    business: 1600,
    season: 'Peak: June-August, Shoulder: April-May & September-October, Off: November-March',
    bestTimeToBook: '4-6 months in advance for summer, 3-4 months for shoulder season',
    airports: ['JFK', 'EWR', 'ORD', 'BOS', 'IAD', 'ATL'],
    airlines: ['Delta', 'United', 'American Airlines', 'Aegean Airlines', 'Lufthansa', 'Turkish Airlines']
  },
  
  // FROM: United States | TO: Turkey
  'Turkey': {
    economy: 650,
    business: 1800,
    season: 'Peak: June-August, Shoulder: April-May & September-October, Off: November-March',
    bestTimeToBook: '4-6 months in advance for summer, 3-4 months for shoulder season',
    airports: ['JFK', 'EWR', 'ORD', 'IAD', 'ATL', 'LAX'],
    airlines: ['Turkish Airlines', 'United', 'American Airlines', 'Delta', 'Lufthansa', 'British Airways']
  },

// Don't forget to add these to the data files
    // FROM: United States | TO: Japan
  'Japan': {
    economy: 900,
    business: 2100,
    season: 'Peak: March-May (Cherry Blossom), September-November (Fall), December-January (New Year), Off: June-August (Rainy/Hot) & February',
    bestTimeToBook: '3-5 months in advance for peak seasons, 2-3 months for off-season',
    airports: ['JFK', 'LAX', 'SFO', 'ORD', 'DFW', 'HNL'],
    airlines: ['ANA', 'Japan Airlines', 'United', 'Delta', 'American Airlines', 'Singapore Airlines', 'Cathay Pacific']
  },
  
  // FROM: United States | TO: Italy
  'Italy': {
    economy: 600,
    business: 1500,
    season: 'Peak: June-August, Shoulder: April-May & September-October, Off: November-March',
    bestTimeToBook: '4-6 months in advance for summer, 3-4 months for shoulder season',
    airports: ['JFK', 'EWR', 'ORD', 'BOS', 'MIA', 'LAX'],
    airlines: ['Alitalia (ITA Airways)', 'Delta', 'United', 'American Airlines', 'Lufthansa', 'British Airways', 'Air France']
  },
  
  // FROM: United States | TO: Laos
  'Laos': {
    economy: 1300, // Adjusted for typical U.S.-Laos fare
    business: 2500,
    season: 'Peak: November-February (Cool & Dry), Shoulder: March-May (Hot), Off: June-October (Rainy Season)',
    bestTimeToBook: '3-6 months in advance, often requires connecting through Bangkok or Hanoi',
    airports: ['VTE (Vientiane)', 'LPQ (Luang Prabang) via connecting hubs'],
    airlines: ['Thai Airways', 'Qatar Airways', 'Korean Air', 'China Southern', 'Vietnam Airlines', 'Bangkok Airways']
  },
  
  // FROM: United States | TO: France
  'France': {
    economy: 500,
    business: 1400,
    season: 'Peak: June-August, Shoulder: April-May & September-October, Off: November-March',
    bestTimeToBook: '4-6 months in advance for summer, 3-4 months for shoulder season',
    airports: ['JFK', 'EWR', 'ORD', 'BOS', 'ATL', 'LAX', 'SFO'],
    airlines: ['Air France', 'Delta', 'United', 'American Airlines', 'British Airways', 'Lufthansa', 'Iberia']
  },
  
  // FROM: United States | TO: Nepal
  'Nepal': {
    economy: 1200,
    business: 2800,
    season: 'Peak: October-November (Post-monsoon), March-April (Pre-monsoon), Shoulder: December-February (Cool), Off: May-September (Monsoon)',
    bestTimeToBook: '5-7 months in advance for trekking seasons, 3-4 months for other times',
    airports: ['KTM (Kathmandu) via connecting hubs'],
    airlines: ['Qatar Airways', 'Emirates', 'Turkish Airlines', 'Etihad', 'Air India', 'Thai Airways', 'Singapore Airlines']
  },
  
  // FROM: United States | TO: India
  'India': {
    economy: 850,
    business: 2000,
    season: 'Peak: October-March (Cool & Dry), Shoulder: April-May (Hot), Off: June-September (Monsoon)',
    bestTimeToBook: '3-5 months in advance for peak season, 2-3 months for off-season',
    airports: ['DEL (Delhi)', 'BOM (Mumbai)', 'BLR (Bangalore)', 'MAA (Chennai)'],
    airlines: ['Air India', 'United', 'Delta', 'American Airlines', 'Emirates', 'Qatar Airways', 'British Airways', 'Lufthansa']
  }
};

