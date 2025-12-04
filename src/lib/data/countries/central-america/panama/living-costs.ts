// scr/lib/data/countries/central-america/panama/living-costs.ts
import type { LivingCostData  } from '$lib/types/living-costs';

export const panamaLivingCosts: LivingCostData = {
  country: "Panama",
  currency: "PAB", // Same as USD 1:1
  lastUpdated: "2024-01-15",
  
  // Country-level averages
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 15,        // ~$15 USD
        budgetHotel: 40,   // ~$40 USD
        guesthouse: 30     // ~$30 USD
      },
      midrange: {
        hotel: 80,         // ~$80 USD
        apartment: 60,     // ~$60 USD
        boutiqueHotel: 120 // ~$120 USD
      },
      luxury: {
        hotel: 200,        // ~$200 USD
        resort: 350,       // ~$350 USD
        villa: 500         // ~$500 USD
      },
      monthlyRent: {
        studio: 500,       // ~$500 USD
        oneBedroom: 700,   // ~$700 USD
        threeBedroom: 1000 // ~$1,000 USD
      }
    },
    dailyLiving: {
      budget: 35,          // ~$35 USD
      midrange: 70,        // ~$70 USD
      luxury: 150,         // ~$150 USD
      breakdown: {
        food: 20,          // ~$20 USD
        transport: 5,      // ~$5 USD
        activities: 8,     // ~$8 USD
        misc: 2            // ~$2 USD
      }
    },
    transportation: {
      localBus: 0.35,      // ~$0.35 USD
      taxi: 5,             // ~$5 USD per km
      intercityBus: 15,    // ~$15 USD
      train: 25            // ~$25 USD (to islands)
    },
    food: {
      streetFood: 3,       // ~$3 USD
      restaurantMeal: 15,  // ~$15 USD
      groceryWeekly: 60    // ~$60 USD
    }
  },
  
  tips: [
    "Visit both Caribbean and Pacific coasts - they offer different experiences",
    "Try fresh seafood - Panama has excellent ceviche",
    "Use Uber in Panama City - it's safer and cheaper than taxis",
    "Learn basic Spanish for better prices and interactions",
    "Visit during dry season (December-April) for best weather",
    "Explore the Panama Canal - it's an engineering marvel",
    "Carry both USD and local currency for remote areas",
    "Try geisha coffee in Boquete - some of the world's best"
  ],
  
  bestAreas: {
    budget: [
      "Casco Viejo hostels, Panama City",
      "Bocas del Toro islands",
      "Boquete downtown",
      "David city center"
    ],
    midrange: [
      "Bella Vista, Panama City",
      "Bocas del Toro water bungalows",
      "Boquete mountain cabins",
      "Pedasí beach towns"
    ],
    luxury: [
      "Punta Pacifica, Panama City",
      "Bocas del Toro luxury resorts",
      "Boquete luxury coffee estates",
      "Pearl Islands private villas"
    ]
  },
  
  // City-specific data (overrides only)
  cities: {
    "Panama City": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 20,        // +5 from country average
            budgetHotel: 50    // +10 from country average
          },
          midrange: {
            hotel: 100,        // +20 from country average
            apartment: 80      // +20 from country average
          },
          luxury: {
            hotel: 250,        // +50 from country average
            resort: 400        // +50 from country average
          },
          monthlyRent: {
            studio: 600,       // +100 from country average
            oneBedroom: 850    // +150 from country average
          }
        },
        dailyLiving: {
          budget: 45,          // +10 from country average
          midrange: 85,        // +15 from country average
          luxury: 180          // +30 from country average
        },
        transportation: {
          localBus: 0.50,      // +0.15 from country average
          taxi: 6              // +1 from country average
        },
        food: {
          streetFood: 4,       // +1 from country average
          restaurantMeal: 18   // +3 from country average
        }
      },
      tips: [
        "Use the Metro system - it's modern and efficient",
        "Visit Casco Viejo for historic architecture and nightlife",
        "Uber is widely available and affordable",
        "Avoid walking alone in certain areas at night"
      ]
    },
    
    "Bocas del Toro": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 18,        // +3 from country average
            guesthouse: 35     // +5 from country average
          },
          midrange: {
            hotel: 90,         // +10 from country average
            boutiqueHotel: 140 // +20 from country average
          },
          luxury: {
            resort: 400,       // +50 from country average
            villa: 600         // +100 from country average
          }
        },
        dailyLiving: {
          budget: 40,          // +5 from country average
          midrange: 80,        // +10 from country average
          luxury: 170          // +20 from country average
        },
        transportation: {
          taxi: 8,             // +3 from country average (water taxis)
          intercityBus: 20     // +5 from country average
        }
      },
      tips: [
        "Take water taxis between islands",
        "Book accommodations in advance during peak season",
        "Try fresh lobster from local fishermen",
        "Bring mosquito repellent"
      ]
    },
    
    "Boquete": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 12,        // -3 from country average
            guesthouse: 25     // -5 from country average
          },
          midrange: {
            apartment: 50,     // -10 from country average
            boutiqueHotel: 100 // -20 from country average
          },
          monthlyRent: {
            studio: 400,       // -100 from country average
            oneBedroom: 550    // -150 from country average
          }
        },
        dailyLiving: {
          budget: 30,          // -5 from country average
          midrange: 60,        // -10 from country average
          luxury: 120          // -30 from country average
        },
        food: {
          restaurantMeal: 12,  // -3 from country average
          groceryWeekly: 50    // -10 from country average
        }
      },
      tips: [
        "Visit coffee plantations for tours and tastings",
        "Hike the Quetzal Trail for bird watching",
        "The climate is cooler - bring layers",
        "Rent a car to explore surrounding mountains"
      ]
    },
    
    "Pedasí": {
      baseCosts: {
        accommodation: {
          budget: {
            guesthouse: 25     // -5 from country average
          },
          midrange: {
            hotel: 70,         // -10 from country average
            apartment: 50      // -10 from country average
          },
          luxury: {
            resort: 300        // -50 from country average
          }
        },
        dailyLiving: {
          budget: 30,          // -5 from country average
          midrange: 65         // -5 from country average
        }
      },
      tips: [
        "Great for surfing and fishing",
        "More relaxed pace than touristy areas",
        "Rent a 4x4 for exploring nearby beaches",
        "Local seafood is excellent and affordable"
      ]
    },
    
    "Colón": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 10,        // -5 from country average
            budgetHotel: 30    // -10 from country average
          },
          midrange: {
            hotel: 60,         // -20 from country average
            apartment: 45      // -15 from country average
          }
        },
        dailyLiving: {
          budget: 25,          // -10 from country average
          midrange: 55         // -15 from country average
        }
      },
      tips: [
        "Visit the Free Zone for shopping",
        "Be cautious with personal belongings",
        "Day trip from Panama City recommended",
        "See the historic San Lorenzo Fort"
      ]
    }
  }
};
