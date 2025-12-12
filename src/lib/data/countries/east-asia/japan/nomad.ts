// src/lib/data/countries/east-asia/japan/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const japanWorkspaces: Workspace[] = [
  {
    name: 'WeWork Marunouchi',
    city: 'Tokyo',
    country: 'Japan',
    type: 'coworking',
    dayPassPrice: 50,
    monthlyPrice: 650,
    rating: 4.7,
    wifiSpeed: 150,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Business Lounge', 'Meeting Rooms', 'Printing Services', 'Coffee Bar', 'Phone Booths', '24/7 Access', 'Global network'],
    bestFor: ['Professionals', 'Business Meetings', 'Corporate Environment', 'International business', 'Marunouchi financial district'],
    hours: '24/7',
    address: 'Marunouchi, Chiyoda, Tokyo',
    website: 'https://www.wework.com',
    freeTrialDays: 1,
    membershipDiscount: 0,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Premium location in Tokyo\'s financial district. Accepts WeWork All Access membership'
  },
  {
    name: 'The Terminal Shibuya',
    city: 'Tokyo',
    country: 'Japan',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 450,
    rating: 4.5,
    wifiSpeed: 120,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Community Events', 'Café', 'Event Space', 'High-speed Internet', 'Comfortable Seating', 'Shibuya location', 'Startup community'],
    bestFor: ['Digital Nomads', 'Startups', 'Networking', 'Tokyo creative scene', 'Shibuya experience'],
    hours: '9:00-22:00',
    address: 'Shibuya, Tokyo',
    website: 'https://theterminal.jp',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Starbucks Reserve Roastery',
    city: 'Tokyo',
    country: 'Japan',
    type: 'cafe',
    dayPassPrice: 8, // Minimum purchase/day rate
    rating: 4.6,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 5,
    amenities: ['Premium Coffee', 'Power Outlets', 'WiFi', 'Multiple Floors', 'Specialty Brews', 'Nakameguro location', 'Design space'],
    bestFor: ['Coffee Lovers', 'Casual Meetings', 'Inspiring Environment', 'Nakameguro cherry blossom views', 'Tokyo landmark'],
    hours: '7:00-23:00',
    address: 'Nakameguro, Tokyo',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 8,
    budgetCategory: 'small_purchase',
    notes: 'World\'s largest Starbucks Reserve Roastery. Beautiful but very crowded'
  },
  {
    name: 'Impact Hub Kyoto',
    city: 'Kyoto',
    country: 'Japan',
    type: 'coworking',
    dayPassPrice: 30,
    monthlyPrice: 400,
    rating: 4.4,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Traditional Garden', 'Meeting Rooms', 'Community Events', 'Tea Service', 'Bike Parking', 'Kyoto atmosphere', 'Sustainability focus'],
    bestFor: ['Creatives', 'Sustainable Projects', 'Cultural Exchange', 'Kyoto experience', 'Traditional Japanese setting'],
    hours: '9:00-20:00',
    address: 'Nakagyo Ward, Kyoto',
    website: 'https://kyoto.impacthub.net',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Osaka Business Hub',
    city: 'Osaka',
    country: 'Japan',
    type: 'coworking',
    dayPassPrice: 28,
    monthlyPrice: 380,
    rating: 4.3,
    wifiSpeed: 110,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Business Services', 'Printing/Scanning', 'Video Conference Rooms', 'Lounge Area', 'Kitchenette', 'Umeda business district'],
    bestFor: ['Business Travelers', 'Remote Workers', 'Small Teams', 'Osaka business', 'Kansai region work'],
    hours: '8:00-22:00',
    address: 'Umeda, Osaka',
    website: 'https://osakabusinesshub.jp',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Fukuoka Growth Hub',
    city: 'Fukuoka',
    country: 'Japan',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 320,
    rating: 4.2,
    wifiSpeed: 95,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Startup Community', 'Mentorship Programs', 'High-speed Internet', 'Event Space', 'Local Network', 'Fukuoka startup scene'],
    bestFor: ['Entrepreneurs', 'Startups', 'Tech Community', 'Kyushu region', 'Fukuoka digital city'],
    hours: '9:00-21:00',
    address: 'Hakata Ward, Fukuoka',
    website: 'https://fukuokagrowthhub.jp',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Tully\'s Coffee',
    city: 'Various',
    country: 'Japan',
    type: 'cafe',
    dayPassPrice: 6, // Minimum purchase/day rate
    rating: 4.0,
    wifiSpeed: 40,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Reliable WiFi', 'Power Outlets', 'Coffee & Light Meals', 'Convenient Locations', 'Japanese chain'],
    bestFor: ['Quick Work Sessions', 'Reliable Chain', 'Budget Work Option', 'Nationwide consistency', 'Basic needs'],
    hours: '7:00-22:00',
    address: 'Nationwide locations',
    touristArea: false,
    minimumPurchase: 6,
    budgetCategory: 'small_purchase',
    notes: 'Japanese coffee chain. Reliable but basic facilities nationwide'
  },
  // ADD MORE WORKSPACES FOR COMPREHENSIVENESS
  {
    name: 'Book and Bed Tokyo',
    city: 'Tokyo',
    country: 'Japan',
    type: 'hostel',
    dayPassPrice: 10,
    monthlyPrice: 800, // Monthly accommodation in USD
    rating: 4.6,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Bookstore hostel', 'Quiet reading areas', 'Comfortable beds', 'Library atmosphere', 'Multiple locations'],
    bestFor: ['Book lovers', 'Quiet work', 'Readers', 'Solo travelers', 'Peaceful environment'],
    hours: 'Common areas: 24/7',
    address: 'Multiple locations in Tokyo',
    website: 'https://bookandbedtokyo.com',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Unique bookstore hostel concept. Perfect for quiet work and reading'
  },
  {
    name: 'Millennials Shibuya',
    city: 'Tokyo',
    country: 'Japan',
    type: 'hostel',
    dayPassPrice: 8,
    monthlyPrice: 700,
    rating: 4.7,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Co-working lounge', 'Pod-style beds', 'Social events', 'Kitchen', 'Shibuya location', 'Tech-friendly'],
    bestFor: ['Digital nomads', 'Social travelers', 'Tech workers', 'Shibuya experience', 'Young professionals'],
    hours: 'Co-working lounge: 8:00-23:00',
    address: 'Shibuya, Tokyo',
    website: 'https://millennials-kyoto.com',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Modern capsule hostel with excellent co-working facilities in Shibuya'
  },
  {
    name: 'Park Hyatt Tokyo New York Bar',
    city: 'Tokyo',
    country: 'Japan',
    type: 'hotel',
    dayPassPrice: 25, // Minimum spend
    rating: 4.9,
    wifiSpeed: 120,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Iconic hotel', 'Lost in Translation fame', 'Skyline views', 'Quiet atmosphere', 'Premium service'],
    bestFor: ['Client meetings', 'Executive work', 'Special occasions', 'Tokyo skyline views', 'Film location fans'],
    hours: 'Bar/lounge: 17:00-24:00',
    address: '3-7-1-2 Nishishinjuku, Shinjuku, Tokyo',
    touristArea: false,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 25,
    notes: 'Iconic hotel from "Lost in Translation". Minimum spend for non-guests, stunning views'
  },
  {
    name: 'Doutor Coffee',
    city: 'Various',
    country: 'Japan',
    type: 'cafe',
    dayPassPrice: 5, // Minimum purchase/day rate
    rating: 4.1,
    wifiSpeed: 45,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Affordable chain', 'WiFi', 'Power outlets', 'Smoking sections', 'Nationwide presence'],
    bestFor: ['Budget work', 'Quick sessions', 'Local experience', 'Everyday work', 'Chain reliability'],
    hours: '7:00-22:00',
    address: 'Nationwide locations',
    touristArea: false,
    minimumPurchase: 5,
    budgetCategory: 'small_purchase',
    notes: 'Japan\'s largest coffee chain. Affordable and everywhere. Note: Many locations allow smoking'
  }
];

// Add Free Workspaces for Japan
export const japanFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'National Diet Library',
    city: 'Tokyo',
    type: 'library',
    description: 'Japan\'s national library with extensive collections and research facilities',
    cost: 'free',
    wifi: true,
    wifiSpeed: 100,
    powerOutlets: true,
    hours: '9:30-17:00 (Mon-Fri), 9:30-12:30 (Sat)',
    amenities: ['National collections', 'Reading rooms', 'Study desks', 'Research materials', 'Quiet atmosphere'],
    bestFor: ['Academic research', 'Serious study', 'Historical research', 'Quiet work'],
    noiseLevel: 1,
    address: '1-10-1 Nagatacho, Chiyoda, Tokyo',
    notes: 'Reader registration required. Japan\'s equivalent of the Library of Congress'
  },
  {
    name: 'Shinjuku Gyoen National Garden',
    city: 'Tokyo',
    type: 'public_space',
    description: 'Large national garden with WiFi hotspots, benches, and beautiful landscapes',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: false,
    hours: '9:00-16:30 (varies by season)',
    amenities: ['Japanese gardens', 'French formal garden', 'English landscape', 'Walking paths', 'Benches', 'WiFi hotspots'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Nature inspiration', 'Tokyo oasis'],
    noiseLevel: 2,
    address: '11 Naitomachi, Shinjuku, Tokyo',
    notes: 'Small entry fee required (¥500). WiFi available in certain areas. Escape from Tokyo bustle'
  },
  {
    name: 'Daimaru Food Court',
    city: 'Tokyo',
    type: 'mall',
    description: 'Department store food court with seating and reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 80,
    powerOutlets: true,
    hours: '10:00-20:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'People watching', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Tokyo Station area'],
    noiseLevel: 4,
    address: 'Tokyo Station City, Tokyo',
    notes: 'Purchase required for food court seating. Convenient for Tokyo Station connections'
  },
  {
    name: 'Yoyogi Park',
    city: 'Tokyo',
    type: 'public_space',
    description: 'Large public park with WiFi hotspots and open spaces',
    cost: 'free',
    wifi: true,
    wifiSpeed: 45,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Open spaces', 'Walking paths', 'Benches', 'WiFi hotspots', 'People watching', 'Harajuku adjacent'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Tokyo park life', 'Weekend inspiration'],
    noiseLevel: 3,
    address: '2-1 Yoyogikamizonocho, Shibuya, Tokyo',
    notes: 'Free WiFi in certain areas. Popular weekend spot. Next to Meiji Shrine'
  },
  {
    name: 'University of Tokyo Libraries',
    city: 'Tokyo',
    type: 'university',
    description: 'Prestigious university libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 110,
    powerOutlets: true,
    hours: '9:00-21:00 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Student atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: '7-3-1 Hongo, Bunkyo, Tokyo',
    notes: 'Visitor access available. Japan\'s most prestigious university'
  }
];

// Add Money Saving Tips for Japan
export const japanMoneySavingTips: MoneySavingTips = {
  general: [
    'Use convenience stores (7-Eleven, FamilyMart, Lawson) for free WiFi and cheap meals',
    'Take advantage of free WiFi in most train stations and public spaces',
    'Use Japan Rail Pass for long-distance travel (must purchase before arrival)',
    'Use MVNO SIM cards (IIJmio, UQ Mobile) for affordable data plans',
    'Shop at supermarkets in the evening for discounted bento boxes'
  ],
  touristAreas: [
    'Avoid restaurants in Ginza and Shinjuku main streets - prices are 2-3x higher',
    'In Kyoto Gion, walk to side streets away from tourist crowds',
    'Skip tourist trap restaurants in Tokyo\'s Tsukiji Outer Market',
    'Use public transport (trains, subways) instead of taxis'
  ],
  nonTouristAreas: [
    'Local "kissaten" (traditional coffee shops) welcome laptop users during quiet hours',
    'University neighborhoods have cheaper food and amenities',
    'Residential areas offer authentic experiences and better prices',
    'Business districts have lunch specials during weekdays'
  ],
  byPreference: {
    coworking: [
      'Ask for "monthly member" discounts instead of daily rates',
      'Share membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces in business districts for professional amenities'
    ],
    cafe: [
      'Order "regular coffee" instead of specialty drinks',
      'Take advantage of free WiFi with purchase',
      'Visit during afternoon hours (2-5 PM) for quieter times',
      'Choose local kissaten over international chains'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use silent floors for maximum focus',
      'Arrive early to secure best seats',
      'Check for free exhibitions and events'
    ],
    hostel: [
      'Book weekly rates for 10-20% discount',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free cultural activities'
    ],
    hotel: [
      'Hotel lobbies are often free to use (with purchase)',
      'Ask about "day use" rates for workspace access',
      'Business hotels have best work facilities',
      'Loyalty programs offer free amenities'
    ]
  }
};

// Add Coworking Memberships for Japan
export const japanCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "WeWork All Access Japan",
    monthlyPrice: 450,
    coverage: ["Tokyo (multiple locations)", "Osaka", "Fukuoka", "Yokohama"],
    dayPassAvailable: true,
    dayPassPrice: 40,
    trialDays: 1,
    benefits: [
      "Access to all WeWork locations in Japan",
      "Meeting room credits",
      "24/7 access",
      "High-speed internet",
      "Business address options",
      "Global network access"
    ],
    bestFor: "Digital nomads traveling between Japanese cities",
    website: "https://www.wework.com"
  },
  {
    name: "Impact Hub Japan Network",
    monthlyPrice: 350,
    coverage: ["Tokyo", "Kyoto", "Osaka", "Fukuoka"],
    dayPassAvailable: true,
    dayPassPrice: 28,
    trialDays: 2,
    benefits: [
      "Access to Impact Hub locations across Japan",
      "Community events",
      "Social impact focus",
      "Japanese business network",
      "Cultural exchange opportunities",
      "Sustainability initiatives"
    ],
    bestFor: "Social entrepreneurs and community-focused nomads in Japan",
    website: "https://impacthub.net/japan"
  },
  {
    name: "Japan Coworking Alliance",
    monthlyPrice: 300,
    coverage: ["Multiple cities across Japan"],
    dayPassAvailable: true,
    dayPassPrice: 25,
    trialDays: 2,
    benefits: [
      "Access to network of independent coworking spaces",
      "Local community connections",
      "Flexible terms",
      "Regional variety",
      "Cultural immersion",
      "Japanese business etiquette guidance"
    ],
    bestFor: "Nomads wanting to experience different regions of Japan",
    website: "https://japancoworking.org"
  }
];

// Updated Japan Nomad Data
export const japanNomadData: NomadData = {
  country: "Japan",
  cities: ["Tokyo", "Osaka", "Kyoto", "Fukuoka", "Sapporo", "Nagoya", "Hiroshima", "Okinawa", "Yokohama", "Kobe", "Nara", "Kanazawa"],
  
  internet: {
    speed: 115,
    reliability: 9,
    coworkingSpaces: 85,
    freePublicWifiSpots: 9
  },
  
  costs: {
    coworkingMonthly: 450,
    simCardMonthly: 35,
    coffeeShopWork: 7,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 8,
    englishLevel: 6,
    safety: 10,
    nomadGroups: [
      "Digital Nomads Japan Facebook Group",
      "Tokyo Remote Workers",
      "Expats in Japan",
      "Japan Digital Nomads",
      "Nomad List Japan Community",
      "Kansai Digital Nomads"
    ]
  },
  
  workspaces: japanWorkspaces,
  
  freeWorkspaces: japanFreeWorkspaces,
  
  moneySavingTips: japanMoneySavingTips,
  
  coworkingMemberships: japanCoworkingMemberships,
  
  touristyCities: [
    "Tokyo Shibuya Crossing",
    "Tokyo Shinjuku (Kabukicho)",
    "Tokyo Asakusa (Sensoji Temple)",
    "Tokyo Harajuku (Takeshita Street)",
    "Kyoto Gion District",
    "Kyoto Fushimi Inari Shrine path",
    "Kyoto Arashiyama Bamboo Grove",
    "Osaka Dotonbori",
    "Hiroshima Peace Memorial Park area",
    "Nikko Toshogu Shrine area"
  ]
};