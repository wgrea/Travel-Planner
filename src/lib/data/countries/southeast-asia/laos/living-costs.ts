// src/lib/data/countries/southeast-asia/laos/living-costs.ts
import type { LivingCosts } from '$lib/types/livingCosts';

export const laosLivingCosts: LivingCosts = {
  country: "Laos",
  region: "Southeast Asia",
  currency: "LAK (Kip), USD widely accepted",
  cities: {
    "Vientiane": {
      city: "Vientiane",
      monthlyRent: {
        studio: 250,
        oneBedroom: 350,
        twoBedroom: 500,
        threeBedroom: 750
      },
      utilities: {
        basic: 80,
        internet: 25,
        mobilePlan: 8
      },
      food: {
        groceriesMonthly: 150,
        restaurantMeal: 5,
        coffee: 1.5,
        waterBottle: 0.5
      },
      transportation: {
        monthlyPass: 20,
        taxiStart: 2,
        gasPerLiter: 1.2
      },
      lifestyle: {
        fitnessMembership: 30,
        cinemaTicket: 4,
        beerAtBar: 1.5
      },
      summary: {
        budgetTraveler: 600,
        digitalNomad: 1000,
        expatFamily: 1800
      },
      notes: "Capital city but small and relaxed. Sisattanak and Chanthabouly districts popular with expats"
    },
    "Luang Prabang": {
      city: "Luang Prabang",
      monthlyRent: {
        studio: 200,
        oneBedroom: 300,
        twoBedroom: 450,
        threeBedroom: 650
      },
      utilities: {
        basic: 70,
        internet: 30,
        mobilePlan: 8
      },
      food: {
        groceriesMonthly: 140,
        restaurantMeal: 6,
        coffee: 2,
        waterBottle: 0.5
      },
      transportation: {
        monthlyPass: 15,
        taxiStart: 3,
        gasPerLiter: 1.25
      },
      lifestyle: {
        fitnessMembership: 25,
        cinemaTicket: 5,
        beerAtBar: 2
      },
      summary: {
        budgetTraveler: 550,
        digitalNomad: 900,
        expatFamily: 1600
      },
      notes: "UNESCO World Heritage town, tourist prices apply in center. More traditional and scenic than Vientiane"
    },
    "Vang Vieng": {
      city: "Vang Vieng",
      monthlyRent: {
        studio: 180,
        oneBedroom: 250,
        twoBedroom: 400,
        threeBedroom: 600
      },
      utilities: {
        basic: 65,
        internet: 35,
        mobilePlan: 8
      },
      food: {
        groceriesMonthly: 130,
        restaurantMeal: 4,
        coffee: 1.8,
        waterBottle: 0.5
      },
      transportation: {
        monthlyPass: 10,
        taxiStart: 2.5,
        gasPerLiter: 1.3
      },
      lifestyle: {
        fitnessMembership: 20,
        cinemaTicket: 3,
        beerAtBar: 1.2
      },
      summary: {
        budgetTraveler: 500,
        digitalNomad: 800,
        expatFamily: 1500
      },
      notes: "Adventure tourism town, beautiful karst landscape. Limited infrastructure but growing digital nomad scene"
    },
    "Pakse": {
      city: "Pakse",
      monthlyRent: {
        studio: 150,
        oneBedroom: 220,
        twoBedroom: 350,
        threeBedroom: 500
      },
      utilities: {
        basic: 60,
        internet: 40,
        mobilePlan: 7
      },
      food: {
        groceriesMonthly: 120,
        restaurantMeal: 3.5,
        coffee: 1.2,
        waterBottle: 0.4
      },
      transportation: {
        monthlyPass: 12,
        taxiStart: 1.8,
        gasPerLiter: 1.25
      },
      lifestyle: {
        fitnessMembership: 15,
        cinemaTicket: 2.5,
        beerAtBar: 1
      },
      summary: {
        budgetTraveler: 450,
        digitalNomad: 700,
        expatFamily: 1200
      },
      notes: "Southern hub, gateway to Bolaven Plateau and 4000 Islands. Very relaxed pace, limited amenities"
    },
    "Savannakhet": {
      city: "Savannakhet",
      monthlyRent: {
        studio: 130,
        oneBedroom: 200,
        twoBedroom: 320,
        threeBedroom: 450
      },
      utilities: {
        basic: 55,
        internet: 45,
        mobilePlan: 7
      },
      food: {
        groceriesMonthly: 110,
        restaurantMeal: 3,
        coffee: 1,
        waterBottle: 0.3
      },
      transportation: {
        monthlyPass: 10,
        taxiStart: 1.5,
        gasPerLiter: 1.2
      },
      lifestyle: {
        fitnessMembership: 12,
        cinemaTicket: 2,
        beerAtBar: 0.8
      },
      summary: {
        budgetTraveler: 400,
        digitalNomad: 650,
        expatFamily: 1100
      },
      notes: "Rural town near Thai border, very authentic experience. French colonial architecture, minimal tourism"
    }
  },
  nationalAverage: {
    monthlyRent: {
      studio: 180,
      oneBedroom: 260,
      twoBedroom: 400,
      threeBedroom: 590
    },
    utilities: {
      basic: 65,
      internet: 35,
      mobilePlan: 8
    },
    food: {
      groceriesMonthly: 130,
      restaurantMeal: 4,
      coffee: 1.5,
      waterBottle: 0.4
    },
    transportation: {
      monthlyPass: 15,
      taxiStart: 2,
      gasPerLiter: 1.24
    },
    lifestyle: {
      fitnessMembership: 20,
      cinemaTicket: 3.5,
      beerAtBar: 1.3
    },
    summary: {
      budgetTraveler: 500,
      digitalNomad: 800,
      expatFamily: 1450
    }
  }
};