import type { NomadData, Workspace } from '$lib/data/nomadData';

export const thailandWorkspaces: Workspace[] = [
  {
    name: 'Hubba',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 450, // THB
    monthlyPrice: 5000, // THB
    rating: 4.6,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths'],
    bestFor: ['Startups', 'Networking', 'Professional meetings'],
    hours: '24/7',
    address: 'Multiple locations in Ekkamai and Thong Lor'
  },
  {
    name: 'The Hive',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 350,
    monthlyPrice: 4000,
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Terrace', 'Cafe', 'Meeting Rooms', 'Event Space', 'Mail Handling'],
    bestFor: ['Creative work', 'Collaboration', 'Social environment'],
    hours: '8:00-20:00'
  },
  {
    name: 'The Work Loft',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 450,
    monthlyPrice: 5000,
    rating: 4.6,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths'],
    bestFor: ['Startups', 'Networking', 'Professional meetings'],
    hours: '24/7',
    address: 'Sukhumvit Soi 63, Bangkok'
  },
  {
    name: 'JustCo',
    city: 'Bangkok', 
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 400,
    monthlyPrice: 4500,
    rating: 4.5,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Infinity Pool', 'Cafe', 'Meeting Rooms', 'Event Space', 'Business Lounge'],
    bestFor: ['Corporate teams', 'Professional services', 'Business meetings'],
    hours: '24/7',
    address: 'Gaysorn Tower, Bangkok'
  },
  {
    name: 'Stories Cafe',
    city: 'Bangkok',
    country: 'Thailand', 
    type: 'cafe',
    dayPassPrice: 150, // Minimum consumption
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Comfortable Seating', 'Power Outlets', 'Good Atmosphere'],
    bestFor: ['Casual work', 'Creative sessions', 'Coffee lovers'],
    hours: '7:00-22:00',
    address: 'Thong Lor, Bangkok'
  },
  {
    name: 'Punspace',
    city: 'Chiang Mai',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 250,
    monthlyPrice: 3000,
    rating: 4.7,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['High-speed WiFi', 'Air Conditioning', 'Kitchen', 'Quiet Zones', 'Printing'],
    bestFor: ['Focused work', 'Digital nomads', 'Long-term work'],
    hours: '24/7',
    address: 'Multiple locations in Nimmanhaemin area'
  },
  {
    name: 'CAMP',
    city: 'Chiang Mai',
    country: 'Thailand',
    type: 'cafe',
    dayPassPrice: 100, // Minimum consumption
    monthlyPrice: 0, // Pay-as-you-go
    rating: 4.2,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Cafe', 'Free WiFi', 'Power Outlets', 'Study Areas'],
    bestFor: ['Casual work', 'Students', 'Short sessions'],
    hours: '24/7',
    address: 'MAYA Lifestyle Shopping Center'
  },
  {
    name: 'Kohub',
    city: 'Koh Phangan',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 300,
    monthlyPrice: 3500,
    rating: 4.3,
    wifiSpeed: 65,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Pool', 'Cafe', 'Beach Access', 'Meeting Rooms', 'Community Events'],
    bestFor: ['Island lifestyle', 'Community', 'Work-life balance'],
    hours: '8:00-18:00'
  },
  {
    name: 'IBS',
    city: 'Phuket',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 400,
    monthlyPrice: 4500,
    rating: 4.1,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Meeting Rooms', 'Business Lounge', 'Printing', 'Virtual Office'],
    bestFor: ['Business meetings', 'Professional services', 'Corporate work'],
    hours: '9:00-18:00'
  }
];

export const thailandNomadData: NomadData = {
  country: "Thailand",
  cities: ["Bangkok", "Chiang Mai", "Phuket", "Koh Phangan", "Krabi"],
  internet: {
    speed: 85, // Good overall speed with variations by location
    reliability: 8, // Very reliable in cities, less in islands
    coworkingSpaces: 120 // Many options across the country
  },
  costs: {
    coworkingMonthly: 3500, // THB average
    simCardMonthly: 300, // THB for good data plan
    coffeeShopWork: 80 // THB per session (minimum spend)
  },
  community: {
    expatSize: 9, // Huge digital nomad community
    englishLevel: 7, // Good in tourist areas, basic elsewhere
    safety: 8 // Generally very safe
  },
  workspaces: thailandWorkspaces
};