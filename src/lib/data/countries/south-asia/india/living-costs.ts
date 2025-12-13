// src/lib/data/countries/south-asia/india/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const indiaLivingCosts: LivingCostData = {
  country: "India",
  currency: "USD", // Changed to USD since you want prices in USD
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (in USD)
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 8,        // ~$8 USD (≈600 INR)
        budgetHotel: 15,  // ~$15 USD (≈1,125 INR)
        guesthouse: 12    // ~$12 USD (≈900 INR)
      },
      midrange: {
        hotel: 40,        // ~$40 USD (≈3,000 INR)
        apartment: 35,    // ~$35 USD (≈2,625 INR)
        boutiqueHotel: 60 // ~$60 USD (≈4,500 INR)
      },
      luxury: {
        hotel: 100,       // ~$100 USD (≈7,500 INR)
        resort: 150,      // ~$150 USD (≈11,250 INR)
        villa: 250        // ~$250 USD (≈18,750 INR)
      },
      monthlyRent: {
        studio: 300,      // ~$300 USD (≈22,500 INR)
        oneBedroom: 420,  // ~$420 USD (≈31,500 INR)
        threeBedroom: 1020 // ~$1,020 USD (≈76,500 INR)
      }
    },
    dailyLiving: {
      budget: 20,         // ~$20 USD
      midrange: 40,       // ~$40 USD
      luxury: 80,         // ~$80 USD
      breakdown: {
        food: 10,
        transport: 4,
        activities: 5,
        misc: 1
      }
    },
    transportation: {
      localBus: 0.20,     // ~$0.20 USD (≈15 INR)
      taxi: 2,            // ~$2 USD (≈150 INR)
      intercityBus: 10,   // ~$10 USD (≈750 INR)
      train: 15          // ~$15 USD (≈1,125 INR)
    },
    food: {
      streetFood: 1,      // ~$1 USD (≈75 INR)
      restaurantMeal: 6,  // ~$6 USD (≈450 INR)
      groceryWeekly: 25,  // ~$25 USD (≈1,875 INR)
      coffee: 2,          // ~$2 USD (≈150 INR)
      waterBottle: 0.25   // ~$0.25 USD (≈19 INR)
    }
  },
  
  tips: [
    "Haggle at markets but not in fixed-price stores",
    "Use Uber/Ola apps for transparent taxi pricing",
    "Avoid drinking tap water - buy bottled or filtered water",
    "Metro cities are much more expensive than smaller towns"
  ],
  
  bestAreas: {
    budget: ["Paharganj (Delhi)", "Colaba Causeway (Mumbai)", "Majestic (Bangalore)"],
    midrange: ["South Delhi", "Bandra (Mumbai)", "Indiranagar (Bangalore)"],
    luxury: ["Lutyens Delhi", "South Mumbai", "Whitefield (Bangalore)"]
  },
  
  // City-specific data - ONLY what's DIFFERENT (in USD)
  cities: {
    "Delhi": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 10,       // +$2 from country average
            budgetHotel: 18   // +$3 from country average
          },
          midrange: {
            hotel: 45,        // +$5 from country average
            apartment: 40     // +$5 from country average
          },
          luxury: {
            hotel: 120,       // +$20 from country average
            resort: 180       // +$30 from country average
          },
          monthlyRent: {
            studio: 350,      // +$50 from country average
            oneBedroom: 500   // +$80 from country average
          }
        },
        dailyLiving: {
          budget: 25,         // +$5 from country average
          midrange: 50,       // +$10 from country average
          luxury: 100         // +$20 from country average
        },
        transportation: {
          taxi: 2.50,        // +$0.50 from country average
          localBus: 0.25     // +$0.05 from country average
        },
        food: {
          restaurantMeal: 8,  // +$2 from country average
          coffee: 2.50        // +$0.50 from country average
        }
      },
      tips: [
        "NCR region expensive, South Delhi most upscale",
        "Gurgaon/Noida more affordable but further commute",
        "Use Delhi Metro for efficient transportation"
      ]
    },

    "Mumbai": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 15,       // +$7 from country average
            budgetHotel: 25   // +$10 from country average
          },
          midrange: {
            hotel: 60,        // +$20 from country average
            apartment: 55     // +$20 from country average
          },
          luxury: {
            hotel: 150,       // +$50 from country average
            resort: 220       // +$70 from country average
          },
          monthlyRent: {
            studio: 500,      // +$200 from country average
            oneBedroom: 750   // +$330 from country average
          }
        },
        dailyLiving: {
          budget: 30,         // +$10 from country average
          midrange: 60,       // +$20 from country average
          luxury: 120         // +$40 from country average
        },
        food: {
          restaurantMeal: 12, // +$6 from country average
          coffee: 3.50        // +$1.50 from country average
        }
      },
      tips: [
        "Most expensive city in India",
        "South Mumbai premium, suburbs more affordable but long commute",
        "Use local trains during off-peak hours"
      ]
    },

    "Bangalore": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 9,        // +$1 from country average
            budgetHotel: 18   // +$3 from country average
          },
          midrange: {
            hotel: 50,        // +$10 from country average
            apartment: 45     // +$10 from country average
          },
          luxury: {
            hotel: 120,       // +$20 from country average
            resort: 180       // +$30 from country average
          },
          monthlyRent: {
            studio: 400,      // +$100 from country average
            oneBedroom: 600   // +$180 from country average
          }
        },
        dailyLiving: {
          budget: 25,         // +$5 from country average
          midrange: 50,       // +$10 from country average
          luxury: 100         // +$20 from country average
        },
        food: {
          restaurantMeal: 8,  // +$2 from country average
          coffee: 2.50        // +$0.50 from country average
        }
      },
      tips: [
        "Tech hub with growing costs",
        "Indiranagar/Koramangala expensive areas",
        "Whitefield/Electronic City more affordable for tech professionals"
      ]
    },

    "Goa": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 6,        // -$2 from country average
            budgetHotel: 12   // -$3 from country average
          },
          midrange: {
            hotel: 35,        // -$5 from country average
            apartment: 30     // -$5 from country average
          },
          luxury: {
            hotel: 80,        // -$20 from country average
            resort: 120       // -$30 from country average
          },
          monthlyRent: {
            studio: 250,      // -$50 from country average
            oneBedroom: 360   // -$60 from country average
          }
        },
        dailyLiving: {
          budget: 15,         // -$5 from country average
          midrange: 30        // -$10 from country average
        },
        food: {
          restaurantMeal: 6,  // same as average
          coffee: 1.50        // -$0.50 from country average
        }
      },
      tips: [
        "North Goa (Anjuna, Vagator) popular with expats/digital nomads",
        "South Goa more relaxed and less crowded",
        "Rent a scooter for easy transportation"
      ]
    },

    "Hyderabad": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 5,        // -$3 from country average
            budgetHotel: 10   // -$5 from country average
          },
          midrange: {
            hotel: 30,        // -$10 from country average
            apartment: 25     // -$10 from country average
          },
          monthlyRent: {
            studio: 180,      // -$120 from country average
            oneBedroom: 260   // -$160 from country average
          }
        },
        dailyLiving: {
          budget: 15,         // -$5 from country average
          midrange: 30        // -$10 from country average
        },
        food: {
          restaurantMeal: 4,  // -$2 from country average
          coffee: 1.20        // -$0.80 from country average
        }
      },
      tips: [
        "Affordable tech hub",
        "Banjara Hills/Jubilee Hills upscale areas",
        "Gachibowli/HITEC City for tech professionals"
      ]
    }
  }
};