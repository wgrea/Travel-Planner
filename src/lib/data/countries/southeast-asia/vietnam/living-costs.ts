// src/lib/data/visa/destinations/southeast-asia/vietnam/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const vietnamLivingCosts: LivingCostData = {
  country: "Vietnam",
  countryCode: "Vietnam", 
  currency: "VND",
  lastUpdated: "2024-01-15",
  
  // Country-level averages
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 150000,      // ~$6 USD
        budgetHotel: 400000, // ~$16 USD
        guesthouse: 300000   // ~$12 USD
      },
      midrange: {
        hotel: 800000,       // ~$32 USD
        apartment: 600000,   // ~$24 USD
        boutiqueHotel: 1200000 // ~$48 USD
      },
      luxury: {
        hotel: 2000000,      // ~$80 USD
        resort: 3500000,     // ~$140 USD
        villa: 5000000       // ~$200 USD
      },
      monthlyRent: {
        studio: 8000000,     // ~$320 USD
        oneBedroom: 12000000, // ~$480 USD
        threeBedroom: 20000000 // ~$800 USD
      }
    },
    dailyLiving: {
      budget: 350000,        // ~$14 USD
      midrange: 700000,      // ~$28 USD
      luxury: 1500000,       // ~$60 USD
      breakdown: {
        food: 200000,        // ~$8 USD
        transport: 50000,    // ~$2 USD
        activities: 80000,   // ~$3 USD
        misc: 20000          // ~$0.80 USD
      }
    },
    transportation: {
      localBus: 7000,        // ~$0.28 USD
      taxi: 15000,           // ~$0.60 USD per km
      intercityBus: 300000,  // ~$12 USD
      train: 500000          // ~$20 USD
    },
    food: {
      streetFood: 30000,     // ~$1.20 USD
      restaurantMeal: 150000, // ~$6 USD
      groceryWeekly: 600000  // ~$24 USD
    }
  },
  
  tips: [
    "Negotiate prices in markets and with taxi drivers",
    "Use Grab app for transportation (like Uber)",
    "Try street food - it's safe and delicious",
    "Learn basic Vietnamese phrases for better prices",
    "Visit during dry season (November-April)",
    "Carry small bills - change can be hard to find",
    "Get a local SIM card - data is very cheap",
    "Be careful when crossing streets - traffic is chaotic"
  ],
  
  bestAreas: {
    budget: [
      "Pham Ngu Lao, Ho Chi Minh City",
      "Old Quarter, Hanoi",
      "Hoi An Ancient Town",
      "Nha Trang beach area"
    ],
    midrange: [
      "District 1, Ho Chi Minh City",
      "Tay Ho, Hanoi",
      "Da Lat city center",
      "Phu Quoc island"
    ],
    luxury: [
      "District 2, Ho Chi Minh City",
      "West Lake, Hanoi",
      "Da Nang beachfront",
      "Con Dao Islands"
    ]
  },
  
  // City-specific data
  cities: {
    "Ho Chi Minh City": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 200000,    // +50,000 from country average
            budgetHotel: 500000 // +100,000 from country average
          },
          midrange: {
            hotel: 1000000,    // +200,000 from country average
            apartment: 800000  // +200,000 from country average
          },
          monthlyRent: {
            studio: 10000000,  // +2,000,000 from country average
            oneBedroom: 15000000 // +3,000,000 from country average
          }
        },
        dailyLiving: {
          budget: 450000,      // +100,000 from country average
          midrange: 900000,    // +200,000 from country average
          luxury: 1800000      // +300,000 from country average
        },
        transportation: {
          taxi: 20000,         // +5,000 from country average
        }
      },
      tips: [
        "Use Grab bike for quick and cheap transportation",
        "Visit Ben Thanh Market but negotiate hard",
        "Explore different districts - each has unique character",
        "Try Vietnamese coffee culture in local cafes"
      ]
    },
    
    "Hanoi": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 180000,    // +30,000 from country average
            guesthouse: 350000 // +50,000 from country average
          },
          midrange: {
            hotel: 900000,     // +100,000 from country average
            boutiqueHotel: 1400000 // +200,000 from country average
          }
        },
        dailyLiving: {
          budget: 400000,      // +50,000 from country average
          midrange: 800000,    // +100,000 from country average
        }
      },
      tips: [
        "Visit Hoan Kiem Lake in early morning for tai chi",
        "Try egg coffee in the Old Quarter",
        "Take a day trip to Halong Bay or Ninh Binh",
        "Winter can be surprisingly cold - bring layers"
      ]
    },
    
    "Da Nang": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 120000,    // -30,000 from country average
            guesthouse: 250000 // -50,000 from country average
          },
          midrange: {
            apartment: 500000, // -100,000 from country average
            boutiqueHotel: 1000000 // -200,000 from country average
          },
          luxury: {
            resort: 3000000    // -500,000 from country average
          }
        },
        dailyLiving: {
          budget: 300000,      // -50,000 from country average
          midrange: 600000,    // -100,000 from country average
        }
      },
      tips: [
        "Great for digital nomads with good internet",
        "Beautiful beaches and nearby mountains",
        "Visit Marble Mountains and Lady Buddha",
        "Rent a motorbike to explore the coast"
      ]
    },
    
    "Hoi An": {
      baseCosts: {
        accommodation: {
          budget: {
            guesthouse: 280000 // -20,000 from country average
          },
          midrange: {
            boutiqueHotel: 1100000 // -100,000 from country average
          }
        },
        dailyLiving: {
          budget: 320000,      // -30,000 from country average
          midrange: 650000     // -50,000 from country average
        }
      },
      tips: [
        "Get custom clothing made - it's affordable and fast",
        "Visit the ancient town in the evening when lanterns light up",
        "Take a cooking class to learn Vietnamese cuisine",
        "Rent a bicycle to explore the countryside"
      ]
    }
  }
};
