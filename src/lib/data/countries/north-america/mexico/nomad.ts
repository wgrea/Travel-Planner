// src/lib/data/countries/north-america/mexico/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const mexicoWorkspaces: Workspace[] = [
  {
    name: 'WeWork',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 250, // ~$14 USD
    monthlyPrice: 2200, // ~$123 USD
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths'],
    bestFor: ['Corporate teams', 'Professional services', 'Business networking'],
    hours: '24/7',
    address: 'Multiple locations (Polanco, Reforma, Santa Fe)'
  },
  {
    name: 'Centro',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 180, // ~$10 USD
    monthlyPrice: 1600, // ~$90 USD
    rating: 4.5,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Beautiful architecture', 'Cafe', 'Meeting rooms', 'Event space', 'Community events'],
    bestFor: ['Creative professionals', 'Startups', 'Digital nomads'],
    hours: '8:00-20:00',
    address: 'Roma Norte, Mexico City'
  },
  {
    name: 'Selina Cowork',
    city: 'Playa del Carmen',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 150, // ~$8.40 USD
    monthlyPrice: 1300, // ~$73 USD
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beach access', 'Pool', 'Cafe', 'Community events', 'Accommodation available'],
    bestFor: ['Digital nomads', 'Beach lifestyle', 'Community building'],
    hours: '24/7',
    address: '5th Avenue, Playa del Carmen'
  },
  {
    name: 'Nest Coworking',
    city: 'Playa del Carmen',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 120, // ~$6.70 USD
    monthlyPrice: 1000, // ~$56 USD
    rating: 4.7,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Modern facilities', 'Meeting rooms', 'Kitchen', 'Quiet zones', 'Community focus'],
    bestFor: ['Focused work', 'Digital nomads', 'Remote teams'],
    hours: '24/7',
    address: 'Playa del Carmen Centro'
  },
  {
    name: 'Work It',
    city: 'Guadalajara',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 140, // ~$7.80 USD
    monthlyPrice: 1200, // ~$67 USD
    rating: 4.5,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Tech-focused', 'Meeting rooms', 'Event space', 'Networking events', 'Business services'],
    bestFor: ['Tech startups', 'Developers', 'Entrepreneurs'],
    hours: '24/7',
    address: 'Zapopan, Guadalajara'
  },
  {
    name: 'Cafebrería el Péndulo',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'cafe',
    dayPassPrice: 80, // Minimum consumption ~$4.50 USD
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Bookstore-cafe', 'Power outlets', 'Comfortable seating', 'Good atmosphere'],
    bestFor: ['Creative work', 'Reading breaks', 'Casual meetings'],
    hours: '8:00-23:00',
    address: 'Multiple locations (Polanco, Roma, Condesa)'
  },
  {
    name: 'Panificadora Bakers',
    city: 'Oaxaca City',
    country: 'Mexico',
    type: 'cafe',
    dayPassPrice: 60, // ~$3.40 USD minimum
    monthlyPrice: 0,
    rating: 4.2,
    wifiSpeed: 50,
    powerOutlets: 2,
    noiseLevel: 4,
    amenities: ['Artisan bakery', 'WiFi', 'Power outlets', 'Local atmosphere'],
    bestFor: ['Casual work', 'Food lovers', 'Short sessions'],
    hours: '7:00-21:00',
    address: 'Centro Histórico, Oaxaca'
  },
  {
    name: 'Impact Hub',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 200, // ~$11 USD
    monthlyPrice: 1800, // ~$100 USD
    rating: 4.6,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Social impact focus', 'Meeting rooms', 'Event space', 'Community', 'Workshops'],
    bestFor: ['Social entrepreneurs', 'Non-profits', 'Community projects'],
    hours: '8:00-20:00',
    address: 'Roma Norte, Mexico City'
  },
  {
    name: 'BeWorks',
    city: 'Cancún',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 160, // ~$9 USD
    monthlyPrice: 1400, // ~$78 USD
    rating: 4.3,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Modern design', 'Meeting rooms', 'Cafe', 'Business lounge', 'Networking'],
    bestFor: ['Business professionals', 'Tourism industry', 'Corporate work'],
    hours: '8:00-20:00',
    address: 'Hotel Zone, Cancún'
  }
];

export const mexicoNomadData: NomadData = {
  country: "Mexico",
  cities: ["Mexico City", "Playa del Carmen", "Guadalajara", "Oaxaca City", "Puerto Vallarta", "Cancún"],
  internet: {
    speed: 80, // Good in major cities, variable in remote areas
    reliability: 7, // Generally reliable with occasional outages
    coworkingSpaces: 85 // Excellent options, especially in CDMX and Playa
  },
  costs: {
    coworkingMonthly: 1500, // MXN average (~$84 USD)
    simCardMonthly: 200, // MXN for good data plan (~$11 USD)
    coffeeShopWork: 80 // MXN per session (~$4.50 USD minimum spend)
  },
  community: {
    expatSize: 8, // Large and growing digital nomad community
    englishLevel: 6, // Good in tourist areas and major cities
    safety: 7 // Varies by area - research neighborhoods carefully
  },
  workspaces: mexicoWorkspaces
};