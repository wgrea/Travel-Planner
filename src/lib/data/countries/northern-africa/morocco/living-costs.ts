// src/lib/data/countries/middle-east/morocco/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const moroccoLivingCosts: LivingCostData = {
  country: "Morocco",
  currency: "USD", // Changed to USD since you want prices in USD
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (in USD) - Converted from MAD at ≈10 MAD = 1 USD
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 10,        // ~$10 USD (≈100 MAD)
        budgetHotel: 25,   // ~$25 USD (≈250 MAD)
        guesthouse: 20     // ~$20 USD (≈200 MAD)
      },
      midrange: {
        hotel: 60,         // ~$60 USD (≈600 MAD)
        apartment: 50,     // ~$50 USD (≈500 MAD)
        boutiqueHotel: 90  // ~$90 USD (≈900 MAD)
      },
      luxury: {
        hotel: 150,        // ~$150 USD (≈1,500 MAD)
        resort: 220,       // ~$220 USD (≈2,200 MAD)
        villa: 350         // ~$350 USD (≈3,500 MAD)
      },
      monthlyRent: {
        studio: 300,       // ~$300 USD (≈3,000 MAD)
        oneBedroom: 430,   // ~$430 USD (≈4,300 MAD)
        threeBedroom: 1000 // ~$1,000 USD (≈10,000 MAD)
      }
    },
    dailyLiving: {
      budget: 30,          // ~$30 USD
      midrange: 60,        // ~$60 USD
      luxury: 120,         // ~$120 USD
      breakdown: {
        food: 15,
        transport: 5,
        activities: 8,
        misc: 2
      }
    },
    transportation: {
      localBus: 0.30,      // ~$0.30 USD (≈3 MAD)
      taxi: 3,             // ~$3 USD (≈30 MAD)
      intercityBus: 15,    // ~$15 USD (≈150 MAD)
      train: 25           // ~$25 USD (≈250 MAD)
    },
    food: {
      streetFood: 2,       // ~$2 USD (≈20 MAD)
      restaurantMeal: 6,   // ~$6 USD (≈60 MAD)
      groceryWeekly: 40,   // ~$40 USD (≈400 MAD)
      coffee: 2,           // ~$2 USD (≈20 MAD)
      waterBottle: 0.50    // ~$0.50 USD (≈5 MAD)
    }
  },
  
  tips: [
    "MAD (Moroccan Dirham) is the local currency",
    "Bargain at markets (souks) but not in fixed-price stores",
    "Avoid drinking tap water - buy bottled water",
    "Learn basic French or Arabic phrases for better prices"
  ],
  
  bestAreas: {
    budget: ["Medina outskirts", "Ville Nouvelle areas"],
    midrange: ["Gueliz (Marrakech)", "Ville Nouvelle centers"],
    luxury: ["Palmeraie (Marrakech)", "Anfa (Casablanca)", "Coastal resorts"]
  },
  
  // City-specific data - ONLY what's DIFFERENT (in USD)
  cities: {
    "Marrakech": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 12,       // +$2 from country average
            budgetHotel: 30   // +$5 from country average
          },
          midrange: {
            hotel: 70,        // +$10 from country average
            apartment: 60     // +$10 from country average
          },
          luxury: {
            hotel: 180,       // +$30 from country average
            resort: 250       // +$30 from country average
          },
          monthlyRent: {
            studio: 320,      // +$20 from country average
            oneBedroom: 480   // +$50 from country average
          }
        },
        dailyLiving: {
          budget: 35,         // +$5 from country average
          midrange: 70,       // +$10 from country average
          luxury: 140         // +$20 from country average
        },
        food: {
          restaurantMeal: 8,  // +$2 from country average
          coffee: 2.50        // +$0.50 from country average
        }
      },
      tips: [
        "Medina area is authentic but noisy",
        "Gueliz/Hivernage are modern and more expensive",
        "Palmeraie area for luxury accommodations",
        "Tourist prices common in main squares"
      ]
    },

    "Casablanca": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 15,       // +$5 from country average
            budgetHotel: 35   // +$10 from country average
          },
          midrange: {
            hotel: 80,        // +$20 from country average
            apartment: 70     // +$20 from country average
          },
          luxury: {
            hotel: 200,       // +$50 from country average
            resort: 280       // +$60 from country average
          },
          monthlyRent: {
            studio: 400,      // +$100 from country average
            oneBedroom: 600   // +$170 from country average
          }
        },
        dailyLiving: {
          budget: 40,         // +$10 from country average
          midrange: 80,       // +$20 from country average
          luxury: 160         // +$40 from country average
        },
        food: {
          restaurantMeal: 10, // +$4 from country average
          coffee: 3           // +$1 from country average
        }
      },
      tips: [
        "Business capital and most expensive city",
        "Maarif/Anfa are upscale neighborhoods",
        "Ain Diab is coastal and popular",
        "Working-class areas more affordable"
      ]
    },

    "Fes": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 8,        // -$2 from country average
            budgetHotel: 20   // -$5 from country average
          },
          midrange: {
            hotel: 50,        // -$10 from country average
            apartment: 40     // -$10 from country average
          },
          luxury: {
            hotel: 130,       // -$20 from country average
            resort: 190       // -$30 from country average
          },
          monthlyRent: {
            studio: 250,      // -$50 from country average
            oneBedroom: 350   // -$80 from country average
          }
        },
        dailyLiving: {
          budget: 25,         // -$5 from country average
          midrange: 50        // -$10 from country average
        },
        food: {
          restaurantMeal: 5,  // -$1 from country average
          coffee: 1.50        // -$0.50 from country average
        }
      },
      tips: [
        "Historic imperial city with ancient medina",
        "Fes el Bali (old medina) is authentic experience",
        "Ville Nouvelle is modern part of city",
        "More conservative culture than coastal cities"
      ]
    },

    "Essaouira": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 7,        // -$3 from country average
            budgetHotel: 18   // -$7 from country average
          },
          midrange: {
            hotel: 45,        // -$15 from country average
            apartment: 35     // -$15 from country average
          },
          luxury: {
            hotel: 120,       // -$30 from country average
            resort: 180       // -$40 from country average
          },
          monthlyRent: {
            studio: 220,      // -$80 from country average
            oneBedroom: 320   // -$110 from country average
          }
        },
        dailyLiving: {
          budget: 20,         // -$10 from country average
          midrange: 45        // -$15 from country average
        },
        food: {
          restaurantMeal: 4.50, // -$1.50 from country average
          coffee: 1.20        // -$0.80 from country average
        }
      },
      tips: [
        "Coastal fortified town with artsy/bohemian vibe",
        "Popular with surfers and creative expats",
        "Windy climate - good for wind/kite surfing",
        "More relaxed pace than major cities"
      ]
    },

    "Agadir": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 11,       // +$1 from country average
            budgetHotel: 28   // +$3 from country average
          },
          midrange: {
            hotel: 65,        // +$5 from country average
            apartment: 55     // +$5 from country average
          },
          luxury: {
            hotel: 170,       // +$20 from country average
            resort: 240       // +$20 from country average
          },
          monthlyRent: {
            studio: 320,      // +$20 from country average
            oneBedroom: 480   // +$50 from country average
          }
        },
        dailyLiving: {
          budget: 35,         // +$5 from country average
          midrange: 70        // +$10 from country average
        },
        food: {
          restaurantMeal: 7,  // +$1 from country average
          coffee: 2.20        // +$0.20 from country average
        }
      },
      tips: [
        "Beach resort city rebuilt after 1960 earthquake",
        "Modern tourist infrastructure",
        "Popular with European retirees",
        "Good water sports and beach activities"
      ]
    }
  }
};