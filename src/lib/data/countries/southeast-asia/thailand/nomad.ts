// src/lib/data/countries/southeast-asia/thailand.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips } from '$lib/data/nomadData';

// Updated Thailand workspaces with budget categories
export const thailandWorkspaces: Workspace[] = [
  {
    name: 'Hubba',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 13, // USD
    monthlyPrice: 143, // USD
    rating: 4.6,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths'],
    bestFor: ['Startups', 'Networking', 'Professional meetings'],
    hours: '24/7',
    address: 'Multiple locations in Ekkamai and Thong Lor',
    freeTrialDays: 2,
    membershipDiscount: 20,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment' // Coworking = direct payment
  },
  {
    name: 'The Hive',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 10,
    monthlyPrice: 114,
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Terrace', 'Cafe', 'Meeting Rooms', 'Event Space', 'Mail Handling'],
    bestFor: ['Creative work', 'Collaboration', 'Social environment'],
    hours: '8:00-20:00',
    freeTrialDays: 1,
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Stories Cafe',
    city: 'Bangkok',
    country: 'Thailand', 
    type: 'cafe',
    dayPassPrice: 4, // Minimum consumption
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Comfortable Seating', 'Power Outlets', 'Good Atmosphere'],
    bestFor: ['Casual work', 'Creative sessions', 'Coffee lovers'],
    hours: '7:00-22:00',
    address: 'Thong Lor, Bangkok',
    touristArea: true,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'small_purchase' // Cafe = small purchase
  },
  {
    name: 'Punspace',
    city: 'Chiang Mai',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 7,
    monthlyPrice: 86,
    rating: 4.7,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['High-speed WiFi', 'Air Conditioning', 'Kitchen', 'Quiet Zones', 'Printing'],
    bestFor: ['Focused work', 'Digital nomads', 'Long-term work'],
    hours: '24/7',
    address: 'Multiple locations in Nimmanhaemin area',
    freeTrialDays: 3,
    membershipDiscount: 10,
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'CAMP',
    city: 'Chiang Mai',
    country: 'Thailand',
    type: 'cafe',
    dayPassPrice: 3, // Minimum consumption
    monthlyPrice: 0,
    rating: 4.2,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Cafe', 'Free WiFi', 'Power Outlets', 'Study Areas'],
    bestFor: ['Casual work', 'Students', 'Short sessions'],
    hours: '24/7',
    address: 'MAYA Lifestyle Shopping Center',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Kohub',
    city: 'Koh Phangan',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 9,
    monthlyPrice: 100,
    rating: 4.3,
    wifiSpeed: 65,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Pool', 'Cafe', 'Beach Access', 'Meeting Rooms', 'Community Events'],
    bestFor: ['Island lifestyle', 'Community', 'Work-life balance'],
    hours: '8:00-18:00',
    freeTrialDays: 2,
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'Lub d Bangkok Siam',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'hostel',
    dayPassPrice: 3, // Day pass for non-guests
    monthlyPrice: 57, // Monthly accommodation (dorm)
    rating: 4.4,
    wifiSpeed: 65,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Co-working lounge', 'Cafe', '24-hour reception', 'Game room', 'Movie room', 'Laundry'],
    bestFor: ['Budget travelers', 'Social nomads', 'Short-term stays', 'Networking'],
    hours: '24/7 co-working lounge access',
    address: '925/9 Rama I Road, Bangkok',
    touristArea: true,
    // IMPORTANT: Hostel categorization
    includedWithStay: true, // Free if you're staying there
    budgetCategory: 'already_paid', // Shows in "Already Paid" category
    notes: 'Free workspace included with stay. Day pass ฿100 for non-guests.'
  },
  {
    name: 'Stamps Backpackers Chiang Mai',
    city: 'Chiang Mai',
    country: 'Thailand',
    type: 'hostel',
    dayPassPrice: 2,
    monthlyPrice: 43,
    rating: 4.6,
    wifiSpeed: 70,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Quiet co-working area', 'Rooftop terrace', 'Kitchen', 'Book exchange', 'Bike rental'],
    bestFor: ['Focused work', 'Long-term backpackers', 'Budget-conscious nomads'],
    hours: 'Co-working: 7:00-22:00',
    address: '37/1 Moon Muang Rd, Chiang Mai',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Excellent WiFi and quiet work area. Popular among digital nomads on a budget.'
  },
  {
    name: 'Ariyasom Villa Lobby Cafe',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'hotel',
    dayPassPrice: 6, // Minimum spend at cafe
    monthlyPrice: 0,
    rating: 4.7,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Luxurious garden setting', 'High-end cafe', 'Quiet atmosphere', 'Beautiful decor'],
    bestFor: ['Client meetings', 'Peaceful work', 'Creative inspiration', 'Treat yourself days'],
    hours: '7:00-21:00',
    address: '65 Sukhumvit Soi 1, Bangkok',
    touristArea: true,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid', // Primary: already paid if staying
    notes: '฿200 minimum spend. Free if staying at hotel.'
  },
  {
    name: 'Bed Station Hostel Phuket',
    city: 'Phuket',
    country: 'Thailand',
    type: 'hostel',
    dayPassPrice: 3,
    monthlyPrice: 63,
    rating: 4.3,
    wifiSpeed: 60,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Beach-style co-working space', 'Pool', 'Bar', 'Social events', 'Surfboard rental'],
    bestFor: ['Beach lovers', 'Social butterflies', 'Work-life balance seekers'],
    hours: '8:00-20:00',
    address: 'Kata Beach, Phuket',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Great for working with ocean view. Can be social/noisy during peak hours.'
  }
];

// Updated Free Workspaces - Fix the wifiSpeed issue
export const thailandFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'National Library of Thailand',
    city: 'Bangkok',
    type: 'library',
    description: 'National library with historical collections and quiet reading rooms',
    cost: 'free',
    wifi: true,
    powerOutlets: true,
    hours: '9:00-17:00 (Tue-Sat)',
    amenities: ['Historical collection', 'Research materials', 'Reading rooms', 'AC', 'Free WiFi'],
    bestFor: ['Historical research', 'Quiet reading', 'Academic work'],
    noiseLevel: 1,
    address: 'Samsen Road, Bangkok'
  },
  {
    name: 'Bangkok City Library',
    city: 'Bangkok',
    type: 'library',
    description: 'Modern public library with air conditioning, quiet study zones, and good WiFi',
    cost: 'free',
    wifi: true,
    powerOutlets: true,
    hours: '8:30-21:00 (Tue-Sun)',
    amenities: ['Air conditioning', 'Quiet zones', 'Study rooms', 'Book collection', 'Restrooms'],
    bestFor: ['Deep work', 'Research', 'Quiet focused work', 'Reading'],
    noiseLevel: 1,
    address: 'Samsen Road, Dusit, Bangkok',
    notes: 'Bring ID for registration, very quiet environment'
  },
  {
    name: 'CentralWorld Food Court',
    city: 'Bangkok',
    type: 'mall',
    description: 'Massive shopping mall food court with free WiFi and plenty of seating',
    cost: 'purchase_required',
    wifi: true,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Food options', 'People watching', 'Central location', 'Air conditioning'],
    bestFor: ['Casual work', 'Meetings', 'People watching breaks', 'Lunch breaks'],
    noiseLevel: 4,
    address: 'CentralWorld, Pathum Wan, Bangkok',
    notes: 'Purchase required for seating, busy during lunch hours'
  },
  {
    name: 'Lumphini Park',
    city: 'Bangkok',
    type: 'park',
    description: 'Large public park with shaded seating areas and free public WiFi',
    cost: 'free',
    wifi: true,
    powerOutlets: false,
    hours: '4:30-21:00',
    amenities: ['Nature', 'Fresh air', 'Exercise areas', 'Lake view', 'Benches'],
    bestFor: ['Creative work', 'Reading', 'Outdoor meetings', 'Exercise breaks'],
    noiseLevel: 2,
    address: 'Rama IV Road, Pathum Wan, Bangkok',
    notes: 'Best in morning or late afternoon, avoid midday heat'
  },
  {
    name: 'Chiang Mai University Library',
    city: 'Chiang Mai',
    type: 'university',
    description: 'University library open to public with excellent facilities',
    cost: 'free',
    wifi: true,
    powerOutlets: true,
    hours: '8:00-20:00 (Mon-Fri), 9:00-17:00 (Sat-Sun)',
    amenities: ['Quiet floors', 'Study carrels', 'Academic resources', 'Air conditioning'],
    bestFor: ['Academic work', 'Research', 'Quiet study', 'Student networking'],
    noiseLevel: 1,
    address: 'Chiang Mai University, Suthep, Mueang',
    notes: 'May need visitor pass, very quiet and professional'
  }
];

// Updated Money Saving Tips - Simplify for new categories
export const thailandMoneySavingTips: MoneySavingTips = {
  general: [
    'Use Grab or Bolt apps instead of taxis for better prices',
    'Buy SIM cards from AIS/DTAC shops instead of airports (50% cheaper)',
    'Eat at local food courts (hawker centers) for 50-100 THB meals',
    'Take public transport (BTS/MRT in Bangkok) instead of taxis',
    'Use 7-Eleven ATMs (no fees for some international cards)'
  ],
  touristAreas: [
    'Avoid beachfront cafes in Phuket/Phi Phi - prices are 3x higher',
    'In Patong Beach, walk 2 blocks inland for reasonable prices',
    'Skip tourist trap restaurants with English-only menus',
    'Use public ferries instead of private speedboats to islands'
  ],
  nonTouristAreas: [
    'Small town cafes welcome laptop users and have cheaper drinks',
    'Local libraries have better amenities than in tourist cities',
    'Markets have food courts with WiFi for 30-50 THB meals',
    'University towns have cheaper accommodations and facilities'
  ],
  byPreference: {
    coworking: [
      'Ask for "nomad discount" - many spaces offer 10-20% off',
      'Share monthly membership with another nomad to split costs',
      'Use free trial days strategically across different providers',
      'Look for spaces further from tourist centers (cheaper rates)'
    ],
    cafe: [
      'Order Thai tea (cha yen) instead of coffee - half the price',
      'Tip 20-40 THB if staying 3+ hours to maintain good relations',
      'Visit during 2-5 PM when cafes are less busy',
      'Choose local chains (Amazon Cafe, Black Canyon) over international'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use noise-cancelling headphones for focus',
      'Arrive early to get best seating',
      'Check public holiday schedules in advance'
    ],
    hostel: [
      'Book dorms with workspace areas included',
      'Weekly rates are 30% cheaper than daily rates',
      'Use common areas during quiet morning hours (7-10 AM)',
      'Some hostels have partnerships with coworking spaces'
    ],
    hotel: [
      'Business hotels have better lobby workspaces',
      'Ask about day passes to hotel business centers',
      'Loyalty programs can include workspace access',
      'Small boutique hotels often have cozy work corners'
    ]
  }
};

// Updated Thailand Nomad Data
export const thailandNomadData: NomadData = {
  country: "Thailand",
  cities: ["Bangkok", "Chiang Mai", "Phuket", "Koh Phangan", "Krabi", "Pai", "Koh Samui", "Koh Tao"],
  
  internet: {
    speed: 85,
    reliability: 8,
    coworkingSpaces: 120,
    freePublicWifiSpots: 7
  },
  
  costs: {
    coworkingMonthly: 100, 
    simCardMonthly: 9,
    coffeeShopWork: 2,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 9,
    englishLevel: 7,
    safety: 8,
    nomadGroups: [
      "Chiang Mai Digital Nomads Facebook Group (50k+ members)",
      "Bangkok Expats & Digital Nomads",
      "Thailand Remote Workers",
      "Phuket Digital Nomads"
    ]
  },
  
  workspaces: thailandWorkspaces,
  
  freeWorkspaces: thailandFreeWorkspaces,
  
  moneySavingTips: thailandMoneySavingTips,
  
  coworkingMemberships: [
    {
      name: "Hubba Thailand Network",
      monthlyPrice: 100,
      coverage: ["Bangkok", "Chiang Mai"],
      dayPassAvailable: true,
      dayPassPrice: 11,
      trialDays: 2,
      benefits: [
        "Access to all Hubba locations",
        "Meeting room credits",
        "Community events",
        "Networking opportunities",
        "Mail handling service"
      ],
      bestFor: "Nomads splitting time between Bangkok and Chiang Mai",
      website: "https://hubba.co.th"
    },
    {
      name: "Punspace Alliance",
      monthlyPrice: 80,
      coverage: ["Chiang Mai"],
      dayPassAvailable: true,
      dayPassPrice: 7,
      trialDays: 3,
      benefits: [
        "Access to all 3 Punspace locations",
        "Quiet zones",
        "Kitchen facilities",
        "Printing services",
        "24/7 access"
      ],
      bestFor: "Nomads staying long-term in Chiang Mai",
      website: "https://punspace.com"
    }
  ],
  
  touristyCities: [
    "Phuket", 
    "Patong", 
    "Karon", 
    "Kata",
    "Koh Samui", 
    "Chaweng", 
    "Lamai",
    "Koh Phangan", 
    "Haad Rin",
    "Pattaya",
    "Krabi Town",
    "Ao Nang",
    "Phi Phi Islands",
    "Chiang Mai Old City",
    "Sukhumvit (Bangkok)",
    "Khao San Road (Bangkok)"
  ]
};