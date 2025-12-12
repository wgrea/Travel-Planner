// src/lib/data/countries/south-america/brazil/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips } from '$lib/data/nomadData';

export const brazilWorkspaces: Workspace[] = [
  {
    name: 'WeWork',
    city: 'São Paulo',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 18, // ~$18 USD
    monthlyPrice: 160, // ~$160 USD
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths'],
    bestFor: ['Corporate teams', 'Professional services', 'Business networking'],
    hours: '24/7',
    address: 'Multiple locations in São Paulo (Berrini, Faria Lima)',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 5,
    membershipDiscount: 15,
    notes: 'Premium international coworking brand'
  },
  {
    name: 'The Hub',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 14, // ~$14 USD
    monthlyPrice: 120, // ~$120 USD
    rating: 4.5,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Rooftop terrace', 'Cafe', 'Meeting rooms', 'Event space', 'Community events'],
    bestFor: ['Startups', 'Digital nomads', 'Creative professionals'],
    hours: '8:00-20:00',
    address: 'Botafogo, Rio de Janeiro',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    notes: 'Popular with startups and creatives in Rio'
  },
  {
    name: 'Impact Hub',
    city: 'Florianópolis',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 10, // ~$10 USD
    monthlyPrice: 80, // ~$80 USD
    rating: 4.7,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Beach proximity', 'Garden', 'Meeting rooms', 'Kitchen', 'Community focus'],
    bestFor: ['Digital nomads', 'Sustainability-focused work', 'Island lifestyle'],
    hours: '8:00-18:00',
    address: 'Lagoa da Conceição, Florianópolis',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 3,
    notes: 'Sustainability-focused coworking on the island'
  },
  {
    name: 'Campus São Paulo',
    city: 'São Paulo',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 12, // ~$12 USD
    monthlyPrice: 100, // ~$100 USD
    rating: 4.4,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Multiple locations', 'Cafe', 'Event space', 'Networking events', 'Business services'],
    bestFor: ['Entrepreneurs', 'Tech startups', 'Networking'],
    hours: '24/7',
    address: 'Pinheiros and Vila Madalena, São Paulo',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    membershipDiscount: 10,
    notes: 'Entrepreneur-focused coworking with multiple locations'
  },
  {
    name: 'Espaço Faria Lima',
    city: 'São Paulo',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 16, // ~$16 USD
    monthlyPrice: 140, // ~$140 USD
    rating: 4.5,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Luxury facilities', 'Business lounge', 'Meeting rooms', 'Catering', 'Concierge'],
    bestFor: ['Corporate executives', 'Financial services', 'High-end business'],
    hours: '24/7',
    address: 'Faria Lima, São Paulo',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1,
    membershipDiscount: 20,
    notes: 'Luxury coworking in São Paulo\'s financial district'
  },
  {
    name: 'Nex Coworking',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 12, // ~$12 USD
    monthlyPrice: 100, // ~$100 USD
    rating: 4.3,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Modern design', 'Cafe', 'Meeting rooms', 'Event space', 'Community'],
    bestFor: ['Young professionals', 'Tech companies', 'Creative work'],
    hours: '8:00-22:00',
    address: 'Leblon, Rio de Janeiro',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    notes: 'Modern coworking in upscale Leblon neighborhood'
  },
  {
    name: 'Coffee Lab',
    city: 'São Paulo',
    country: 'Brazil',
    type: 'cafe',
    dayPassPrice: 5, // Minimum consumption ~$5 USD
    monthlyPrice: 0,
    rating: 4.2,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty coffee', 'Power outlets', 'Comfortable seating', 'Good atmosphere'],
    bestFor: ['Casual work', 'Coffee lovers', 'Short meetings'],
    hours: '7:00-20:00',
    address: 'Vila Madalena, São Paulo',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Specialty coffee roastery and cafe'
  },
  {
    name: 'Confeitaria Colombo',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    type: 'cafe',
    dayPassPrice: 6, // ~$6 USD minimum
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 50,
    powerOutlets: 2,
    noiseLevel: 4,
    amenities: ['Historic setting', 'WiFi', 'Power outlets', 'Traditional pastries'],
    bestFor: ['Inspirational work', 'Short sessions', 'Cultural experience'],
    hours: '9:00-19:00',
    address: 'Centro, Rio de Janeiro',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Historic 19th century cafe, cultural landmark'
  },
  {
    name: 'Digital Nomads Brazil Hub',
    city: 'Florianópolis',
    country: 'Brazil',
    type: 'coworking',
    dayPassPrice: 8, // ~$8 USD
    monthlyPrice: 70, // ~$70 USD
    rating: 4.6,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beach access', 'Community events', 'Meeting rooms', 'Kitchen', 'Social areas'],
    bestFor: ['Digital nomads', 'Remote workers', 'Community building'],
    hours: '24/7',
    address: 'Campeche, Florianópolis',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 4,
    notes: 'Digital nomad community hub near the beach'
  },
  // ADD HOSTEL/HOTEL EXAMPLES FOR BRAZIL
  {
    name: 'Selina',
    city: 'Multiple cities',
    country: 'Brazil',
    type: 'hostel',
    dayPassPrice: 10,
    monthlyPrice: 400,
    rating: 4.6,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Co-working spaces', 'Community events', 'Restaurant/bar', 'Yoga classes', 'Art workshops'],
    bestFor: ['Digital nomads', 'Creative community', 'Social travelers', 'Work-life balance'],
    hours: '24/7 co-working access',
    address: 'Multiple locations (Rio, Florianópolis, São Paulo)',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    dayPassForNonGuests: true,
    notes: 'International coliving brand with excellent co-working facilities'
  },
  {
    name: 'Fasano Hotel Lobby',
    city: 'São Paulo',
    country: 'Brazil',
    type: 'hotel',
    dayPassPrice: 30,
    monthlyPrice: 1600,
    rating: 4.9,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Luxury lobby', 'Designer furniture', 'Premium service', 'Restaurant', 'Business center'],
    bestFor: ['Luxury work', 'Client meetings', 'Design inspiration', 'Treat yourself'],
    hours: '24/7 lobby access',
    address: 'Jardins, São Paulo',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Luxury design hotel, minimum spend for non-guests'
  },
  {
    name: 'Copa Hostel & Coworking',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    type: 'hostel',
    dayPassPrice: 8,
    monthlyPrice: 240,
    rating: 4.4,
    wifiSpeed: 65,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Copacabana beach location', 'Rooftop terrace', 'Co-working area', 'Social events', 'Kitchen'],
    bestFor: ['Beach lovers', 'Budget nomads', 'Social atmosphere', 'Ocean view work'],
    hours: 'Common areas: 7:00-23:00',
    address: 'Copacabana, Rio de Janeiro',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Beachfront hostel with co-working space'
  },
  {
    name: 'Hotel Unique Rooftop',
    city: 'São Paulo',
    country: 'Brazil',
    type: 'hotel',
    dayPassPrice: 20,
    monthlyPrice: 1200,
    rating: 4.7,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Iconic architecture', 'Rooftop pool', 'Skyline views', 'Restaurant', 'Designer setting'],
    bestFor: ['Creative inspiration', 'Architecture lovers', 'Special meetings', 'Design work'],
    hours: 'Rooftop: 10:00-20:00',
    address: 'Jardins, São Paulo',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Iconic design hotel with stunning rooftop'
  }
];

// ADD FREE WORKSPACES FOR BRAZIL
export const brazilFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'Biblioteca Mário de Andrade',
    city: 'São Paulo',
    type: 'library',
    description: 'Largest public library in São Paulo with reading rooms',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: true,
    hours: '8:00-22:00 (Mon-Fri), 8:00-16:00 (Sat)',
    amenities: ['Extensive collection', 'Reading rooms', 'Study areas', 'AC', 'Historical building'],
    bestFor: ['Academic research', 'Quiet study', 'Reading', 'Focused work'],
    noiseLevel: 1,
    address: 'Rua da Consolação, São Paulo',
    notes: 'Reader registration required, closed Sundays',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Real Gabinete Português de Leitura',
    city: 'Rio de Janeiro',
    type: 'library',
    description: 'Historic Portuguese library with stunning architecture',
    cost: 'free',
    wifi: true,
    wifiSpeed: 40,
    powerOutlets: true,
    hours: '9:00-18:00 (Mon-Fri)',
    amenities: ['Historical architecture', 'Portuguese collection', 'Reading rooms', 'AC', 'Cultural landmark'],
    bestFor: ['Inspirational work', 'Historical research', 'Reading', 'Cultural experience'],
    noiseLevel: 1,
    address: 'Centro, Rio de Janeiro',
    notes: 'Visitor registration required, beautiful historic setting',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Shopping Mall Food Courts',
    city: 'All major cities',
    type: 'mall',
    description: 'Modern shopping mall food courts with WiFi and seating',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 45,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Air conditioning', 'Food variety', 'Comfortable seating', 'Clean facilities', 'Toilets'],
    bestFor: ['Casual work', 'Meetings', 'Escape from heat/rain', 'Quick sessions'],
    noiseLevel: 4,
    notes: 'Purchase required, can be crowded on weekends',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Public Parks & Squares',
    city: 'All cities',
    type: 'park',
    description: 'Public parks, squares, and beaches with seating',
    cost: 'free',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-22:00',
    amenities: ['Green space', 'Fresh air', 'People watching', 'Free', 'Outdoor atmosphere'],
    bestFor: ['Reading', 'Planning', 'Creative thinking', 'Break from indoor work'],
    noiseLevel: 3,
    notes: 'Bring power bank, be mindful of belongings',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Padarias (Bakeries)',
    city: 'All cities',
    type: 'public_space',
    description: 'Traditional Brazilian bakeries with seating areas',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 30,
    powerOutlets: true,
    hours: '6:00-22:00',
    amenities: ['Fresh bread/pastries', 'Coffee', 'Local atmosphere', 'Affordable', 'WiFi'],
    bestFor: ['Casual work', 'Quick sessions', 'Local experience', 'Budget work'],
    noiseLevel: 4,
    notes: 'Purchase required, authentic Brazilian experience',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Public University Libraries',
    city: 'University cities',
    type: 'university',
    description: 'University libraries sometimes open to visitors',
    cost: 'free',
    wifi: true,
    wifiSpeed: 60,
    powerOutlets: true,
    hours: '8:00-22:00',
    amenities: ['Academic resources', 'Quiet environment', 'Study areas', 'AC', 'Computer access'],
    bestFor: ['Academic work', 'Research', 'Quiet study', 'Student atmosphere'],
    noiseLevel: 1,
    notes: 'May require visitor permission, check individual policies',
    budgetCategory: 'zero_spend'
  }
];

// ADD MONEY SAVING TIPS FOR BRAZIL
export const brazilMoneySavingTips: MoneySavingTips = {
  general: [
    'Use Uber/99 instead of regular taxis (30-50% cheaper)',
    'Eat at local "prato feito" restaurants or "por quilo" buffets (15-30 BRL per meal)',
    'Buy SIM cards from Vivo/Claro shops, not airports or hotels',
    'Stay in pousadas (guesthouses) instead of international hotels',
    'Use metro systems in São Paulo and Rio (cheaper than taxis)',
    'Shop at local markets (feiras) instead of supermarkets',
    'Drink local beer (chopp) instead of imported',
    'Travel by bus for medium/long distances instead of flights'
  ],
  touristAreas: [
    'Avoid restaurants in Copacabana/Ipanema beachfront in Rio',
    'In São Paulo, eat away from Avenida Paulista restaurants',
    'Skip overpriced tourist restaurants in Pelourinho (Salvador)',
    'Bargain at tourist markets (start at 50% of asking price)',
    'Avoid buying souvenirs from beach vendors or airport shops'
  ],
  nonTouristAreas: [
    'Local padarias (bakeries) welcome laptop users and are affordable',
    'Public libraries have good facilities and are free',
    'University areas have cheaper food and accommodations',
    'Markets have amazing street food for 5-10 BRL',
    'Family-run pousadas offer best value and local experience'
  ],
  byPreference: {
    coworking: [
      'Ask for startup/freelancer discount (10-20% off)',
      'Share monthly membership with another person',
      'Use free trial days across different providers',
      'Look for local Brazilian chains instead of international brands',
      'Pay in Brazilian Real instead of USD for better rates'
    ],
    cafe: [
      'Order "cafézinho" (small coffee) instead of espresso drinks',
      'Visit during off-peak hours (2-5 PM)',
      'Buy "pão de queijo" with coffee for affordable snack',
      'Choose local padarias over international chains',
      'Some cafes offer free WiFi with purchase'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Arrive early for best seating',
      'Check holiday schedules (many close Sundays)',
      'Some libraries require registration/membership',
      'University libraries often have best facilities'
    ],
    hostel: [
      'Book coliving spaces with workspace included',
      'Monthly rates are 40-50% cheaper than daily',
      'Use common areas during quieter hours (9 AM - 12 PM)',
      'Some hostels have partnerships with coworking spaces',
      'Look for "workation" packages in Florianópolis'
    ],
    hotel: [
      'Business hotels have best lobby workspaces',
      'Design hotels have inspiring environments',
      'Ask about day passes to hotel facilities',
      'Use hotel restaurants during non-meal times',
      'International chains often have reliable facilities'
    ]
  }
};

// ADD COWORKING MEMBERSHIPS FOR BRAZIL
export const brazilCoworkingMemberships = [
  {
    name: "WeWork All Access Brazil",
    monthlyPrice: 160,
    coverage: ["São Paulo", "Rio de Janeiro", "Belo Horizonte"],
    dayPassAvailable: true,
    dayPassPrice: 18,
    trialDays: 7,
    benefits: [
      "Access to all WeWork locations in Brazil",
      "Meeting room credits",
      "Business address service",
      "Community events",
      "24/7 access",
      "Networking opportunities"
    ],
    bestFor: "Nomads traveling between multiple Brazilian cities",
    website: "https://www.wework.com"
  },
  {
    name: "Campus Brazil Network",
    monthlyPrice: 100,
    coverage: ["São Paulo", "Rio de Janeiro"],
    dayPassAvailable: true,
    dayPassPrice: 12,
    trialDays: 3,
    benefits: [
      "Access to all Campus locations",
      "Startup community access",
      "Mentorship sessions",
      "Investor connects",
      "Events and workshops"
    ],
    bestFor: "Entrepreneurs and startup-focused nomads in Brazil",
    website: "https://campus.com.br"
  },
  {
    name: "Impact Hub Brazil Network",
    monthlyPrice: 80,
    coverage: ["Florianópolis", "São Paulo", "Rio de Janeiro"],
    dayPassAvailable: true,
    dayPassPrice: 10,
    trialDays: 3,
    benefits: [
      "Access to Impact Hub network",
      "Sustainability community",
      "Social impact events",
      "Meeting room credits",
      "Global network access"
    ],
    bestFor: "Sustainability-focused nomads and social entrepreneurs",
    website: "https://impacthub.net"
  }
];

// UPDATED BRAZIL NOMAD DATA
export const brazilNomadData: NomadData = {
  country: "Brazil",
  cities: ["Rio de Janeiro", "São Paulo", "Florianópolis", "Salvador", "Belo Horizonte", "Curitiba", "Porto Alegre", "Fortaleza", "Recife"],
  
  internet: {
    speed: 75,
    reliability: 7,
    coworkingSpaces: 65,
    freePublicWifiSpots: 4
  },
  
  costs: {
    coworkingMonthly: 110,
    simCardMonthly: 8,
    coffeeShopWork: 5,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 6,
    englishLevel: 5,
    safety: 6,
    nomadGroups: [
      "Digital Nomads Brazil Facebook Group",
      "Rio de Janeiro Digital Nomads",
      "São Paulo Remote Workers",
      "Florianópolis Digital Nomads Community",
      "Brazil Remote Workers Slack"
    ]
  },
  
  workspaces: brazilWorkspaces,
  
  freeWorkspaces: brazilFreeWorkspaces,
  
  moneySavingTips: brazilMoneySavingTips,
  
  coworkingMemberships: brazilCoworkingMemberships,
  
  touristyCities: [
    "Copacabana/Ipanema (Rio)",
    "Centro Histórico (Salvador)",
    "Avenida Paulista (São Paulo)",
    "Lagoa da Conceição (Florianópolis)",
    "Pelourinho (Salvador)",
    "Barra da Tijuca (Rio)",
    "Jardins (São Paulo)",
    "Praia do Forte (Bahia)",
    "Búzios/Arraial do Cabo"
  ]
};