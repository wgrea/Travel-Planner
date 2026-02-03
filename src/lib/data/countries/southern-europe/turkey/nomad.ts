// src/lib/data/countries/europe/southern-europe/turkey/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const turkeyWorkspaces: Workspace[] = [
  {
    name: 'Kolektif House',
    city: 'Istanbul',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 2.50, // Converted from 80 TRY to USD (~32 TRY = 1 USD)
    monthlyPrice: 31.25, // Converted from 1000 TRY to USD
    rating: 4.6,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Cafe', 'Event Space', 'Networking Events', 'Gym', '24/7 Access'],
    bestFor: ['Startups', 'Freelancers', 'Corporate teams', 'Networking', 'Turkish business community'],
    hours: '24/7',
    address: 'Maslak, Istanbul',
    website: 'https://kolektifhouse.co',
    freeTrialDays: 1,
    membershipDiscount: 10,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Leading Turkish coworking chain with multiple Istanbul locations'
  },
  {
    name: 'Impact Hub Istanbul',
    city: 'Istanbul',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 2.20, // Converted from 70 TRY to USD
    monthlyPrice: 28.13, // Converted from 900 TRY to USD
    rating: 4.5,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Social Impact Focus', 'Meeting Rooms', 'Event Space', 'Community Events', 'Cafe', 'Workshops'],
    bestFor: ['Social entrepreneurs', 'NGOs', 'Community projects', 'Sustainability initiatives'],
    hours: '9:00-18:00',
    website: 'https://istanbul.impacthub.net',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'KALEVİ Coffee',
    city: 'Istanbul',
    country: 'Turkey',
    type: 'cafe',
    dayPassPrice: 0.94, // Minimum purchase/day rate (converted from 30 TRY)
    rating: 4.3,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Comfortable Seating', 'Power Outlets', 'Good Atmosphere', 'Turkish coffee options'],
    bestFor: ['Casual work', 'Creative sessions', 'Coffee lovers', 'Kadıköy experience'],
    hours: '7:00-23:00',
    address: 'Kadıköy, Istanbul',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 0.94,
    budgetCategory: 'small_purchase',
    notes: 'Popular coffee chain in Istanbul. Good for experiencing local cafe culture'
  },
  {
    name: 'ATÖLYE',
    city: 'Istanbul',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 2.66, // Converted from 85 TRY to USD
    monthlyPrice: 34.38, // Converted from 1100 TRY to USD
    rating: 4.7,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Creative Studio', 'Workshop Space', 'Meeting Rooms', 'Event Space', 'Community', 'Maker space'],
    bestFor: ['Creatives', 'Designers', 'Artists', 'Innovators', 'Istanbul creative scene'],
    hours: '24/7',
    address: 'Bomonti, Istanbul',
    website: 'https://atolye.io',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Workinton',
    city: 'Ankara',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 1.88, // Converted from 60 TRY to USD
    monthlyPrice: 25, // Converted from 800 TRY to USD
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Meeting Rooms', 'Business Lounge', 'Event Space', 'Networking Events', 'Business services'],
    bestFor: ['Business professionals', 'Consultants', 'Government relations', 'Ankara business'],
    hours: '8:00-20:00',
    website: 'https://workinton.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Çankaya Coworking',
    city: 'Ankara',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 1.72, // Converted from 55 TRY to USD
    monthlyPrice: 23.44, // Converted from 750 TRY to USD
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Quiet Zones', 'Meeting Rooms', 'Kitchen', 'Printing Services', 'Study areas'],
    bestFor: ['Students', 'Researchers', 'Focused work', 'Academic work'],
    hours: '9:00-19:00',
    website: 'https://cankayacoworking.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Izmir Coworking',
    city: 'Izmir',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 1.56, // Converted from 50 TRY to USD
    monthlyPrice: 21.88, // Converted from 700 TRY to USD
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Sea View', 'Meeting Rooms', 'Event Space', 'Community Events', 'Aegean lifestyle'],
    bestFor: ['Digital nomads', 'Remote workers', 'Startups', 'Izmir lifestyle'],
    hours: '9:00-18:00',
    website: 'https://izmircoworking.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Antalya TechHub',
    city: 'Antalya',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 2.03, // Converted from 65 TRY to USD
    monthlyPrice: 26.56, // Converted from 850 TRY to USD
    rating: 4.2,
    wifiSpeed: 75,
    powerOutlets: 3,
    noiseLevel: 2,
    amenities: ['Pool Access', 'Meeting Rooms', 'Cafe', 'Event Space', 'Mediterranean atmosphere'],
    bestFor: ['Seasonal workers', 'Digital nomads', 'Tech startups', 'Beach lifestyle'],
    hours: '9:00-19:00',
    website: 'https://antalyatechhub.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Cappadocia Work Lodge',
    city: 'Göreme',
    country: 'Turkey',
    type: 'coworking',
    dayPassPrice: 2.19, // Converted from 70 TRY to USD
    monthlyPrice: 28.13, // Converted from 900 TRY to USD
    rating: 4.3,
    wifiSpeed: 65,
    powerOutlets: 3,
    noiseLevel: 1,
    amenities: ['Cave Setting', 'Mountain Views', 'Meeting Rooms', 'Quiet Environment', 'Unique architecture'],
    bestFor: ['Focused work', 'Writers', 'Remote workers', 'Cappadocia experience'],
    hours: '9:00-18:00',
    website: 'https://cappadociaworklodge.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Unique cave workspace in Cappadocia. Perfect for digital detox'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'Cheers Hostel Istanbul',
    city: 'Istanbul',
    country: 'Turkey',
    type: 'hostel',
    dayPassPrice: 1.25, // ~40 TRY
    monthlyPrice: 250, // Monthly accommodation in USD
    rating: 4.5,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Rooftop workspace', 'Bar and restaurant', 'Kitchen', 'Tour desk', 'Social events', 'Sultanahmet location'],
    bestFor: ['Budget travelers', 'Social nomads', 'Historic district', 'Solo travelers'],
    hours: 'Common areas: 24/7',
    address: 'Aksakal Cad. No:16, Sultanahmet, Istanbul',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Great location near Blue Mosque and Hagia Sophia. Very social atmosphere'
  },
  {
    name: 'Witt Istanbul Hotel Lobby',
    city: 'Istanbul',
    country: 'Turkey',
    type: 'hotel',
    dayPassPrice: 4.69, // ~150 TRY minimum spend
    rating: 4.8,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Designer hotel', 'Quiet lounge', 'Bosphorus views', 'Premium service', 'Modern design'],
    bestFor: ['Client meetings', 'Executive work', 'Peaceful environment', 'Cihangir location'],
    hours: 'Lobby lounge: 7:00-23:00',
    address: 'Defterdar Yokuşu No:26, Cihangir, Istanbul',
    touristArea: false,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 4.69,
    notes: 'Boutique design hotel in trendy Cihangir. Minimum spend for non-guests'
  },
  {
    name: 'Cave Hotel Göreme',
    city: 'Göreme',
    country: 'Turkey',
    type: 'hotel',
    dayPassPrice: 3.13, // ~100 TRY
    monthlyPrice: 500,
    rating: 4.7,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 1,
    amenities: ['Cave rooms', 'Terrace workspace', 'Pool', 'Traditional breakfast', 'Panoramic views'],
    bestFor: ['Unique experience', 'Focused work', 'Cappadocia stay', 'Photography'],
    hours: 'Terrace: 8:00-20:00',
    address: 'Aydınlı Mahallesi, Göreme',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Authentic cave hotel with amazing terrace views of Cappadocia'
  },
  {
    name: 'Bodrum Backpackers Hostel',
    city: 'Bodrum',
    country: 'Turkey',
    type: 'hostel',
    dayPassPrice: 1.88, // ~60 TRY
    monthlyPrice: 300,
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Poolside workspace', 'Bar', 'Kitchen', 'Beach shuttle', 'Social events', 'Bodrum nightlife'],
    bestFor: ['Beach nomads', 'Social travelers', 'Summer workers', 'Bodrum experience'],
    hours: 'Common areas: 8:00-24:00',
    address: 'Kumbahçe Mahallesi, Bodrum',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Great for summer digital nomads. Social atmosphere with beach access'
  }
];

// Add Free Workspaces for Turkey
export const turkeyFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'Istanbul University Library',
    city: 'Istanbul',
    type: 'library',
    description: 'Historic university library with extensive collections and quiet study areas',
    cost: 'free',
    wifi: true,
    wifiSpeed: 70,
    powerOutlets: true,
    hours: '8:30-17:30 (Mon-Fri)',
    amenities: ['Academic collections', 'Study carrels', 'Reading rooms', 'Research materials', 'Historic building'],
    bestFor: ['Academic research', 'Serious study', 'Students', 'Quiet work'],
    noiseLevel: 1,
    address: 'Beyazıt, Istanbul',
    notes: 'Visitor access available. One of Turkey\'s oldest universities'
  },
  {
    name: 'Gülhane Park',
    city: 'Istanbul',
    type: 'public_space',
    description: 'Historic park near Topkapı Palace with WiFi hotspots and beautiful gardens',
    cost: 'free',
    wifi: true,
    wifiSpeed: 45,
    powerOutlets: false,
    hours: '6:00-22:00',
    amenities: ['Historic park', 'Palace views', 'Walking paths', 'Benches', 'WiFi hotspots', 'Museum access'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Historic atmosphere'],
    noiseLevel: 2,
    address: 'Cankurtaran Mahallesi, Istanbul',
    notes: 'Beautiful historic park with views of Bosphorus and Topkapı Palace'
  },
  {
    name: 'İstinye Park Food Court',
    city: 'Istanbul',
    type: 'mall',
    description: 'Upscale shopping mall with extensive food court seating and reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 80,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'People watching', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'İstinye location'],
    noiseLevel: 4,
    address: 'Pınar Mahallesi, İstinye Bayırı Caddesi, Istanbul',
    notes: 'Upscale mall with good food court. Purchase required for seating'
  },
  {
    name: 'Kordon Promenade',
    city: 'Izmir',
    type: 'public_space',
    description: 'Famous waterfront promenade with benches and Aegean Sea views',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Sea views', 'Walking path', 'Benches', 'Cafes nearby', 'People watching'],
    bestFor: ['Creative thinking', 'Walking meetings', 'Sunset watching', 'Aegean experience'],
    noiseLevel: 3,
    address: 'Alsancak, Izmir',
    notes: 'Beautiful waterfront promenade. WiFi available in certain areas'
  },
  {
    name: 'Ankara University Libraries',
    city: 'Ankara',
    type: 'university',
    description: 'University libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 75,
    powerOutlets: true,
    hours: '8:30-17:30 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Student atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: 'Tandoğan, Ankara',
    notes: 'Visitor access available. Turkey\'s capital university resources'
  }
];

// Add Money Saving Tips for Turkey
export const turkeyMoneySavingTips: MoneySavingTips = {
  general: [
    'Exchange currency at official exchange offices, not hotels or airports',
    'Use Turkish SIM cards (Turkcell, Vodafone, Turk Telekom) for best coverage',
    'Take local "dolmuş" (shared taxis) for cheap transport between neighborhoods',
    'Eat at local "lokantas" and "köftecis" for authentic, affordable meals',
    'Learn basic Turkish phrases for better prices and respect'
  ],
  touristAreas: [
    'Avoid restaurants in Sultanahmet Square - prices are 3-4x higher',
    'In Istanbul Grand Bazaar, always negotiate prices (start at 50% of asking)',
    'Skip tourist trap restaurants in Taksim Square',
    'Use public transport (metro, tram) instead of taxis in Istanbul'
  ],
  nonTouristAreas: [
    'Local "çay bahçesi" (tea gardens) welcome laptop users',
    'University neighborhoods have cheaper food and amenities',
    'Markets like Kadıköy Market have amazing food at local prices',
    'Residential neighborhoods offer authentic experiences'
  ],
  byPreference: {
    coworking: [
      'Ask for "dijital göçebe" (digital nomad) discounts',
      'Share monthly membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces outside main tourist areas for better prices'
    ],
    cafe: [
      'Order "çay" (tea) instead of coffee for lower cost',
      'Tip 5-10 TRY if staying several hours',
      'Visit during afternoon hours (2-5 PM) for quieter times',
      'Choose local cafes over international chains'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use silent floors for maximum focus',
      'Arrive early to secure best seats',
      'Check prayer times as some may close briefly'
    ],
    hostel: [
      'Book directly with hostel for better rates',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free walking tours'
    ],
    hotel: [
      'Business hotels have best WiFi and work facilities',
      'Ask about "günlük kullanım" (day use) rates',
      'Traditional "butik oteller" often have beautiful courtyards',
      'Loyalty programs can offer perks'
    ]
  }
};

// Add Coworking Memberships for Turkey
export const turkeyCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "Kolektif House Turkey Network",
    monthlyPrice: 28,
    coverage: ["Istanbul (multiple locations)", "Ankara", "Izmir"],
    dayPassAvailable: true,
    dayPassPrice: 2.2,
    trialDays: 1,
    benefits: [
      "Access to all Kolektif House locations",
      "Meeting room credits",
      "24/7 access",
      "Community events",
      "Business services",
      "Turkish business network"
    ],
    bestFor: "Digital nomads traveling between major Turkish cities",
    website: "https://kolektifhouse.co"
  },
  {
    name: "Workinton Türkiye Pass",
    monthlyPrice: 24,
    coverage: ["Ankara", "Istanbul", "Izmir", "Antalya"],
    dayPassAvailable: true,
    dayPassPrice: 1.9,
    trialDays: 1,
    benefits: [
      "Access to Workinton locations across Turkey",
      "Business networking",
      "Event access",
      "Meeting room discounts",
      "Turkish corporate network"
    ],
    bestFor: "Business travelers and professionals in Turkey",
    website: "https://workinton.com"
  },
  {
    name: "Impact Hub Turkey Alliance",
    monthlyPrice: 26,
    coverage: ["Istanbul", "Ankara", "Izmir"],
    dayPassAvailable: true,
    dayPassPrice: 2.1,
    trialDays: 2,
    benefits: [
      "Access to Impact Hub locations",
      "Social impact community",
      "Workshops and events",
      "Networking opportunities",
      "Sustainability focus"
    ],
    bestFor: "Social entrepreneurs and impact-focused nomads in Turkey",
    website: "https://impacthub.net/turkey"
  }
];

// Updated Turkey Nomad Data
export const turkeyNomadData: NomadData = {
  country: "Turkey",
  cities: ["Istanbul", "Ankara", "Izmir", "Antalya", "Cappadocia (Göreme)", "Bodrum", "Bursa", "Trabzon", "Fethiye", "Alanya"],
  
  internet: {
    speed: 75,
    reliability: 7,
    coworkingSpaces: 65,
    freePublicWifiSpots: 5
  },
  
  costs: {
    coworkingMonthly: 28.13, // Converted from 900 TRY to USD
    simCardMonthly: 3.13, // Converted from 100 TRY to USD
    coffeeShopWork: 0.94, // Converted from 30 TRY to USD
    libraryAccess: 0
  },
  
  community: {
    expatSize: 7,
    englishLevel: 6,
    safety: 7.5,
    nomadGroups: [
      "Digital Nomads Turkey Facebook Group",
      "Expats in Istanbul",
      "Remote Workers Turkey",
      "Nomads in Turkey Telegram",
      "Turkish Digital Nomads"
    ]
  },
  
  workspaces: turkeyWorkspaces,
  
  freeWorkspaces: turkeyFreeWorkspaces,
  
  moneySavingTips: turkeyMoneySavingTips,
  
  coworkingMemberships: turkeyCoworkingMemberships,
  
  touristyCities: [
    "Istanbul Sultanahmet",
    "Istanbul Grand Bazaar",
    "Istanbul Taksim Square",
    "Cappadocia Göreme",
    "Antalya Kaleiçi",
    "Bodrum Castle area",
    "Izmir Alsancak (tourist areas)",
    "Pamukkale Travertines",
    "Ephesus Ancient City",
    "Troy Archaeological Site"
  ]
};