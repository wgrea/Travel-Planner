// src/lib/data/countries/middle-east/morocco/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const moroccoWorkspaces: Workspace[] = [
  {
    name: 'Urban Hub Casablanca',
    city: 'Casablanca',
    country: 'Morocco',
    type: 'coworking',
    dayPassPrice: 200,
    monthlyPrice: 2500,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Modern Workspace', 'Meeting Rooms', 'Event Space', 'Coffee Bar', 'Business Services'],
    bestFor: ['Professionals', 'Business Meetings', 'Corporate Environment'],
    hours: '24/7',
    address: 'Maarif, Casablanca'
  },
  {
    name: 'Kechmara',
    city: 'Marrakech',
    country: 'Morocco',
    type: 'cafe',
    hourlyRate: 40,
    rating: 4.4,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 5,
    amenities: ['Art Deco Style', 'Garden Terrace', 'Good Food', 'WiFi', 'Expat Community'],
    bestFor: ['Digital Nomads', 'Creative Work', 'Social Atmosphere'],
    hours: '9:00-23:00',
    address: 'Gueliz, Marrakech'
  },
  {
    name: 'La Factory',
    city: 'Marrakech',
    country: 'Morocco',
    type: 'coworking',
    dayPassPrice: 150,
    monthlyPrice: 2000,
    rating: 4.6,
    wifiSpeed: 70,
    powerOutlets: 6,
    noiseLevel: 3,
    amenities: ['Creative Space', 'Events & Workshops', 'Garden', 'Kitchen', 'Startup Community'],
    bestFor: ['Entrepreneurs', 'Creatives', 'Startups'],
    hours: '9:00-20:00',
    address: 'Gueliz, Marrakech'
  },
  {
    name: 'Café Clock',
    city: 'Fes',
    country: 'Morocco',
    type: 'cafe',
    hourlyRate: 30,
    rating: 4.5,
    wifiSpeed: 40,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Cultural Center', 'Cooking Classes', 'Music Events', 'Traditional Setting', 'Expat Hub'],
    bestFor: ['Cultural Experience', 'Creative Work', 'Community Events'],
    hours: '9:00-22:00',
    address: 'Fes el-Bali, Fes'
  },
  {
    name: 'Surf House Morocco',
    city: 'Taghazout',
    country: 'Morocco',
    type: 'coworking',
    dayPassPrice: 100,
    monthlyPrice: 1500,
    rating: 4.4,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Ocean Views', 'Surf Community', 'Yoga Classes', 'Beach Access', 'Relaxed Atmosphere'],
    bestFor: ['Digital Nomads', 'Surfers', 'Beach Lifestyle'],
    hours: '8:00-19:00',
    address: 'Taghazout Beach'
  },
  {
    name: 'Starbucks',
    city: 'Casablanca',
    country: 'Morocco',
    type: 'cafe',
    hourlyRate: 50,
    rating: 4.2,
    wifiSpeed: 45,
    powerOutlets: 3,
    noiseLevel: 6,
    amenities: ['Reliable Chain', 'Air Conditioning', 'Western Coffee', 'Multiple Locations', 'Familiar Environment'],
    bestFor: ['Reliable Work', 'Meetings', 'Consistent Quality'],
    hours: '7:00-23:00',
    address: 'Multiple locations in Casablanca'
  },
  {
    name: 'Nomad Cafe',
    city: 'Essaouira',
    country: 'Morocco',
    type: 'cafe',
    hourlyRate: 35,
    rating: 4.3,
    wifiSpeed: 35,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Sea Views', 'Creative Community', 'Good Food', 'WiFi', 'Artsy Atmosphere'],
    bestFor: ['Creative Workers', 'Beach Lifestyle', 'Relaxed Work'],
    hours: '8:00-20:00',
    address: 'Medina, Essaouira'
  },
  {
    name: 'The Spot',
    city: 'Rabat',
    country: 'Morocco',
    type: 'coworking',
    dayPassPrice: 180,
    monthlyPrice: 2300,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Modern Design', 'Meeting Rooms', 'Business Services', 'Kitchen', 'Quiet Environment'],
    bestFor: ['Professionals', 'Government Workers', 'Quiet Work'],
    hours: '8:00-20:00',
    address: 'Agdal, Rabat'
  }
];

export const moroccoNomadData: NomadData = {
  country: "Morocco",
  cities: ["Marrakech", "Casablanca", "Fes", "Tangier", "Agadir", "Essaouira", "Chefchaouen", "Rabat"],
  internet: {
    speed: 55,
    reliability: 7,
    coworkingSpaces: 25
  },
  costs: {
    coworkingMonthly: 2100,
    simCardMonthly: 100,
    coffeeShopWork: 40
  },
  community: {
    expatSize: 6,
    englishLevel: 5,
    safety: 7
  },
  workspaces: moroccoWorkspaces
};