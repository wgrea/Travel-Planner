// src/lib/data/countries/europe/western-europe/portugal/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const portugalLivingCosts: LivingCostData = {
  country: "Portugal",
  countryCode: "Portugal",
  currency: "EUR", 
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (full data)
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 20, // ~$22 USD
        budgetHotel: 50, // ~$55 USD
        guesthouse: 40 // ~$44 USD
      },
      midrange: {
        hotel: 100, // ~$110 USD
        apartment: 80, // ~$88 USD
        boutiqueHotel: 120 // ~$132 USD - CORRECTED: This belongs in midrange
      },
      luxury: {
        hotel: 200, // ~$220 USD
        resort: 250, // ~$275 USD
        villa: 350 // ~$385 USD
      },
      monthlyRent: {
        studio: 600, // ~$660 USD
        oneBedroom: 800, // ~$880 USD
        threeBedroom: 1200 // ~$1320 USD
      }
    },
    dailyLiving: {
      budget: 40, // ~$44 USD
      midrange: 70, // ~$77 USD
      luxury: 150, // ~$165 USD
      breakdown: {
        food: 20,
        transport: 10,
        activities: 15,
        misc: 5
      }
    },
    transportation: {
      localBus: 1.8, // ~$2 USD
      taxi: 10, // ~$11 USD
      intercityBus: 20, // ~$22 USD
      train: 30 // ~$33 USD
    },
    food: {
      streetFood: 5, // ~$5.50 USD
      restaurantMeal: 15, // ~$16.50 USD
      groceryWeekly: 60 // ~$66 USD
    }
  },
  
  tips: [
    "Eat at local 'tascas' for authentic and affordable Portuguese meals",
    "Use public transportation - very efficient and cheap",
    "Visit local markets for fresh produce and fish",
    "Rent outside city centers for better prices"
  ],
  
  bestAreas: {
    budget: ["Alfama (Lisbon)", "Bonfim (Porto)", "Sé (Coimbra)"],
    midrange: ["Príncipe Real (Lisbon)", "Cedofeita (Porto)", "Avenida (Coimbra)"],
    luxury: ["Avenida da Liberdade (Lisbon)", "Foz do Douro (Porto)", "Cascais"]
  },
  
  // City-specific data - ONLY what's DIFFERENT
  cities: {
    "Lisbon": {
      baseCosts: {
        accommodation: {
          budget: { 
            hostel: 25,      // +5 from country average
            budgetHotel: 60  // +10 from country average
          },
          midrange: {
            hotel: 120,      // +20 from country average
            apartment: 100,  // +20 from country average
            boutiqueHotel: 140 // +20 from country average - MOVED to midrange
          },
          luxury: {
            hotel: 220,      // +20 from country average
            resort: 270,     // +20 from country average
            villa: 370       // +20 from country average
          },
          monthlyRent: {
            studio: 700,    // +100 from country average
            oneBedroom: 900 // +100 from country average
          }
        },
        dailyLiving: {
          budget: 45,        // +5 from country average
          midrange: 80,      // +10 from country average
          luxury: 170        // +20 from country average
        },
        transportation: {
          taxi: 12,          // +2 from country average
          localBus: 2        // +0.2 from country average
        }
      },
      tips: [
        "Use Lisbon Card for unlimited public transport and museum entries",
        "Stay in neighborhoods like Alvalade or Arroios for better prices",
        "Eat at local tascas in less touristy areas",
        "Monthly transport pass is excellent value"
      ]
    },

    "Porto": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 22,      // +2 from country average
            budgetHotel: 55  // +5 from country average
          },
          midrange: {
            hotel: 110,      // +10 from country average
            apartment: 85,   // +5 from country average  
            boutiqueHotel: 125 // +5 from country average
          },
          monthlyRent: {
            studio: 650,    // +50 from country average
            oneBedroom: 850 // +50 from country average
          }
        },
        dailyLiving: {
          budget: 42,        // +2 from country average
          midrange: 75,      // +5 from country average
          luxury: 160        // +10 from country average
        },
        food: {
          restaurantMeal: 14  // -1 from country average
        }
      },
      tips: [
        "Porto is generally cheaper than Lisbon",
        "Stay in Bonfim or Campanhã for affordable options",
        "Eat at local tascas near Bolhão Market",
        "Walkable city center - save on transport"
      ]
    },

    "Algarve (Faro/Lagos/Albufeira)": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 18,      // -2 from country average
            budgetHotel: 45  // -5 from country average
          },
          midrange: {
            hotel: 90,       // -10 from country average
            apartment: 70,   // -10 from country average
            boutiqueHotel: 110 // -10 from country average
          },
          luxury: {
            hotel: 180,      // -20 from country average
            resort: 230,     // -20 from country average
            villa: 320       // -30 from country average
          },
          monthlyRent: {
            studio: 500,    // -100 from country average
            oneBedroom: 700 // -100 from country average
          }
        },
        dailyLiving: {
          budget: 35,        // -5 from country average
          midrange: 65,      // -5 from country average
          luxury: 140        // -10 from country average
        },
        food: {
          restaurantMeal: 14 // -1 from country average
        }
      },
      tips: [
        "Off-season (Oct-Mar) prices drop significantly",
        "Stay in towns like Olhão or Tavira for local prices",
        "Rent a car to explore different beaches",
        "Eat at local seafood restaurants away from tourist strips"
      ]
    },

    "Coimbra": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 15,      // -5 from country average
            budgetHotel: 40  // -10 from country average
          },
          midrange: {
            hotel: 80,       // -20 from country average
            apartment: 60,   // -20 from country average
            boutiqueHotel: 100 // -20 from country average
          },
          monthlyRent: {
            studio: 450,    // -150 from country average
            oneBedroom: 600 // -200 from country average
          }
        },
        dailyLiving: {
          budget: 30,        // -10 from country average
          midrange: 60,      // -10 from country average
          luxury: 130        // -20 from country average
        },
        food: {
          streetFood: 4,    // -1 from country average
          restaurantMeal: 12 // -3 from country average
        }
      },
      tips: [
        "Student city - very affordable living costs",
        "Monthly rent is significantly cheaper than Lisbon/Porto",
        "Eat at student restaurants for great value",
        "Excellent quality of life for the price"
      ]
    },

    "Madeira (Funchal)": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 20,      // Same as country average
            budgetHotel: 48  // -2 from country average
          },
          midrange: {
            hotel: 95,       // -5 from country average
            apartment: 75,   // -5 from country average
            boutiqueHotel: 115 // -5 from country average
          },
          monthlyRent: {
            studio: 550,    // -50 from country average
            oneBedroom: 750 // -50 from country average
          }
        },
        dailyLiving: {
          budget: 38,        // -2 from country average
          midrange: 68       // -2 from country average
        }
      },
      tips: [
        "Island living costs slightly higher for some imports",
        "Excellent local produce keeps food costs reasonable",
        "Consider renting a car for island exploration",
        "Year-round mild climate reduces seasonal price variations"
      ]
    },

    "Azores (Ponta Delgada)": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 22,      // +2 from country average (island premium)
            budgetHotel: 52  // +2 from country average
          },
          midrange: {
            hotel: 105,      // +5 from country average
            apartment: 85,   // +5 from country average
            boutiqueHotel: 125 // +5 from country average
          },
          monthlyRent: {
            studio: 650,    // +50 from country average
            oneBedroom: 850 // +50 from country average
          }
        },
        dailyLiving: {
          budget: 42,        // +2 from country average
          midrange: 75       // +5 from country average
        },
        food: {
          restaurantMeal: 17 // +2 from country average
        }
      },
      tips: [
        "Remote location means higher costs for some items",
        "Local food (fish, dairy, tea) is excellent value",
        "Rent a car is essential for exploring",
        "Consider package deals for flights+accommodation"
      ]
    }
  }
};