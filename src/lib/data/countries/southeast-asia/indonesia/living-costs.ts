// src/lib/data/countries/southeast-asia/indonesia/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const indonesiaLivingCosts: LivingCostData = {
  country: "Indonesia",
  currency: "IDR", 
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (full data)
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 150000, // ~$10 USD
        budgetHotel: 350000, // ~$23 USD
        guesthouse: 250000 // ~$16 USD
      },
      midrange: {
        hotel: 700000, // ~$46 USD
        apartment: 550000, // ~$36 USD
        boutiqueHotel: 900000 // ~$60 USD
      },
      luxury: {
        hotel: 2000000, // ~$133 USD
        resort: 3000000, // ~$200 USD
        villa: 4000000 // ~$267 USD
      },
      monthlyRent: {
        studio: 4000000, // ~$267 USD
        oneBedroom: 6000000, // ~$400 USD
        threeBedroom: 12000000 // ~$800 USD
      }
    },
    dailyLiving: {
      budget: 250000, // ~$17 USD
      midrange: 500000, // ~$33 USD
      luxury: 1200000, // ~$80 USD
      breakdown: {
        food: 120000,
        transport: 50000,
        activities: 70000,
        misc: 10000
      }
    },
    transportation: {
      localBus: 3500, // ~$0.23 USD
      taxi: 15000, // ~$1 USD
      intercityBus: 80000, // ~$5 USD
      train: 150000 // ~$10 USD
    },
    food: {
      streetFood: 15000, // ~$1 USD
      restaurantMeal: 60000, // ~$4 USD
      groceryWeekly: 400000 // ~$27 USD
    }
  },
  
  tips: [
    "Eat at warungs (local eateries) for authentic and cheap food",
    "Use Gojek/Grab apps for transparent transportation pricing",
    "Bargain at markets but not in fixed-price stores",
    "Avoid drinking tap water - buy bottled water"
  ],
  
  bestAreas: {
    budget: ["Kuta (Bali)", "Legian", "Khao San Road equivalent areas"],
    midrange: ["Canggu", "Seminyak", "Ubud"],
    luxury: ["Nusa Dua", "Jimbaran", "Sanur"]
  },
  
  // City-specific data - ONLY what's DIFFERENT
  cities: {
    "Bali": {
      baseCosts: {
        accommodation: {
          budget: { 
            hostel: 200000,      // +50k from country average
            budgetHotel: 450000  // +100k from country average
          },
          midrange: {
            hotel: 900000,      // +200k from country average
            apartment: 700000   // +150k from country average
          },
          luxury: {
            hotel: 2500000,     // +500k from country average
            resort: 3500000     // +500k from country average
          },
          monthlyRent: {
            studio: 5000000,    // +1M from country average
            oneBedroom: 8000000 // +2M from country average
          }
        },
        dailyLiving: {
          budget: 300000,        // +50k from country average
          midrange: 600000,      // +100k from country average
          luxury: 1500000        // +300k from country average
        },
        food: {
          restaurantMeal: 80000  // +20k from country average
        }
      },
      tips: [
        "Canggu is digital nomad central with many coworking spaces",
        "Ubud is cheaper than southern beach areas",
        "Rent a scooter for getting around (5-8 USD/day)",
        "Avoid restaurants in main tourist strips for better prices"
      ]
    },

    "Jakarta": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 180000,      // +30k from country average
            budgetHotel: 400000  // +50k from country average
          },
          midrange: {
            hotel: 800000,      // +100k from country average
            apartment: 650000   // +100k from country average  
          },
          monthlyRent: {
            studio: 4500000,    // +500k from country average
            oneBedroom: 7000000 // +1M from country average
          }
        },
        dailyLiving: {
          budget: 280000,        // +30k from country average
          midrange: 550000,      // +50k from country average
          luxury: 1300000        // +100k from country average
        },
        transportation: {
          taxi: 20000,          // +5k from country average
          localBus: 5000        // +1.5k from country average
        }
      },
      tips: [
        "Use TransJakarta bus system to avoid traffic",
        "Gojek motorbike taxis are fastest for short trips",
        "Shopping malls have food courts with good prices",
        "Traffic is terrible - plan extra travel time"
      ]
    },

    "Yogyakarta": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 120000,      // -30k from country average
            budgetHotel: 250000  // -100k from country average
          },
          midrange: {
            hotel: 500000,      // -200k from country average
            apartment: 400000   // -150k from country average
          },
          monthlyRent: {
            studio: 3000000,    // -1M from country average
            oneBedroom: 4500000 // -1.5M from country average
          }
        },
        dailyLiving: {
          budget: 200000,        // -50k from country average
          midrange: 400000,      // -100k from country average
          luxury: 1000000        // -200k from country average
        },
        food: {
          streetFood: 10000,    // -5k from country average
          restaurantMeal: 45000 // -15k from country average
        }
      },
      tips: [
        "Traditional becak (cycle rickshaw) for short distances",
        "Visit local warungs near universities for cheap eats",
        "Stay in Sosrowijayan area for budget accommodations",
        "Buy batik fabrics from local markets, not tourist shops"
      ]
    },

    "Lombok": {
      baseCosts: {
        accommodation: {
          budget: {
            budgetHotel: 300000  // -50k from country average
          },
          midrange: {
            apartment: 450000   // -100k from country average
          },
          monthlyRent: {
            studio: 3500000,    // -500k from country average
            oneBedroom: 5000000 // -1M from country average
          }
        },
        dailyLiving: {
          budget: 220000,        // -30k from country average
          midrange: 450000       // -50k from country average
        }
      },
      tips: [
        "Lombok is generally cheaper than Bali",
        "Senggigi area has more amenities but is pricier",
        "Kuta Lombok (not to be confused with Bali's Kuta) is more budget-friendly",
        "Rent a motorbike to explore waterfalls and beaches"
      ]
    }
  }
};