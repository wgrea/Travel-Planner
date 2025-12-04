// src/lib/data/countries/south-asia/india/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const indiaWorkspaces: Workspace[] = [
  {
    name: 'WeWork Galaxy, Bangalore',
    city: 'Bangalore',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 1500,
    monthlyPrice: 20000,
    rating: 4.7,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Café', 'Event Space', 'Printing Services'],
    bestFor: ['Tech Professionals', 'Startups', 'Networking'],
    hours: '24/7',
    address: 'Residency Road, Bangalore'
  },
  {
    name: 'Social Offline',
    city: 'Mumbai',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 1200,
    monthlyPrice: 18000,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Café/Bar', 'Community Events', 'Music', 'Creative Space', 'Networking'],
    bestFor: ['Creatives', 'Young Professionals', 'Social Atmosphere'],
    hours: '9:00-23:00',
    address: 'Khar West, Mumbai'
  },
  {
    name: 'Starbucks',
    city: 'Delhi',
    country: 'India',
    type: 'cafe',
    hourlyRate: 200,
    rating: 4.2,
    wifiSpeed: 50,
    powerOutlets: 3,
    noiseLevel: 6,
    amenities: ['Air Conditioning', 'Reliable WiFi', 'Western Coffee', 'Comfortable Seating'],
    bestFor: ['Casual Work', 'Meetings', 'Reliable Chain'],
    hours: '7:00-23:00',
    address: 'Multiple locations in Delhi NCR'
  },
  {
    name: 'Goa Coworking',
    city: 'Goa',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 800,
    monthlyPrice: 12000,
    rating: 4.4,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Pool Access', 'Beach Proximity', 'Community Events', 'Yoga Classes', 'Relaxed Vibe'],
    bestFor: ['Digital Nomads', 'Beach Lifestyle', 'Creative Work'],
    hours: '9:00-19:00',
    address: 'Anjuna, Goa'
  },
  {
    name: 'IndiQube Alpha',
    city: 'Bangalore',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 1000,
    monthlyPrice: 15000,
    rating: 4.3,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Business Services', 'Meeting Rooms', 'High-speed Internet', 'Lounge', 'Cafeteria'],
    bestFor: ['Professionals', 'Business Meetings', 'Corporate Environment'],
    hours: '24/7',
    address: 'Koramangala, Bangalore'
  },
  {
    name: 'Café Coffee Day',
    city: 'Various',
    country: 'India',
    type: 'cafe',
    hourlyRate: 150,
    rating: 4.0,
    wifiSpeed: 30,
    powerOutlets: 2,
    noiseLevel: 5,
    amenities: ['Nationwide Chain', 'Basic WiFi', 'Coffee & Snacks', 'Air Conditioning'],
    bestFor: ['Budget Work', 'Quick Sessions', 'Reliable Locations'],
    hours: '8:00-22:00',
    address: 'Nationwide locations'
  },
  {
    name: '91springboard',
    city: 'Delhi',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 1100,
    monthlyPrice: 16000,
    rating: 4.4,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Startup Community', 'Mentorship', 'Events', 'Meeting Rooms', 'Networking'],
    bestFor: ['Entrepreneurs', 'Startups', 'Innovators'],
    hours: '24/7',
    address: 'Okhla Phase 3, Delhi'
  },
  {
    name: 'The Backyard',
    city: 'Pune',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 900,
    monthlyPrice: 13000,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Garden Workspace', 'Community Kitchen', 'Events', 'Quiet Environment', 'Local Network'],
    bestFor: ['Creative Professionals', 'Sustainable Work', 'Community Focus'],
    hours: '9:00-21:00',
    address: 'Koregaon Park, Pune'
  }
];

export const indiaNomadData: NomadData = {
  country: "India",
  cities: ["Delhi", "Mumbai", "Bangalore", "Goa", "Pune", "Chennai", "Hyderabad", "Kolkata"],
  internet: {
    speed: 50,
    reliability: 6,
    coworkingSpaces: 65
  },
  costs: {
    coworkingMonthly: 16000,
    simCardMonthly: 300,
    coffeeShopWork: 180
  },
  community: {
    expatSize: 7,
    englishLevel: 8,
    safety: 6
  },
  workspaces: indiaWorkspaces
};