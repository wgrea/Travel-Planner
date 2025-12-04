// /src/lib/data/countries/east-asia/japan/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';  // ← Import from flyData.ts
import type { RouteCostData } from '$lib/types/flight';

export const japanFlightPattern: FlightPattern = {
  country: "Japan",
  cities: ["Tokyo", "Osaka", "Kyoto"],
  cheapestMonths: ["January", "February"],
  expensiveMonths: ["April", "November"],
  sweetSpot: ["May", "October"],
  averagePrice: 1200,
  alternativeRoutes: "Fly to Seoul first, then budget airline to Osaka",
  planningTips: ["Book 3-4 months in advance", "Use Google Flights alerts"],
  notes: "Cherry blossom season (April) is most expensive"
};

// src/lib/data/countries/asia/japan/flight.ts
export const japanRouteCost: RouteCostData = {
  // FROM: Japan | TO: United States
  'United States': {
    economy: 850,
    business: 2100,
    season: 'Peak: Cherry Blossom (Mar-May) & Fall (Sep-Nov), Shoulder: Summer, Off: Winter',
    bestTimeToBook: '3-5 months in advance for peak seasons, 2-3 months for off-season',
    airports: ['NRT', 'HND', 'KIX'],
    airlines: ['ANA', 'Japan Airlines', 'United', 'Delta', 'American']
  },
  
  // FROM: Japan | TO: South Korea
  'South Korea': {
    economy: 250,
    business: 600,
    season: 'Peak: Spring & Fall, Shoulder: Summer, Off: Winter',
    bestTimeToBook: '1-2 months in advance',
    airports: ['NRT', 'HND', 'KIX', 'FUK'],
    airlines: ['Korean Air', 'Asiana', 'ANA', 'Japan Airlines', 'Jeju Air']
  },
  
  // FROM: Japan | TO: China
  'China': {
    economy: 300,
    business: 700,
    season: 'Peak: Chinese New Year, Golden Week, Shoulder: Regular seasons',
    bestTimeToBook: '2-3 months in advance for holidays',
    airports: ['NRT', 'HND', 'KIX', 'NGO'],
    airlines: ['Air China', 'China Eastern', 'China Southern', 'ANA', 'Japan Airlines']
  },
  
  // FROM: Japan | TO: Thailand
  'Thailand': {
    economy: 400,
    business: 900,
    season: 'Peak: Cool season (Nov-Feb), Shoulder: Hot season (Mar-Jun), Off: Rainy season (Jul-Oct)',
    bestTimeToBook: '2-3 months in advance for peak',
    airports: ['NRT', 'HND', 'KIX'],
    airlines: ['Thai Airways', 'ANA', 'Japan Airlines', 'Bangkok Airways', 'AirAsia']
  },
  
  // FROM: Japan | TO: Taiwan
  'Taiwan': {
    economy: 280,
    business: 650,
    season: 'Year-round with slight peak in spring/fall',
    bestTimeToBook: '1-2 months in advance',
    airports: ['NRT', 'HND', 'KIX', 'FUK'],
    airlines: ['EVA Air', 'China Airlines', 'ANA', 'Japan Airlines', 'Peach Aviation']
  },
  
  // FROM: Japan | TO: Vietnam
  'Vietnam': {
    economy: 350,
    business: 800,
    season: 'Peak: Dry season (Nov-Apr), Off: Rainy season (May-Oct)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['NRT', 'HND', 'KIX'],
    airlines: ['Vietnam Airlines', 'ANA', 'Japan Airlines', 'Bamboo Airways', 'VietJet Air']
  },
  
  // FROM: Japan | TO: Philippines
  'Philippines': {
    economy: 320,
    business: 750,
    season: 'Peak: Dry season (Dec-May), Off: Rainy season (Jun-Nov)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['NRT', 'HND', 'KIX'],
    airlines: ['Philippine Airlines', 'Cebu Pacific', 'ANA', 'Japan Airlines']
  },
  
  // FROM: Japan | TO: Australia
  'Australia': {
    economy: 700,
    business: 1700,
    season: 'Peak: Australian summer (Dec-Feb), Shoulder: Spring/Fall, Off: Winter',
    bestTimeToBook: '3-4 months in advance for peak',
    airports: ['NRT', 'HND'],
    airlines: ['Qantas', 'ANA', 'Japan Airlines', 'Jetstar']
  },
  
  // FROM: Japan | TO: Singapore
  'Singapore': {
    economy: 450,
    business: 1000,
    season: 'Year-round with slight peak during holidays',
    bestTimeToBook: '2-3 months in advance',
    airports: ['NRT', 'HND', 'KIX'],
    airlines: ['Singapore Airlines', 'ANA', 'Japan Airlines', 'Scoot']
  },
  
  // FROM: Japan | TO: Hong Kong
  'Hong Kong': {
    economy: 300,
    business: 700,
    season: 'Peak: Holidays and festivals, Shoulder: Regular seasons',
    bestTimeToBook: '2-3 months in advance for festivals',
    airports: ['NRT', 'HND', 'KIX'],
    airlines: ['Cathay Pacific', 'ANA', 'Japan Airlines', 'HK Express']
  },
  
  // FROM: Japan | TO: Malaysia
  'Malaysia': {
    economy: 380,
    business: 850,
    season: 'Peak: Dry season (Dec-Mar), Shoulder: Other months',
    bestTimeToBook: '2-3 months in advance',
    airports: ['NRT', 'HND', 'KIX'],
    airlines: ['Malaysia Airlines', 'ANA', 'Japan Airlines', 'AirAsia']
  },
  
  // FROM: Japan | TO: Indonesia
  'Indonesia': {
    economy: 500,
    business: 1100,
    season: 'Peak: Dry season (Apr-Oct), Off: Rainy season (Nov-Mar)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['NRT', 'HND'],
    airlines: ['Garuda Indonesia', 'ANA', 'Japan Airlines', 'Lion Air']
  },
  
  // FROM: Japan | TO: New Zealand
  'New Zealand': {
    economy: 750,
    business: 1800,
    season: 'Peak: NZ summer (Dec-Feb), Shoulder: Spring/Fall',
    bestTimeToBook: '3-4 months in advance',
    airports: ['NRT', 'HND'],
    airlines: ['Air New Zealand', 'ANA', 'Japan Airlines']
  },
  
  // FROM: Japan | TO: United Kingdom
  'United Kingdom': {
    economy: 900,
    business: 2200,
    season: 'Peak: Summer (Jun-Aug), Shoulder: Spring/Fall, Off: Winter',
    bestTimeToBook: '3-5 months in advance for summer',
    airports: ['NRT', 'HND'],
    airlines: ['British Airways', 'ANA', 'Japan Airlines', 'Virgin Atlantic']
  },
  
  // FROM: Japan | TO: France
  'France': {
    economy: 850,
    business: 2000,
    season: 'Peak: Summer (Jun-Aug), Shoulder: Spring/Fall',
    bestTimeToBook: '3-5 months in advance',
    airports: ['NRT', 'HND'],
    airlines: ['Air France', 'ANA', 'Japan Airlines']
  },
  
  // FROM: Japan | TO: Germany
  'Germany': {
    economy: 800,
    business: 1900,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '3-4 months in advance',
    airports: ['NRT', 'HND'],
    airlines: ['Lufthansa', 'ANA', 'Japan Airlines']
  }
};