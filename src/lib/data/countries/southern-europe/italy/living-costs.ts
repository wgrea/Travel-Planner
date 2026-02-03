// src/lib/data/countries/europe/southern-europe/italy/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const italyLivingCosts: LivingCostData = {
  country: "Italy",
  currency: "USD", // Changed to USD since you want prices in USD
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (in USD) - Converted from EUR at ≈0.92 EUR = 1 USD
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 20,        // ~$20 USD (≈18.40 EUR)
        budgetHotel: 70,   // ~$70 USD (≈64.40 EUR)
        guesthouse: 50     // ~$50 USD (≈46 EUR)
      },
      midrange: {
        hotel: 130,        // ~$130 USD (≈119.60 EUR)
        apartment: 110,    // ~$110 USD (≈101.20 EUR)
        boutiqueHotel: 180 // ~$180 USD (≈165.60 EUR)
      },
      luxury: {
        hotel: 280,        // ~$280 USD (≈257.60 EUR)
        resort: 400,       // ~$400 USD (≈368 EUR)
        villa: 600         // ~$600 USD (≈552 EUR)
      },
      monthlyRent: {
        studio: 760,       // ~$760 USD (≈699 EUR)
        oneBedroom: 980,   // ~$980 USD (≈902 EUR)
        threeBedroom: 1980 // ~$1,980 USD (≈1,822 EUR)
      }
    },
    dailyLiving: {
      budget: 60,          // ~$60 USD
      midrange: 120,       // ~$120 USD
      luxury: 240,         // ~$240 USD
      breakdown: {
        food: 30,
        transport: 10,
        activities: 15,
        misc: 5
      }
    },
    transportation: {
      localBus: 1.50,      // ~$1.50 USD (≈1.38 EUR)
      taxi: 12,            // ~$12 USD (≈11.04 EUR)
      intercityBus: 35,    // ~$35 USD (≈32.20 EUR)
      train: 60           // ~$60 USD (≈55.20 EUR)
    },
    food: {
      streetFood: 3,       // ~$3 USD (≈2.76 EUR)
      restaurantMeal: 20,  // ~$20 USD (≈18.40 EUR)
      groceryWeekly: 70,   // ~$70 USD (≈64.40 EUR)
      coffee: 1.50,        // ~$1.50 USD (≈1.38 EUR)
      waterBottle: 1       // ~$1 USD (≈0.92 EUR)
    }
  },
  
  tips: [
    "Italy has North-South price divide - North is more expensive",
    "Aperitivo culture offers good value (drink + snacks)",
    "Train travel is efficient - book in advance for savings",
    "Avoid tourist trap restaurants near major attractions"
  ],
  
  bestAreas: {
    budget: ["Naples", "Bologna student areas", "Rome outskirts"],
    midrange: ["Florence Oltrarno", "Rome Trastevere", "Milan outskirts"],
    luxury: ["Milan city center", "Rome historic center", "Florence centro storico"]
  },
  
  // City-specific data - ONLY what's DIFFERENT (in USD)
  cities: {
    "Rome": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 25,       // +$5 from country average
            budgetHotel: 85   // +$15 from country average
          },
          midrange: {
            hotel: 160,       // +$30 from country average
            apartment: 130    // +$20 from country average
          },
          luxury: {
            hotel: 350,       // +$70 from country average
            resort: 480       // +$80 from country average
          },
          monthlyRent: {
            studio: 870,      // +$110 from country average
            oneBedroom: 1090  // +$110 from country average
          }
        },
        dailyLiving: {
          budget: 70,         // +$10 from country average
          midrange: 140       // +$20 from country average
        },
        food: {
          restaurantMeal: 25, // +$5 from country average
          coffee: 1.80        // +$0.30 from country average
        }
      },
      tips: [
        "Historic center is most expensive",
        "Trastevere and Prati neighborhoods more affordable",
        "Use Roma Pass for transport and museum discounts",
        "Avoid restaurants immediately near major tourist sites"
      ]
    },

    "Milan": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 30,       // +$10 from country average
            budgetHotel: 100  // +$30 from country average
          },
          midrange: {
            hotel: 200,       // +$70 from country average
            apartment: 160    // +$50 from country average
          },
          luxury: {
            hotel: 400,       // +$120 from country average
            resort: 550       // +$150 from country average
          },
          monthlyRent: {
            studio: 1090,     // +$330 from country average
            oneBedroom: 1415  // +$435 from country average
          }
        },
        dailyLiving: {
          budget: 85,         // +$25 from country average
          midrange: 170       // +$50 from country average
        },
        food: {
          restaurantMeal: 30, // +$10 from country average
          coffee: 2           // +$0.50 from country average
        }
      },
      tips: [
        "Most expensive city in Italy - business and fashion capital",
        "Consider suburbs or neighboring towns for better value",
        "Aperitivo in Navigli district offers good value",
        "Milan has excellent public transport system"
      ]
    },

    "Florence": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 22,       // +$2 from country average
            budgetHotel: 75   // +$5 from country average
          },
          midrange: {
            hotel: 150,       // +$20 from country average
            apartment: 120    // +$10 from country average
          },
          luxury: {
            hotel: 320,       // +$40 from country average
            resort: 450       // +$50 from country average
          },
          monthlyRent: {
            studio: 760,      // same as average
            oneBedroom: 980   // same as average
          }
        },
        dailyLiving: {
          budget: 65,         // +$5 from country average
          midrange: 135       // +$15 from country average
        },
        food: {
          restaurantMeal: 22, // +$2 from country average
          coffee: 1.60        // +$0.10 from country average
        }
      },
      tips: [
        "Tourist areas in center are expensive",
        "Oltrarno (across river) is more authentic and affordable",
        "Consider staying outside historic center for better value",
        "Florence is walkable - you may not need public transport"
      ]
    },

    "Naples": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 15,       // -$5 from country average
            budgetHotel: 50   // -$20 from country average
          },
          midrange: {
            hotel: 100,       // -$30 from country average
            apartment: 85     // -$25 from country average
          },
          luxury: {
            hotel: 220,       // -$60 from country average
            resort: 320       // -$80 from country average
          },
          monthlyRent: {
            studio: 545,      // -$215 from country average
            oneBedroom: 710   // -$270 from country average
          }
        },
        dailyLiving: {
          budget: 45,         // -$15 from country average
          midrange: 95        // -$25 from country average
        },
        food: {
          restaurantMeal: 15, // -$5 from country average
          coffee: 1.10        // -$0.40 from country average
        }
      },
      tips: [
        "Most affordable major Italian city",
        "Authentic Italian experience with vibrant street life",
        "Be cautious in certain neighborhoods at night",
        "Excellent and affordable pizza and street food"
      ]
    },

    "Bologna": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 18,       // -$2 from country average
            budgetHotel: 65   // -$5 from country average
          },
          midrange: {
            hotel: 120,       // -$10 from country average
            apartment: 100    // -$10 from country average
          },
          luxury: {
            hotel: 250,       // -$30 from country average
            resort: 370       // -$30 from country average
          },
          monthlyRent: {
            studio: 655,      // -$105 from country average
            oneBedroom: 870   // -$110 from country average
          }
        },
        dailyLiving: {
          budget: 55,         // -$5 from country average
          midrange: 115       // -$5 from country average
        },
        food: {
          restaurantMeal: 19, // -$1 from country average
          coffee: 1.40        // -$0.10 from country average
        }
      },
      tips: [
        "University city with vibrant student life",
        "Excellent food scene - known as 'La Grassa' (The Fat One)",
        "Porticoes provide covered walkways throughout city",
        "Good balance of affordability and quality of life"
      ]
    }
  }
};