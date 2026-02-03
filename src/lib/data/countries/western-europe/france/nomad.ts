// src/lib/data/countries/europe/western-europe/france/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const franceWorkspaces: Workspace[] = [
  {
    name: 'Station F',
    city: 'Paris',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 40,
    monthlyPrice: 550,
    rating: 4.8,
    wifiSpeed: 150,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['World\'s Largest Startup Campus', 'Events & Workshops', 'Restaurants', 'Meeting Rooms', '24/7 Access', 'Startup ecosystem', 'Investor network', 'Incubator programs'],
    bestFor: ['Entrepreneurs', 'Tech Startups', 'Networking', 'Scale-ups', 'French tech scene'],
    hours: '24/7',
    address: '5 Parvis Alan Turing, 75013 Paris',
    website: 'https://stationf.co',
    freeTrialDays: 1,
    membershipDiscount: 0,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'World\'s largest startup campus. Requires application for full access'
  },
  {
    name: 'WeWork République',
    city: 'Paris',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 450,
    rating: 4.6,
    wifiSpeed: 120,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Premium Workspace', 'Meeting Rooms', 'Coffee Bar', 'Community Events', 'Printing', '24/7 Access', 'Global network'],
    bestFor: ['Professionals', 'Freelancers', 'Remote Teams', 'International business'],
    hours: '24/7',
    address: 'Place de la République, 75011 Paris',
    website: 'https://www.wework.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Anticafé',
    city: 'Paris',
    country: 'France',
    type: 'cafe_coworking',
    dayPassPrice: 25, // Hourly model converted to day rate
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Unlimited Coffee/Tea', 'Snacks Included', 'Meeting Rooms', 'Board Games', 'Relaxed Atmosphere', 'Flexible pricing', 'Community vibe'],
    bestFor: ['Students', 'Budget Workers', 'Creative Work', 'Casual meetings'],
    hours: '9:00-22:00',
    address: 'Multiple locations in Paris',
    website: 'https://anticafe.eu',
    touristArea: false,
    // NEW: Budget categorization
    minimumPurchase: 25, // Based on hourly rate
    budgetCategory: 'small_purchase',
    notes: 'Pay-per-hour model with unlimited refreshments. Unique concept'
  },
  {
    name: 'La Cordée',
    city: 'Lyon',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 320,
    rating: 4.4,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Historic Building', 'Garden Terrace', 'Local Community', 'Events', 'Kitchen', 'Lyon business network'],
    bestFor: ['Creative Professionals', 'Sustainable Businesses', 'Community Focus', 'Lyon entrepreneurs'],
    hours: '8:30-19:00',
    address: 'Presqu\'île, Lyon',
    website: 'https://lacordee.lyon',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Le Loft',
    city: 'Marseille',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 280,
    rating: 4.3,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Sea View', 'Roof Terrace', 'Community Events', 'Coffee Bar', 'Relaxed Vibe', 'Mediterranean atmosphere'],
    bestFor: ['Digital Nomads', 'Creatives', 'Mediterranean Lifestyle', 'Marseille experience'],
    hours: '9:00-20:00',
    address: 'Vieux-Port, Marseille',
    website: 'https://leloft-marseille.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Caffeine',
    city: 'Nice',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 22,
    monthlyPrice: 300,
    rating: 4.4,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Modern Design', 'Meeting Rooms', 'Terrace', 'Networking Events', 'Beach Proximity', 'French Riviera location'],
    bestFor: ['Seasonal Workers', 'Coastal Lifestyle', 'Professional Networking', 'Nice business community'],
    hours: '8:30-19:30',
    address: 'Promenade des Anglais area, Nice',
    website: 'https://caffeine-nice.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Le Bureau',
    city: 'Bordeaux',
    country: 'France',
    type: 'coworking',
    dayPassPrice: 23,
    monthlyPrice: 310,
    rating: 4.3,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Wine Bar', 'Garden', 'Business Services', 'Local Network', 'Wine Tastings', 'Bordeaux wine culture'],
    bestFor: ['Wine Industry', 'Business Travelers', 'Local Networking', 'Bordeaux experience'],
    hours: '8:00-20:00',
    address: 'City Center, Bordeaux',
    website: 'https://lebureau-bordeaux.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Starbucks Opera',
    city: 'Paris',
    country: 'France',
    type: 'cafe',
    dayPassPrice: 6, // Minimum purchase/day rate
    rating: 4.2,
    wifiSpeed: 50,
    powerOutlets: 3,
    noiseLevel: 6,
    amenities: ['Reliable Chain', 'Multiple Floors', 'Power Outlets', 'Central Location', 'Tourist Spot', 'Western comforts'],
    bestFor: ['Tourists', 'Quick Work', 'Reliable WiFi', 'Opera district'],
    hours: '7:00-23:00',
    address: 'Boulevard des Capucines, Paris',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 6,
    budgetCategory: 'small_purchase',
    notes: 'Large multi-story Starbucks near Paris Opera. Very touristy'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'Generator Paris',
    city: 'Paris',
    country: 'France',
    type: 'hostel',
    dayPassPrice: 10,
    monthlyPrice: 800, // Monthly accommodation in USD/EUR
    rating: 4.5,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 4,
    amenities: ['Designer hostel', 'Co-working lounge', 'Bar and restaurant', 'Roof terrace', 'Social events', 'Canal Saint-Martin location'],
    bestFor: ['Budget travelers', 'Social nomads', 'Design lovers', 'Young professionals'],
    hours: 'Common areas: 24/7',
    address: '9-11 Place du Colonel Fabien, Paris',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Designer hostel chain with good co-working facilities'
  },
  {
    name: 'St Christopher\'s Inn Gare du Nord',
    city: 'Paris',
    country: 'France',
    type: 'hostel',
    dayPassPrice: 8,
    monthlyPrice: 700,
    rating: 4.3,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Co-working area', 'Bar', 'Kitchen', 'Tour desk', 'Social events', 'Train station proximity'],
    bestFor: ['Backpackers', 'Budget travelers', 'Social atmosphere', 'Transport convenience'],
    hours: 'Co-working area: 8:00-22:00',
    address: '5 Rue de Dunkerque, Paris',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Very social hostel near Gare du Nord. Good for meeting other travelers'
  },
  {
    name: 'Hôtel de Crillon Lobby',
    city: 'Paris',
    country: 'France',
    type: 'hotel',
    dayPassPrice: 25, // Minimum spend
    rating: 4.9,
    wifiSpeed: 160,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Palace hotel', 'Historic building', 'Luxury lounge', 'Premium service', 'Place de la Concorde views'],
    bestFor: ['Client meetings', 'Executive work', 'Luxury experience', 'Special occasions'],
    hours: 'Lobby lounge: 7:00-23:00',
    address: '10 Place de la Concorde, Paris',
    touristArea: true,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 25,
    notes: 'Legendary Paris palace hotel. Minimum spend for non-guests'
  },
  {
    name: 'Le Village Montmartre Hostel',
    city: 'Paris',
    country: 'France',
    type: 'hostel',
    dayPassPrice: 9,
    monthlyPrice: 650,
    rating: 4.6,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Montmartre location', 'Co-working lounge', 'Garden', 'Kitchen', 'Art workshops', 'Sacré-Cœur views'],
    bestFor: ['Art lovers', 'Montmartre experience', 'Creative nomads', 'Budget travelers'],
    hours: 'Co-working lounge: 8:00-21:00',
    address: 'Rue d\'Orsel, Paris',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Artistic hostel in charming Montmartre. Great for creative work'
  }
];

// Add Free Workspaces for France
export const franceFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'Bibliothèque Nationale de France (BnF)',
    city: 'Paris',
    type: 'library',
    description: 'National library of France with modern architecture and extensive collections',
    cost: 'free',
    wifi: true,
    wifiSpeed: 110,
    powerOutlets: true,
    hours: '10:00-20:00 (Tue-Sat), 13:00-19:00 (Sun)',
    amenities: ['National collections', 'Reading rooms', 'Study desks', 'Research materials', 'Modern architecture'],
    bestFor: ['Academic research', 'Serious study', 'Architectural appreciation', 'Quiet work'],
    noiseLevel: 1,
    address: 'Quai François Mauriac, 75013 Paris',
    notes: 'Reader card required for some areas. Four modern towers design'
  },
  {
    name: 'Jardin du Luxembourg',
    city: 'Paris',
    type: 'public_space',
    description: 'Beautiful historic garden with WiFi hotspots, chairs, and quiet corners',
    cost: 'free',
    wifi: true,
    wifiSpeed: 60,
    powerOutlets: false,
    hours: '7:30-21:30 (varies by season)',
    amenities: ['Historic garden', 'Medici Fountain', 'Orangery', 'Walking paths', 'Chairs for reading', 'WiFi hotspots'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Exercise breaks', 'Parisian atmosphere'],
    noiseLevel: 2,
    address: '6th arrondissement, Paris',
    notes: 'Famous Parisian garden. Free green chairs for reading and relaxing'
  },
  {
    name: 'Galeries Lafayette Food Court',
    city: 'Paris',
    type: 'mall',
    description: 'Iconic department store with food court seating and reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 90,
    powerOutlets: true,
    hours: '9:30-20:30 (Mon-Sat), 11:00-20:00 (Sun)',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'Rooftop views', 'Shopping', 'Historic building'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Central location'],
    noiseLevel: 4,
    address: '40 Boulevard Haussmann, Paris',
    notes: 'Purchase required for food court seating. Rooftop has amazing Paris views'
  },
  {
    name: 'Seine River Banks',
    city: 'Paris',
    type: 'public_space',
    description: 'Famous river banks with occasional WiFi and iconic Paris views',
    cost: 'free',
    wifi: true,
    wifiSpeed: 40,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Iconic views', 'River atmosphere', 'People watching', 'Cultural spot', 'Tourist attraction'],
    bestFor: ['Creative thinking', 'People watching', 'Short breaks', 'Inspiration'],
    noiseLevel: 3,
    address: 'Along Seine River, Paris',
    notes: 'WiFi available in certain areas. UNESCO World Heritage site'
  },
  {
    name: 'Université de la Sorbonne Libraries',
    city: 'Paris',
    type: 'university',
    description: 'Historic university libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 100,
    powerOutlets: true,
    hours: '9:00-20:00 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Historic buildings'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: 'Latin Quarter, Paris',
    notes: 'Visitor access available. May need temporary visitor pass. Historic institutions'
  }
];

// Add Money Saving Tips for France
export const franceMoneySavingTips: MoneySavingTips = {
  general: [
    'Take advantage of "formule midi" for affordable lunch (€12-18 with drink)',
    'Use public libraries for free high-quality workspace',
    'Travel with TGV trains booked in advance for best prices',
    'Use Free Mobile, Orange, or SFR SIM cards for good data deals',
    'Shop at local markets and bakeries for affordable, quality food'
  ],
  touristAreas: [
    'Avoid restaurants near Eiffel Tower/Champs-Élysées - prices are 2-3x higher',
    'In Montmartre, explore side streets away from tourist crowds',
    'Skip tourist trap cafes in Saint-Germain-des-Prés',
    'Use public transport (metro, buses) instead of taxis'
  ],
  nonTouristAreas: [
    'Local "boulangeries" welcome laptop users during quiet hours',
    'University neighborhoods (Latin Quarter) have cheaper amenities',
    'Smaller cities have significantly lower costs than Paris',
    'Residential arrondissements offer authentic experiences'
  ],
  byPreference: {
    coworking: [
      'Ask for "télétravailleur" or "nomade digital" discounts',
      'Share monthly membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces in emerging neighborhoods like 11th arrondissement'
    ],
    cafe: [
      'Order "café allongé" instead of Americano',
      'Take advantage of free WiFi with purchase',
      'Visit during afternoon hours (2-5 PM) for quieter times',
      'Choose traditional "cafés" over international chains'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use silent floors for maximum focus',
      'Arrive early to secure best seats',
      'Check for free cultural events and exhibitions'
    ],
    hostel: [
      'Book weekly rates for 15-25% discount',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free museum passes'
    ],
    hotel: [
      'Hotel lobbies are often free to use (with purchase)',
      'Ask about "forfait journée" for day use rates',
      'Traditional "hôtels particuliers" have beautiful common areas',
      'Loyalty programs offer free amenities'
    ]
  }
};

// Add Coworking Memberships for France
export const franceCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "WeWork All Access France",
    monthlyPrice: 320,
    coverage: ["Paris (multiple locations)", "Lyon", "Nice", "Bordeaux"],
    dayPassAvailable: true,
    dayPassPrice: 30,
    trialDays: 1,
    benefits: [
      "Access to all WeWork locations in France",
      "Meeting room credits",
      "24/7 access",
      "High-speed internet",
      "Business address options",
      "Global network access"
    ],
    bestFor: "Digital nomads traveling between French cities",
    website: "https://www.wework.com"
  },
  {
    name: "Anticafé Network Pass",
    monthlyPrice: 180,
    coverage: ["Paris (multiple locations)"],
    dayPassAvailable: true,
    dayPassPrice: 20,
    trialDays: 1,
    benefits: [
      "Access to all Anticafé locations in Paris",
      "Unlimited coffee and snacks",
      "Meeting room access",
      "Flexible hours",
      "Creative community"
    ],
    bestFor: "Students and budget-conscious workers in Paris",
    website: "https://anticafe.eu"
  },
  {
    name: "Réseau Coworking France",
    monthlyPrice: 250,
    coverage: ["Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Lille"],
    dayPassAvailable: true,
    dayPassPrice: 25,
    trialDays: 2,
    benefits: [
      "Access to network of independent coworking spaces across France",
      "Local community connections",
      "Flexible terms",
      "Regional variety",
      "French business network"
    ],
    bestFor: "Nomads wanting to explore different regions of France",
    website: "https://reseaufrancoworking.fr"
  }
];

// Updated France Nomad Data
export const franceNomadData: NomadData = {
  country: "France",
  cities: ["Paris", "Lyon", "Marseille", "Nice", "Toulouse", "Bordeaux", "Lille", "Strasbourg", "Nantes", "Montpellier"],
  
  internet: {
    speed: 85,
    reliability: 8,
    coworkingSpaces: 75,
    freePublicWifiSpots: 7
  },
  
  costs: {
    coworkingMonthly: 380,
    simCardMonthly: 20,
    coffeeShopWork: 5,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 9,
    englishLevel: 6,
    safety: 8,
    nomadGroups: [
      "Digital Nomads France Facebook Group",
      "Paris Remote Workers",
      "Expats in France",
      "French Riviera Digital Nomads",
      "Nomad List France Community"
    ]
  },
  
  workspaces: franceWorkspaces,
  
  freeWorkspaces: franceFreeWorkspaces,
  
  moneySavingTips: franceMoneySavingTips,
  
  coworkingMemberships: franceCoworkingMemberships,
  
  touristyCities: [
    "Paris Champs-Élysées",
    "Paris Eiffel Tower area",
    "Paris Montmartre (Sacré-Cœur)",
    "Paris Latin Quarter (tourist areas)",
    "Nice Promenade des Anglais",
    "Marseille Vieux-Port",
    "Lyon Presqu'île",
    "Bordeaux Place de la Bourse",
    "Strasbourg Grande Île",
    "Mont Saint-Michel"
  ]
};