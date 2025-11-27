//src/lib/data/countries/southeast-asia/thailand.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData } from '$lib/types/living-costs';
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