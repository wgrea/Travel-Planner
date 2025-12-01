//src/lib/data/countries/southeast-asia/vietnam/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const vietnamWorkspaces: Workspace[] = [
  {
    name: 'Dreamplex',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 200,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Coffee', 'Event Space', 'Phone Booths'],
    bestFor: ['Professional meetings', 'Team work', 'Networking'],
    hours: '24/7',
    address: 'Multiple locations in District 1 and District 2'
  },
  {
    name: 'Saigon Coworking',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    type: 'coworking',
    dayPassPrice: 12,
    monthlyPrice: 160,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['24/7 Access', 'Kitchen', 'Printing', 'Lockers'],
    bestFor: ['Focused work', 'Long hours', 'Privacy'],
    hours: '24/7'
  },
  {
    name: 'Toong Coworking Space',
    city: 'Hanoi',
    country: 'Vietnam',
    type: 'coworking',
    dayPassPrice: 14,
    monthlyPrice: 180,
    rating: 4.4,
    wifiSpeed: 85,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Cafe', 'Event Space'],
    bestFor: ['Creative work', 'Networking', 'Startups'],
    hours: '24/7'
  },
  {
    name: 'UP Coworking Space',
    city: 'Hanoi',
    country: 'Vietnam',
    type: 'coworking',
    dayPassPrice: 10,
    monthlyPrice: 140,
    rating: 4.2,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Quiet zones', 'Meeting Rooms', 'Kitchen', 'Printing'],
    bestFor: ['Focused work', 'Students', 'Remote workers'],
    hours: '7:00 AM - 10:00 PM'
  },
  {
    name: 'The Workshop Coffee',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    type: 'cafe',
    hourlyRate: 3,
    rating: 4.1,
    wifiSpeed: 45,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Power Outlets', 'WiFi', 'Food'],
    bestFor: ['Coffee lovers', 'Creative work', 'Short sessions'],
    hours: '7:30 AM - 10:00 PM'
  },
  {
    name: 'DNES Coworking Space',
    city: 'Da Nang',
    country: 'Vietnam',
    type: 'coworking',
    dayPassPrice: 8,
    monthlyPrice: 120,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beach proximity', 'Meeting Rooms', 'Coffee', 'Events'],
    bestFor: ['Beach lifestyle', 'Digital nomads', 'Relaxed work'],
    hours: '24/7'
  }
];

export const vietnamNomadData: NomadData = {
  country: "Vietnam",
  cities: ["Ho Chi Minh City", "Hanoi", "Da Nang"],
  internet: {
    speed: 65,
    reliability: 7,
    coworkingSpaces: 80
  },
  costs: {
    coworkingMonthly: 120,
    simCardMonthly: 10,
    coffeeShopWork: 5
  },
  community: {
    expatSize: 8,
    englishLevel: 5,
    safety: 7
  },
  workspaces: vietnamWorkspaces
};
