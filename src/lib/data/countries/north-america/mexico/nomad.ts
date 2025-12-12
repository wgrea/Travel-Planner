// src/lib/data/countries/north-america/mexico/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const mexicoWorkspaces: Workspace[] = [
  {
    name: 'WeWork',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 14, // Converted from 250 MXN to USD
    monthlyPrice: 123, // Converted from 2200 MXN to USD
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths', '24/7 Access', 'Global network'],
    bestFor: ['Corporate teams', 'Professional services', 'Business networking', 'Global companies'],
    hours: '24/7',
    address: 'Multiple locations (Polanco, Reforma, Santa Fe)',
    website: 'https://www.wework.com',
    freeTrialDays: 1,
    membershipDiscount: 0,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Global brand with consistent quality. Accepts WeWork All Access membership'
  },
  {
    name: 'Centro',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 10, // Converted from 180 MXN to USD
    monthlyPrice: 90, // Converted from 1600 MXN to USD
    rating: 4.5,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Beautiful architecture', 'Cafe', 'Meeting rooms', 'Event space', 'Community events', 'Art exhibitions'],
    bestFor: ['Creative professionals', 'Startups', 'Digital nomads', 'Art community'],
    hours: '8:00-20:00',
    address: 'Roma Norte, Mexico City',
    website: 'https://centrocowork.com.mx',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Selina Cowork',
    city: 'Playa del Carmen',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 8.4, // Converted from 150 MXN to USD
    monthlyPrice: 73, // Converted from 1300 MXN to USD
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beach access', 'Pool', 'Cafe', 'Community events', 'Accommodation available', 'Yoga classes'],
    bestFor: ['Digital nomads', 'Beach lifestyle', 'Community building', 'Social travelers'],
    hours: '24/7',
    address: '5th Avenue, Playa del Carmen',
    website: 'https://www.selina.com',
    touristArea: true,
    includedWithStay: true, // Free for Selina guests
    budgetCategory: 'already_paid',
    dayPassForNonGuests: true,
    notes: 'Part of Selina hostel chain. Free for guests, day pass for non-guests'
  },
  {
    name: 'Nest Coworking',
    city: 'Playa del Carmen',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 6.7, // Converted from 120 MXN to USD
    monthlyPrice: 56, // Converted from 1000 MXN to USD
    rating: 4.7,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Modern facilities', 'Meeting rooms', 'Kitchen', 'Quiet zones', 'Community focus', 'Air conditioning'],
    bestFor: ['Focused work', 'Digital nomads', 'Remote teams', 'Productivity'],
    hours: '24/7',
    address: 'Playa del Carmen Centro',
    website: 'https://nestcoworking.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Work It',
    city: 'Guadalajara',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 7.8, // Converted from 140 MXN to USD
    monthlyPrice: 67, // Converted from 1200 MXN to USD
    rating: 4.5,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Tech-focused', 'Meeting rooms', 'Event space', 'Networking events', 'Business services', 'Developer community'],
    bestFor: ['Tech startups', 'Developers', 'Entrepreneurs', 'Mexican tech scene'],
    hours: '24/7',
    address: 'Zapopan, Guadalajara',
    website: 'https://workit.mx',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Cafebrería el Péndulo',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'cafe_coworking',
    dayPassPrice: 4.5, // Minimum purchase/day rate
    rating: 4.3,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Bookstore-cafe', 'Power outlets', 'Comfortable seating', 'Good atmosphere', 'Books for sale', 'Cultural events'],
    bestFor: ['Creative work', 'Reading breaks', 'Casual meetings', 'Book lovers'],
    hours: '8:00-23:00',
    address: 'Multiple locations (Polanco, Roma, Condesa)',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 4.5,
    budgetCategory: 'small_purchase',
    notes: 'Iconic bookstore-cafe chain. Can get crowded on weekends'
  },
  {
    name: 'Panificadora Bakers',
    city: 'Oaxaca City',
    country: 'Mexico',
    type: 'cafe',
    dayPassPrice: 3.4, // Minimum purchase/day rate
    rating: 4.2,
    wifiSpeed: 50,
    powerOutlets: 2,
    noiseLevel: 4,
    amenities: ['Artisan bakery', 'WiFi', 'Power outlets', 'Local atmosphere', 'Oaxacan pastries', 'Coffee'],
    bestFor: ['Casual work', 'Food lovers', 'Short sessions', 'Local experience'],
    hours: '7:00-21:00',
    address: 'Centro Histórico, Oaxaca',
    touristArea: true,
    minimumPurchase: 3.4,
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Impact Hub',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 11, // Converted from 200 MXN to USD
    monthlyPrice: 100, // Converted from 1800 MXN to USD
    rating: 4.6,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Social impact focus', 'Meeting rooms', 'Event space', 'Community', 'Workshops', 'Sustainability focus'],
    bestFor: ['Social entrepreneurs', 'Non-profits', 'Community projects', 'Sustainable businesses'],
    hours: '8:00-20:00',
    address: 'Roma Norte, Mexico City',
    website: 'https://mexicocity.impacthub.net',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'BeWorks',
    city: 'Cancún',
    country: 'Mexico',
    type: 'coworking',
    dayPassPrice: 9, // Converted from 160 MXN to USD
    monthlyPrice: 78, // Converted from 1400 MXN to USD
    rating: 4.3,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Modern design', 'Meeting rooms', 'Cafe', 'Business lounge', 'Networking', 'AC'],
    bestFor: ['Business professionals', 'Tourism industry', 'Corporate work', 'Hotel zone convenience'],
    hours: '8:00-20:00',
    address: 'Hotel Zone, Cancún',
    website: 'https://beworks.mx',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'Casa Pepe Hostel',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'hostel',
    dayPassPrice: 5,
    monthlyPrice: 400, // Monthly accommodation in USD
    rating: 4.5,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Rooftop workspace', 'Kitchen', 'Social events', 'Game room', 'Free breakfast', 'Tour desk'],
    bestFor: ['Budget travelers', 'Social nomads', 'Centro Histórico location', 'Young travelers'],
    hours: 'Common areas: 24/7',
    address: 'Calle República de Guatemala 77, Centro Histórico',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Popular hostel with great rooftop views of Zócalo'
  },
  {
    name: 'Che Hostel',
    city: 'Playa del Carmen',
    country: 'Mexico',
    type: 'hostel',
    dayPassPrice: 4,
    monthlyPrice: 350,
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 5,
    noiseLevel: 4,
    amenities: ['Poolside workspace', 'Swimming pool', 'Bar', 'Kitchen', 'Social events', 'Beach proximity'],
    bestFor: ['Social nomads', 'Beach lifestyle', 'Party atmosphere', '5th Avenue location'],
    hours: 'Co-working area: 8:00-22:00',
    address: 'Calle 10 Sur, Playa del Carmen',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Very social hostel. Can be noisy during peak season'
  },
  {
    name: 'Four Seasons Hotel Mexico City Lobby',
    city: 'Mexico City',
    country: 'Mexico',
    type: 'hotel',
    dayPassPrice: 12, // Minimum spend
    rating: 4.8,
    wifiSpeed: 120,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Luxury lobby', 'High-end restaurant', 'Quiet atmosphere', 'Professional service', 'Plush seating'],
    bestFor: ['Client meetings', 'Executive work', 'Peaceful environment', 'Treat yourself'],
    hours: 'Lobby lounge: 7:00-22:00',
    address: 'Paseo de la Reforma 500, Juárez',
    touristArea: false,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 12,
    notes: 'Luxury hotel lobby on Paseo de la Reforma. Minimum spend for non-guests'
  },
  {
    name: 'Mezcal Hostel',
    city: 'Oaxaca City',
    country: 'Mexico',
    type: 'hostel',
    dayPassPrice: 3.5,
    monthlyPrice: 280,
    rating: 4.6,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Courtyard workspace', 'Mezcal tastings', 'Kitchen', 'Cultural tours', 'Local art', 'Rooftop'],
    bestFor: ['Cultural immersion', 'Foodies', 'Art lovers', 'Oaxacan experience'],
    hours: 'Courtyard: 8:00-20:00',
    address: 'Centro Histórico, Oaxaca',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Focus on Oaxacan culture with regular mezcal tastings and cultural events'
  }
];

// Add Free Workspaces for Mexico
export const mexicoFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'Biblioteca Vasconcelos',
    city: 'Mexico City',
    type: 'library',
    description: 'Futuristic library with stunning architecture and excellent facilities',
    cost: 'free',
    wifi: true,
    wifiSpeed: 80,
    powerOutlets: true,
    hours: '8:30-19:30 (Mon-Sun)',
    amenities: ['Modern architecture', 'Study carrels', 'Reading rooms', 'AC', 'Gardens', 'Book collection'],
    bestFor: ['Serious study', 'Architecture lovers', 'Quiet work', 'Students'],
    noiseLevel: 1,
    address: 'Eje 1 Norte Mosqueta S/N, Buenavista',
    notes: 'One of the most beautiful libraries in the world. Arrive early for best seats'
  },
  {
    name: 'Parque México',
    city: 'Mexico City',
    type: 'park',
    description: 'Beautiful art deco park in Condesa with WiFi hotspots and lovely atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 40,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Art deco design', 'Duck pond', 'Walking paths', 'Benches', 'Dog-friendly', 'Cultural events'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Exercise breaks'],
    noiseLevel: 2,
    address: 'Avenida México, Colonia Condesa',
    notes: 'WiFi available in certain areas. Beautiful spot for thinking and light work'
  },
  {
    name: 'Antara Fashion Hall Food Court',
    city: 'Mexico City',
    type: 'mall',
    description: 'Upscale shopping mall with food court seating and reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 90,
    powerOutlets: true,
    hours: '11:00-21:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'People watching', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Polanco location'],
    noiseLevel: 4,
    address: 'Av. Ejército Nacional 843, Granada',
    notes: 'Upscale mall in Polanco. Purchase required for food court seating'
  },
  {
    name: 'El Zócalo Public Benches',
    city: 'Mexico City',
    type: 'public_space',
    description: 'Main square of Mexico City with benches and occasional WiFi',
    cost: 'free',
    wifi: false, // Intermittent
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Historic square', 'People watching', 'Cultural events', 'Cathedral views', 'Palace views'],
    bestFor: ['Creative thinking', 'People watching', 'Short breaks', 'Historic atmosphere'],
    noiseLevel: 4,
    address: 'Plaza de la Constitución, Centro Histórico',
    notes: 'Use mobile hotspot. Can be crowded with tourists and events'
  },
  {
    name: 'Universidad Nacional Autónoma de México (UNAM) Libraries',
    city: 'Mexico City',
    type: 'university',
    description: 'University libraries open to public with academic resources',
    cost: 'free',
    wifi: true,
    wifiSpeed: 85,
    powerOutlets: true,
    hours: '8:00-20:00 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Campus atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: 'Ciudad Universitaria, Coyoacán',
    notes: 'Visitor access available. May need temporary visitor pass. Beautiful campus'
  }
];

// Add Money Saving Tips for Mexico
export const mexicoMoneySavingTips: MoneySavingTips = {
  general: [
    'Exchange currency at banks or official exchange offices, not airports',
    'Use Telcel or Movistar SIM cards for best coverage and prices',
    'Take colectivos (shared vans) for cheap local transport',
    'Eat at local markets and fondas for authentic, affordable meals',
    'Learn basic Spanish phrases for better prices and respect'
  ],
  touristAreas: [
    'Avoid 5th Avenue restaurants in Playa del Carmen - prices are 3x higher',
    'In Mexico City Centro, walk a few blocks from Zócalo for better prices',
    'Skip tourist trap restaurants in Cancún Hotel Zone',
    'Use public transport (Metro, Metrobús) instead of taxis in Mexico City'
  ],
  nonTouristAreas: [
    'Local cafes in neighborhoods like Roma Norte welcome laptop users',
    'University areas (like Coyoacán) have cheaper food and amenities',
    'Markets like Mercado de la Merced have amazing food at local prices',
    'Residential neighborhoods offer authentic experiences'
  ],
  byPreference: {
    coworking: [
      'Ask for "nómada digital" discounts at local coworking spaces',
      'Share monthly membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces outside main tourist areas for better prices'
    ],
    cafe: [
      'Order "café de olla" instead of espresso drinks',
      'Tip 10-15 pesos if staying 2+ hours',
      'Visit during "comida" hours (2-4 PM) for quieter times',
      'Choose local cafes over international chains'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use silent floors for maximum focus',
      'Arrive early to secure best seats',
      'Check holiday schedules (many close on Sundays)'
    ],
    hostel: [
      'Book weekly rates for 20-30% discount',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free tours and activities'
    ],
    hotel: [
      'Business hotels have best lobby workspaces',
      'Ask about "day use" rates for workspace access',
      'Small boutique hotels often have beautiful courtyards',
      'Loyalty programs sometimes include business center access'
    ]
  }
};

// Add Coworking Memberships for Mexico
export const mexicoCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "WeWork All Access Mexico",
    monthlyPrice: 200,
    coverage: ["Mexico City", "Guadalajara", "Monterrey"],
    dayPassAvailable: true,
    dayPassPrice: 14,
    trialDays: 1,
    benefits: [
      "Access to all WeWork locations in Mexico",
      "Meeting room credits",
      "24/7 access",
      "High-speed internet",
      "Business address options",
      "Global network access"
    ],
    bestFor: "Digital nomads traveling between major Mexican cities",
    website: "https://www.wework.com"
  },
  {
    name: "Selina CoWork Pass",
    monthlyPrice: 150,
    coverage: ["Playa del Carmen", "Tulum", "Mexico City", "Puerto Escondido"],
    dayPassAvailable: true,
    dayPassPrice: 8,
    trialDays: 2,
    benefits: [
      "Access to all Selina coworking spaces in Mexico",
      "Discounts on accommodations",
      "Community events",
      "Wellness activities",
      "Travel community"
    ],
    bestFor: "Nomads who stay at Selina hostels and want beach locations",
    website: "https://www.selina.com"
  },
  {
    name: "Centro México Network",
    monthlyPrice: 85,
    coverage: ["Mexico City", "Guadalajara", "Monterrey"],
    dayPassAvailable: true,
    dayPassPrice: 9,
    trialDays: 1,
    benefits: [
      "Access to Centro locations nationwide",
      "Creative community",
      "Cultural events",
      "Meeting room access",
      "Local business network"
    ],
    bestFor: "Creative professionals and entrepreneurs in Mexico's major cities",
    website: "https://centrocowork.com.mx"
  }
];

// Updated Mexico Nomad Data
export const mexicoNomadData: NomadData = {
  country: "Mexico",
  cities: ["Mexico City", "Playa del Carmen", "Guadalajara", "Oaxaca City", "Puerto Vallarta", "Cancún", "Tulum", "San Miguel de Allende", "Monterrey", "Puebla"],
  
  internet: {
    speed: 80,
    reliability: 7,
    coworkingSpaces: 85,
    freePublicWifiSpots: 5
  },
  
  costs: {
    coworkingMonthly: 84, // Converted from 1500 MXN to USD
    simCardMonthly: 11, // Converted from 200 MXN to USD
    coffeeShopWork: 4.5, // Converted from 80 MXN to USD
    libraryAccess: 0
  },
  
  community: {
    expatSize: 8,
    englishLevel: 6,
    safety: 7,
    nomadGroups: [
      "Digital Nomads Mexico Facebook Group",
      "Expats in Mexico City",
      "Remote Workers Mexico",
      "Nomads in Playa del Carmen",
      "Mexico Digital Nomads Slack"
    ]
  },
  
  workspaces: mexicoWorkspaces,
  
  freeWorkspaces: mexicoFreeWorkspaces,
  
  moneySavingTips: mexicoMoneySavingTips,
  
  coworkingMemberships: mexicoCoworkingMemberships,
  
  touristyCities: [
    "Mexico City Centro Histórico",
    "Playa del Carmen 5th Avenue",
    "Cancún Hotel Zone",
    "Tulum Beach Road",
    "Oaxaca City Centro",
    "Puerto Vallarta Malecón",
    "San Miguel de Allende Centro",
    "Los Cabos Marina"
  ]
};