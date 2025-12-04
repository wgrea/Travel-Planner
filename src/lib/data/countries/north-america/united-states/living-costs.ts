// src/lib/data/countries/north-america/united-states/living-costs.ts

import type { LivingCostData  } from '$lib/types/living-costs';

export const unitedStatesLivingCosts: LivingCostData = {
  country: "United States",
  currency: "USD",
  lastUpdated: "2024-01-15",
  
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 40,
        budgetHotel: 80,
        guesthouse: 60
      },
      midrange: {
        hotel: 150,
        apartment: 120,
        boutiqueHotel: 200
      },
      luxury: {
        hotel: 350,
        resort: 500,
        villa: 800
      },
      monthlyRent: {
        studio: 1200,
        oneBedroom: 1500,
        threeBedroom: 2500
      }
    },
    dailyLiving: {
      budget: 50,
      midrange: 100,
      luxury: 200,
      breakdown: {
        food: 30,
        transport: 10,
        activities: 8,
        misc: 2
      }
    },
    transportation: {
      localBus: 2.50,
      taxi: 2.00, // per mile
      intercityBus: 50,
      train: 80
    },
    food: {
      streetFood: 8,
      restaurantMeal: 25,
      groceryWeekly: 80
    }
  },
  
  tips: [
    "Use ride-sharing apps for cheaper transport",
    "Book hotels in advance for better rates",
    "Many museums have free admission days",
    "Use public transportation in major cities",
    "Tipping is expected (15-20% in restaurants)",
    "Consider Airbnb for longer stays"
  ],
  
  bestAreas: {
    budget: [
      "Downtown Chicago",
      "Queens, New York",
      "Portland city center",
      "Austin downtown"
    ],
    midrange: [
      "Brooklyn, New York",
      "San Diego coastal areas",
      "Seattle downtown",
      "Boston historic districts"
    ],
    luxury: [
      "Manhattan, New York",
      "Beverly Hills, Los Angeles",
      "Miami Beach",
      "San Francisco downtown"
    ]
  },
  
  // FIXED: cities as object with CityData, not array of strings
  cities: {
    "New York": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 60,      // Higher than national average
            budgetHotel: 120,
            guesthouse: 90
          },
          midrange: {
            hotel: 250,
            apartment: 200,
            boutiqueHotel: 350
          },
          monthlyRent: {
            studio: 2000,
            oneBedroom: 3000,
            threeBedroom: 5000
          }
        },
        dailyLiving: {
          budget: 70,
          midrange: 150,
          luxury: 300
        },
        transportation: {
          localBus: 2.75,
          taxi: 3.50,
          train: 2.75 // could use 'subway'
        }
      },
      tips: [
        "Use subway for cheapest transportation",
        "Visit museums on free admission days",
        "Walk between nearby attractions",
        "Book Broadway tickets in advance"
      ]
    },
    
    "Los Angeles": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 45,
            budgetHotel: 100,
            guesthouse: 75
          },
          midrange: {
            hotel: 200,
            apartment: 180,
            boutiqueHotel: 300
          },
          monthlyRent: {
            studio: 1800,
            oneBedroom: 2200,
            threeBedroom: 3500
          }
        },
        dailyLiving: {
          budget: 60,
          midrange: 120,
          luxury: 250
        },
        transportation: {
          localBus: 1.75,
          taxi: 2.50
        }
      },
      tips: [
        "Rent a car for best mobility",
        "Visit beaches for free activities",
        "Use ride-sharing in downtown areas",
        "Many studios offer free tours"
      ]
    },
    
    "Chicago": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 35,
            budgetHotel: 70,
            guesthouse: 55
          },
          midrange: {
            hotel: 130,
            apartment: 100,
            boutiqueHotel: 180
          }
        },
        dailyLiving: {
          budget: 45,
          midrange: 90,
          luxury: 180
        }
      },
      tips: [
        "Use the 'L' train system",
        "Visit museums on free days",
        "Walk along the Riverwalk",
        "Try deep dish pizza"
      ]
    },
    
    "Miami": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 40,
            budgetHotel: 90,
            guesthouse: 70
          },
          midrange: {
            hotel: 180,
            apartment: 150,
            boutiqueHotel: 280
          }
        },
        dailyLiving: {
          budget: 55,
          midrange: 110,
          luxury: 220
        }
      },
      tips: [
        "Visit during shoulder season for better prices",
        "Use public beaches",
        "Explore Little Havana for affordable food",
        "Rent a bike for South Beach"
      ]
    },
    
    "Las Vegas": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 30,
            budgetHotel: 60,
            guesthouse: 50
          },
          midrange: {
            hotel: 100,      // Often cheaper due to casino subsidies
            apartment: 90,
            boutiqueHotel: 150
          }
        },
        dailyLiving: {
          budget: 40,
          midrange: 80,
          luxury: 160
        }
      },
      tips: [
        "Stay mid-week for best hotel deals",
        "Use free hotel shuttles",
        "Visit downtown for cheaper options",
        "Many free attractions on the Strip"
      ]
    }
  }
};