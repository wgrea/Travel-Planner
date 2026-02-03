// src/lib/data/countries/europe/western-europe/united-kingdom/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const ukLivingCosts: LivingCostData = {
  country: "United Kingdom",
  currency: "USD", // Changed to USD since you want prices in USD
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (in USD) - Converted from GBP at ≈0.79 GBP = 1 USD
  // Note: UK prices are already in GBP which is stronger than USD
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 25,        // ~$25 USD (≈£20)
        budgetHotel: 80,   // ~$80 USD (≈£63)
        guesthouse: 60     // ~$60 USD (≈£47)
      },
      midrange: {
        hotel: 150,        // ~$150 USD (≈£119)
        apartment: 130,    // ~$130 USD (≈£103)
        boutiqueHotel: 200 // ~$200 USD (≈£158)
      },
      luxury: {
        hotel: 350,        // ~$350 USD (≈£277)
        resort: 500,       // ~$500 USD (≈£395)
        villa: 800         // ~$800 USD (≈£632)
      },
      monthlyRent: {
        studio: 1000,      // ~$1,000 USD (≈£790)
        oneBedroom: 1270,  // ~$1,270 USD (≈£1,003)
        threeBedroom: 2530 // ~$2,530 USD (≈£2,000)
      }
    },
    dailyLiving: {
      budget: 80,          // ~$80 USD
      midrange: 150,       // ~$150 USD
      luxury: 300,         // ~$300 USD
      breakdown: {
        food: 40,
        transport: 20,
        activities: 15,
        misc: 5
      }
    },
    transportation: {
      localBus: 2.50,      // ~$2.50 USD (≈£1.98)
      taxi: 15,            // ~$15 USD (≈£11.85)
      intercityBus: 40,    // ~$40 USD (≈£31.60)
      train: 80           // ~$80 USD (≈£63.20)
    },
    food: {
      streetFood: 8,       // ~$8 USD (≈£6.32)
      restaurantMeal: 25,  // ~$25 USD (≈£19.75)
      groceryWeekly: 100,  // ~$100 USD (≈£79)
      coffee: 4,           // ~$4 USD (≈£3.16)
      waterBottle: 1.20    // ~$1.20 USD (≈£0.95)
    }
  },
  
  tips: [
    "UK is expensive, especially London",
    "Book train tickets in advance for significant savings",
    "Pub meals often offer good value compared to restaurants",
    "Consider travel cards for public transportation savings"
  ],
  
  bestAreas: {
    budget: ["Manchester Northern Quarter", "Glasgow Southside", "Birmingham Digbeth"],
    midrange: ["Bristol Clifton", "Edinburgh Leith", "London Zones 3-4"],
    luxury: ["London Zones 1-2", "Edinburgh New Town", "Bristol Clifton Village"]
  },
  
  // City-specific data - ONLY what's DIFFERENT (in USD)
  cities: {
    "London": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 35,       // +$10 from country average
            budgetHotel: 120  // +$40 from country average
          },
          midrange: {
            hotel: 250,       // +$100 from country average
            apartment: 200    // +$70 from country average
          },
          luxury: {
            hotel: 500,       // +$150 from country average
            resort: 700       // +$200 from country average
          },
          monthlyRent: {
            studio: 1520,     // +$520 from country average
            oneBedroom: 2030  // +$760 from country average
          }
        },
        dailyLiving: {
          budget: 120,        // +$40 from country average
          midrange: 200,      // +$50 from country average
          luxury: 400         // +$100 from country average
        },
        transportation: {
          taxi: 20,          // +$5 from country average
          localBus: 3.50     // +$1 from country average
        },
        food: {
          restaurantMeal: 35, // +$10 from country average
          coffee: 5.50        // +$1.50 from country average
        }
      },
      tips: [
        "Zones 1-2 are most expensive, consider Zones 3-6",
        "East London (Shoreditch, Hackney) popular with digital nomads",
        "Use Oyster card or contactless for cheapest transport",
        "Markets like Borough Market offer quality but are pricey"
      ]
    },

    "Manchester": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 20,       // -$5 from country average
            budgetHotel: 60   // -$20 from country average
          },
          midrange: {
            hotel: 120,       // -$30 from country average
            apartment: 100    // -$30 from country average
          },
          luxury: {
            hotel: 280,       // -$70 from country average
            resort: 400       // -$100 from country average
          },
          monthlyRent: {
            studio: 880,      // -$120 from country average
            oneBedroom: 1140  // -$130 from country average
          }
        },
        dailyLiving: {
          budget: 60,         // -$20 from country average
          midrange: 120       // -$30 from country average
        },
        food: {
          restaurantMeal: 20, // -$5 from country average
          coffee: 3.50        // -$0.50 from country average
        }
      },
      tips: [
        "Northern Quarter is creative hub with coworking spaces",
        "Spinningfields is business district",
        "Suburbs more affordable with good transport links",
        "Growing tech and startup scene"
      ]
    },

    "Edinburgh": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 22,       // -$3 from country average
            budgetHotel: 70   // -$10 from country average
          },
          midrange: {
            hotel: 140,       // -$10 from country average
            apartment: 120    // -$10 from country average
          },
          luxury: {
            hotel: 320,       // -$30 from country average
            resort: 450       // -$50 from country average
          },
          monthlyRent: {
            studio: 950,      // -$50 from country average
            oneBedroom: 1200  // -$70 from country average
          }
        },
        dailyLiving: {
          budget: 70,         // -$10 from country average
          midrange: 140       // -$10 from country average
        },
        food: {
          restaurantMeal: 22, // -$3 from country average
          coffee: 4.20        // +$0.20 from country average
        }
      },
      tips: [
        "Historic Old Town is expensive but charming",
        "Leith is more affordable and up-and-coming",
        "Festival period (August) prices skyrocket - book early",
        "Beautiful but can be touristy in center"
      ]
    },

    "Bristol": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 24,       // -$1 from country average
            budgetHotel: 75   // -$5 from country average
          },
          midrange: {
            hotel: 160,       // +$10 from country average
            apartment: 140    // +$10 from country average
          },
          luxury: {
            hotel: 340,       // -$10 from country average
            resort: 480       // -$20 from country average
          },
          monthlyRent: {
            studio: 1010,     // +$10 from country average
            oneBedroom: 1270  // same as average
          }
        },
        dailyLiving: {
          budget: 75,         // -$5 from country average
          midrange: 155       // +$5 from country average
        },
        food: {
          restaurantMeal: 24, // -$1 from country average
          coffee: 4.30        // +$0.30 from country average
        }
      },
      tips: [
        "Creative and tech hub with strong startup ecosystem",
        "Clifton is upscale and expensive",
        "Stokes Croft is alternative/artsy area",
        "Good public transport and cycling infrastructure"
      ]
    },

    "Glasgow": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 18,       // -$7 from country average
            budgetHotel: 55   // -$25 from country average
          },
          midrange: {
            hotel: 110,       // -$40 from country average
            apartment: 95     // -$35 from country average
          },
          luxury: {
            hotel: 250,       // -$100 from country average
            resort: 380       // -$120 from country average
          },
          monthlyRent: {
            studio: 760,      // -$240 from country average
            oneBedroom: 950   // -$320 from country average
          }
        },
        dailyLiving: {
          budget: 55,         // -$25 from country average
          midrange: 120       // -$30 from country average
        },
        food: {
          restaurantMeal: 18, // -$7 from country average
          coffee: 3.80        // -$0.20 from country average
        }
      },
      tips: [
        "West End is trendy but expensive",
        "Southside is more affordable with good amenities",
        "Friendly atmosphere and strong arts scene",
        "Most affordable major UK city"
      ]
    }
  }
};