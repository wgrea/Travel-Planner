// /src/lib/data/countries/europe/caucasus/azerbaijan/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const azerbaijanLivingCosts: LivingCostData = {
  country: "Azerbaijan",
  countryCode: "Azerbaijan", 
  currency: "AZN",
  lastUpdated: "2024-01-15",
  
  // Country-level averages
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 30,
        budgetHotel: 60,
        guesthouse: 45
      },
      midrange: {
        hotel: 120,
        apartment: 100,
        boutiqueHotel: 180
      },
      luxury: {
        hotel: 300,
        resort: 450,
        villa: 700
      },
      monthlyRent: {
        studio: 400,
        oneBedroom: 600,
        threeBedroom: 1000
      }
    },
    dailyLiving: {
      budget: 40,
      midrange: 100,
      luxury: 250,
      breakdown: {
        food: 20,
        transport: 8,
        activities: 10,
        misc: 2
      }
    },
    transportation: {
      localBus: 0.3,
      taxi: 5,
      intercityBus: 10,
      train: 20
    },
    food: {
      streetFood: 5,
      restaurantMeal: 25,
      groceryWeekly: 80
    }
  },
  
  tips: [
    "Try plov (rice dish) and kebabs - they're national specialties",
    "Visit the Flame Towers in Baku for amazing city views",
    "Use Bolt app for reliable taxi service",
    "Carry cash as credit cards aren't widely accepted outside Baku",
    "Learn basic Azerbaijani or Russian phrases",
    "Visit during spring (April-May) for pleasant weather",
    "Try local tea with jam - it's a traditional way to drink tea",
    "Explore both modern Baku and ancient regions like Sheki"
  ],
  
  bestAreas: {
    budget: [
      "Old City (Icherisheher), Baku",
      "Sheki Center", 
      "Ganja downtown",
      "Gabala budget hotels"
    ],
    midrange: [
      "Nasimi, Baku",
      "Gabala resorts",
      "Sheki historic area",
      "Lankaran coastal area"
    ],
    luxury: [
      "Khagani, Baku",
      "Flame Towers area, Baku",
      "Gabala luxury resorts",
      "Shamakhi mountain hotels"
    ]
  },
  
  // City-specific data
  cities: {
    "Baku": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 35,       // +5 from country average
            budgetHotel: 70,  // +10 from country average
            guesthouse: 50    // +5 from country average
          },
          midrange: {
            hotel: 150,       // +30 from country average
            apartment: 130,   // +30 from country average
            boutiqueHotel: 220 // +40 from country average
          },
          luxury: {
            hotel: 400,       // +100 from country average
            resort: 550       // +100 from country average
          },
          monthlyRent: {
            studio: 500,      // +100 from country average
            oneBedroom: 750,  // +150 from country average
            threeBedroom: 1300 // +300 from country average
          }
        },
        dailyLiving: {
          budget: 50,         // +10 from country average
          midrange: 130,      // +30 from country average
          luxury: 300         // +50 from country average
        },
        transportation: {
          localBus: 0.4,      // +0.1 from country average
          taxi: 6             // +1 from country average
        },
        food: {
          streetFood: 6,      // +1 from country average
          restaurantMeal: 30, // +5 from country average
          groceryWeekly: 100  // +20 from country average
        }
      },
      tips: [
        "Use BakuCard for public transport discounts",
        "Visit the Heydar Aliyev Center for architecture",
        "Walk along Baku Boulevard for Caspian Sea views",
        "Try fish dishes from the Caspian Sea",
        "Explore the modern architecture around Flame Towers"
      ]
    },
    
    "Sheki": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 20,       // -10 from country average
            guesthouse: 35    // -10 from country average
          },
          midrange: {
            hotel: 90,        // -30 from country average
            boutiqueHotel: 140 // -40 from country average
          },
          luxury: {
            hotel: 250        // -50 from country average
          }
        },
        dailyLiving: {
          budget: 30,         // -10 from country average
          midrange: 80,       // -20 from country average
          luxury: 200         // -50 from country average
        },
        food: {
          streetFood: 4,      // -1 from country average
          restaurantMeal: 20, // -5 from country average
          groceryWeekly: 70   // -10 from country average
        }
      },
      tips: [
        "Visit Sheki Khan's Palace - UNESCO World Heritage site",
        "Try Sheki halva - a local sweet specialty",
        "Explore the ancient caravanserai",
        "Visit during summer for best weather",
        "See traditional stained glass windows (shebeke)"
      ]
    },
    
    "Gabala": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 25,       // -5 from country average
            guesthouse: 40    // -5 from country average
          },
          midrange: {
            hotel: 110,       // -10 from country average
            boutiqueHotel: 170 // -10 from country average
          },
          luxury: {
            resort: 500       // +50 from country average
          }
        },
        dailyLiving: {
          budget: 35,         // -5 from country average
          midrange: 90,       // -10 from country average
          luxury: 280         // +30 from country average
        }
      },
      tips: [
        "Great for outdoor activities and skiing",
        "Visit Tufandag Mountain Resort",
        "Try local honey and dairy products",
        "Enjoy cable car rides with mountain views",
        "Good base for exploring the Caucasus Mountains"
      ]
    },
    
    "Ganja": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 25,       // -5 from country average
            budgetHotel: 55   // -5 from country average
          },
          midrange: {
            hotel: 100,       // -20 from country average
            apartment: 85     // -15 from country average
          }
        },
        dailyLiving: {
          budget: 35,         // -5 from country average
          midrange: 85,       // -15 from country average
        },
        transportation: {
          localBus: 0.25,     // -0.05 from country average
          taxi: 4             // -1 from country average
        }
      },
      tips: [
        "Visit Nizami Mausoleum - dedicated to the famous poet",
        "Explore Bottle House made of glass bottles",
        "See Javad Khan Street for historical architecture",
        "Try local Ganja cuisine and breads"
      ]
    }
  }
};