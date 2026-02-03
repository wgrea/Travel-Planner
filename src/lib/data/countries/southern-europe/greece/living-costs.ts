// src/lib/data/countries/europe/southern-europe/greece/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const greeceLivingCosts: LivingCostData = {
  country: "Greece",
  currency: "EUR",
  lastUpdated: "2024-01-15",
  
  // Country-level averages
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 20,
        budgetHotel: 40,
        guesthouse: 35
      },
      midrange: {
        hotel: 80,
        apartment: 65,
        boutiqueHotel: 120
      },
      luxury: {
        hotel: 200,
        resort: 300,
        villa: 500
      },
      monthlyRent: {
        studio: 350,
        oneBedroom: 500,
        threeBedroom: 800
      }
    },
    dailyLiving: {
      budget: 35,
      midrange: 70,
      luxury: 150,
      breakdown: {
        food: 20,
        transport: 5,
        activities: 8,
        misc: 2
      }
    },
    transportation: {
      localBus: 1.4,
      taxi: 6,
      intercityBus: 20,
      train: 30
    },
    food: {
      streetFood: 5,
      restaurantMeal: 25,
      groceryWeekly: 80
    }
  },
  
  tips: [
    "Try traditional Greek dishes like moussaka, souvlaki, and Greek salad",
    "Visit during shoulder seasons (May-June, September-October) for best weather and prices",
    "Use local ferries to explore the islands - book in advance during peak season",
    "Learn basic Greek phrases - locals appreciate the effort",
    "Enjoy frappé coffee - it's a Greek invention",
    "Visit both ancient ruins and beautiful beaches",
    "Try ouzo with meze (small dishes)",
    "Shop at local farmers' markets for fresh produce",
    "Take advantage of free museum days (first Sunday of month, Nov-Mar)",
    "Use KTEL buses for intercity travel - they're reliable and affordable"
  ],
  
  bestAreas: {
    budget: [
      "Monastiraki, Athens",
      "Old Town, Thessaloniki", 
      "Chania Old Town, Crete",
      "Fira, Santorini (off-season)"
    ],
    midrange: [
      "Kolonaki, Athens",
      "Kastra, Thessaloniki",
      "Rethymno, Crete",
      "Mykonos Town (shoulder season)"
    ],
    luxury: [
      "Glyfada, Athens",
      "Vouliagmeni, Athens",
      "Oia, Santorini",
      "Mykonos luxury resorts"
    ]
  },
  
  // City-specific data
  cities: {
    "Athens": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 25,       // +5 from country average
            budgetHotel: 50,  // +10 from country average
            guesthouse: 45    // +10 from country average
          },
          midrange: {
            hotel: 100,       // +20 from country average
            apartment: 85,    // +20 from country average
            boutiqueHotel: 150 // +30 from country average
          },
          luxury: {
            hotel: 250,       // +50 from country average
            resort: 350       // +50 from country average
          },
          monthlyRent: {
            studio: 450,      // +100 from country average
            oneBedroom: 650,  // +150 from country average
            threeBedroom: 1000 // +200 from country average
          }
        },
        dailyLiving: {
          budget: 40,         // +5 from country average
          midrange: 85,       // +15 from country average
          luxury: 180         // +30 from country average
        },
        transportation: {
          localBus: 1.4,      // same as country average
          taxi: 8             // +2 from country average
        },
        food: {
          streetFood: 6,      // +1 from country average
          restaurantMeal: 30, // +5 from country average
          groceryWeekly: 90   // +10 from country average
        }
      },
      tips: [
        "Visit the Acropolis early morning to avoid crowds and heat",
        "Buy combination ticket for multiple archaeological sites",
        "Explore Plaka neighborhood for traditional atmosphere",
        "Try souvlaki from Monastiraki street vendors",
        "Take the funicular to Lycabettus Hill for sunset views",
        "Visit the Acropolis Museum - it's world-class"
      ]
    },
    
    "Santorini": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 30,       // +10 from country average (peak season)
            budgetHotel: 70,  // +30 from country average
            guesthouse: 60    // +25 from country average
          },
          midrange: {
            hotel: 150,       // +70 from country average
            apartment: 120,   // +55 from country average
            boutiqueHotel: 250 // +130 from country average
          },
          luxury: {
            hotel: 400,       // +200 from country average
            resort: 600,      // +300 from country average
            villa: 800        // +300 from country average
          },
          monthlyRent: {
            studio: 800,      // +450 from country average (short-term only)
            oneBedroom: 1200, // +700 from country average
            threeBedroom: 2000 // +1200 from country average
          }
        },
        dailyLiving: {
          budget: 50,         // +15 from country average
          midrange: 120,      // +50 from country average
          luxury: 250         // +100 from country average
        },
        transportation: {
          localBus: 2.5,      // +1.1 from country average
          taxi: 15            // +9 from country average
        },
        food: {
          streetFood: 8,      // +3 from country average
          restaurantMeal: 45, // +20 from country average
          groceryWeekly: 120  // +40 from country average
        }
      },
      tips: [
        "Watch sunset from Oia - arrive 2 hours early for good spot",
        "Visit during shoulder season (May or October) for better prices",
        "Explore less crowded villages like Pyrgos or Megalochori",
        "Take a catamaran cruise to see the caldera from water",
        "Visit ancient Akrotiri - the Minoan Pompeii",
        "Try local wines - Santorini has unique vineyards"
      ]
    },
    
    "Mykonos": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 35,       // +15 from country average
            budgetHotel: 80,  // +40 from country average
            guesthouse: 70    // +35 from country average
          },
          midrange: {
            hotel: 180,       // +100 from country average
            apartment: 150,   // +85 from country average
            boutiqueHotel: 300 // +180 from country average
          },
          luxury: {
            hotel: 500,       // +300 from country average
            resort: 700,      // +400 from country average
            villa: 1000       // +500 from country average
          },
          monthlyRent: {
            studio: 1000,     // +650 from country average
            oneBedroom: 1500, // +1000 from country average
            threeBedroom: 2500 // +1700 from country average
          }
        },
        dailyLiving: {
          budget: 60,         // +25 from country average
          midrange: 150,      // +80 from country average
          luxury: 300         // +150 from country average
        },
        transportation: {
          localBus: 3,        // +1.6 from country average
          taxi: 20            // +14 from country average
        },
        food: {
          streetFood: 10,     // +5 from country average
          restaurantMeal: 50, // +25 from country average
          groceryWeekly: 150  // +70 from country average
        }
      },
      tips: [
        "Visit Paradise and Super Paradise beaches for party scene",
        "Explore Little Venice for sunset cocktails",
        "See the iconic windmills in Mykonos Town",
        "Visit Delos island for ancient ruins (day trip)",
        "Try local kopanisti cheese",
        "Book clubs and restaurants well in advance during peak season"
      ]
    },
    
    "Crete (Heraklion)": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 18,       // -2 from country average
            budgetHotel: 35,  // -5 from country average
            guesthouse: 30    // -5 from country average
          },
          midrange: {
            hotel: 70,        // -10 from country average
            apartment: 55,    // -10 from country average
            boutiqueHotel: 100 // -20 from country average
          },
          luxury: {
            hotel: 180        // -20 from country average
          },
          monthlyRent: {
            studio: 300,      // -50 from country average
            oneBedroom: 450,  // -50 from country average
            threeBedroom: 700 // -100 from country average
          }
        },
        dailyLiving: {
          budget: 30,         // -5 from country average
          midrange: 60,       // -10 from country average
          luxury: 130         // -20 from country average
        },
        transportation: {
          localBus: 1.2,      // -0.2 from country average
          taxi: 5             // -1 from country average
        },
        food: {
          streetFood: 4,      // -1 from country average
          restaurantMeal: 22, // -3 from country average
          groceryWeekly: 70   // -10 from country average
        }
      },
      tips: [
        "Visit Knossos Palace - center of Minoan civilization",
        "Try dakos (Cretan rusk salad) and graviera cheese",
        "Explore the Venetian harbor and fortress",
        "Take day trips to Samaria Gorge or Elafonisi beach",
        "Try raki (local spirit) with meze",
        "Visit Archaeological Museum - one of Greece's best"
      ]
    },
    
    "Thessaloniki": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 18,       // -2 from country average
            budgetHotel: 38,  // -2 from country average
            guesthouse: 32    // -3 from country average
          },
          midrange: {
            hotel: 75,        // -5 from country average
            apartment: 60,    // -5 from country average
            boutiqueHotel: 110 // -10 from country average
          },
          luxury: {
            hotel: 190        // -10 from country average
          },
          monthlyRent: {
            studio: 320,      // -30 from country average
            oneBedroom: 480,  // -20 from country average
            threeBedroom: 750 // -50 from country average
          }
        },
        dailyLiving: {
          budget: 32,         // -3 from country average
          midrange: 65,       // -5 from country average
          luxury: 140         // -10 from country average
        },
        transportation: {
          localBus: 1.3,      // -0.1 from country average
          taxi: 6             // same as country average
        },
        food: {
          streetFood: 5,      // same as country average
          restaurantMeal: 24, // -1 from country average
          groceryWeekly: 75   // -5 from country average
        }
      },
      tips: [
        "Visit the White Tower - symbol of Thessaloniki",
        "Try bougatsa (custard pie) for breakfast",
        "Explore the Byzantine walls and Rotunda",
        "Walk along the waterfront promenade",
        "Visit during the Thessaloniki International Film Festival",
        "Try local tsipouro with seafood"
      ]
    },
    
    "Rhodes": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 22,       // +2 from country average
            budgetHotel: 45,  // +5 from country average
            guesthouse: 40    // +5 from country average
          },
          midrange: {
            hotel: 90,        // +10 from country average
            apartment: 70,    // +5 from country average
            boutiqueHotel: 140 // +20 from country average
          },
          luxury: {
            hotel: 220,       // +20 from country average
            resort: 350       // +50 from country average
          },
          monthlyRent: {
            studio: 400,      // +50 from country average
            oneBedroom: 550,  // +50 from country average
            threeBedroom: 850 // +50 from country average
          }
        },
        dailyLiving: {
          budget: 38,         // +3 from country average
          midrange: 80,       // +10 from country average
          luxury: 170         // +20 from country average
        },
        transportation: {
          localBus: 1.5,      // +0.1 from country average
          taxi: 8             // +2 from country average
        },
        food: {
          streetFood: 6,      // +1 from country average
          restaurantMeal: 28, // +3 from country average
          groceryWeekly: 85   // +5 from country average
        }
      },
      tips: [
        "Explore the Medieval Old Town - UNESCO World Heritage",
        "Visit Palace of the Grand Master",
        "Take a day trip to Lindos and its acropolis",
        "Try melekouni (honey sesame bars) - local specialty",
        "Visit the Valley of Butterflies in summer",
        "Explore ancient Kamiros ruins"
      ]
    }
  }
};