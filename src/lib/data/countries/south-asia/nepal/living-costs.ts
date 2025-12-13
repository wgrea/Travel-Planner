// src/lib/data/countries/south-asia/nepal/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs'; // Note: living-costs (with hyphen)

export const nepalLivingCosts: LivingCostData = {
  country: "Nepal",
  currency: "USD", // Changed to USD since you want prices in USD
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (in USD)
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 5,        // ~$5 USD
        budgetHotel: 10,  // ~$10 USD
        guesthouse: 8     // ~$8 USD
      },
      midrange: {
        hotel: 25,        // ~$25 USD
        apartment: 20,    // ~$20 USD
        boutiqueHotel: 35 // ~$35 USD
      },
      luxury: {
        hotel: 70,        // ~$70 USD
        resort: 100,      // ~$100 USD
        villa: 150        // ~$150 USD
      },
      monthlyRent: {
        studio: 150,      // ~$150 USD (converted from 20000 NPR)
        oneBedroom: 220,  // ~$220 USD (converted from 30000 NPR)
        threeBedroom: 580  // ~$580 USD (converted from 80000 NPR)
      }
    },
    dailyLiving: {
      budget: 15,         // ~$15 USD
      midrange: 30,       // ~$30 USD
      luxury: 60,         // ~$60 USD
      breakdown: {
        food: 8,
        transport: 3,
        activities: 3,
        misc: 1
      }
    },
    transportation: {
      localBus: 0.10,     // ~$0.10 USD
      taxi: 1,            // ~$1 USD
      intercityBus: 5,    // ~$5 USD
      train: 8           // ~$8 USD (if applicable)
    },
    food: {
      streetFood: 1,      // ~$1 USD
      restaurantMeal: 3,  // ~$3 USD (converted from 300 NPR)
      groceryWeekly: 20,  // ~$20 USD
      coffee: 1,          // ~$1 USD
      waterBottle: 0.20   // ~$0.20 USD
    }
  },
  
  tips: [
    "USD widely accepted in tourist areas alongside NPR",
    "Thamel (Kathmandu) is touristy/expensive, Boudha/Patan more authentic/affordable",
    "Frequent power cuts - consider backup power options",
    "Bargain at markets but not in fixed-price stores"
  ],
  
  bestAreas: {
    budget: ["Thamel outskirts", "Pokhara non-lakeside areas"],
    midrange: ["Boudha (Kathmandu)", "Patan", "Pokhara lakeside"],
    luxury: ["Kathmandu expat areas", "Pokhara luxury resorts", "Nagarkot hotels"]
  },
  
  // City-specific data - ONLY what's DIFFERENT (in USD)
  cities: {
    "Kathmandu": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 6,        // +$1 from country average
            budgetHotel: 12   // +$2 from country average
          },
          midrange: {
            hotel: 30,        // +$5 from country average
            apartment: 25     // +$5 from country average
          },
          luxury: {
            hotel: 80,        // +$10 from country average
            resort: 120       // +$20 from country average
          },
          monthlyRent: {
            studio: 200,      // +$50 from country average
            oneBedroom: 300   // +$80 from country average
          }
        },
        dailyLiving: {
          budget: 18,         // +$3 from country average
          midrange: 35,       // +$5 from country average
          luxury: 70          // +$10 from country average
        },
        transportation: {
          taxi: 1.20,        // +$0.20 from country average
          localBus: 0.12     // +$0.02 from country average
        },
        food: {
          restaurantMeal: 4,  // +$1 from country average
          coffee: 1.20        // +$0.20 from country average
        }
      },
      tips: [
        "Thamel area is touristy and expensive",
        "Boudha and Patan offer more authentic experiences at better prices",
        "Prepare for frequent power cuts and traffic"
      ]
    },

    "Pokhara": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 5,        // same as average
            budgetHotel: 9    // -$1 from country average
          },
          midrange: {
            hotel: 22,        // -$3 from country average
            apartment: 18     // -$2 from country average
          },
          luxury: {
            hotel: 65,        // -$5 from country average
            resort: 90        // -$10 from country average
          },
          monthlyRent: {
            studio: 150,      // same as average
            oneBedroom: 220   // same as average
          }
        },
        dailyLiving: {
          budget: 12,         // -$3 from country average
          midrange: 25        // -$5 from country average
        },
        food: {
          restaurantMeal: 2.50, // -$0.50 from country average
          coffee: 0.80         // -$0.20 from country average
        }
      },
      tips: [
        "Lakeside area is touristy - other areas more local/affordable",
        "Popular with trekkers and digital nomads",
        "Beautiful mountain views and relaxed atmosphere"
      ]
    },

    "Chitwan": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 4,        // -$1 from country average
            budgetHotel: 7    // -$3 from country average
          },
          midrange: {
            hotel: 18,        // -$7 from country average
            apartment: 15     // -$5 from country average
          },
          monthlyRent: {
            studio: 120,      // -$30 from country average
            oneBedroom: 180   // -$40 from country average
          }
        },
        dailyLiving: {
          budget: 10,         // -$5 from country average
          midrange: 20        // -$10 from country average
        },
        food: {
          restaurantMeal: 2,  // -$1 from country average
          coffee: 0.60        // -$0.40 from country average
        }
      },
      tips: [
        "Jungle/national park area - Sauraha is the tourist center",
        "More remote/authentic experience",
        "Wildlife safaris and nature activities"
      ]
    },

    "Lumbini": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 3,        // -$2 from country average
            budgetHotel: 6    // -$4 from country average
          },
          midrange: {
            hotel: 15,        // -$10 from country average
            apartment: 12     // -$8 from country average
          },
          monthlyRent: {
            studio: 100,      // -$50 from country average
            oneBedroom: 150   // -$70 from country average
          }
        },
        dailyLiving: {
          budget: 9,          // -$6 from country average
          midrange: 18        // -$12 from country average
        },
        food: {
          restaurantMeal: 1.80, // -$1.20 from country average
          coffee: 0.50         // -$0.50 from country average
        }
      },
      tips: [
        "Birthplace of Buddha - pilgrimage site",
        "Very peaceful and spiritual atmosphere",
        "Simple accommodations and facilities"
      ]
    }
  }
};