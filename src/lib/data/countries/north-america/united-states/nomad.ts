// src/lib/data/countries/north-america/united-states/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const unitedStatesWorkspaces: Workspace[] = [
  {
    name: 'WeWork',
    city: 'New York',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 50,
    monthlyPrice: 500,
    rating: 4.5,
    wifiSpeed: 200,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Free Coffee/Tea', 'Printing', 'Event Space', 'Phone Booths', 'Networking Events', '24/7 Access'],
    bestFor: ['Startups', 'Corporate teams', 'Networking', 'Professional meetings', 'Global network access'],
    hours: '24/7',
    address: 'Multiple locations in Manhattan, Brooklyn',
    website: 'https://www.wework.com',
    freeTrialDays: 1,
    membershipDiscount: 0,
    touristArea: false,
    // NEW: Budget categorization
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'All Access membership available for multi-city access'
  },
  {
    name: 'Industrious',
    city: 'New York',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 45,
    monthlyPrice: 550,
    rating: 4.6,
    wifiSpeed: 180,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Lounge Areas', 'Cafe', 'Meeting Rooms', 'Event Space', 'Mail Handling', 'Community Manager', 'Wellness rooms'],
    bestFor: ['Professional services', 'Consultants', 'Focused work', 'Corporate professionals'],
    hours: '8:00-18:00',
    address: 'Financial District, NYC',
    website: 'https://www.industriousoffice.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'The Wing',
    city: 'New York',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 40,
    monthlyPrice: 250,
    rating: 4.4,
    wifiSpeed: 150,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Women-focused', 'Beauty Room', 'Lactation Room', 'Library', 'Cafe', 'Event Space', 'Community events'],
    bestFor: ['Women entrepreneurs', 'Networking', 'Community building', 'Professional women'],
    hours: '7:00-22:00',
    website: 'https://www.the-wing.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Starbucks Reserve Roastery',
    city: 'New York',
    country: 'United States',
    type: 'cafe',
    dayPassPrice: 10,
    rating: 4.3,
    wifiSpeed: 100,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Coffee', 'Comfortable Seating', 'Power Outlets', 'Food', 'Unique experience'],
    bestFor: ['Casual work', 'Creative sessions', 'Coffee lovers', 'Tourist experience'],
    hours: '6:30-23:00',
    address: 'Chelsea, NYC',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 10,
    budgetCategory: 'small_purchase',
    notes: 'Large, busy space. Good for short work sessions'
  },
  {
    name: 'Spaces',
    city: 'San Francisco',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 55,
    monthlyPrice: 600,
    rating: 4.5,
    wifiSpeed: 220,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Roof Terrace', 'Event Space', 'Phone Booths', 'Tech community'],
    bestFor: ['Tech startups', 'VC meetings', 'Tech networking', 'Silicon Valley connections'],
    hours: '24/7',
    address: 'SoMa, San Francisco',
    website: 'https://www.spacesworks.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Cross Campus',
    city: 'Los Angeles',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 40,
    monthlyPrice: 450,
    rating: 4.4,
    wifiSpeed: 180,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Event Space', 'Cafe', 'Meeting Rooms', 'Networking Events', 'Wellness Room', 'Creative community'],
    bestFor: ['Creative industry', 'Entertainment', 'Startups', 'Media professionals'],
    hours: '24/7',
    address: 'Downtown LA',
    website: 'https://crosscamp.us',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Capital Factory',
    city: 'Austin',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 35,
    monthlyPrice: 400,
    rating: 4.7,
    wifiSpeed: 200,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Maker Space', 'VR Lab', 'Event Space', 'Meeting Rooms', 'Investor Access', 'Startup community'],
    bestFor: ['Tech startups', 'Hardware companies', 'Entrepreneurs', 'Texas startup scene'],
    hours: '24/7',
    website: 'https://capitalfactory.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Chicago Athletic Association',
    city: 'Chicago',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 45,
    monthlyPrice: 500,
    rating: 4.6,
    wifiSpeed: 190,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Historic Building', 'Gym Access', 'Meeting Rooms', 'Restaurant', 'Event Space', 'Premium amenities'],
    bestFor: ['Professional services', 'Consultants', 'Corporate teams', 'Luxury workspace'],
    hours: '8:00-20:00',
    website: 'https://www.chicagoathletichotel.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Historic landmark building with premium facilities'
  },
  {
    name: 'The Farm',
    city: 'Miami',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 40,
    monthlyPrice: 450,
    rating: 4.5,
    wifiSpeed: 180,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Outdoor Workspace', 'Pool', 'Cafe', 'Event Space', 'Networking', 'Tropical setting'],
    bestFor: ['Lifestyle businesses', 'Remote workers', 'Creative work', 'Miami lifestyle'],
    hours: '8:00-20:00',
    website: 'https://thefarmsobe.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD MORE CHICAGO SPECIFIC SPACES
  {
    name: '1871',
    city: 'Chicago',
    country: 'United States',
    type: 'coworking',
    dayPassPrice: 30,
    monthlyPrice: 350,
    rating: 4.7,
    wifiSpeed: 210,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Tech community', 'Mentor network', 'Event space', 'Startup resources', 'Incubator programs'],
    bestFor: ['Tech startups', 'Entrepreneurs', 'Chicago tech scene', 'Early-stage companies'],
    hours: '24/7',
    address: 'The Merchandise Mart, Chicago',
    website: 'https://1871.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment',
    notes: 'Chicago\'s largest tech incubator. Great networking opportunities'
  },
  {
    name: 'The Robey Hotel Lobby',
    city: 'Chicago',
    country: 'United States',
    type: 'hotel',
    dayPassPrice: 15, // Minimum spend
    rating: 4.5,
    wifiSpeed: 150,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Designer lobby', 'Rooftop views', 'Art deco style', 'Cafe', 'Upscale atmosphere'],
    bestFor: ['Client meetings', 'Creative work', 'Luxury environment', 'Wicker Park location'],
    hours: 'Lobby: 7:00-22:00',
    address: '2018 W North Ave, Chicago',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    minimumPurchase: 15,
    notes: 'Beautiful art deco hotel in trendy Wicker Park'
  },
  {
    name: 'Dollop Coffee Co.',
    city: 'Chicago',
    country: 'United States',
    type: 'cafe',
    dayPassPrice: 8,
    rating: 4.4,
    wifiSpeed: 120,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Local coffee roaster', 'Comfortable seating', 'Power outlets', 'Food menu', 'Chicago chain'],
    bestFor: ['Casual work', 'Coffee enthusiasts', 'Local vibe', 'Neighborhood work'],
    hours: '6:00-19:00',
    address: 'Multiple locations in Chicago',
    touristArea: false,
    minimumPurchase: 8,
    budgetCategory: 'small_purchase'
  },
  {
    name: 'Freehand Chicago Hostel',
    city: 'Chicago',
    country: 'United States',
    type: 'hostel',
    dayPassPrice: 10,
    monthlyPrice: 900, // Monthly accommodation in USD
    rating: 4.6,
    wifiSpeed: 140,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['Co-working lounge', 'Rooftop bar', 'Game room', 'Kitchen', 'Social events', 'Designer hostel'],
    bestFor: ['Budget travelers', 'Social nomads', 'Young professionals', 'River North location'],
    hours: 'Co-working lounge: 8:00-22:00',
    address: '19 E Ohio St, Chicago',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Upscale hostel with great co-working space and social atmosphere'
  },
  {
    name: 'Harold Washington Library Center',
    city: 'Chicago',
    country: 'United States',
    type: 'library',
    dayPassPrice: 0,
    rating: 4.8,
    wifiSpeed: 100,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['9-story library', 'Winter Garden', 'Study rooms', 'Extensive collection', 'Free WiFi', 'Quiet floors'],
    bestFor: ['Serious study', 'Research', 'Quiet work', 'Students', 'Budget work'],
    hours: '9:00-21:00 (Mon-Thu), 9:00-17:00 (Fri-Sat), 1:00-17:00 (Sun)',
    address: '400 S State St, Chicago',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'zero_spend',
    notes: 'Largest public library in Chicago. Beautiful Winter Garden on top floor'
  }
];

// Add Free Workspaces for United States
export const unitedStatesFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'New York Public Library - Stephen A. Schwarzman Building',
    city: 'New York',
    type: 'library',
    description: 'Iconic main branch of NYPL with historic reading rooms and free WiFi',
    cost: 'free',
    wifi: true,
    wifiSpeed: 150,
    powerOutlets: true,
    hours: '10:00-18:00 (Mon-Sat), 13:00-17:00 (Sun)',
    amenities: ['Historic reading rooms', 'Research collections', 'Study carrels', 'Rose Main Reading Room', 'Free tours'],
    bestFor: ['Academic research', 'Quiet study', 'Historic atmosphere', 'Tourist experience'],
    noiseLevel: 1,
    address: '476 5th Ave, New York, NY',
    notes: 'Iconic NYC landmark. Get there early for best seats in Rose Reading Room'
  },
  {
    name: 'Golden Gate Park',
    city: 'San Francisco',
    type: 'park',
    description: 'Massive urban park with WiFi hotspots and beautiful natural settings',
    cost: 'free',
    wifi: true,
    wifiSpeed: 50,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Japanese Tea Garden', 'Botanical Garden', 'Museums', 'Lakes', 'Picnic areas', 'Nature'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Exercise breaks', 'Nature inspiration'],
    noiseLevel: 2,
    address: 'San Francisco, CA',
    notes: 'WiFi available in certain areas. Use mobile hotspot for better reliability'
  },
  {
    name: 'Westfield Century City Mall',
    city: 'Los Angeles',
    type: 'mall',
    description: 'Upscale shopping mall with food court seating and reliable WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 120,
    powerOutlets: true,
    hours: '10:00-21:00',
    amenities: ['Food court', 'Air conditioning', 'Comfortable seating', 'People watching', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Urban work'],
    noiseLevel: 4,
    address: '10250 Santa Monica Blvd, Los Angeles, CA',
    notes: 'Purchase required for food court seating. Popular with LA remote workers'
  },
  {
    name: 'University of Chicago Libraries',
    city: 'Chicago',
    type: 'university',
    description: 'Prestigious university libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 180,
    powerOutlets: true,
    hours: 'Varies by library (typically 8:00-22:00)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Gothic architecture'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student atmosphere'],
    noiseLevel: 1,
    address: 'Hyde Park, Chicago',
    notes: 'Visitor access available. Some libraries may require temporary pass'
  },
  {
    name: 'Austin Central Library',
    city: 'Austin',
    type: 'library',
    description: 'Modern award-winning library with rooftop garden and river views',
    cost: 'free',
    wifi: true,
    wifiSpeed: 200,
    powerOutlets: true,
    hours: '10:00-21:00 (Mon-Thu), 10:00-18:00 (Fri-Sat), 12:00-18:00 (Sun)',
    amenities: ['Rooftop garden', 'Meeting rooms', 'Tech lab', 'Cafe', 'River views', 'Modern design'],
    bestFor: ['Creative work', 'Tech work', 'Group study', 'Modern environment'],
    noiseLevel: 2,
    address: '710 W Cesar Chavez St, Austin, TX',
    notes: 'One of the best public libraries in the US. Amazing rooftop workspace'
  }
];

// Add Money Saving Tips for United States
export const unitedStatesMoneySavingTips: MoneySavingTips = {
  general: [
    'Use public libraries for free high-quality workspace',
    'Take advantage of free WiFi in most coffee shops (with purchase)',
    'Consider hostel co-working spaces if traveling on a budget',
    'Use hotel lobbies during off-peak hours (not during check-in/out times)',
    'Look for coworking space free trial days'
  ],
  touristAreas: [
    'Avoid Times Square cafes in NYC - prices are 2-3x higher',
    'In San Francisco Fisherman\'s Wharf, walk a few blocks inland',
    'Skip Hollywood Blvd cafes in LA - crowded and expensive',
    'Use public transport instead of taxis/rideshare in tourist areas'
  ],
  nonTouristAreas: [
    'Local public libraries are excellent and free',
    'University neighborhoods have cheaper amenities',
    'Local coffee shops in residential areas welcome remote workers',
    'Business districts have better amenities during weekdays'
  ],
  byPreference: {
    coworking: [
      'Use WeWork All Access for multi-city flexibility',
      'Ask about startup/entrepreneur discounts',
      'Share monthly membership with a friend',
      'Use free trial days across different chains'
    ],
    cafe: [
      'Order drip coffee instead of specialty drinks',
      'Tip 15-20% if staying several hours',
      'Visit during off-peak hours (2-4 PM)',
      'Use local coffee chains over Starbucks for lower prices'
    ],
    library: [
      'Reserve study rooms in advance',
      'Bring noise-canceling headphones',
      'Use library printing services (often cheaper)',
      'Check for free workshops and events'
    ],
    hostel: [
      'Book directly for better rates',
      'Use kitchen facilities to save on food',
      'Work during quiet morning hours',
      'Some hostels offer free tours and activities'
    ],
    hotel: [
      'Business hotels have best work facilities',
      'Hotel lobbies are often free to use',
      'Small boutique hotels may have cozy work corners',
      'Loyalty programs offer free amenities'
    ]
  }
};

// Add Coworking Memberships for United States
export const unitedStatesCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "WeWork All Access",
    monthlyPrice: 299,
    coverage: ["US-wide", "Global locations"],
    dayPassAvailable: true,
    dayPassPrice: 35,
    trialDays: 1,
    benefits: [
      "Access to all WeWork locations",
      "Meeting room credits",
      "24/7 access",
      "High-speed internet",
      "Community events",
      "Business address options"
    ],
    bestFor: "Digital nomads traveling across the US needing consistent workspace",
    website: "https://www.wework.com"
  },
  {
    name: "Regus Businessworld",
    monthlyPrice: 199,
    coverage: ["US-wide", "Global network"],
    dayPassAvailable: true,
    dayPassPrice: 30,
    trialDays: 0,
    benefits: [
      "Largest global network",
      "Business address service",
      "24/7 access at most locations",
      "Meeting room discounts",
      "Mail handling"
    ],
    bestFor: "Business travelers needing official addresses and multiple US locations",
    website: "https://www.regus.com"
  },
  {
    name: "Spaces Global Pass",
    monthlyPrice: 250,
    coverage: ["Major US cities"],
    dayPassAvailable: true,
    dayPassPrice: 40,
    trialDays: 1,
    benefits: [
      "Access to Spaces locations",
      "Design-focused workspaces",
      "Community events",
      "Networking opportunities",
      "Business services"
    ],
    bestFor: "Creative professionals and entrepreneurs in major US cities",
    website: "https://www.spacesworks.com"
  }
];

// Updated United States Nomad Data
export const unitedStatesNomadData: NomadData = {
  country: "United States",
  cities: ["New York", "San Francisco", "Los Angeles", "Austin", "Miami", "Chicago", "Seattle", "Boston", "Denver", "Portland"],
  
  internet: {
    speed: 180,
    reliability: 9,
    coworkingSpaces: 250,
    freePublicWifiSpots: 8
  },
  
  costs: {
    coworkingMonthly: 500,
    simCardMonthly: 50,
    coffeeShopWork: 10,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 8,
    englishLevel: 10,
    safety: 8,
    nomadGroups: [
      "Digital Nomads USA Facebook Group",
      "Remote Workers US Slack",
      "Nomad List US Cities",
      "Tech Nomads USA",
      "Digital Nomad Girls USA"
    ]
  },
  
  workspaces: unitedStatesWorkspaces,
  
  freeWorkspaces: unitedStatesFreeWorkspaces,
  
  moneySavingTips: unitedStatesMoneySavingTips,
  
  coworkingMemberships: unitedStatesCoworkingMemberships,
  
  touristyCities: [
    "New York Times Square",
    "San Francisco Fisherman's Wharf",
    "Los Angeles Hollywood",
    "Miami South Beach",
    "Chicago Magnificent Mile",
    "Las Vegas Strip",
    "New Orleans French Quarter",
    "Boston Quincy Market",
    "Seattle Pike Place Market",
    "San Antonio River Walk"
  ]
};