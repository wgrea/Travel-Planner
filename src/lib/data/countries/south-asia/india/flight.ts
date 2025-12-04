// src/lib/data/countries/south-asia/india/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';  // ← Import from flyData.ts
import type { RouteCostData  } from '$lib/types/flight';

export const indiaFlightPattern: FlightPattern = {
  country: "India",
  cities: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Goa", "Kochi"],
  cheapestMonths: ["May", "June", "July", "August", "September"],
  expensiveMonths: ["December", "January", "October", "November", "February"],
  sweetSpot: ["March", "April", "September", "October"],
  averagePrice: 900,
  planningTips: [
    "Book domestic flights in advance for festival seasons (Diwali, Holi)",
    "Consider major hubs (Delhi/Mumbai) for international connections",
    "Monsoon season (Jun-Sep) offers lower prices but travel disruptions possible",
    "Festival periods (Oct-Dec) see highest demand and prices"
  ],
  notes: "Vast country with extensive domestic network. International connections via Middle East hubs often cheaper than direct"
};

export const indiaRouteCost: RouteCostData = {
  // FROM: India | TO: United States
  'United States': {
    economy: 850,
    business: 2000,
    season: 'Peak: October-March (Cool season), Shoulder: April-May, Off: June-September (Monsoon)',
    bestTimeToBook: '3-5 months in advance for peak season, 2-3 months for off-season',
    airports: ['DEL', 'BOM', 'BLR', 'MAA'],
    airlines: ['Air India', 'United', 'Delta', 'American', 'Emirates', 'Qatar Airways']
  },
  
  // FROM: India | TO: United Kingdom
  'United Kingdom': {
    economy: 600,
    business: 1500,
    season: 'Peak: October-March, Shoulder: April-May, Off: June-September',
    bestTimeToBook: '3-4 months in advance',
    airports: ['DEL', 'BOM', 'BLR', 'AMD'],
    airlines: ['British Airways', 'Air India', 'Virgin Atlantic', 'Vistara']
  },
  
  // FROM: India | TO: United Arab Emirates
  'United Arab Emirates': {
    economy: 250,
    business: 600,
    season: 'Year-round with peak during holidays',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DEL', 'BOM', 'HYD', 'MAA', 'COK'],
    airlines: ['Emirates', 'Etihad', 'Air India', 'IndiGo', 'SpiceJet', 'Air Arabia']
  },
  
  // FROM: India | TO: Thailand
  'Thailand': {
    economy: 200,
    business: 500,
    season: 'Year-round with peak in cool season',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DEL', 'BOM', 'CCU', 'MAA'],
    airlines: ['Thai Airways', 'Air India', 'IndiGo', 'SpiceJet', 'Thai Smile']
  },
  
  // FROM: India | TO: Singapore
  'Singapore': {
    economy: 250,
    business: 600,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DEL', 'BOM', 'BLR', 'MAA'],
    airlines: ['Singapore Airlines', 'Air India', 'IndiGo', 'Scoot', 'Vistara']
  },
  
  // FROM: India | TO: Malaysia
  'Malaysia': {
    economy: 180,
    business: 450,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DEL', 'BOM', 'HYD', 'MAA'],
    airlines: ['Malaysia Airlines', 'Air India', 'IndiGo', 'AirAsia']
  },
  
  // FROM: India | TO: Australia
  'Australia': {
    economy: 700,
    business: 1700,
    season: 'Peak: Australian summer (Dec-Feb), Shoulder: Spring/Fall',
    bestTimeToBook: '3-4 months in advance',
    airports: ['DEL', 'BOM'],
    airlines: ['Qantas', 'Air India', 'Singapore Airlines', 'Malaysia Airlines']
  },
  
  // FROM: India | TO: Canada
  'Canada': {
    economy: 900,
    business: 2100,
    season: 'Peak: Summer (Jun-Aug), Shoulder: Spring/Fall',
    bestTimeToBook: '4-5 months in advance',
    airports: ['DEL', 'BOM'],
    airlines: ['Air Canada', 'Air India', 'British Airways', 'Lufthansa']
  },
  
  // FROM: India | TO: Germany
  'Germany': {
    economy: 550,
    business: 1300,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '3-4 months in advance',
    airports: ['DEL', 'BOM', 'BLR'],
    airlines: ['Lufthansa', 'Air India', 'Vistara', 'Swiss']
  },
  
  // FROM: India | TO: France
  'France': {
    economy: 500,
    business: 1200,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '3-4 months in advance',
    airports: ['DEL', 'BOM'],
    airlines: ['Air France', 'Air India', 'Vistara']
  },
  
  // FROM: India | TO: Japan
  'Japan': {
    economy: 600,
    business: 1400,
    season: 'Peak: Cherry Blossom & Fall, Shoulder: Summer',
    bestTimeToBook: '3-4 months in advance',
    airports: ['DEL', 'BOM'],
    airlines: ['Japan Airlines', 'ANA', 'Air India', 'Singapore Airlines']
  },
  
  // FROM: India | TO: South Korea
  'South Korea': {
    economy: 450,
    business: 1100,
    season: 'Peak: Spring & Fall, Shoulder: Summer',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DEL', 'BOM'],
    airlines: ['Korean Air', 'Asiana', 'Air India', 'IndiGo']
  },
  
  // FROM: India | TO: Sri Lanka
  'Sri Lanka': {
    economy: 120,
    business: 300,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['MAA', 'TRZ', 'CCU', 'DEL'],
    airlines: ['SriLankan Airlines', 'Air India', 'IndiGo', 'SpiceJet']
  },
  
  // FROM: India | TO: Nepal
  'Nepal': {
    economy: 100,
    business: 250,
    season: 'Year-round with peak in trekking seasons',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DEL', 'CCU', 'VNS'],
    airlines: ['Nepal Airlines', 'Air India', 'IndiGo', 'Buddha Air']
  },
  
  // FROM: India | TO: Bangladesh
  'Bangladesh': {
    economy: 80,
    business: 200,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['CCU', 'DEL', 'GAU'],
    airlines: ['Biman Bangladesh', 'Air India', 'IndiGo', 'SpiceJet']
  }
};