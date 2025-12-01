// src/lib/data/countries/south-america/brazil/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const brazilLivingCosts: LivingCostData = {
  country: "Brazil",
  countryCode: "Brazil",
  currency: "BRL", 
  lastUpdated: "2024-01-15",
  
  // Country-level AVERAGES (full data)
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 60, // ~$12 USD
        budgetHotel: 120, // ~$24 USD
        guesthouse: 90 // ~$18 USD
      },
      midrange: {
        hotel: 250, // ~$50 USD
        apartment: 200, // ~$40 USD
        boutiqueHotel: 350 // ~$70 USD
      },
      luxury: {
        hotel: 600, // ~$120 USD
        resort: 800, // ~$160 USD
        villa: 1200 // ~$240 USD
      },
      monthlyRent: {
        studio: 1800, // ~$360 USD
        oneBedroom: 2500, // ~$500 USD
        threeBedroom: 4500 // ~$900 USD
      }
    },
    dailyLiving: {
      budget: 100, // ~$20 USD
      midrange: 200, // ~$40 USD
      luxury: 450, // ~$90 USD
      breakdown: {
        food: 50,
        transport: 25,
        activities: 20,
        misc: 5
      }
    },
    transportation: {
      localBus: 4.5, // ~$0.90 USD
      taxi: 25, // ~$5 USD
      intercityBus: 100, // ~$20 USD
      train: 150 // ~$30 USD
    },
    food: {
      streetFood: 10, // ~$2 USD
      restaurantMeal: 40, // ~$8 USD
      groceryWeekly: 200 // ~$40 USD
    }
  },
  
  tips: [
    "Eat at local 'lanchonetes' for affordable meals",
    "Use Uber instead of taxis for better prices and safety",
    "Learn basic Portuguese phrases for better prices",
    "Avoid tourist areas for shopping and dining"
  ],
  
  bestAreas: {
    budget: ["Santa Teresa (Rio)", "Vila Madalena (São Paulo)", "Praia Central (Florianópolis)"],
    midrange: ["Ipanema (Rio)", "Jardins (São Paulo)", "Jurerê (Florianópolis)"],
    luxury: ["Leblon (Rio)", "Moema (São Paulo)", "Campeche (Florianópolis)"]
  },
  
  // City-specific data - ONLY what's DIFFERENT
  cities: {
    "Rio de Janeiro": {
      baseCosts: {
        accommodation: {
          budget: { 
            hostel: 70,      // +10 from country average
            budgetHotel: 150  // +30 from country average
          },
          midrange: {
            hotel: 300,      // +50 from country average
            apartment: 250   // +50 from country average
          },
          luxury: {
            hotel: 700,     // +100 from country average
            resort: 900     // +100 from country average
          },
          monthlyRent: {
            studio: 2000,    // +200 from country average
            oneBedroom: 2800 // +300 from country average
          }
        },
        dailyLiving: {
          budget: 120,        // +20 from country average
          midrange: 230,      // +30 from country average
          luxury: 500         // +50 from country average
        },
        food: {
          restaurantMeal: 50  // +10 from country average
        }
      },
      tips: [
        "Stay in Zona Sul (Ipanema, Copacabana, Leblon) for safety and amenities",
        "Use metro for getting around - safe and efficient",
        "Avoid flashy jewelry and expensive cameras in public",
        "Buy from beach vendors for cheaper snacks and drinks"
      ]
    },

    "São Paulo": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 65,      // +5 from country average
            budgetHotel: 130  // +10 from country average
          },
          midrange: {
            hotel: 280,      // +30 from country average
            apartment: 230   // +30 from country average  
          },
          monthlyRent: {
            studio: 1900,    // +100 from country average
            oneBedroom: 2600 // +100 from country average
          }
        },
        dailyLiving: {
          budget: 110,        // +10 from country average
          midrange: 220,      // +20 from country average
          luxury: 480         // +30 from country average
        },
        transportation: {
          taxi: 30,          // +5 from country average
          localBus: 5        // +0.5 from country average
        }
      },
      tips: [
        "Use metro system extensively - São Paulo has extensive coverage",
        "Stay in neighborhoods like Vila Madalena, Pinheiros, or Jardins",
        "Food markets like Mercado Municipal offer great local food",
        "Traffic is terrible - avoid traveling during rush hours"
      ]
    },

    "Florianópolis": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 55,      // -5 from country average
            budgetHotel: 110  // -10 from country average
          },
          midrange: {
            hotel: 220,      // -30 from country average
            apartment: 180   // -20 from country average
          },
          monthlyRent: {
            studio: 1600,    // -200 from country average
            oneBedroom: 2200 // -300 from country average
          }
        },
        dailyLiving: {
          budget: 90,        // -10 from country average
          midrange: 180,      // -20 from country average
          luxury: 400         // -50 from country average
        },
        food: {
          restaurantMeal: 35 // -5 from country average
        }
      },
      tips: [
        "Best for digital nomads - good internet and community",
        "Rent a car or scooter to explore different beaches",
        "Stay in Lagoa da Conceição area for amenities",
        "Visit during summer (Dec-Mar) for best weather"
      ]
    },

    "Salvador": {
      baseCosts: {
        accommodation: {
          budget: {
            budgetHotel: 100  // -20 from country average
          },
          midrange: {
            apartment: 170   // -30 from country average
          },
          monthlyRent: {
            studio: 1500,    // -300 from country average
            oneBedroom: 2000 // -500 from country average
          }
        },
        dailyLiving: {
          budget: 85,        // -15 from country average
          midrange: 170       // -30 from country average
        }
      },
      tips: [
        "Stay in Barra or Rio Vermelho neighborhoods",
        "Experience Afro-Brazilian culture and cuisine",
        "Be extra careful with belongings in crowded areas",
        "Visit Pelourinho historic center during the day"
      ]
    }
  }
};