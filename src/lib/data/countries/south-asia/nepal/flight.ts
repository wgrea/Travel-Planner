// src/lib/data/visa/destinations/south-asia/nepal/flight.ts
export const nepalFlightPattern: FlightPattern = {
  country: "Nepal",
  cities: ["Kathmandu", "Pokhara", "Bhairahawa", "Biratnagar"],
  cheapestMonths: ["June", "July", "August", "September"],
  expensiveMonths: ["October", "November", "March", "April"],
  sweetSpot: ["February", "March", "September", "October"],
  averagePrice: 950,
  planningTips: [
    "Book 6+ months in advance for peak trekking seasons (Oct-Nov, Mar-Apr)",
    "Consider flights via Middle East for better prices",
    "Monsoon season (Jun-Sep) offers lowest prices but travel disruptions possible",
    "Kathmandu is the only major international gateway"
  ],
  notes: "Landlocked country with one international airport (KTM). Most flights connect via India, Middle East, or Southeast Asia"
};

export const nepalRouteCost: RouteCostData = {
  // FROM: Nepal | TO: United States
  'United States': {
    economy: 1200,
    business: 2800,
    season: 'Peak: October-November & March-April (Trekking seasons)',
    bestTimeToBook: '5-7 months in advance for peak seasons',
    airports: ['KTM'],
    airlines: ['Qatar Airways', 'Emirates', 'Turkish Airlines', 'Etihad']
  },
  
  // FROM: Nepal | TO: United Kingdom
  'United Kingdom': {
    economy: 800,
    business: 1900,
    season: 'Peak: Trekking seasons, Shoulder: Winter',
    bestTimeToBook: '4-6 months in advance',
    airports: ['KTM'],
    airlines: ['Qatar Airways', 'Emirates', 'Turkish Airlines', 'Etihad']
  },
  
  // FROM: Nepal | TO: India
  'India': {
    economy: 150,
    business: 400,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['KTM', 'PKR'],
    airlines: ['Nepal Airlines', 'Air India', 'IndiGo', 'SpiceJet']
  },
  
  // FROM: Nepal | TO: Thailand
  'Thailand': {
    economy: 300,
    business: 700,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['KTM'],
    airlines: ['Thai Airways', 'Nepal Airlines', 'Buddha Air', 'Thai Smile']
  },
  
  // FROM: Nepal | TO: United Arab Emirates
  'United Arab Emirates': {
    economy: 350,
    business: 850,
    season: 'Year-round with peak during festivals',
    bestTimeToBook: '3-4 months in advance',
    airports: ['KTM'],
    airlines: ['Emirates', 'Etihad', 'Flydubai', 'Nepal Airlines']
  },
  
  // FROM: Nepal | TO: Qatar
  'Qatar': {
    economy: 320,
    business: 750,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['KTM'],
    airlines: ['Qatar Airways', 'Nepal Airlines']
  },
  
  // FROM: Nepal | TO: Malaysia
  'Malaysia': {
    economy: 280,
    business: 650,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['KTM'],
    airlines: ['Malaysia Airlines', 'AirAsia', 'Nepal Airlines']
  },
  
  // FROM: Nepal | TO: Singapore
  'Singapore': {
    economy: 320,
    business: 750,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['KTM'],
    airlines: ['Singapore Airlines', 'Scoot', 'Nepal Airlines']
  },
  
  // FROM: Nepal | TO: China
  'China': {
    economy: 380,
    business: 900,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['KTM'],
    airlines: ['China Southern', 'Sichuan Airlines', 'Air China', 'Nepal Airlines']
  },
  
  // FROM: Nepal | TO: South Korea
  'South Korea': {
    economy: 500,
    business: 1200,
    season: 'Year-round',
    bestTimeToBook: '3-4 months in advance',
    airports: ['KTM'],
    airlines: ['Korean Air', 'Asiana Airlines', 'Nepal Airlines via connections']
  },
  
  // FROM: Nepal | TO: Japan
  'Japan': {
    economy: 600,
    business: 1400,
    season: 'Year-round',
    bestTimeToBook: '3-4 months in advance',
    airports: ['KTM'],
    airlines: ['Japan Airlines', 'ANA', 'Nepal Airlines via connections']
  },
  
  // FROM: Nepal | TO: Australia
  'Australia': {
    economy: 850,
    business: 2000,
    season: 'Year-round',
    bestTimeToBook: '4-5 months in advance',
    airports: ['KTM'],
    airlines: ['Qantas', 'Malaysia Airlines', 'Singapore Airlines', 'Thai Airways']
  },
  
  // FROM: Nepal | TO: Germany
  'Germany': {
    economy: 750,
    business: 1800,
    season: 'Year-round',
    bestTimeToBook: '4-5 months in advance',
    airports: ['KTM'],
    airlines: ['Turkish Airlines', 'Qatar Airways', 'Emirates', 'Lufthansa']
  },
  
  // FROM: Nepal | TO: France
  'France': {
    economy: 720,
    business: 1700,
    season: 'Year-round',
    bestTimeToBook: '4-5 months in advance',
    airports: ['KTM'],
    airlines: ['Qatar Airways', 'Emirates', 'Turkish Airlines', 'Air France']
  },
  
  // FROM: Nepal | TO: Bangladesh
  'Bangladesh': {
    economy: 180,
    business: 450,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['KTM'],
    airlines: ['Nepal Airlines', 'Biman Bangladesh', 'US-Bangla Airlines']
  },
  
  // FROM: Nepal | TO: Sri Lanka
  'Sri Lanka': {
    economy: 220,
    business: 550,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['KTM'],
    airlines: ['SriLankan Airlines', 'Nepal Airlines']
  }
};