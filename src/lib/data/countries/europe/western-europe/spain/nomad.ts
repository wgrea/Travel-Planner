// src/lib/data/countries/europe/western-europe/spain/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const spainWorkspaces: Workspace[] = [
  {
    name: 'Utopicus',
    city: 'Madrid',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 25, // ~€25
    monthlyPrice: 220, // ~€220
    rating: 4.7,
    wifiSpeed: 120,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Roof Terrace'],
    bestFor: ['Startups', 'Freelancers', 'Professional networking'],
    hours: '24/7',
    address: 'Multiple locations in Madrid (Chueca, Chamberí, Salamanca)'
  },
  {
    name: 'OneCowork',
    city: 'Barcelona',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 28, // ~€28
    monthlyPrice: 240, // ~€240
    rating: 4.6,
    wifiSpeed: 110,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Sea views', 'Cafe', 'Meeting rooms', 'Event space', 'Community events'],
    bestFor: ['Digital nomads', 'Creative professionals', 'Startups'],
    hours: '24/7',
    address: 'Diagonal Mar, Barcelona'
  },
  {
    name: 'La Vaca Coworking',
    city: 'Valencia',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 18, // ~€18
    monthlyPrice: 160, // ~€160
    rating: 4.5,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Garden patio', 'Kitchen', 'Meeting rooms', 'Community focus', 'Bike parking'],
    bestFor: ['Digital nomads', 'Sustainable work', 'Community building'],
    hours: '8:00-20:00',
    address: 'Ruzafa, Valencia'
  },
  {
    name: 'Wayco',
    city: 'Seville',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 20, // ~€20
    monthlyPrice: 180, // ~€180
    rating: 4.4,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Andalusian patio', 'Meeting rooms', 'Cafe', 'Event space', 'Cultural activities'],
    bestFor: ['Remote workers', 'Cultural immersion', 'Slow travel'],
    hours: '8:00-20:00',
    address: 'Centro Histórico, Seville'
  },
  {
    name: 'Impact Hub',
    city: 'Madrid',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 30, // ~€30
    monthlyPrice: 260, // ~€260
    rating: 4.6,
    wifiSpeed: 110,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Social impact focus', 'Meeting rooms', 'Event space', 'Workshops', 'Community'],
    bestFor: ['Social entrepreneurs', 'Non-profits', 'Sustainability projects'],
    hours: '8:00-22:00',
    address: 'Lavapiés, Madrid'
  },
  {
    name: 'Betahaus',
    city: 'Barcelona',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 25, // ~€25
    monthlyPrice: 230, // ~€230
    rating: 4.5,
    wifiSpeed: 105,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Creative space', 'Cafe', 'Meeting rooms', 'Event space', 'Maker space'],
    bestFor: ['Creative professionals', 'Designers', 'Tech startups'],
    hours: '24/7',
    address: 'Gràcia, Barcelona'
  },
  {
    name: 'Federal Café',
    city: 'Madrid',
    country: 'Spain',
    type: 'cafe',
    dayPassPrice: 12, // Minimum consumption ~€12
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty coffee', 'Healthy food', 'Power outlets', 'Modern design'],
    bestFor: ['Casual work', 'Coffee lovers', 'Short sessions'],
    hours: '8:00-21:00',
    address: 'Multiple locations in Madrid'
  },
  {
    name: 'Syra Coffee',
    city: 'Barcelona',
    country: 'Spain',
    type: 'cafe',
    dayPassPrice: 10, // ~€10 minimum
    monthlyPrice: 0,
    rating: 4.2,
    wifiSpeed: 65,
    powerOutlets: 2,
    noiseLevel: 4,
    amenities: ['Artisan coffee', 'Power outlets', 'Comfortable seating', 'Local vibe'],
    bestFor: ['Morning work sessions', 'Freelancers', 'Creative work'],
    hours: '7:30-20:00',
    address: 'Multiple locations in Barcelona'
  },
  {
    name: 'CoworkingC',
    city: 'Malaga',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 22, // ~€22
    monthlyPrice: 190, // ~€190
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beach proximity', 'Rooftop terrace', 'Meeting rooms', 'Community events'],
    bestFor: ['Digital nomads', 'Beach lifestyle', 'Tech community'],
    hours: '24/7',
    address: 'Soho, Malaga'
  }
];

export const spainNomadData: NomadData = {
  country: "Spain",
  cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga", "Granada", "Bilbao"],
  internet: {
    speed: 90, // Excellent fiber optic coverage in cities
    reliability: 8, // Very reliable with high-speed connections
    coworkingSpaces: 95 // Abundant options across all major cities
  },
  costs: {
    coworkingMonthly: 200, // EUR average
    simCardMonthly: 20, // EUR for good data plan
    coffeeShopWork: 10 // EUR per session (minimum spend)
  },
  community: {
    expatSize: 9, // Very large expat and digital nomad community
    englishLevel: 6, // Good in major cities, less in rural areas
    safety: 8 // Generally very safe, standard precautions needed
  },
  workspaces: spainWorkspaces
};