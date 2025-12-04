// src/lib/data/countries/south-asia/bangladesh/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const bangladeshWorkspaces: Workspace[] = [
  {
    name: 'GP Accelerator',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'coworking',
    dayPassPrice: 800,
    monthlyPrice: 12000,
    rating: 4.3,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['High-speed Internet', 'Meeting Rooms', 'Event Space', 'Café', 'Startup Community'],
    bestFor: ['Entrepreneurs', 'Startups', 'Tech Professionals'],
    hours: '9:00-20:00',
    address: 'Gulshan 1, Dhaka'
  },
  {
    name: 'The Office Dhaka',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'coworking',
    dayPassPrice: 1000,
    monthlyPrice: 15000,
    rating: 4.4,
    wifiSpeed: 60,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Business Lounge', 'Printing Services', 'Phone Booths', 'Kitchen', '24/7 Access'],
    bestFor: ['Professionals', 'Corporate Workers', 'Remote Teams'],
    hours: '24/7',
    address: 'Banani, Dhaka'
  },
  {
    name: 'Coffee World',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'cafe',
    hourlyRate: 150,
    rating: 4.0,
    wifiSpeed: 30,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['Air Conditioning', 'WiFi', 'Power Outlets', 'Coffee & Snacks', 'Multiple Locations'],
    bestFor: ['Casual Work', 'Meetings', 'Budget Option'],
    hours: '8:00-22:00',
    address: 'Gulshan 2, Dhaka'
  },
  {
    name: 'Chittagong Business Hub',
    city: 'Chittagong',
    country: 'Bangladesh',
    type: 'coworking',
    dayPassPrice: 600,
    monthlyPrice: 9000,
    rating: 4.1,
    wifiSpeed: 45,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Port Views', 'Business Services', 'Meeting Rooms', 'Local Network', 'Printing'],
    bestFor: ['Business Travelers', 'Local Entrepreneurs', 'Exporters'],
    hours: '9:00-19:00',
    address: 'Agrabad, Chittagong'
  },
  {
    name: 'North End Coffee Roasters',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'cafe',
    hourlyRate: 200,
    rating: 4.2,
    wifiSpeed: 35,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Artisanal Pastries', 'Comfortable Seating', 'Air Conditioning', 'Good Atmosphere'],
    bestFor: ['Coffee Lovers', 'Creative Work', 'Casual Meetings'],
    hours: '7:00-21:00',
    address: 'Dhanmondi, Dhaka'
  },
  {
    name: 'Sylhet Tea Hub',
    city: 'Sylhet',
    country: 'Bangladesh',
    type: 'cafe',
    hourlyRate: 100,
    rating: 4.0,
    wifiSpeed: 25,
    powerOutlets: 2,
    noiseLevel: 5,
    amenities: ['Local Tea', 'Traditional Snacks', 'Basic WiFi', 'Local Atmosphere', 'Affordable'],
    bestFor: ['Budget Travelers', 'Local Experience', 'Simple Work'],
    hours: '8:00-20:00',
    address: 'Sylhet City Center'
  },
  {
    name: 'Cox\'s Bazar Digital Nomads',
    city: 'Cox\'s Bazar',
    country: 'Bangladesh',
    type: 'coworking',
    dayPassPrice: 500,
    monthlyPrice: 8000,
    rating: 4.1,
    wifiSpeed: 40,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Beach Views', 'Relaxed Atmosphere', 'Community Events', 'Coffee & Tea', 'Beach Access'],
    bestFor: ['Digital Nomads', 'Seasonal Workers', 'Beach Lifestyle'],
    hours: '9:00-18:00',
    address: 'Marine Drive, Cox\'s Bazar'
  }
];

export const bangladeshNomadData: NomadData = {
  country: "Bangladesh",
  cities: ["Dhaka", "Chittagong", "Sylhet", "Cox's Bazar", "Rajshahi", "Khulna"],
  internet: {
    speed: 35,
    reliability: 5,
    coworkingSpaces: 12
  },
  costs: {
    coworkingMonthly: 11000,
    simCardMonthly: 400,
    coffeeShopWork: 150
  },
  community: {
    expatSize: 3,
    englishLevel: 6,
    safety: 6
  },
  workspaces: bangladeshWorkspaces
};