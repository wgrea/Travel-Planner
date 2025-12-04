// src/lib/data/countries/south-asia/bangladesh/flight.ts

import type { FlightPattern } from '$lib/data/flightPatternData';
import type { RouteCostData } from '$lib/types/flight';

export const bangladeshFlightPattern: FlightPattern = {
  country: "Bangladesh",
  cities: ["Dhaka", "Chittagong", "Sylhet", "Cox's Bazar"],
  cheapestMonths: ["June", "July", "August", "September"],
  expensiveMonths: ["December", "January", "February", "October", "November"],
  sweetSpot: ["March", "April", "May", "October"],
  averagePrice: 850,
  planningTips: [
    "Avoid monsoon season (Jun-Sep) for travel, but best flight prices",
    "Book well in advance for festivals (Eid, Durga Puja)",
    "Consider connecting flights via Middle East for international travel",
    "Dhaka is the main international gateway"
  ],
  notes: "Small country with limited international connections. Most flights connect via Middle East or Southeast Asia"
};

export const bangladeshRouteCost: RouteCostData = {
  // FROM: Bangladesh | TO: United States
  'United States': {
    economy: 1100,
    business: 2600,
    season: 'Year-round with peak during festivals',
    bestTimeToBook: '4-6 months in advance',
    airports: ['DAC'],
    airlines: ['Emirates', 'Qatar Airways', 'Turkish Airlines', 'Singapore Airlines']
  },
  
  // FROM: Bangladesh | TO: United Kingdom
  'United Kingdom': {
    economy: 700,
    business: 1700,
    season: 'Year-round with peak during holidays',
    bestTimeToBook: '3-5 months in advance',
    airports: ['DAC', 'CGP'],
    airlines: ['British Airways', 'Emirates', 'Qatar Airways', 'Biman Bangladesh']
  },
  
  // FROM: Bangladesh | TO: India
  'India': {
    economy: 120,
    business: 300,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DAC', 'CGP', 'ZYL'],
    airlines: ['Biman Bangladesh', 'Air India', 'IndiGo', 'SpiceJet']
  },
  
  // FROM: Bangladesh | TO: Thailand
  'Thailand': {
    economy: 250,
    business: 600,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DAC'],
    airlines: ['Thai Airways', 'Biman Bangladesh', 'AirAsia', 'Thai Smile']
  },
  
  // FROM: Bangladesh | TO: Malaysia
  'Malaysia': {
    economy: 200,
    business: 500,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DAC', 'CGP'],
    airlines: ['Malaysia Airlines', 'AirAsia', 'Biman Bangladesh', 'Malindo Air']
  },
  
  // FROM: Bangladesh | TO: Singapore
  'Singapore': {
    economy: 220,
    business: 550,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DAC'],
    airlines: ['Singapore Airlines', 'Scoot', 'Biman Bangladesh', 'SilkAir']
  },
  
  // FROM: Bangladesh | TO: United Arab Emirates
  'United Arab Emirates': {
    economy: 300,
    business: 750,
    season: 'Year-round with peak during holidays',
    bestTimeToBook: '2-3 months in advance for holidays',
    airports: ['DAC', 'CGP', 'ZYL'],
    airlines: ['Emirates', 'Etihad', 'Biman Bangladesh', 'Air Arabia']
  },
  
  // FROM: Bangladesh | TO: Saudi Arabia
  'Saudi Arabia': {
    economy: 350,
    business: 850,
    season: 'Year-round with Hajj/Umrah peaks',
    bestTimeToBook: '3-4 months in advance for Hajj season',
    airports: ['DAC', 'CGP'],
    airlines: ['Saudia', 'Biman Bangladesh', 'Flynas', 'Nas Air']
  },
  
  // FROM: Bangladesh | TO: Qatar
  'Qatar': {
    economy: 280,
    business: 700,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DAC'],
    airlines: ['Qatar Airways', 'Biman Bangladesh']
  },
  
  // FROM: Bangladesh | TO: Oman
  'Oman': {
    economy: 320,
    business: 800,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DAC'],
    airlines: ['Oman Air', 'Salam Air', 'Biman Bangladesh']
  },
  
  // FROM: Bangladesh | TO: Kuwait
  'Kuwait': {
    economy: 340,
    business: 850,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DAC'],
    airlines: ['Kuwait Airways', 'Jazeera Airways', 'Biman Bangladesh']
  },
  
  // FROM: Bangladesh | TO: Nepal
  'Nepal': {
    economy: 180,
    business: 450,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DAC'],
    airlines: ['Biman Bangladesh', 'Nepal Airlines', 'Buddha Air']
  },
  
  // FROM: Bangladesh | TO: Sri Lanka
  'Sri Lanka': {
    economy: 200,
    business: 500,
    season: 'Year-round',
    bestTimeToBook: '1-2 months in advance',
    airports: ['DAC'],
    airlines: ['Biman Bangladesh', 'SriLankan Airlines', 'US-Bangla Airlines']
  },
  
  // FROM: Bangladesh | TO: China
  'China': {
    economy: 400,
    business: 1000,
    season: 'Year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['DAC'],
    airlines: ['China Southern', 'Biman Bangladesh', 'Air China']
  }
};