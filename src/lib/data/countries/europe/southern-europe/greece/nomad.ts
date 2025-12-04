import type { NomadData, Workspace } from '$lib/types/nomad';

export const greeceWorkspaces: Workspace[] = [
  {
    name: 'Stone Soup',
    city: 'Athens',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 150,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Kitchen', 'Event Space', 'Community Events'],
    bestFor: ['Digital nomads', 'Startups', 'Remote workers'],
    hours: '9:00-18:00',
    address: 'Metaxourgio, Athens'
  },
  {
    name: 'The Cube',
    city: 'Athens',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 180,
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Roof Terrace', 'Cafe', 'Meeting Rooms', 'Phone Booths', 'Printing'],
    bestFor: ['Professional work', 'Meetings', 'Focused work'],
    hours: '24/7',
    address: 'Kolonaki, Athens'
  },
  {
    name: 'Tzaferi 16',
    city: 'Thessaloniki',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 140,
    rating: 4.4,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Event Space', 'Kitchen', 'Meeting Rooms', 'Networking Events'],
    bestFor: ['Students', 'Startups', 'Creative work'],
    hours: '9:00-20:00'
  },
  {
    name: 'Blue Monkey',
    city: 'Athens',
    country: 'Greece',
    type: 'cafe',
    dayPassPrice: 8,
    monthlyPrice: 0,
    rating: 4.2,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Comfortable Seating', 'Power Outlets', 'Good Atmosphere'],
    bestFor: ['Casual work', 'Creative sessions', 'Coffee lovers'],
    hours: '7:30-22:00',
    address: 'Koukaki, Athens'
  },
  {
    name: 'Co.Work.Thira',
    city: 'Santorini',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 30,
    monthlyPrice: 250,
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Caldera Views', 'Air Conditioning', 'Meeting Rooms', 'Kitchen'],
    bestFor: ['Digital nomads', 'Seasonal workers', 'Remote work with view'],
    hours: '9:00-18:00'
  },
  {
    name: 'Mykonos Coworking',
    city: 'Mykonos',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 300,
    rating: 4.2,
    wifiSpeed: 65,
    powerOutlets: 3,
    noiseLevel: 3,
    amenities: ['Pool Access', 'Cafe', 'Meeting Rooms', 'Event Space'],
    bestFor: ['Lifestyle work', 'Seasonal entrepreneurs', 'Networking'],
    hours: '9:00-19:00'
  },
  {
    name: 'Chania Coworking',
    city: 'Chania',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 120,
    rating: 4.4,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Old Town Location', 'Kitchen', 'Meeting Rooms', 'Community Events'],
    bestFor: ['Long-term stays', 'Digital nomads', 'Creative work'],
    hours: '9:00-18:00'
  },
  {
    name: 'Rhodes Coworking',
    city: 'Rhodes',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 160,
    rating: 4.1,
    wifiSpeed: 65,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Medieval Town Location', 'Air Conditioning', 'Meeting Rooms', 'Kitchen'],
    bestFor: ['Historical setting work', 'Remote workers', 'Seasonal stays'],
    hours: '9:00-18:00'
  },
  {
    name: 'Corfu Cowork',
    city: 'Corfu',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 145,
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Garden Setting', 'Meeting Rooms', 'Kitchen', 'Community Events'],
    bestFor: ['Relaxed work environment', 'Long-term stays', 'Creative work'],
    hours: '9:00-17:00'
  }
];

export const greeceNomadData: NomadData = {
  country: "Greece",
  cities: ["Athens", "Thessaloniki", "Heraklion", "Rhodes", "Santorini", "Mykonos", "Chania", "Corfu"],
  internet: {
    speed: 70,
    reliability: 75,
    coworkingSpaces: 50
  },
  costs: {
    coworkingMonthly: 150,
    simCardMonthly: 15,
    coffeeShopWork: 5
  },
  community: {
    expatSize: 65,
    englishLevel: 70,
    safety: 85
  },
  workspaces: greeceWorkspaces
};