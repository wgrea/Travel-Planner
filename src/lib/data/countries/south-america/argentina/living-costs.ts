// src/lib/data/countries/south-america/argentina/living-costs.ts
import type { LivingCostData  } from '$lib/types/living-costs';

export const argentinaLivingCosts: LivingCostData = {
  country: "Argentina",
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
