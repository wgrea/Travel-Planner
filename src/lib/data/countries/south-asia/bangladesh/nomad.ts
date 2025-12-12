// src/lib/data/countries/south-asia/bangladesh/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips } from '$lib/data/nomadData';

export const bangladeshWorkspaces: Workspace[] = [
  {
    name: 'GP Accelerator',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'coworking',
    dayPassPrice: 7,
    monthlyPrice: 109,
    rating: 4.3,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['High-speed Internet', 'Meeting Rooms', 'Event Space', 'Café', 'Startup Community'],
    bestFor: ['Entrepreneurs', 'Startups', 'Tech Professionals'],
    hours: '9:00-20:00',
    address: 'Gulshan 1, Dhaka',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1,
    notes: 'Startup-focused coworking space in Dhaka'
  },
  {
    name: 'The Office Dhaka',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'coworking',
    dayPassPrice: 9,
    monthlyPrice: 136,
    rating: 4.4,
    wifiSpeed: 60,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Business Lounge', 'Printing Services', 'Phone Booths', 'Kitchen', '24/7 Access'],
    bestFor: ['Professionals', 'Corporate Workers', 'Remote Teams'],
    hours: '24/7',
    address: 'Banani, Dhaka',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    membershipDiscount: 10,
    notes: 'Professional coworking space in Dhaka'
  },
  {
    name: 'Coffee World',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'cafe',
    hourlyRate: 1.36,
    rating: 4.0,
    wifiSpeed: 30,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['Air Conditioning', 'WiFi', 'Power Outlets', 'Coffee & Snacks', 'Multiple Locations'],
    bestFor: ['Casual Work', 'Meetings', 'Budget Option'],
    hours: '8:00-22:00',
    address: 'Gulshan 2, Dhaka',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Local coffee chain, purchase required'
  },
  {
    name: 'Chittagong Business Hub',
    city: 'Chittagong',
    country: 'Bangladesh',
    type: 'coworking',
    dayPassPrice: 5,
    monthlyPrice: 82,
    rating: 4.1,
    wifiSpeed: 45,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Port Views', 'Business Services', 'Meeting Rooms', 'Local Network', 'Printing'],
    bestFor: ['Business Travelers', 'Local Entrepreneurs', 'Exporters'],
    hours: '9:00-19:00',
    address: 'Agrabad, Chittagong',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 1,
    notes: 'Business-focused coworking in port city'
  },
  {
    name: 'North End Coffee Roasters',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'cafe',
    hourlyRate: 1.82,
    rating: 4.2,
    wifiSpeed: 35,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Artisanal Pastries', 'Comfortable Seating', 'Air Conditioning', 'Good Atmosphere'],
    bestFor: ['Coffee Lovers', 'Creative Work', 'Casual Meetings'],
    hours: '7:00-21:00',
    address: 'Dhanmondi, Dhaka',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Specialty coffee roastery and cafe'
  },
  {
    name: 'Sylhet Tea Hub',
    city: 'Sylhet',
    country: 'Bangladesh',
    type: 'cafe',
    hourlyRate: .91,
    rating: 4.0,
    wifiSpeed: 25,
    powerOutlets: 2,
    noiseLevel: 5,
    amenities: ['Local Tea', 'Traditional Snacks', 'Basic WiFi', 'Local Atmosphere', 'Affordable'],
    bestFor: ['Budget Travelers', 'Local Experience', 'Simple Work'],
    hours: '8:00-20:00',
    address: 'Sylhet City Center',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'small_purchase',
    includedWithStay: false,
    notes: 'Local tea shop, authentic Sylhet experience'
  },
  {
    name: 'Cox\'s Bazar Digital Nomads',
    city: 'Cox\'s Bazar',
    country: 'Bangladesh',
    type: 'coworking',
    dayPassPrice: 5,
    monthlyPrice: 73,
    rating: 4.1,
    wifiSpeed: 40,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Beach Views', 'Relaxed Atmosphere', 'Community Events', 'Coffee & Tea', 'Beach Access'],
    bestFor: ['Digital Nomads', 'Seasonal Workers', 'Beach Lifestyle'],
    hours: '9:00-18:00',
    address: 'Marine Drive, Cox\'s Bazar',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'direct_payment',
    includedWithStay: false,
    freeTrialDays: 2,
    notes: 'Beachside coworking space at world\'s longest beach'
  },
  // ADD HOSTEL/HOTEL EXAMPLES FOR BANGLADESH
  {
    name: 'Westin Dhaka Executive Lounge',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'hotel',
    dayPassPrice: 14,
    monthlyPrice: 1091,
    rating: 4.7,
    wifiSpeed: 70,
    powerOutlets: 5,
    noiseLevel: 1,
    amenities: ['Executive lounge', 'Business center', 'Premium service', 'Reliable power backup', 'Comfortable seating'],
    bestFor: ['Business work', 'Important meetings', 'Reliable internet', 'Escape from city chaos'],
    hours: '24/7 executive lounge access',
    address: 'Gulshan Avenue, Dhaka',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Premium business hotel with reliable facilities'
  },
  {
    name: 'Seagull Hotel Beach Lounge',
    city: 'Cox\'s Bazar',
    country: 'Bangladesh',
    type: 'hotel',
    dayPassPrice: 7,
    monthlyPrice: 364,
    rating: 4.4,
    wifiSpeed: 45,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Beachfront location', 'Ocean views', 'Restaurant', 'Pool access', 'Relaxed atmosphere'],
    bestFor: ['Beach work', 'Creative inspiration', 'Relaxed environment', 'Seasonal stays'],
    hours: 'Beach lounge: 7:00-21:00',
    address: 'Marine Drive, Cox\'s Bazar',
    // NEW BUDGET FIELDS:
    touristArea: true,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    dayPassForNonGuests: true,
    notes: 'Beachfront hotel with beautiful sea views'
  },
  {
    name: 'Radisson Blu Lobby',
    city: 'Chittagong',
    country: 'Bangladesh',
    type: 'hotel',
    dayPassPrice: 9,
    monthlyPrice: 727,
    rating: 4.5,
    wifiSpeed: 55,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Modern lobby', 'Business center', 'Restaurant', 'Port views', 'Professional atmosphere'],
    bestFor: ['Business travelers', 'Port-related work', 'Important calls', 'Reliable environment'],
    hours: '24/7 lobby access',
    address: 'Agrabad Commercial Area, Chittagong',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Business hotel in Chittagong\'s commercial district'
  },
  {
    name: 'Backpackers Inn Dhaka',
    city: 'Dhaka',
    country: 'Bangladesh',
    type: 'hostel',
    dayPassPrice: 3,
    monthlyPrice: 136,
    rating: 4.2,
    wifiSpeed: 35,
    powerOutlets: 3,
    noiseLevel: 3,
    amenities: ['Common work area', 'Kitchen', 'Travel desk', 'Local advice', 'Budget accommodation'],
    bestFor: ['Budget travelers', 'Backpackers', 'Short-term stays', 'Local networking'],
    hours: 'Common area: 7:00-22:00',
    address: 'Banani, Dhaka',
    // NEW BUDGET FIELDS:
    touristArea: false,
    budgetCategory: 'already_paid',
    includedWithStay: true,
    notes: 'Basic hostel with common work area'
  }
];

// ADD FREE WORKSPACES FOR BANGLADESH
export const bangladeshFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'National Library of Bangladesh',
    city: 'Dhaka',
    type: 'library',
    description: 'National library with reading rooms and study areas',
    cost: 'free',
    wifi: true,
    wifiSpeed: 25,
    powerOutlets: true,
    hours: '9:00-17:00 (Sat-Thu)',
    amenities: ['Reading rooms', 'Study areas', 'Local collection', 'AC', 'Quiet environment'],
    bestFor: ['Academic research', 'Quiet study', 'Reading', 'Focused work'],
    noiseLevel: 1,
    address: 'Sher-e-Bangla Nagar, Dhaka',
    notes: 'May require registration, closed Fridays',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Public University Libraries',
    city: 'Dhaka, Chittagong, Rajshahi',
    type: 'university',
    description: 'University libraries sometimes open to visitors',
    cost: 'free',
    wifi: true,
    wifiSpeed: 30,
    powerOutlets: true,
    hours: '8:00-20:00',
    amenities: ['Academic resources', 'Quiet environment', 'Study areas', 'AC', 'Computer access'],
    bestFor: ['Academic work', 'Research', 'Quiet study', 'Student atmosphere'],
    noiseLevel: 2,
    notes: 'May require visitor permission, check individual policies',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Shopping Mall Food Courts',
    city: 'Major cities',
    type: 'mall',
    description: 'Modern shopping mall food courts with WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 30,
    powerOutlets: true,
    hours: '10:00-22:00',
    amenities: ['Air conditioning', 'Food variety', 'Comfortable seating', 'Clean facilities', 'Toilets'],
    bestFor: ['Casual work', 'Meetings', 'Escape from heat/chaos', 'Quick sessions'],
    noiseLevel: 4,
    notes: 'Purchase required, can be crowded on weekends',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Traditional Tea Stalls',
    city: 'All cities',
    type: 'public_space',
    description: 'Local tea stalls with basic seating',
    cost: 'purchase_required',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-22:00',
    amenities: ['Local cha (tea)', 'Street snacks', 'Authentic experience', 'Very cheap', 'Cultural immersion'],
    bestFor: ['Quick work', 'Email checking', 'Local experience', 'Budget work'],
    noiseLevel: 5,
    notes: 'No WiFi, basic seating, authentic Bangladeshi experience',
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Public Parks',
    city: 'Major cities',
    type: 'park',
    description: 'Public parks and gardens',
    cost: 'free',
    wifi: false,
    powerOutlets: false,
    hours: '6:00-18:00',
    amenities: ['Green space', 'Fresh air', 'Exercise areas', 'Free', 'Peaceful'],
    bestFor: ['Reading', 'Planning', 'Creative thinking', 'Break from city chaos'],
    noiseLevel: 3,
    notes: 'Best in morning, bring power bank and water',
    budgetCategory: 'zero_spend'
  },
  {
    name: 'Community Centers',
    city: 'Various locations',
    type: 'community_center',
    description: 'Local community centers sometimes have quiet areas',
    cost: 'free',
    wifi: true,
    wifiSpeed: 20,
    powerOutlets: true,
    hours: '9:00-17:00',
    amenities: ['Community atmosphere', 'Basic facilities', 'Local interaction', 'Quiet corners'],
    bestFor: ['Casual work', 'Local networking', 'Community projects'],
    noiseLevel: 3,
    notes: 'Varies by location, may have community activities',
    budgetCategory: 'zero_spend'
  }
];

// ADD MONEY SAVING TIPS FOR BANGLADESH
export const bangladeshMoneySavingTips: MoneySavingTips = {
  general: [
    'Use CNG (auto-rickshaws) instead of taxis for short distances',
    'Eat at local "bhat" (rice) restaurants or street food (50-120 BDT per meal)',
    'Buy SIM cards from Grameenphone/Banglalink shops, not airports',
    'Stay in guesthouses or budget hotels instead of international chains',
    'Use public buses instead of private transport',
    'Shop at local markets instead of supermarkets/malls',
    'Drink local tea instead of coffee',
    'Travel by bus or train instead of domestic flights'
  ],
  touristAreas: [
    'Avoid restaurants in Gulshan/Banani diplomatic areas in Dhaka',
    'In Cox\'s Bazar, eat away from beachfront hotels',
    'Bargain for everything in tourist markets (start at 40% of asking price)',
    'Skip overpriced international restaurants for local Bangladeshi food',
    'Avoid buying souvenirs from airport/hotel shops'
  ],
  nonTouristAreas: [
    'Local tea stalls welcome everyone and are very cheap',
    'University areas have cheaper food and accommodations',
    'Markets have amazing street food for 20-50 BDT',
    'Family-run guesthouses offer best value and local experience',
    'Public libraries are free and relatively quiet'
  ],
  byPreference: {
    coworking: [
      'Ask for student/freelancer discount (10-15% off)',
      'Monthly rates are better value than daily passes',
      'Some spaces offer community events with free access',
      'Look for spaces in commercial areas rather than diplomatic zones',
      'Pay in Bangladeshi Taka instead of USD for better rates'
    ],
    cafe: [
      'Order local "cha" (tea) instead of coffee',
      'Visit during off-peak hours (2-5 PM)',
      'Buy large drink to justify longer stay',
      'Choose local cafes over international chains',
      'Some cafes offer unlimited tea refills for small fee'
    ],
    library: [
      'Bring power bank as electricity can be unreliable',
      'Check opening hours (many close Fridays)',
      'Arrive early for best seating',
      'Some libraries require registration/membership',
      'University libraries often have best facilities'
    ],
    hostel: [
      'Book accommodations with common work areas',
      'Monthly rates offer significant savings',
      'Use common areas during quieter hours',
      'Some budget hotels have rooftop work areas',
      'Look for places popular with business travelers'
    ],
    hotel: [
      'Business hotels have most reliable facilities',
      'Hotel restaurants during off-hours can be quiet',
      'Ask about day passes for non-guests',
      'International chains have best backup power',
      'Some hotels have business center access included'
    ]
  }
};

// ADD COWORKING MEMBERSHIPS FOR BANGLADESH
export const bangladeshCoworkingMemberships = [
  {
    name: "The Office Dhaka Premium",
    monthlyPrice: 136,
    coverage: ["Dhaka"],
    dayPassAvailable: true,
    dayPassPrice: 9,
    trialDays: 2,
    benefits: [
      "24/7 access",
      "Meeting room credits",
      "Printing services",
      "Kitchen access",
      "Business address service",
      "Networking events"
    ],
    bestFor: "Professional nomads needing reliable workspace in Dhaka",
    website: "https://theofficedhaka.com"
  },
  {
    name: "Cox's Bazar Digital Nomads Season Pass",
    monthlyPrice: 73,
    coverage: ["Cox's Bazar"],
    dayPassAvailable: true,
    dayPassPrice: 5,
    trialDays: 3,
    benefits: [
      "Beach view workspace",
      "Community events",
      "Tea/coffee included",
      "Beach access",
      "WiFi and printing",
      "Seasonal community"
    ],
    bestFor: "Nomads spending season at world's longest beach",
    website: "http://coxsbazarnomads.com"
  }
];

// UPDATED BANGLADESH NOMAD DATA
export const bangladeshNomadData: NomadData = {
  country: "Bangladesh",
  cities: ["Dhaka", "Chittagong", "Sylhet", "Cox's Bazar", "Rajshahi", "Khulna", "Barisal", "Rangpur"],
  
  internet: {
    speed: 35,
    reliability: 5,
    coworkingSpaces: 12,
    freePublicWifiSpots: 2
  },
  
  costs: {
    coworkingMonthly: 100,
    simCardMonthly: 4,
    coffeeShopWork: 1.36,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 3,
    englishLevel: 6,
    safety: 6,
    nomadGroups: [
      "Digital Nomads Bangladesh Facebook Group",
      "Dhaka Expats Community",
      "Bangladesh Remote Workers",
      "Cox's Bazar Digital Community"
    ]
  },
  
  workspaces: bangladeshWorkspaces,
  
  freeWorkspaces: bangladeshFreeWorkspaces,
  
  moneySavingTips: bangladeshMoneySavingTips,
  
  coworkingMemberships: bangladeshCoworkingMemberships,
  
  touristyCities: [
    "Gulshan/Banani (Dhaka diplomatic area)",
    "Cox's Bazar beachfront",
    "Sylhet tea garden areas",
    "Sundarbans gateway towns",
    "Old Dhaka tourist spots",
    "St. Martin\'s Island",
    "Bandarban hill areas"
  ]
};