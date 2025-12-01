import type { LivingCostData } from '$lib/types/living-costs';

export const georgiaLivingCosts: LivingCostData = {
  country: "Georgia",
  region: "Europe",
  currency: "GEL",
  cities: {
    "Tbilisi": {
      LivingCostData: {
        budget: {
          monthly: 1200,
          accommodation: 400,
          food: 200,
          transportation: 100,
          activities: 100
        },
        midRange: {
          monthly: 2000,
          accommodation: 700,
          food: 400,
          transportation: 150,
          activities: 200
        },
        luxury: {
          monthly: 3500,
          accommodation: 1500,
          food: 800,
          transportation: 300,
          activities: 500
        }
      },
      accommodation: {
        studio: 350,
        oneBedroom: 500,
        twoBedroom: 700,
        threeBedroom: 1000
      },
      food: {
        restaurantMeal: 20,
        groceryMonthly: 150,
        coffee: 3,
        beer: 2
      }
    },
    "Batumi": {
      costOfLiving: {
        budget: {
          monthly: 1100,
          accommodation: 350,
          food: 180,
          transportation: 90,
          activities: 80
        },
        midRange: {
          monthly: 1800,
          accommodation: 600,
          food: 350,
          transportation: 120,
          activities: 150
        },
        luxury: {
          monthly: 3200,
          accommodation: 1300,
          food: 700,
          transportation: 250,
          activities: 400
        }
      },
      accommodation: {
        studio: 300,
        oneBedroom: 450,
        twoBedroom: 650,
        threeBedroom: 900
      },
      food: {
        restaurantMeal: 18,
        groceryMonthly: 140,
        coffee: 2.5,
        beer: 2
      }
    },
    "Kutaisi": {
      costOfLiving: {
        budget: {
          monthly: 900,
          accommodation: 250,
          food: 150,
          transportation: 70,
          activities: 60
        },
        midRange: {
          monthly: 1500,
          accommodation: 500,
          food: 300,
          transportation: 100,
          activities: 120
        },
        luxury: {
          monthly: 2500,
          accommodation: 1000,
          food: 600,
          transportation: 200,
          activities: 300
        }
      },
      accommodation: {
        studio: 200,
        oneBedroom: 350,
        twoBedroom: 500,
        threeBedroom: 700
      },
      food: {
        restaurantMeal: 15,
        groceryMonthly: 120,
        coffee: 2,
        beer: 1.5
      }
    }
  }
};