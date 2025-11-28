// /src/lib/data/countries/europe/caucasus/azerbaijan/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const azerbaijanWorkspaces: Workspace[] = [
  {
    name: 'Impact Hub Baku',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 250,
    rating: 4.3,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Event Space', 'Kitchen', 'Community Events'],
    bestFor: ['Networking', 'Startups', 'Professional meetings'],
    hours: '9:00-18:00',
    address: 'City center, Baku'
  },
  {
    name: 'The Office Baku',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 220,
    rating: 4.1,
    wifiSpeed: 55,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['24/7 Access', 'Printing', 'Phone Booths', 'Coffee', 'Lounge Area'],
    bestFor: ['Flexible hours', 'Remote workers', 'Business services'],
    hours: '24/7',
    address: 'Nizami Street, Baku'
  },
  {
    name: 'Coffee Moffie',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'cafe',
    hourlyRate: 3,
    rating: 4.2,
    wifiSpeed: 35,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Local Coffee', 'Desserts', 'Power Outlets', 'WiFi', 'Cozy Atmosphere'],
    bestFor: ['Casual work', 'Coffee lovers', 'Short sessions'],
    hours: '8:00-22:00',
    address: 'Fountain Square, Baku'
  },
  {
    name: 'Ganja Tech Hub',
    city: 'Ganja',
    country: 'Azerbaijan',
    type: 'coworking',
    dayPassPrice: 12,
    monthlyPrice: 150,
    rating: 4.0,
    wifiSpeed: 45,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Community Space', 'Meeting Rooms', 'WiFi', 'Coffee', 'Events'],
    bestFor: ['Local entrepreneurs', 'Small teams', 'Affordable workspace'],
    hours: '9:00-19:00',
    address: 'City center, Ganja'
  }
];

export const azerbaijanNomadData: NomadData = {
  country: "Azerbaijan",
  cities: ["Baku", "Ganja", "Sumqayit"],
  internet: {
    speed: 45,
    reliability: 6,
    coworkingSpaces: 25
  },
  costs: {
    coworkingMonthly: 180,
    simCardMonthly: 10,
    coffeeShopWork: 4
  },
  community: {
    expatSize: 4,
    englishLevel: 3,
    safety: 7
  },
  workspaces: azerbaijanWorkspaces
};
