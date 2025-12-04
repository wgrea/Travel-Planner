import type { NomadData, Workspace } from '$lib/types/nomad';

export const turkeyWorkspaces: Workspace[] = [
  {
    name: 'Kolektif House',
    city: 'Istanbul',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 80, // TRY
    monthlyPrice: 1000,
    rating: 4.6,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Cafe', 'Event Space', 'Networking Events', 'Gym'],
    bestFor: ['Startups', 'Freelancers', 'Corporate teams', 'Networking'],
    hours: '24/7',
    address: 'Maslak, Istanbul'
  },
  {
    name: 'Impact Hub Istanbul',
    city: 'Istanbul',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 70,
    monthlyPrice: 900,
    rating: 4.5,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Social Impact Focus', 'Meeting Rooms', 'Event Space', 'Community Events', 'Cafe'],
    bestFor: ['Social entrepreneurs', 'NGOs', 'Community projects'],
    hours: '9:00-18:00'
  },
  {
    name: 'KALEVİ Coffee',
    city: 'Istanbul',
    country: 'Turkey',
    type: 'cafe',
    dayPassPrice: 30, // Minimum consumption
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Comfortable Seating', 'Power Outlets', 'Good Atmosphere'],
    bestFor: ['Casual work', 'Creative sessions', 'Coffee lovers'],
    hours: '7:00-23:00',
    address: 'Kadıköy, Istanbul'
  },
  {
    name: 'ATÖLYE',
    city: 'Istanbul',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 85,
    monthlyPrice: 1100,
    rating: 4.7,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Creative Studio', 'Workshop Space', 'Meeting Rooms', 'Event Space', 'Community'],
    bestFor: ['Creatives', 'Designers', 'Artists', 'Innovators'],
    hours: '24/7',
    address: 'Bomonti, Istanbul'
  },
  {
    name: 'Workinton',
    city: 'Ankara',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 60,
    monthlyPrice: 800,
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Meeting Rooms', 'Business Lounge', 'Event Space', 'Networking Events'],
    bestFor: ['Business professionals', 'Consultants', 'Government relations'],
    hours: '8:00-20:00'
  },
  {
    name: 'Çankaya Coworking',
    city: 'Ankara',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 55,
    monthlyPrice: 750,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Quiet Zones', 'Meeting Rooms', 'Kitchen', 'Printing Services'],
    bestFor: ['Students', 'Researchers', 'Focused work'],
    hours: '9:00-19:00'
  },
  {
    name: 'Izmir Coworking',
    city: 'Izmir',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 50,
    monthlyPrice: 700,
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Sea View', 'Meeting Rooms', 'Event Space', 'Community Events'],
    bestFor: ['Digital nomads', 'Remote workers', 'Startups'],
    hours: '9:00-18:00'
  },
  {
    name: 'Antalya TechHub',
    city: 'Antalya',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 65,
    monthlyPrice: 850,
    rating: 4.2,
    wifiSpeed: 75,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Pool Access', 'Meeting Rooms', 'Cafe', 'Event Space'],
    bestFor: ['Seasonal workers', 'Digital nomads', 'Tech startups'],
    hours: '9:00-19:00'
  },
  {
    name: 'Cappadocia Work Lodge',
    city: 'Göreme',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 70,
    monthlyPrice: 900,
    rating: 4.3,
    wifiSpeed: 65,
    powerOutlets: 3,
    noiseLevel: 1,
    amenities: ['Cave Setting', 'Mountain Views', 'Meeting Rooms', 'Quiet Environment'],
    bestFor: ['Focused work', 'Writers', 'Remote workers'],
    hours: '9:00-18:00'
  }
];

export const turkeyNomadData: NomadData = {
  country: "Turkey",
  cities: ["Istanbul", "Ankara", "Izmir", "Antalya", "Cappadocia", "Bodrum"],
  internet: {
    speed: 75,
    reliability: 70,
    coworkingSpaces: 65
  },
  costs: {
    coworkingMonthly: 900, // TRY average
    simCardMonthly: 100,   // TRY for good data plan
    coffeeShopWork: 30     // TRY per session (minimum spend)
  },
  community: {
    expatSize: 70,
    englishLevel: 60,
    safety: 75
  },
  workspaces: turkeyWorkspaces
};