// src/lib/data/countries/south-america/argentina/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

// Updated Argentina workspaces with budget categories
export const argentinaWorkspaces: Workspace[] = [
  {
    name: 'Urban Station',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'coworking',
    dayPassPrice: 15, // USD
    monthlyPrice: 180, // USD
    rating: 4.5,
    wifiSpeed: 85,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths'],
    bestFor: ['Professional meetings', 'Team work', 'Networking', 'Startups'],
    hours: '24/7',
    address: 'Multiple locations in Palermo and Microcentro',
    freeTrialDays: 1,
    membershipDiscount: 15,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment' // Coworking = direct payment
  },
  {
    name: 'La Maquinita Co.',
    city: 'Buenos Aires', 
    country: 'Argentina',
    type: 'coworking',
    dayPassPrice: 12,
    monthlyPrice: 150,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['24/7 Access', 'Event Space', 'Kitchen', 'Phone Booths', 'Lockers', 'Meeting Rooms'],
    bestFor: ['Focused work', 'Long hours', 'Privacy', 'Remote workers'],
    hours: '24/7',
    address: 'Multiple locations in Buenos Aires',
    freeTrialDays: 2,
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Café Martínez',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'cafe',
    dayPassPrice: 5, // Minimum purchase/day rate
    rating: 4.2,
    wifiSpeed: 45,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Pastries', 'Power Outlets', 'WiFi', 'Outdoor Seating'],
    bestFor: ['Casual work', 'Coffee breaks', 'Quick sessions', 'Meetings'],
    hours: '7:00-22:00',
    address: 'Multiple locations throughout Buenos Aires',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 5,
    budgetCategory: 'small_purchase' // Cafe = small purchase
  },
  {
    name: 'Starbucks Reserve',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'cafe',
    dayPassPrice: 8,
    rating: 4.0,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 5,
    amenities: ['Premium Coffee', 'Comfortable Seating', 'Power Outlets', 'WiFi', 'Food Menu'],
    bestFor: ['Reliable WiFi', 'Consistent environment', 'Group work', 'Western amenities'],
    hours: '6:30-23:00',
    address: 'Alto Palermo Shopping Center',
    touristArea: true,
    minimumPurchase: 8,
    budgetCategory: 'small_purchase'
  },
  {
    name: 'LAB Tostadores de Café',
    city: 'Cordoba',
    country: 'Argentina',
    type: 'cafe',
    dayPassPrice: 4,
    rating: 4.4,
    wifiSpeed: 40,
    powerOutlets: 2,
    noiseLevel: 3,
    amenities: ['Artisan Coffee', 'Local Atmosphere', 'Power Outlets', 'WiFi', 'Argentine Pastries'],
    bestFor: ['Focused work', 'Coffee enthusiasts', 'Local experience', 'Creative work'],
    hours: '8:00-20:00',
    address: 'Güemes neighborhood, Cordoba',
    touristArea: false,
    minimumPurchase: 4,
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Casa Saltshaker',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'cafe_coworking',
    dayPassPrice: 10,
    monthlyPrice: 120,
    rating: 4.6,
    wifiSpeed: 70,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Specialty Coffee', 'Garden Area', 'Meeting Rooms', 'Kitchen', 'Community Events'],
    bestFor: ['Social work', 'Foodies', 'Community building', 'Creative professionals'],
    hours: '8:00-20:00',
    address: 'Palermo Hollywood, Buenos Aires',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'Portal del Sur Hostel',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'hostel',
    dayPassPrice: 5,
    monthlyPrice: 450, // Monthly accommodation in USD
    rating: 4.3,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Co-working lounge', 'Rooftop terrace', 'Kitchen', '24-hour reception', 'Social events'],
    bestFor: ['Budget travelers', 'Social nomads', 'Short-term stays', 'Community'],
    hours: 'Co-working lounge: 8:00-23:00',
    address: 'Hipólito Yrigoyen 855, Buenos Aires',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Free workspace included with stay. Day pass $5 USD for non-guests.'
  },
  {
    name: 'Art Factory Hostel',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'hostel',
    dayPassPrice: 3,
    monthlyPrice: 380,
    rating: 4.5,
    wifiSpeed: 65,
    powerOutlets: 5,
    noiseLevel: 4,
    amenities: ['Art-themed co-working space', 'Patio', 'Kitchen', 'Art exhibitions', 'Live music nights'],
    bestFor: ['Creative professionals', 'Artists', 'Social butterflies', 'Budget-conscious nomads'],
    hours: 'Co-working space: 24/7',
    address: 'Lima 1139, Buenos Aires',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Popular with artists and creatives. Can be social/noisy during events.'
  },
  {
    name: 'Alvear Palace Hotel Lobby',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'hotel',
    dayPassPrice: 15, // Minimum spend in cafe/restaurant
    rating: 4.8,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Luxurious lobby', 'High-end cafe', 'Quiet atmosphere', 'Professional service', 'Plush seating'],
    bestFor: ['Client meetings', 'Executive work', 'Peaceful environment', 'Treat yourself'],
    hours: 'Lobby cafe: 7:00-22:00',
    address: 'Ayacucho 2027, Buenos Aires',
    touristArea: false,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 15,
    notes: 'Luxury hotel lobby. Minimum spend required for non-guests.'
  },
  {
    name: 'Mendoza Wine Hostel',
    city: 'Mendoza',
    country: 'Argentina',
    type: 'hostel',
    dayPassPrice: 4,
    monthlyPrice: 320,
    rating: 4.4,
    wifiSpeed: 55,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Wine-themed lounge', 'Garden workspace', 'Wine tastings', 'Kitchen', 'BBQ area'],
    bestFor: ['Wine enthusiasts', 'Relaxed work', 'Nature lovers', 'Food and wine networking'],
    hours: 'Garden workspace: 8:00-20:00',
    address: 'Mendoza city center',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Beautiful garden workspace surrounded by vineyards. Peaceful atmosphere.'
  }
];

// Add Free Workspaces for Argentina
export const argentinaFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'Biblioteca Nacional Mariano Moreno',
    city: 'Buenos Aires',
    type: 'library',
    description: 'National library with beautiful architecture and quiet reading rooms',
    cost: 'free',
    wifi: true,
    wifiSpeed: 40,
    powerOutlets: true,
    hours: '8:00-21:00 (Mon-Fri), 9:00-14:00 (Sat)',
    amenities: ['Historical collection', 'Reading rooms', 'Research materials', 'AC', 'Study carrels'],
    bestFor: ['Academic research', 'Quiet study', 'Historical work', 'Deep focus'],
    noiseLevel: 1,
    address: 'Agüero 2502, Buenos Aires',
    notes: 'Bring ID for registration. Beautiful building with history.'
  },
  {
    name: 'Centro Cultural Recoleta',
    city: 'Buenos Aires',
    type: 'public_space',
    description: 'Cultural center with free WiFi, exhibitions, and public seating areas',
    cost: 'free',
    wifi: true,
    wifiSpeed: 35,
    powerOutlets: true,
    hours: '10:00-20:00 (Tue-Fri), 12:00-20:00 (Sat-Sun)',
    amenities: ['Art exhibitions', 'Cultural events', 'Cafe area', 'Garden', 'Restrooms'],
    bestFor: ['Creative inspiration', 'Casual work', 'Cultural breaks', 'Art lovers'],
    noiseLevel: 3,
    address: 'Junín 1930, Buenos Aires',
    notes: 'Great for creative work. Sometimes busy with events.'
  },
  {
    name: 'Patio Bullrich Food Court',
    city: 'Buenos Aires',
    type: 'mall',
    description: 'Upscale shopping mall with food court seating and free WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 45,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Food options', 'Comfortable seating', 'Air conditioning', 'People watching'],
    bestFor: ['Casual work', 'Lunch meetings', 'Shopping breaks', 'Air-conditioned environment'],
    noiseLevel: 4,
    address: 'Av. del Libertador 750, Buenos Aires',
    notes: 'Purchase required for seating. Excellent people watching.'
  },
  {
    name: 'Bosques de Palermo',
    city: 'Buenos Aires',
    type: 'park',
    description: 'Large urban park with lakes, gardens, and occasional WiFi hotspots',
    cost: 'free',
    wifi: false, // Intermittent WiFi
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Nature', 'Lakes', 'Exercise areas', 'Benches', 'Rose Garden'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Exercise breaks'],
    noiseLevel: 2,
    address: 'Av. Libertador & Av. Sarmiento, Buenos Aires',
    notes: 'Best in spring/autumn. Use mobile hotspot. Beautiful rose garden.'
  },
  {
    name: 'Universidad de Buenos Aires Libraries',
    city: 'Buenos Aires',
    type: 'university',
    description: 'Various university libraries open to public with academic resources',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: true,
    hours: 'Varies by faculty (typically 8:00-20:00)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials'],
    bestFor: ['Academic work', 'Research', 'Student networking', 'Serious study'],
    noiseLevel: 1,
    address: 'Multiple faculties throughout Buenos Aires',
    notes: 'Check specific faculty hours. May need temporary visitor pass.'
  }
];

// Add Money Saving Tips for Argentina
export const argentinaMoneySavingTips: MoneySavingTips = {
  general: [
    'Use unofficial exchange rate (blue dollar) for better USD to ARS conversion',
    'Take public transport (Subte, Colectivos) instead of taxis',
    'Buy SIM cards from Claro/Movistar shops instead of airports',
    'Eat at local parrillas and empanada shops for affordable meals',
    'Use UBER or Cabify instead of regular taxis for better pricing'
  ],
  touristAreas: [
    'Avoid Puerto Madero restaurants - prices are 3x higher',
    'In Palermo Soho, walk a few blocks away from main streets',
    'Skip tourist trap steak houses in San Telmo',
    'Use public transport to Recoleta instead of taxis'
  ],
  nonTouristAreas: [
    'Local cafes in residential areas welcome laptop users',
    'University neighborhoods (like Belgrano) have cheaper amenities',
    'Markets like Feria de Mataderos have authentic, affordable food',
    'Provincial cities have significantly lower costs than Buenos Aires'
  ],
  byPreference: {
    coworking: [
      'Ask for "residente temporario" discount (temporary resident)',
      'Share monthly membership with another nomad',
      'Use free trial days across different coworking chains',
      'Look for spaces outside Microcentro (cheaper rates)'
    ],
    cafe: [
      'Order "café con leche mediano" instead of specialty drinks',
      'Tip ARS 100-200 if staying 3+ hours',
      'Visit during "hora de la merienda" (4-7 PM) for quieter times',
      'Choose local "confiterías" over international chains'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use silent floors for maximum focus',
      'Arrive early to secure best seats',
      'Check holiday schedules (many close during summer)'
    ],
    hostel: [
      'Book weekly rates for 20-30% discount',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free bike rentals for transport'
    ],
    hotel: [
      'Business hotels have best lobby workspaces',
      'Ask about "day use" rates for workspace access',
      'Small boutique hotels often have cozy work corners',
      'Loyalty programs sometimes include business center access'
    ]
  }
};

// Add Coworking Memberships for Argentina
export const argentinaCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "Urban Station Network",
    monthlyPrice: 150,
    coverage: ["Buenos Aires", "Cordoba", "Mendoza"],
    dayPassAvailable: true,
    dayPassPrice: 12,
    trialDays: 2,
    benefits: [
      "Access to all Urban Station locations nationwide",
      "Meeting room credits",
      "Community events",
      "Printing services",
      "Mail handling"
    ],
    bestFor: "Nomads traveling between major Argentine cities",
    website: "https://urbanstation.com.ar"
  },
  {
    name: "La Maquinita All Access",
    monthlyPrice: 130,
    coverage: ["Buenos Aires"],
    dayPassAvailable: true,
    dayPassPrice: 10,
    trialDays: 3,
    benefits: [
      "Access to all La Maquinita locations",
      "24/7 access",
      "Phone booth usage",
      "Lockers",
      "Kitchen facilities"
    ],
    bestFor: "Nomads based primarily in Buenos Aires",
    website: "https://lamaquinita.co"
  }
];

// Updated Argentina Nomad Data
export const argentinaNomadData: NomadData = {
  country: "Argentina",
  cities: ["Buenos Aires", "Cordoba", "Mendoza", "Rosario", "Bariloche"],
  
  internet: {
    speed: 55,
    reliability: 6,
    coworkingSpaces: 60,
    freePublicWifiSpots: 4
  },
  
  costs: {
    coworkingMonthly: 90,
    simCardMonthly: 8,
    coffeeShopWork: 6,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 6,
    englishLevel: 4,
    safety: 7,
    nomadGroups: [
      "Digital Nomads Buenos Aires Facebook Group",
      "Expats in Argentina",
      "Remote Workers Argentina",
      "BA Nomads Meetup Group"
    ]
  },
  
  workspaces: argentinaWorkspaces,
  
  freeWorkspaces: argentinaFreeWorkspaces,
  
  moneySavingTips: argentinaMoneySavingTips,
  
  coworkingMemberships: argentinaCoworkingMemberships,
  
  touristyCities: [
    "Buenos Aires Microcentro",
    "Puerto Madero",
    "Palermo Soho",
    "Recoleta",
    "San Telmo",
    "La Boca",
    "Caminito",
    "Mendoza City Center",
    "Bariloche City Center",
    "Villa Carlos Paz (Cordoba)"
  ]
};