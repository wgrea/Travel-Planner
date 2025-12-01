// src/lib/data/countries/europe/western-europe/portugal/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const portugalWorkspaces: Workspace[] = [
  {
    name: 'Second Home',
    city: 'Lisbon',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 22, // ~€22
    monthlyPrice: 200, // ~€200
    rating: 4.7,
    wifiSpeed: 120,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Jungle-like interior', 'Meeting Rooms', 'Free Coffee/Tea', 'Event Space', 'Community Events', 'Beautiful Design'],
    bestFor: ['Creative professionals', 'Startups', 'Design-focused work'],
    hours: '24/7',
    address: 'Santos, Lisbon'
  },
  {
    name: 'Heden',
    city: 'Lisbon',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 20, // ~€20
    monthlyPrice: 180, // ~€180
    rating: 4.6,
    wifiSpeed: 110,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Garden', 'Cafe', 'Meeting rooms', 'Event space', 'Community focus'],
    bestFor: ['Digital nomads', 'Sustainable work', 'Community building'],
    hours: '24/7',
    address: 'Santos, Lisbon'
  },
  {
    name: 'Porto i/o',
    city: 'Porto',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 18, // ~€18
    monthlyPrice: 160, // ~€160
    rating: 4.5,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['River views', 'Meeting rooms', 'Kitchen', 'Community events', 'Bike parking'],
    bestFor: ['Digital nomads', 'Tech community', 'Creative work'],
    hours: '24/7',
    address: 'Ribeira, Porto'
  },
  {
    name: 'Cowork Central',
    city: 'Porto',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 16, // ~€16
    monthlyPrice: 140, // ~€140
    rating: 4.4,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Central location', 'Meeting rooms', 'Cafe', 'Event space', 'Networking'],
    bestFor: ['Freelancers', 'Startups', 'Business networking'],
    hours: '8:00-20:00',
    address: 'Baixa, Porto'
  },
  {
    name: 'CRU Cowork',
    city: 'Lisbon',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 25, // ~€25
    monthlyPrice: 220, // ~€220
    rating: 4.6,
    wifiSpeed: 115,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Luxury facilities', 'Meeting rooms', 'Cafe', 'Event space', 'Business services'],
    bestFor: ['Corporate teams', 'Professional services', 'Business meetings'],
    hours: '24/7',
    address: 'Marquês de Pombal, Lisbon'
  },
  {
    name: 'LACS',
    city: 'Cascais',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 20, // ~€20
    monthlyPrice: 180, // ~€180
    rating: 4.5,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beach proximity', 'Garden', 'Meeting rooms', 'Community', 'Surf culture'],
    bestFor: ['Digital nomads', 'Beach lifestyle', 'Work-life balance'],
    hours: '24/7',
    address: 'Cascais'
  },
  {
    name: 'Fabrica Coffee Roasters',
    city: 'Lisbon',
    country: 'Portugal',
    type: 'cafe',
    dayPassPrice: 10, // Minimum consumption ~€10
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty coffee', 'Power outlets', 'Comfortable seating', 'Local vibe'],
    bestFor: ['Casual work', 'Coffee lovers', 'Short sessions'],
    hours: '8:00-19:00',
    address: 'Multiple locations in Lisbon'
  },
  {
    name: 'Mesa 325',
    city: 'Porto',
    country: 'Portugal',
    type: 'cafe',
    dayPassPrice: 8, // ~€8 minimum
    monthlyPrice: 0,
    rating: 4.2,
    wifiSpeed: 65,
    powerOutlets: 2,
    noiseLevel: 4,
    amenities: ['Cozy atmosphere', 'WiFi', 'Power outlets', 'Good coffee'],
    bestFor: ['Students', 'Freelancers', 'Creative work'],
    hours: '8:00-20:00',
    address: 'Cedofeita, Porto'
  },
  {
    name: 'Madeira Cowork',
    city: 'Funchal',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 15, // ~€15
    monthlyPrice: 130, // ~€130
    rating: 4.4,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Island views', 'Meeting rooms', 'Community events', 'Outdoor spaces'],
    bestFor: ['Digital nomads', 'Island living', 'Nature lovers'],
    hours: '8:00-20:00',
    address: 'Funchal, Madeira'
  }
];

export const portugalNomadData: NomadData = {
  country: "Portugal",
  cities: ["Lisbon", "Porto", "Cascais", "Faro", "Madeira", "Azores", "Coimbra"],
  internet: {
    speed: 85, // Good fiber optic coverage in cities
    reliability: 8, // Very reliable, especially in urban areas
    coworkingSpaces: 90 // Excellent options, particularly in Lisbon and Porto
  },
  costs: {
    coworkingMonthly: 180, // EUR average
    simCardMonthly: 15, // EUR for good data plan
    coffeeShopWork: 8 // EUR per session (minimum spend)
  },
  community: {
    expatSize: 9, // Very large and growing digital nomad community
    englishLevel: 7, // Very good, especially among younger population
    safety: 9 // Exceptionally safe country
  },
  workspaces: portugalWorkspaces
};