// src/lib/data/countries//europe/western-europe/spain/living-costs.ts
import type { LivingCostData  } from '$lib/types/living-costs';

export const spainLivingCosts: LivingCostData = {
  country: "Spain",
  countryCode: "Spain", 
  currency: "EUR",
  cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Granada"],
  baseCosts: {
    accommodation: {
      budget: {
        hostel: 25,        // ~$27 USD
        budgetHotel: 50,   // ~$54 USD
        guesthouse: 40     // ~$43 USD
      },
      midrange: {
        hotel: 100,        // ~$109 USD
        apartment: 80,     // ~$87 USD
        boutiqueHotel: 150 // ~$163 USD
      },
      luxury: {
        hotel: 250,        // ~$272 USD
        resort: 400,       // ~$435 USD
        villa: 600         // ~$652 USD
      },
      monthlyRent: {
        studio: 600,       // ~$652 USD
        oneBedroom: 800,   // ~$870 USD
        threeBedroom: 1200 // ~$1,304 USD
      }
    },
    dailyLiving: {
      budget: 45,          // ~$49 USD
      midrange: 90,        // ~$98 USD
      luxury: 180,         // ~$196 USD
      breakdown: {
        food: 25,          // ~$27 USD
        transport: 8,      // ~$9 USD
        activities: 10,    // ~$11 USD
        misc: 2            // ~$2 USD
      }
    },
    transportation: {
      localBus: 1.50,      // ~$1.63 USD
      taxi: 8,             // ~$8.70 USD per km
      intercityBus: 25,    // ~$27 USD
      train: 50            // ~$54 USD (Madrid to Barcelona)
    },
    food: {
      streetFood: 8,       // ~$8.70 USD
      restaurantMeal: 35,  // ~$38 USD
      groceryWeekly: 120   // ~$130 USD
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
    "Shop at local markets for fresh produce and authentic experiences"
  ],
  bestAreas: {
    budget: [
      "Lavapiés, Madrid",
      "Gràcia, Barcelona", 
      "El Carmen, Valencia",
      "Triana, Seville"
    ],
    midrange: [
      "Salamanca, Madrid",
      "Eixample, Barcelona",
      "Ruzafa, Valencia",
      "Santa Cruz, Seville"
    ],
    luxury: [
      "Salamanca Golden Mile, Madrid",
      "Pedralbes, Barcelona",
      "Playa de San Juan, Alicante",
      "Puerto Banús, Marbella"
    ]
  },
  lastUpdated: "2024-01-15"
};
