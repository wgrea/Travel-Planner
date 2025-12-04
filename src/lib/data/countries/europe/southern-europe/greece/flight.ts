//src/lib/data/countries/europe/southern-europe/greece/flight.ts
import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const greeceFlightPattern: FlightPattern = {
  country: "Greece",
  cities: ["Athens", "Santorini", "Mykonos"],
  cheapestMonths: ["October", "November", "December", "January", "February", "March", "April"],
  expensiveMonths: ["June", "July", "August"],
  sweetSpot: ["May", "September"],
  averagePrice: 925,
  planningTips: ["Island hopping is popular but book ferries in advance"],
  notes: "Noted for islands and Mediterranean climate"
};

export const greeceRouteCost: RouteCostData = {
  // FROM: Greece | TO: United States
  'United States': {
    economy: 500,
    business: 1400,
    season: 'June-August (peak), April-May & September-October (shoulder), November-March (off)',
    bestTimeToBook: '4-6 months in advance for summer, 3-4 months for shoulder season',
    airports: ['ATH', 'SKG'],
    airlines: ['Delta', 'United', 'American Airlines', 'Aegean Airlines', 'Turkish Airlines']
  },
  // FROM: Greece | TO: United Kingdom
  'United Kingdom': {
    economy: 80,
    business: 250,
    season: 'All year (cheapest Nov-Feb)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['ATH', 'SKG', 'HER', 'RHO', 'JTR', 'JMK'],
    airlines: ['easyJet', 'Ryanair', 'British Airways', 'Wizz Air', 'Aegean Airlines']
  },
  // FROM: Greece | TO: Germany
  'Germany': {
    economy: 70,
    business: 200,
    season: 'All year (cheapest Oct-Mar)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['ATH', 'SKG', 'HER', 'RHO'],
    airlines: ['Ryanair', 'easyJet', 'Lufthansa', 'Eurowings', 'Condor']
  },
  // FROM: Greece | TO: France
  'France': {
    economy: 75,
    business: 220,
    season: 'All year (cheapest Oct-Mar)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['ATH', 'SKG', 'HER'],
    airlines: ['Ryanair', 'easyJet', 'Air France', 'Volotea', 'Aegean Airlines']
  },
  // FROM: Greece | TO: Italy
  'Italy': {
    economy: 60,
    business: 180,
    season: 'All year (cheapest Oct-Mar)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['ATH', 'SKG', 'HER', 'RHO'],
    airlines: ['Ryanair', 'easyJet', 'Volotea', 'Aegean Airlines', 'ITA Airways']
  },
  // FROM: Greece | TO: Turkey
  'Turkey': {
    economy: 50,
    business: 150,
    season: 'All year (similar prices)',
    bestTimeToBook: '1-2 months in advance',
    airports: ['ATH', 'SKG', 'HER'],
    airlines: ['Turkish Airlines', 'Aegean Airlines', 'Pegasus Airlines']
  },
  // FROM: Greece | TO: Egypt
  'Egypt': {
    economy: 90,
    business: 280,
    season: 'All year (slightly cheaper Oct-Mar)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['ATH', 'HER'],
    airlines: ['Aegean Airlines', 'EgyptAir', 'Nile Air']
  },
  // FROM: Greece | TO: Israel
  'Israel': {
    economy: 85,
    business: 260,
    season: 'All year (similar prices)',
    bestTimeToBook: '2-3 months in advance',
    airports: ['ATH', 'SKG'],
    airlines: ['Aegean Airlines', 'El Al', 'Arkia', 'Ryanair']
  },
  // FROM: Greece | TO: United Arab Emirates
  'United Arab Emirates': {
    economy: 300,
    business: 900,
    season: 'All year (similar prices)',
    bestTimeToBook: '3-4 months in advance',
    airports: ['ATH'],
    airlines: ['Emirates', 'Etihad', 'Aegean Airlines', 'Qatar Airways']
  }
};