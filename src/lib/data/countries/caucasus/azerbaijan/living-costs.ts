// /src/lib/data/countries/caucasus/azerbaijan/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const azerbaijanLivingCosts: LivingCostData = {
  country: "Azerbaijan",
  currency: "AZN",
  lastUpdated: "2024-01-15",
  
  // Country-level averages
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 30,
        budgetHotel: 60,
        guesthouse: 45,
        coliving: 350  // Simple number for base price
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
  
  // NEW: Seasonal pricing
  seasonalPricing: {
    hostel: {
      low: 21,    // 30 * 0.7
      sweet: 26,  // 30 * 0.85  
      peak: 42    // 30 * 1.4
    },
    coliving: {
      low: 245,   // 350 * 0.7
      sweet: 298, // 350 * 0.85
      peak: 490   // 350 * 1.4
    },
    budgetHotel: {
      low: 42,    // 60 * 0.7
      sweet: 51,  // 60 * 0.85
      peak: 84    // 60 * 1.4
    },
    months: {
      low: ['Jan', 'Feb', 'Nov', 'Dec'],
      sweet: ['Mar', 'Apr', 'May', 'Sep', 'Oct'],
      peak: ['Jun', 'Jul', 'Aug']
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
    "Explore both modern Baku and ancient regions like Sheki",
    // Updated seasonal tips
    "Winter (low season): Prices drop 30% - great for extended stays",
    "Spring/Fall (sweet spot): Best balance of price, weather & availability",
    "Summer (peak): Book 3+ months ahead, expect 7-14 day max stays",
    "Coliving spaces offer best value for stays over 1 month"
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
    // Note: nomadFriendly removed to match interface
  },
  
  // City-specific data
  cities: {
    "Baku": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 35,
            budgetHotel: 70,
            guesthouse: 50,
            coliving: 500
          },
          midrange: {
            hotel: 150,
            apartment: 130,
            boutiqueHotel: 220
          },
          luxury: {
            hotel: 400,
            resort: 550
          },
          monthlyRent: {
            studio: 500,
            oneBedroom: 750,
            threeBedroom: 1300
          }
        },
        dailyLiving: {
          budget: 50,
          midrange: 130,
          luxury: 300
        },
        transportation: {
          localBus: 0.4,
          taxi: 6
        },
        food: {
          streetFood: 6,
          restaurantMeal: 30,
          groceryWeekly: 100
        }
      },
      // City-specific seasonal pricing
      seasonalPricing: {
        hostel: {
          low: 25,    // 35 * 0.7
          sweet: 30,  // 35 * 0.85
          peak: 50    // 35 * 1.4 + scarcity premium
        },
        coliving: {
          low: 350,   // 500 * 0.7
          sweet: 425, // 500 * 0.85
          peak: 700   // 500 * 1.4
        },
        note: "Peak season: Hostels limit stays to 7-14 days"
      },
      tips: [
        "Use BakuCard for public transport discounts",
        "Visit the Heydar Aliyev Center for architecture",
        "Walk along Baku Boulevard for Caspian Sea views",
        "Try fish dishes from the Caspian Sea",
        "Explore the modern architecture around Flame Towers",
        // Baku seasonal tips
        "Book hostels 3+ months ahead for summer visits",
        "Winter stays offer best value but check heating",
        "Fountain Square area most expensive in peak season",
        "Coliving spaces in Nasimi include coworking access"
      ]
    },
    
    "Sheki": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 20,
            guesthouse: 35,
            coliving: 250
          },
          midrange: {
            hotel: 90,
            boutiqueHotel: 140
          },
          luxury: {
            hotel: 250
          }
        },
        dailyLiving: {
          budget: 30,
          midrange: 80,
          luxury: 200
        },
        food: {
          streetFood: 4,
          restaurantMeal: 20,
          groceryWeekly: 70
        }
      },
      seasonalPricing: {
        hostel: {
          low: 14,    // 20 * 0.7
          sweet: 17,  // 20 * 0.85
          peak: 28    // 20 * 1.4
        },
        note: "Summer festivals increase demand in July"
      },
      tips: [
        "Visit Sheki Khan's Palace - UNESCO World Heritage site",
        "Try Sheki halva - a local sweet specialty",
        "Explore the ancient caravanserai",
        "Visit during summer for best weather",
        "See traditional stained glass windows (shebeke)",
        // Sheki seasonal tips
        "Winter very affordable but some attractions close",
        "Spring best for photography with flowers blooming",
        "Book caravanserai stays 2+ months ahead for summer",
        "Coliving offers cultural immersion experiences"
      ]
    },
    
    "Gabala": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 25,
            guesthouse: 40,
            coliving: 400
          },
          midrange: {
            hotel: 110,
            boutiqueHotel: 170
          },
          luxury: {
            resort: 500
          }
        },
        dailyLiving: {
          budget: 35,
          midrange: 90,
          luxury: 280
        }
      },
      seasonalPricing: {
        hostel: {
          low: 18,    // 25 * 0.7
          sweet: 21,  // 25 * 0.85
          peak: 35    // 25 * 1.4
        },
        note: "Winter ski season and summer both create demand"
      },
      tips: [
        "Great for outdoor activities and skiing",
        "Visit Tufandag Mountain Resort",
        "Try local honey and dairy products",
        "Enjoy cable car rides with mountain views",
        "Good base for exploring the Caucasus Mountains",
        // Gabala seasonal tips
        "December-February: Ski season - highest prices",
        "June-August: Hiking season - book mountain lodges early",
        "September-October: Best value for fall colors",
        "Coliving resorts cater to remote workers with activities"
      ]
    },
    
    "Ganja": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 25,
            budgetHotel: 55,
            coliving: 280
          },
          midrange: {
            hotel: 100,
            apartment: 85
          }
        },
        dailyLiving: {
          budget: 35,
          midrange: 85
        },
        transportation: {
          localBus: 0.25,
          taxi: 4
        }
      },
      seasonalPricing: {
        hostel: {
          low: 18,    // 25 * 0.7
          sweet: 21,  // 25 * 0.85
          peak: 35    // 25 * 1.4
        },
        note: "Summer festivals increase demand for Nizami celebrations"
      },
      tips: [
        "Visit Nizami Mausoleum - dedicated to the famous poet",
        "Explore Bottle House made of glass bottles",
        "See Javad Khan Street for historical architecture",
        "Try local Ganja cuisine and breads",
        // Ganja seasonal tips
        "May: Nizami Festival - book accommodation early",
        "Winter: Very affordable but colder weather",
        "Spring/Fall: Best for city exploration",
        "Coliving spaces offer authentic local experience"
      ]
    }
  }
};