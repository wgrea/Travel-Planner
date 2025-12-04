// src/lib/data/countries/europe/united-kingdom/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const ukWorkspaces: Workspace[] = [
  {
    name: 'WeWork London',
    city: 'London',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 50,
    monthlyPrice: 500,
    rating: 4.7,
    wifiSpeed: 150,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Premium Workspace', 'Meeting Rooms', 'Coffee Bar', 'Events', '24/7 Access'],
    bestFor: ['Professionals', 'Startups', 'Corporate Teams'],
    hours: '24/7',
    address: 'Multiple locations across London'
  },
  {
    name: 'Second Home London',
    city: 'London',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 45,
    monthlyPrice: 450,
    rating: 4.8,
    wifiSpeed: 120,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Architectural Design', 'Indoor Gardens', 'Creative Community', 'Events', 'Sustainable'],
    bestFor: ['Creatives', 'Designers', 'Innovators'],
    hours: '8:00-20:00',
    address: 'Spitalfields, London'
  },
  {
    name: 'Manchester Technology Centre',
    city: 'Manchester',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 350,
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Tech Community', 'Event Space', 'Meeting Rooms', 'High-speed Internet', 'Startup Support'],
    bestFor: ['Tech Professionals', 'Startups', 'Digital Nomads'],
    hours: '24/7',
    address: 'Manchester City Centre'
  },
  {
    name: 'Starbucks Reserve',
    city: 'London',
    country: 'United Kingdom',
    type: 'cafe',
    hourlyRate: 8,
    rating: 4.3,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 6,
    amenities: ['Premium Coffee', 'Comfortable Seating', 'WiFi', 'Power Outlets', 'Central Location'],
    bestFor: ['Casual Work', 'Meetings', 'Quick Sessions'],
    hours: '6:00-22:00',
    address: 'Covent Garden, London'
  },
  {
    name: 'Edinburgh Codebase',
    city: 'Edinburgh',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 30,
    monthlyPrice: 300,
    rating: 4.5,
    wifiSpeed: 110,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Tech Focus', 'Mentorship', 'Events', 'Meeting Rooms', 'Scottish Startup Community'],
    bestFor: ['Tech Entrepreneurs', 'Developers', 'Scottish Tech Scene'],
    hours: '9:00-21:00',
    address: 'Castle Terrace, Edinburgh'
  },
  {
    name: 'Bristol & Bath Science Park',
    city: 'Bristol',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 32,
    monthlyPrice: 320,
    rating: 4.4,
    wifiSpeed: 105,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Science & Tech Focus', 'Laboratory Space', 'Business Support', 'Events', 'Research Community'],
    bestFor: ['Scientists', 'Researchers', 'Tech Startups'],
    hours: '8:00-20:00',
    address: 'Emersons Green, Bristol'
  },
  {
    name: 'Costa Coffee',
    city: 'Various',
    country: 'United Kingdom',
    type: 'cafe',
    hourlyRate: 6,
    rating: 4.0,
    wifiSpeed: 40,
    powerOutlets: 2,
    noiseLevel: 5,
    amenities: ['Nationwide Chain', 'Basic WiFi', 'Coffee & Snacks', 'Convenient Locations'],
    bestFor: ['Budget Work', 'Quick Stops', 'Reliable Locations'],
    hours: '7:00-21:00',
    address: 'Nationwide locations'
  },
  {
    name: 'Glasgow Workspace',
    city: 'Glasgow',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 28,
    monthlyPrice: 280,
    rating: 4.3,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Creative Space', 'Local Community', 'Events', 'Kitchen', 'Affordable Pricing'],
    bestFor: ['Freelancers', 'Creatives', 'Budget-Conscious Workers'],
    hours: '9:00-19:00',
    address: 'City Centre, Glasgow'
  }
];

export const ukNomadData: NomadData = {
  country: "United Kingdom",
  cities: ["London", "Manchester", "Edinburgh", "Bristol", "Birmingham", "Glasgow", "Cambridge", "Oxford"],
  internet: {
    speed: 90,
    reliability: 9,
    coworkingSpaces: 85
  },
  costs: {
    coworkingMonthly: 380,
    simCardMonthly: 20,
    coffeeShopWork: 7
  },
  community: {
    expatSize: 9,
    englishLevel: 10,
    safety: 8
  },
  workspaces: ukWorkspaces
};