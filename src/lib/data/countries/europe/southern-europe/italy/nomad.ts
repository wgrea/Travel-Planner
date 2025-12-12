// src/lib/data/countries/europe/southern-europe/italy/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const italyWorkspaces: Workspace[] = [
  {
    name: 'Impact Hub Rome',
    city: 'Rome',
    country: 'Italy',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 350,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Community Events', 'Kitchen', 'Terrace', 'Social impact focus'],
    bestFor: ['Networking', 'Social Atmosphere', 'Startups', 'Social entrepreneurs', 'Rome business community'],
    hours: '9:00-19:00',
    address: 'Centro Storico, Rome',
    website: 'https://roma.impacthub.net',
    freeTrialDays: 1,
    membershipDiscount: 10,
    touristArea: true,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Social impact focused coworking in historic Rome center'
  },
  {
    name: 'Copernico Milan',
    city: 'Milan',
    country: 'Italy',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 450,
    rating: 4.7,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Fiber Optic', 'Business Lounge', 'Event Space', 'Café', 'Printing Services', '24/7 Access', 'Premium facilities'],
    bestFor: ['Professionals', 'Business Meetings', 'Corporate Environment', 'Milan fashion/design', 'Italian business'],
    hours: '24/7',
    address: 'Porta Nuova, Milan',
    website: 'https://copernicomilano.it',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'La Raccolta Firenze',
    city: 'Florence',
    country: 'Italy',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 280,
    rating: 4.4,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Historic Building', 'Garden', 'Coffee Service', 'Local Community', 'Art Exhibitions', 'Florentine atmosphere'],
    bestFor: ['Creatives', 'Artists', 'Cultural Experience', 'Art history lovers', 'Florence experience'],
    hours: '9:00-18:00',
    address: 'Oltrarno, Florence',
    website: 'https://laraccoltafirenze.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Starbucks Reserve Milano',
    city: 'Milan',
    country: 'Italy',
    type: 'cafe',
    dayPassPrice: 6, // Minimum purchase/day rate
    rating: 4.6,
    wifiSpeed: 50,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['Premium Coffee', 'Historic Building', 'Multiple Floors', 'Power Outlets', 'WiFi', 'Tourist attraction'],
    bestFor: ['Coffee Lovers', 'Tourist Spot', 'Quick Work Sessions', 'Milan landmark'],
    hours: '7:00-23:00',
    address: 'Piazza Cordusio, Milan',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 6,
    budgetCategory: 'small_purchase',
    notes: 'World\'s first Starbucks Reserve in Europe. Historic former post office building'
  },
  {
    name: 'Bologna Coworking',
    city: 'Bologna',
    country: 'Italy',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 250,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Student Community', 'Study Rooms', 'Printing', 'Kitchen', 'University Network', 'Academic atmosphere'],
    bestFor: ['Students', 'Academics', 'Budget Workers', 'University collaboration', 'Bologna student life'],
    hours: '8:00-22:00',
    address: 'University District, Bologna',
    website: 'https://bolognacoworking.it',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Digital Nomads Naples',
    city: 'Naples',
    country: 'Italy',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 200,
    rating: 4.2,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Sea View', 'Local Community', 'Coffee Bar', 'Relaxed Atmosphere', 'Events', 'Neapolitan culture'],
    bestFor: ['Budget Nomads', 'Slow Travelers', 'Authentic Italian Experience', 'Naples lifestyle'],
    hours: '9:00-19:00',
    address: 'Vomero, Naples',
    website: 'https://digitalnomadsnaples.it',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Bar Centrale',
    city: 'Rome',
    country: 'Italy',
    type: 'cafe',
    dayPassPrice: 5, // Minimum purchase/day rate
    rating: 4.1,
    wifiSpeed: 40,
    powerOutlets: 2,
    noiseLevel: 6,
    amenities: ['Traditional Cafe', 'Local Atmosphere', 'Affordable Coffee', 'WiFi', 'Central Location', 'Roman experience'],
    bestFor: ['Casual Work', 'People Watching', 'Short Sessions', 'Termini station convenience'],
    hours: '6:00-22:00',
    address: 'Termini Station Area, Rome',
    touristArea: true,
    minimumPurchase: 5,
    budgetCategory: 'small_purchase',
    notes: 'Traditional Roman bar near main train station. Authentic but busy'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'Generator Rome Hostel',
    city: 'Rome',
    country: 'Italy',
    type: 'hostel',
    dayPassPrice: 8,
    monthlyPrice: 600, // Monthly accommodation in USD/EUR
    rating: 4.5,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Co-working lounge', 'Rooftop bar', 'Kitchen', 'Tour desk', 'Social events', 'Design hostel'],
    bestFor: ['Budget travelers', 'Social nomads', 'Design lovers', 'Young professionals'],
    hours: 'Common areas: 24/7',
    address: 'Via Principe Amedeo 257, Rome',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Designer hostel chain with good co-working facilities near Termini'
  },
  {
    name: 'YellowSquare Rome Hostel',
    city: 'Rome',
    country: 'Italy',
    type: 'hostel',
    dayPassPrice: 7,
    monthlyPrice: 550,
    rating: 4.6,
    wifiSpeed: 80,
    powerOutlets: 5,
    noiseLevel: 4,
    amenities: ['Co-working space', 'Bar and restaurant', 'Kitchen', 'Social events', 'Tour desk', 'Very social atmosphere'],
    bestFor: ['Social nomads', 'Party atmosphere', 'Young travelers', 'Meeting people'],
    hours: 'Co-working space: 8:00-22:00',
    address: 'Via Palestro 51, Rome',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Very social hostel with dedicated co-working space. Can be noisy at night'
  },
  {
    name: 'Hotel Excelsior Venice Lido Lobby',
    city: 'Venice',
    country: 'Italy',
    type: 'hotel',
    dayPassPrice: 20, // Minimum spend
    rating: 4.8,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Historic hotel', 'Beachfront location', 'Quiet lounge', 'Premium service', 'Art deco style'],
    bestFor: ['Client meetings', 'Executive work', 'Peaceful environment', 'Venice Lido experience'],
    hours: 'Lobby lounge: 7:00-23:00',
    address: 'Lungomare Marconi 41, Lido di Venezia',
    touristArea: true,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 20,
    notes: 'Historic luxury hotel on Venice Lido. Minimum spend for non-guests'
  },
  {
    name: 'Ostello Bello Lake Como',
    city: 'Como',
    country: 'Italy',
    type: 'hostel',
    dayPassPrice: 9,
    monthlyPrice: 700,
    rating: 4.7,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Lake views', 'Co-working lounge', 'Kitchen', 'Bar', 'Cultural events', 'Boat tours'],
    bestFor: ['Lake lovers', 'Creative nomads', 'Nature inspiration', 'Lake Como experience'],
    hours: 'Co-working lounge: 8:00-21:00',
    address: 'Via Borgovico 132, Como',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Beautiful hostel with lake views and excellent co-working space'
  }
];

// Add Free Workspaces for Italy
export const italyFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'Biblioteca Angelica',
    city: 'Rome',
    type: 'library',
    description: 'Historic public library with beautiful reading rooms and academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 65,
    powerOutlets: true,
    hours: '8:30-18:30 (Mon-Fri), 8:30-13:30 (Sat)',
    amenities: ['Historic collections', 'Reading rooms', 'Study desks', 'Research materials', 'Baroque architecture'],
    bestFor: ['Academic research', 'Serious study', 'Historical research', 'Quiet work'],
    noiseLevel: 1,
    address: 'Piazza di Sant\'Agostino 8, Rome',
    notes: 'One of Italy\'s oldest public libraries. Beautiful historic building'
  },
  {
    name: 'Villa Borghese',
    city: 'Rome',
    type: 'public_space',
    description: 'Large historic park with WiFi hotspots, benches, and beautiful gardens',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: false,
    hours: 'Sunrise to sunset',
    amenities: ['Historic park', 'Gardens', 'Walking paths', 'Benches', 'WiFi hotspots', 'Galleria Borghese nearby'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Nature inspiration', 'Roman atmosphere'],
    noiseLevel: 2,
    address: 'Piazzale Napoleone I, Rome',
    notes: 'Third largest public park in Rome. WiFi available in certain areas'
  },
  {
    name: 'La Rinascente Food Court',
    city: 'Milan',
    type: 'mall',
    description: 'Iconic department store with rooftop food court and Duomo views',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 75,
    powerOutlets: true,
    hours: '9:30-21:00',
    amenities: ['Food options', 'Rooftop views', 'Comfortable seating', 'Duomo views', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Milan Duomo views', 'Central location'],
    noiseLevel: 4,
    address: 'Piazza del Duomo, Milan',
    notes: 'Purchase required for food court seating. Amazing rooftop views of Milan Duomo'
  },
  {
    name: 'Piazza San Marco',
    city: 'Venice',
    type: 'public_space',
    description: 'Famous square with cafes and occasional WiFi (expensive to sit at cafes)',
    cost: 'free',
    wifi: true,
    wifiSpeed: 40,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Iconic square', 'Basilica views', 'People watching', 'Cultural events', 'Historical significance'],
    bestFor: ['Creative thinking', 'People watching', 'Short breaks', 'Venice experience'],
    noiseLevel: 5,
    address: 'Piazza San Marco, Venice',
    notes: 'Free to stand/walk. Sitting at cafes is very expensive. Use mobile hotspot'
  },
  {
    name: 'Università di Bologna Libraries',
    city: 'Bologna',
    type: 'university',
    description: 'Oldest university in the world with libraries open to public',
    cost: 'free',
    wifi: true,
    wifiSpeed: 70,
    powerOutlets: true,
    hours: '8:30-19:30 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Historic atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: 'Via Zamboni, Bologna',
    notes: 'Visitor access available. World\'s oldest university (founded 1088)'
  }
];

// Add Money Saving Tips for Italy
export const italyMoneySavingTips: MoneySavingTips = {
  general: [
    'Take advantage of "aperitivo" (usually 6-9 PM) for affordable drinks and snacks',
    'Use public libraries for free high-quality workspace',
    'Travel with regional trains instead of high-speed trains for lower costs',
    'Use TIM, Vodafone, or WindTre SIM cards for good data deals',
    'Shop at local markets and bakeries for affordable, quality food'
  ],
  touristAreas: [
    'Avoid restaurants near major attractions (Colosseum, Duomo) - prices are 2-3x higher',
    'In Venice, eat away from San Marco and Rialto Bridge',
    'Skip tourist trap restaurants in Rome\'s Trastevere main streets',
    'Use public transport instead of taxis in city centers'
  ],
  nonTouristAreas: [
    'Local "bars" welcome laptop users during quiet hours (not meal times)',
    'University neighborhoods have cheaper food and amenities',
    'Smaller towns have significantly lower costs than major cities',
    'Residential neighborhoods offer authentic experiences'
  ],
  byPreference: {
    coworking: [
      'Ask for "nomade digitale" (digital nomad) discounts',
      'Share monthly membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces in emerging neighborhoods'
    ],
    cafe: [
      'Order at the bar (not table service) for lower prices',
      'Take advantage of free WiFi with purchase',
      'Visit during afternoon hours (3-6 PM) for quieter times',
      'Choose local cafes over international chains'
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
      'Some hostels offer free walking tours'
    ],
    hotel: [
      'Hotel lobbies are often free to use (with purchase)',
      'Ask about "tariffa giornaliera" for day use rates',
      'Traditional "palazzi" often have beautiful courtyards',
      'Loyalty programs offer free amenities'
    ]
  }
};

// Add Coworking Memberships for Italy
export const italyCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "Impact Hub Italy Network",
    monthlyPrice: 300,
    coverage: ["Rome", "Milan", "Turin", "Florence"],
    dayPassAvailable: true,
    dayPassPrice: 22,
    trialDays: 1,
    benefits: [
      "Access to all Impact Hub locations in Italy",
      "Meeting room credits",
      "Community events",
      "Networking opportunities",
      "Social impact focus",
      "Italian business network"
    ],
    bestFor: "Social entrepreneurs and digital nomads traveling between Italian cities",
    website: "https://impacthub.net/italy"
  },
  {
    name: "Copernico Italia Pass",
    monthlyPrice: 380,
    coverage: ["Milan", "Rome", "Turin"],
    dayPassAvailable: true,
    dayPassPrice: 30,
    trialDays: 1,
    benefits: [
      "Access to Copernico locations",
      "Premium business facilities",
      "24/7 access",
      "Event space access",
      "Italian corporate network",
      "Design-focused workspaces"
    ],
    bestFor: "Business professionals and corporate nomads in Italy",
    website: "https://copernico.it"
  },
  {
    name: "Italian Coworking Alliance",
    monthlyPrice: 250,
    coverage: ["Multiple cities across Italy"],
    dayPassAvailable: true,
    dayPassPrice: 20,
    trialDays: 2,
    benefits: [
      "Access to network of independent coworking spaces",
      "Local community connections",
      "Flexible terms",
      "Regional variety",
      "Cultural immersion",
      "Italian lifestyle integration"
    ],
    bestFor: "Nomads wanting to explore different regions of Italy",
    website: "https://italiancoworking.org"
  }
];

// Updated Italy Nomad Data
export const italyNomadData: NomadData = {
  country: "Italy",
  cities: ["Rome", "Milan", "Florence", "Naples", "Bologna", "Turin", "Venice", "Palermo", "Genoa", "Verona", "Como", "Siena"],
  
  internet: {
    speed: 65,
    reliability: 7,
    coworkingSpaces: 55,
    freePublicWifiSpots: 5
  },
  
  costs: {
    coworkingMonthly: 320,
    simCardMonthly: 15,
    coffeeShopWork: 5,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 8,
    englishLevel: 5,
    safety: 7,
    nomadGroups: [
      "Digital Nomads Italy Facebook Group",
      "Rome Remote Workers",
      "Expats in Italy",
      "Milan Digital Nomads",
      "Nomad List Italy Community",
      "Italian Digital Nomads Slack"
    ]
  },
  
  workspaces: italyWorkspaces,
  
  freeWorkspaces: italyFreeWorkspaces,
  
  moneySavingTips: italyMoneySavingTips,
  
  coworkingMemberships: italyCoworkingMemberships,
  
  touristyCities: [
    "Rome Colosseum area",
    "Rome Vatican City area",
    "Rome Trevi Fountain area",
    "Milan Duomo square",
    "Florence Piazza del Duomo",
    "Venice San Marco square",
    "Venice Rialto Bridge area",
    "Pisa Leaning Tower area",
    "Naples Spaccanapoli",
    "Capri Island"
  ]
};