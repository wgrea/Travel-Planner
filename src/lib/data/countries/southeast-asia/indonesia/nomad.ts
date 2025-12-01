// src/lib/data/countries/southeast-asia/indonesia/nomad.ts
import type { NomadData, Workspace } from '$lib/types/nomadData';

export const indonesiaWorkspaces: Workspace[] = [
  {
    name: 'Dojo Bali',
    city: 'Canggu, Bali',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 150000, // IDR
    monthlyPrice: 1500000, // IDR
    rating: 4.8,
    wifiSpeed: 45,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Swimming Pool', 'Cafe', 'Community Events', 'Meeting Rooms', 'Phone Booths'],
    bestFor: ['Digital nomads', 'Social networking', 'Beach lifestyle'],
    hours: '24/7',
    address: 'Jl. Batu Mejan No.88, Canggu, Bali'
  },
  {
    name: 'Tropical Nomad',
    city: 'Canggu, Bali',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 120000,
    monthlyPrice: 1300000,
    rating: 4.6,
    wifiSpeed: 40,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Beach View', 'Cafe', 'Event Space', 'Community Events', 'High-speed WiFi'],
    bestFor: ['Creative work', 'Social environment', 'Surf/work balance'],
    hours: '8:00-22:00',
    address: 'Jl. Padang Linjong No.99, Canggu, Bali'
  },
  {
    name: 'Hubud (Hub in Ubud)',
    city: 'Ubud, Bali',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 200000,
    monthlyPrice: 2000000,
    rating: 4.7,
    wifiSpeed: 35,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Garden Area', 'Cafe', 'Meeting Rooms', 'Community Events', 'Eco-friendly'],
    bestFor: ['Focused work', 'Wellness community', 'Eco-conscious nomads'],
    hours: '24/7',
    address: 'Monkey Forest Road, Ubud, Bali'
  },
  {
    name: 'GoWork',
    city: 'Jakarta',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 150000,
    monthlyPrice: 1400000,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Business Facilities', 'Meeting Rooms', 'Networking Events', 'Cafe', 'Printing'],
    bestFor: ['Business meetings', 'Corporate work', 'Professional networking'],
    hours: '24/7',
    address: 'Multiple locations in Jakarta'
  },
  {
    name: 'Livinn',
    city: 'Jakarta',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 100000,
    monthlyPrice: 1200000,
    rating: 4.4,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Lounge Areas', 'Cafe', 'Meeting Rooms', 'Business Services', 'Mail Handling'],
    bestFor: ['Startups', 'Freelancers', 'Business services'],
    hours: '8:00-20:00'
  },
  {
    name: 'Cafe Organic',
    city: 'Canggu, Bali',
    country: 'Indonesia',
    type: 'cafe',
    dayPassPrice: 50000, // Minimum consumption
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 30,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['Healthy Food', 'Power Outlets', 'Garden Seating', 'Good Atmosphere'],
    bestFor: ['Casual work', 'Health-conscious nomads', 'Short sessions'],
    hours: '7:00-22:00',
    address: 'Jl. Batu Mejan No.45, Canggu, Bali'
  },
  {
    name: 'Space by Union',
    city: 'Yogyakarta',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 80000,
    monthlyPrice: 900000,
    rating: 4.2,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Quiet Zones', 'Meeting Rooms', 'Library', 'Cafe', 'Event Space'],
    bestFor: ['Students', 'Creative work', 'Academic projects'],
    hours: '8:00-20:00',
    address: 'Jl. Tirtodipuran No.10, Yogyakarta'
  },
  {
    name: 'The Orient',
    city: 'Seminyak, Bali',
    country: 'Indonesia',
    type: 'cafe',
    dayPassPrice: 70000,
    monthlyPrice: 0,
    rating: 4.1,
    wifiSpeed: 25,
    powerOutlets: 2,
    noiseLevel: 5,
    amenities: ['Beach View', 'Upscale Dining', 'Power Outlets', 'Comfortable Seating'],
    bestFor: ['Casual meetings', 'Laptop work', 'Relaxed atmosphere'],
    hours: '8:00-23:00'
  }
];

export const indonesiaNomadData: NomadData = {
  country: "Indonesia",
  cities: ["Canggu (Bali)", "Ubud (Bali)", "Jakarta", "Yogyakarta", "Seminyak (Bali)"],
  internet: {
    speed: 40, // Varies greatly by location - high in cities, low in remote islands
    reliability: 6, // Good in tourist areas, poor in remote locations
    coworkingSpaces: 45 // Many options in Bali, growing elsewhere
  },
  costs: {
    coworkingMonthly: 1500000, // IDR average (~$100 USD)
    simCardMonthly: 100000, // IDR for good data plan (~$6.50 USD)
    coffeeShopWork: 50000 // IDR per session (minimum spend, ~$3.25 USD)
  },
  community: {
    expatSize: 8, // Large digital nomad community especially in Bali
    englishLevel: 6, // Good in tourist areas, basic in local areas
    safety: 7 // Generally safe but be cautious in certain areas
  },
  workspaces: indonesiaWorkspaces
};