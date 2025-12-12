// src/lib/data/countries/southeast-asia/laos/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips } from '$lib/data/nomadData';

export const laosWorkspaces: Workspace[] = [
  {
    name: 'Common Grounds Vientiane',
    city: 'Vientiane',
    country: 'Laos',
    type: 'cafe',
    hourlyRate: 3,
    rating: 4.5,
    wifiSpeed: 25,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Good Coffee', 'Western Food', 'Air Conditioning', 'Power Outlets', 'Reliable WiFi'],
    bestFor: ['Digital Nomads', 'Expat Community', 'Casual Work'],
    hours: '7:00-21:00',
    address: 'Setthathirath Road, Vientiane',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Popular expat cafe, purchase required'
  },
  {
    name: 'Joma Bakery Cafe',
    city: 'Vientiane',
    country: 'Laos',
    type: 'cafe',
    hourlyRate: 2.5,
    rating: 4.3,
    wifiSpeed: 20,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['Bakery Items', 'Coffee', 'WiFi', 'Air Conditioning', 'Multiple Locations'],
    bestFor: ['Budget Work', 'Quick Sessions', 'Reliable Chain'],
    hours: '6:30-20:30',
    address: 'Multiple locations in Vientiane',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
  },
  {
    name: 'Saffron Coffee',
    city: 'Luang Prabang',
    country: 'Laos',
    type: 'cafe',
    hourlyRate: 3,
    rating: 4.6,
    wifiSpeed: 30,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Specialty Coffee', 'Mekong River View', 'Local Roastery', 'Power Outlets', 'Peaceful Atmosphere'],
    bestFor: ['Creative Work', 'Coffee Lovers', 'Relaxed Environment'],
    hours: '7:00-19:00',
    address: 'Mekong Riverside, Luang Prabang',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Beautiful riverside location, specialty coffee'
  },
  {
    name: 'Vang Vieng Digital Hub',
    city: 'Vang Vieng',
    country: 'Laos',
    type: 'coworking',
    dayPassPrice: 8,
    monthlyPrice: 120,
    rating: 4.2,
    wifiSpeed: 35,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Dedicated Workspace', 'High-speed Internet', 'Coffee & Tea', 'Mountain Views', 'Nomad Community'],
    bestFor: ['Digital Nomads', 'Remote Workers', 'Nature Lovers'],
    hours: '8:00-20:00',
    address: 'Main Street, Vang Vieng',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1,
    notes: 'One of few dedicated coworking spaces in Laos'
  },
  {
    name: 'IndoChine Cafe',
    city: 'Pakse',
    country: 'Laos',
    type: 'cafe',
    hourlyRate: 2,
    rating: 4.0,
    wifiSpeed: 15,
    powerOutlets: 2,
    noiseLevel: 5,
    amenities: ['Local Cafe', 'Simple Food', 'Basic WiFi', 'Fans', 'Local Atmosphere'],
    bestFor: ['Budget Travelers', 'Simple Work', 'Authentic Experience'],
    hours: '7:00-19:00',
    address: 'Downtown Pakse',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Authentic local cafe, basic facilities'
  },
  {
    name: 'Luang Prabang Library Cafe',
    city: 'Luang Prabang',
    country: 'Laos',
    type: 'cafe',
    hourlyRate: 2.5,
    rating: 4.4,
    wifiSpeed: 25,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Quiet Atmosphere', 'Books Available', 'Coffee & Snacks', 'Cultural Setting', 'Peaceful'],
    bestFor: ['Focused Work', 'Reading', 'Quiet Environment'],
    hours: '8:00-18:00',
    address: 'Sisavangvong Road, Luang Prabang',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Quiet cafe with library atmosphere'
  },
  {
    name: 'Vientiane Co-working Space',
    city: 'Vientiane',
    country: 'Laos',
    type: 'coworking',
    dayPassPrice: 10,
    monthlyPrice: 150,
    rating: 4.1,
    wifiSpeed: 40,
    powerOutlets: 6,
    noiseLevel: 3,
    amenities: ['Air Conditioning', 'Meeting Room', 'Printing', 'Kitchen', 'International Community'],
    bestFor: ['Professionals', 'Small Teams', 'Business Services'],
    hours: '8:00-20:00',
    address: 'Samsenthai Road, Vientiane',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    notes: 'Main coworking space in Vientiane'
  },
  // ADD HOSTEL/HOTEL EXAMPLES FOR LAOS
  {
    name: 'Sabaidee Valley Hostel',
    city: 'Vang Vieng',
    country: 'Laos',
    type: 'hostel',
    dayPassPrice: 5,
    monthlyPrice: 150,
    rating: 4.5,
    wifiSpeed: 30,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Riverside location', 'Co-working deck', 'Hammocks', 'Kayak rental', 'Campfire area'],
    bestFor: ['Nature lovers', 'Adventure seekers', 'Relaxed work', 'Social nomads'],
    hours: 'Common area: 6:00-22:00',
    address: 'Riverside, Vang Vieng',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    dayPassForNonGuests: true,
    notes: 'Beautiful riverside location, free workspace for guests'
  },
  {
    name: 'Satri House Secret Retreats',
    city: 'Luang Prabang',
    country: 'Laos',
    type: 'hotel',
    dayPassPrice: 15,
    monthlyPrice: 800,
    rating: 4.8,
    wifiSpeed: 35,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Garden workspace', 'Heritage building', 'Pool', 'Spa', 'Library', 'Fine dining'],
    bestFor: ['Luxury work', 'Peaceful environment', 'Creative inspiration', 'Special treat'],
    hours: '24/7 garden access',
    address: 'Luang Prabang UNESCO area',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Luxury heritage hotel, $15 minimum spend for non-guests'
  },
  {
    name: 'Villa Lao Hostel',
    city: 'Vientiane',
    country: 'Laos',
    type: 'hostel',
    dayPassPrice: 4,
    monthlyPrice: 120,
    rating: 4.3,
    wifiSpeed: 25,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Quiet garden', 'Co-working corner', 'Kitchen', 'Bike rental', 'Tour desk'],
    bestFor: ['Budget nomads', 'Long-term stays', 'Quiet work', 'Backpackers'],
    hours: 'Co-working: 7:00-21:00',
    address: 'Quai Fa Ngum, Vientiane',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Quiet hostel with dedicated work corner'
  }
];

// ADD FREE WORKSPACES FOR LAOS
export const laosFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'National Library of Laos',
    city: 'Vientiane',
    type: 'library',
    description: 'National library with reading rooms and quiet study areas',
    cost: 'free',
    wifi: true,
    wifiSpeed: 15,
    powerOutlets: true,
    hours: '8:00-17:00 (Mon-Fri)',
    amenities: ['Reading rooms', 'Study areas', 'AC', 'Quiet environment', 'Local collection'],
    bestFor: ['Quiet study', 'Research', 'Academic work', 'Focused reading'],
    noiseLevel: 1,
    address: 'Samsenthai Road, Vientiane',
    notes: 'Very quiet, basic facilities',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Morning Market Food Court',
    city: 'Vientiane',
    type: 'mall',
    description: 'Traditional market food court with basic seating',
    cost: 'purchase_required',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-18:00',
    amenities: ['Local food', 'Authentic experience', 'Very cheap', 'Cultural immersion'],
    bestFor: ['Quick work', 'Email checking', 'Lunch breaks', 'Local experience'],
    noiseLevel: 5,
    address: 'Morning Market, Vientiane',
    notes: 'No WiFi, bring power bank, cash only',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Mekong Riverfront',
    city: 'Vientiane',
    type: 'public_space',
    description: 'Riverfront promenade with benches and cafes nearby',
    cost: 'free',
    wifi: false,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['River view', 'Fresh air', 'Exercise path', 'Sunset views', 'Free'],
    bestFor: ['Reading', 'Planning', 'Creative thinking', 'Walking meetings'],
    noiseLevel: 2,
    address: 'Quai Fa Ngum, Vientiane',
    notes: 'Best in early morning or late afternoon',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Wat Sok Pa Luang Temple Grounds',
    city: 'Vientiane',
    type: 'public_space',
    description: 'Peaceful temple grounds with shaded areas',
    cost: 'free',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-18:00',
    amenities: ['Peaceful atmosphere', 'Cultural site', 'Shaded areas', 'Spiritual environment'],
    bestFor: ['Meditative work', 'Journaling', 'Planning', 'Quiet reflection'],
    noiseLevel: 1,
    address: 'Sok Pa Luang Road, Vientiane',
    notes: 'Respect temple rules, dress modestly',
    budgetCategory: 'zero_spend'
  }
];

// ADD MONEY SAVING TIPS FOR LAOS
export const laosMoneySavingTips: MoneySavingTips = {
  general: [
    'Use local buses instead of tourist minivans (70% cheaper)',
    'Eat at local "khao piak" (noodle soup) stalls (10,000-15,000 LAK per meal)',
    'Buy SIM cards from Unitel shops, not hotels or airports',
    'Stay in guesthouses instead of hotels (50% cheaper)',
    'Travel by boat on Mekong River for authentic experience',
    'Drink Beerlao at local shops instead of bars',
    'Shop at morning markets for best prices',
    'Rent bicycles instead of motorbikes for short distances'
  ],
  touristAreas: [
    'Avoid restaurants on main tourist streets in Luang Prabang',
    'In Vang Vieng, eat away from the main backpacker street',
    'Skip organized tours and explore independently',
    'Bargain for everything in tourist markets',
    'Drink at local beer gardens instead of expat bars'
  ],
  nonTouristAreas: [
    'Small town cafes are very welcoming to laptop users',
    'Local noodle shops often have the best value',
    'Family-run guesthouses often include simple breakfast',
    'Markets have amazing fresh fruit for very low prices',
    'Public temples are free to visit and often very peaceful'
  ],
  byPreference: {
    coworking: [
      'Laos has very few coworking spaces - cafes are better value',
      'Ask about weekly rates if staying longer term',
      'Consider working from hotel lobbies with good WiFi',
      'Some hostels have decent workspaces included',
      'Bring portable WiFi hotspot as backup'
    ],
    cafe: [
      'Order Lao coffee (strong and sweet) instead of espresso',
      'Buy a large drink to justify longer stay',
      'Visit during quiet hours (2-5 PM)',
      'Choose local cafes over international chains',
      'Some cafes offer free refills on basic drinks'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Libraries close early (around 5 PM)',
      'Check holiday schedules',
      'May need to show passport for entry',
      'Very quiet - perfect for focused work'
    ],
    hostel: [
      'Book dorms with common work areas',
      'Weekly rates offer better value',
      'Use morning hours for most productive work',
      'Some hostels have garden or terrace workspaces',
      'Look for hostels popular with digital nomads'
    ],
    hotel: [
      'Small boutique hotels often have beautiful lobbies',
      'Ask if day passes are available for non-guests',
      'Hotel restaurants during off-hours can be quiet',
      'Some hotels have poolside work areas',
      'Business hotels have better facilities'
    ]
  }
};

// ADD COWORKING MEMBERSHIPS FOR LAOS
export const laosCoworkingMemberships = [
  {
    name: "Vientiane Co-working Membership",
    monthlyPrice: 120,
    coverage: ["Vientiane"],
    dayPassAvailable: true,
    dayPassPrice: 8,
    trialDays: 1,
    benefits: [
      "24/7 access",
      "Meeting room credits",
      "Printing services",
      "Kitchen access",
      "Coffee and tea"
    ],
    bestFor: "Nomads based in Vientiane needing reliable workspace",
    website: "http://vientianecoworking.com"
  }
];

// UPDATED LAOS NOMAD DATA
export const laosNomadData: NomadData = {
  country: "Laos",
  cities: ["Vientiane", "Luang Prabang", "Vang Vieng", "Pakse", "Savannakhet", "Thakhek"],
  
  internet: {
    speed: 25,
    reliability: 5,
    coworkingSpaces: 8,
    freePublicWifiSpots: 2
  },
  
  costs: {
    coworkingMonthly: 120,
    simCardMonthly: 8,
    coffeeShopWork: 2.5,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 4,
    englishLevel: 4,
    safety: 8,
    nomadGroups: [
      "Digital Nomads Laos Facebook Group",
      "Vientiane Expats Community",
      "Luang Prabang Remote Workers"
    ]
  },
  
  workspaces: laosWorkspaces,
  
  freeWorkspaces: laosFreeWorkspaces,
  
  moneySavingTips: laosMoneySavingTips,
  
  coworkingMemberships: laosCoworkingMemberships,
  
  touristyCities: [
    "Luang Prabang Old Town",
    "Vang Vieng Main Street",
    "Vientiane Riverside",
    "Pakse City Center",
    "4000 Islands area"
  ]
};