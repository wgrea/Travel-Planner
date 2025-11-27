// src/lib/data/visa/destinations/south-america/argentina.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData  } from '$lib/types/living-costs';
import type { NomadData, Workspace } from '$lib/data/nomadData';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const argentinaFlightPattern: FlightPattern = {
  country: "Argentina",
  cities: ["Buenos Aires", "Mendoza", "Bariloche"],
  cheapestMonths: ["May", "June"],
  expensiveMonths: ["December", "January"],
  sweetSpot: ["March", "April", "September", "October"],
  averagePrice: 1150,
  planningTips: ["Long domestic flights, consider overnight buses"],
  notes: "Diverse climates from Patagonia to Buenos Aires, opposite seasons from Northern Hemisphere"
};

export const argentinaLivingCosts: LivingCostData = {
  country: "Argentina",
  countryCode: "Argentina", 
  currency: "ARS",
  lastUpdated: "2024-01-15",
  
  // Country-level averages (note: high inflation country)
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 15000,        // ~$15 USD (blue rate)
        budgetHotel: 40000,   // ~$40 USD
        guesthouse: 30000     // ~$30 USD
      },
      midrange: {
        hotel: 80000,         // ~$80 USD
        apartment: 60000,     // ~$60 USD
        boutiqueHotel: 120000 // ~$120 USD
      },
      luxury: {
        hotel: 200000,        // ~$200 USD
        resort: 350000,       // ~$350 USD
        villa: 500000         // ~$500 USD
      },
      monthlyRent: {
        studio: 200000,       // ~$200 USD
        oneBedroom: 300000,   // ~$300 USD
        threeBedroom: 500000  // ~$500 USD
      }
    },
    dailyLiving: {
      budget: 35000,          // ~$35 USD
      midrange: 70000,        // ~$70 USD
      luxury: 150000,         // ~$150 USD
      breakdown: {
        food: 20000,          // ~$20 USD
        transport: 5000,      // ~$5 USD
        activities: 8000,     // ~$8 USD
        misc: 2000            // ~$2 USD
      }
    },
    transportation: {
      localBus: 300,          // ~$0.30 USD
      taxi: 500,              // ~$0.50 USD per km
      intercityBus: 15000,    // ~$15 USD
      train: 25000            // ~$25 USD
    },
    food: {
      streetFood: 1500,       // ~$1.50 USD
      restaurantMeal: 8000,   // ~$8 USD
      groceryWeekly: 30000    // ~$30 USD
    }
  },
  
  tips: [
    "Use blue dollar rate for better exchange - bring USD cash",
    "Try Argentine steak and Malbec wine",
    "Use SUBE card for public transportation",
    "Learn basic Spanish - English isn't widely spoken",
    "Tipping is 10% in restaurants",
    "Visit during shoulder seasons (Sep-Nov, Mar-May)",
    "Book long-distance buses in advance",
    "Try mate tea - it's a cultural experience"
  ],
  
  bestAreas: {
    budget: [
      "San Telmo, Buenos Aires",
      "Mendoza city center", 
      "Cordoba downtown",
      "Bariloche city area"
    ],
    midrange: [
      "Palermo, Buenos Aires",
      "Mendoza wine region",
      "Salta historic center",
      "Ushuaia downtown"
    ],
    luxury: [
      "Recoleta, Buenos Aires",
      "Puerto Madero, Buenos Aires",
      "Bariloche lakefront",
      "Iguazu Falls resorts"
    ]
  },
  
  // City-specific data
  cities: {
    "Buenos Aires": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 18000,    // +3,000 from country average
            budgetHotel: 50000 // +10,000 from country average
          },
          midrange: {
            hotel: 100000,    // +20,000 from country average
            apartment: 80000  // +20,000 from country average
          },
          monthlyRent: {
            studio: 250000,   // +50,000 from country average
            oneBedroom: 400000 // +100,000 from country average
          }
        },
        dailyLiving: {
          budget: 45000,      // +10,000 from country average
          midrange: 90000,    // +20,000 from country average
          luxury: 180000      // +30,000 from country average
        },
        transportation: {
          localBus: 400,      // +100 from country average
          taxi: 600           // +100 from country average
        }
      },
      tips: [
        "Use the Subte (metro) for quick city travel",
        "Visit San Telmo market on Sundays",
        "Enjoy tango shows in La Boca",
        "Many museums have free admission days"
      ]
    },
    
    "Mendoza": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 12000,    // -3,000 from country average
            guesthouse: 25000 // -5,000 from country average
          },
          midrange: {
            hotel: 70000,     // -10,000 from country average
            boutiqueHotel: 100000 // -20,000 from country average
          }
        },
        dailyLiving: {
          budget: 30000,      // -5,000 from country average
          midrange: 60000,    // -10,000 from country average
        }
      },
      tips: [
        "Rent a bike to tour wineries",
        "Try wine tasting tours - excellent value",
        "Visit during harvest season (February-March)",
        "Day trip to the Andes mountains"
      ]
    },
    
    "Bariloche": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 16000,    // +1,000 from country average
            guesthouse: 32000 // +2,000 from country average
          },
          midrange: {
            hotel: 90000,     // +10,000 from country average
            boutiqueHotel: 140000 // +20,000 from country average
          },
          luxury: {
            resort: 400000    // +50,000 from country average
          }
        },
        dailyLiving: {
          budget: 40000,      // +5,000 from country average
          midrange: 80000,    // +10,000 from country average
        }
      },
      tips: [
        "Visit for skiing in winter (June-August)",
        "Try chocolate - Bariloche is famous for it",
        "Hike in Nahuel Huapi National Park",
        "Rent a car to explore the Seven Lakes Route"
      ]
    }
  }
};

export const argentinaWorkspaces: Workspace[] = [
  {
    name: 'Urban Station',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'coworking',
    dayPassPrice: 15,
    monthlyPrice: 180,
    rating: 4.5,
    wifiSpeed: 85,
    powerOutlets: 5,
    noiseLevel: 3,
    amenities: ['High-speed WiFi', 'Meeting Rooms', 'Coffee', 'Printing', 'Event Space'],
    bestFor: ['Professional meetings', 'Team work', 'Networking'],
    hours: '24/7',
    address: 'Multiple locations in Palermo and Microcentro'
  },
  {
    name: 'La Maquinita Co.',
    city: 'Buenos Aires', 
    country: 'Argentina',
    type: 'coworking',
    dayPassPrice: 12,
    monthlyPrice: 150,
    rating: 4.3,
    wifiSpeed: 75,
    powerOutlets: 4,
    noiseLevel: 2,
    amenities: ['24/7 Access', 'Event Space', 'Kitchen', 'Phone Booths', 'Lockers'],
    bestFor: ['Focused work', 'Long hours', 'Privacy'],
    hours: '24/7'
  },
  // ... other Argentina workspaces
];

// Remove the duplicate argentinaNomadData declaration - keep only this one:
export const argentinaNomadData: NomadData = {
  country: "Argentina",
  cities: ["Buenos Aires", "Cordoba", "Mendoza"],
  internet: {
    speed: 55,
    reliability: 6,
    coworkingSpaces: 50
  },
  costs: {
    coworkingMonthly: 90,
    simCardMonthly: 8,
    coffeeShopWork: 6
  },
  community: {
    expatSize: 6,
    englishLevel: 4,
    safety: 7
  },
  workspaces: argentinaWorkspaces
};

export const argentinaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$2,500/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$2,500/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$2,500/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};