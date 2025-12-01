// src/lib/data/countries/south-america/brazil/nomad.ts
import type { NomadData, Workspace } from '$lib/data/nomadData';

export const brazilWorkspaces: Workspace[] = [
  {
    name: 'WeWork',
    city: 'São Paulo',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 90, // ~$18 USD
    monthlyPrice: 800, // ~$160 USD
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths'],
    bestFor: ['Corporate teams', 'Professional services', 'Business networking'],
    hours: '24/7',
    address: 'Multiple locations in São Paulo (Berrini, Faria Lima)'
  },
  {
    name: 'The Hub',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 70, // ~$14 USD
    monthlyPrice: 600, // ~$120 USD
    rating: 4.5,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Rooftop terrace', 'Cafe', 'Meeting rooms', 'Event space', 'Community events'],
    bestFor: ['Startups', 'Digital nomads', 'Creative professionals'],
    hours: '8:00-20:00',
    address: 'Botafogo, Rio de Janeiro'
  },
  {
    name: 'Impact Hub',
    city: 'Florianópolis',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 50, // ~$10 USD
    monthlyPrice: 400, // ~$80 USD
    rating: 4.7,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Beach proximity', 'Garden', 'Meeting rooms', 'Kitchen', 'Community focus'],
    bestFor: ['Digital nomads', 'Sustainability-focused work', 'Island lifestyle'],
    hours: '8:00-18:00',
    address: 'Lagoa da Conceição, Florianópolis'
  },
  {
    name: 'Campus São Paulo',
    city: 'São Paulo',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 60, // ~$12 USD
    monthlyPrice: 500, // ~$100 USD
    rating: 4.4,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Multiple locations', 'Cafe', 'Event space', 'Networking events', 'Business services'],
    bestFor: ['Entrepreneurs', 'Tech startups', 'Networking'],
    hours: '24/7',
    address: 'Pinheiros and Vila Madalena, São Paulo'
  },
  {
    name: 'Espaço Faria Lima',
    city: 'São Paulo',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 80, // ~$16 USD
    monthlyPrice: 700, // ~$140 USD
    rating: 4.5,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Luxury facilities', 'Business lounge', 'Meeting rooms', 'Catering', 'Concierge'],
    bestFor: ['Corporate executives', 'Financial services', 'High-end business'],
    hours: '24/7',
    address: 'Faria Lima, São Paulo'
  },
  {
    name: 'Nex Coworking',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 60, // ~$12 USD
    monthlyPrice: 500, // ~$100 USD
    rating: 4.3,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Modern design', 'Cafe', 'Meeting rooms', 'Event space', 'Community'],
    bestFor: ['Young professionals', 'Tech companies', 'Creative work'],
    hours: '8:00-22:00',
    address: 'Leblon, Rio de Janeiro'
  },
  {
    name: 'Coffee Lab',
    city: 'São Paulo',
    country: 'Brazil',
    type: 'cafe',
    dayPassPrice: 25, // Minimum consumption ~$5 USD
    monthlyPrice: 0,
    rating: 4.2,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty coffee', 'Power outlets', 'Comfortable seating', 'Good atmosphere'],
    bestFor: ['Casual work', 'Coffee lovers', 'Short meetings'],
    hours: '7:00-20:00',
    address: 'Vila Madalena, São Paulo'
  },
  {
    name: 'Confeitaria Colombo',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    type: 'cafe',
    dayPassPrice: 30, // ~$6 USD minimum
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 50,
    powerOutlets: 2,
    noiseLevel: 4,
    amenities: ['Historic setting', 'WiFi', 'Power outlets', 'Traditional pastries'],
    bestFor: ['Inspirational work', 'Short sessions', 'Cultural experience'],
    hours: '9:00-19:00',
    address: 'Centro, Rio de Janeiro'
  },
  {
    name: 'Digital Nomads Brazil Hub',
    city: 'Florianópolis',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 40, // ~$8 USD
    monthlyPrice: 350, // ~$70 USD
    rating: 4.6,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beach access', 'Community events', 'Meeting rooms', 'Kitchen', 'Social areas'],
    bestFor: ['Digital nomads', 'Remote workers', 'Community building'],
    hours: '24/7',
    address: 'Campeche, Florianópolis'
  }
];

export const brazilNomadData: NomadData = {
  country: "Brazil",
  cities: ["Rio de Janeiro", "São Paulo", "Florianópolis", "Salvador", "Belo Horizonte"],
  internet: {
    speed: 75, // Good in major cities, variable in remote areas
    reliability: 7, // Generally reliable but can have outages
    coworkingSpaces: 65 // Good options in major cities and Florianópolis
  },
  costs: {
    coworkingMonthly: 550, // BRL average (~$110 USD)
    simCardMonthly: 40, // BRL for good data plan (~$8 USD)
    coffeeShopWork: 25 // BRL per session (~$5 USD minimum spend)
  },
  community: {
    expatSize: 6, // Growing digital nomad community, especially in Florianópolis
    englishLevel: 5, // Basic in tourist areas, limited elsewhere
    safety: 6 // Varies by area - requires precautions
  },
  workspaces: brazilWorkspaces
};