// src/lib/data/countries/europe/western-europe/spain/living-costs.ts
import type { LivingCostData } from '$lib/types/living-costs';

export const spainLivingCosts: LivingCostData = {
  country: "Spain",
  currency: "EUR",
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
        resort: 400,
        villa: 600
      },
      monthlyRent: {
        studio: 600,
        oneBedroom: 800,
        threeBedroom: 1200
      }
    },
    dailyLiving: {
      budget: 45,
      midrange: 90,
      luxury: 180,
      breakdown: {
        food: 25,
        transport: 8,
        activities: 10,
        misc: 2
      }
    },
    transportation: {
      localBus: 1.5,
      taxi: 8,
      intercityBus: 25,
      train: 50
    },
    food: {
      streetFood: 8,
      restaurantMeal: 35,
      groceryWeekly: 120
    }
  },
  
  tips: [
    "Try tapas hopping in local bars - it's a cultural experience",
    "Use high-speed trains (AVE) between major cities for efficiency",
    "Visit during shoulder season (May-June, September-October) for best weather and prices",
    "Learn basic Spanish phrases for better local prices and interactions",
    "Take advantage of free museum hours and city walking tours",
    "Try regional specialties like paella in Valencia, gazpacho in Andalusia",
    "Use public transportation - it's efficient and affordable in cities",
    "Shop at local markets for fresh produce and authentic experiences",
    "Enjoy siesta time - many shops close 2-5pm",
    "Try the menu del día for affordable lunch options"
  ],
  
  bestAreas: {
    budget: [
      "Lavapiés, Madrid",
      "Gràcia, Barcelona", 
      "El Carmen, Valencia",
      "Triana, Seville",
      "Albaicín, Granada"
    ],
    midrange: [
      "Salamanca, Madrid",
      "Eixample, Barcelona",
      "Ruzafa, Valencia",
      "Santa Cruz, Seville",
      "Centro, Málaga"
    ],
    luxury: [
      "Salamanca Golden Mile, Madrid",
      "Pedralbes, Barcelona",
      "Playa de San Juan, Alicante",
      "Puerto Banús, Marbella",
      "La Moraleja, Madrid"
    ]
  },
  
  // City-specific data
  cities: {
    "Madrid": {
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
            resort: 450       // +50 from country average
          },
          monthlyRent: {
            studio: 700,      // +100 from country average
            oneBedroom: 950,  // +150 from country average
            threeBedroom: 1500 // +300 from country average
          }
        },
        dailyLiving: {
          budget: 50,         // +5 from country average
          midrange: 100,      // +10 from country average
          luxury: 200         // +20 from country average
        },
        transportation: {
          localBus: 1.5,      // same as country average
          taxi: 10            // +2 from country average
        },
        food: {
          streetFood: 10,     // +2 from country average
          restaurantMeal: 40, // +5 from country average
          groceryWeekly: 130  // +10 from country average
        }
      },
      tips: [
        "Visit the Prado Museum for free 6-8pm Monday-Saturday",
        "Try calamari sandwich at Mercado de San Miguel",
        "Use Madrid Metro Card for unlimited rides",
        "Visit El Retiro Park for a relaxing afternoon",
        "Experience nightlife in Malasaña and Chueca"
      ]
    },
    
    "Barcelona": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 35,       // +10 from country average
            budgetHotel: 65,  // +15 from country average
            guesthouse: 55    // +15 from country average
          },
          midrange: {
            hotel: 130,       // +30 from country average
            apartment: 110,   // +30 from country average
            boutiqueHotel: 190 // +40 from country average
          },
          luxury: {
            hotel: 350,       // +100 from country average
            resort: 500       // +100 from country average
          },
          monthlyRent: {
            studio: 750,      // +150 from country average
            oneBedroom: 1000, // +200 from country average
            threeBedroom: 1600 // +400 from country average
          }
        },
        dailyLiving: {
          budget: 50,         // +5 from country average
          midrange: 110,      // +20 from country average
          luxury: 220         // +40 from country average
        },
        transportation: {
          localBus: 2.4,      // +0.9 from country average
          taxi: 12            // +4 from country average
        },
        food: {
          streetFood: 12,     // +4 from country average
          restaurantMeal: 45, // +10 from country average
          groceryWeekly: 140  // +20 from country average
        }
      },
      tips: [
        "Buy Sagrada Familia tickets online to skip lines",
        "Walk along Las Ramblas but watch for pickpockets",
        "Visit Park Güell early to avoid crowds",
        "Try patatas bravas in local tapas bars",
        "Take the funicular to Montjuïc Castle"
      ]
    },
    
    "Valencia": {
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
            hotel: 220        // -30 from country average
          },
          monthlyRent: {
            studio: 500,      // -100 from country average
            oneBedroom: 650,  // -150 from country average
            threeBedroom: 900 // -300 from country average
          }
        },
        dailyLiving: {
          budget: 40,         // -5 from country average
          midrange: 80,       // -10 from country average
          luxury: 160         // -20 from country average
        },
        transportation: {
          localBus: 1.4,      // -0.1 from country average
          taxi: 7             // -1 from country average
        },
        food: {
          streetFood: 6,      // -2 from country average
          restaurantMeal: 30, // -5 from country average
          groceryWeekly: 100  // -20 from country average
        }
      },
      tips: [
        "Try authentic paella at La Pepica or similar restaurants",
        "Visit the City of Arts and Sciences complex",
        "Explore the Turia Gardens - former riverbed",
        "Try horchata (tiger nut drink) with fartons",
        "Visit during Las Fallas festival in March"
      ]
    },
    
    "Seville": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 22,       // -3 from country average
            budgetHotel: 48,  // -2 from country average
            guesthouse: 38    // -2 from country average
          },
          midrange: {
            hotel: 95,        // -5 from country average
            apartment: 75,    // -5 from country average
            boutiqueHotel: 140 // -10 from country average
          },
          luxury: {
            hotel: 230        // -20 from country average
          },
          monthlyRent: {
            studio: 550,      // -50 from country average
            oneBedroom: 700,  // -100 from country average
            threeBedroom: 1000 // -200 from country average
          }
        },
        dailyLiving: {
          budget: 42,         // -3 from country average
          midrange: 85,       // -5 from country average
          luxury: 170         // -10 from country average
        },
        transportation: {
          localBus: 1.4,      // -0.1 from country average
          taxi: 7             // -1 from country average
        },
        food: {
          streetFood: 7,      // -1 from country average
          restaurantMeal: 32, // -3 from country average
          groceryWeekly: 110  // -10 from country average
        }
      },
      tips: [
        "Visit Real Alcázar early to avoid crowds",
        "See flamenco shows in Triana neighborhood",
        "Climb La Giralda for panoramic views",
        "Try salmorejo (cold tomato soup) in summer",
        "Visit during Semana Santa or Feria de Abril"
      ]
    },
    
    "Granada": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 18,       // -7 from country average
            guesthouse: 32    // -8 from country average
          },
          midrange: {
            hotel: 80,        // -20 from country average
            apartment: 65,    // -15 from country average
            boutiqueHotel: 120 // -30 from country average
          },
          luxury: {
            hotel: 200        // -50 from country average
          },
          monthlyRent: {
            studio: 450,      // -150 from country average
            oneBedroom: 600,  // -200 from country average
            threeBedroom: 850 // -350 from country average
          }
        },
        dailyLiving: {
          budget: 35,         // -10 from country average
          midrange: 75,       // -15 from country average
          luxury: 150         // -30 from country average
        },
        transportation: {
          localBus: 1.3,      // -0.2 from country average
          taxi: 6             // -2 from country average
        },
        food: {
          streetFood: 6,      // -2 from country average
          restaurantMeal: 25, // -10 from country average
          groceryWeekly: 90   // -30 from country average
        }
      },
      tips: [
        "Get free tapas with drinks at local bars",
        "Buy Alhambra tickets months in advance",
        "Explore the Albayzín and Sacromonte caves",
        "Watch sunset from Mirador de San Nicolás",
        "Try pionono pastries - a local specialty"
      ]
    },
    
    "Málaga": {
      baseCosts: {
        accommodation: {
          budget: {
            hostel: 20,       // -5 from country average
            budgetHotel: 45,  // -5 from country average
            guesthouse: 35    // -5 from country average
          },
          midrange: {
            hotel: 90,        // -10 from country average
            apartment: 75,    // -5 from country average
            boutiqueHotel: 140 // -10 from country average
          },
          luxury: {
            hotel: 250,       // same as country average
            resort: 380       // -20 from country average
          },
          monthlyRent: {
            studio: 500,      // -100 from country average
            oneBedroom: 700,  // -100 from country average
            threeBedroom: 1000 // -200 from country average
          }
        },
        dailyLiving: {
          budget: 40,         // -5 from country average
          midrange: 85,       // -5 from country average
          luxury: 180         // same as country average
        },
        transportation: {
          localBus: 1.4,      // -0.1 from country average
          taxi: 8             // same as country average
        },
        food: {
          streetFood: 7,      // -1 from country average
          restaurantMeal: 30, // -5 from country average
          groceryWeekly: 110  // -10 from country average
        }
      },
      tips: [
        "Visit Picasso Museum and the Alcazaba",
        "Try fried fish on the beach (pescaíto frito)",
        "Take day trips to Ronda and Caminito del Rey",
        "Enjoy the modern Pompidou Center",
        "Visit during summer for beach activities"
      ]
    }
  }
};