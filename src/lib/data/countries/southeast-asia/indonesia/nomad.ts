// src/lib/data/countries/southeast-asia/indonesia/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips } from '$lib/data/nomadData';

export const indonesiaWorkspaces: Workspace[] = [
  {
    name: 'Dojo Bali',
    city: 'Canggu, Bali',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 10,
    monthlyPrice: 100,
    rating: 4.8,
    wifiSpeed: 45,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Swimming Pool', 'Cafe', 'Community Events', 'Meeting Rooms', 'Phone Booths'],
    bestFor: ['Digital nomads', 'Social networking', 'Beach lifestyle'],
    hours: '24/7',
    address: 'Jl. Batu Mejan No.88, Canggu, Bali',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    membershipDiscount: 15,
    notes: 'Most famous digital nomad hub in Bali'
  },
  {
    name: 'Tropical Nomad',
    city: 'Canggu, Bali',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 8,
    monthlyPrice: 87,
    rating: 4.6,
    wifiSpeed: 40,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Beach View', 'Cafe', 'Event Space', 'Community Events', 'High-speed WiFi'],
    bestFor: ['Creative work', 'Social environment', 'Surf/work balance'],
    hours: '8:00-22:00',
    address: 'Jl. Padang Linjong No.99, Canggu, Bali',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1
  },
  {
    name: 'Hubud (Hub in Ubud)',
    city: 'Ubud, Bali',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 13,
    monthlyPrice: 133,
    rating: 4.7,
    wifiSpeed: 35,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Garden Area', 'Cafe', 'Meeting Rooms', 'Community Events', 'Eco-friendly'],
    bestFor: ['Focused work', 'Wellness community', 'Eco-conscious nomads'],
    hours: '24/7',
    address: 'Monkey Forest Road, Ubud, Bali',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1,
    membershipDiscount: 20,
    notes: 'Premium eco-friendly coworking space'
  },
  {
    name: 'GoWork',
    city: 'Jakarta',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 10,
    monthlyPrice: 93,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Business Facilities', 'Meeting Rooms', 'Networking Events', 'Cafe', 'Printing'],
    bestFor: ['Business meetings', 'Corporate work', 'Professional networking'],
    hours: '24/7',
    address: 'Multiple locations in Jakarta',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 3,
    membershipDiscount: 10
  },
  {
    name: 'Livinn',
    city: 'Jakarta',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 7,
    monthlyPrice: 80,
    rating: 4.4,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Lounge Areas', 'Cafe', 'Meeting Rooms', 'Business Services', 'Mail Handling'],
    bestFor: ['Startups', 'Freelancers', 'Business services'],
    hours: '8:00-20:00',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2
  },
  {
    name: 'Cafe Organic',
    city: 'Canggu, Bali',
    country: 'Indonesia',
    type: 'cafe',
    dayPassPrice: 3,
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 30,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['Healthy Food', 'Power Outlets', 'Garden Seating', 'Good Atmosphere'],
    bestFor: ['Casual work', 'Health-conscious nomads', 'Short sessions'],
    hours: '7:00-22:00',
    address: 'Jl. Batu Mejan No.45, Canggu, Bali',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Healthy food cafe popular with nomads'
  },
  {
    name: 'Space by Union',
    city: 'Yogyakarta',
    country: 'Indonesia',
    type: 'coworking',
    dayPassPrice: 5,
    monthlyPrice: 60,
    rating: 4.2,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Quiet Zones', 'Meeting Rooms', 'Library', 'Cafe', 'Event Space'],
    bestFor: ['Students', 'Creative work', 'Academic projects'],
    hours: '8:00-20:00',
    address: 'Jl. Tirtodipuran No.10, Yogyakarta',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1
  },
  {
    name: 'The Orient',
    city: 'Seminyak, Bali',
    country: 'Indonesia',
    type: 'cafe',
    dayPassPrice: 5,
    monthlyPrice: 0,
    rating: 4.1,
    wifiSpeed: 25,
    powerOutlets: 2,
    noiseLevel: 5,
    amenities: ['Beach View', 'Upscale Dining', 'Power Outlets', 'Comfortable Seating'],
    bestFor: ['Casual meetings', 'Laptop work', 'Relaxed atmosphere'],
    hours: '8:00-23:00',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Upscale beachfront cafe'
  },
  // ADD HOSTEL/HOTEL EXAMPLES FOR INDONESIA
  {
    name: 'The Farm Hostel Bali',
    city: 'Canggu, Bali',
    country: 'Indonesia',
    type: 'hostel',
    dayPassPrice: 5,
    monthlyPrice: 100,
    rating: 4.6,
    wifiSpeed: 40,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Rice field view', 'Co-working pool', 'Yoga deck', 'Vegetarian cafe', 'Bike rental'],
    bestFor: ['Nature lovers', 'Wellness-focused nomads', 'Social community', 'Surfers'],
    hours: 'Common area: 7:00-22:00',
    address: 'Jl. Pantai Batu Bolong, Canggu',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    dayPassForNonGuests: true,
    notes: 'Beautiful rice field setting, free workspace for guests'
  },
  {
    name: 'Tribal Bali - Coliving',
    city: 'Pererenan, Bali',
    country: 'Indonesia',
    type: 'hostel',
    dayPassPrice: 7,
    monthlyPrice: 167,
    rating: 4.8,
    wifiSpeed: 50,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Professional co-working space', 'Swimming pool', 'Restaurant', 'Gym', 'Events'],
    bestFor: ['Professional nomads', 'Long-term stays', 'Community living', 'Focused work'],
    hours: '24/7 co-working access',
    address: 'Pererenan, Bali',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Premium coliving/working space, excellent facilities'
  },
  {
    name: 'Ayana Resort Lobby Lounge',
    city: 'Jimbaran, Bali',
    country: 'Indonesia',
    type: 'hotel',
    dayPassPrice: 17,
    monthlyPrice: 667,
    rating: 4.9,
    wifiSpeed: 45,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Luxury lobby', 'Ocean view', 'Premium dining', 'Pool access', 'Spa services'],
    bestFor: ['Luxury work', 'Important meetings', 'Treat yourself days', 'Creative inspiration'],
    hours: '24/7 lobby access',
    address: 'Jimbaran, Bali',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Luxury resort, stunning views, minimum spend for non-guests'
  },
  {
    name: 'Kupu Kupu Barong Villas Lobby',
    city: 'Ubud, Bali',
    country: 'Indonesia',
    type: 'hotel',
    dayPassPrice: 10,
    monthlyPrice: 333,
    rating: 4.7,
    wifiSpeed: 35,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Valley view', 'Rainforest setting', 'Restaurant', 'Infinity pool', 'Spa'],
    bestFor: ['Nature-inspired work', 'Peaceful environment', 'Writing', 'Design work'],
    hours: 'Lobby: 6:00-22:00',
    address: 'Kedewatan, Ubud',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Beautiful rainforest setting, free for guests'
  }
];

// ADD FREE WORKSPACES FOR INDONESIA
export const indonesiaFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'National Library of Indonesia',
    city: 'Jakarta',
    type: 'library',
    description: 'Modern national library with excellent facilities',
    cost: 'free',
    wifi: true,
    wifiSpeed: 60,
    powerOutlets: true,
    hours: '8:00-20:00 (Tue-Sun)',
    amenities: ['Modern building', 'Quiet study zones', 'Extensive collection', 'AC', 'Computer access'],
    bestFor: ['Research', 'Academic work', 'Quiet study', 'Deep focus'],
    noiseLevel: 1,
    address: 'Jalan Medan Merdeka Selatan, Jakarta',
    notes: 'Modern facilities, may require registration',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Bali Public Library (Puspas)',
    city: 'Denpasar, Bali',
    type: 'library',
    description: 'Public library with reading rooms and basic facilities',
    cost: 'free',
    wifi: true,
    wifiSpeed: 25,
    powerOutlets: true,
    hours: '8:00-17:00 (Mon-Sat)',
    amenities: ['Reading rooms', 'Local collection', 'AC', 'Study areas', 'Newspapers'],
    bestFor: ['Quiet work', 'Reading', 'Research', 'Escape from heat'],
    noiseLevel: 2,
    address: 'Jalan Serayu, Denpasar',
    notes: 'Basic facilities, can get crowded',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Beach Coffees',
    city: 'Multiple beaches, Bali',
    type: 'public_space',
    description: 'Beachside cafes and warungs with seating',
    cost: 'purchase_required',
    wifi: false,
    powerOutlets: false,
    hours: '7:00-21:00',
    amenities: ['Ocean view', 'Fresh air', 'Local food', 'Relaxed atmosphere', 'Cheap'],
    bestFor: ['Creative work', 'Reading', 'Planning', 'Sunset sessions'],
    noiseLevel: 3,
    notes: 'Purchase drink or snack, bring power bank',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Mall Food Courts',
    city: 'Jakarta, Bali, Yogyakarta',
    type: 'mall',
    description: 'Shopping mall food courts with WiFi and seating',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 30,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Air conditioning', 'Food variety', 'Comfortable seating', 'Clean facilities', 'Toilets'],
    bestFor: ['Casual work', 'Meetings', 'Escape from heat', 'Quick sessions'],
    noiseLevel: 4,
    notes: 'Purchase required, can be noisy',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Rice Field Cafes',
    city: 'Ubud, Bali',
    type: 'public_space',
    description: 'Simple cafes overlooking rice fields',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 20,
    powerOutlets: true,
    hours: '8:00-18:00',
    amenities: ['Rice field view', 'Peaceful atmosphere', 'Simple food', 'Nature', 'Fresh air'],
    bestFor: ['Creative inspiration', 'Writing', 'Planning', 'Peaceful work'],
    noiseLevel: 2,
    notes: 'Basic WiFi, beautiful setting',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Public Parks',
    city: 'Multiple cities',
    type: 'park',
    description: 'Public parks with benches and sometimes WiFi',
    cost: 'free',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-18:00',
    amenities: ['Green space', 'Fresh air', 'Exercise areas', 'Free', 'Peaceful'],
    bestFor: ['Reading', 'Planning', 'Creative thinking', 'Break from screens'],
    noiseLevel: 3,
    notes: 'Best in morning, bring power bank',
    budgetCategory: 'zero_spend'
  }
];

// ADD MONEY SAVING TIPS FOR INDONESIA
export const indonesiaMoneySavingTips: MoneySavingTips = {
  general: [
    'Use Gojek/Grab apps for transportation (cheaper than taxis)',
    'Eat at local "warung" restaurants (15,000-30,000 IDR per meal)',
    'Buy SIM cards from Telkomsel shops, not airports or hotels',
    'Stay in homestays instead of hotels (50-70% cheaper)',
    'Take public transportation in cities (TransJakarta, KRL)',
    'Shop at local markets instead of supermarkets',
    'Drink local coffee instead of imported',
    'Learn basic Bahasa Indonesia for better prices'
  ],
  touristAreas: [
    'Avoid restaurants on main tourist streets in Kuta/Seminyak',
    'In Bali, eat in local "warungs" away from beachfront',
    'Skip overpriced beach clubs and find local beach bars',
    'Bargain in tourist markets (start at 30% of asking price)',
    'Avoid buying water in convenience stores - buy in supermarkets',
    'Use local laundry services instead of hotel laundry'
  ],
  nonTouristAreas: [
    'Small town cafes welcome laptop users and are cheaper',
    'Local libraries often have good facilities',
    'Markets have amazing street food for 5,000-10,000 IDR',
    'University towns have cheaper accommodations and food',
    'Family-run homestays offer better value'
  ],
  byPreference: {
    coworking: [
      'Ask for "long-term discount" (20-30% off for 3+ months)',
      'Share monthly membership with another nomad',
      'Use free trial days across different providers',
      'Look for spaces outside main tourist areas (cheaper)',
      'Pay in Indonesian Rupiah instead of USD for better rates'
    ],
    cafe: [
      'Order local "kopi tubruk" instead of espresso drinks',
      'Buy large drink to justify longer stay',
      'Visit during 2-5 PM when cafes are less busy',
      'Choose local warungs with seating over tourist cafes',
      'Tip 5,000-10,000 IDR if staying 3+ hours'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use noise-cancelling headphones for focus',
      'Arrive early for best seating',
      'Check holiday schedules in advance',
      'Some libraries require registration'
    ],
    hostel: [
      'Book coliving spaces with workspace included',
      'Monthly rates are 30-40% cheaper than weekly',
      'Use morning hours (7-10 AM) for most productive work',
      'Some hostels have partnerships with coworking spaces',
      'Look for "workation" packages'
    ],
    hotel: [
      'Business hotels have better lobby workspaces',
      'Small boutique hotels often have beautiful settings',
      'Ask about day passes to hotel facilities',
      'Use hotel restaurants during non-peak hours',
      'Loyalty programs can include workspace access'
    ]
  }
};

// ADD COWORKING MEMBERSHIPS FOR INDONESIA
export const indonesiaCoworkingMemberships = [
  {
    name: "Dojo Bali Membership",
    monthlyPrice: 100,
    coverage: ["Canggu, Bali"],
    dayPassAvailable: true,
    dayPassPrice: 10,
    trialDays: 2,
    benefits: [
      "24/7 access",
      "Pool access",
      "Meeting room credits",
      "Community events",
      "Cafe discounts",
      "Networking opportunities"
    ],
    bestFor: "Digital nomads wanting community in Canggu",
    website: "https://dojobali.org"
  },
  {
    name: "Hubud Bali Membership",
    monthlyPrice: 133,
    coverage: ["Ubud, Bali"],
    dayPassAvailable: true,
    dayPassPrice: 13,
    trialDays: 1,
    benefits: [
      "24/7 access",
      "Eco-friendly workspace",
      "Meeting room credits",
      "Wellness events",
      "Garden access",
      "Networking"
    ],
    bestFor: "Eco-conscious nomads in Ubud",
    website: "https://hubud.org"
  },
  {
    name: "GoWork Network Pass",
    monthlyPrice: 93,
    coverage: ["Jakarta (multiple locations)"],
    dayPassAvailable: true,
    dayPassPrice: 10,
    trialDays: 3,
    benefits: [
      "Access to all GoWork locations",
      "Business services",
      "Meeting rooms",
      "Networking events",
      "Printing credits"
    ],
    bestFor: "Nomads working in Jakarta business districts",
    website: "https://gowork.id"
  }
];

// UPDATED INDONESIA NOMAD DATA
export const indonesiaNomadData: NomadData = {
  country: "Indonesia",
  cities: ["Canggu (Bali)", "Ubud (Bali)", "Jakarta", "Yogyakarta", "Seminyak (Bali)", "Denpasar", "Bandung", "Surabaya"],
  
  internet: {
    speed: 40,
    reliability: 6,
    coworkingSpaces: 45,
    freePublicWifiSpots: 4
  },
  
  costs: {
    coworkingMonthly: 100,
    simCardMonthly: 7,
    coffeeShopWork: 3,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 8,
    englishLevel: 6,
    safety: 7,
    nomadGroups: [
      "Digital Nomads Indonesia Facebook Group",
      "Bali Digital Nomads Community",
      "Jakarta Remote Workers",
      "Ubud Digital Nomads",
      "Indonesia Remote Workers Slack"
    ]
  },
  
  workspaces: indonesiaWorkspaces,
  
  freeWorkspaces: indonesiaFreeWorkspaces,
  
  moneySavingTips: indonesiaMoneySavingTips,
  
  coworkingMemberships: indonesiaCoworkingMemberships,
  
  touristyCities: [
    "Kuta, Bali",
    "Seminyak, Bali",
    "Legian, Bali",
    "Sanur, Bali",
    "Nusa Dua, Bali",
    "Jakarta Central",
    "Yogyakarta Malioboro",
    "Lombok Gili Islands",
    "Labuan Bajo (Komodo)"
  ]
};