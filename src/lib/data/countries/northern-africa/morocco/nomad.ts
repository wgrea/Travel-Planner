// src/lib/data/countries/middle-east/morocco/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const moroccoWorkspaces: Workspace[] = [
  {
    name: 'Urban Hub Casablanca',
    city: 'Casablanca',
    country: 'Morocco',
    type: 'coworking',
    dayPassPrice: 20, // Converted from 200 MAD to USD (approx. 10:1 ratio)
    monthlyPrice: 250, // Converted from 2500 MAD to USD
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Modern Workspace', 'Meeting Rooms', 'Event Space', 'Coffee Bar', 'Business Services', '24/7 Access'],
    bestFor: ['Professionals', 'Business Meetings', 'Corporate Environment', 'Client meetings'],
    hours: '24/7',
    address: 'Maarif, Casablanca',
    website: 'https://urbanhub.ma',
    freeTrialDays: 1,
    membershipDiscount: 10,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment' // Coworking = direct payment
  },
  {
    name: 'Kechmara',
    city: 'Marrakech',
    country: 'Morocco',
    type: 'cafe',
    dayPassPrice: 4, // Minimum purchase/day rate
    rating: 4.4,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 5,
    amenities: ['Art Deco Style', 'Garden Terrace', 'Good Food', 'WiFi', 'Expat Community', 'Power Outlets'],
    bestFor: ['Digital Nomads', 'Creative Work', 'Social Atmosphere', 'Networking'],
    hours: '9:00-23:00',
    address: 'Gueliz, Marrakech',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 4,
    budgetCategory: 'small_purchase' // Cafe = small purchase
  },
  {
    name: 'La Factory',
    city: 'Marrakech',
    country: 'Morocco',
    type: 'coworking',
    dayPassPrice: 15, // Converted from 150 MAD to USD
    monthlyPrice: 200, // Converted from 2000 MAD to USD
    rating: 4.6,
    wifiSpeed: 70,
    powerOutlets: 6,
    noiseLevel: 3,
    amenities: ['Creative Space', 'Events & Workshops', 'Garden', 'Kitchen', 'Startup Community', 'Phone Booths'],
    bestFor: ['Entrepreneurs', 'Creatives', 'Startups', 'Collaboration'],
    hours: '9:00-20:00',
    address: 'Gueliz, Marrakech',
    website: 'https://lafactory.ma',
    freeTrialDays: 2,
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Café Clock',
    city: 'Fes',
    country: 'Morocco',
    type: 'cafe_coworking', // Mixed type for this cultural center
    dayPassPrice: 3, // Minimum purchase/day rate
    rating: 4.5,
    wifiSpeed: 40,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Cultural Center', 'Cooking Classes', 'Music Events', 'Traditional Setting', 'Expat Hub', 'Rooftop Terrace'],
    bestFor: ['Cultural Experience', 'Creative Work', 'Community Events', 'Authentic atmosphere'],
    hours: '9:00-22:00',
    address: 'Fes el-Bali, Fes',
    touristArea: true,
    minimumPurchase: 3,
    budgetCategory: 'small_purchase',
    notes: 'Cultural center with regular events. Can be busy with tourists.'
  },
  {
    name: 'Surf House Morocco',
    city: 'Taghazout',
    country: 'Morocco',
    type: 'coworking',
    dayPassPrice: 10, // Converted from 100 MAD to USD
    monthlyPrice: 150, // Converted from 1500 MAD to USD
    rating: 4.4,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Ocean Views', 'Surf Community', 'Yoga Classes', 'Beach Access', 'Relaxed Atmosphere', 'Surfboard Storage'],
    bestFor: ['Digital Nomads', 'Surfers', 'Beach Lifestyle', 'Active nomads'],
    hours: '8:00-19:00',
    address: 'Taghazout Beach',
    website: 'https://surfhousemorocco.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Starbucks',
    city: 'Casablanca',
    country: 'Morocco',
    type: 'cafe',
    dayPassPrice: 5, // Minimum purchase/day rate
    rating: 4.2,
    wifiSpeed: 45,
    powerOutlets: 3,
    noiseLevel: 6,
    amenities: ['Reliable Chain', 'Air Conditioning', 'Western Coffee', 'Multiple Locations', 'Familiar Environment'],
    bestFor: ['Reliable Work', 'Meetings', 'Consistent Quality', 'Western comforts'],
    hours: '7:00-23:00',
    address: 'Multiple locations in Casablanca',
    touristArea: true,
    minimumPurchase: 5,
    budgetCategory: 'small_purchase',
    notes: 'Most reliable for consistent WiFi and Western-style amenities'
  },
  {
    name: 'Nomad Cafe',
    city: 'Essaouira',
    country: 'Morocco',
    type: 'cafe',
    dayPassPrice: 3.5, // Minimum purchase/day rate
    rating: 4.3,
    wifiSpeed: 35,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Sea Views', 'Creative Community', 'Good Food', 'WiFi', 'Artsy Atmosphere', 'Local art'],
    bestFor: ['Creative Workers', 'Beach Lifestyle', 'Relaxed Work', 'Artists'],
    hours: '8:00-20:00',
    address: 'Medina, Essaouira',
    touristArea: true,
    minimumPurchase: 3.5,
    budgetCategory: 'small_purchase'
  },
  {
    name: 'The Spot',
    city: 'Rabat',
    country: 'Morocco',
    type: 'coworking',
    dayPassPrice: 18, // Converted from 180 MAD to USD
    monthlyPrice: 230, // Converted from 2300 MAD to USD
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Modern Design', 'Meeting Rooms', 'Business Services', 'Kitchen', 'Quiet Environment', 'Printing'],
    bestFor: ['Professionals', 'Government Workers', 'Quiet Work', 'Focused tasks'],
    hours: '8:00-20:00',
    address: 'Agdal, Rabat',
    website: 'https://thespot.ma',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'Equity Point Marrakech',
    city: 'Marrakech',
    country: 'Morocco',
    type: 'hostel',
    dayPassPrice: 5,
    monthlyPrice: 300, // Monthly accommodation in USD
    rating: 4.4,
    wifiSpeed: 65,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Rooftop workspace', 'Swimming pool', 'Kitchen', 'Bar', 'Tour desk', 'Social events'],
    bestFor: ['Budget travelers', 'Social nomads', 'Poolside work', 'Group travel'],
    hours: 'Common areas: 24/7',
    address: 'Derb Laadam 12, Marrakech',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Beautiful rooftop with views. Popular with young travelers.'
  },
  {
    name: 'Riad Dar One',
    city: 'Marrakech',
    country: 'Morocco',
    type: 'hotel',
    dayPassPrice: 12, // Minimum spend
    rating: 4.7,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Traditional riad courtyard', 'Quiet garden', 'Pool', 'Breakfast included', 'AC'],
    bestFor: ['Peaceful work', 'Traditional atmosphere', 'Luxury experience', 'Solo retreat'],
    hours: 'Courtyard: 8:00-22:00',
    address: 'Derb Laadam 65, Marrakech',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    minimumPurchase: 12,
    notes: 'Traditional Moroccan riad. Quiet and serene atmosphere.'
  },
  {
    name: 'Surf Berbere Hostel',
    city: 'Taghazout',
    country: 'Morocco',
    type: 'hostel',
    dayPassPrice: 4,
    monthlyPrice: 280,
    rating: 4.5,
    wifiSpeed: 60,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Beachfront location', 'Surf lessons', 'Yoga deck', 'Community kitchen', 'BBQ area', 'Co-working corner'],
    bestFor: ['Surfers', 'Beach lovers', 'Active lifestyle', 'Community living'],
    hours: 'Co-working corner: 8:00-20:00',
    address: 'Taghazout Beach Road',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Perfect for surfers. Co-working corner with ocean views.'
  }
];

// Add Free Workspaces for Morocco
export const moroccoFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'National Library of the Kingdom of Morocco',
    city: 'Rabat',
    type: 'library',
    description: 'Modern national library with extensive collections and study spaces',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: true,
    hours: '9:00-18:00 (Mon-Fri), 10:00-16:00 (Sat)',
    amenities: ['Extensive collections', 'Study carrels', 'Reading rooms', 'AC', 'Research materials'],
    bestFor: ['Academic research', 'Quiet study', 'Serious work', 'Students'],
    noiseLevel: 1,
    address: 'Avenue Ibn Khaldoun, Rabat',
    notes: 'Bring ID for registration. Modern facilities.'
  },
  {
    name: 'Jardin Majorelle',
    city: 'Marrakech',
    type: 'public_space',
    description: 'Famous botanical garden with benches and peaceful atmosphere',
    cost: 'purchase_required',
    wifi: false,
    powerOutlets: false,
    hours: '8:00-17:30',
    amenities: ['Botanical garden', 'Yves Saint Laurent museum', 'Cafe', 'Art galleries', 'Beautiful setting'],
    bestFor: ['Creative inspiration', 'Reading', 'Meditative work', 'Nature breaks'],
    noiseLevel: 2,
    address: 'Rue Yves St Laurent, Marrakech',
    notes: 'Entry fee required. Bring mobile hotspot. Beautiful for creative thinking.'
  },
  {
    name: 'Morocco Mall Food Court',
    city: 'Casablanca',
    type: 'mall',
    description: 'Largest mall in Africa with food court seating and AC',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 40,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'People watching', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Urban work'],
    noiseLevel: 4,
    address: 'Boulevard de la Corniche, Casablanca',
    notes: 'Purchase required for food court seating. Excellent AC during hot months.'
  },
  {
    name: 'Hassan II Mosque Square',
    city: 'Casablanca',
    type: 'public_space',
    description: 'Large public square with benches overlooking the iconic mosque',
    cost: 'free',
    wifi: false, // Intermittent public WiFi
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Iconic views', 'Ocean breeze', 'Public seating', 'Historical site'],
    bestFor: ['Creative thinking', 'Reading', 'Short breaks', 'Photo opportunities'],
    noiseLevel: 3,
    address: 'Boulevard Sidi Mohammed Ben Abdallah, Casablanca',
    notes: 'Use mobile hotspot. Best in morning/evening. Beautiful sunset views.'
  },
  {
    name: 'Université Mohammed V Libraries',
    city: 'Rabat',
    type: 'university',
    description: 'University libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 55,
    powerOutlets: true,
    hours: '8:30-18:00 (Mon-Fri)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Student atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: 'Avenue des Nations Unies, Rabat',
    notes: 'May need temporary visitor pass. Student ID helpful but not always required.'
  }
];

// Add Money Saving Tips for Morocco
export const moroccoMoneySavingTips: MoneySavingTips = {
  general: [
    'Exchange currency at official exchange offices, not hotels or airports',
    'Use local SIM cards (Maroc Telecom, Orange) for better rates',
    'Take "petits taxis" within cities and "grands taxis" for intercity',
    'Eat at local "snacks" and small restaurants for authentic, cheap meals',
    'Learn basic French or Arabic phrases for better prices'
  ],
  touristAreas: [
    'Avoid restaurants in main squares like Jemaa el-Fnaa for meals',
    'In Marrakech souks, always negotiate prices (start at 30% of asking price)',
    'Skip tourist trap cafes near major attractions',
    'Use local guides recommended by accommodations, not street touts'
  ],
  nonTouristAreas: [
    'Local cafes in non-touristy neighborhoods welcome laptop users',
    'University areas have cheaper food and amenities',
    'Markets outside medinas have better prices',
    'Residential neighborhoods have authentic local experiences'
  ],
  byPreference: {
    coworking: [
      'Ask for monthly rates instead of daily passes',
      'Share membership with another nomad',
      'Look for spaces outside main tourist cities',
      'Use free trial days to test different options'
    ],
    cafe: [
      'Order traditional mint tea instead of coffee for lower cost',
      'Tip 5-10 MAD if staying several hours',
      'Visit during off-peak hours (2-5 PM) for quieter environment',
      'Choose local "cafés" over international chains'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Arrive early to secure best seats',
      'Check prayer times as some may close briefly',
      'Use silent floors for maximum focus'
    ],
    hostel: [
      'Book directly with hostel for better rates',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free walking tours'
    ],
    hotel: [
      'Business hotels have best WiFi and work facilities',
      'Ask about "day use" rates for workspace access',
      'Traditional riads often have beautiful courtyards for work',
      'Loyalty programs can offer perks'
    ]
  }
};

// Add Coworking Memberships for Morocco
export const moroccoCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "Urban Hub Network",
    monthlyPrice: 220,
    coverage: ["Casablanca", "Rabat", "Marrakech"],
    dayPassAvailable: true,
    dayPassPrice: 18,
    trialDays: 1,
    benefits: [
      "Access to all Urban Hub locations",
      "Meeting room credits",
      "Business address service",
      "Networking events",
      "Printing facilities"
    ],
    bestFor: "Nomads traveling between major Moroccan cities for business",
    website: "https://urbanhub.ma"
  },
  {
    name: "Factory Alliance",
    monthlyPrice: 180,
    coverage: ["Marrakech", "Taghazout"],
    dayPassAvailable: true,
    dayPassPrice: 14,
    trialDays: 2,
    benefits: [
      "Access to creative coworking spaces",
      "Community workshops",
      "Networking with startups",
      "Flexible hours",
      "Beach access in Taghazout"
    ],
    bestFor: "Creative nomads and entrepreneurs in southern Morocco",
    website: "https://lafactory.ma"
  }
];

// Updated Morocco Nomad Data
export const moroccoNomadData: NomadData = {
  country: "Morocco",
  cities: ["Marrakech", "Casablanca", "Fes", "Tangier", "Agadir", "Essaouira", "Chefchaouen", "Rabat"],
  
  internet: {
    speed: 55,
    reliability: 7,
    coworkingSpaces: 25,
    freePublicWifiSpots: 3
  },
  
  costs: {
    coworkingMonthly: 210, // Converted from 2100 MAD to USD
    simCardMonthly: 10, // Converted from 100 MAD to USD
    coffeeShopWork: 4, // Converted from 40 MAD to USD
    libraryAccess: 0
  },
  
  community: {
    expatSize: 6,
    englishLevel: 5,
    safety: 7,
    nomadGroups: [
      "Digital Nomads Morocco Facebook Group",
      "Expats in Marrakech",
      "Nomads in Morocco Telegram Group",
      "Casablanca Remote Workers"
    ]
  },
  
  workspaces: moroccoWorkspaces,
  
  freeWorkspaces: moroccoFreeWorkspaces,
  
  moneySavingTips: moroccoMoneySavingTips,
  
  coworkingMemberships: moroccoCoworkingMemberships,
  
  touristyCities: [
    "Marrakech Medina",
    "Jemaa el-Fnaa Square",
    "Fes el-Bali",
    "Chefchaouen Medina",
    "Essaouira Medina",
    "Tangier Kasbah",
    "Agadir Beachfront",
    "Casablanca Corniche"
  ]
};