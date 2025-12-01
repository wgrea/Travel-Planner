// src/lib/data/countries/north-america/mexico/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const mexicoLivingCosts: LivingCostData = {
  country: "Mexico",
  countryCode: "Mexico",
  currency: "MXN", 
  lastUpdated: "2024-01-15",
  
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 250,
        budgetHotel: 500,
        guesthouse: 400
      },
      midrange: {
        hotel: 1200,
        apartment: 900,
        boutiqueHotel: 1500
      },
      luxury: {
        hotel: 3000,
        resort: 4000,
        villa: 6000
      },
      monthlyRent: {
        studio: 8000,
        oneBedroom: 12000,
        threeBedroom: 20000
      }
    },
    dailyLiving: {
      budget: 400,
      midrange: 800,
      luxury: 1800,
      breakdown: {
        food: 200,
        transport: 80,
        activities: 100,
        misc: 20
      }
    },
    transportation: {
      localBus: 10,
      taxi: 50,
      intercityBus: 400,
      train: 600
    },
    food: {
      streetFood: 40,
      restaurantMeal: 150,
      groceryWeekly: 800
    }
  },
  
  tips: [
    "Eat at local 'fondas' and 'loncherías' for authentic, affordable meals",
    "Use Uber/Didi instead of taxis for better prices and safety",
    "Learn basic Spanish for better deals and interactions",
    "Visit local markets for cheaper produce and goods"
  ],
  
  bestAreas: {
    budget: ["Centro Historico (Mexico City)", "Zona Romantica (Puerto Vallarta)", "Downtown Tulum"],
    midrange: ["Condesa/Roma (Mexico City)", "Zona Hotelera (Cancun)", "El Centro (San Miguel)"],
    luxury: ["Polanco (Mexico City)", "Mayakoba (Playa del Carmen)", "Punta Mita"]
  },
  
  cities: {
    "Mexico City": {
      baseCosts: {
        accommodation: {
          budget: { 
            hostel: 300,
            budgetHotel: 600
          },
          midrange: {
            hotel: 1400,
            apartment: 1100
          },
          luxury: {
            hotel: 3500,
            resort: 4500,
            villa: 6500
          },
          monthlyRent: {
            studio: 9000,
            oneBedroom: 14000
          }
        },
        dailyLiving: {
          budget: 450,
          midrange: 900,
          luxury: 2000
        },
        transportation: {
          taxi: 60,
          localBus: 12
        }
      },
      tips: [
        "Use Metro and Metrobús for cheap and efficient transportation",
        "Stay in neighborhoods like Condesa, Roma, or Coyoacán for safety and vibe",
        "Uber is safe and affordable throughout the city",
        "Visit local markets like Mercado de la Merced for cheap eats"
      ]
    },
    "Cancún": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 350,
            budgetHotel: 700
          },
          midrange: {
            hotel: 1600,
            apartment: 1000
          },
          luxury: {
            hotel: 3500,
            resort: 5000,
            villa: 8000
          }
        },
        dailyLiving: {
          budget: 500,
          midrange: 1000,
          luxury: 2500
        },
        food: {
          restaurantMeal: 200
        }
      },
      tips: [
        "Stay in downtown Cancún for better prices than Hotel Zone",
        "Use ADO buses for transport to Playa del Carmen and Tulum",
        "Eat at local restaurants away from tourist areas",
        "Visit during shoulder seasons (May-June, Sept-Oct) for better prices"
      ]
    },
    "Playa del Carmen": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 300,
            budgetHotel: 600
          },
          midrange: {
            hotel: 1400,
            apartment: 1000
          },
          monthlyRent: {
            studio: 8500,
            oneBedroom: 13000
          }
        },
        dailyLiving: {
          budget: 450,
          midrange: 900,
          luxury: 2200
        }
      },
      tips: [
        "Great digital nomad community with many coworking spaces",
        "Walk or bike around - very pedestrian-friendly",
        "Visit local cenotes for affordable swimming spots",
        "Live slightly away from 5th Avenue for better prices"
      ]
    },
    "Oaxaca City": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 200,
            budgetHotel: 400
          },
          midrange: {
            hotel: 1000,
            apartment: 700
          },
          monthlyRent: {
            studio: 6000,
            oneBedroom: 9000
          }
        },
        dailyLiving: {
          budget: 300,
          midrange: 600,
          luxury: 1400
        },
        food: {
          streetFood: 30,
          restaurantMeal: 120
        }
      },
      tips: [
        "Historic center is very walkable and safe",
        "Try traditional Oaxacan cuisine at local markets",
        "Visit during festivals for cultural experiences",
        "Great base for exploring surrounding villages"
      ]
    }
  }
};