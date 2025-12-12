// src/lib/data/countries/europe/western-europe/spain/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const spainWorkspaces: Workspace[] = [
  {
    name: 'Utopicus',
    city: 'Madrid',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 220,
    rating: 4.7,
    wifiSpeed: 120,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Roof Terrace', '24/7 Access', 'Phone booths'],
    bestFor: ['Startups', 'Freelancers', 'Professional networking', 'Madrid business community'],
    hours: '24/7',
    address: 'Multiple locations in Madrid (Chueca, Chamberí, Salamanca)',
    website: 'https://utopicus.es',
    freeTrialDays: 1,
    membershipDiscount: 10,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Popular Spanish coworking chain with beautiful spaces'
  },
  {
    name: 'OneCowork',
    city: 'Barcelona',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 28,
    monthlyPrice: 240,
    rating: 4.6,
    wifiSpeed: 110,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Sea views', 'Cafe', 'Meeting rooms', 'Event space', 'Community events', 'Beach proximity'],
    bestFor: ['Digital nomads', 'Creative professionals', 'Startups', 'Barcelona lifestyle'],
    hours: '24/7',
    address: 'Diagonal Mar, Barcelona',
    website: 'https://onecowork.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'La Vaca Coworking',
    city: 'Valencia',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 160,
    rating: 4.5,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Garden patio', 'Kitchen', 'Meeting rooms', 'Community focus', 'Bike parking', 'Eco-friendly'],
    bestFor: ['Digital nomads', 'Sustainable work', 'Community building', 'Valencia lifestyle'],
    hours: '8:00-20:00',
    address: 'Ruzafa, Valencia',
    website: 'https://lavacacoworking.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Wayco',
    city: 'Seville',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 180,
    rating: 4.4,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Andalusian patio', 'Meeting rooms', 'Cafe', 'Event space', 'Cultural activities', 'Traditional architecture'],
    bestFor: ['Remote workers', 'Cultural immersion', 'Slow travel', 'Andalusian experience'],
    hours: '8:00-20:00',
    address: 'Centro Histórico, Seville',
    website: 'https://wayco.es',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Impact Hub',
    city: 'Madrid',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 30,
    monthlyPrice: 260,
    rating: 4.6,
    wifiSpeed: 110,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Social impact focus', 'Meeting rooms', 'Event space', 'Workshops', 'Community', 'Sustainable practices'],
    bestFor: ['Social entrepreneurs', 'Non-profits', 'Sustainability projects', 'Impact businesses'],
    hours: '8:00-22:00',
    address: 'Lavapiés, Madrid',
    website: 'https://madrid.impacthub.net',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Betahaus',
    city: 'Barcelona',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 230,
    rating: 4.5,
    wifiSpeed: 105,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Creative space', 'Cafe', 'Meeting rooms', 'Event space', 'Maker space', 'Tech community'],
    bestFor: ['Creative professionals', 'Designers', 'Tech startups', 'Barcelona creatives'],
    hours: '24/7',
    address: 'Gràcia, Barcelona',
    website: 'https://betahaus.com/barcelona',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Federal Café',
    city: 'Madrid',
    country: 'Spain',
    type: 'cafe',
    dayPassPrice: 12, // Minimum purchase/day rate
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty coffee', 'Healthy food', 'Power outlets', 'Modern design', 'Breakfast focus'],
    bestFor: ['Casual work', 'Coffee lovers', 'Short sessions', 'Morning work'],
    hours: '8:00-21:00',
    address: 'Multiple locations in Madrid',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 12,
    budgetCategory: 'small_purchase',
    notes: 'Australian-style café popular with remote workers'
  },
  {
    name: 'Syra Coffee',
    city: 'Barcelona',
    country: 'Spain',
    type: 'cafe',
    dayPassPrice: 10, // Minimum purchase/day rate
    rating: 4.2,
    wifiSpeed: 65,
    powerOutlets: 2,
    noiseLevel: 4,
    amenities: ['Artisan coffee', 'Power outlets', 'Comfortable seating', 'Local vibe', 'Third-wave coffee'],
    bestFor: ['Morning work sessions', 'Freelancers', 'Creative work', 'Coffee enthusiasts'],
    hours: '7:30-20:00',
    address: 'Multiple locations in Barcelona',
    touristArea: false,
    minimumPurchase: 10,
    budgetCategory: 'small_purchase'
  },
  {
    name: 'CoworkingC',
    city: 'Malaga',
    country: 'Spain',
    type: 'coworking',
    dayPassPrice: 22,
    monthlyPrice: 190,
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beach proximity', 'Rooftop terrace', 'Meeting rooms', 'Community events', 'Digital nomad community'],
    bestFor: ['Digital nomads', 'Beach lifestyle', 'Tech community', 'Malaga nomads'],
    hours: '24/7',
    address: 'Soho, Malaga',
    website: 'https://coworkingc.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'The Hat Madrid',
    city: 'Madrid',
    country: 'Spain',
    type: 'hostel',
    dayPassPrice: 8,
    monthlyPrice: 600, // Monthly accommodation in USD/EUR
    rating: 4.7,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Rooftop workspace', 'Bar and restaurant', 'Kitchen', 'Tour desk', 'Social events', 'Central location'],
    bestFor: ['Budget travelers', 'Social nomads', 'Central Madrid location', 'Young travelers'],
    hours: 'Common areas: 24/7',
    address: 'Imperial 9, Madrid',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Trendy hostel with amazing rooftop terrace overlooking Plaza Mayor'
  },
  {
    name: 'Kabul Hostel',
    city: 'Barcelona',
    country: 'Spain',
    type: 'hostel',
    dayPassPrice: 6,
    monthlyPrice: 550,
    rating: 4.5,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Co-working lounge', 'Bar', 'Game room', 'Kitchen', 'Party atmosphere', 'Social events'],
    bestFor: ['Social nomads', 'Party atmosphere', 'Backpackers', 'Budget travelers'],
    hours: 'Co-working lounge: 9:00-22:00',
    address: 'Plaza Real 17, Barcelona',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Very social hostel in Gothic Quarter. Can be noisy at night'
  },
  {
    name: 'Hotel Arts Barcelona Lobby',
    city: 'Barcelona',
    country: 'Spain',
    type: 'hotel',
    dayPassPrice: 20, // Minimum spend
    rating: 4.9,
    wifiSpeed: 150,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Luxury hotel lobby', 'Sea views', 'High-end restaurant', 'Quiet atmosphere', 'Premium service'],
    bestFor: ['Client meetings', 'Executive work', 'Peaceful environment', 'Beachfront location'],
    hours: 'Lobby lounge: 7:00-23:00',
    address: 'Carrer de la Marina 19-21, Barcelona',
    touristArea: true,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 20,
    notes: '5-star hotel with beautiful sea views. Minimum spend for non-guests'
  },
  {
    name: 'Sun & Co Coworking Hostel',
    city: 'Jávea',
    country: 'Spain',
    type: 'hostel',
    dayPassPrice: 10,
    monthlyPrice: 800,
    rating: 4.8,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Dedicated coworking space', 'Pool', 'Community meals', 'Beach proximity', 'Digital nomad community'],
    bestFor: ['Digital nomads', 'Community living', 'Beach work lifestyle', 'Long-term stays'],
    hours: 'Coworking space: 24/7',
    address: 'Calle del Pescador 67, Jávea',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Specifically designed for digital nomads. Community-focused with organized activities'
  }
];

// Add Free Workspaces for Spain
export const spainFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'Biblioteca Nacional de España',
    city: 'Madrid',
    type: 'library',
    description: 'National library of Spain with extensive collections and beautiful reading rooms',
    cost: 'free',
    wifi: true,
    wifiSpeed: 100,
    powerOutlets: true,
    hours: '9:00-21:00 (Mon-Fri), 9:00-14:00 (Sat)',
    amenities: ['National collections', 'Reading rooms', 'Study desks', 'Research materials', 'Historical archives'],
    bestFor: ['Academic research', 'Serious study', 'Historical research', 'Quiet work'],
    noiseLevel: 1,
    address: 'Paseo de Recoletos 20-22, Madrid',
    notes: 'Reader card required for some areas. Beautiful neoclassical building'
  },
  {
    name: 'Parque del Retiro',
    city: 'Madrid',
    type: 'public_space',
    description: 'Beautiful historic park with WiFi hotspots, benches, and cultural landmarks',
    cost: 'free',
    wifi: true,
    wifiSpeed: 60,
    powerOutlets: false,
    hours: '6:00-22:00',
    amenities: ['Historic park', 'Crystal Palace', 'Rose garden', 'Lake', 'Walking paths', 'WiFi hotspots'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Exercise breaks', 'Nature inspiration'],
    noiseLevel: 2,
    address: 'Plaza de la Independencia, Madrid',
    notes: 'WiFi available in certain areas. One of Madrid\'s most beautiful parks'
  },
  {
    name: 'El Corte Inglés Gourmet Experience',
    city: 'Various',
    type: 'mall',
    description: 'Department store food courts with seating and reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 80,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'City views', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Central locations'],
    noiseLevel: 4,
    address: 'Multiple locations across Spain',
    notes: 'Purchase required for food court seating. Rooftop locations often have great views'
  },
  {
    name: 'Las Ramblas',
    city: 'Barcelona',
    type: 'public_space',
    description: 'Famous pedestrian street with benches and occasional WiFi',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Iconic street', 'People watching', 'Street performers', 'Cultural atmosphere', 'Tourist hub'],
    bestFor: ['Creative thinking', 'People watching', 'Short breaks', 'Tourist experience'],
    noiseLevel: 5,
    address: 'Las Ramblas, Barcelona',
    notes: 'Can be very crowded with tourists. Watch for pickpockets'
  },
  {
    name: 'Universidad Complutense de Madrid Libraries',
    city: 'Madrid',
    type: 'university',
    description: 'University libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 110,
    powerOutlets: true,
    hours: '8:00-22:00 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Student atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: 'Ciudad Universitaria, Madrid',
    notes: 'Visitor access available. May need temporary visitor pass'
  }
];

// Add Money Saving Tips for Spain
export const spainMoneySavingTips: MoneySavingTips = {
  general: [
    'Take advantage of "menú del día" for affordable lunch (€10-15 with drink)',
    'Use public libraries for free high-quality workspace',
    'Travel between cities with high-speed trains (book in advance for discounts)',
    'Use local SIM cards (Orange, Vodafone, Movistar) for good data deals',
    'Shop at local markets for fresh, affordable food'
  ],
  touristAreas: [
    'Avoid restaurants on Las Ramblas in Barcelona - prices are 2-3x higher',
    'In Madrid Plaza Mayor, walk a few streets away for better prices',
    'Skip tourist trap flamenco shows in Seville - find authentic tablaos',
    'Use public transport instead of taxis in city centers'
  ],
  nonTouristAreas: [
    'Local "bares de barrio" welcome laptop users during quiet hours',
    'University neighborhoods have cheaper amenities and good WiFi',
    'Smaller cities have significantly lower costs than Madrid/Barcelona',
    'Residential areas offer authentic experiences and better prices'
  ],
  byPreference: {
    coworking: [
      'Ask for "nómada digital" discounts at local coworking spaces',
      'Share monthly membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces in emerging neighborhoods for better value'
    ],
    cafe: [
      'Order "café con leche" instead of specialty drinks',
      'Take advantage of free WiFi with purchase',
      'Visit during "sobremesa" hours (2-5 PM) for quieter times',
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
      'Work during siesta hours (2-5 PM) for quiet time',
      'Some hostels offer free walking tours'
    ],
    hotel: [
      'Hotel lobbies are often free to use (with purchase)',
      'Ask about "tarifa de día" for day use rates',
      'Traditional "paradores" often have beautiful common areas',
      'Loyalty programs offer free amenities'
    ]
  }
};

// Add Coworking Memberships for Spain
export const spainCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "Utopicus Spain Network",
    monthlyPrice: 200,
    coverage: ["Madrid", "Barcelona", "Valencia"],
    dayPassAvailable: true,
    dayPassPrice: 22,
    trialDays: 2,
    benefits: [
      "Access to all Utopicus locations in Spain",
      "Meeting room credits",
      "24/7 access",
      "Community events",
      "Business services",
      "Spanish business network"
    ],
    bestFor: "Digital nomads traveling between major Spanish cities",
    website: "https://utopicus.es"
  },
  {
    name: "Impact Hub Spain Pass",
    monthlyPrice: 220,
    coverage: ["Madrid", "Barcelona", "Seville", "Valencia"],
    dayPassAvailable: true,
    dayPassPrice: 25,
    trialDays: 1,
    benefits: [
      "Access to Impact Hub locations nationwide",
      "Social impact community",
      "Workshops and events",
      "Networking opportunities",
      "Sustainable business focus"
    ],
    bestFor: "Social entrepreneurs and impact-focused nomads in Spain",
    website: "https://impacthub.net/spain"
  },
  {
    name: "Coworking Spain Alliance",
    monthlyPrice: 180,
    coverage: ["Multiple cities across Spain"],
    dayPassAvailable: true,
    dayPassPrice: 20,
    trialDays: 1,
    benefits: [
      "Access to network of independent coworking spaces",
      "Local community connections",
      "Flexible terms",
      "Regional variety",
      "Cultural immersion"
    ],
    bestFor: "Nomads wanting to experience different regions of Spain",
    website: "https://coworkingspain.org"
  }
];

// Updated Spain Nomad Data
export const spainNomadData: NomadData = {
  country: "Spain",
  cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga", "Granada", "Bilbao", "Palma de Mallorca", "San Sebastián", "Santiago de Compostela"],
  
  internet: {
    speed: 90,
    reliability: 8,
    coworkingSpaces: 95,
    freePublicWifiSpots: 7
  },
  
  costs: {
    coworkingMonthly: 200,
    simCardMonthly: 20,
    coffeeShopWork: 10,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 9,
    englishLevel: 6,
    safety: 8,
    nomadGroups: [
      "Digital Nomads Spain Facebook Group",
      "Madrid Remote Workers",
      "Barcelona Digital Nomads",
      "Expats in Spain",
      "Nomad List Spain Community"
    ]
  },
  
  workspaces: spainWorkspaces,
  
  freeWorkspaces: spainFreeWorkspaces,
  
  moneySavingTips: spainMoneySavingTips,
  
  coworkingMemberships: spainCoworkingMemberships,
  
  touristyCities: [
    "Madrid Plaza Mayor",
    "Barcelona Las Ramblas",
    "Barcelona Sagrada Familia area",
    "Seville Cathedral area",
    "Granada Alhambra area",
    "Valencia City of Arts and Sciences",
    "Malaga Picasso Museum area",
    "Palma de Mallorca Cathedral area",
    "San Sebastián Parte Vieja",
    "Toledo City Centre"
  ]
};