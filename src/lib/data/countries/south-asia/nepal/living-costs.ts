// src/lib/data/countries/south-asia/nepal/living-costs.ts
import type { LivingCosts } from '$lib/types/livingCosts';

export const nepalLivingCosts: LivingCosts = {
  country: "Nepal",
  region: "South Asia",
  currency: "NPR (Nepalese Rupee), USD accepted in tourist areas",
  cities: {
    "Kathmandu": {
      city: "Kathmandu",
      monthlyRent: {
        studio: 20000,
        oneBedroom: 30000,
        twoBedroom: 50000,
        threeBedroom: 80000
      },
      utilities: {
        basic: 4000,
        internet: 1500,
        mobilePlan: 500
      },
      food: {
        groceriesMonthly: 8000,
        restaurantMeal: 300,
        coffee: 120,
        waterBottle: 20
      },
      transportation: {
        monthlyPass: 1200,
        taxiStart: 100,
        gasPerLiter: 135
      },
      lifestyle: {
        fitnessMembership: 2500,
        cinemaTicket: 250,
        beerAtBar: 300
      },
      summary: {
        budgetTraveler: 30000,
        digitalNomad: 60000,
        expatFamily: 120000
      },
      notes: "Thamel area touristy/expensive, Boudha/Patan more authentic/affordable, frequent power cuts"
    },
    "Pokhara": {
      city: "Pokhara",
      monthlyRent: {
        studio: 15000,
        oneBedroom: 22000,
        twoBedroom: 35000,
        threeBedroom: 55000
      },
      utilities: {
        basic: 3500,
        internet: 1500,
        mobilePlan: 500
      },
      food: {
        groceriesMonthly: 7000,
        restaurantMeal: 250,
        coffee: 100,
        waterBottle: 15
      },
      transportation: {
        monthlyPass: 800,
        taxiStart: 80,
        gasPerLiter: 140
      },
      lifestyle: {
        fitnessMembership: 2000,
        cinemaTicket: 200,
        beerAtBar: 250
      },
      summary: {
        budgetTraveler: 25000,
        digitalNomad: 50000,
        expatFamily: 100000
      },
      notes: "Lakeside area touristy, other areas more local/affordable, popular with trekkers and digital nomads"
    },
    "Chitwan": {
      city: "Chitwan",
      monthlyRent: {
        studio: 12000,
        oneBedroom: 18000,
        twoBedroom: 28000,
        threeBedroom: 45000
      },
      utilities: {
        basic: 3000,
        internet: 2000,
        mobilePlan: 500
      },
      food: {
        groceriesMonthly: 6000,
        restaurantMeal: 200,
        coffee: 80,
        waterBottle: 15
      },
      transportation: {
        monthlyPass: 600,
        taxiStart: 70,
        gasPerLiter: 145
      },
      lifestyle: {
        fitnessMembership: 1500,
        cinemaTicket: 150,
        beerAtBar: 200
      },
      summary: {
        budgetTraveler: 20000,
        digitalNomad: 40000,
        expatFamily: 80000
      },
      notes: "Jungle/national park area, Sauraha tourist center, more remote/authentic experience"
    },
    "Lumbini": {
      city: "Lumbini",
      monthlyRent: {
        studio: 10000,
        oneBedroom: 15000,
        twoBedroom: 24000,
        threeBedroom: 40000
      },
      utilities: {
        basic: 2800,
        internet: 1800,
        mobilePlan: 500
      },
      food: {
        groceriesMonthly: 5500,
        restaurantMeal: 180,
        coffee: 70,
        waterBottle: 12
      },
      transportation: {
        monthlyPass: 500,
        taxiStart: 60,
        gasPerLiter: 150
      },
      lifestyle: {
        fitnessMembership: 1200,
        cinemaTicket: 120,
        beerAtBar: 180
      },
      summary: {
        budgetTraveler: 18000,
        digitalNomad: 35000,
        expatFamily: 70000
      },
      notes: "Birthplace of Buddha, pilgrimage site, very peaceful and spiritual atmosphere"
    },
    "Nagarkot": {
      city: "Nagarkot",
      monthlyRent: {
        studio: 18000,
        oneBedroom: 25000,
        twoBedroom: 40000,
        threeBedroom: 65000
      },
      utilities: {
        basic: 3800,
        internet: 2000,
        mobilePlan: 500
      },
      food: {
        groceriesMonthly: 7500,
        restaurantMeal: 350,
        coffee: 150,
        waterBottle: 25
      },
      transportation: {
        monthlyPass: 1000,
        taxiStart: 120,
        gasPerLiter: 155
      },
      lifestyle: {
        fitnessMembership: 2200,
        cinemaTicket: 300,
        beerAtBar: 350
      },
      summary: {
        budgetTraveler: 28000,
        digitalNomad: 55000,
        expatFamily: 110000
      },
      notes: "Mountain viewpoint town near Kathmandu, tourist prices, spectacular Himalayan views"
    }
  },
  nationalAverage: {
    monthlyRent: {
      studio: 15000,
      oneBedroom: 22000,
      twoBedroom: 35000,
      threeBedroom: 58000
    },
    utilities: {
      basic: 3400,
      internet: 1700,
      mobilePlan: 500
    },
    food: {
      groceriesMonthly: 6800,
      restaurantMeal: 260,
      coffee: 104,
      waterBottle: 17
    },
    transportation: {
      monthlyPass: 800,
      taxiStart: 86,
      gasPerLiter: 145
    },
    lifestyle: {
      fitnessMembership: 1900,
      cinemaTicket: 204,
      beerAtBar: 256
    },
    summary: {
      budgetTraveler: 24200,
      digitalNomad: 48000,
      expatFamily: 96000
    }
  }
};