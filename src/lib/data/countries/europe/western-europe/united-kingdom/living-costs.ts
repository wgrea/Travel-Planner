import type { LivingCosts } from '$lib/types/livingCosts';

export const ukLivingCosts: LivingCosts = {
  country: "United Kingdom",
  region: "Western Europe",
  currency: "GBP (£)",
  cities: {
    "London": {
      city: "London",
      monthlyRent: {
        studio: 1200,
        oneBedroom: 1600,
        twoBedroom: 2200,
        threeBedroom: 3000
      },
      utilities: {
        basic: 200,
        internet: 40,
        mobilePlan: 20
      },
      food: {
        groceriesMonthly: 300,
        restaurantMeal: 20,
        coffee: 3.5,
        waterBottle: 1
      },
      transportation: {
        monthlyPass: 150,
        taxiStart: 3.5,
        gasPerLiter: 1.6
      },
      lifestyle: {
        fitnessMembership: 60,
        cinemaTicket: 12,
        beerAtBar: 6
      },
      summary: {
        budgetTraveler: 1500,
        digitalNomad: 2500,
        expatFamily: 4000
      },
      notes: "Zones 1-2 most expensive, Zones 3-6 more affordable. East London (Shoreditch, Hackney) popular with digital nomads"
    },
    "Manchester": {
      city: "Manchester",
      monthlyRent: {
        studio: 700,
        oneBedroom: 900,
        twoBedroom: 1300,
        threeBedroom: 1800
      },
      utilities: {
        basic: 150,
        internet: 35,
        mobilePlan: 18
      },
      food: {
        groceriesMonthly: 250,
        restaurantMeal: 15,
        coffee: 3,
        waterBottle: 0.8
      },
      transportation: {
        monthlyPass: 80,
        taxiStart: 3,
        gasPerLiter: 1.55
      },
      lifestyle: {
        fitnessMembership: 40,
        cinemaTicket: 10,
        beerAtBar: 4.5
      },
      summary: {
        budgetTraveler: 1000,
        digitalNomad: 1800,
        expatFamily: 2800
      },
      notes: "Northern Quarter creative hub, Spinningfields business district, suburbs more affordable. Growing tech scene"
    },
    "Edinburgh": {
      city: "Edinburgh",
      monthlyRent: {
        studio: 750,
        oneBedroom: 950,
        twoBedroom: 1400,
        threeBedroom: 1900
      },
      utilities: {
        basic: 160,
        internet: 35,
        mobilePlan: 18
      },
      food: {
        groceriesMonthly: 260,
        restaurantMeal: 16,
        coffee: 3.2,
        waterBottle: 0.8
      },
      transportation: {
        monthlyPass: 60,
        taxiStart: 3.2,
        gasPerLiter: 1.58
      },
      lifestyle: {
        fitnessMembership: 42,
        cinemaTicket: 10.5,
        beerAtBar: 5
      },
      summary: {
        budgetTraveler: 1100,
        digitalNomad: 1900,
        expatFamily: 2900
      },
      notes: "Historic Old Town expensive, Leith more affordable. Festival period (Aug) prices skyrocket"
    },
    "Bristol": {
      city: "Bristol",
      monthlyRent: {
        studio: 800,
        oneBedroom: 1000,
        twoBedroom: 1500,
        threeBedroom: 2100
      },
      utilities: {
        basic: 155,
        internet: 35,
        mobilePlan: 18
      },
      food: {
        groceriesMonthly: 270,
        restaurantMeal: 17,
        coffee: 3.3,
        waterBottle: 0.9
      },
      transportation: {
        monthlyPass: 70,
        taxiStart: 3.3,
        gasPerLiter: 1.57
      },
      lifestyle: {
        fitnessMembership: 44,
        cinemaTicket: 11,
        beerAtBar: 5.2
      },
      summary: {
        budgetTraveler: 1150,
        digitalNomad: 2000,
        expatFamily: 3000
      },
      notes: "Creative and tech hub, Clifton upscale, Stokes Croft alternative/artsy. Strong startup ecosystem"
    },
    "Birmingham": {
      city: "Birmingham",
      monthlyRent: {
        studio: 650,
        oneBedroom: 800,
        twoBedroom: 1200,
        threeBedroom: 1700
      },
      utilities: {
        basic: 145,
        internet: 35,
        mobilePlan: 18
      },
      food: {
        groceriesMonthly: 240,
        restaurantMeal: 14,
        coffee: 2.9,
        waterBottle: 0.7
      },
      transportation: {
        monthlyPass: 75,
        taxiStart: 2.8,
        gasPerLiter: 1.56
      },
      lifestyle: {
        fitnessMembership: 38,
        cinemaTicket: 9.5,
        beerAtBar: 4
      },
      summary: {
        budgetTraveler: 950,
        digitalNomad: 1700,
        expatFamily: 2600
      },
      notes: "UK's second city, Jewellery Quarter trendy, Digbeth creative district. More affordable than London"
    },
    "Glasgow": {
      city: "Glasgow",
      monthlyRent: {
        studio: 600,
        oneBedroom: 750,
        twoBedroom: 1100,
        threeBedroom: 1600
      },
      utilities: {
        basic: 140,
        internet: 35,
        mobilePlan: 18
      },
      food: {
        groceriesMonthly: 230,
        restaurantMeal: 13,
        coffee: 2.8,
        waterBottle: 0.7
      },
      transportation: {
        monthlyPass: 55,
        taxiStart: 2.7,
        gasPerLiter: 1.57
      },
      lifestyle: {
        fitnessMembership: 35,
        cinemaTicket: 9,
        beerAtBar: 3.8
      },
      summary: {
        budgetTraveler: 900,
        digitalNomad: 1600,
        expatFamily: 2500
      },
      notes: "West End trendy/expensive, Southside more affordable. Friendly atmosphere, strong arts scene"
    }
  },
  nationalAverage: {
    monthlyRent: {
      studio: 780,
      oneBedroom: 1000,
      twoBedroom: 1450,
      threeBedroom: 2000
    },
    utilities: {
      basic: 158,
      internet: 36,
      mobilePlan: 18
    },
    food: {
      groceriesMonthly: 258,
      restaurantMeal: 16,
      coffee: 3.1,
      waterBottle: 0.8
    },
    transportation: {
      monthlyPass: 82,
      taxiStart: 3.1,
      gasPerLiter: 1.57
    },
    lifestyle: {
      fitnessMembership: 43,
      cinemaTicket: 10.5,
      beerAtBar: 4.9
    },
    summary: {
      budgetTraveler: 1100,
      digitalNomad: 1900,
      expatFamily: 2800
    }
  }
};