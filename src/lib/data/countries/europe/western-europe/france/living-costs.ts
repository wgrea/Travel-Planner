// src/lib/data/countries/europe/western-europe/france/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const franceLivingCosts: LivingCostData = {
  country: "France",
  currency: "USD", // Changed to USD since you want prices in USD
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (in USD) - Converted from EUR at ≈0.92 EUR = 1 USD
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 25,        // ~$25 USD (≈23 EUR)
        budgetHotel: 80,   // ~$80 USD (≈74 EUR)
        guesthouse: 60     // ~$60 USD (≈55 EUR)
      },
      midrange: {
        hotel: 150,        // ~$150 USD (≈138 EUR)
        apartment: 130,    // ~$130 USD (≈120 EUR)
        boutiqueHotel: 200 // ~$200 USD (≈184 EUR)
      },
      luxury: {
        hotel: 300,        // ~$300 USD (≈276 EUR)
        resort: 450,       // ~$450 USD (≈414 EUR)
        villa: 700         // ~$700 USD (≈644 EUR)
      },
      monthlyRent: {
        studio: 710,       // ~$710 USD (≈653 EUR)
        oneBedroom: 925,   // ~$925 USD (≈851 EUR)
        threeBedroom: 2010 // ~$2,010 USD (≈1,849 EUR)
      }
    },
    dailyLiving: {
      budget: 70,          // ~$70 USD
      midrange: 140,       // ~$140 USD
      luxury: 280,         // ~$280 USD
      breakdown: {
        food: 35,
        transport: 15,
        activities: 15,
        misc: 5
      }
    },
    transportation: {
      localBus: 2,         // ~$2 USD (≈1.84 EUR)
      taxi: 15,            // ~$15 USD (≈13.80 EUR)
      intercityBus: 40,    // ~$40 USD (≈36.80 EUR)
      train: 80           // ~$80 USD (≈73.60 EUR)
    },
    food: {
      streetFood: 5,       // ~$5 USD (≈4.60 EUR)
      restaurantMeal: 25,  // ~$25 USD (≈23 EUR)
      groceryWeekly: 80,   // ~$80 USD (≈73.60 EUR)
      coffee: 3.50,        // ~$3.50 USD (≈3.22 EUR)
      waterBottle: 1.50    // ~$1.50 USD (≈1.38 EUR)
    }
  },
  
  tips: [
    "France has high quality but can be expensive",
    "Buy train tickets in advance for best prices",
    "Lunch menus (formule) offer better value than dinner",
    "Boulangeries and markets offer fresh food at good prices"
  ],
  
  bestAreas: {
    budget: ["Marseille northern neighborhoods", "Lyon Croix-Rousse", "Paris 11th-20th arrondissements"],
    midrange: ["Bordeaux Bastide", "Toulouse Saint-Cyprien", "Nice Liberation"],
    luxury: ["Paris 1st-8th arrondissements", "Nice Promenade des Anglais", "Bordeaux historic center"]
  },
  
  // City-specific data - ONLY what's DIFFERENT (in USD)
  cities: {
    "Paris": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 35,       // +$10 from country average
            budgetHotel: 120  // +$40 from country average
          },
          midrange: {
            hotel: 220,       // +$70 from country average
            apartment: 180    // +$50 from country average
          },
          luxury: {
            hotel: 400,       // +$100 from country average
            resort: 600       // +$150 from country average
          },
          monthlyRent: {
            studio: 980,      // +$270 from country average
            oneBedroom: 1305  // +$380 from country average
          }
        },
        dailyLiving: {
          budget: 100,        // +$30 from country average
          midrange: 180,      // +$40 from country average
          luxury: 350         // +$70 from country average
        },
        transportation: {
          taxi: 20,          // +$5 from country average
          localBus: 2.50     // +$0.50 from country average
        },
        food: {
          restaurantMeal: 35, // +$10 from country average
          coffee: 4.50        // +$1 from country average
        }
      },
      tips: [
        "Arrondissements vary greatly in price",
        "1st-8th arrondissements most expensive",
        "11th-20th arrondissements more affordable",
        "Use Navigo card for monthly transport pass"
      ]
    },

    "Lyon": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 20,       // -$5 from country average
            budgetHotel: 65   // -$15 from country average
          },
          midrange: {
            hotel: 130,       // -$20 from country average
            apartment: 110    // -$20 from country average
          },
          luxury: {
            hotel: 250,       // -$50 from country average
            resort: 380       // -$70 from country average
          },
          monthlyRent: {
            studio: 655,      // -$55 from country average
            oneBedroom: 870   // -$55 from country average
          }
        },
        dailyLiving: {
          budget: 60,         // -$10 from country average
          midrange: 120       // -$20 from country average
        },
        food: {
          restaurantMeal: 22, // -$3 from country average
          coffee: 3.20        // -$0.30 from country average
        }
      },
      tips: [
        "Gastronomic capital of France",
        "Presqu'île area is most expensive",
        "Croix-Rousse is more bohemian and affordable",
        "Excellent public transportation system"
      ]
    },

    "Marseille": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 18,       // -$7 from country average
            budgetHotel: 60   // -$20 from country average
          },
          midrange: {
            hotel: 120,       // -$30 from country average
            apartment: 100    // -$30 from country average
          },
          luxury: {
            hotel: 230,       // -$70 from country average
            resort: 350       // -$100 from country average
          },
          monthlyRent: {
            studio: 600,      // -$110 from country average
            oneBedroom: 760   // -$165 from country average
          }
        },
        dailyLiving: {
          budget: 50,         // -$20 from country average
          midrange: 110       // -$30 from country average
        },
        food: {
          restaurantMeal: 20, // -$5 from country average
          coffee: 3           // -$0.50 from country average
        }
      },
      tips: [
        "Mediterranean port city with vibrant culture",
        "Vieux-Port area is expensive and touristy",
        "Northern neighborhoods more affordable",
        "Excellent fresh seafood markets"
      ]
    },

    "Nice": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 22,       // -$3 from country average
            budgetHotel: 75   // -$5 from country average
          },
          midrange: {
            hotel: 160,       // +$10 from country average
            apartment: 140    // +$10 from country average
          },
          luxury: {
            hotel: 350,       // +$50 from country average
            resort: 500       // +$50 from country average
          },
          monthlyRent: {
            studio: 710,      // same as average
            oneBedroom: 925   // same as average
          }
        },
        dailyLiving: {
          budget: 75,         // +$5 from country average
          midrange: 155       // +$15 from country average
        },
        food: {
          restaurantMeal: 28, // +$3 from country average
          coffee: 3.70        // +$0.20 from country average
        }
      },
      tips: [
        "Côte d'Azur resort city with Mediterranean climate",
        "Promenade des Anglais area is premium",
        "Liberation neighborhood more local and affordable",
        "Tourist prices in summer, better deals offseason"
      ]
    },

    "Bordeaux": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 21,       // -$4 from country average
            budgetHotel: 70   // -$10 from country average
          },
          midrange: {
            hotel: 145,       // -$5 from country average
            apartment: 125    // -$5 from country average
          },
          luxury: {
            hotel: 280,       // -$20 from country average
            resort: 420       // -$30 from country average
          },
          monthlyRent: {
            studio: 655,      // -$55 from country average
            oneBedroom: 870   // -$55 from country average
          }
        },
        dailyLiving: {
          budget: 65,         // -$5 from country average
          midrange: 135       // -$5 from country average
        },
        food: {
          restaurantMeal: 24, // -$1 from country average
          coffee: 3.40        // -$0.10 from country average
        }
      },
      tips: [
        "Wine capital of the world",
        "Historic center is premium and UNESCO-listed",
        "Bastide area across river is emerging and more affordable",
        "Excellent public bike system (VCub)"
      ]
    }
  }
};