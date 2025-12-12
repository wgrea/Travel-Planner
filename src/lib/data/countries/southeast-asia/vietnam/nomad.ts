// src/lib/data/countries/southeast-asia/vietnam/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips } from '$lib/data/nomadData';

// Update your existing workspaces with new fields
export const vietnamWorkspaces: Workspace[] = [
  {
    name: 'Dreamplex',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    type: 'coworking',
    dayPassPrice: 6,
    monthlyPrice: 80,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Coffee', 'Event Space', 'Phone Booths'],
    bestFor: ['Professional meetings', 'Team work', 'Networking'],
    hours: '24/7',
    address: 'Multiple locations in District 1 and District 2',
    // NEW BUDGET FIELDS:
    freeTrialDays: 1,
    membershipDiscount: 15,
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    notes: 'Premium coworking space in tourist area'
  },
  {
    name: 'Saigon Coworking',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    type: 'coworking',
    dayPassPrice: 5,
    monthlyPrice: 65,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['24/7 Access', 'Kitchen', 'Printing', 'Lockers'],
    bestFor: ['Focused work', 'Long hours', 'Privacy'],
    hours: '24/7',
    // NEW BUDGET FIELDS:
    freeTrialDays: 2,
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    notes: 'More affordable coworking option'
  },
  {
    name: 'Toong Coworking Space',
    city: 'Hanoi',
    country: 'Vietnam',
    type: 'coworking',
    dayPassPrice: 6,
    monthlyPrice: 72,
    rating: 4.4,
    wifiSpeed: 85,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Cafe', 'Event Space'],
    bestFor: ['Creative work', 'Networking', 'Startups'],
    hours: '24/7',
    // NEW BUDGET FIELDS:
    freeTrialDays: 1,
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false
  },
  {
    name: 'UP Coworking Space',
    city: 'Hanoi',
    country: 'Vietnam',
    type: 'coworking',
    dayPassPrice: 4,
    monthlyPrice: 56,
    rating: 4.2,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Quiet zones', 'Meeting Rooms', 'Kitchen', 'Printing'],
    bestFor: ['Focused work', 'Students', 'Remote workers'],
    hours: '7:00 AM - 10:00 PM',
    // NEW BUDGET FIELDS:
    freeTrialDays: 3,
    membershipDiscount: 10,
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false
  },
  {
    name: 'The Workshop Coffee',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    type: 'cafe',
    hourlyRate: 3,
    rating: 4.1,
    wifiSpeed: 45,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Power Outlets', 'WiFi', 'Food'],
    bestFor: ['Coffee lovers', 'Creative work', 'Short sessions'],
    hours: '7:30 AM - 10:00 PM',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Specialty coffee shop - purchase required'
  },
  {
    name: 'DNES Coworking Space',
    city: 'Da Nang',
    country: 'Vietnam',
    type: 'coworking',
    dayPassPrice: 3,
    monthlyPrice: 48,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beach proximity', 'Meeting Rooms', 'Coffee', 'Events'],
    bestFor: ['Beach lifestyle', 'Digital nomads', 'Relaxed work'],
    hours: '24/7',
    // NEW BUDGET FIELDS:
    freeTrialDays: 2,
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false
  },
  {
    name: 'National Library of Vietnam',
    city: 'Hanoi',
    country: 'Vietnam',
    type: 'library',
    dayPassPrice: 0,
    rating: 4.3,
    wifiSpeed: 35,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Large collection', 'Reading rooms', 'Study areas', 'AC', 'Free WiFi'],
    bestFor: ['Academic research', 'Quiet study', 'Historical research'],
    hours: '8:00-20:00 (Mon-Fri), 8:00-17:00 (Sat)',
    address: '31 Trang Thi, Hoan Kiem, Hanoi',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'zero_spend',
    includedWithStay: false,
    notes: 'Requires registration, excellent quiet environment'
  },
  {
    name: 'Hue University Library',
    city: 'Hue',
    country: 'Vietnam',
    type: 'library',
    dayPassPrice: 0,
    rating: 4.0,
    wifiSpeed: 40,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['University resources', 'Quiet study zones', 'AC', 'Good WiFi'],
    bestFor: ['Academic work', 'Quiet study', 'Research'],
    hours: '7:30-17:00 (Mon-Fri)',
    address: 'Hue University campus',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'zero_spend',
    includedWithStay: false,
    notes: 'Visitor access may require permission'
  },
  {
    name: 'Da Nang General Library',
    city: 'Da Nang',
    country: 'Vietnam',
    type: 'library',
    dayPassPrice: 0,
    rating: 3.8,
    wifiSpeed: 25,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Local collection', 'Reading areas', 'AC', 'Basic facilities'],
    bestFor: ['Quiet work', 'Reading', 'Escaping heat'],
    hours: '7:30-17:00 (Mon-Fri), 7:30-11:30 (Sat)',
    address: '46 Bach Dang, Hai Chau, Da Nang',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'zero_spend',
    includedWithStay: false
  },
  // ADD HOSTEL/HOTEL EXAMPLES FOR VIETNAM
  {
    name: 'Vietnam Backpacker Hostels - Downtown',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    type: 'hostel',
    dayPassPrice: 5, // For non-guests
    monthlyPrice: 250, // Accommodation + workspace
    rating: 4.4,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Co-working lounge', 'Bar', 'Tour desk', 'Social events', 'Laundry'],
    bestFor: ['Social nomads', 'Backpackers', 'Networking', 'Fun environment'],
    hours: '24/7 co-working lounge',
    address: 'Pham Ngu Lao, District 1, HCMC',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    dayPassForNonGuests: true,
    notes: 'Free workspace for guests, $5 day pass for non-guests. Very social atmosphere.'
  },
  {
    name: 'Little Hanoi Hostel',
    city: 'Hanoi',
    country: 'Vietnam',
    type: 'hostel',
    dayPassPrice: 4,
    monthlyPrice: 180,
    rating: 4.6,
    wifiSpeed: 65,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Quiet work area', 'Rooftop terrace', 'Kitchen', 'Bike rental', 'Book exchange'],
    bestFor: ['Focused work', 'Budget travelers', 'Long-term stays'],
    hours: 'Work area: 7:00-22:00',
    address: 'Hang Be, Hoan Kiem, Hanoi',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Excellent WiFi and quiet work area in Old Quarter'
  },
  {
    name: 'Fusion Suites Da Nang',
    city: 'Da Nang',
    country: 'Vietnam',
    type: 'hotel',
    dayPassPrice: 10, // Minimum spend at restaurant
    monthlyPrice: 800,
    rating: 4.7,
    wifiSpeed: 80,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Lobby lounge', 'Business center', 'Restaurant', 'Pool', 'Spa'],
    bestFor: ['Luxury work', 'Client meetings', 'Peaceful environment', 'Treat yourself'],
    hours: '24/7 lobby access',
    address: 'An Thuong 1, My An, Da Nang',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Beautiful ocean-view lobby. Free for guests, $10 minimum spend for non-guests.'
  }
];

// NEW: Free Workspaces in Vietnam - ADD budgetCategory
export const vietnamFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'General Sciences Library',
    city: 'Ho Chi Minh City',
    type: 'library',
    description: 'Large public library with extensive collection and computer access',
    cost: 'free',
    wifi: true,
    wifiSpeed: 30,
    powerOutlets: true,
    hours: '7:30-20:00 (Mon-Sat)',
    amenities: ['Large collection', 'Reading rooms', 'Computer access', 'AC', 'Study areas'],
    bestFor: ['Research', 'Quiet work', 'Academic study', 'Deep focus'],
    noiseLevel: 2,
    address: '69 Ly Tu Trong, District 1, HCMC',
    notes: 'Can get crowded, arrive early for best spots',
    // ADD budgetCategory
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Trang Tien Plaza Food Court',
    city: 'Hanoi',
    type: 'mall',
    description: 'Modern shopping mall food court with WiFi and ample seating',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 30,
    powerOutlets: true,
    hours: '9:30-22:00',
    amenities: ['Air conditioning', 'Food variety', 'Central location', 'Clean facilities'],
    bestFor: ['Casual work', 'Lunch breaks', 'Quick meetings'],
    noiseLevel: 4,
    address: '24 Hai Ba Trung, Hoan Kiem, Hanoi',
    notes: 'Purchase required, busiest during lunch 11:30-13:30',
    // ADD budgetCategory
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Vincom Center Food Court',
    city: 'Ho Chi Minh City',
    type: 'mall',
    description: 'Luxury mall food court with reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 35,
    powerOutlets: true,
    hours: '9:30-22:00',
    amenities: ['Air conditioning', 'International food', 'Comfortable seating', 'Restrooms'],
    bestFor: ['Work sessions', 'Meetings', 'Comfortable environment'],
    noiseLevel: 3,
    address: '72 Le Thanh Ton, District 1, HCMC',
    notes: 'Slightly more expensive but better facilities',
    // ADD budgetCategory
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Local "Com" (Rice) Shops',
    city: 'Multiple',
    type: 'public_space',
    description: 'Traditional Vietnamese rice shops with cheap meals and casual seating',
    cost: 'purchase_required',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-14:00, 16:00-20:00',
    amenities: ['Local food', 'Authentic experience', 'Very cheap'],
    bestFor: ['Quick work', 'Email checking', 'Lunch breaks'],
    noiseLevel: 5,
    notes: 'No WiFi, cash only, extremely authentic local experience',
    // ADD budgetCategory
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Public Parks',
    city: 'Multiple',
    type: 'park',
    description: 'Public parks with benches and sometimes free WiFi',
    cost: 'free',
    wifi: false,
    powerOutlets: false,
    hours: '5:00-22:00',
    amenities: ['Fresh air', 'Nature', 'Free', 'Exercise areas'],
    bestFor: ['Reading', 'Planning', 'Creative thinking', 'Break from screens'],
    noiseLevel: 3,
    notes: 'Bring power bank, best in morning or late afternoon',
    // ADD budgetCategory
    budgetCategory: 'zero_spend'
  },
  {
    name: 'University Campuses',
    city: 'Multiple',
    type: 'university',
    description: 'University libraries and common areas sometimes accessible',
    cost: 'free',
    wifi: true,
    wifiSpeed: 40,
    powerOutlets: true,
    hours: '7:00-21:00',
    amenities: ['Academic atmosphere', 'Quiet zones', 'Resources', 'Young energy'],
    bestFor: ['Study sessions', 'Research', 'Quiet work'],
    noiseLevel: 2,
    notes: 'May need to ask permission, quieter during holidays',
    // ADD budgetCategory
    budgetCategory: 'zero_spend'
  }
];

// Money Saving Tips remains the same
export const vietnamMoneySavingTips: MoneySavingTips = {
  // ... (keep all existing tips the same)
  general: [
    'Use Grab app instead of taxis - prices are fixed and lower',
    'Eat at local "com tam" or "pho" shops (20,000-40,000 VND per meal)',
    'Buy SIM cards from Viettel/Mobifone shops, not airports (50% cheaper)',
    'Stay in local guesthouses instead of international hotels',
    'Take public buses in major cities (5,000-10,000 VND per ride)',
    'Shop at local markets instead of supermarkets',
    'Drink local beer (Bia Hoi) instead of imported beers',
    'Use domestic airlines (VietJet, Bamboo) for cheap domestic flights'
  ],
  touristAreas: [
    'Avoid restaurants in Hanoi Old Quarter with English-only menus',
    'In Hoi An, eat away from the ancient town center (prices double in center)',
    'Saigon District 1 has inflated prices - go to District 3 or 5 for better value',
    'Ha Long Bay tours from Hanoi are cheaper than booking locally',
    'Skip the tourist trap "floating markets" near Ho Chi Minh City',
    'Bargain hard in Ben Thanh Market (HCMC) - start at 50% of asking price'
  ],
  nonTouristAreas: [
    'Small town cafes welcome laptop users and have cheaper drinks',
    'Local libraries often have good facilities and are very quiet',
    'Markets have food courts with amazing value (15,000-25,000 VND meals)',
    'University towns (Da Lat, Hue) have cheaper accommodations',
    'Family-run homestays offer better prices than hotels'
  ],
  byPreference: {
    coworking: [
      'Ask for "student discount" or "long-term discount" (up to 20% off)',
      'Share monthly membership with another nomad',
      'Use free trial days across different providers in same city',
      'Look for spaces in residential areas instead of business districts',
      'Pay in Vietnamese Dong instead of USD for better rates'
    ],
    cafe: [
      'Order Vietnamese coffee (cà phê đá) instead of espresso drinks',
      'Tip 10,000-20,000 VND if staying 3+ hours',
      'Visit during 2-5 PM when cafes are less busy',
      'Choose local chains (Highlands Coffee, The Coffee House) over international',
      'Buy a large drink to justify longer stay'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use noise-cancelling headphones for focus',
      'Arrive early to get best seating',
      'Check if university libraries allow visitors',
      'Some libraries have air conditioning issues - dress in layers'
    ],
    hostel: [
      'Book dorms with workspace areas included',
      'Weekly rates are 25-30% cheaper than daily rates',
      'Use common areas during quiet morning hours (7-10 AM)',
      'Some hostels have partnerships with local coworking spaces',
      'Look for "workation" packages that include workspace access'
    ],
    hotel: [
      'Business hotels have better lobby workspaces',
      'Ask about day passes to hotel business centers',
      'Small boutique hotels often have cozy work corners',
      'Use hotel restaurants during non-meal times',
      'Family-run hotels may offer free workspace in lobby'
    ]
  }
};

// Updated Vietnam Nomad Data with all new features
export const vietnamNomadData: NomadData = {
  country: "Vietnam",
  cities: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hoi An", "Nha Trang", "Da Lat", "Hue"],
  
  internet: {
    speed: 65,
    reliability: 7,
    coworkingSpaces: 80,
    freePublicWifiSpots: 6
  },
  
  costs: {
    coworkingMonthly: 65,
    simCardMonthly: 10,
    coffeeShopWork: 5,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 8,
    englishLevel: 5,
    safety: 7,
    nomadGroups: [
      "Digital Nomads Vietnam Facebook Group",
      "Saigon Expats & Digital Nomads",
      "Hanoi Digital Nomads",
      "Da Nang Nomads Community",
      "Vietnam Remote Workers Slack"
    ]
  },
  
  workspaces: vietnamWorkspaces,
  
  freeWorkspaces: vietnamFreeWorkspaces,
  
  moneySavingTips: vietnamMoneySavingTips,
  
  coworkingMemberships: [
    {
      name: "Toong Vietnam Network",
      monthlyPrice: 72,
      coverage: ["Hanoi", "Ho Chi Minh City"],
      dayPassAvailable: true,
      dayPassPrice: 12,
      trialDays: 1,
      benefits: [
        "Access to all Toong locations",
        "Meeting room credits",
        "Networking events",
        "Mail handling",
        "24/7 access"
      ],
      bestFor: "Nomads splitting time between Hanoi and HCMC",
      website: "https://toong.com.vn"
    },
    {
      name: "Dreamplex Premium",
      monthlyPrice: 80,
      coverage: ["Ho Chi Minh City"],
      dayPassAvailable: true,
      dayPassPrice: 14,
      trialDays: 2,
      benefits: [
        "Access to all Dreamplex locations in HCMC",
        "Premium amenities",
        "Business address service",
        "Event discounts",
        "Guest passes"
      ],
      bestFor: "Professional nomads needing premium facilities in HCMC",
      website: "https://dreamplex.com.vn"
    }
  ],
  
  touristyCities: [
    "Ho Chi Minh City District 1", 
    "Hanoi Old Quarter",
    "Hoi An Ancient Town",
    "Nha Trang Beach area",
    "Da Nang My Khe Beach",
    "Sapa town center",
    "Phu Quoc Island",
    "Ha Long Bay area",
    "Mui Ne resort strip"
  ]
};