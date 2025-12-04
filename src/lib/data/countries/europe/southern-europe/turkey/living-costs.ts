// src/lib/data/countries/europe/southern-europe/turkey/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const turkeyLivingCosts: LivingCostData = {
  country: "Turkey",
  currency: "TRY",
  lastUpdated: "2024-01-15",
  
  // Country-level averages (in Turkish Lira)
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 200,
        budgetHotel: 400,
        guesthouse: 300
      },
      midrange: {
        hotel: 1000,
        apartment: 800,
        boutiqueHotel: 1500
      },
      luxury: {
        hotel: 3000,
        resort: 5000,
        villa: 8000
      },
      monthlyRent: {
        studio: 5000,
        oneBedroom: 8000,
        threeBedroom: 15000
      }
    },
    dailyLiving: {
      budget: 300,
      midrange: 800,
      luxury: 2000,
      breakdown: {
        food: 150,
        transport: 50,
        activities: 80,
        misc: 20
      }
    },
    transportation: {
      localBus: 10,
      taxi: 30,
      intercityBus: 200,
      train: 400
    },
    food: {
      streetFood: 50,
      restaurantMeal: 200,
      groceryWeekly: 500
    }
  },
  
  tips: [
    "Try Turkish breakfast - it's a feast and great value",
    "Use Istanbulkart for public transportation in Istanbul",
    "Bargain at bazaars but be respectful - start at 50% of asking price",
    "Visit hamams (Turkish baths) for authentic cultural experience",
    "Try Turkish tea and coffee everywhere - they're social rituals",
    "Carry some cash for small purchases and local markets",
    "Visit both European and Asian sides of Istanbul for different experiences",
    "Try local desserts like baklava and Turkish delight",
    "Visit during shoulder seasons (April-May, September-October) for best weather",
    "Learn basic Turkish phrases - merhaba (hello), teşekkür ederim (thank you)"
  ],
  
  bestAreas: {
    budget: [
      "Sultanahmet, Istanbul",
      "Lara, Antalya", 
      "Goreme, Cappadocia",
      "Konak, Izmir",
      "Selçuk, Ephesus"
    ],
    midrange: [
      "Beyoglu, Istanbul",
      "Kaleici, Antalya",
      "Urgup, Cappadocia",
      "Cesme, Izmir",
      "Alacati, Izmir"
    ],
    luxury: [
      "Bebek, Istanbul",
      "Konyaalti, Antalya",
      "Cave hotels in Cappadocia",
      "Bodrum Peninsula",
      "Ulus, Istanbul"
    ]
  },
  
  // City-specific data
  cities: {
    "Istanbul": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 250,       // +50 from country average
            budgetHotel: 500,  // +100 from country average
            guesthouse: 400    // +100 from country average
          },
          midrange: {
            hotel: 1200,       // +200 from country average
            apartment: 1000,   // +200 from country average
            boutiqueHotel: 1800 // +300 from country average
          },
          luxury: {
            hotel: 3500,       // +500 from country average
            resort: 5500       // +500 from country average
          },
          monthlyRent: {
            studio: 6000,      // +1000 from country average
            oneBedroom: 10000, // +2000 from country average
            threeBedroom: 20000 // +5000 from country average
          }
        },
        dailyLiving: {
          budget: 350,         // +50 from country average
          midrange: 900,       // +100 from country average
          luxury: 2200         // +200 from country average
        },
        transportation: {
          localBus: 15,        // +5 from country average
          taxi: 40             // +10 from country average
        },
        food: {
          streetFood: 60,      // +10 from country average
          restaurantMeal: 250, // +50 from country average
          groceryWeekly: 600   // +100 from country average
        }
      },
      tips: [
        "Visit Hagia Sophia and Blue Mosque early to avoid crowds",
        "Take a Bosphorus cruise for great views of both continents",
        "Explore Grand Bazaar and Spice Bazaar - but bargain hard",
        "Try balık ekmek (fish sandwich) from Eminönü boats",
        "Use public ferries for cheapest Bosphorus crossing",
        "Visit Chora Church for amazing Byzantine mosaics"
      ]
    },
    
    "Antalya": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 180,       // -20 from country average
            budgetHotel: 350,  // -50 from country average
            guesthouse: 280    // -20 from country average
          },
          midrange: {
            hotel: 900,        // -100 from country average
            apartment: 700,    // -100 from country average
            boutiqueHotel: 1300 // -200 from country average
          },
          luxury: {
            hotel: 2800,       // -200 from country average
            resort: 4800,      // -200 from country average
            villa: 7500        // -500 from country average
          },
          monthlyRent: {
            studio: 4500,      // -500 from country average
            oneBedroom: 7000,  // -1000 from country average
            threeBedroom: 13000 // -2000 from country average
          }
        },
        dailyLiving: {
          budget: 280,         // -20 from country average
          midrange: 750,       // -50 from country average
          luxury: 1800         // -200 from country average
        },
        transportation: {
          localBus: 9,         // -1 from country average
          taxi: 28             // -2 from country average
        },
        food: {
          streetFood: 45,      // -5 from country average
          restaurantMeal: 180, // -20 from country average
          groceryWeekly: 450   // -50 from country average
        }
      },
      tips: [
        "Visit Kaleiçi (Old Town) for preserved Ottoman houses",
        "See the Düden Waterfalls inside the city",
        "Take day trips to ancient cities like Perge and Aspendos",
        "Try local pomegranate products - Antalya is famous for them",
        "Visit during spring for perfect beach weather without extreme heat",
        "Explore the Antalya Museum - one of Turkey's best"
      ]
    },
    
    "Cappadocia (Göreme)": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 150,       // -50 from country average
            guesthouse: 250    // -50 from country average
          },
          midrange: {
            hotel: 850,        // -150 from country average
            boutiqueHotel: 1200 // -300 from country average
          },
          luxury: {
            hotel: 3500,       // +500 from country average (cave hotel premium)
            resort: 4500       // -500 from country average
          },
          monthlyRent: {
            studio: 4000,      // -1000 from country average
            oneBedroom: 6500,  // -1500 from country average
            threeBedroom: 12000 // -3000 from country average
          }
        },
        dailyLiving: {
          budget: 250,         // -50 from country average
          midrange: 700,       // -100 from country average
          luxury: 2200         // +200 from country average (tourist area)
        },
        food: {
          streetFood: 40,      // -10 from country average
          restaurantMeal: 180, // -20 from country average
          groceryWeekly: 400   // -100 from country average
        }
      },
      tips: [
        "Book hot air balloon ride in advance - weather dependent",
        "Visit Open Air Museum early to avoid tour groups",
        "Stay in a cave hotel for unique experience",
        "Explore underground cities like Derinkuyu or Kaymakli",
        "Hike through Rose Valley or Love Valley",
        "Try testi kebab (pottery kebab) - local specialty"
      ]
    },
    
    "Izmir": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 180,       // -20 from country average
            budgetHotel: 380,  // -20 from country average
            guesthouse: 290    // -10 from country average
          },
          midrange: {
            hotel: 950,        // -50 from country average
            apartment: 750,    // -50 from country average
            boutiqueHotel: 1400 // -100 from country average
          },
          luxury: {
            hotel: 2800        // -200 from country average
          },
          monthlyRent: {
            studio: 4800,      // -200 from country average
            oneBedroom: 7500,  // -500 from country average
            threeBedroom: 14000 // -1000 from country average
          }
        },
        dailyLiving: {
          budget: 280,         // -20 from country average
          midrange: 780,       // -20 from country average
          luxury: 1900         // -100 from country average
        },
        transportation: {
          localBus: 9,         // -1 from country average
          taxi: 28             // -2 from country average
        },
        food: {
          streetFood: 48,      // -2 from country average
          restaurantMeal: 190, // -10 from country average
          groceryWeekly: 480   // -20 from country average
        }
      },
      tips: [
        "Walk along the Kordon waterfront promenade",
        "Visit Ancient Agora of Smyrna",
        "Take ferry to Karşıyaka for local experience",
        "Try boyoz (local pastry) for breakfast",
        "Visit Kemeraltı Bazaar for shopping",
        "Take day trip to Ephesus (1.5 hours away)"
      ]
    },
    
    "Bodrum": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 220,       // +20 from country average
            budgetHotel: 450,  // +50 from country average
            guesthouse: 350    // +50 from country average
          },
          midrange: {
            hotel: 1200,       // +200 from country average
            apartment: 900,    // +100 from country average
            boutiqueHotel: 2000 // +500 from country average
          },
          luxury: {
            hotel: 4000,       // +1000 from country average
            resort: 6000,      // +1000 from country average
            villa: 10000       // +2000 from country average
          },
          monthlyRent: {
            studio: 6000,      // +1000 from country average
            oneBedroom: 10000, // +2000 from country average
            threeBedroom: 20000 // +5000 from country average
          }
        },
        dailyLiving: {
          budget: 350,         // +50 from country average
          midrange: 1000,      // +200 from country average
          luxury: 2500         // +500 from country average
        },
        transportation: {
          localBus: 12,        // +2 from country average
          taxi: 35             // +5 from country average
        },
        food: {
          streetFood: 60,      // +10 from country average
          restaurantMeal: 250, // +50 from country average
          groceryWeekly: 600   // +100 from country average
        }
      },
      tips: [
        "Visit Bodrum Castle and Underwater Archaeology Museum",
        "Take boat trip to nearby coves and beaches",
        "Explore the Old Town (white-washed houses)",
        "Visit during weekdays to avoid weekend crowds",
        "Try fresh seafood at the harbor restaurants",
        "Visit ancient Mausoleum at Halicarnassus ruins"
      ]
    },
    
    "Ankara": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 150,       // -50 from country average
            budgetHotel: 350,  // -50 from country average
            guesthouse: 250    // -50 from country average
          },
          midrange: {
            hotel: 850,        // -150 from country average
            apartment: 700,    // -100 from country average
            boutiqueHotel: 1200 // -300 from country average
          },
          luxury: {
            hotel: 2500        // -500 from country average
          },
          monthlyRent: {
            studio: 4000,      // -1000 from country average
            oneBedroom: 6500,  // -1500 from country average
            threeBedroom: 12000 // -3000 from country average
          }
        },
        dailyLiving: {
          budget: 250,         // -50 from country average
          midrange: 700,       // -100 from country average
          luxury: 1800         // -200 from country average
        },
        transportation: {
          localBus: 8,         // -2 from country average
          taxi: 25             // -5 from country average
        },
        food: {
          streetFood: 40,      // -10 from country average
          restaurantMeal: 180, // -20 from country average
          groceryWeekly: 450   // -50 from country average
        }
      },
      tips: [
        "Visit Anıtkabir (Atatürk's mausoleum) - allow 2-3 hours",
        "Explore Museum of Anatolian Civilizations - world-class collection",
        "Visit Ankara Castle for panoramic city views",
        "Try Ankara tavası (local meat dish)",
        "Shop at traditional copper markets",
        "Visit during spring or autumn for best weather"
      ]
    },
    
    "Pamukkale": {
      baseCosts: {
        accommodation: {
          budget: {
            guesthouse: 250    // -50 from country average
          },
          midrange: {
            hotel: 800,        // -200 from country average
            boutiqueHotel: 1100 // -400 from country average
          },
          luxury: {
            resort: 3500       // -1500 from country average
          }
        },
        dailyLiving: {
          budget: 250,         // -50 from country average
          midrange: 600,       // -200 from country average
          luxury: 1500         // -500 from country average
        },
        food: {
          restaurantMeal: 150, // -50 from country average
          groceryWeekly: 350   // -150 from country average
        }
      },
      tips: [
        "Visit travertines early morning or late afternoon for best light",
        "Wear water shoes for walking on the travertines",
        "Combine with visit to Hierapolis ancient city",
        "Swim in Cleopatra's Pool (extra fee)",
        "Stay overnight to see sunset/sunrise without crowds",
        "Bring swimsuit and towel"
      ]
    }
  }
};