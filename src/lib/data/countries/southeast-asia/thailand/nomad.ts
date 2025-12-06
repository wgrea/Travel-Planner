// src/lib/data/countries/southeast-asia/thailand.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips } from '$lib/data/nomadData';

// Your existing workspaces with enhancements
export const thailandWorkspaces: Workspace[] = [
  {
    name: 'Hubba',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 450, // THB
    monthlyPrice: 5000, // THB
    rating: 4.6,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths'],
    bestFor: ['Startups', 'Networking', 'Professional meetings'],
    hours: '24/7',
    address: 'Multiple locations in Ekkamai and Thong Lor',
    // NEW FIELDS:
    freeTrialDays: 2, // Hubba offers 2-day free trial
    membershipDiscount: 20, // 20% discount for 6-month commitment
    touristArea: false // Located in business districts
  },
  {
    name: 'The Hive',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 350,
    monthlyPrice: 4000,
    rating: 4.4,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Terrace', 'Cafe', 'Meeting Rooms', 'Event Space', 'Mail Handling'],
    bestFor: ['Creative work', 'Collaboration', 'Social environment'],
    hours: '8:00-20:00',
    // NEW FIELDS:
    freeTrialDays: 1,
    touristArea: false
  },
  {
    name: 'The Work Loft',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 450,
    monthlyPrice: 5000,
    rating: 4.6,
    wifiSpeed: 95,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths'],
    bestFor: ['Startups', 'Networking', 'Professional meetings'],
    hours: '24/7',
    address: 'Sukhumvit Soi 63, Bangkok',
    // NEW FIELDS:
    freeTrialDays: 3,
    membershipDiscount: 15,
    touristArea: false
  },
  {
    name: 'JustCo',
    city: 'Bangkok', 
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 400,
    monthlyPrice: 4500,
    rating: 4.5,
    wifiSpeed: 90,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Infinity Pool', 'Cafe', 'Meeting Rooms', 'Event Space', 'Business Lounge'],
    bestFor: ['Corporate teams', 'Professional services', 'Business meetings'],
    hours: '24/7',
    address: 'Gaysorn Tower, Bangkok',
    // NEW FIELDS:
    freeTrialDays: 1,
    touristArea: true // Located in luxury shopping area
  },
  {
    name: 'Stories Cafe',
    city: 'Bangkok',
    country: 'Thailand', 
    type: 'cafe',
    dayPassPrice: 150, // Minimum consumption
    monthlyPrice: 0,
    rating: 4.3,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Comfortable Seating', 'Power Outlets', 'Good Atmosphere'],
    bestFor: ['Casual work', 'Creative sessions', 'Coffee lovers'],
    hours: '7:00-22:00',
    address: 'Thong Lor, Bangkok',
    // NEW FIELDS:
    touristArea: true // Thong Lor is upscale/expat area
  },
  {
    name: 'Punspace',
    city: 'Chiang Mai',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 250,
    monthlyPrice: 3000,
    rating: 4.7,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['High-speed WiFi', 'Air Conditioning', 'Kitchen', 'Quiet Zones', 'Printing'],
    bestFor: ['Focused work', 'Digital nomads', 'Long-term work'],
    hours: '24/7',
    address: 'Multiple locations in Nimmanhaemin area',
    // NEW FIELDS:
    freeTrialDays: 3, // Punspace offers generous trials
    membershipDiscount: 10,
    touristArea: false // Nimman is more local/residential
  },
  {
    name: 'CAMP',
    city: 'Chiang Mai',
    country: 'Thailand',
    type: 'cafe',
    dayPassPrice: 100, // Minimum consumption
    monthlyPrice: 0, // Pay-as-you-go
    rating: 4.2,
    wifiSpeed: 70,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Cafe', 'Free WiFi', 'Power Outlets', 'Study Areas'],
    bestFor: ['Casual work', 'Students', 'Short sessions'],
    hours: '24/7',
    address: 'MAYA Lifestyle Shopping Center',
    // NEW FIELDS:
    touristArea: true // MAYA mall is touristy
  },
  {
    name: 'Kohub',
    city: 'Koh Phangan',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 300,
    monthlyPrice: 3500,
    rating: 4.3,
    wifiSpeed: 65,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Pool', 'Cafe', 'Beach Access', 'Meeting Rooms', 'Community Events'],
    bestFor: ['Island lifestyle', 'Community', 'Work-life balance'],
    hours: '8:00-18:00',
    // NEW FIELDS:
    freeTrialDays: 2,
    touristArea: true // Entire island is tourist destination
  },
  {
    name: 'IBS',
    city: 'Phuket',
    country: 'Thailand',
    type: 'coworking',
    dayPassPrice: 400,
    monthlyPrice: 4500,
    rating: 4.1,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Meeting Rooms', 'Business Lounge', 'Printing', 'Virtual Office'],
    bestFor: ['Business meetings', 'Professional services', 'Corporate work'],
    hours: '9:00-18:00',
    // NEW FIELDS:
    freeTrialDays: 1,
    touristArea: true // Phuket is major tourist destination
  },
];

// NEW: Free Workspaces in Thailand
export const thailandFreeWorkspaces: FreeWorkspace[] = [
    {
    name: 'National Library of Thailand',
    city: 'Bangkok',
    type: 'library',
    description: 'National library with historical collections and quiet reading rooms',
    cost: 'free',
    wifi: true,
    wifiSpeed: 35, // This should be removed or changed - FreeWorkspace has wifi: boolean
    powerOutlets: true, // Changed from number to boolean
    hours: '9:00-17:00 (Tue-Sat)',
    amenities: ['Historical collection', 'Research materials', 'Reading rooms', 'AC', 'Free WiFi'],
    bestFor: ['Historical research', 'Quiet reading', 'Academic work'],
    noiseLevel: 1,
    address: 'Samsen Road, Bangkok'
  },
  {
    name: 'Phuket Public Library',
    city: 'Phuket',
    type: 'library',
    description: 'Local public library with basic facilities',
    cost: 'free',
    wifi: true,
    wifiSpeed: 25, // This should be removed or changed
    powerOutlets: true, // Changed from number to boolean
    hours: '8:30-16:30 (Mon-Fri)',
    amenities: ['Local collection', 'Reading areas', 'AC', 'Basic WiFi'],
    bestFor: ['Casual reading', 'Quiet work', 'Escaping heat'],
    noiseLevel: 2,
    address: 'Phuket Town',
    notes: 'Limited English books, good for quiet work'
  },
  {
    name: 'Bangkok City Library',
    city: 'Bangkok',
    type: 'library',
    description: 'Modern public library with air conditioning, quiet study zones, and good WiFi',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
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
    wifiSpeed: 30,
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
    wifiSpeed: 15,
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
    wifiSpeed: 60,
    powerOutlets: true,
    hours: '8:00-20:00 (Mon-Fri), 9:00-17:00 (Sat-Sun)',
    amenities: ['Quiet floors', 'Study carrels', 'Academic resources', 'Air conditioning'],
    bestFor: ['Academic work', 'Research', 'Quiet study', 'Student networking'],
    noiseLevel: 1,
    address: 'Chiang Mai University, Suthep, Mueang',
    notes: 'May need visitor pass, very quiet and professional'
  },
  {
    name: '7-Eleven Seating Areas',
    city: 'Multiple',
    type: 'public_space',
    description: 'Many 7-Eleven stores have seating areas with air conditioning',
    cost: 'purchase_required',
    wifi: false,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Air conditioning', 'Convenient location', 'Snacks/drinks'],
    bestFor: ['Quick work sessions', 'Checking email', 'Short breaks'],
    noiseLevel: 3,
    notes: 'Purchase required, limited to 30-60 minutes typically'
  },
  {
    name: 'Local Market Food Courts',
    city: 'Multiple',
    type: 'public_space',
    description: 'Traditional Thai market food courts with cheap food and casual seating',
    cost: 'purchase_required',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-20:00',
    amenities: ['Local food', 'Cultural experience', 'Cheap prices'],
    bestFor: ['Casual work', 'Lunch breaks', 'Cultural immersion'],
    noiseLevel: 5,
    notes: 'Very authentic, noisy, but great for short work sessions'
  }
];

// NEW: Money Saving Tips for Thailand
export const thailandMoneySavingTips: MoneySavingTips = {
  general: [
    'Use Grab or Bolt apps instead of taxis for better prices',
    'Buy SIM cards from AIS/DTAC shops instead of airports (50% cheaper)',
    'Eat at local food courts (hawker centers) for 50-100 THB meals',
    'Take public transport (BTS/MRT in Bangkok) instead of taxis',
    'Shop at local markets instead of tourist markets for souvenirs',
    'Use 7-Eleven ATMs (no fees for some international cards)',
    'Stay in local guesthouses instead of international hotel chains'
  ],
  touristAreas: [
    'Avoid beachfront cafes in Phuket/Phi Phi - prices are 3x higher',
    'In Patong Beach, walk 2 blocks inland for reasonable prices',
    'Skip tourist trap restaurants with English-only menus',
    'Use public ferries instead of private speedboats to islands',
    'Book activities through local agents, not hotel concierge',
    'Visit temples early morning to avoid crowds and heat'
  ],
  nonTouristAreas: [
    'Small town cafes welcome laptop users and have cheaper drinks',
    'Local libraries have better amenities than in tourist cities',
    'Markets have food courts with WiFi for 30-50 THB meals',
    'Community centers sometimes offer free workspace days',
    'University towns have cheaper accommodations and facilities'
  ],
  byPreference: {
    coworking: [
      'Ask for "nomad discount" - many spaces offer 10-20% off',
      'Share monthly membership with another nomad to split costs',
      'Use free trial days strategically across different providers',
      'Look for spaces further from tourist centers (cheaper rates)',
      'Book monthly passes in person for better negotiation'
    ],
    cafe: [
      'Order Thai tea (cha yen) instead of coffee - half the price',
      'Tip 20-40 THB if staying 3+ hours to maintain good relations',
      'Visit during 2-5 PM when cafes are less busy',
      'Choose local chains (Amazon Cafe, Black Canyon) over international',
      'Buy a large drink to justify longer stay'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use noise-cancelling headphones for focus',
      'Arrive early to get best seating',
      'Check public holiday schedules in advance',
      'Some libraries offer free printing (limited pages)'
    ],
    hostel: [
      'Book dorms with workspace areas included',
      'Weekly rates are 30% cheaper than daily rates',
      'Use common areas during quiet morning hours (7-10 AM)',
      'Some hostels have partnerships with coworking spaces',
      'Ask about "workation" packages for longer stays'
    ],
    hotel: [
      'Business hotels have better lobby workspaces',
      'Ask about day passes to hotel business centers',
      'Loyalty programs can include workspace access',
      'Use hotel restaurants during non-meal times',
      'Small boutique hotels often have cozy work corners'
    ]
  }
};

// Updated Thailand Nomad Data with all new features
export const thailandNomadData: NomadData = {
  country: "Thailand",
  cities: ["Bangkok", "Chiang Mai", "Phuket", "Koh Phangan", "Krabi", "Pai", "Koh Samui", "Koh Tao", "Ayutthaya"],
  
  internet: {
    speed: 85, // Good overall speed with variations by location
    reliability: 8, // Very reliable in cities, less in islands
    coworkingSpaces: 120, // Many options across the country
    freePublicWifiSpots: 7 // Many malls, parks, and public spaces have free WiFi
  },
  
  costs: {
    coworkingMonthly: 3500, // THB average
    simCardMonthly: 300, // THB for good data plan
    coffeeShopWork: 80, // THB per session (minimum spend)
    libraryAccess: 0 // All public libraries are free
  },
  
  community: {
    expatSize: 9, // Huge digital nomad community
    englishLevel: 7, // Good in tourist areas, basic elsewhere
    safety: 8, // Generally very safe
    nomadGroups: [
      "Chiang Mai Digital Nomads Facebook Group (50k+ members)",
      "Bangkok Expats & Digital Nomads",
      "Thailand Remote Workers",
      "Phuket Digital Nomads",
      "Koh Phangan Nomad Community"
    ]
  },
  
  workspaces: thailandWorkspaces,
  
  // NEW SECTIONS
  freeWorkspaces: thailandFreeWorkspaces,
  
  moneySavingTips: thailandMoneySavingTips,
  
  // Local coworking memberships available in Thailand
  coworkingMemberships: [
    {
      name: "Hubba Thailand Network",
      monthlyPrice: 3500,
      coverage: ["Bangkok", "Chiang Mai"],
      dayPassAvailable: true,
      dayPassPrice: 400,
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
      monthlyPrice: 2800,
      coverage: ["Chiang Mai"],
      dayPassAvailable: true,
      dayPassPrice: 250,
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
  
  // Tourist-heavy cities in Thailand
  touristyCities: [
    "Phuket", 
    "Patong", 
    "Karon", 
    "Kata", // All Phuket areas
    "Koh Samui", 
    "Chaweng", 
    "Lamai", // Samui areas
    "Koh Phangan", 
    "Haad Rin", // Full Moon Party area
    "Pattaya",
    "Krabi Town",
    "Ao Nang",
    "Phi Phi Islands",
    "Chiang Mai Old City",
    "Sukhumvit (Bangkok)",
    "Khao San Road (Bangkok)"
  ]
};
