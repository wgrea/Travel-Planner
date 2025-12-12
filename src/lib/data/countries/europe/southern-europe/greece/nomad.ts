// src/lib/data/countries/europe/southern-europe/greece/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const greeceWorkspaces: Workspace[] = [
  {
    name: 'Stone Soup',
    city: 'Athens',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 150,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Kitchen', 'Event Space', 'Community Events', 'Athens nomad community'],
    bestFor: ['Digital nomads', 'Startups', 'Remote workers', 'Athens creative scene', 'Metaxourgio neighborhood'],
    hours: '9:00-18:00',
    address: 'Metaxourgio, Athens',
    website: 'https://stonesoup.gr',
    freeTrialDays: 2,
    membershipDiscount: 15,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Community-focused coworking in up-and-coming Metaxourgio neighborhood'
  },
  {
    name: 'The Cube',
    city: 'Athens',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 180,
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Roof Terrace', 'Cafe', 'Meeting Rooms', 'Phone Booths', 'Printing', '24/7 Access', 'Premium facilities'],
    bestFor: ['Professional work', 'Meetings', 'Focused work', 'Business networking', 'Kolonaki location'],
    hours: '24/7',
    address: 'Kolonaki, Athens',
    website: 'https://thecubeathens.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Tzaferi 16',
    city: 'Thessaloniki',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 140,
    rating: 4.4,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Event Space', 'Kitchen', 'Meeting Rooms', 'Networking Events', 'Thessaloniki community'],
    bestFor: ['Students', 'Startups', 'Creative work', 'Northern Greece business', 'Academic collaboration'],
    hours: '9:00-20:00',
    website: 'https://tzaferi16.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Blue Monkey',
    city: 'Athens',
    country: 'Greece',
    type: 'cafe',
    dayPassPrice: 8, // Minimum purchase/day rate
    rating: 4.2,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Comfortable Seating', 'Power Outlets', 'Good Atmosphere', 'Greek coffee options'],
    bestFor: ['Casual work', 'Creative sessions', 'Coffee lovers', 'Koukaki neighborhood', 'Athens local vibe'],
    hours: '7:30-22:00',
    address: 'Koukaki, Athens',
    touristArea: false,
    // NEW: Budget categorization
    minimumPurchase: 8,
    budgetCategory: 'small_purchase',
    notes: 'Popular specialty coffee shop in trendy Koukaki neighborhood'
  },
  {
    name: 'Co.Work.Thira',
    city: 'Santorini',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 30,
    monthlyPrice: 250,
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Caldera Views', 'Air Conditioning', 'Meeting Rooms', 'Kitchen', 'Santorini atmosphere'],
    bestFor: ['Digital nomads', 'Seasonal workers', 'Remote work with view', 'Santorini experience'],
    hours: '9:00-18:00',
    website: 'https://coworkthira.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Work with stunning Caldera views. Premium pricing for premium location'
  },
  {
    name: 'Mykonos Coworking',
    city: 'Mykonos',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 300,
    rating: 4.2,
    wifiSpeed: 65,
    powerOutlets: 3,
    noiseLevel: 3,
    amenities: ['Pool Access', 'Cafe', 'Meeting Rooms', 'Event Space', 'Mykonos lifestyle'],
    bestFor: ['Lifestyle work', 'Seasonal entrepreneurs', 'Networking', 'Mykonos party scene'],
    hours: '9:00-19:00',
    website: 'https://mykonoscoworking.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Chania Coworking',
    city: 'Chania',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 120,
    rating: 4.4,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Old Town Location', 'Kitchen', 'Meeting Rooms', 'Community Events', 'Crete atmosphere'],
    bestFor: ['Long-term stays', 'Digital nomads', 'Creative work', 'Crete experience', 'Slower pace'],
    hours: '9:00-18:00',
    website: 'https://chaniacoworking.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Rhodes Coworking',
    city: 'Rhodes',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 160,
    rating: 4.1,
    wifiSpeed: 65,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Medieval Town Location', 'Air Conditioning', 'Meeting Rooms', 'Kitchen', 'Rhodes history'],
    bestFor: ['Historical setting work', 'Remote workers', 'Seasonal stays', 'Dodecanese islands'],
    hours: '9:00-18:00',
    website: 'https://rhodescoworking.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Corfu Cowork',
    city: 'Corfu',
    country: 'Greece',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 145,
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Garden Setting', 'Meeting Rooms', 'Kitchen', 'Community Events', 'Ionian island vibe'],
    bestFor: ['Relaxed work environment', 'Long-term stays', 'Creative work', 'Corfu island life'],
    hours: '9:00-17:00',
    website: 'https://corfucowork.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'City Circus Athens Hostel',
    city: 'Athens',
    country: 'Greece',
    type: 'hostel',
    dayPassPrice: 8,
    monthlyPrice: 400, // Monthly accommodation in USD/EUR
    rating: 4.7,
    wifiSpeed: 85,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Rooftop workspace', 'Bar and restaurant', 'Kitchen', 'Tour desk', 'Acropolis views', 'Psiri location'],
    bestFor: ['Budget travelers', 'Social nomads', 'Acropolis views', 'Psiri nightlife', 'Solo travelers'],
    hours: 'Common areas: 24/7',
    address: 'Miaouli 16, Athens',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Amazing rooftop with Acropolis views. Great co-working atmosphere'
  },
  {
    name: 'Pagration Youth Hostel',
    city: 'Athens',
    country: 'Greece',
    type: 'hostel',
    dayPassPrice: 6,
    monthlyPrice: 350,
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Co-working lounge', 'Garden', 'Kitchen', 'Tour desk', 'Budget-friendly', 'Pangrati neighborhood'],
    bestFor: ['Budget travelers', 'Students', 'Long-term stays', 'Local neighborhood experience'],
    hours: 'Co-working lounge: 8:00-22:00',
    address: 'Damareos 75, Athens',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Budget hostel in residential Pangrati. Good for longer stays'
  },
  {
    name: 'Grande Bretagne Hotel Lobby',
    city: 'Athens',
    country: 'Greece',
    type: 'hotel',
    dayPassPrice: 18, // Minimum spend
    rating: 4.9,
    wifiSpeed: 120,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Luxury historic hotel', 'Syntagma Square views', 'Quiet lounge', 'Premium service', 'Old-world charm'],
    bestFor: ['Client meetings', 'Executive work', 'Peaceful environment', 'Athens luxury experience'],
    hours: 'Lobby lounge: 7:00-23:00',
    address: 'Vasileos Georgiou A\' 1, Athens',
    touristArea: true,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 18,
    notes: 'Historic luxury hotel overlooking Syntagma Square. Minimum spend for non-guests'
  },
  {
    name: 'Sunshine Crete Hostel',
    city: 'Rethymno',
    country: 'Greece',
    type: 'hostel',
    dayPassPrice: 7,
    monthlyPrice: 450,
    rating: 4.5,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beachfront location', 'Co-working terrace', 'Kitchen', 'Bar', 'Beach access', 'Crete lifestyle'],
    bestFor: ['Beach nomads', 'Relaxed work', 'Crete experience', 'Summer digital nomads'],
    hours: 'Co-working terrace: 8:00-20:00',
    address: 'Rethymno Beach, Crete',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Beachfront hostel with dedicated co-working terrace. Perfect for summer work'
  }
];

// Add Free Workspaces for Greece
export const greeceFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'National Library of Greece at the Stavros Niarchos Foundation',
    city: 'Athens',
    type: 'library',
    description: 'Modern national library with stunning architecture and excellent facilities',
    cost: 'free',
    wifi: true,
    wifiSpeed: 90,
    powerOutlets: true,
    hours: '8:00-20:00 (Mon-Fri), 9:00-16:00 (Sat)',
    amenities: ['National collections', 'Reading rooms', 'Study desks', 'Research materials', 'Modern architecture', 'Park views'],
    bestFor: ['Academic research', 'Serious study', 'Architectural appreciation', 'Quiet work'],
    noiseLevel: 1,
    address: 'Stavros Niarchos Foundation Cultural Center, Athens',
    notes: 'Beautiful modern library. Free shuttle from Syntagma Square'
  },
  {
    name: 'National Garden Athens',
    city: 'Athens',
    type: 'public_space',
    description: 'Large historic garden with WiFi hotspots, benches, and quiet corners',
    cost: 'free',
    wifi: true,
    wifiSpeed: 55,
    powerOutlets: false,
    hours: 'Sunrise to sunset',
    amenities: ['Historic garden', 'Duck pond', 'Walking paths', 'Benches', 'WiFi hotspots', 'Ancient ruins'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Nature inspiration', 'Athens atmosphere'],
    noiseLevel: 2,
    address: 'Leoforos Vasilissis Amalias, Athens',
    notes: 'Former royal garden. WiFi available in certain areas. Escape from city bustle'
  },
  {
    name: 'The Mall Athens Food Court',
    city: 'Athens',
    type: 'mall',
    description: 'Large shopping mall with extensive food court seating and reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 80,
    powerOutlets: true,
    hours: '9:00-21:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'People watching', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Marousi location'],
    noiseLevel: 4,
    address: 'Andrea Papandreou 35, Marousi, Athens',
    notes: 'Purchase required for food court seating. Good escape from summer heat'
  },
  {
    name: 'Aristotelous Square',
    city: 'Thessaloniki',
    type: 'public_space',
    description: 'Famous waterfront square with benches and occasional WiFi',
    cost: 'free',
    wifi: true,
    wifiSpeed: 45,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Waterfront views', 'Historic square', 'People watching', 'Cultural events', 'Thessaloniki landmark'],
    bestFor: ['Creative thinking', 'People watching', 'Short breaks', 'Thessaloniki experience'],
    noiseLevel: 3,
    address: 'Aristotelous Square, Thessaloniki',
    notes: 'Iconic Thessaloniki square. WiFi available but use mobile for reliability'
  },
  {
    name: 'University of Athens Libraries',
    city: 'Athens',
    type: 'university',
    description: 'University libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 75,
    powerOutlets: true,
    hours: '8:00-20:00 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Student atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: 'Panepistimiou 30, Athens',
    notes: 'Visitor access available. May need temporary visitor pass'
  }
];

// Add Money Saving Tips for Greece
export const greeceMoneySavingTips: MoneySavingTips = {
  general: [
    'Take advantage of "merenda" (small afternoon meal) for affordable eating',
    'Use public libraries for free high-quality workspace',
    'Travel with ferries booked in advance for better prices',
    'Use Cosmote, Vodafone, or Wind SIM cards for good data deals',
    'Shop at local markets ("laiki") for fresh, affordable produce'
  ],
  touristAreas: [
    'Avoid restaurants in Plaka (Athens) - prices are 2-3x higher',
    'In Santorini Oia, eat in Fira or other villages',
    'Skip tourist trap tavernas on Mykonos beaches',
    'Use public transport instead of taxis on islands'
  ],
  nonTouristAreas: [
    'Local "kafeneio" (traditional cafes) welcome laptop users',
    'University neighborhoods have cheaper food and amenities',
    'Mainland cities have significantly lower costs than islands',
    'Residential neighborhoods offer authentic experiences'
  ],
  byPreference: {
    coworking: [
      'Ask for "ψηφιακός νομάς" (digital nomad) discounts',
      'Share monthly membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces outside main tourist areas'
    ],
    cafe: [
      'Order "φραπέ" (iced coffee) instead of specialty drinks',
      'Take advantage of free WiFi with purchase',
      'Visit during afternoon hours (3-6 PM) for quieter times',
      'Choose traditional cafes over international chains'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use silent floors for maximum focus',
      'Arrive early to secure best seats',
      'Check for free cultural events and exhibitions'
    ],
    hostel: [
      'Book weekly rates for 20-30% discount',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free island tours'
    ],
    hotel: [
      'Hotel lobbies are often free to use (with purchase)',
      'Ask about "ημερήσια χρέωση" for day use rates',
      'Traditional "ξενοδοχεία" often have beautiful terraces',
      'Loyalty programs offer free amenities'
    ]
  }
};

// Add Coworking Memberships for Greece
export const greeceCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "Stone Soup Network",
    monthlyPrice: 130,
    coverage: ["Athens", "Thessaloniki", "Chania"],
    dayPassAvailable: true,
    dayPassPrice: 18,
    trialDays: 2,
    benefits: [
      "Access to Stone Soup locations",
      "Community events",
      "Meeting room credits",
      "Greek nomad community",
      "Local business network",
      "Cultural activities"
    ],
    bestFor: "Digital nomads traveling between Greek cities and islands",
    website: "https://stonesoup.gr"
  },
  {
    name: "Greek Islands Coworking Pass",
    monthlyPrice: 200,
    coverage: ["Santorini", "Mykonos", "Rhodes", "Corfu", "Crete"],
    dayPassAvailable: true,
    dayPassPrice: 25,
    trialDays: 1,
    benefits: [
      "Access to island coworking spaces",
      "Seasonal island communities",
      "Beach lifestyle integration",
      "Island networking",
      "Greek island experience"
    ],
    bestFor: "Nomads wanting to work from multiple Greek islands",
    website: "https://greekislandscoworking.com"
  },
  {
    name: "The Cube Athens Premium",
    monthlyPrice: 160,
    coverage: ["Athens (multiple locations)"],
    dayPassAvailable: true,
    dayPassPrice: 22,
    trialDays: 1,
    benefits: [
      "Access to all Cube locations in Athens",
      "24/7 access",
      "Premium facilities",
      "Business networking",
      "Athens business community",
      "Professional services"
    ],
    bestFor: "Business professionals and focused workers based in Athens",
    website: "https://thecubeathens.com"
  }
];

// Updated Greece Nomad Data
export const greeceNomadData: NomadData = {
  country: "Greece",
  cities: ["Athens", "Thessaloniki", "Heraklion", "Rhodes", "Santorini", "Mykonos", "Chania", "Corfu", "Rethymno", "Nafplio", "Volos", "Patras"],
  
  internet: {
    speed: 70,
    reliability: 7.5,
    coworkingSpaces: 50,
    freePublicWifiSpots: 6
  },
  
  costs: {
    coworkingMonthly: 150,
    simCardMonthly: 15,
    coffeeShopWork: 5,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 6.5,
    englishLevel: 7,
    safety: 8.5,
    nomadGroups: [
      "Digital Nomads Greece Facebook Group",
      "Athens Remote Workers",
      "Expats in Greece",
      "Greek Islands Digital Nomads",
      "Nomad List Greece Community",
      "Greece Digital Nomads Telegram"
    ]
  },
  
  workspaces: greeceWorkspaces,
  
  freeWorkspaces: greeceFreeWorkspaces,
  
  moneySavingTips: greeceMoneySavingTips,
  
  coworkingMemberships: greeceCoworkingMemberships,
  
  touristyCities: [
    "Athens Plaka",
    "Athens Monastiraki",
    "Santorini Oia",
    "Santorini Fira",
    "Mykonos Chora (Mykonos Town)",
    "Mykonos Paradise Beach area",
    "Rhodes Old Town",
    "Corfu Old Town",
    "Chania Old Venetian Harbor",
    "Delphi Archaeological Site"
  ]
};