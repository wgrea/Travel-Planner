// src/lib/data/countries/central-america/panama/nomad.ts
import type { NomadData, Workspace, FreeWorkspace, MoneySavingTips, CoworkingMembership } from '$lib/data/nomadData';

export const panamaWorkspaces: Workspace[] = [
  {
    name: 'Selina Cowork Panama City',
    city: 'Panama City',
    country: 'Panama',
    type: 'coworking',
    dayPassPrice: 20,
    monthlyPrice: 300,
    rating: 4.4,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Community Events', 'Café', 'Printing', 'Meeting Rooms', 'Accommodation available', 'Social atmosphere'],
    bestFor: ['Digital Nomads', 'Networking', 'Social Atmosphere', 'Casco Viejo experience', 'Meeting other travelers'],
    hours: '24/7',
    address: 'Casco Viejo, Panama City',
    website: 'https://www.selina.com/panama/panama-city',
    freeTrialDays: 1,
    membershipDiscount: 15,
    touristArea: true,
    // NEW: Budget categorization
    includedWithStay: true, // Free for Selina guests
    budgetCategory: 'already_paid',
    dayPassForNonGuests: true,
    notes: 'Part of Selina hostel chain. Free for guests, day pass available for non-guests'
  },
  {
    name: 'La Cascada CoWork',
    city: 'Panama City',
    country: 'Panama',
    type: 'coworking',
    dayPassPrice: 25,
    monthlyPrice: 350,
    rating: 4.6,
    wifiSpeed: 100,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Fiber Optic', 'Air Conditioning', 'Kitchen', 'Phone Booths', 'Ergonomic Chairs', 'Business services', 'San Francisco neighborhood'],
    bestFor: ['Professionals', 'Remote Teams', 'Video Calls', 'Panama business community', 'Corporate environment'],
    hours: '8:00-20:00',
    address: 'San Francisco, Panama City',
    website: 'https://lacascadacowork.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Starbucks Multiplaza',
    city: 'Panama City',
    country: 'Panama',
    type: 'cafe',
    dayPassPrice: 4, // Minimum purchase/day rate
    rating: 4.0,
    wifiSpeed: 40,
    powerOutlets: 3,
    noiseLevel: 5,
    amenities: ['WiFi', 'Air Conditioning', 'Power Outlets', 'Various Beverages', 'Mall location', 'Reliable chain'],
    bestFor: ['Casual Work', 'Quick Stops', 'Meeting Friends', 'Multiplaza Mall area', 'Air-conditioned environment'],
    hours: '6:00-23:00',
    address: 'Multiplaza Mall, Panama City',
    touristArea: true,
    // NEW: Budget categorization
    minimumPurchase: 4,
    budgetCategory: 'small_purchase',
    notes: 'Located in upscale Multiplaza Mall. Reliable but basic facilities'
  },
  {
    name: 'Bocas del Toro Coworking',
    city: 'Bocas del Toro',
    country: 'Panama',
    type: 'coworking',
    dayPassPrice: 18,
    monthlyPrice: 250,
    rating: 4.3,
    wifiSpeed: 50,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Ocean View', 'Community', 'Beach Access', 'Coffee', 'Relaxed Vibe', 'Island lifestyle', 'Bocas del Toro atmosphere'],
    bestFor: ['Beach Lovers', 'Creatives', 'Relaxed Working', 'Caribbean island life', 'Slow travel'],
    hours: '9:00-18:00',
    address: 'Isla Colón, Bocas del Toro',
    website: 'https://bocascoworking.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  {
    name: 'Boquete Digital Hub',
    city: 'Boquete',
    country: 'Panama',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 200,
    rating: 4.2,
    wifiSpeed: 60,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['Mountain View', 'High-speed Internet', 'Coffee', 'Community Events', 'Cool climate', 'Boquete expat community'],
    bestFor: ['Nature Lovers', 'Long-term Stays', 'Focused Work', 'Mountain town living', 'Retiree/digital nomad mix'],
    hours: '8:00-19:00',
    address: 'Downtown Boquete',
    website: 'https://boquetedigitalhub.com',
    touristArea: false,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD MORE WORKSPACES FOR COMPREHENSIVENESS
  {
    name: 'Café Unido',
    city: 'Panama City',
    country: 'Panama',
    type: 'cafe',
    dayPassPrice: 5, // Minimum purchase/day rate
    rating: 4.3,
    wifiSpeed: 55,
    powerOutlets: 3,
    noiseLevel: 4,
    amenities: ['Specialty Panamanian coffee', 'Power outlets', 'WiFi', 'Local atmosphere', 'Panamanian coffee culture'],
    bestFor: ['Coffee enthusiasts', 'Casual work', 'Local experience', 'Panamanian coffee tasting'],
    hours: '7:00-20:00',
    address: 'Multiple locations in Panama City',
    touristArea: false,
    minimumPurchase: 5,
    budgetCategory: 'small_purchase',
    notes: 'Specialty Panamanian coffee chain. Great for trying local Geisha coffee'
  },
  {
    name: 'The Panama House',
    city: 'Panama City',
    country: 'Panama',
    type: 'coworking',
    dayPassPrice: 22,
    monthlyPrice: 320,
    rating: 4.5,
    wifiSpeed: 90,
    powerOutlets: 5,
    noiseLevel: 2,
    amenities: ['Historic building', 'Rooftop terrace', 'Meeting rooms', 'Kitchen', 'Panama Canal views', 'Casco Viejo location'],
    bestFor: ['Historical setting', 'Creative work', 'Panama Canal views', 'Casco Viejo atmosphere'],
    hours: '9:00-19:00',
    address: 'Casco Viejo, Panama City',
    website: 'https://thepanamahouse.com',
    touristArea: true,
    includedWithStay: false,
    budgetCategory: 'direct_payment'
  },
  // ADD HOSTEL AND HOTEL EXAMPLES
  {
    name: 'Luna\'s Castle Hostel',
    city: 'Panama City',
    country: 'Panama',
    type: 'hostel',
    dayPassPrice: 6,
    monthlyPrice: 350, // Monthly accommodation in USD
    rating: 4.4,
    wifiSpeed: 70,
    powerOutlets: 4,
    noiseLevel: 4,
    amenities: ['Co-working lounge', 'Rooftop terrace', 'Kitchen', 'Social events', 'Casco Viejo location', 'Backpacker atmosphere'],
    bestFor: ['Budget travelers', 'Social nomads', 'Casco Viejo experience', 'Young travelers'],
    hours: 'Common areas: 24/7',
    address: 'Calle 8va Este, Casco Viejo, Panama City',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Popular backpacker hostel in historic Casco Viejo. Very social atmosphere'
  },
  {
    name: 'Selina Bocas del Toro',
    city: 'Bocas del Toro',
    country: 'Panama',
    type: 'hostel',
    dayPassPrice: 8,
    monthlyPrice: 400,
    rating: 4.5,
    wifiSpeed: 55,
    powerOutlets: 4,
    noiseLevel: 3,
    amenities: ['Overwater bungalows', 'Co-working space', 'Bar and restaurant', 'Water activities', 'Beach access', 'Island community'],
    bestFor: ['Beach nomads', 'Island lifestyle', 'Water lovers', 'Social travelers', 'Bocas del Toro experience'],
    hours: 'Co-working space: 8:00-20:00',
    address: 'Isla Colón, Bocas del Toro',
    website: 'https://www.selina.com/panama/bocas-del-toro',
    touristArea: true,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Unique overwater hostel with co-working space. Perfect for Caribbean island life'
  },
  {
    name: 'Waldorf Astoria Panama Lobby',
    city: 'Panama City',
    country: 'Panama',
    type: 'hotel',
    dayPassPrice: 12, // Minimum spend
    rating: 4.8,
    wifiSpeed: 110,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Luxury hotel', 'Business district location', 'Quiet lounge', 'Premium service', 'Financial district'],
    bestFor: ['Client meetings', 'Executive work', 'Peaceful environment', 'Panama business district'],
    hours: 'Lobby lounge: 7:00-23:00',
    address: '47th Street, Bella Vista, Panama City',
    touristArea: false,
    includedWithStay: true, // Free if staying at hotel
    budgetCategory: 'already_paid',
    minimumPurchase: 12,
    notes: 'Luxury hotel in Panama\'s financial district. Minimum spend for non-guests'
  },
  {
    name: 'Boquete Garden Inn',
    city: 'Boquete',
    country: 'Panama',
    type: 'hotel',
    dayPassPrice: 5,
    monthlyPrice: 500,
    rating: 4.6,
    wifiSpeed: 65,
    powerOutlets: 4,
    noiseLevel: 1,
    amenities: ['Mountain inn', 'Garden workspace', 'Breakfast included', 'Cool climate', 'Boquete valley views'],
    bestFor: ['Nature lovers', 'Peaceful work', 'Mountain retreat', 'Boquete climate seekers'],
    hours: 'Garden area: 8:00-20:00',
    address: 'Boquete, Chiriquí',
    touristArea: false,
    includedWithStay: true,
    budgetCategory: 'already_paid',
    notes: 'Beautiful mountain inn with garden workspace. Perfect for focused work in cool climate'
  }
];

// Add Free Workspaces for Panama
export const panamaFreeWorkspaces: FreeWorkspace[] = [
  {
    name: 'Biblioteca Nacional Ernesto J. Castillero',
    city: 'Panama City',
    type: 'library',
    description: 'National library with study areas and research facilities',
    cost: 'free',
    wifi: true,
    wifiSpeed: 60,
    powerOutlets: true,
    hours: '8:00-17:00 (Mon-Fri)',
    amenities: ['National collections', 'Reading rooms', 'Study desks', 'Research materials', 'Quiet atmosphere'],
    bestFor: ['Academic research', 'Serious study', 'Students', 'Quiet work'],
    noiseLevel: 1,
    address: 'Avenida Balboa, Panama City',
    notes: 'Visitor registration may be required. Panama\'s national library'
  },
  {
    name: 'Parque Metropolitano',
    city: 'Panama City',
    type: 'public_space',
    description: 'Large urban park with WiFi hotspots and nature trails',
    cost: 'free',
    wifi: true,
    wifiSpeed: 40,
    powerOutlets: false,
    hours: '6:00-17:00',
    amenities: ['Nature trails', 'Viewpoints', 'Benches', 'WiFi hotspots', 'Wildlife watching', 'City views'],
    bestFor: ['Creative thinking', 'Reading', 'Walking meetings', 'Nature breaks', 'Panama City views'],
    noiseLevel: 2,
    address: 'Ancon Hill, Panama City',
    notes: 'Tropical forest within city limits. WiFi available in certain areas. Watch for monkeys!'
  },
  {
    name: 'Albrook Mall Food Court',
    city: 'Panama City',
    type: 'mall',
    description: 'Large shopping mall with extensive food court seating and WiFi',
    cost: 'purchase_required',
    wifi: true,
    wifiSpeed: 70,
    powerOutlets: true,
    hours: '10:00-21:00',
    amenities: ['Food options', 'Air conditioning', 'Comfortable seating', 'People watching', 'Shopping'],
    bestFor: ['Casual work', 'Lunch meetings', 'Air-conditioned environment', 'Albrook area'],
    noiseLevel: 4,
    address: 'Avenida Marginal, Albrook, Panama City',
    notes: 'Purchase required for food court seating. Central America\'s largest mall'
  },
  {
    name: 'Cinta Costera',
    city: 'Panama City',
    type: 'public_space',
    description: 'Waterfront promenade with benches and Panama City skyline views',
    cost: 'free',
    wifi: true,
    wifiSpeed: 45,
    powerOutlets: false,
    hours: '24/7',
    amenities: ['Waterfront views', 'Walking/biking path', 'Benches', 'Exercise stations', 'Panama City skyline'],
    bestFor: ['Creative thinking', 'Walking meetings', 'Exercise breaks', 'Panama City atmosphere'],
    noiseLevel: 3,
    address: 'Along Panama Bay, Panama City',
    notes: 'Beautiful waterfront promenade with views of Panama City skyline. WiFi available'
  },
  {
    name: 'Universidad de Panamá Libraries',
    city: 'Panama City',
    type: 'university',
    description: 'University libraries open to public with academic atmosphere',
    cost: 'free',
    wifi: true,
    wifiSpeed: 65,
    powerOutlets: true,
    hours: '8:00-20:00 (varies by library)',
    amenities: ['Academic resources', 'Study rooms', 'Quiet zones', 'Research materials', 'Student atmosphere'],
    bestFor: ['Academic work', 'Research', 'Serious study', 'Student networking'],
    noiseLevel: 1,
    address: 'University City, Panama City',
    notes: 'Visitor access available. Panama\'s main public university'
  }
];

// Add Money Saving Tips for Panama
export const panamaMoneySavingTips: MoneySavingTips = {
  general: [
    'Use the Panama Metro for cheap and efficient city transport',
    'Take advantage of free WiFi in most malls and public spaces',
    'Use Tigo, Movistar, or Claro SIM cards for good data deals',
    'Shop at local "mercados" and "supermercados" for affordable food',
    'Learn basic Spanish phrases for better prices and respect'
  ],
  touristAreas: [
    'Avoid restaurants in Casco Viejo main squares - prices are 2-3x higher',
    'In Bocas del Toro, eat at local "fondas" away from tourist areas',
    'Skip tourist trap restaurants near the Panama Canal Miraflores Locks',
    'Use public transport instead of taxis in Panama City'
  ],
  nonTouristAreas: [
    'Local cafes in residential neighborhoods welcome laptop users',
    'University areas have cheaper food and amenities',
    'Markets like Mercado de Mariscos have amazing food at local prices',
    'Residential areas like El Cangrejo offer authentic experiences'
  ],
  byPreference: {
    coworking: [
      'Ask for "nómada digital" (digital nomad) discounts',
      'Share monthly membership with another nomad',
      'Use free trial days at multiple spaces',
      'Look for spaces outside Casco Viejo for better prices'
    ],
    cafe: [
      'Order "café con leche" instead of specialty drinks',
      'Tip $1-2 if staying several hours',
      'Visit during afternoon hours (2-5 PM) for quieter times',
      'Choose local cafes over international chains'
    ],
    library: [
      'Bring power bank as outlets may be limited',
      'Use silent floors for maximum focus',
      'Arrive early to secure best seats',
      'Check holiday schedules'
    ],
    hostel: [
      'Book weekly rates for 20-30% discount',
      'Use kitchen facilities to save on food costs',
      'Work during quiet morning hours (8-11 AM)',
      'Some hostels offer free walking tours'
    ],
    hotel: [
      'Hotel lobbies are often free to use (with purchase)',
      'Ask about "tarifa diaria" for day use rates',
      'Business hotels have best WiFi and work facilities',
      'Loyalty programs can offer perks'
    ]
  }
};

// Add Coworking Memberships for Panama
export const panamaCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "Selina CoWork Panama Pass",
    monthlyPrice: 250,
    coverage: ["Panama City", "Bocas del Toro"],
    dayPassAvailable: true,
    dayPassPrice: 18,
    trialDays: 2,
    benefits: [
      "Access to all Selina coworking spaces in Panama",
      "Discounts on accommodations",
      "Community events",
      "Travel community",
      "Wellness activities",
      "Panama nomad network"
    ],
    bestFor: "Digital nomads staying at Selina locations in Panama",
    website: "https://www.selina.com"
  },
  {
    name: "Panama Coworking Network",
    monthlyPrice: 280,
    coverage: ["Panama City", "Boquete", "Coronado"],
    dayPassAvailable: true,
    dayPassPrice: 22,
    trialDays: 1,
    benefits: [
      "Access to network of independent coworking spaces",
      "Local business connections",
      "Flexible terms",
      "Regional variety",
      "Panamanian business network",
      "Expat community access"
    ],
    bestFor: "Nomads wanting to explore different regions of Panama",
    website: "https://panamacoworking.net"
  },
  {
    name: "La Cascada Premium Membership",
    monthlyPrice: 320,
    coverage: ["Panama City (multiple locations)"],
    dayPassAvailable: true,
    dayPassPrice: 23,
    trialDays: 1,
    benefits: [
      "Access to all La Cascada locations",
      "Premium business facilities",
      "Meeting room credits",
      "Business services",
      "Panama City business network",
      "Professional environment"
    ],
    bestFor: "Business professionals and corporate nomads in Panama City",
    website: "https://lacascadacowork.com"
  }
];

// Updated Panama Nomad Data
export const panamaNomadData: NomadData = {
  country: "Panama",
  cities: ["Panama City", "Boquete", "Bocas del Toro", "Coronado", "El Valle", "David", "Chitré", "Santiago", "Colón", "Pedasí"],
  
  internet: {
    speed: 65,
    reliability: 7,
    coworkingSpaces: 45,
    freePublicWifiSpots: 5
  },
  
  costs: {
    coworkingMonthly: 280,
    simCardMonthly: 25,
    coffeeShopWork: 5,
    libraryAccess: 0
  },
  
  community: {
    expatSize: 8,
    englishLevel: 7,
    safety: 7,
    nomadGroups: [
      "Digital Nomads Panama Facebook Group",
      "Expats in Panama",
      "Panama City Digital Nomads",
      "Boquete Expats & Nomads",
      "Nomad List Panama Community",
      "Panama Remote Workers"
    ]
  },
  
  workspaces: panamaWorkspaces,
  
  freeWorkspaces: panamaFreeWorkspaces,
  
  moneySavingTips: panamaMoneySavingTips,
  
  coworkingMemberships: panamaCoworkingMemberships,
  
  touristyCities: [
    "Panama City Casco Viejo",
    "Panama City Panama Canal (Miraflores Locks)",
    "Bocas del Toro Isla Colón",
    "Panama City Amador Causeway",
    "Boquete Town Center",
    "San Blas Islands (Guna Yala)",
    "El Valle de Antón",
    "Portobelo Historic Site"
  ]
};