import type { NomadData, Workspace } from '$lib/data/nomadData';

export const panamaWorkspaces: Workspace[] = [
  {
    name: 'Selina Cowork Panama City',
    city: 'Panama City',
    country: 'Panama',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 300,
    rating: 4.4,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Community Events', 'Café', 'Printing', 'Meeting Rooms'],
    bestFor: ['Digital Nomads', 'Networking', 'Social Atmosphere'],
    hours: '24/7',
    address: 'Casco Viejo, Panama City'
  },
  {
    name: 'La Cascada CoWork',
    city: 'Panama City',
    country: 'Panama',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 350,
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Fiber Optic', 'Air Conditioning', 'Kitchen', 'Phone Booths', 'Ergonomic Chairs'],
    bestFor: ['Professionals', 'Remote Teams', 'Video Calls'],
    hours: '8:00-20:00',
    address: 'San Francisco, Panama City'
  },
  {
    name: 'Starbucks Multiplaza',
    city: 'Panama City',
    country: 'Panama',
    type: 'cafe',
    hourlyRate: 4,
    rating: 4.0,
    wifiSpeed: 40,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['WiFi', 'Air Conditioning', 'Power Outlets', 'Various Beverages'],
    bestFor: ['Casual Work', 'Quick Stops', 'Meeting Friends'],
    hours: '6:00-23:00',
    address: 'Multiplaza Mall, Panama City'
  },
  {
    name: 'Bocas del Toro Coworking',
    city: 'Bocas del Toro',
    country: 'Panama',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 250,
    rating: 4.3,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Ocean View', 'Community', 'Beach Access', 'Coffee', 'Relaxed Vibe'],
    bestFor: ['Beach Lovers', 'Creatives', 'Relaxed Working'],
    hours: '9:00-18:00',
    address: 'Isla Colón, Bocas del Toro'
  },
  {
    name: 'Boquete Digital Hub',
    city: 'Boquete',
    country: 'Panama',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 200,
    rating: 4.2,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Mountain View', 'High-speed Internet', 'Coffee', 'Community Events'],
    bestFor: ['Nature Lovers', 'Long-term Stays', 'Focused Work'],
    hours: '8:00-19:00',
    address: 'Downtown Boquete'
  }
];

export const panamaNomadData: NomadData = {
  country: "Panama",
  cities: ["Panama City", "Boquete", "Bocas del Toro", "Coronado", "El Valle"],
  internet: {
    speed: 65,
    reliability: 7,
    coworkingSpaces: 45
  },
  costs: {
    coworkingMonthly: 280,
    simCardMonthly: 25,
    coffeeShopWork: 5
  },
  community: {
    expatSize: 8,
    englishLevel: 7,
    safety: 7
  },
  workspaces: panamaWorkspaces
};