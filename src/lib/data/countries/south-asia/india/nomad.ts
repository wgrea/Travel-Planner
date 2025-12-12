// src/lib/data/countries/south-asia/india/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips } from '$lib/data/nomadData';

export const indiaWorkspaces: Workspace[] = [
  {
    name: 'WeWork Galaxy, Bangalore',
    city: 'Bangalore',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 19,
    monthlyPrice: 241,
    rating: 4.7,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Café', 'Event Space', 'Printing Services'],
    bestFor: ['Tech Professionals', 'Startups', 'Networking'],
    hours: '24/7',
    address: 'Residency Road, Bangalore',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 3,
    membershipDiscount: 15,
    notes: 'Premium international coworking brand'
  },
  {
    name: 'Social Offline',
    city: 'Mumbai',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 14,
    monthlyPrice: 217,
    rating: 4.5,
    wifiSpeed: 80,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Café/Bar', 'Community Events', 'Music', 'Creative Space', 'Networking'],
    bestFor: ['Creatives', 'Young Professionals', 'Social Atmosphere'],
    hours: '9:00-23:00',
    address: 'Khar West, Mumbai',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    notes: 'Social workspace with cafe/bar'
  },
  {
    name: 'Starbucks',
    city: 'Delhi',
    country: 'India',
    type: 'cafe',
    hourlyRate: 2.4,
    rating: 4.2,
    wifiSpeed: 50,
    powerOutlets: 3,
    noiseLevel: 6,
    amenities: ['Air Conditioning', 'Reliable WiFi', 'Western Coffee', 'Comfortable Seating'],
    bestFor: ['Casual Work', 'Meetings', 'Reliable Chain'],
    hours: '7:00-23:00',
    address: 'Multiple locations in Delhi NCR',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'International chain, reliable but often crowded'
  },
  {
    name: 'Goa Coworking',
    city: 'Goa',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 10,
    monthlyPrice: 145,
    rating: 4.4,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Pool Access', 'Beach Proximity', 'Community Events', 'Yoga Classes', 'Relaxed Vibe'],
    bestFor: ['Digital Nomads', 'Beach Lifestyle', 'Creative Work'],
    hours: '9:00-19:00',
    address: 'Anjuna, Goa',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    notes: 'Beach lifestyle coworking in Goa'
  },
  {
    name: 'IndiQube Alpha',
    city: 'Bangalore',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 12,
    monthlyPrice: 181,
    rating: 4.3,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Business Services', 'Meeting Rooms', 'High-speed Internet', 'Lounge', 'Cafeteria'],
    bestFor: ['Professionals', 'Business Meetings', 'Corporate Environment'],
    hours: '24/7',
    address: 'Koramangala, Bangalore',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1,
    membershipDiscount: 10,
    notes: 'Business-focused Indian coworking chain'
  },
  {
    name: 'Café Coffee Day',
    city: 'Various',
    country: 'India',
    type: 'cafe',
    hourlyRate: 1.8,
    rating: 4.0,
    wifiSpeed: 30,
    powerOutlets: 2,
    noiseLevel: 5,
    amenities: ['Nationwide Chain', 'Basic WiFi', 'Coffee & Snacks', 'Air Conditioning'],
    bestFor: ['Budget Work', 'Quick Sessions', 'Reliable Locations'],
    hours: '8:00-22:00',
    address: 'Nationwide locations',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'India\'s largest coffee chain, basic facilities'
  },
  {
    name: '91springboard',
    city: 'Delhi',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 13,
    monthlyPrice: 193,
    rating: 4.4,
    wifiSpeed: 85,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Startup Community', 'Mentorship', 'Events', 'Meeting Rooms', 'Networking'],
    bestFor: ['Entrepreneurs', 'Startups', 'Innovators'],
    hours: '24/7',
    address: 'Okhla Phase 3, Delhi',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    notes: 'Startup-focused coworking community'
  },
  {
    name: 'The Backyard',
    city: 'Pune',
    country: 'India',
    type: 'coworking',
    dayPassPrice: 11,
    monthlyPrice: 157,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Garden Workspace', 'Community Kitchen', 'Events', 'Quiet Environment', 'Local Network'],
    bestFor: ['Creative Professionals', 'Sustainable Work', 'Community Focus'],
    hours: '9:00-21:00',
    address: 'Koregaon Park, Pune',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1,
    notes: 'Garden workspace with community focus'
  },
  // ADD HOSTEL/HOTEL EXAMPLES FOR INDIA
  {
    name: 'Zostel',
    city: 'Multiple cities',
    country: 'India',
    type: 'hostel',
    dayPassPrice: 4,
    monthlyPrice: 181,
    rating: 4.6,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Co-working lounges', 'Community events', 'Kitchen', 'Travel desk', 'Social atmosphere'],
    bestFor: ['Budget travelers', 'Social nomads', 'Backpackers', 'Community living'],
    hours: 'Common areas: 7:00-23:00',
    address: 'Multiple locations across India',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    dayPassForNonGuests: true,
    notes: 'India\'s largest hostel chain with co-working spaces'
  },
  {
    name: 'Taj Mahal Palace Lobby',
    city: 'Mumbai',
    country: 'India',
    type: 'hotel',
    dayPassPrice: 24,
    monthlyPrice: 3614,
    rating: 4.9,
    wifiSpeed: 80,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Luxury lobby', 'Historic building', 'Harbor view', 'Premium service', 'Business center'],
    bestFor: ['Luxury work', 'Important meetings', 'Client meetings', 'Treat yourself'],
    hours: '24/7 lobby access',
    address: 'Apollo Bunder, Mumbai',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Iconic luxury hotel, minimum spend for non-guests'
  },
  {
    name: 'Goa Backpackers Hostel',
    city: 'Goa',
    country: 'India',
    type: 'hostel',
    dayPassPrice: 5,
    monthlyPrice: 145,
    rating: 4.5,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Beachside location', 'Hammock work area', 'Surfboard rental', 'Yoga deck', 'Social events'],
    bestFor: ['Beach lifestyle', 'Surfing nomads', 'Social community', 'Relaxed work'],
    hours: 'Common area: 7:00-22:00',
    address: 'Anjuna Beach, Goa',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Beachside hostel with hammock work areas'
  },
  {
    name: 'ITC Gardenia Lobby Lounge',
    city: 'Bangalore',
    country: 'India',
    type: 'hotel',
    dayPassPrice: 18,
    monthlyPrice: 1807,
    rating: 4.7,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Business hotel lobby', 'Professional atmosphere', 'Restaurants', 'Quiet environment', 'Reliable power'],
    bestFor: ['Business work', 'Important calls', 'Professional meetings', 'Reliable environment'],
    hours: '24/7 lobby access',
    address: 'Richmond Road, Bangalore',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Business hotel with excellent facilities'
  }
];

// ADD FREE WORKSPACES FOR INDIA
export const indiaFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'National Library of India',
    city: 'Kolkata',
    type: 'library',
    description: 'National library with extensive collection and reading rooms',
    cost: 'free',
    wifi: true,
    wifiSpeed: 40,
    powerOutlets: true,
    hours: '9:00-20:00 (Mon-Sat)',
    amenities: ['Extensive collection', 'Reading rooms', 'Study areas', 'AC', 'Computer access', 'Historical building'],
    bestFor: ['Research', 'Academic work', 'Quiet study', 'Deep focus', 'Historical research'],
    noiseLevel: 1,
    address: 'Belvedere Estate, Kolkata',
    notes: 'Reader registration required, excellent facilities',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Delhi Public Library',
    city: 'Delhi',
    type: 'library',
    description: 'Public library network with multiple branches',
    cost: 'free',
    wifi: true,
    wifiSpeed: 30,
    powerOutlets: true,
    hours: '9:00-18:00 (Mon-Sat)',
    amenities: ['Multiple branches', 'Reading rooms', 'Newspapers', 'AC', 'Study areas'],
    bestFor: ['Quiet work', 'Reading', 'Research', 'Escape from heat'],
    noiseLevel: 2,
    address: 'Multiple locations across Delhi',
    notes: 'Basic facilities, can get crowded',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Mall Food Courts',
    city: 'All major cities',
    type: 'mall',
    description: 'Shopping mall food courts with WiFi and seating',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 35,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Air conditioning', 'Food variety', 'Comfortable seating', 'Clean facilities', 'Toilets'],
    bestFor: ['Casual work', 'Meetings', 'Escape from heat', 'Quick sessions'],
    noiseLevel: 4,
    notes: 'Purchase required, can be noisy during peak hours',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Public Parks',
    city: 'All major cities',
    type: 'park',
    description: 'Public parks and gardens with seating',
    cost: 'free',
    wifi: false,
    powerOutlets: false,
    hours: '5:00-20:00',
    amenities: ['Green space', 'Fresh air', 'Exercise areas', 'Free', 'Peaceful atmosphere'],
    bestFor: ['Reading', 'Planning', 'Creative thinking', 'Break from city noise'],
    noiseLevel: 3,
    notes: 'Best in early morning or evening, bring power bank',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'University Libraries',
    city: 'University towns',
    type: 'university',
    description: 'University libraries sometimes open to visitors',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: true,
    hours: '8:00-20:00',
    amenities: ['Academic resources', 'Quiet environment', 'Study areas', 'AC', 'Computer access'],
    bestFor: ['Academic work', 'Research', 'Quiet study', 'Student atmosphere'],
    noiseLevel: 1,
    notes: 'May require visitor permission or pass',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Chai Stalls',
    city: 'All cities',
    type: 'public_space',
    description: 'Traditional tea stalls with basic seating',
    cost: 'purchase_required',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-22:00',
    amenities: ['Local chai', 'Street food', 'Authentic experience', 'Very cheap', 'Cultural immersion'],
    bestFor: ['Quick work', 'Email checking', 'Local experience', 'Budget work'],
    noiseLevel: 5,
    notes: 'No WiFi, basic seating, authentic Indian experience',
    budgetCategory: 'small_purchase'
  }
];

// ADD MONEY SAVING TIPS FOR INDIA
export const indiaMoneySavingTips: MoneySavingTips = {
  general: [
    'Use Ola/Uber instead of auto-rickshaws without meters',
    'Eat at local "dhabas" or street food (50-150 INR per meal)',
    'Buy SIM cards from Airtel/Vodafone stores, not airports',
    'Stay in guesthouses or PG accommodations instead of hotels',
    'Use metro systems in Delhi, Bangalore, Mumbai (cheaper than taxis)',
    'Shop at local markets instead of malls',
    'Drink local chai instead of coffee',
    'Travel by train instead of flights for medium distances'
  ],
  touristAreas: [
    'Avoid restaurants in tourist areas like Connaught Place (Delhi) or Colaba (Mumbai)',
    'In Goa, eat away from beachfront restaurants',
    'Bargain for everything in tourist markets (start at 30% of asking price)',
    'Skip overpriced heritage hotels for day passes to their restaurants',
    'Avoid buying souvenirs from airport/train station shops'
  ],
  nonTouristAreas: [
    'Local cafes in residential areas welcome laptop users and are cheaper',
    'Public libraries have good facilities and are very quiet',
    'University towns have cheaper accommodations and food',
    'Markets have amazing street food for 20-50 INR',
    'Family-run homestays offer best value and local experience'
  ],
  byPreference: {
    coworking: [
      'Ask for startup/freelancer discount (10-20% off)',
      'Share monthly membership with another person',
      'Use free trial days across different providers',
      'Look for spaces in business districts for better deals',
      'Pay annually for biggest discounts (up to 30% off)'
    ],
    cafe: [
      'Order filter coffee or chai instead of espresso drinks',
      'Visit during off-peak hours (2-5 PM)',
      'Buy large drink to justify longer stay',
      'Choose Indian chains (Café Coffee Day, Barista) over international',
      'Some cafes offer unlimited refills on basic drinks'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Arrive early for best seating',
      'Check holiday schedules (many close on Sundays)',
      'Some libraries require registration/membership',
      'University libraries often have best facilities'
    ],
    hostel: [
      'Book hostels with co-working spaces included',
      'Monthly rates are 40-50% cheaper than daily',
      'Use common areas during quiet hours (9 AM - 12 PM)',
      'Some hostels have partnerships with coworking spaces',
      'Look for "workation" packages'
    ],
    hotel: [
      'Business hotels have best lobby workspaces',
      'Heritage hotels have beautiful settings for inspiration',
      'Ask about day passes to hotel business centers',
      'Use hotel restaurants during non-meal times',
      'Loyalty programs can include workspace access'
    ]
  }
};

// ADD COWORKING MEMBERSHIPS FOR INDIA
export const indiaCoworkingMemberships = [
  {
    name: "WeWork All Access India",
    monthlyPrice: 301,
    coverage: ["All major cities"],
    dayPassAvailable: true,
    dayPassPrice: 18,
    trialDays: 7,
    benefits: [
      "Access to all WeWork locations in India",
      "Meeting room credits",
      "Business address service",
      "Community events",
      "24/7 access",
      "Networking opportunities"
    ],
    bestFor: "Nomads traveling between multiple Indian cities",
    website: "https://www.wework.com"
  },
  {
    name: "91springboard Community Pass",
    monthlyPrice: 217,
    coverage: ["Delhi", "Bangalore", "Mumbai", "Pune"],
    dayPassAvailable: true,
    dayPassPrice: 13,
    trialDays: 3,
    benefits: [
      "Access to all 91springboard locations",
      "Startup community access",
      "Mentorship sessions",
      "Investor connects",
      "Events and workshops"
    ],
    bestFor: "Entrepreneurs and startup-focused nomads",
    website: "https://www.91springboard.com"
  },
  {
    name: "IndiQube Network Pass",
    monthlyPrice: 193,
    coverage: ["Bangalore", "Delhi", "Hyderabad", "Chennai"],
    dayPassAvailable: true,
    dayPassPrice: 12,
    trialDays: 2,
    benefits: [
      "Access to IndiQube network locations",
      "Business services",
      "Meeting room credits",
      "Cafeteria access",
      "Corporate environment"
    ],
    bestFor: "Professional nomads needing corporate-style workspace",
    website: "https://www.indiqube.com"
  }
];

// UPDATED INDIA NOMAD DATA
export const indiaNomadData: NomadData = {
  country: "India",
  cities: ["Delhi", "Mumbai", "Bangalore", "Goa", "Pune", "Chennai", "Hyderabad", "Kolkata", "Ahmedabad", "Jaipur"],
  
  internet: {
    speed: 50,
    reliability: 6,
    coworkingSpaces: 65,
    freePublicWifiSpots: 5
  },
  
  costs: {
    coworkingMonthly: 193,
    simCardMonthly: 4,
    coffeeShopWork: 2.2,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 7,
    englishLevel: 8,
    safety: 6,
    nomadGroups: [
      "Digital Nomads India Facebook Group",
      "Bangalore Remote Workers",
      "Goa Digital Nomads Community",
      "Delhi Expats & Nomads",
      "India Remote Workers Slack"
    ]
  },
  
  workspaces: indiaWorkspaces,
  
  freeWorkspaces: indiaFreeWorkspaces,
  
  moneySavingTips: indiaMoneySavingTips,
  
  coworkingMemberships: indiaCoworkingMemberships,
  
  touristyCities: [
    "Connaught Place, Delhi",
    "Colaba, Mumbai",
    "Anjuna/Calangute, Goa",
    "Hauz Khas Village, Delhi",
    "Juhu Beach, Mumbai",
    "Fort Kochi, Kochi",
    "Jaipur Old City",
    "Agra near Taj Mahal",
    "Shimla Mall Road",
    "Manali Old Town"
  ]
};