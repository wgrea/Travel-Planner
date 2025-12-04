// src/lib/data/countries/southeast-asia/laos/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const laosWorkspaces: Workspace[] = [
  {
    name: 'Common Grounds Vientiane',
    city: 'Vientiane',
    country: 'Laos',
    type: 'cafe',
    hourlyRate: 3,
    rating: 4.5,
    wifiSpeed: 25,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Good Coffee', 'Western Food', 'Air Conditioning', 'Power Outlets', 'Reliable WiFi'],
    bestFor: ['Digital Nomads', 'Expat Community', 'Casual Work'],
    hours: '7:00-21:00',
    address: 'Setthathirath Road, Vientiane'
  },
  {
    name: 'Joma Bakery Cafe',
    city: 'Vientiane',
    country: 'Laos',
    type: 'cafe',
    hourlyRate: 2.5,
    rating: 4.3,
    wifiSpeed: 20,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['Bakery Items', 'Coffee', 'WiFi', 'Air Conditioning', 'Multiple Locations'],
    bestFor: ['Budget Work', 'Quick Sessions', 'Reliable Chain'],
    hours: '6:30-20:30',
    address: 'Multiple locations in Vientiane'
  },
  {
    name: 'Saffron Coffee',
    city: 'Luang Prabang',
    country: 'Laos',
    type: 'cafe',
    hourlyRate: 3,
    rating: 4.6,
    wifiSpeed: 30,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Specialty Coffee', 'Mekong River View', 'Local Roastery', 'Power Outlets', 'Peaceful Atmosphere'],
    bestFor: ['Creative Work', 'Coffee Lovers', 'Relaxed Environment'],
    hours: '7:00-19:00',
    address: 'Mekong Riverside, Luang Prabang'
  },
  {
    name: 'Vang Vieng Digital Hub',
    city: 'Vang Vieng',
    country: 'Laos',
    type: 'coworking',
    dayPassPrice: 8,
    monthlyPrice: 120,
    rating: 4.2,
    wifiSpeed: 35,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Dedicated Workspace', 'High-speed Internet', 'Coffee & Tea', 'Mountain Views', 'Nomad Community'],
    bestFor: ['Digital Nomads', 'Remote Workers', 'Nature Lovers'],
    hours: '8:00-20:00',
    address: 'Main Street, Vang Vieng'
  },
  {
    name: 'IndoChine Cafe',
    city: 'Pakse',
    country: 'Laos',
    type: 'cafe',
    hourlyRate: 2,
    rating: 4.0,
    wifiSpeed: 15,
    powerOutlets: 2,
    noiseLevel: 5,
    amenities: ['Local Cafe', 'Simple Food', 'Basic WiFi', 'Fans', 'Local Atmosphere'],
    bestFor: ['Budget Travelers', 'Simple Work', 'Authentic Experience'],
    hours: '7:00-19:00',
    address: 'Downtown Pakse'
  },
  {
    name: 'Luang Prabang Library Cafe',
    city: 'Luang Prabang',
    country: 'Laos',
    type: 'cafe',
    hourlyRate: 2.5,
    rating: 4.4,
    wifiSpeed: 25,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Quiet Atmosphere', 'Books Available', 'Coffee & Snacks', 'Cultural Setting', 'Peaceful'],
    bestFor: ['Focused Work', 'Reading', 'Quiet Environment'],
    hours: '8:00-18:00',
    address: 'Sisavangvong Road, Luang Prabang'
  },
  {
    name: 'Vientiane Co-working Space',
    city: 'Vientiane',
    country: 'Laos',
    type: 'coworking',
    dayPassPrice: 10,
    monthlyPrice: 150,
    rating: 4.1,
    wifiSpeed: 40,
    powerOutlets: 6,
    noiseLevel: 3,
    amenities: ['Air Conditioning', 'Meeting Room', 'Printing', 'Kitchen', 'International Community'],
    bestFor: ['Professionals', 'Small Teams', 'Business Services'],
    hours: '8:00-20:00',
    address: 'Samsenthai Road, Vientiane'
  }
];

export const laosNomadData: NomadData = {
  country: "Laos",
  cities: ["Vientiane", "Luang Prabang", "Vang Vieng", "Pakse", "Savannakhet", "Thakhek"],
  internet: {
    speed: 25,
    reliability: 5,
    coworkingSpaces: 8
  },
  costs: {
    coworkingMonthly: 120,
    simCardMonthly: 8,
    coffeeShopWork: 2.5
  },
  community: {
    expatSize: 4,
    englishLevel: 4,
    safety: 8
  },
  workspaces: laosWorkspaces
};