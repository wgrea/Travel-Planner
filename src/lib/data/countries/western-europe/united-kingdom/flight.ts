export const ukFlightPattern: FlightPattern = {
  country: "United Kingdom",
  cities: ["London", "Manchester", "Edinburgh", "Birmingham", "Glasgow", "Bristol"],
  cheapestMonths: ["January", "February", "November"],
  expensiveMonths: ["July", "August", "December"],
  sweetSpot: ["March", "April", "May", "September", "October"],
  averagePrice: 700,
  planningTips: [
    "Book 2-3 months in advance for European routes, 4-6 months for long-haul",
    "Consider low-cost carriers from regional airports for better deals",
    "Avoid school holiday periods for lower prices",
    "London has multiple airports (LHR, LGW, STN, LTN) with varying prices"
  ],
  notes: "Major global aviation hub with extensive connections worldwide. Low-cost carriers dominate European routes"
};

export const ukRouteCost: RouteCostData = {
  // FROM: United Kingdom | TO: United States
  'United States': {
    economy: 500,
    business: 1400,
    season: 'Peak: Summer (Jun-Aug) & Holidays, Shoulder: Spring/Fall',
    bestTimeToBook: '3-5 months in advance',
    airports: ['LHR', 'LGW', 'MAN', 'EDI'],
    airlines: ['British Airways', 'Virgin Atlantic', 'American Airlines', 'Delta', 'United']
  },
  
  // FROM: United Kingdom | TO: Spain
  'Spain': {
    economy: 80,
    business: 250,
    season: 'Peak: Summer & Holidays, Shoulder: Spring/Fall',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LHR', 'LGW', 'STN', 'LTN', 'MAN', 'EDI'],
    airlines: ['British Airways', 'EasyJet', 'Ryanair', 'Vueling', 'Jet2']
  },
  
  // FROM: United Kingdom | TO: France
  'France': {
    economy: 60,
    business: 200,
    season: 'Year-round with summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LHR', 'LGW', 'STN', 'MAN'],
    airlines: ['British Airways', 'EasyJet', 'Ryanair', 'Air France']
  },
  
  // FROM: United Kingdom | TO: Italy
  'Italy': {
    economy: 70,
    business: 220,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '2-3 months in advance',
    airports: ['LHR', 'LGW', 'STN', 'MAN'],
    airlines: ['British Airways', 'EasyJet', 'Ryanair', 'Alitalia (ITA Airways)']
  },
  
  // FROM: United Kingdom | TO: Germany
  'Germany': {
    economy: 80,
    business: 250,
    season: 'Year-round with slight summer peak',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LHR', 'LGW', 'STN', 'MAN'],
    airlines: ['British Airways', 'Lufthansa', 'EasyJet', 'Ryanair']
  },
  
  // FROM: United Kingdom | TO: Ireland
  'Ireland': {
    economy: 40,
    business: 150,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['LHR', 'LGW', 'STN', 'MAN', 'EDI'],
    airlines: ['British Airways', 'Aer Lingus', 'Ryanair', 'EasyJet']
  },
  
  // FROM: United Kingdom | TO: Portugal
  'Portugal': {
    economy: 90,
    business: 280,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '2-3 months in advance',
    airports: ['LHR', 'LGW', 'STN', 'MAN'],
    airlines: ['British Airways', 'TAP Portugal', 'EasyJet', 'Ryanair']
  },
  
  // FROM: United Kingdom | TO: Greece
  'Greece': {
    economy: 120,
    business: 350,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '3-4 months in advance for summer',
    airports: ['LHR', 'LGW', 'STN', 'MAN'],
    airlines: ['British Airways', 'EasyJet', 'Ryanair', 'Jet2', 'TUI']
  },
  
  // FROM: United Kingdom | TO: Turkey
  'Turkey': {
    economy: 150,
    business: 400,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '2-3 months in advance',
    airports: ['LHR', 'LGW', 'STN'],
    airlines: ['British Airways', 'Turkish Airlines', 'EasyJet', 'Pegasus']
  },
  
  // FROM: United Kingdom | TO: United Arab Emirates
  'United Arab Emirates': {
    economy: 400,
    business: 1000,
    season: 'Year-round with holiday peaks',
    bestTimeToBook: '3-4 months in advance',
    airports: ['LHR', 'LGW', 'MAN'],
    airlines: ['British Airways', 'Emirates', 'Etihad', 'Virgin Atlantic']
  },
  
  // FROM: United Kingdom | TO: Australia
  'Australia': {
    economy: 900,
    business: 2200,
    season: 'Peak: Australian summer (Dec-Feb), Shoulder: Spring/Fall',
    bestTimeToBook: '5-7 months in advance',
    airports: ['LHR'],
    airlines: ['British Airways', 'Qantas', 'Virgin Atlantic', 'Singapore Airlines']
  },
  
  // FROM: United Kingdom | TO: Canada
  'Canada': {
    economy: 450,
    business: 1200,
    season: 'Peak: Summer, Shoulder: Spring/Fall',
    bestTimeToBook: '4-6 months in advance',
    airports: ['LHR', 'LGW', 'MAN'],
    airlines: ['British Airways', 'Air Canada', 'WestJet', 'Virgin Atlantic']
  },
  
  // FROM: United Kingdom | TO: Japan
  'Japan': {
    economy: 700,
    business: 1700,
    season: 'Peak: Cherry Blossom & Fall, Shoulder: Summer',
    bestTimeToBook: '4-6 months in advance',
    airports: ['LHR'],
    airlines: ['British Airways', 'Japan Airlines', 'ANA', 'Virgin Atlantic']
  },
  
  // FROM: United Kingdom | TO: South Africa
  'South Africa': {
    economy: 600,
    business: 1500,
    season: 'Peak: European winter (Dec-Feb)',
    bestTimeToBook: '4-5 months in advance',
    airports: ['LHR'],
    airlines: ['British Airways', 'Virgin Atlantic', 'South African Airways']
  },
  
  // FROM: United Kingdom | TO: India
  'India': {
    economy: 500,
    business: 1300,
    season: 'Peak: Winter (Oct-Mar), Off: Summer',
    bestTimeToBook: '4-5 months in advance',
    airports: ['LHR', 'LGW'],
    airlines: ['British Airways', 'Virgin Atlantic', 'Air India', 'Vistara']
  }
};