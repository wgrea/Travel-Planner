// src/lib/data/countries/europe/caucasus/georgia/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const georgiaWorkspaces: Workspace[] = [
  {
    name: 'Impact Hub Tbilisi',
    city: 'Tbilisi',
    country: 'Georgia',
    type: 'coworking',
    dayPassPrice: 12,
    monthlyPrice: 120,
    rating: 4.7,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Event Space', 'Community Events', 'Kitchen', '24/7 Access'],
    bestFor: ['Digital nomads', 'Startups', 'Social entrepreneurs', 'Networking'],
    hours: '24/7',
    address: 'Rustaveli Avenue, Tbilisi',
    website: 'https://tbilisi.impacthub.net',
    freeTrialDays: 2,
    membershipDiscount: 15,
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Leading coworking space in Tbilisi with strong community'
  },
  {
    name: 'Lokal Tbilisi',
    city: 'Tbilisi',
    country: 'Georgia',
    type: 'coworking',
    dayPassPrice: 10,
    monthlyPrice: 100,
    rating: 4.6,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Modern Design', 'Cafe', 'Meeting Rooms', 'Terrace', 'Community Focus', 'Printing'],
    bestFor: ['Freelancers', 'Remote workers', 'Creative professionals', 'Tbilisi lifestyle'],
    hours: '9:00-21:00',
    address: 'Vera, Tbilisi',
    website: 'https://lokaltbilisi.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Terminal',
    city: 'Tbilisi',
    country: 'Georgia',
    type: 'coworking',
    dayPassPrice: 8,
    monthlyPrice: 80,
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Affordable', 'Kitchen', 'Meeting Rooms', 'Community Events', 'Study Areas'],
    bestFor: ['Students', 'Budget nomads', 'Long-term stays', 'Beginner nomads'],
    hours: '9:00-20:00',
    address: 'Saburtalo, Tbilisi',
    website: 'https://terminal.ge',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Fabrika Tbilisi',
    city: 'Tbilisi',
    country: 'Georgia',
    type: 'cafe_coworking',
    dayPassPrice: 5, // Minimum purchase/day rate
    rating: 4.8,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Soviet factory turned cultural center', 'Multiple cafes', 'Art spaces', 'Hostel', 'Event venue'],
    bestFor: ['Creative work', 'Social atmosphere', 'Cultural immersion', 'Meeting people'],
    hours: '8:00-24:00',
    address: '8 Egnate Ninoshvili Street, Tbilisi',
    touristArea: true,
    minimumPurchase: 5,
    budgetCategory: 'small_purchase',
    notes: 'Iconic Tbilisi spot. Can get crowded but great for meeting other nomads'
  },
  {
    name: 'Cafe Stamba',
    city: 'Tbilisi',
    country: 'Georgia',
    type: 'cafe',
    dayPassPrice: 6, // Minimum purchase/day rate
    rating: 4.6,
    wifiSpeed: 75,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Design hotel cafe', 'Beautiful interior', 'Power outlets', 'Specialty coffee', 'Central location'],
    bestFor: ['Client meetings', 'Creative work', 'Luxury cafe experience', 'Vera neighborhood'],
    hours: '7:00-23:00',
    address: '14 Merab Kostava Street, Tbilisi',
    touristArea: false,
    minimumPurchase: 6,
    budgetCategory: 'small_purchase',
    notes: 'Beautiful cafe in design hotel. Popular with digital nomads'
  },
  {
    name: 'Batumi Coworking',
    city: 'Batumi',
    country: 'Georgia',
    type: 'coworking',
    dayPassPrice: 10,
    monthlyPrice: 100,
    rating: 4.3,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Sea views', 'Meeting Rooms', 'Kitchen', 'Community Events', 'Beach proximity'],
    bestFor: ['Digital nomads', 'Seasonal workers', 'Black Sea lifestyle', 'Batumi experience'],
    hours: '9:00-19:00',
    address: 'Batumi Boulevard',
    website: 'https://batumicoworking.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Kutaisi Workspace',
    city: 'Kutaisi',
    country: 'Georgia',
    type: 'coworking',
    dayPassPrice: 6,
    monthlyPrice: 70,
    rating: 4.2,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Affordable', 'Local community', 'Kitchen', 'Meeting space', 'Quiet environment'],
    bestFor: ['Budget travelers', 'Slow travel', 'Georgia exploration', 'Kutaisi base'],
    hours: '9:00-18:00',
    address: 'City Center, Kutaisi',
    website: 'https://kutaisiworkspace.ge',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Prospero\'s Books & Caliban\'s Coffee',
    city: 'Tbilisi',
    country: 'Georgia',
    type: 'cafe',
    dayPassPrice: 4, // Minimum purchase/day rate
    rating: 4.5,
    wifiSpeed: 60,
    powerOutlets: 2,
    noiseLevel: 3,
    amenities: ['Bookstore cafe', 'English books', 'Power outlets', 'Cozy atmosphere', 'Expat community'],
    bestFor: ['Writers', 'Readers', 'Quiet work', 'English-speaking community'],
    hours: '10:00-20:00',
    address: '34 Rustaveli Avenue, Tbilisi',
    touristArea: true,
    minimumPurchase: 4,
    budgetCategory: 'small_purchase',
    notes: 'English-language bookstore cafe. Popular with expats and writers'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'Fabrika Hostel Tbilisi',
    city: 'Tbilisi',
    country: 'Georgia',
    type: 'hostel',
    dayPassPrice: 5,
    monthlyPrice: 300, // Monthly accommodation in USD
    rating: 4.7,
    wifiSpeed: 85,
    powerOutlets: 5,
    noiseLevel: 4,
    amenities: ['Co-working spaces', 'Multiple cafes/bars', 'Art exhibitions', 'Events', 'Kitchen', 'Very social'],
    bestFor: ['Social nomads', 'Creative types', 'Meeting people', 'Tbilisi experience'],
    hours: 'Common areas: 24/7',
    address: '8 Egnate Ninoshvili Street, Tbilisi',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Iconic Tbilisi hostel in converted Soviet factory. Extremely social'
  },
  {
    name: 'Envoy Hostel Tbilisi',
    city: 'Tbilisi',
    country: 'Georgia',
    type: 'hostel',
    dayPassPrice: 4,
    monthlyPrice: 280,
    rating: 4.6,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Co-working lounge', 'Rooftop terrace', 'Kitchen', 'Tour desk', 'Social events', 'Old Town location'],
    bestFor: ['Budget travelers', 'Social nomads', 'Old Town experience', 'Solo travelers'],
    hours: 'Co-working lounge: 8:00-22:00',
    address: '45 Betlemi Street, Tbilisi',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Great hostel with dedicated co-working space in Old Town'
  },
  {
    name: 'Rooms Hotel Tbilisi Lobby',
    city: 'Tbilisi',
    country: 'Georgia',
    type: 'hotel',
    dayPassPrice: 10, // Minimum spend
    rating: 4.9,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Design hotel', 'Beautiful library/lobby', 'Quiet atmosphere', 'Premium service', 'Vera location'],
    bestFor: ['Client meetings', 'Executive work', 'Peaceful environment', 'Design appreciation'],
    hours: 'Lobby: 7:00-23:00',
    address: '14 Merab Kostava Street, Tbilisi',
    touristArea: false,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 10,
    notes: 'Design hotel with beautiful lobby library. Minimum spend for non-guests'
  },
  {
    name: 'Batumi Backpackers Hostel',
    city: 'Batumi',
    country: 'Georgia',
    type: 'hostel',
    dayPassPrice: 4,
    monthlyPrice: 250,
    rating: 4.4,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Beach proximity', 'Co-working area', 'Kitchen', 'Bar', 'Social events', 'Black Sea location'],
    bestFor: ['Beach nomads', 'Summer workers', 'Batumi nightlife', 'Budget travelers'],
    hours: 'Co-working area: 9:00-21:00',
    address: 'Batumi Boulevard',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Beachfront hostel perfect for summer digital nomads in Batumi'
  }
];

// Add Free Workspaces for Georgia
export const georgiaFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'National Parliamentary Library of Georgia',
    city: 'Tbilisi',
    type: 'library',
    description: 'National library with modern facilities and quiet study areas',
    cost: 'free',
    wifi: true,
    wifiSpeed: 75,
    powerOutlets: true,
    hours: '10:00-18:00 (Mon-Fri), 10:00-17:00 (Sat)',
    amenities: ['National collections', 'Reading rooms', 'Study desks', 'Research materials', 'Modern facilities'],
    bestFor: ['Academic research', 'Serious study', 'Students', 'Quiet work'],
    noiseLevel: 1,
    address: '7 Gudiashvili Street, Tbilisi',
    notes: 'Visitor registration required. Beautiful historic building'
  },
  {
    name: 'Vake Park',
    city: 'Tbilisi',
    type: 'public_space',
    description: 'Large city park with WiFi hotspots, benches, and beautiful views',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['City views', 'Walking paths', 'Benches', 'WiFi hotspots', 'Cafe', 'Turtle Lake nearby'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Nature breaks', 'Tbilisi views'],
    noiseLevel: 2,
    address: 'Vake District, Tbilisi',
    notes: 'Beautiful park with city views. WiFi available in certain areas'
  },
  {
    name: 'Tbilisi Mall Food Court',
    city: 'Tbilisi',
    type: 'mall',
    description: 'Modern shopping mall with food court seating and reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 80,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'People watching', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Saburtalo location'],
    noiseLevel: 4,
    address: '26 Ilia Chavchavadze Avenue, Tbilisi',
    notes: 'Purchase required for food court seating. Popular with local students and workers'
  },
  {
    name: 'Rike Park',
    city: 'Tbilisi',
    type: 'public_space',
    description: 'Modern riverside park with WiFi, benches, and views of Old Town',
    cost: 'free',
    wifi: true,
    wifiSpeed: 60,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['River views', 'Modern design', 'Walking paths', 'Benches', 'Peace Bridge views', 'Cable car station'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Tbilisi riverside atmosphere'],
    noiseLevel: 3,
    address: 'Rike Park, Tbilisi',
    notes: 'Modern park with great views of Peace Bridge and Narikala Fortress'
  },
  {
    name: 'Ilia State University Libraries',
    city: 'Tbilisi',
    type: 'university',
    description: 'University libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 70,
    powerOutlets: true,
    hours: '9:00-20:00 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Student atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: '3/5 Kakutsa Cholokashvili Avenue, Tbilisi',
    notes: 'Visitor access available. May need temporary visitor pass'
  }
];

// Add Money Saving Tips for Georgia
export const georgiaMoneySavingTips: MoneySavingTips = {
  general: [
    'Exchange currency at banks or official exchange offices, not airports',
    'Use local SIM cards (Magti, Geocell, Beeline) for best coverage and prices',
    'Take marshrutkas (minibuses) for cheap local and intercity transport',
    'Eat at local "sachinkle" (barbecue places) and bakeries for authentic, affordable meals',
    'Learn basic Georgian phrases for better prices and respect'
  ],
  touristAreas: [
    'Avoid restaurants on Old Town main streets - prices are 2-3x higher',
    'In Batumi Boulevard, walk a few blocks inland for better prices',
    'Skip tourist trap restaurants near Freedom Square in Tbilisi',
    'Use public transport instead of taxis in city centers'
  ],
  nonTouristAreas: [
    'Local cafes in residential neighborhoods welcome laptop users',
    'University areas have cheaper food and amenities',
    'Markets like Deserter\'s Bazaar have amazing food at local prices',
    'Residential districts like Saburtalo offer authentic experiences'
  ],
  byPreference: {
    coworking: [
      'Ask for "long-term stay" discounts at coworking spaces',
      'Share monthly membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces outside Old Town for better prices'
    ],
    cafe: [
      'Order "Turkish coffee" instead of specialty drinks',
      'Tip 1-2 GEL if staying several hours',
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
      'Book weekly rates for 20-30% discount',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free walking tours'
    ],
    hotel: [
      'Business hotels have best WiFi and work facilities',
      'Ask about "day use" rates for workspace access',
      'Traditional guesthouses often have beautiful courtyards',
      'Loyalty programs can offer perks'
    ]
  }
};

// Add Coworking Memberships for Georgia
export const georgiaCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "Impact Hub Georgia Network",
    monthlyPrice: 110,
    coverage: ["Tbilisi", "Batumi", "Kutaisi"],
    dayPassAvailable: true,
    dayPassPrice: 10,
    trialDays: 2,
    benefits: [
      "Access to all Impact Hub locations in Georgia",
      "Meeting room credits",
      "Community events",
      "Social impact focus",
      "Georgian business network",
      "Local community connections"
    ],
    bestFor: "Digital nomads traveling between Georgian cities",
    website: "https://impacthub.net/georgia"
  },
  {
    name: "Lokal Georgia Pass",
    monthlyPrice: 95,
    coverage: ["Tbilisi (multiple locations)"],
    dayPassAvailable: true,
    dayPassPrice: 9,
    trialDays: 1,
    benefits: [
      "Access to all Lokal locations in Tbilisi",
      "Modern facilities",
      "Cafe discounts",
      "Community networking",
      "Tbilisi nomad community"
    ],
    bestFor: "Digital nomads based primarily in Tbilisi",
    website: "https://lokaltbilisi.com"
  },
  {
    name: "Georgia Coworking Alliance",
    monthlyPrice: 85,
    coverage: ["Tbilisi", "Batumi", "Kutaisi", "Mtskheta"],
    dayPassAvailable: true,
    dayPassPrice: 8,
    trialDays: 2,
    benefits: [
      "Access to network of independent coworking spaces",
      "Local community connections",
      "Flexible terms",
      "Regional variety",
      "Cultural immersion",
      "Georgian hospitality experience"
    ],
    bestFor: "Nomads wanting to explore different regions of Georgia",
    website: "https://georgiacoworking.org"
  }
];

// Updated Georgia Nomad Data
export const georgiaNomadData: NomadData = {
  country: "Georgia",
  cities: ["Tbilisi", "Batumi", "Kutaisi", "Mtskheta", "Sighnaghi", "Kazbegi", "Bakuriani", "Zugdidi"],
  
  internet: {
    speed: 70,
    reliability: 8,
    coworkingSpaces: 15,
    freePublicWifiSpots: 4
  },
  
  costs: {
    coworkingMonthly: 120,
    simCardMonthly: 8,
    coffeeShopWork: 5,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 6,
    englishLevel: 4,
    safety: 8,
    nomadGroups: [
      "Digital Nomads Georgia Facebook Group",
      "Tbilisi Digital Nomads",
      "Expats in Georgia",
      "Remote Workers Georgia",
      "Nomad List Georgia Community"
    ]
  },
  
  workspaces: georgiaWorkspaces,
  
  freeWorkspaces: georgiaFreeWorkspaces,
  
  moneySavingTips: georgiaMoneySavingTips,
  
  coworkingMemberships: georgiaCoworkingMemberships,
  
  touristyCities: [
    "Tbilisi Old Town",
    "Tbilisi Freedom Square",
    "Batumi Boulevard",
    "Sighnaghi (City of Love)",
    "Mtskheta Historical Sites",
    "Kazbegi (Stepantsminda) Gergeti Trinity Church area",
    "Uplistsikhe Cave Town",
    "Vardzia Cave Monastery"
  ]
};