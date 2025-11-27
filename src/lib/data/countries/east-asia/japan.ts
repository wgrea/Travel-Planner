// /src/lib/data/countries/east-asia/japan.ts
import type { FlightPattern } from '$lib/data/flyData';  // ← Import from flyData.ts
import type { LivingCostData } from '$lib/types/living-costs';
import type { VisaInfo } from '$lib/types/visa';
import type { FlightCostData  } from '$lib/types/flight';

export const japanFlightPattern: FlightPattern = {
  country: "Japan",
  cities: ["Tokyo", "Osaka", "Kyoto"],
  cheapestMonths: ["January", "February"],
  expensiveMonths: ["April", "November"],
  sweetSpot: ["May", "October"],
  averagePrice: 1200,
  alternativeRoutes: "Fly to Seoul first, then budget airline to Osaka",
  planningTips: ["Book 3-4 months in advance", "Use Google Flights alerts"],
  notes: "Cherry blossom season (April) is most expensive"
};

export const japanLivingCosts: LivingCostData = {
  country: "Japan",
  countryCode: "Japan", 
  currency: "JPY",
  lastUpdated: "2024-01-15",
  
  // Country-level averages
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 3000,        // ~$20 USD
        budgetHotel: 6000,   // ~$40 USD
        guesthouse: 4500     // ~$30 USD
      },
      midrange: {
        hotel: 12000,        // ~$80 USD
        apartment: 9000,     // ~$60 USD
        boutiqueHotel: 18000 // ~$120 USD
      },
      luxury: {
        hotel: 30000,        // ~$200 USD
        resort: 52500,       // ~$350 USD
        villa: 75000         // ~$500 USD
      },
      monthlyRent: {
        studio: 75000,       // ~$500 USD
        oneBedroom: 105000,  // ~$700 USD
        threeBedroom: 150000 // ~$1,000 USD
      }
    },
    dailyLiving: {
      budget: 5250,          // ~$35 USD
      midrange: 10500,       // ~$70 USD
      luxury: 22500,         // ~$150 USD
      breakdown: {
        food: 3000,          // ~$20 USD
        transport: 750,      // ~$5 USD
        activities: 1200,    // ~$8 USD
        misc: 300            // ~$2 USD
      }
    },
    transportation: {
      localBus: 250,         // ~$1.65 USD
      taxi: 750,             // ~$5 USD per km
      intercityBus: 2250,    // ~$15 USD
      train: 3750            // ~$25 USD
    },
    food: {
      streetFood: 450,       // ~$3 USD
      restaurantMeal: 2250,  // ~$15 USD
      groceryWeekly: 9000    // ~$60 USD
    }
  },
  
  tips: [
    "Get a JR Pass for unlimited train travel if visiting multiple cities",
    "Convenience stores (7-Eleven, FamilyMart) have great cheap meals",
    "Learn basic Japanese phrases - English is not widely spoken",
    "Use IC cards (Suica/Pasmo) for easy public transport payments",
    "Visit during cherry blossom season (late March-April) or autumn (October-November)",
    "Try local convenience store foods - they're surprisingly good",
    "Carry cash - many places don't accept credit cards",
    "Take off shoes when entering traditional accommodations and some restaurants"
  ],
  
  bestAreas: {
    budget: [
      "Asakusa, Tokyo",
      "Namba, Osaka", 
      "Gion, Kyoto (hostels)",
      "Hakata, Fukuoka"
    ],
    midrange: [
      "Shinjuku, Tokyo",
      "Umeda, Osaka",
      "Southern Higashiyama, Kyoto",
      "Susukino, Sapporo"
    ],
    luxury: [
      "Ginza, Tokyo",
      "Kita, Osaka",
      "Arashiyama, Kyoto",
      "Niseko ski resorts"
    ]
  },
  
  // City-specific data (overrides only)
  cities: {
    "Tokyo": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 3500,        // +500 from country average
            budgetHotel: 7500    // +1500 from country average
          },
          midrange: {
            hotel: 15000,        // +3000 from country average
            apartment: 12000     // +3000 from country average
          },
          luxury: {
            hotel: 40000,        // +10000 from country average
            resort: 60000        // +7500 from country average
          },
          monthlyRent: {
            studio: 90000,       // +15000 from country average
            oneBedroom: 135000   // +30000 from country average
          }
        },
        dailyLiving: {
          budget: 6750,          // +1500 from country average
          midrange: 13500,       // +3000 from country average
          luxury: 30000          // +7500 from country average
        },
        transportation: {
          localBus: 300,         // +50 from country average
          taxi: 900              // +150 from country average
        },
        food: {
          streetFood: 600,       // +150 from country average
          restaurantMeal: 3000   // +750 from country average
        }
      },
      tips: [
        "Use Tokyo Metro day passes for unlimited travel",
        "Visit Tsukiji Outer Market for fresh seafood",
        "Explore different neighborhoods - each has unique character",
        "Book accommodations near Yamanote Line stations for easy access"
      ]
    },
    
    "Kyoto": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 3200,        // +200 from country average
            guesthouse: 5000     // +500 from country average
          },
          midrange: {
            hotel: 13000,        // +1000 from country average
            boutiqueHotel: 20000 // +2000 from country average
          },
          luxury: {
            hotel: 35000,        // +5000 from country average
            resort: 55000        // +2500 from country average
          }
        },
        dailyLiving: {
          budget: 6000,          // +750 from country average
          midrange: 12000,       // +1500 from country average
          luxury: 25000          // +2500 from country average
        },
        transportation: {
          localBus: 280,         // +30 from country average
          taxi: 800              // +50 from country average
        }
      },
      tips: [
        "Visit temples early to avoid crowds",
        "Rent a bicycle to explore the city",
        "Try kaiseki (traditional multi-course) meals",
        "Book accommodations months in advance during peak seasons"
      ]
    },
    
    "Osaka": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 2800,        // -200 from country average
            budgetHotel: 5500    // -500 from country average
          },
          midrange: {
            hotel: 11000,        // -1000 from country average
            apartment: 8500      // -500 from country average
          },
          monthlyRent: {
            studio: 70000,       // -5000 from country average
            oneBedroom: 95000    // -10000 from country average
          }
        },
        dailyLiving: {
          budget: 4800,          // -450 from country average
          midrange: 9750,        // -750 from country average
          luxury: 21000          // -1500 from country average
        },
        food: {
          streetFood: 400,       // -50 from country average
          restaurantMeal: 2000   // -250 from country average
        }
      },
      tips: [
        "Try street food in Dotonbori",
        "Use Osaka Amazing Pass for attractions and transport",
        "Visit Universal Studios Japan",
        "Osaka is known as 'Japan's Kitchen' - eat everything!"
      ]
    },
    
    "Hokkaido (Sapporo)": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 2500,        // -500 from country average
            guesthouse: 4000     // -500 from country average
          },
          midrange: {
            hotel: 10000,        // -2000 from country average
            apartment: 7500      // -1500 from country average
          },
          luxury: {
            resort: 60000        // +7500 from country average (ski resorts)
          }
        },
        dailyLiving: {
          budget: 4500,          // -750 from country average
          midrange: 9000         // -1500 from country average
        },
        transportation: {
          intercityBus: 2000,    // -250 from country average
          train: 3500            // -250 from country average
        }
      },
      tips: [
        "Visit during winter for snow festivals and skiing",
        "Try Hokkaido's famous dairy products and seafood",
        "Rent a car to explore the countryside",
        "Hot springs (onsen) are abundant and affordable"
      ]
    },
    
    "Okinawa": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 3200,        // +200 from country average
            guesthouse: 4800     // +300 from country average
          },
          midrange: {
            hotel: 14000,        // +2000 from country average
            boutiqueHotel: 22000 // +4000 from country average
          },
          luxury: {
            resort: 60000,       // +7500 from country average
            villa: 90000         // +15000 from country average
          }
        },
        dailyLiving: {
          budget: 6000,          // +750 from country average
          midrange: 12000,       // +1500 from country average
          luxury: 27000          // +4500 from country average
        },
        transportation: {
          taxi: 900,             // +150 from country average
          intercityBus: 2500     // +250 from country average
        }
      },
      tips: [
        "Rent a car to explore the islands",
        "Try Okinawan cuisine - different from mainland Japan",
        "Great for diving and beach activities",
        "Visit Shuri Castle and other Ryukyu Kingdom sites"
      ]
    }
  }
};

export const japanData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free for short stays",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Work visa required for employment",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};