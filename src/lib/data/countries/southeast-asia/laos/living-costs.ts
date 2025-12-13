// src/lib/data/countries/southeast-asia/laos/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const laosLivingCosts: LivingCostData = {
  country: "Laos",
  currency: "USD", // Changed to USD since you want prices in USD
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (full data)
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 10,      // ~$10 USD
        budgetHotel: 15, // ~$15 USD
        guesthouse: 12   // ~$12 USD
      },
      midrange: {
        hotel: 30,       // ~$30 USD
        apartment: 25,   // ~$25 USD
        boutiqueHotel: 40 // ~$40 USD
      },
      luxury: {
        hotel: 80,       // ~$80 USD
        resort: 120,     // ~$120 USD
        villa: 200       // ~$200 USD
      },
      monthlyRent: {
        studio: 180,     // ~$180 USD
        oneBedroom: 260, // ~$260 USD
        threeBedroom: 590 // ~$590 USD
      }
    },
    dailyLiving: {
      budget: 15,        // ~$15 USD
      midrange: 25,      // ~$25 USD
      luxury: 60,        // ~$60 USD
      breakdown: {
        food: 7,
        transport: 3,
        activities: 4,
        misc: 1
      }
    },
    transportation: {
      localBus: 0.25,    // ~$0.25 USD
      taxi: 2,           // ~$2 USD
      intercityBus: 5,   // ~$5 USD
      train: 8           // ~$8 USD
    },
    food: {
      streetFood: 1.50,  // ~$1.50 USD
      restaurantMeal: 4,  // ~$4 USD
      groceryWeekly: 15   // ~$15 USD
    }
  },
  
  tips: [
    "USD is widely accepted alongside LAK (Kip)",
    "Always carry small bills as change can be hard to get",
    "Bargain at markets but not in fixed-price stores",
    "Transportation is limited outside major cities - plan ahead"
  ],
  
  bestAreas: {
    budget: ["Vientiane city center", "Vang Vieng main street"],
    midrange: ["Luang Prabang old town", "Vientiane riverside"],
    luxury: ["Luang Prabang luxury resorts", "Vientiane expat areas"]
  },
  
  // City-specific data - ONLY what's DIFFERENT
  cities: {
    "Vientiane": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 12,       // +$2 from country average
            budgetHotel: 18   // +$3 from country average
          },
          midrange: {
            hotel: 35,        // +$5 from country average
            apartment: 30     // +$5 from country average
          },
          luxury: {
            hotel: 90,        // +$10 from country average
            resort: 140       // +$20 from country average
          },
          monthlyRent: {
            studio: 250,      // +$70 from country average
            oneBedroom: 350   // +$90 from country average
          }
        },
        dailyLiving: {
          budget: 18,         // +$3 from country average
          midrange: 30,       // +$5 from country average
          luxury: 70          // +$10 from country average
        },
        transportation: {
          taxi: 2.5,         // +$0.50 from country average
          localBus: 0.30     // +$0.05 from country average
        },
        food: {
          restaurantMeal: 5, // +$1 from country average
          coffee: 1.5        // This property doesn't exist in FoodCosts - remove or add to type
        }
      },
      tips: [
        "Sisattanak and Chanthabouly districts popular with expats",
        "Capital city but small and relaxed",
        "Use tuk-tuks for short trips within the city"
      ]
    },

    "Luang Prabang": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 15,       // +$5 from country average
            budgetHotel: 20   // +$5 from country average
          },
          midrange: {
            hotel: 40,        // +$10 from country average
            apartment: 35     // +$10 from country average
          },
          luxury: {
            hotel: 100,       // +$20 from country average
            resort: 150       // +$30 from country average
          },
          monthlyRent: {
            studio: 200,      // +$20 from country average
            oneBedroom: 300   // +$40 from country average
          }
        },
        dailyLiving: {
          budget: 20,         // +$5 from country average
          midrange: 35,       // +$10 from country average
          luxury: 80          // +$20 from country average
        },
        food: {
          restaurantMeal: 6,  // +$2 from country average
          streetFood: 2       // +$0.50 from country average
        }
      },
      tips: [
        "UNESCO World Heritage town, tourist prices apply in center",
        "More traditional and scenic than Vientiane",
        "Night market has good food options"
      ]
    },

    "Vang Vieng": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 8,        // -$2 from country average
            budgetHotel: 12   // -$3 from country average
          },
          midrange: {
            hotel: 25,        // -$5 from country average
            apartment: 20     // -$5 from country average
          },
          monthlyRent: {
            studio: 180,      // same as average
            oneBedroom: 250   // -$10 from country average
          }
        },
        dailyLiving: {
          budget: 12,         // -$3 from country average
          midrange: 20        // -$5 from country average
        },
        transportation: {
          taxi: 2.5,         // +$0.50 from country average
          localBus: 0.20     // -$0.05 from country average
        }
      },
      tips: [
        "Adventure tourism town, beautiful karst landscape",
        "Limited infrastructure but growing digital nomad scene",
        "Good for outdoor activities like tubing and hiking"
      ]
    },

    "Pakse": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 6,        // -$4 from country average
            budgetHotel: 10   // -$5 from country average
          },
          midrange: {
            hotel: 20,        // -$10 from country average
            apartment: 18     // -$7 from country average
          },
          monthlyRent: {
            studio: 150,      // -$30 from country average
            oneBedroom: 220   // -$40 from country average
          }
        },
        dailyLiving: {
          budget: 10,         // -$5 from country average
          midrange: 18        // -$7 from country average
        },
        food: {
          streetFood: 1,      // -$0.50 from country average
          restaurantMeal: 3.5 // -$0.50 from country average
        }
      },
      tips: [
        "Southern hub, gateway to Bolaven Plateau and 4000 Islands",
        "Very relaxed pace, limited amenities",
        "Coffee plantations nearby for day trips"
      ]
    }
  }
};