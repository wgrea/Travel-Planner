// src/lib/data/countries/caucasus/azerbaijan/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const azerbaijanWorkspaces: Workspace[] = [
  {
    name: 'Impact Hub Baku',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 250,
    rating: 4.3,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Event Space', 'Kitchen', 'Community Events', 'Social impact focus'],
    bestFor: ['Networking', 'Startups', 'Professional meetings', 'Social entrepreneurs', 'Baku business community'],
    hours: '9:00-18:00',
    address: 'City center, Baku',
    website: 'https://baku.impacthub.net',
    freeTrialDays: 1,
    membershipDiscount: 10,
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Leading social impact coworking space in Baku'
  },
  {
    name: 'The Office Baku',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 220,
    rating: 4.1,
    wifiSpeed: 55,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['24/7 Access', 'Printing', 'Phone Booths', 'Coffee', 'Lounge Area', 'Business services'],
    bestFor: ['Flexible hours', 'Remote workers', 'Business services', 'Night owls', 'Corporate professionals'],
    hours: '24/7',
    address: 'Nizami Street, Baku',
    website: 'https://theofficebaku.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Coffee Moffie',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'cafe',
    dayPassPrice: 3,
    rating: 4.2,
    wifiSpeed: 35,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Local Coffee', 'Desserts', 'Power Outlets', 'WiFi', 'Cozy Atmosphere', 'Baku cafe culture'],
    bestFor: ['Casual work', 'Coffee lovers', 'Short sessions', 'Fountain Square location', 'Local experience'],
    hours: '8:00-22:00',
    address: 'Fountain Square, Baku',
    touristArea: true,
    minimumPurchase: 3,
    budgetCategory: 'small_purchase',
    notes: 'Popular local coffee chain in central Baku. Can get crowded'
  },
  {
    name: 'Ganja Tech Hub',
    city: 'Ganja',
    country: 'Azerbaijan',
    type: 'coworking',
    dayPassPrice: 12,
    monthlyPrice: 150,
    rating: 4.0,
    wifiSpeed: 45,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Community Space', 'Meeting Rooms', 'WiFi', 'Coffee', 'Events', 'Ganja business community'],
    bestFor: ['Local entrepreneurs', 'Small teams', 'Affordable workspace', 'Ganja experience', 'Regional Azerbaijan'],
    hours: '9:00-19:00',
    address: 'City center, Ganja',
    website: 'https://ganjatechhub.az',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Port Baku Mall Food Court',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'cafe',
    dayPassPrice: 5,
    rating: 4.0,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Mall location', 'Food options', 'Air conditioning', 'Power outlets', 'Caspian Sea views'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Port Baku area'],
    hours: '10:00-22:00',
    address: 'Port Baku Mall, Baku',
    touristArea: true,
    minimumPurchase: 5,
    budgetCategory: 'small_purchase',
    notes: 'Modern mall with Caspian Sea views. Reliable but basic facilities'
  },
  {
    name: 'Nest Coworking',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 180,
    rating: 4.2,
    wifiSpeed: 65,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Modern design', 'Meeting rooms', 'Kitchen', 'Quiet zones', 'Community events'],
    bestFor: ['Digital nomads', 'Startups', 'Focused work', 'Baku creative community'],
    hours: '9:00-20:00',
    address: 'Yasamal district, Baku',
    website: 'https://nestbaku.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Sapphire Hotel Baku Lobby',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'hotel',
    dayPassPrice: 8,
    rating: 4.4,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Business hotel', 'Quiet lobby', 'Cafe', 'Central location', 'Professional atmosphere'],
    bestFor: ['Client meetings', 'Executive work', 'Peaceful environment', 'City center location'],
    hours: 'Lobby cafe: 7:00-23:00',
    address: 'Nizami Street, Baku',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    minimumPurchase: 8,
    notes: 'Business hotel with quiet lobby workspace. Minimum spend for non-guests'
  },
  // UPDATED: Baku Old Town Hostel with hostelType and seasonal pricing reference
  {
    name: 'Baku Old Town Hostel',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'hostel',
    hostelType: 'quiet_work',  // ← ADDED
    dayPassPrice: 4,
    monthlyPrice: 200,
    rating: 4.3,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Co-working lounge', 'Rooftop terrace', 'Kitchen', 'Tour desk', 'Old Town location', 'Maiden Tower views', 'Quiet hours'],
    bestFor: ['Budget travelers', 'Cultural immersion', 'Old Town experience', 'Solo travelers', 'Digital nomads'],
    hours: 'Common areas: 24/7',
    address: 'Ichari Shahar, Baku',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    // NEW: Connect to living-costs seasonal pricing
    seasonalPricingRef: 'sweet: $200, peak: $280 (14-day limit)',
    peakStayLimit: '14 days',
    notes: 'Hostel in UNESCO-listed Old Town with Maiden Tower views. Good WiFi and quiet work areas'
  },
  {
    name: 'Flame Towers Area Cafes',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'cafe',
    dayPassPrice: 6,
    rating: 4.1,
    wifiSpeed: 55,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Flame Towers views', 'Modern cafes', 'Power outlets', 'WiFi', 'Upscale atmosphere'],
    bestFor: ['Client meetings', 'Modern Baku experience', 'Flame Towers views', 'Business district'],
    hours: '8:00-23:00',
    address: 'Flame Towers area, Baku',
    touristArea: true,
    minimumPurchase: 6,
    budgetCategory: 'small_purchase',
    notes: 'Modern cafes around iconic Flame Towers. Higher prices but great views'
  },
  // UPDATED: Qafqaz Hostel with hostelType
  {
    name: 'Qafqaz Hostel',
    city: 'Ganja',
    country: 'Azerbaijan',
    type: 'hostel',
    hostelType: 'basic',  // ← ADDED
    dayPassPrice: 3,
    monthlyPrice: 150,
    rating: 4.0,
    wifiSpeed: 40,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Garden workspace', 'Kitchen', 'Tour desk', 'Local tours', 'Ganja experience'],
    bestFor: ['Budget travelers', 'Ganja exploration', 'Slow travel', 'Regional Azerbaijan'],
    hours: 'Common areas: 8:00-22:00',
    address: 'City center, Ganja',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    seasonalPricingRef: 'sweet: $150, peak: $210',
    notes: 'Basic but friendly hostel in Ganja. Good base for exploring western Azerbaijan'
  },
  // NEW: Party hostel example
  {
    name: 'Fountain Square Party Hostel',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'hostel',
    hostelType: 'party',  // ← NEW
    dayPassPrice: 5,
    monthlyPrice: 220,
    rating: 4.0,
    wifiSpeed: 30,  // Party = lower WiFi priority
    powerOutlets: 3,
    noiseLevel: 5,  // Highest noise level
    amenities: ['Rooftop bar', 'Pub crawls', 'Social events', 'Night activities', 'Game room', 'Tourist networking'],
    bestFor: ['Social travelers', 'Night owls', 'Short stays', 'Young travelers', 'Party atmosphere'],
    hours: 'Common areas: 24/7 (bar until 2 AM)',
    address: 'Fountain Square, Baku',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    seasonalPricingRef: 'sweet: $220, peak: $308',
    peakStayLimit: '7 days',
    notes: 'Social hostel with nightly events. Not ideal for focused work'
  },
  // NEW: WiFi-focused coliving hostel
  {
    name: 'Nasimi Digital Nomad Hostel',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'coliving_hostel',  // Hybrid type
    hostelType: 'wifi_focused',  // ← NEW
    dayPassPrice: 8,
    monthlyPrice: 450,  // Matches living-costs coliving sweet spot
    rating: 4.5,
    wifiSpeed: 80,  // High-speed for digital nomads
    powerOutlets: 6,
    noiseLevel: 2,
    amenities: ['Dedicated desks', 'Video call booths', '24/7 access', 'Ergonomic chairs', 'Printing', 'High-speed fiber', 'Community kitchen'],
    bestFor: ['Digital nomads', 'Remote workers', 'Long-term stays', 'Productivity focus', 'Professional networking'],
    hours: '24/7',
    address: 'Nasimi district, Baku',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    communityEvents: 'Weekly workshops, networking events, skill shares',
    seasonalPricingRef: 'sweet: $450, peak: $630',
    peakStayMin: '30 days',
    notes: 'Purpose-built for digital nomads with premium workspace facilities'
  },
  // NEW: Coliving space (separate from hostel)
  {
    name: 'Baku Coliving Hub',
    city: 'Baku',
    country: 'Azerbaijan',
    type: 'coliving',
    monthlyPrice: 750,  // Matches living-costs sweet spot
    rating: 4.6,
    wifiSpeed: 75,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Private rooms', 'Dedicated desks', 'Meeting rooms', 'Community kitchen', 'Gym', 'Roof terrace', 'Cleaning service', 'Utilities included'],
    bestFor: ['Long-term nomads', 'Professional networking', 'Community living', 'Peak season reliability'],
    hours: '24/7',
    address: 'Khagani Street, Baku',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    communityEvents: 'Weekly dinners, skill shares, cultural outings',
    peakStayMin: '30 days',
    notes: 'Premium coliving with strong community focus. Ideal for 1+ month stays'
  },
  // NEW: Quiet hostel in Sheki
  {
    name: 'Sheki Caravanserai Hostel',
    city: 'Sheki',
    country: 'Azerbaijan',
    type: 'hostel',
    hostelType: 'quiet_work',  // ← NEW
    dayPassPrice: 2,
    monthlyPrice: 180,
    rating: 4.4,
    wifiSpeed: 45,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Historic caravanserai building', 'Courtyard workspace', 'Cultural tours', 'Traditional architecture', 'Quiet atmosphere'],
    bestFor: ['Cultural immersion', 'Peaceful work', 'Historical experience', 'Creative retreats'],
    hours: 'Common areas: 7:00-22:00',
    address: 'Sheki Khan\'s Palace area, Sheki',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    seasonalPricingRef: 'sweet: $180, peak: $252',
    notes: 'Stunning historic accommodation. Limited modern amenities but authentic experience'
  }
];

// Add Free Workspaces for Azerbaijan (unchanged)
export const azerbaijanFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'National Library of Azerbaijan',
    city: 'Baku',
    type: 'library',
    description: 'National library with extensive collections and study areas',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: true,
    hours: '10:00-18:00 (Mon-Fri), 10:00-17:00 (Sat)',
    amenities: ['National collections', 'Reading rooms', 'Study desks', 'Research materials', 'Quiet atmosphere'],
    bestFor: ['Academic research', 'Serious study', 'Students', 'Quiet work'],
    noiseLevel: 1,
    address: 'Khagani Street 29, Baku',
    notes: 'Visitor registration required. Historical building with modern facilities'
  },
  {
    name: 'Baku Boulevard',
    city: 'Baku',
    type: 'public_space',
    description: 'Famous seaside promenade with WiFi hotspots and benches',
    cost: 'free',
    wifi: true,
    wifiSpeed: 40,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Caspian Sea views', 'Walking paths', 'Benches', 'WiFi hotspots', 'Public art', 'Fountains'],
    bestFor: ['Creative thinking', 'Walking meetings', 'Exercise breaks', 'Baku seaside atmosphere'],
    noiseLevel: 3,
    address: 'Baku Boulevard, Baku',
    notes: 'Beautiful seaside promenade. WiFi available in certain areas'
  },
  {
    name: 'Park Bulvar Mall Food Court',
    city: 'Baku',
    type: 'mall',
    description: 'Shopping mall with extensive food court seating and WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 55,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'People watching', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Central Baku'],
    noiseLevel: 4,
    address: 'Neftchilar Avenue, Baku',
    notes: 'Purchase required for food court seating. Popular with locals and tourists'
  },
  {
    name: 'Fountain Square',
    city: 'Baku',
    type: 'public_space',
    description: 'Historic square with benches and occasional cultural events',
    cost: 'free',
    wifi: true,
    wifiSpeed: 35,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Historic square', 'Fountains', 'People watching', 'Cultural events', 'Central location'],
    bestFor: ['Creative thinking', 'People watching', 'Short breaks', 'Baku historic center'],
    noiseLevel: 4,
    address: 'Fountain Square, Baku',
    notes: 'Heart of Baku\'s historic center. Can be crowded with tourists'
  },
  {
    name: 'Baku State University Libraries',
    city: 'Baku',
    type: 'university',
    description: 'University libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 45,
    powerOutlets: true,
    hours: '9:00-18:00 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Student atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: 'Z. Khalilov Street 23, Baku',
    notes: 'Visitor access available. May need temporary visitor pass'
  }
];

// Add Money Saving Tips for Azerbaijan (unchanged)
export const azerbaijanMoneySavingTips: MoneySavingTips = {
  general: [
    'Exchange currency at banks or official exchange offices, not hotels',
    'Use local SIM cards (Azercell, Bakcell, Nar) for best coverage and prices',
    'Take metro and buses for cheap city transport in Baku',
    'Eat at local "çörək" (bread) shops and "kebab" places for affordable meals',
    'Learn basic Azerbaijani phrases for better prices and respect'
  ],
  touristAreas: [
    'Avoid restaurants on Fountain Square - prices are 2-3x higher',
    'In Old Town (Ichari Shahar), walk to side streets for better prices',
    'Skip tourist trap restaurants near Maiden Tower',
    'Use metro instead of taxis in Baku city center'
  ],
  nonTouristAreas: [
    'Local cafes in residential neighborhoods welcome laptop users',
    'University areas have cheaper food and amenities',
    'Markets like Taza Bazaar have amazing food at local prices',
    'Residential districts like Nasimi offer authentic experiences'
  ],
  byPreference: {
    coworking: [
      'Ask for "long-term stay" discounts at coworking spaces',
      'Share monthly membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces outside tourist areas for better prices'
    ],
    cafe: [
      'Order "Azerbaijani tea" instead of coffee for lower cost',
      'Tip 1-2 AZN if staying several hours',
      'Visit during afternoon hours (2-5 PM) for quieter times',
      'Choose local cafes over international chains'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use silent floors for maximum focus',
      'Arrive early to secure best seats',
      'Check holiday schedules'
    ],
    hostel: [
      'Book weekly rates for 15-25% discount',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free walking tours'
    ],
    hotel: [
      'Business hotels have best WiFi and work facilities',
      'Ask about "gündəlik istifadə" (day use) rates',
      'Traditional guesthouses often have beautiful courtyards',
      'Loyalty programs can offer perks'
    ]
  }
};

// Add Coworking Memberships for Azerbaijan (unchanged)
export const azerbaijanCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "Impact Hub Azerbaijan Network",
    monthlyPrice: 200,
    coverage: ["Baku", "Ganja"],
    dayPassAvailable: true,
    dayPassPrice: 18,
    trialDays: 1,
    benefits: [
      "Access to Impact Hub locations in Azerbaijan",
      "Meeting room credits",
      "Community events",
      "Social impact focus",
      "Azerbaijani business network",
      "Local community connections"
    ],
    bestFor: "Digital nomads traveling between Azerbaijani cities",
    website: "https://impacthub.net/azerbaijan"
  },
  {
    name: "The Office Baku Premium",
    monthlyPrice: 190,
    coverage: ["Baku (multiple locations)"],
    dayPassAvailable: true,
    dayPassPrice: 16,
    trialDays: 1,
    benefits: [
      "Access to all The Office locations in Baku",
      "24/7 access",
      "Business services",
      "Professional networking",
      "Baku business community",
      "Flexible workspace options"
    ],
    bestFor: "Business professionals and corporate nomads in Baku",
    website: "https://theofficebaku.com"
  },
  {
    name: "Azerbaijan Coworking Alliance",
    monthlyPrice: 170,
    coverage: ["Baku", "Ganja", "Sumqayit"],
    dayPassAvailable: true,
    dayPassPrice: 15,
    trialDays: 2,
    benefits: [
      "Access to network of independent coworking spaces",
      "Local community connections",
      "Flexible terms",
      "Regional variety",
      "Cultural immersion",
      "Azerbaijani hospitality experience"
    ],
    bestFor: "Nomads wanting to explore different regions of Azerbaijan",
    website: "https://azerbaijancoworking.org"
  }
];

// Updated Azerbaijan Nomad Data with hostel types categorization
export const azerbaijanNomadData: NomadData = {
  country: "Azerbaijan",
  cities: ["Baku", "Ganja", "Sumqayit", "Sheki", "Quba", "Lankaran", "Mingachevir", "Nakhchivan"],
  
  internet: {
    speed: 45,
    reliability: 6,
    coworkingSpaces: 25,
    freePublicWifiSpots: 3
  },
  
  costs: {
    coworkingMonthly: 180,
    simCardMonthly: 10,
    coffeeShopWork: 4,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 4,
    englishLevel: 3,
    safety: 7,
    nomadGroups: [
      "Digital Nomads Azerbaijan Facebook Group",
      "Baku Digital Nomads",
      "Expats in Azerbaijan",
      "Remote Workers Azerbaijan",
      "Caucasus Digital Nomads"
    ]
  },
  
  workspaces: azerbaijanWorkspaces,
  
  freeWorkspaces: azerbaijanFreeWorkspaces,
  
  moneySavingTips: azerbaijanMoneySavingTips,
  
  coworkingMemberships: azerbaijanCoworkingMemberships,
  
  touristyCities: [
    "Baku Old Town (Ichari Shahar)",
    "Baku Fountain Square",
    "Baku Flame Towers area",
    "Baku Heydar Aliyev Center area",
    "Sheki Khan's Palace area",
    "Gobustan Rock Art Cultural Landscape",
    "Ateshgah Fire Temple",
    "Yanar Dag (Burning Mountain)"
  ],
  
  // NEW: Hostel type categorization for filtering
  hostelTypes: {
    party: {
      description: "Social hostels with events, bars, and nightlife",
      recommendedFor: ["Short stays", "Young travelers", "Social networking", "Nightlife lovers"],
      notRecommendedFor: ["Focused work", "Early risers", "Quiet environments"],
      avgWifiSpeed: 35,
      noiseLevel: "high",
      examples: ["Fountain Square Party Hostel"]
    },
    quiet_work: {
      description: "Hostels with dedicated workspaces, quiet hours, and good WiFi",
      recommendedFor: ["Digital nomads", "Remote workers", "Students", "Long-term stays"],
      notRecommendedFor: ["Party seekers", "Social butterflies"],
      avgWifiSpeed: 60,
      noiseLevel: "low",
      examples: ["Baku Old Town Hostel", "Sheki Caravanserai Hostel", "Nasimi Digital Nomad Hostel"]
    },
    wifi_focused: {
      description: "Purpose-built for digital work with premium internet and facilities",
      recommendedFor: ["Professional remote workers", "Video calls", "High-bandwidth work", "Productivity"],
      notRecommendedFor: ["Budget travelers", "Casual tourists"],
      avgWifiSpeed: 75,
      noiseLevel: "medium-low",
      examples: ["Nasimi Digital Nomad Hostel", "Baku Coliving Hub"]
    },
    basic: {
      description: "Standard hostels without special work facilities",
      recommendedFor: ["Budget travelers", "Short stays", "Cultural immersion", "Basic needs"],
      notRecommendedFor: ["Remote work", "Important video calls", "High productivity"],
      avgWifiSpeed: 40,
      noiseLevel: "varies",
      examples: ["Qafqaz Hostel"]
    }
  },
  
  // NEW: Seasonal strategy guidance linking to living-costs data
  seasonalStrategies: {
    lowSeason: {
      months: ['Jan', 'Feb', 'Nov', 'Dec'],
      strategy: "Best for extended stays. All hostels available. Best deals on coliving.",
      priceAdjustment: "-30%",
      bookingAdvice: "Book 1-2 weeks ahead",
      workEnvironment: "Quiet, fewer tourists, good for focused work"
    },
    sweetSpot: {
      months: ['Mar', 'Apr', 'May', 'Sep', 'Oct'],
      strategy: "Perfect balance. Good weather, reasonable prices, availability.",
      priceAdjustment: "-15%",
      bookingAdvice: "Book 3-4 weeks ahead for popular hostels",
      workEnvironment: "Good mix of community and quiet work options"
    },
    peakSeason: {
      months: ['Jun', 'Jul', 'Aug'],
      strategy: "Competitive. Hostels limit stays. Consider coliving for stability.",
      priceAdjustment: "+40%",
      bookingAdvice: "Book 3+ months ahead for quality options",
      workEnvironment: "Busy, social, consider WiFi-focused hostels for work"
    }
  }
};