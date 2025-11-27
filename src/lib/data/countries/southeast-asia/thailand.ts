//src/lib/data/countries/southeast-asia/thailand.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData } from '$lib/types/living-costs';
import type { NomadData, Workspace } from '$lib/data/nomadData';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

// FLIGHT PATTERN DATA (new - destination-focused)
export const thailandFlightPattern: FlightPattern = {
  country: "Thailand",
  cities: ["Bangkok", "Phuket", "Chiang Mai"],
  cheapestMonths: ["May", "June", "September"],
  expensiveMonths: ["December", "January"], 
  sweetSpot: ["February", "March", "October", "November"],
  averagePrice: 800,
  alternativeRoutes: "Fly to Kuala Lumpur first, then budget airline to Bangkok",
  planningTips: ["Book 2-3 months in advance", "Avoid Songkran festival in April"],
  notes: "Islands are more expensive than northern cities"
};

export const thailandLivingCosts: LivingCostData = {
  country: "Thailand",
  countryCode: "Thailand",
  currency: "THB", 
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (full data)
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 300,
        budgetHotel: 800,  
        guesthouse: 600
      },
      midrange: {
        hotel: 1500,
        apartment: 1200,
        boutiqueHotel: 2000
      },
      luxury: {
        hotel: 4000,
        resort: 6000,
        villa: 8000
      },
      monthlyRent: {
        studio: 15000,
        oneBedroom: 25000,
        threeBedroom: 45000
      }
    },
    dailyLiving: {
      budget: 800,
      midrange: 1600,
      luxury: 3500,
      breakdown: {
        food: 400,
        transport: 150,
        activities: 200,
        misc: 50
      }
    },
    transportation: {
      localBus: 20,
      taxi: 100,
      intercityBus: 300,
      train: 500
    },
    food: {
      streetFood: 50,
      restaurantMeal: 200,
      groceryWeekly: 1500
    }
  },
  
  tips: [
    "Eat street food to save money - 50-100 THB per meal",
    "Use BTS/MRT in Bangkok instead of taxis", 
    "Book accommodations in advance during high season (Nov-Feb)",
    "Negotiate prices in local markets (except department stores)"
  ],
  
  bestAreas: {
    budget: ["Khao San Road", "Sukhumvit Soi 38", "Old City Chiang Mai"],
    midrange: ["Ari", "Thong Lor", "Nimmanhaemin Chiang Mai"],
    luxury: ["Sathorn", "Riverside", "Kamala Beach Phuket"]
  },
  
  // City-specific data - ONLY what's DIFFERENT
  cities: {
    "Bangkok": {
      baseCosts: {
        accommodation: {
          budget: { 
            hostel: 350,      // +50 from country average
            budgetHotel: 900  // +100 from country average
            // guesthouse NOT specified - uses country average
          },
          midrange: {
            hotel: 1800,      // +300 from country average
            apartment: 1400   // +200 from country average
            // boutiqueHotel NOT specified - uses country average
          }
          // luxury and monthlyRent NOT specified - use country averages
        },
        dailyLiving: {
          budget: 900,        // +100 from country average
          midrange: 1800,     // +200 from country average
          luxury: 4000        // +500 from country average
          // breakdown NOT specified - uses country average
        }
        // transportation and food NOT specified - use country averages
      },
      tips: [
        "Use BTS/MRT to avoid traffic",
        "Street food is best in Chinatown (Yaowarat)", 
        "Accommodation is cheaper outside Sukhumvit area"
      ]
    },

    "Chiang Mai": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 250,      // -50 from country average
            budgetHotel: 600  // -200 from country average
          },
          midrange: {
            hotel: 1200,      // -300 from country average
            apartment: 800    // -400 from country average  
          }
        },
        dailyLiving: {
          budget: 600,        // -200 from country average
          midrange: 1200,     // -400 from country average
        }
        // Other categories use country averages
      },
      tips: [
        "Rent a scooter for easy transportation",
        "Sunday Walking Street has great local food",
        "Digital nomad community in Nimmanhaemin area"
      ]
    },

    "Krabi": {
      baseCosts: {
        accommodation: {
          budget: {
            budgetHotel: 700  // -100 from country average
          },
          midrange: {
            apartment: 1000   // -200 from country average
          },
          monthlyRent: {
            studio: 12000,    // -3000 from country average
            oneBedroom: 18000 // -7000 from country average
          }
        },
        dailyLiving: {
          budget: 700,        // -100 from country average
          midrange: 1400      // -200 from country average
        }
      },
      tips: [
        "Ao Nang is more affordable than Railay",
        "Take longtail boats to nearby islands",
        "Best street food near Krabi Town night market"
      ]
    }
  }
};

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
    address: 'Multiple locations in Ekkamai and Thong Lor'
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
    hours: '8:00-20:00'
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
    address: 'Sukhumvit Soi 63, Bangkok'
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
    address: 'Gaysorn Tower, Bangkok'
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
    address: 'Thong Lor, Bangkok'
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
    address: 'Multiple locations in Nimmanhaemin area'
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
    address: 'MAYA Lifestyle Shopping Center'
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
    hours: '8:00-18:00'
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
    hours: '9:00-18:00'
  }
];

export const thailandNomadData: NomadData = {
  country: "Thailand",
  cities: ["Bangkok", "Chiang Mai", "Phuket", "Koh Phangan", "Krabi"],
  internet: {
    speed: 85, // Good overall speed with variations by location
    reliability: 8, // Very reliable in cities, less in islands
    coworkingSpaces: 120 // Many options across the country
  },
  costs: {
    coworkingMonthly: 3500, // THB average
    simCardMonthly: 300, // THB for good data plan
    coffeeShopWork: 80 // THB per session (minimum spend)
  },
  community: {
    expatSize: 9, // Huge digital nomad community
    englishLevel: 7, // Good in tourist areas, basic elsewhere
    safety: 8 // Generally very safe
  },
  workspaces: thailandWorkspaces
};

export const thailandData: Record<string, VisaInfo> = {
  "United States": {
    ease: "Visa on arrival / Online application",
    freeLength: "30 days (extendable)",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: true,
    incomeReq: "$2,000/month",
    category: "Easy",
    region: "Southeast Asia",
    
    // New fields
    duration: 30,
    cost: 0,
    applicationTime: "On arrival",
    entryType: "single",
    extensionsPossible: true,
    extensionDuration: 30
  },
  "Germany": {
    ease: "Visa-free",
    freeLength: "30 days",
    workPolicy: "No local work allowed on tourist visa",
    nomadVisa: true,
    incomeReq: "$2,000/month",
    category: "Easy",
    region: "Southeast Asia",
    
    // New fields
    duration: 30,
    cost: 0,
    applicationTime: "Not applicable",
    entryType: "single", 
    extensionsPossible: true,
    extensionDuration: 30
  }
  // Add other home countries...
};

// FLIGHT COST DATA (new - origin-specific)
export const belizeFlightData: FlightCostData = {
  'United States': {
    economy: 800,
    business: 2000,
    season: 'year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['BKK', 'DMK'],
    airlines: ['Thai Airways', 'United', 'Delta', 'Qatar']
  },
  'United Kingdom': {
    economy: 600,
    business: 1500,
    season: 'year-round',
    bestTimeToBook: '2-3 months in advance',
    airports: ['BKK'],
    airlines: ['British Airways', 'Thai Airways', 'Qatar']
  }
  // Add other origin countries...
};