// src/lib/data/countries/europe/southern-europe/turkey/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';  // ← Import from flyData.ts
import type { RouteCostData } from '$lib/types/flight';

export const turkeyFlightPattern: FlightPattern = {
  country: "Turkey",
  cities: ["Istanbul", "Cappadocia", "Antalya"],
  cheapestMonths: ["January", "February"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["April", "May", "June", "September", "October", "November"],
  averagePrice: 950,
  planningTips: ["Visa may be required depending on nationality"],
  notes: "Crossroads of Europe and Asia with rich history"
};

export const turkeyRouteCost: RouteCostData = {
  // FROM: Turkey | TO: United States
  'United States': {
    economy: 700,
    business: 2000,
    season: 'June-August (peak), April-May & September-October (shoulder), November-March (off)',
    bestTimeToBook: '4-6 months in advance for summer, 3-4 months for shoulder season',
    airports: ['IST', 'SAW'],
    airlines: ['Turkish Airlines', 'United', 'Delta', 'American Airlines', 'Lufthansa']
  },
  // FROM: Turkey | TO: United Kingdom
  'United Kingdom': {
    economy: 250,
    business: 700,
    season: 'All year (cheapest Nov-Feb)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['IST', 'SAW', 'AYT', 'ADB'],
    airlines: ['Turkish Airlines', 'British Airways', 'easyJet', 'Pegasus Airlines', 'SunExpress']
  },
  // FROM: Turkey | TO: Germany
  'Germany': {
    economy: 200,
    business: 600,
    season: 'All year (cheapest Oct-Mar)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['IST', 'SAW', 'AYT', 'ADB'],
    airlines: ['Turkish Airlines', 'Lufthansa', 'SunExpress', 'Pegasus Airlines', 'Eurowings']
  },
  // FROM: Turkey | TO: Russia
  'Russia': {
    economy: 300,
    business: 800,
    season: 'All year (slight variations)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['IST', 'AYT'],
    airlines: ['Turkish Airlines', 'Aeroflot', 'Pegasus Airlines']
  },
  // FROM: Turkey | TO: Greece
  'Greece': {
    economy: 150,
    business: 400,
    season: 'All year (similar prices)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['IST', 'ADB', 'AYT'],
    airlines: ['Turkish Airlines', 'Aegean Airlines', 'Pegasus Airlines']
  },
  // FROM: Turkey | TO: United Arab Emirates
  'United Arab Emirates': {
    economy: 350,
    business: 900,
    season: 'All year (similar prices)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['IST', 'SAW'],
    airlines: ['Turkish Airlines', 'Emirates', 'Etihad', 'Flydubai']
  },
  // FROM: Turkey | TO: Iran
  'Iran': {
    economy: 200,
    business: 500,
    season: 'All year (similar prices)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['IST'],
    airlines: ['Turkish Airlines', 'Mahan Air', 'Iran Air']
  },
  // FROM: Turkey | TO: Azerbaijan
  'Azerbaijan': {
    economy: 180,
    business: 450,
    season: 'All year (similar prices)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['IST', 'ESB'],
    airlines: ['Turkish Airlines', 'Azerbaijan Airlines', 'Pegasus Airlines']
  },
  // FROM: Turkey | TO: Georgia
  'Georgia': {
    economy: 120,
    business: 300,
    season: 'All year (similar prices)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['IST', 'Trabzon'],
    airlines: ['Turkish Airlines', 'Georgian Airways', 'Pegasus Airlines']
  }
};