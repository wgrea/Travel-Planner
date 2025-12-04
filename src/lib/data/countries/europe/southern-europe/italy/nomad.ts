// src/lib/data/countries/europe/southern-europe/italy/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const italyWorkspaces: Workspace[] = [
  {
    name: 'Impact Hub Rome',
    city: 'Rome',
    country: 'Italy',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 350,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Community Events', 'Kitchen', 'Terrace'],
    bestFor: ['Networking', 'Social Atmosphere', 'Startups'],
    hours: '9:00-19:00',
    address: 'Centro Storico, Rome'
  },
  {
    name: 'Copernico Milan',
    city: 'Milan',
    country: 'Italy',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 450,
    rating: 4.7,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Fiber Optic', 'Business Lounge', 'Event Space', 'Café', 'Printing Services'],
    bestFor: ['Professionals', 'Business Meetings', 'Corporate Environment'],
    hours: '24/7',
    address: 'Porta Nuova, Milan'
  },
  {
    name: 'La Raccolta Firenze',
    city: 'Florence',
    country: 'Italy',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 280,
    rating: 4.4,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Historic Building', 'Garden', 'Coffee Service', 'Local Community', 'Art Exhibitions'],
    bestFor: ['Creatives', 'Artists', 'Cultural Experience'],
    hours: '9:00-18:00',
    address: 'Oltrarno, Florence'
  },
  {
    name: 'Starbucks Reserve Milano',
    city: 'Milan',
    country: 'Italy',
    type: 'cafe',
    hourlyRate: 6,
    rating: 4.6,
    wifiSpeed: 50,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['Premium Coffee', 'Historic Building', 'Multiple Floors', 'Power Outlets', 'WiFi'],
    bestFor: ['Coffee Lovers', 'Tourist Spot', 'Quick Work Sessions'],
    hours: '7:00-23:00',
    address: 'Piazza Cordusio, Milan'
  },
  {
    name: 'Bologna Coworking',
    city: 'Bologna',
    country: 'Italy',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 250,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Student Community', 'Study Rooms', 'Printing', 'Kitchen', 'University Network'],
    bestFor: ['Students', 'Academics', 'Budget Workers'],
    hours: '8:00-22:00',
    address: 'University District, Bologna'
  },
  {
    name: 'Digital Nomads Naples',
    city: 'Naples',
    country: 'Italy',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 200,
    rating: 4.2,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Sea View', 'Local Community', 'Coffee Bar', 'Relaxed Atmosphere', 'Events'],
    bestFor: ['Budget Nomads', 'Slow Travelers', 'Authentic Italian Experience'],
    hours: '9:00-19:00',
    address: 'Vomero, Naples'
  },
  {
    name: 'Bar Centrale',
    city: 'Rome',
    country: 'Italy',
    type: 'cafe',
    hourlyRate: 5,
    rating: 4.1,
    wifiSpeed: 40,
    powerOutlets: 2,
    noiseLevel: 6,
    amenities: ['Traditional Cafe', 'Local Atmosphere', 'Affordable Coffee', 'WiFi', 'Central Location'],
    bestFor: ['Casual Work', 'People Watching', 'Short Sessions'],
    hours: '6:00-22:00',
    address: 'Termini Station Area, Rome'
  }
];

export const italyNomadData: NomadData = {
  country: "Italy",
  cities: ["Rome", "Milan", "Florence", "Naples", "Bologna", "Turin", "Venice", "Palermo"],
  internet: {
    speed: 65,
    reliability: 7,
    coworkingSpaces: 55
  },
  costs: {
    coworkingMonthly: 320,
    simCardMonthly: 15,
    coffeeShopWork: 5
  },
  community: {
    expatSize: 8,
    englishLevel: 5,
    safety: 7
  },
  workspaces: italyWorkspaces
};