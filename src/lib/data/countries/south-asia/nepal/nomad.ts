// src/lib/data/countries/south-asia/nepal/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips } from '$lib/data/nomadData';

export const nepalWorkspaces: Workspace[] = [
  {
    name: 'Karma Coffee & Cowork',
    city: 'Kathmandu',
    country: 'Nepal',
    type: 'coworking',
    dayPassPrice: 6,
    monthlyPrice: 92,
    rating: 4.5,
    wifiSpeed: 35,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Coffee Shop', 'Quiet Work Area', 'Meeting Room', 'Garden Terrace', 'Local Community'],
    bestFor: ['Digital Nomads', 'Trekking Planners', 'Quiet Work'],
    hours: '7:00-20:00',
    address: 'Boudha, Kathmandu',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1,
    notes: 'Popular with trekkers and digital nomads'
  },
  {
    name: 'Himalayan Java',
    city: 'Kathmandu',
    country: 'Nepal',
    type: 'cafe',
    hourlyRate: 1.15,
    rating: 4.3,
    wifiSpeed: 25,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['Nepali Coffee', 'Western Food', 'WiFi', 'Power Outlets', 'Multiple Locations'],
    bestFor: ['Casual Work', 'Meetings', 'Reliable Chain'],
    hours: '7:00-21:00',
    address: 'Thamel, Kathmandu',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Reliable chain cafe, purchase required'
  },
  {
    name: 'Pokhara Digital Nomads Hub',
    city: 'Pokhara',
    country: 'Nepal',
    type: 'coworking',
    dayPassPrice: 5,
    monthlyPrice: 69,
    rating: 4.4,
    wifiSpeed: 40,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Lake Views', 'Mountain Views', 'Community Events', 'Coffee/Tea', 'Trekking Advice'],
    bestFor: ['Digital Nomads', 'Trekkers', 'Nature Lovers'],
    hours: '8:00-19:00',
    address: 'Lakeside, Pokhara',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    notes: 'Beautiful lake and mountain views'
  },
  {
    name: 'Red Mud Coffee',
    city: 'Pokhara',
    country: 'Nepal',
    type: 'cafe',
    hourlyRate: .92,
    rating: 4.2,
    wifiSpeed: 30,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Organic Food', 'Garden Seating', 'WiFi', 'Local Atmosphere'],
    bestFor: ['Coffee Lovers', 'Health Conscious', 'Relaxed Work'],
    hours: '7:00-20:00',
    address: 'Lakeside East, Pokhara',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Organic and specialty coffee'
  },
  {
    name: 'Boudha Stupa Cafe',
    city: 'Kathmandu',
    country: 'Nepal',
    type: 'cafe',
    hourlyRate: .77,
    rating: 4.5,
    wifiSpeed: 20,
    powerOutlets: 2,
    noiseLevel: 4,
    amenities: ['Stupa Views', 'Traditional Atmosphere', 'Tibetan Food', 'Spiritual Environment', 'Basic WiFi'],
    bestFor: ['Spiritual Seekers', 'Budget Work', 'Cultural Experience'],
    hours: '6:00-19:00',
    address: 'Boudhanath Stupa, Kathmandu',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Cultural and spiritual atmosphere'
  },
  {
    name: 'Kathmandu Coworking Space',
    city: 'Kathmandu',
    country: 'Nepal',
    type: 'coworking',
    dayPassPrice: 8,
    monthlyPrice: 115,
    rating: 4.1,
    wifiSpeed: 45,
    powerOutlets: 6,
    noiseLevel: 3,
    amenities: ['High-speed Internet', 'Business Services', 'Meeting Rooms', 'Printing', 'UPS Backup'],
    bestFor: ['Professionals', 'Business Meetings', 'Reliable Connection'],
    hours: '8:00-20:00',
    address: 'Durbar Marg, Kathmandu',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1,
    membershipDiscount: 10,
    notes: 'Business-focused coworking space'
  },
  {
    name: 'Trekker\'s Hub',
    city: 'Pokhara',
    country: 'Nepal',
    type: 'cafe',
    hourlyRate: .77,
    rating: 4.3,
    wifiSpeed: 25,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Trekking Community', 'Guide Services', 'Maps & Information', 'Basic WiFi', 'Budget Friendly'],
    bestFor: ['Trekkers', 'Adventure Planners', 'Budget Travelers'],
    hours: '7:00-21:00',
    address: 'Lakeside Main Street, Pokhara',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Great for trekking planning and community'
  },
  // ADD HOSTEL/HOTEL EXAMPLES FOR NEPAL
  {
    name: 'Aloft Kathmandu Lobby',
    city: 'Kathmandu',
    country: 'Nepal',
    type: 'hotel',
    dayPassPrice: 6,
    monthlyPrice: 462,
    rating: 4.6,
    wifiSpeed: 50,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Modern lobby', 'Business center', 'Restaurant', 'Reliable power backup', 'Comfortable seating'],
    bestFor: ['Reliable work', 'Important calls', 'Business meetings', 'During power cuts'],
    hours: '24/7 lobby access',
    address: 'Thamel, Kathmandu',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    dayPassForNonGuests: true,
    notes: 'Reliable during power cuts, free for guests'
  },
  {
    name: 'Hotel Tibet Lobby',
    city: 'Kathmandu',
    country: 'Nepal',
    type: 'hotel',
    dayPassPrice: 4,
    monthlyPrice: 308,
    rating: 4.4,
    wifiSpeed: 30,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Traditional decor', 'Garden courtyard', 'Tibetan restaurant', 'Peaceful atmosphere', 'Cultural setting'],
    bestFor: ['Peaceful work', 'Cultural inspiration', 'Quiet environment', 'Writing'],
    hours: 'Lobby: 6:00-22:00',
    address: 'Boudha, Kathmandu',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Beautiful traditional setting, peaceful atmosphere'
  },
  {
    name: 'Backpacker Hostel Pokhara',
    city: 'Pokhara',
    country: 'Nepal',
    type: 'hostel',
    dayPassPrice: 2,
    monthlyPrice: 77,
    rating: 4.3,
    wifiSpeed: 35,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Lake view terrace', 'Common work area', 'Kitchen', 'Trekking advice', 'Bike rental'],
    bestFor: ['Budget travelers', 'Trekking planning', 'Social nomads', 'Lake view work'],
    hours: 'Common area: 7:00-21:00',
    address: 'Lakeside, Pokhara',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    dayPassForNonGuests: true,
    notes: 'Beautiful lake views, free workspace for guests'
  },
  {
    name: 'Mountain View Resort Lobby',
    city: 'Nagarkot',
    country: 'Nepal',
    type: 'hotel',
    dayPassPrice: 5,
    monthlyPrice: 346,
    rating: 4.7,
    wifiSpeed: 25,
    powerOutlets: 3,
    noiseLevel: 1,
    amenities: ['Himalayan views', 'Fireplace lounge', 'Restaurant', 'Sunrise viewing', 'Peaceful environment'],
    bestFor: ['Inspiring work', 'Writing retreat', 'Creative projects', 'Mountain views'],
    hours: 'Lobby: 5:00-21:00',
    address: 'Nagarkot, Kathmandu Valley',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Stunning Himalayan views, inspiring work environment'
  }
];

// ADD FREE WORKSPACES FOR NEPAL
export const nepalFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'Nepal National Library',
    city: 'Kathmandu',
    type: 'library',
    description: 'National library with reading rooms and study areas',
    cost: 'free',
    wifi: true,
    wifiSpeed: 20,
    powerOutlets: true,
    hours: '9:00-17:00 (Mon-Fri)',
    amenities: ['Reading rooms', 'Study areas', 'Historical collection', 'Quiet environment', 'AC'],
    bestFor: ['Academic research', 'Quiet study', 'Reading', 'Focused work'],
    noiseLevel: 1,
    address: 'Pulchowk, Lalitpur',
    notes: 'Very quiet, may require registration',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Garden of Dreams',
    city: 'Kathmandu',
    type: 'public_space',
    description: 'Beautiful historical garden with seating areas',
    cost: 'free',
    wifi: false,
    powerOutlets: false,
    hours: '9:00-22:00',
    amenities: ['Beautiful gardens', 'Historical architecture', 'Peaceful atmosphere', 'Cafe nearby', 'Seating'],
    bestFor: ['Reading', 'Planning', 'Creative thinking', 'Escape from city noise'],
    noiseLevel: 2,
    address: 'Thamel, Kathmandu',
    notes: 'Small entry fee sometimes charged, bring power bank',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Local Tea Shops (Bhatti)',
    city: 'Multiple cities',
    type: 'public_space',
    description: 'Traditional tea shops with seating',
    cost: 'purchase_required',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-20:00',
    amenities: ['Local tea', 'Authentic experience', 'Very cheap', 'Cultural immersion', 'Simple food'],
    bestFor: ['Quick work', 'Email checking', 'Local experience', 'Budget work'],
    noiseLevel: 4,
    notes: 'No WiFi, very basic, authentic Nepali experience',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Rooftop Cafes with Views',
    city: 'Kathmandu Valley',
    type: 'public_space',
    description: 'Simple rooftop cafes with mountain views',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 15,
    powerOutlets: true,
    hours: '7:00-19:00',
    amenities: ['Mountain views', 'Fresh air', 'Simple food', 'Peaceful atmosphere', 'Local experience'],
    bestFor: ['Inspiring work', 'Writing', 'Planning', 'Creative projects'],
    noiseLevel: 2,
    notes: 'Basic WiFi, purchase required, stunning views',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Public Parks',
    city: 'Multiple cities',
    type: 'park',
    description: 'Public parks and open spaces',
    cost: 'free',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-18:00',
    amenities: ['Green space', 'Fresh air', 'Exercise areas', 'Free', 'Peaceful'],
    bestFor: ['Reading', 'Planning', 'Creative thinking', 'Break from city'],
    noiseLevel: 3,
    notes: 'Best in morning, bring power bank and water',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Monastery Libraries',
    city: 'Boudha, Swayambhu',
    type: 'library',
    description: 'Buddhist monastery libraries sometimes open to public',
    cost: 'free',
    wifi: false,
    powerOutlets: false,
    hours: '9:00-17:00',
    amenities: ['Spiritual atmosphere', 'Peaceful environment', 'Cultural experience', 'Quiet', 'Historical'],
    bestFor: ['Meditative work', 'Writing', 'Reading', 'Spiritual seekers'],
    noiseLevel: 1,
    notes: 'Respect monastery rules, dress modestly, very peaceful',
    budgetCategory: 'zero_spend'
  }
];

// ADD MONEY SAVING TIPS FOR NEPAL
export const nepalMoneySavingTips: MoneySavingTips = {
  general: [
    'Use local buses instead of taxis (80-90% cheaper)',
    'Eat at local "dal bhat" restaurants (100-200 NPR per meal)',
    'Buy SIM cards from Ncell shops, not hotels or airports',
    'Stay in guesthouses instead of hotels (50-70% cheaper)',
    'Drink local tea instead of coffee',
    'Shop at local markets instead of tourist shops',
    'Travel by local bus for long distances',
    'Learn basic Nepali phrases for better prices'
  ],
  touristAreas: [
    'Avoid restaurants on Thamel main streets in Kathmandu',
    'In Pokhara Lakeside, walk 2 blocks away from lake for better prices',
    'Bargain for everything in tourist markets (start at 50% of asking price)',
    'Skip organized tours and hire local guides directly',
    'Avoid buying trekking gear in Thamel - prices inflated'
  ],
  nonTouristAreas: [
    'Small town cafes are very welcoming and cheaper',
    'Local tea shops have best value for quick work',
    'Family-run guesthouses often include simple meals',
    'Markets have amazing fresh produce for very low prices',
    'Public libraries are free and quiet'
  ],
  byPreference: {
    coworking: [
      'Ask for trekker/nomad discount (often available)',
      'Weekly rates are better value than daily',
      'Some spaces offer free days during trial periods',
      'Consider hotel lobbies during power cuts (they have generators)',
      'Bring portable power bank for frequent electricity outages'
    ],
    cafe: [
      'Order Nepali tea instead of coffee',
      'Visit during off-peak hours (2-5 PM)',
      'Choose local cafes over tourist-oriented ones',
      'Buy large drink to justify longer stay',
      'Some cafes offer free refills on basic tea'
    ],
    library: [
      'Bring power bank as electricity can be unreliable',
      'Check opening hours as they vary',
      'Some libraries close for festivals and holidays',
      'May need to show passport for registration',
      'Very quiet - perfect for focused work'
    ],
    hostel: [
      'Book hostels with common work areas',
      'Weekly/monthly rates offer significant savings',
      'Use morning hours before power cuts start',
      'Some hostels have rooftop workspaces with views',
      'Look for hostels popular with trekkers/nomads'
    ],
    hotel: [
      'Hotel lobbies often have backup generators during power cuts',
      'Small heritage hotels have beautiful settings',
      'Ask about day passes for non-guests',
      'Hotel restaurants during off-hours can be quiet',
      'Business hotels have most reliable facilities'
    ]
  }
};

// ADD COWORKING MEMBERSHIPS FOR NEPAL
export const nepalCoworkingMemberships = [
  {
    name: "Karma Cowork Membership",
    monthlyPrice: 92,
    coverage: ["Kathmandu (Boudha)"],
    dayPassAvailable: true,
    dayPassPrice: 6,
    trialDays: 2,
    benefits: [
      "24/7 access",
      "Meeting room credits",
      "Coffee discounts",
      "Community events",
      "Trekking advice",
      "Networking opportunities"
    ],
    bestFor: "Digital nomads and trekkers in Kathmandu",
    website: "http://karmacowork.com"
  },
  {
    name: "Pokhara Nomads Hub Membership",
    monthlyPrice: 69,
    coverage: ["Pokhara"],
    dayPassAvailable: true,
    dayPassPrice: 5,
    trialDays: 3,
    benefits: [
      "Lake view workspace",
      "Trekking planning assistance",
      "Community events",
      "Tea/coffee included",
      "WiFi and printing"
    ],
    bestFor: "Nomads based in Pokhara with trekking plans",
    website: "http://pokharacowork.com"
  }
];

// UPDATED NEPAL NOMAD DATA
export const nepalNomadData: NomadData = {
  country: "Nepal",
  cities: ["Kathmandu", "Pokhara", "Chitwan", "Lumbini", "Nagarkot", "Dhulikhel", "Bandipur", "Tansen"],
  
  internet: {
    speed: 30,
    reliability: 5,
    coworkingSpaces: 15,
    freePublicWifiSpots: 2
  },
  
  costs: {
    coworkingMonthly: 92,
    simCardMonthly: 4,
    coffeeShopWork: 0.92,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 5,
    englishLevel: 6,
    safety: 7,
    nomadGroups: [
      "Digital Nomads Nepal Facebook Group",
      "Kathmandu Expats Community",
      "Pokhara Digital Nomads",
      "Nepal Remote Workers"
    ]
  },
  
  workspaces: nepalWorkspaces,
  
  freeWorkspaces: nepalFreeWorkspaces,
  
  moneySavingTips: nepalMoneySavingTips,
  
  coworkingMemberships: nepalCoworkingMemberships,
  
  touristyCities: [
    "Thamel, Kathmandu",
    "Lakeside, Pokhara",
    "Boudhanath Stupa area",
    "Swayambhunath area",
    "Nagarkot main street",
    "Chitwan tourist zone",
    "Lumbini temple area"
  ]
};