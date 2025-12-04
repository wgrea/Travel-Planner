import type { NomadData, Workspace } from '$lib/data/nomadData';

export const franceWorkspaces: Workspace[] = [
  {
    name: 'Station F',
    city: 'Paris',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 40,
    monthlyPrice: 550,
    rating: 4.8,
    wifiSpeed: 150,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['World\'s Largest Startup Campus', 'Events & Workshops', 'Restaurants', 'Meeting Rooms', '24/7 Access'],
    bestFor: ['Entrepreneurs', 'Tech Startups', 'Networking'],
    hours: '24/7',
    address: '5 Parvis Alan Turing, 75013 Paris'
  },
  {
    name: 'WeWork République',
    city: 'Paris',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 450,
    rating: 4.6,
    wifiSpeed: 120,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Premium Workspace', 'Meeting Rooms', 'Coffee Bar', 'Community Events', 'Printing'],
    bestFor: ['Professionals', 'Freelancers', 'Remote Teams'],
    hours: '24/7',
    address: 'Place de la République, 75011 Paris'
  },
  {
    name: 'Anticafé',
    city: 'Paris',
    country: 'France',
    type: 'cafe',
    hourlyRate: 5,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Unlimited Coffee/Tea', 'Snacks Included', 'Meeting Rooms', 'Board Games', 'Relaxed Atmosphere'],
    bestFor: ['Students', 'Budget Workers', 'Creative Work'],
    hours: '9:00-22:00',
    address: 'Multiple locations in Paris'
  },
  {
    name: 'La Cordée',
    city: 'Lyon',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 320,
    rating: 4.4,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Historic Building', 'Garden Terrace', 'Local Community', 'Events', 'Kitchen'],
    bestFor: ['Creative Professionals', 'Sustainable Businesses', 'Community Focus'],
    hours: '8:30-19:00',
    address: 'Presqu\'île, Lyon'
  },
  {
    name: 'Le Loft',
    city: 'Marseille',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 280,
    rating: 4.3,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Sea View', 'Roof Terrace', 'Community Events', 'Coffee Bar', 'Relaxed Vibe'],
    bestFor: ['Digital Nomads', 'Creatives', 'Mediterranean Lifestyle'],
    hours: '9:00-20:00',
    address: 'Vieux-Port, Marseille'
  },
  {
    name: 'Caffeine',
    city: 'Nice',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 22,
    monthlyPrice: 300,
    rating: 4.4,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Modern Design', 'Meeting Rooms', 'Terrace', 'Networking Events', 'Beach Proximity'],
    bestFor: ['Seasonal Workers', 'Coastal Lifestyle', 'Professional Networking'],
    hours: '8:30-19:30',
    address: 'Promenade des Anglais area, Nice'
  },
  {
    name: 'Le Bureau',
    city: 'Bordeaux',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 23,
    monthlyPrice: 310,
    rating: 4.3,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Wine Bar', 'Garden', 'Business Services', 'Local Network', 'Wine Tastings'],
    bestFor: ['Wine Industry', 'Business Travelers', 'Local Networking'],
    hours: '8:00-20:00',
    address: 'City Center, Bordeaux'
  },
  {
    name: 'Starbucks Opera',
    city: 'Paris',
    country: 'France',
    type: 'cafe',
    hourlyRate: 6,
    rating: 4.2,
    wifiSpeed: 50,
    powerOutlets: 3,
    noiseLevel: 6,
    amenities: ['Reliable Chain', 'Multiple Floors', 'Power Outlets', 'Central Location', 'Tourist Spot'],
    bestFor: ['Tourists', 'Quick Work', 'Reliable WiFi'],
    hours: '7:00-23:00',
    address: 'Boulevard des Capucines, Paris'
  }
];

export const franceNomadData: NomadData = {
  country: "France",
  cities: ["Paris", "Lyon", "Marseille", "Nice", "Toulouse", "Bordeaux", "Lille", "Strasbourg"],
  internet: {
    speed: 85,
    reliability: 8,
    coworkingSpaces: 75
  },
  costs: {
    coworkingMonthly: 380,
    simCardMonthly: 20,
    coffeeShopWork: 5
  },
  community: {
    expatSize: 9,
    englishLevel: 6,
    safety: 8
  },
  workspaces: franceWorkspaces
};