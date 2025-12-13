// src/lib/data/countries/south-asia/bangladesh/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const bangladeshLivingCosts: LivingCostData = {
  country: "Bangladesh",
  currency: "USD", // Changed to USD since you want prices in USD
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (in USD) - Converted from BDT at ≈110 BDT = 1 USD
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 5,        // ~$5 USD (≈550 BDT)
        budgetHotel: 10,  // ~$10 USD (≈1,100 BDT)
        guesthouse: 8     // ~$8 USD (≈880 BDT)
      },
      midrange: {
        hotel: 30,        // ~$30 USD (≈3,300 BDT)
        apartment: 25,    // ~$25 USD (≈2,750 BDT)
        boutiqueHotel: 45 // ~$45 USD (≈4,950 BDT)
      },
      luxury: {
        hotel: 80,        // ~$80 USD (≈8,800 BDT)
        resort: 120,      // ~$120 USD (≈13,200 BDT)
        villa: 200        // ~$200 USD (≈22,000 BDT)
      },
      monthlyRent: {
        studio: 190,      // ~$190 USD (≈21,000 BDT)
        oneBedroom: 280,  // ~$280 USD (≈31,000 BDT)
        threeBedroom: 660 // ~$660 USD (≈73,000 BDT)
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
      localBus: 0.15,     // ~$0.15 USD (≈17 BDT)
      taxi: 2,            // ~$2 USD (≈220 BDT)
      intercityBus: 8,    // ~$8 USD (≈880 BDT)
      train: 12          // ~$12 USD (≈1,320 BDT)
    },
    food: {
      streetFood: 0.50,   // ~$0.50 USD (≈55 BDT)
      restaurantMeal: 3,  // ~$3 USD (≈330 BDT)
      groceryWeekly: 20,  // ~$20 USD (≈2,200 BDT)
      coffee: 1.50,       // ~$1.50 USD (≈165 BDT)
      waterBottle: 0.15   // ~$0.15 USD (≈17 BDT)
    }
  },
  
  tips: [
    "BDT (Bangladeshi Taka) is the local currency",
    "Gulshan/Banani are upscale expat areas in Dhaka",
    "Traffic is extremely heavy in Dhaka - plan extra time",
    "Bargain at markets but not in fixed-price stores"
  ],
  
  bestAreas: {
    budget: ["Dhanmondi (Dhaka)", "Agrabad outskirts (Chittagong)"],
    midrange: ["Gulshan/Banani (Dhaka)", "Agrabad commercial (Chittagong)"],
    luxury: ["Gulshan diplomatic zone (Dhaka)", "Upscale hotels in major cities"]
  },
  
  // City-specific data - ONLY what's DIFFERENT (in USD)
  cities: {
    "Dhaka": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 7,        // +$2 from country average
            budgetHotel: 12   // +$2 from country average
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
            studio: 270,      // +$80 from country average
            oneBedroom: 410   // +$130 from country average
          }
        },
        dailyLiving: {
          budget: 20,         // +$5 from country average
          midrange: 40,       // +$10 from country average
          luxury: 80          // +$20 from country average
        },
        transportation: {
          taxi: 2.50,        // +$0.50 from country average
          localBus: 0.20     // +$0.05 from country average
        },
        food: {
          restaurantMeal: 4,  // +$1 from country average
          coffee: 2           // +$0.50 from country average
        }
      },
      tips: [
        "Most expensive city in Bangladesh",
        "Gulshan/Banani are upscale expat areas",
        "Dhanmondi is more affordable and still central",
        "Traffic is extremely heavy - plan commute times carefully"
      ]
    },

    "Chittagong": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 5,        // same as average
            budgetHotel: 9    // -$1 from country average
          },
          midrange: {
            hotel: 25,        // -$5 from country average
            apartment: 22     // -$3 from country average
          },
          luxury: {
            hotel: 70,        // -$10 from country average
            resort: 100       // -$20 from country average
          },
          monthlyRent: {
            studio: 180,      // -$10 from country average
            oneBedroom: 270   // -$10 from country average
          }
        },
        dailyLiving: {
          budget: 12,         // -$3 from country average
          midrange: 25        // -$5 from country average
        },
        food: {
          restaurantMeal: 2.50, // -$0.50 from country average
          coffee: 1.20         // -$0.30 from country average
        }
      },
      tips: [
        "Port city, more relaxed than Dhaka",
        "Agrabad is the commercial area",
        "Residential areas more affordable",
        "Growing digital nomad community"
      ]
    },

    "Sylhet": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 4,        // -$1 from country average
            budgetHotel: 7    // -$3 from country average
          },
          midrange: {
            hotel: 20,        // -$10 from country average
            apartment: 18     // -$7 from country average
          },
          luxury: {
            hotel: 60,        // -$20 from country average
            resort: 90        // -$30 from country average
          },
          monthlyRent: {
            studio: 140,      // -$50 from country average
            oneBedroom: 200   // -$80 from country average
          }
        },
        dailyLiving: {
          budget: 10,         // -$5 from country average
          midrange: 20        // -$10 from country average
        },
        food: {
          restaurantMeal: 2,  // -$1 from country average
          coffee: 1           // -$0.50 from country average
        }
      },
      tips: [
        "Tea garden region - beautiful landscapes",
        "Many British Bangladeshi expats return here",
        "More conservative culture than major cities",
        "Famous for tea estates and natural beauty"
      ]
    },

    "Cox's Bazar": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 6,        // +$1 from country average
            budgetHotel: 10   // same as average
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
            studio: 160,      // -$30 from country average (but tourist area)
            oneBedroom: 230   // -$50 from country average
          }
        },
        dailyLiving: {
          budget: 15,         // same as average
          midrange: 35        // +$5 from country average (tourist prices)
        },
        food: {
          restaurantMeal: 3.50, // +$0.50 from country average
          coffee: 2           // +$0.50 from country average
        }
      },
      tips: [
        "World's longest natural sea beach",
        "Tourist prices apply, especially in high season (Nov-Mar)",
        "Accommodation varies greatly by season",
        "Water sports and beach activities available"
      ]
    }
  }
};