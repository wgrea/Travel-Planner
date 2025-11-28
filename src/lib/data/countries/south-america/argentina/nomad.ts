// src/lib/data/countries/south-america/argentina/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const argentinaWorkspaces: Workspace[] = [
  {
    name: 'Urban Station',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 180,
    rating: 4.5,
    wifiSpeed: 85,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Coffee', 'Printing', 'Event Space'],
    bestFor: ['Professional meetings', 'Team work', 'Networking'],
    hours: '24/7',
    address: 'Multiple locations in Palermo and Microcentro'
  },
  {
    name: 'La Maquinita Co.',
    city: 'Buenos Aires', 
    country: 'Argentina',
    type: 'coworking',
    dayPassPrice: 12,
    monthlyPrice: 150,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['24/7 Access', 'Event Space', 'Kitchen', 'Phone Booths', 'Lockers'],
    bestFor: ['Focused work', 'Long hours', 'Privacy'],
    hours: '24/7'
  },
  {
    name: 'Café Martínez',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'cafe',
    hourlyRate: 4,
    rating: 4.2,
    wifiSpeed: 45,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Pastries', 'Power Outlets', 'WiFi', 'Outdoor Seating'],
    bestFor: ['Casual work', 'Coffee breaks', 'Quick sessions'],
    hours: '7:00-22:00',
    address: 'Multiple locations throughout Buenos Aires'
  },
  {
    name: 'Starbucks Reserve',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'cafe',
    hourlyRate: 5,
    rating: 4.0,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 5,
    amenities: ['Premium Coffee', 'Comfortable Seating', 'Power Outlets', 'WiFi', 'Food Menu'],
    bestFor: ['Reliable WiFi', 'Consistent environment', 'Group work'],
    hours: '6:30-23:00',
    address: 'Alto Palermo Shopping Center'
  },
  {
    name: 'LAB Tostadores de Café',
    city: 'Cordoba',
    country: 'Argentina',
    type: 'cafe',
    hourlyRate: 3,
    rating: 4.4,
    wifiSpeed: 40,
    powerOutlets: 2,
    noiseLevel: 3,
    amenities: ['Artisan Coffee', 'Local Atmosphere', 'Power Outlets', 'WiFi'],
    bestFor: ['Focused work', 'Coffee enthusiasts', 'Local experience'],
    hours: '8:00-20:00',
    address: 'Güemes neighborhood, Cordoba'
  }
  // ... your existing workspaces
];

// Remove the duplicate argentinaNomadData declaration - keep only this one:
export const argentinaNomadData: NomadData = {
  country: "Argentina",
  cities: ["Buenos Aires", "Cordoba", "Mendoza"],
  internet: {
    speed: 55,
    reliability: 6,
    coworkingSpaces: 50
  },
  costs: {
    coworkingMonthly: 90,
    simCardMonthly: 8,
    coffeeShopWork: 6
  },
  community: {
    expatSize: 6,
    englishLevel: 4,
    safety: 7
  },
  workspaces: argentinaWorkspaces
};