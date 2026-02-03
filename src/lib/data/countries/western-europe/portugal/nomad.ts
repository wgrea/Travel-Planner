// src/lib/data/countries/europe/western-europe/portugal/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const portugalWorkspaces: Workspace[] = [
  {
    name: 'Second Home',
    city: 'Lisbon',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 22,
    monthlyPrice: 200,
    rating: 4.7,
    wifiSpeed: 120,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Jungle-like interior', 'Meeting Rooms', 'Free Coffee/Tea', 'Event Space', 'Community Events', 'Beautiful Design', '24/7 Access', 'Phone booths'],
    bestFor: ['Creative professionals', 'Startups', 'Design-focused work', 'Architecture lovers'],
    hours: '24/7',
    address: 'Santos, Lisbon',
    website: 'https://secondhome.io/lisbon',
    freeTrialDays: 1,
    membershipDiscount: 15,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'World-famous coworking space with stunning plant-filled interior'
  },
  {
    name: 'Heden',
    city: 'Lisbon',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 180,
    rating: 4.6,
    wifiSpeed: 110,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Garden', 'Cafe', 'Meeting rooms', 'Event space', 'Community focus', 'Sustainable design', 'Yoga classes'],
    bestFor: ['Digital nomads', 'Sustainable work', 'Community building', 'Wellness focus'],
    hours: '24/7',
    address: 'Santos, Lisbon',
    website: 'https://heden.pt',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Porto i/o',
    city: 'Porto',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 160,
    rating: 4.5,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['River views', 'Meeting rooms', 'Kitchen', 'Community events', 'Bike parking', 'Douro River location'],
    bestFor: ['Digital nomads', 'Tech community', 'Creative work', 'Porto lifestyle'],
    hours: '24/7',
    address: 'Ribeira, Porto',
    website: 'https://porto.io',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Cowork Central',
    city: 'Porto',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 16,
    monthlyPrice: 140,
    rating: 4.4,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Central location', 'Meeting rooms', 'Cafe', 'Event space', 'Networking', 'Porto business community'],
    bestFor: ['Freelancers', 'Startups', 'Business networking', 'Central Porto'],
    hours: '8:00-20:00',
    address: 'Baixa, Porto',
    website: 'https://coworkcentral.pt',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'CRU Cowork',
    city: 'Lisbon',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 220,
    rating: 4.6,
    wifiSpeed: 115,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Luxury facilities', 'Meeting rooms', 'Cafe', 'Event space', 'Business services', 'Premium location'],
    bestFor: ['Corporate teams', 'Professional services', 'Business meetings', 'Executive work'],
    hours: '24/7',
    address: 'Marquês de Pombal, Lisbon',
    website: 'https://cruspaces.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'LACS',
    city: 'Cascais',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 180,
    rating: 4.5,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beach proximity', 'Garden', 'Meeting rooms', 'Community', 'Surf culture', 'Outdoor workspace'],
    bestFor: ['Digital nomads', 'Beach lifestyle', 'Work-life balance', 'Surf enthusiasts'],
    hours: '24/7',
    address: 'Cascais',
    website: 'https://lacs.pt',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Fabrica Coffee Roasters',
    city: 'Lisbon',
    country: 'Portugal',
    type: 'cafe',
    dayPassPrice: 10, // Minimum purchase/day rate
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty coffee', 'Power outlets', 'Comfortable seating', 'Local vibe', 'Third-wave coffee'],
    bestFor: ['Casual work', 'Coffee lovers', 'Short sessions', 'Specialty coffee enthusiasts'],
    hours: '8:00-19:00',
    address: 'Multiple locations in Lisbon',
    touristArea: false,
    // NEW: Budget categorization
    minimumPurchase: 10,
    budgetCategory: 'small_purchase',
    notes: 'Popular local coffee chain. Consistent quality across locations'
  },
  {
    name: 'Mesa 325',
    city: 'Porto',
    country: 'Portugal',
    type: 'cafe',
    dayPassPrice: 8, // Minimum purchase/day rate
    rating: 4.2,
    wifiSpeed: 65,
    powerOutlets: 2,
    noiseLevel: 4,
    amenities: ['Cozy atmosphere', 'WiFi', 'Power outlets', 'Good coffee', 'Student-friendly'],
    bestFor: ['Students', 'Freelancers', 'Creative work', 'Budget work'],
    hours: '8:00-20:00',
    address: 'Cedofeita, Porto',
    touristArea: false,
    minimumPurchase: 8,
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Madeira Cowork',
    city: 'Funchal',
    country: 'Portugal',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 130,
    rating: 4.4,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Island views', 'Meeting rooms', 'Community events', 'Outdoor spaces', 'Madeira community'],
    bestFor: ['Digital nomads', 'Island living', 'Nature lovers', 'Madeira experience'],
    hours: '8:00-20:00',
    address: 'Funchal, Madeira',
    website: 'https://madeiracowork.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'Lisbon Destination Hostel',
    city: 'Lisbon',
    country: 'Portugal',
    type: 'hostel',
    dayPassPrice: 8,
    monthlyPrice: 550, // Monthly accommodation in USD/EUR
    rating: 4.8,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Co-working lounge', 'Rooftop terrace', 'Kitchen', 'Free walking tours', 'Social events', 'Train station location'],
    bestFor: ['Budget travelers', 'Social nomads', 'Central Lisbon location', 'Solo travelers'],
    hours: 'Common areas: 24/7',
    address: 'Rossio Train Station, Lisbon',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Located in historic train station. Excellent facilities and community'
  },
  {
    name: 'The Passenger Hostel',
    city: 'Porto',
    country: 'Portugal',
    type: 'hostel',
    dayPassPrice: 7,
    monthlyPrice: 500,
    rating: 4.7,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Historic train station', 'Co-working area', 'Bar and restaurant', 'Cultural events', 'Beautiful architecture'],
    bestFor: ['Architecture lovers', 'Cultural immersion', 'Porto experience', 'Budget travelers'],
    hours: 'Co-working area: 8:00-22:00',
    address: 'Estação de São Bento, Porto',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Located in São Bento train station with famous azulejo tiles'
  },
  {
    name: 'Pestana Palace Hotel Garden',
    city: 'Lisbon',
    country: 'Portugal',
    type: 'hotel',
    dayPassPrice: 18, // Minimum spend
    rating: 4.9,
    wifiSpeed: 130,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Palace gardens', 'Luxury hotel', 'Quiet atmosphere', 'Historical building', 'Premium service'],
    bestFor: ['Client meetings', 'Executive work', 'Peaceful environment', 'Special occasions'],
    hours: 'Garden lounge: 7:00-22:00',
    address: 'Rua Jau 54, Lisbon',
    touristArea: false,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 18,
    notes: 'Former palace turned luxury hotel. Beautiful gardens for quiet work'
  },
  {
    name: 'Selina Secret Garden Porto',
    city: 'Porto',
    country: 'Portugal',
    type: 'hostel',
    dayPassPrice: 12,
    monthlyPrice: 650,
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Secret garden', 'Co-working space', 'Yoga studio', 'Kitchen', 'Community meals', 'Wellness focus'],
    bestFor: ['Digital nomads', 'Wellness travelers', 'Community living', 'Garden lovers'],
    hours: 'Co-working space: 24/7',
    address: 'Rua de Costa Cabral 1253, Porto',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Selina chain with beautiful garden and wellness focus'
  }
];

// Add Free Workspaces for Portugal
export const portugalFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'Biblioteca Nacional de Portugal',
    city: 'Lisbon',
    type: 'library',
    description: 'National library with extensive collections and beautiful reading rooms',
    cost: 'free',
    wifi: true,
    wifiSpeed: 95,
    powerOutlets: true,
    hours: '9:00-19:30 (Mon-Fri), 9:00-17:00 (Sat)',
    amenities: ['National collections', 'Reading rooms', 'Study desks', 'Research materials', 'Historical archives'],
    bestFor: ['Academic research', 'Serious study', 'Historical research', 'Quiet work'],
    noiseLevel: 1,
    address: 'Campo Grande 83, Lisbon',
    notes: 'Reader card required for some areas. Beautiful modernist building'
  },
  {
    name: 'Jardim da Estrela',
    city: 'Lisbon',
    type: 'public_space',
    description: 'Beautiful romantic garden with WiFi hotspots, benches, and quiet corners',
    cost: 'free',
    wifi: true,
    wifiSpeed: 55,
    powerOutlets: false,
    hours: '7:00-21:00',
    amenities: ['Romantic garden', 'Duck pond', 'Walking paths', 'Benches', 'WiFi hotspots', 'Cafe'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Exercise breaks', 'Nature inspiration'],
    noiseLevel: 2,
    address: 'Praça da Estrela, Lisbon',
    notes: 'WiFi available in certain areas. One of Lisbon\'s most charming gardens'
  },
  {
    name: 'El Corte Inglés Lisboa Food Court',
    city: 'Lisbon',
    type: 'mall',
    description: 'Department store food court with seating and reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 85,
    powerOutlets: true,
    hours: '10:00-23:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'City views', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Central location'],
    noiseLevel: 4,
    address: 'Av. António Augusto de Aguiar 31, Lisbon',
    notes: 'Purchase required for food court seating. Rooftop has amazing city views'
  },
  {
    name: 'Miradouro de Santa Luzia',
    city: 'Lisbon',
    type: 'public_space',
    description: 'Famous viewpoint with benches and stunning views over Lisbon',
    cost: 'free',
    wifi: true,
    wifiSpeed: 45,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Iconic views', 'Azulejo tiles', 'People watching', 'Cultural spot', 'Tourist attraction'],
    bestFor: ['Creative thinking', 'People watching', 'Short breaks', 'Inspiration'],
    noiseLevel: 3,
    address: 'Largo de Santa Luzia, Lisbon',
    notes: 'Beautiful viewpoint with traditional Portuguese tiles. Can be crowded'
  },
  {
    name: 'Universidade de Lisboa Libraries',
    city: 'Lisbon',
    type: 'university',
    description: 'University libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 105,
    powerOutlets: true,
    hours: '8:00-22:00 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Student atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: 'Cidade Universitária, Lisbon',
    notes: 'Visitor access available. May need temporary visitor pass'
  }
];

// Add Money Saving Tips for Portugal
export const portugalMoneySavingTips: MoneySavingTips = {
  general: [
    'Take advantage of "prato do dia" for affordable lunch (€8-12 with drink)',
    'Use public libraries for free high-quality workspace',
    'Travel between cities with trains (CP) for affordable transportation',
    'Use NOS, MEO, or Vodafone SIM cards for good data deals',
    'Shop at local markets (mercados) for fresh, affordable food'
  ],
  touristAreas: [
    'Avoid restaurants in Baixa/Chiado in Lisbon - prices are 2-3x higher',
    'In Porto Ribeira, walk up to Galerias de Paris for better prices',
    'Skip tourist trap fado houses - find authentic local ones',
    'Use public transport (metro, trams) instead of tuk-tuks'
  ],
  nonTouristAreas: [
    'Local "pastelarias" welcome laptop users during quiet hours',
    'University neighborhoods have cheaper amenities and good WiFi',
    'Smaller towns have significantly lower costs than Lisbon/Porto',
    'Residential areas offer authentic experiences and better prices'
  ],
  byPreference: {
    coworking: [
      'Ask for "nómada digital" discounts at local coworking spaces',
      'Share monthly membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces in emerging neighborhoods like Marvila'
    ],
    cafe: [
      'Order "bica" (espresso) instead of specialty drinks',
      'Take advantage of free WiFi with purchase',
      'Visit during afternoon hours (3-6 PM) for quieter times',
      'Choose local cafes over international chains'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use silent floors for maximum focus',
      'Arrive early to secure best seats',
      'Check for free cultural events and workshops'
    ],
    hostel: [
      'Book weekly rates for 20-30% discount',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free walking tours'
    ],
    hotel: [
      'Hotel lobbies are often free to use (with purchase)',
      'Ask about "tarifa de dia" for day use rates',
      'Traditional "pousadas" often have beautiful common areas',
      'Loyalty programs offer free amenities'
    ]
  }
};

// Add Coworking Memberships for Portugal
export const portugalCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "Second Home Lisbon Network",
    monthlyPrice: 180,
    coverage: ["Lisbon (multiple locations)"],
    dayPassAvailable: true,
    dayPassPrice: 20,
    trialDays: 1,
    benefits: [
      "Access to all Second Home locations in Lisbon",
      "Meeting room credits",
      "24/7 access",
      "Community events",
      "Beautiful design spaces",
      "Creative community"
    ],
    bestFor: "Creative professionals and digital nomads in Lisbon",
    website: "https://secondhome.io"
  },
  {
    name: "Portugal Coworking Alliance",
    monthlyPrice: 160,
    coverage: ["Lisbon", "Porto", "Cascais", "Faro", "Coimbra"],
    dayPassAvailable: true,
    dayPassPrice: 18,
    trialDays: 2,
    benefits: [
      "Access to network of independent coworking spaces across Portugal",
      "Local community connections",
      "Flexible terms",
      "Regional variety",
      "Cultural immersion",
      "Portuguese business network"
    ],
    bestFor: "Nomads wanting to explore different regions of Portugal",
    website: "https://portugalcoworking.com"
  },
  {
    name: "Heden Community Pass",
    monthlyPrice: 170,
    coverage: ["Lisbon (multiple locations)"],
    dayPassAvailable: true,
    dayPassPrice: 18,
    trialDays: 1,
    benefits: [
      "Access to Heden locations",
      "Sustainable community",
      "Wellness activities",
      "Networking events",
      "Garden workspace",
      "Eco-friendly focus"
    ],
    bestFor: "Sustainability-focused nomads and wellness-oriented workers",
    website: "https://heden.pt"
  }
];

// Updated Portugal Nomad Data
export const portugalNomadData: NomadData = {
  country: "Portugal",
  cities: ["Lisbon", "Porto", "Cascais", "Faro", "Madeira", "Azores", "Coimbra", "Braga", "Aveiro", "Évora"],
  
  internet: {
    speed: 85,
    reliability: 8,
    coworkingSpaces: 90,
    freePublicWifiSpots: 8
  },
  
  costs: {
    coworkingMonthly: 180,
    simCardMonthly: 15,
    coffeeShopWork: 8,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 9,
    englishLevel: 7,
    safety: 9,
    nomadGroups: [
      "Digital Nomads Portugal Facebook Group",
      "Lisbon Digital Nomads",
      "Porto Remote Workers",
      "Expats in Portugal",
      "Nomad List Portugal Community",
      "Portugal Digital Nomads Slack"
    ]
  },
  
  workspaces: portugalWorkspaces,
  
  freeWorkspaces: portugalFreeWorkspaces,
  
  moneySavingTips: portugalMoneySavingTips,
  
  coworkingMemberships: portugalCoworkingMemberships,
  
  touristyCities: [
    "Lisbon Baixa/Chiado",
    "Lisbon Alfama",
    "Porto Ribeira",
    "Porto Clérigos area",
    "Cascais Marina",
    "Sintra Historic Centre",
    "Faro Old Town",
    "Madeira Funchal Old Town",
    "Azores Ponta Delgada",
    "Obidos Medieval Village"
  ]
};