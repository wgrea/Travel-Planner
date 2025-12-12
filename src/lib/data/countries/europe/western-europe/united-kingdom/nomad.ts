// src/lib/data/countries/europe/united-kingdom/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const ukWorkspaces: Workspace[] = [
  {
    name: 'WeWork London',
    city: 'London',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 50,
    monthlyPrice: 500,
    rating: 4.7,
    wifiSpeed: 150,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Premium Workspace', 'Meeting Rooms', 'Coffee Bar', 'Events', '24/7 Access', 'Global network', 'Phone booths', 'Printing'],
    bestFor: ['Professionals', 'Startups', 'Corporate Teams', 'International business'],
    hours: '24/7',
    address: 'Multiple locations across London',
    website: 'https://www.wework.com',
    freeTrialDays: 1,
    membershipDiscount: 0,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Accepts WeWork All Access membership. Prime locations across London'
  },
  {
    name: 'Second Home London',
    city: 'London',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 45,
    monthlyPrice: 450,
    rating: 4.8,
    wifiSpeed: 120,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Architectural Design', 'Indoor Gardens', 'Creative Community', 'Events', 'Sustainable', 'Biophilic design', 'Community events'],
    bestFor: ['Creatives', 'Designers', 'Innovators', 'Sustainability-focused businesses'],
    hours: '8:00-20:00',
    address: 'Spitalfields, London',
    website: 'https://secondhome.io',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Manchester Technology Centre',
    city: 'Manchester',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 350,
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Tech Community', 'Event Space', 'Meeting Rooms', 'High-speed Internet', 'Startup Support', 'Networking events'],
    bestFor: ['Tech Professionals', 'Startups', 'Digital Nomads', 'Northern tech scene'],
    hours: '24/7',
    address: 'Manchester City Centre',
    website: 'https://manchestertechnologycentre.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Starbucks Reserve',
    city: 'London',
    country: 'United Kingdom',
    type: 'cafe',
    dayPassPrice: 8, // Minimum purchase/day rate
    rating: 4.3,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 6,
    amenities: ['Premium Coffee', 'Comfortable Seating', 'WiFi', 'Power Outlets', 'Central Location', 'Food menu'],
    bestFor: ['Casual Work', 'Meetings', 'Quick Sessions', 'Tourist areas'],
    hours: '6:00-22:00',
    address: 'Covent Garden, London',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 8,
    budgetCategory: 'small_purchase',
    notes: 'Reserve location with premium offerings. Can be very touristy'
  },
  {
    name: 'Edinburgh Codebase',
    city: 'Edinburgh',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 30,
    monthlyPrice: 300,
    rating: 4.5,
    wifiSpeed: 110,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Tech Focus', 'Mentorship', 'Events', 'Meeting Rooms', 'Scottish Startup Community', 'Investor access'],
    bestFor: ['Tech Entrepreneurs', 'Developers', 'Scottish Tech Scene', 'Edinburgh startups'],
    hours: '9:00-21:00',
    address: 'Castle Terrace, Edinburgh',
    website: 'https://www.thisiscodebase.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Bristol & Bath Science Park',
    city: 'Bristol',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 32,
    monthlyPrice: 320,
    rating: 4.4,
    wifiSpeed: 105,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Science & Tech Focus', 'Laboratory Space', 'Business Support', 'Events', 'Research Community', 'Innovation hub'],
    bestFor: ['Scientists', 'Researchers', 'Tech Startups', 'Deep tech companies'],
    hours: '8:00-20:00',
    address: 'Emersons Green, Bristol',
    website: 'https://bristolbathsciencepark.co.uk',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Costa Coffee',
    city: 'Various',
    country: 'United Kingdom',
    type: 'cafe',
    dayPassPrice: 6, // Minimum purchase/day rate
    rating: 4.0,
    wifiSpeed: 40,
    powerOutlets: 2,
    noiseLevel: 5,
    amenities: ['Nationwide Chain', 'Basic WiFi', 'Coffee & Snacks', 'Convenient Locations', 'Consistent experience'],
    bestFor: ['Budget Work', 'Quick Stops', 'Reliable Locations', 'Small towns'],
    hours: '7:00-21:00',
    address: 'Nationwide locations',
    touristArea: false,
    minimumPurchase: 6,
    budgetCategory: 'small_purchase',
    notes: 'UK\'s largest coffee chain. Reliable but basic facilities'
  },
  {
    name: 'Glasgow Workspace',
    city: 'Glasgow',
    country: 'United Kingdom',
    type: 'coworking',
    dayPassPrice: 28,
    monthlyPrice: 280,
    rating: 4.3,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Creative Space', 'Local Community', 'Events', 'Kitchen', 'Affordable Pricing', 'Glasgow community'],
    bestFor: ['Freelancers', 'Creatives', 'Budget-Conscious Workers', 'Scottish creatives'],
    hours: '9:00-19:00',
    address: 'City Centre, Glasgow',
    website: 'https://glasgowworkspace.co.uk',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'YHA London Central Hostel',
    city: 'London',
    country: 'United Kingdom',
    type: 'hostel',
    dayPassPrice: 8,
    monthlyPrice: 900, // Monthly accommodation in USD
    rating: 4.2,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Co-working lounge', 'Kitchen', '24-hour reception', 'Game room', 'Tour desk', 'Budget-friendly'],
    bestFor: ['Budget travelers', 'Young travelers', 'Central London location', 'Solo travelers'],
    hours: 'Common areas: 24/7',
    address: '104 Bolsover Street, London',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'YHA chain hostel. Clean and reliable with good facilities'
  },
  {
    name: 'Generator Hostel London',
    city: 'London',
    country: 'United Kingdom',
    type: 'hostel',
    dayPassPrice: 10,
    monthlyPrice: 950,
    rating: 4.5,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 4,
    amenities: ['Designer hostel', 'Bar and lounge', 'Co-working area', 'Events', 'Social atmosphere', 'Game room'],
    bestFor: ['Social nomads', 'Design lovers', 'Party atmosphere', 'Young professionals'],
    hours: 'Co-working area: 8:00-22:00',
    address: 'Macmillan Way, London',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Trendy designer hostel. Very social, can be noisy'
  },
  {
    name: 'The Ned Hotel Members\' Club',
    city: 'London',
    country: 'United Kingdom',
    type: 'hotel',
    dayPassPrice: 25, // Minimum spend
    rating: 4.8,
    wifiSpeed: 180,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Luxury historic building', 'Multiple restaurants', 'Roof terrace', 'Live music', 'Premium service'],
    bestFor: ['Client meetings', 'Luxury experience', 'Banking district', 'Special occasions'],
    hours: 'Members areas: 7:00-23:00',
    address: '27 Poultry, London',
    touristArea: false,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 25,
    notes: 'Former bank turned luxury hotel. Minimum spend for non-guests/members'
  },
  {
    name: 'University of Edinburgh Libraries',
    city: 'Edinburgh',
    country: 'United Kingdom',
    type: 'library',
    dayPassPrice: 0,
    rating: 4.7,
    wifiSpeed: 120,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Academic resources', 'Study carrels', 'Quiet zones', 'Historical collections', 'Beautiful architecture'],
    bestFor: ['Academic work', 'Serious study', 'Research', 'Students', 'Budget work'],
    hours: 'Varies by library (typically 8:00-22:00)',
    address: 'George Square, Edinburgh',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'zero_spend',
    notes: 'Visitor access available. Some of the most beautiful university libraries in the UK'
  }
];

// Add Free Workspaces for UK
export const ukFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'British Library',
    city: 'London',
    type: 'library',
    description: 'National library of the UK with extensive collections and beautiful reading rooms',
    cost: 'free',
    wifi: true,
    wifiSpeed: 100,
    powerOutlets: true,
    hours: '9:30-20:00 (Mon-Thu), 9:30-18:00 (Fri), 9:30-17:00 (Sat), 11:00-17:00 (Sun)',
    amenities: ['National collections', 'Reading rooms', 'Study desks', 'Research materials', 'Exhibitions'],
    bestFor: ['Academic research', 'Serious study', 'Historical research', 'Quiet work'],
    noiseLevel: 1,
    address: '96 Euston Rd, London',
    notes: 'Reader pass required for some areas. Get there early for best seats'
  },
  {
    name: 'Hyde Park',
    city: 'London',
    type: 'public_space',
    description: 'Large royal park with benches, WiFi hotspots, and beautiful natural settings',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Royal park', 'Serpentine lake', 'Walking paths', 'Benches', 'Gardens', 'WiFi hotspots'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Exercise breaks', 'Nature inspiration'],
    noiseLevel: 2,
    address: 'Westminster, London',
    notes: 'WiFi available in certain areas. Use mobile hotspot for better reliability'
  },
  {
    name: 'Westfield London Food Court',
    city: 'London',
    type: 'mall',
    description: 'Europe\'s largest shopping mall with extensive food court seating and reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 110,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'People watching', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Shepherd\'s Bush location'],
    noiseLevel: 4,
    address: 'Ariel Way, London',
    notes: 'Purchase required for food court seating. Massive selection of food options'
  },
  {
    name: 'Trafalgar Square',
    city: 'London',
    type: 'public_space',
    description: 'Famous public square with benches and occasional cultural events',
    cost: 'free',
    wifi: true,
    wifiSpeed: 60,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Iconic square', 'Fountains', 'National Gallery access', 'Cultural events', 'People watching'],
    bestFor: ['Creative thinking', 'People watching', 'Short breaks', 'Tourist experience'],
    noiseLevel: 5,
    address: 'Trafalgar Square, London',
    notes: 'Can be very crowded with tourists. WiFi available but use mobile for reliability'
  },
  {
    name: 'Manchester Central Library',
    city: 'Manchester',
    type: 'library',
    description: 'Beautiful circular library with excellent facilities and study spaces',
    cost: 'free',
    wifi: true,
    wifiSpeed: 90,
    powerOutlets: true,
    hours: '9:00-20:00 (Mon-Thu), 9:00-17:00 (Fri-Sat)',
    amenities: ['Circular reading room', 'Study desks', 'Research materials', 'Events', 'Architecture'],
    bestFor: ['Academic work', 'Study sessions', 'Architecture appreciation', 'Manchester community'],
    noiseLevel: 2,
    address: 'St Peter\'s Square, Manchester',
    notes: 'Beautiful building. Popular with students and remote workers'
  }
];

// Add Money Saving Tips for UK
export const ukMoneySavingTips: MoneySavingTips = {
  general: [
    'Use public libraries for free high-quality workspace',
    'Take advantage of free WiFi in most coffee shops (with purchase)',
    'Consider traveling outside London for significantly lower costs',
    'Use Oyster card for cheapest London transport',
    'Book train tickets in advance for substantial savings'
  ],
  touristAreas: [
    'Avoid cafes in Leicester Square/Covent Garden - prices are 2-3x higher',
    'In Edinburgh Royal Mile, walk a few streets away for better prices',
    'Skip tourist trap restaurants in Oxford Street',
    'Use public transport instead of black cabs in London'
  ],
  nonTouristAreas: [
    'Local public libraries are excellent and free',
    'University towns have cheaper amenities and good WiFi',
    'Local pubs often have WiFi and welcome laptop users during quiet hours',
    'Business parks outside city centers have better value coworking'
  ],
  byPreference: {
    coworking: [
      'Use WeWork All Access for multi-city flexibility',
      'Ask about startup/charity discounts at local coworking spaces',
      'Share monthly membership with a colleague',
      'Use free trial days across different chains'
    ],
    cafe: [
      'Order filter coffee instead of specialty drinks',
      'Use independent cafes for better value than chains',
      'Visit during off-peak hours (2-4 PM) for quieter times',
      'Some cafes offer free refills on filter coffee'
    ],
    library: [
      'Reserve study rooms in advance online',
      'Use silent floors for maximum focus',
      'Take advantage of free printing allowances',
      'Check for free workshops and author events'
    ],
    hostel: [
      'Book directly on hostel websites for best rates',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours',
      'Some hostels offer free walking tours'
    ],
    hotel: [
      'Hotel lobbies are often free to use (with purchase)',
      'Business hotels have best work facilities',
      'Ask about day rates for workspace access',
      'Loyalty programs offer free amenities'
    ]
  }
};

// Add Coworking Memberships for UK
export const ukCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "WeWork All Access UK",
    monthlyPrice: 320,
    coverage: ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow"],
    dayPassAvailable: true,
    dayPassPrice: 35,
    trialDays: 1,
    benefits: [
      "Access to all WeWork locations in UK",
      "Meeting room credits",
      "24/7 access",
      "High-speed internet",
      "Business address options",
      "Global network access"
    ],
    bestFor: "Digital nomads traveling between UK cities",
    website: "https://www.wework.com"
  },
  {
    name: "Regus Businessworld UK",
    monthlyPrice: 280,
    coverage: ["Nationwide UK coverage"],
    dayPassAvailable: true,
    dayPassPrice: 30,
    trialDays: 0,
    benefits: [
      "Largest UK network",
      "Business address service",
      "24/7 access at most locations",
      "Meeting room discounts",
      "Mail handling",
      "Professional services"
    ],
    bestFor: "Business travelers needing locations across the UK",
    website: "https://www.regus.com"
  },
  {
    name: "Club Workspace UK Network",
    monthlyPrice: 250,
    coverage: ["London", "Bristol", "Manchester", "Leeds"],
    dayPassAvailable: true,
    dayPassPrice: 25,
    trialDays: 1,
    benefits: [
      "Access to Club Workspace locations",
      "Creative communities",
      "Networking events",
      "Meeting room access",
      "Local business connections"
    ],
    bestFor: "Creative professionals and entrepreneurs in UK cities",
    website: "https://www.clubworkspace.com"
  }
];

// Updated United Kingdom Nomad Data
export const ukNomadData: NomadData = {
  country: "United Kingdom",
  cities: ["London", "Manchester", "Edinburgh", "Bristol", "Birmingham", "Glasgow", "Cambridge", "Oxford", "Leeds", "Liverpool", "Cardiff", "Belfast"],
  
  internet: {
    speed: 90,
    reliability: 9,
    coworkingSpaces: 85,
    freePublicWifiSpots: 8
  },
  
  costs: {
    coworkingMonthly: 380,
    simCardMonthly: 20,
    coffeeShopWork: 7,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 9,
    englishLevel: 10,
    safety: 8,
    nomadGroups: [
      "Digital Nomads UK Facebook Group",
      "London Remote Workers",
      "Expats in UK",
      "Tech Nomads London",
      "Digital Nomad Girls UK"
    ]
  },
  
  workspaces: ukWorkspaces,
  
  freeWorkspaces: ukFreeWorkspaces,
  
  moneySavingTips: ukMoneySavingTips,
  
  coworkingMemberships: ukCoworkingMemberships,
  
  touristyCities: [
    "London West End",
    "London Covent Garden",
    "London Leicester Square",
    "Edinburgh Royal Mile",
    "Oxford City Centre",
    "Cambridge City Centre",
    "Bath City Centre",
    "York City Centre",
    "Stratford-upon-Avon",
    "Windermere (Lake District)"
  ]
};