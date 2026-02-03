// /src/lib/data/countries/europe/caucasus/georgia/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const georgiaLivingCosts: LivingCostData = {
  country: "Georgia",
  currency: "GEL",
  lastUpdated: "2024-01-15",
  
  // Country-level averages
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 25,
        budgetHotel: 50,
        guesthouse: 40
      },
      midrange: {
        hotel: 100,
        apartment: 80,
        boutiqueHotel: 150
      },
      luxury: {
        hotel: 250,
        resort: 350,
        villa: 600
      },
      monthlyRent: {
        studio: 300,
        oneBedroom: 450,
        threeBedroom: 800
      }
    },
    dailyLiving: {
      budget: 35,
      midrange: 80,
      luxury: 200,
      breakdown: {
        food: 15,
        transport: 5,
        activities: 10,
        misc: 5
      }
    },
    transportation: {
      localBus: 0.5,
      taxi: 5,
      intercityBus: 15,
      train: 25
    },
    food: {
      streetFood: 3,
      restaurantMeal: 20,
      groceryWeekly: 70
    }
  },
  
  tips: [
    "Try khinkali (dumplings) and khachapuri (cheese bread) - national dishes",
    "Visit ancient churches and monasteries for stunning architecture",
    "Use Bolt or Yandex Taxi apps for reliable taxi service",
    "Georgian wine is world-class - visit local vineyards",
    "Learn basic Georgian phrases - locals appreciate it",
    "Visit during September-October for wine season and pleasant weather",
    "Always toast properly during supras (feasts)",
    "Explore both the mountains and the Black Sea coast"
  ],
  
  bestAreas: {
    budget: [
      "Old Town, Tbilisi",
      "Kutaisi city center", 
      "Batumi near the boulevard",
      "Sighnaghi guesthouses"
    ],
    midrange: [
      "Vake, Tbilisi",
      "Batumi seaside hotels",
      "Mtskheta historic area",
      "Kazbegi mountain hotels"
    ],
    luxury: [
      "Mtatsminda, Tbilisi",
      "Batumi luxury resorts",
      "Gudauri ski resorts",
      "Sighnaghi boutique hotels"
    ]
  },
  
  // City-specific data
  cities: {
    "Tbilisi": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 30,       // +5 from country average
            budgetHotel: 60,  // +10 from country average
            guesthouse: 50    // +10 from country average
          },
          midrange: {
            hotel: 120,       // +20 from country average
            apartment: 100,   // +20 from country average
            boutiqueHotel: 180 // +30 from country average
          },
          luxury: {
            hotel: 300,       // +50 from country average
            resort: 400       // +50 from country average
          },
          monthlyRent: {
            studio: 350,      // +50 from country average
            oneBedroom: 550,  // +100 from country average
            threeBedroom: 1000 // +200 from country average
          }
        },
        dailyLiving: {
          budget: 40,         // +5 from country average
          midrange: 100,      // +20 from country average
          luxury: 250         // +50 from country average
        },
        transportation: {
          localBus: 0.5,      // same as country average
          taxi: 6             // +1 from country average
        },
        food: {
          streetFood: 4,      // +1 from country average
          restaurantMeal: 25, // +5 from country average
          groceryWeekly: 80   // +10 from country average
        }
      },
      tips: [
        "Take the cable car to Narikala Fortress for amazing views",
        "Visit the sulfur baths in Abanotubani district",
        "Explore the Dry Bridge Market for Soviet memorabilia",
        "Try churchkhela (candle-shaped candy) from local vendors",
        "Walk through the historic Old Town's narrow streets"
      ]
    },
    
    "Batumi": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 20,       // -5 from country average
            budgetHotel: 45,  // -5 from country average
            guesthouse: 35    // -5 from country average
          },
          midrange: {
            hotel: 90,        // -10 from country average
            apartment: 70,    // -10 from country average
            boutiqueHotel: 130 // -20 from country average
          },
          luxury: {
            hotel: 300,       // +50 from country average (seaside premium)
            resort: 400       // +50 from country average
          },
          monthlyRent: {
            studio: 250,      // -50 from country average
            oneBedroom: 400,  // -50 from country average
            threeBedroom: 700 // -100 from country average
          }
        },
        dailyLiving: {
          budget: 30,         // -5 from country average
          midrange: 70,       // -10 from country average
          luxury: 220         // +20 from country average
        },
        transportation: {
          localBus: 0.4,      // -0.1 from country average
          taxi: 5             // same as country average
        },
        food: {
          streetFood: 3,      // same as country average
          restaurantMeal: 22, // +2 from country average
          groceryWeekly: 65   // -5 from country average
        }
      },
      tips: [
        "Walk along the Batumi Boulevard - 7km along the Black Sea",
        "See the moving Ali and Nino statue at night",
        "Visit the Botanical Garden with plants from around the world",
        "Try Adjarian khachapuri (boat-shaped with egg)",
        "Take the Argo cable car for panoramic views"
      ]
    },
    
    "Kutaisi": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 15,       // -10 from country average
            budgetHotel: 40,  // -10 from country average
            guesthouse: 30    // -10 from country average
          },
          midrange: {
            hotel: 70,        // -30 from country average
            apartment: 60,    // -20 from country average
            boutiqueHotel: 100 // -50 from country average
          },
          luxury: {
            hotel: 180        // -70 from country average
          },
          monthlyRent: {
            studio: 200,      // -100 from country average
            oneBedroom: 300,  // -150 from country average
            threeBedroom: 500 // -300 from country average
          }
        },
        dailyLiving: {
          budget: 25,         // -10 from country average
          midrange: 60,       // -20 from country average
          luxury: 150         // -50 from country average
        },
        transportation: {
          localBus: 0.3,      // -0.2 from country average
          taxi: 4             // -1 from country average
        },
        food: {
          streetFood: 2,      // -1 from country average
          restaurantMeal: 15, // -5 from country average
          groceryWeekly: 50   // -20 from country average
        }
      },
      tips: [
        "Visit Gelati Monastery - UNESCO World Heritage site",
        "See Bagrati Cathedral overlooking the city",
        "Explore Prometheus Cave with boat ride",
        "Try local Imeretian cuisine (more herbs)",
        "Use Kutaisi as base for exploring Western Georgia"
      ]
    },
    
    "Kazbegi (Stepantsminda)": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 20,       // -5 from country average
            guesthouse: 35    // -5 from country average
          },
          midrange: {
            hotel: 90,        // -10 from country average
            boutiqueHotel: 140 // -10 from country average
          },
          luxury: {
            hotel: 280        // +30 from country average (mountain premium)
          }
        },
        dailyLiving: {
          budget: 30,         // -5 from country average
          midrange: 85,       // +5 from country average (tourist area)
          luxury: 220         // +20 from country average
        },
        food: {
          streetFood: 4,      // +1 from country average
          restaurantMeal: 25, // +5 from country average
          groceryWeekly: 80   // +10 from country average
        }
      },
      tips: [
        "Hike to Gergeti Trinity Church for iconic views",
        "Visit in June-September for best hiking weather",
        "Take a 4x4 taxi to Gergeti Glacier",
        "Try local mountain cheese and khinkali",
        "Stay in a guesthouse for authentic experience"
      ]
    },
    
    "Sighnaghi": {
      baseCosts: {
        accommodation: {
          budget: {
            guesthouse: 35    // -5 from country average
          },
          midrange: {
            boutiqueHotel: 120 // -30 from country average
          },
          luxury: {
            hotel: 200        // -50 from country average
          }
        },
        dailyLiving: {
          budget: 30,         // -5 from country average
          midrange: 75,       // -5 from country average
          luxury: 180         // -20 from country average
        },
        food: {
          restaurantMeal: 18, // -2 from country average
          groceryWeekly: 60   // -10 from country average
        }
      },
      tips: [
        "Walk along the city walls for great views",
        "Visit local wineries and taste Georgian wine",
        "Explore the Bodbe Monastery complex",
        "Try local Kakhetian cuisine (more meat dishes)",
        "Visit in autumn for grape harvest festivals"
      ]
    }
  }
};