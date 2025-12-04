import type { NomadData, Workspace } from '$lib/types/nomad';

export const unitedStatesWorkspaces: Workspace[] = [
  {
    name: 'WeWork',
    city: 'New York',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 50, // USD
    monthlyPrice: 500,
    rating: 4.5,
    wifiSpeed: 200,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths', 'Networking Events'],
    bestFor: ['Startups', 'Corporate teams', 'Networking', 'Professional meetings'],
    hours: '24/7',
    address: 'Multiple locations in Manhattan, Brooklyn'
  },
  {
    name: 'Industrious',
    city: 'New York',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 45,
    monthlyPrice: 550,
    rating: 4.6,
    wifiSpeed: 180,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Lounge Areas', 'Cafe', 'Meeting Rooms', 'Event Space', 'Mail Handling', 'Community Manager'],
    bestFor: ['Professional services', 'Consultants', 'Focused work'],
    hours: '8:00-18:00',
    address: 'Financial District, NYC'
  },
  {
    name: 'The Wing',
    city: 'New York',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 40,
    monthlyPrice: 250,
    rating: 4.4,
    wifiSpeed: 150,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Women-focused', 'Beauty Room', 'Lactation Room', 'Library', 'Cafe', 'Event Space'],
    bestFor: ['Women entrepreneurs', 'Networking', 'Community building'],
    hours: '7:00-22:00'
  },
  {
    name: 'Starbucks Reserve Roastery',
    city: 'New York',
    country: 'United States',
    type: 'cafe',
    dayPassPrice: 10, // Minimum consumption
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 100,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Comfortable Seating', 'Power Outlets', 'Food'],
    bestFor: ['Casual work', 'Creative sessions', 'Coffee lovers'],
    hours: '6:30-23:00',
    address: 'Chelsea, NYC'
  },
  {
    name: 'Spaces',
    city: 'San Francisco',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 55,
    monthlyPrice: 600,
    rating: 4.5,
    wifiSpeed: 220,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Roof Terrace', 'Event Space', 'Phone Booths'],
    bestFor: ['Tech startups', 'VC meetings', 'Tech networking'],
    hours: '24/7',
    address: 'SoMa, San Francisco'
  },
  {
    name: 'Cross Campus',
    city: 'Los Angeles',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 40,
    monthlyPrice: 450,
    rating: 4.4,
    wifiSpeed: 180,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Event Space', 'Cafe', 'Meeting Rooms', 'Networking Events', 'Wellness Room'],
    bestFor: ['Creative industry', 'Entertainment', 'Startups'],
    hours: '24/7',
    address: 'Downtown LA'
  },
  {
    name: 'Capital Factory',
    city: 'Austin',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 400,
    rating: 4.7,
    wifiSpeed: 200,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Maker Space', 'VR Lab', 'Event Space', 'Meeting Rooms', 'Investor Access'],
    bestFor: ['Tech startups', 'Hardware companies', 'Entrepreneurs'],
    hours: '24/7'
  },
  {
    name: 'Chicago Athletic Association',
    city: 'Chicago',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 45,
    monthlyPrice: 500,
    rating: 4.6,
    wifiSpeed: 190,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Historic Building', 'Gym Access', 'Meeting Rooms', 'Restaurant', 'Event Space'],
    bestFor: ['Professional services', 'Consultants', 'Corporate teams'],
    hours: '8:00-20:00'
  },
  {
    name: 'The Farm',
    city: 'Miami',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 40,
    monthlyPrice: 450,
    rating: 4.5,
    wifiSpeed: 180,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Outdoor Workspace', 'Pool', 'Cafe', 'Event Space', 'Networking'],
    bestFor: ['Lifestyle businesses', 'Remote workers', 'Creative work'],
    hours: '8:00-20:00'
  }
];

export const unitedStatesNomadData: NomadData = {
  country: "United States",
  cities: ["New York", "San Francisco", "Los Angeles", "Austin", "Miami", "Chicago"],
  internet: {
    speed: 180, // Very fast in cities
    reliability: 90, // Highly reliable
    coworkingSpaces: 250 // Abundant options
  },
  costs: {
    coworkingMonthly: 500, // USD average
    simCardMonthly: 50, // USD for good data plan
    coffeeShopWork: 10 // USD per session (minimum spend)
  },
  community: {
    expatSize: 8, // Large digital nomad community
    englishLevel: 100, // Native English
    safety: 80 // Generally safe with variations
  },
  workspaces: unitedStatesWorkspaces
};