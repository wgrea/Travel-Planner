// src/lib/data/countries/east-asia/japan/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const japanWorkspaces: Workspace[] = [
  {
    name: 'WeWork Marunouchi',
    city: 'Tokyo',
    country: 'Japan',
    type: 'coworking',
    dayPassPrice: 50,
    monthlyPrice: 650,
    rating: 4.7,
    wifiSpeed: 150,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Business Lounge', 'Meeting Rooms', 'Printing Services', 'Coffee Bar', 'Phone Booths'],
    bestFor: ['Professionals', 'Business Meetings', 'Corporate Environment'],
    hours: '24/7',
    address: 'Marunouchi, Chiyoda, Tokyo'
  },
  {
    name: 'The Terminal Shibuya',
    city: 'Tokyo',
    country: 'Japan',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 450,
    rating: 4.5,
    wifiSpeed: 120,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Community Events', 'Café', 'Event Space', 'High-speed Internet', 'Comfortable Seating'],
    bestFor: ['Digital Nomads', 'Startups', 'Networking'],
    hours: '9:00-22:00',
    address: 'Shibuya, Tokyo'
  },
  {
    name: 'Starbucks Reserve Roastery',
    city: 'Tokyo',
    country: 'Japan',
    type: 'cafe',
    hourlyRate: 8,
    rating: 4.6,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 5,
    amenities: ['Premium Coffee', 'Power Outlets', 'WiFi', 'Multiple Floors', 'Specialty Brews'],
    bestFor: ['Coffee Lovers', 'Casual Meetings', 'Inspiring Environment'],
    hours: '7:00-23:00',
    address: 'Nakameguro, Tokyo'
  },
  {
    name: 'Impact Hub Kyoto',
    city: 'Kyoto',
    country: 'Japan',
    type: 'coworking',
    dayPassPrice: 30,
    monthlyPrice: 400,
    rating: 4.4,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Traditional Garden', 'Meeting Rooms', 'Community Events', 'Tea Service', 'Bike Parking'],
    bestFor: ['Creatives', 'Sustainable Projects', 'Cultural Exchange'],
    hours: '9:00-20:00',
    address: 'Nakagyo Ward, Kyoto'
  },
  {
    name: 'Osaka Business Hub',
    city: 'Osaka',
    country: 'Japan',
    type: 'coworking',
    dayPassPrice: 28,
    monthlyPrice: 380,
    rating: 4.3,
    wifiSpeed: 110,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Business Services', 'Printing/Scanning', 'Video Conference Rooms', 'Lounge Area', 'Kitchenette'],
    bestFor: ['Business Travelers', 'Remote Workers', 'Small Teams'],
    hours: '8:00-22:00',
    address: 'Umeda, Osaka'
  },
  {
    name: 'Fukuoka Growth Hub',
    city: 'Fukuoka',
    country: 'Japan',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 320,
    rating: 4.2,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Startup Community', 'Mentorship Programs', 'High-speed Internet', 'Event Space', 'Local Network'],
    bestFor: ['Entrepreneurs', 'Startups', 'Tech Community'],
    hours: '9:00-21:00',
    address: 'Hakata Ward, Fukuoka'
  },
  {
    name: 'Tully\'s Coffee',
    city: 'Various',
    country: 'Japan',
    type: 'cafe',
    hourlyRate: 6,
    rating: 4.0,
    wifiSpeed: 40,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Reliable WiFi', 'Power Outlets', 'Coffee & Light Meals', 'Convenient Locations'],
    bestFor: ['Quick Work Sessions', 'Reliable Chain', 'Budget Work Option'],
    hours: '7:00-22:00',
    address: 'Nationwide locations'
  }
];

export const japanNomadData: NomadData = {
  country: "Japan",
  cities: ["Tokyo", "Osaka", "Kyoto", "Fukuoka", "Sapporo", "Nagoya", "Hiroshima", "Okinawa"],
  internet: {
    speed: 115,
    reliability: 9,
    coworkingSpaces: 85
  },
  costs: {
    coworkingMonthly: 450,
    simCardMonthly: 35,
    coffeeShopWork: 7
  },
  community: {
    expatSize: 8,
    englishLevel: 6,
    safety: 10
  },
  workspaces: japanWorkspaces
};