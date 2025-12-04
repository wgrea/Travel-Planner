// src/lib/data/countries/europe/western-europe/france/living-costs.ts
import type { LivingCosts } from '$lib/types/livingCosts';

export const franceLivingCosts: LivingCosts = {
  country: "France",
  region: "Western Europe",
  currency: "EUR",
  cities: {
    "Paris": {
      city: "Paris",
      monthlyRent: {
        studio: 900,
        oneBedroom: 1200,
        twoBedroom: 1800,
        threeBedroom: 2500
      },
      utilities: {
        basic: 180,
        internet: 35,
        mobilePlan: 20
      },
      food: {
        groceriesMonthly: 350,
        restaurantMeal: 20,
        coffee: 3.5,
        waterBottle: 1.5
      },
      transportation: {
        monthlyPass: 75,
        taxiStart: 7,
        gasPerLiter: 1.9
      },
      lifestyle: {
        fitnessMembership: 60,
        cinemaTicket: 12,
        beerAtBar: 7
      },
      summary: {
        budgetTraveler: 1500,
        digitalNomad: 2200,
        expatFamily: 4000
      },
      notes: "Arrondissements vary greatly in price. 1st-8th most expensive, 11th-20th more affordable"
    },
    "Lyon": {
      city: "Lyon",
      monthlyRent: {
        studio: 600,
        oneBedroom: 800,
        twoBedroom: 1200,
        threeBedroom: 1700
      },
      utilities: {
        basic: 150,
        internet: 30,
        mobilePlan: 18
      },
      food: {
        groceriesMonthly: 300,
        restaurantMeal: 18,
        coffee: 3,
        waterBottle: 1.2
      },
      transportation: {
        monthlyPass: 65,
        taxiStart: 6,
        gasPerLiter: 1.85
      },
      lifestyle: {
        fitnessMembership: 45,
        cinemaTicket: 10,
        beerAtBar: 5
      },
      summary: {
        budgetTraveler: 1200,
        digitalNomad: 1800,
        expatFamily: 3200
      },
      notes: "Gastronomic capital, Presqu'île most expensive, Croix-Rousse more bohemian/affordable"
    },
    "Marseille": {
      city: "Marseille",
      monthlyRent: {
        studio: 550,
        oneBedroom: 700,
        twoBedroom: 1000,
        threeBedroom: 1500
      },
      utilities: {
        basic: 140,
        internet: 30,
        mobilePlan: 17
      },
      food: {
        groceriesMonthly: 280,
        restaurantMeal: 16,
        coffee: 2.8,
        waterBottle: 1
      },
      transportation: {
        monthlyPass: 55,
        taxiStart: 5.5,
        gasPerLiter: 1.85
      },
      lifestyle: {
        fitnessMembership: 40,
        cinemaTicket: 9,
        beerAtBar: 4.5
      },
      summary: {
        budgetTraveler: 1000,
        digitalNomad: 1600,
        expatFamily: 2800
      },
      notes: "Mediterranean port city, Vieux-Port area expensive, northern neighborhoods more affordable"
    },
    "Nice": {
      city: "Nice",
      monthlyRent: {
        studio: 650,
        oneBedroom: 850,
        twoBedroom: 1300,
        threeBedroom: 1900
      },
      utilities: {
        basic: 160,
        internet: 32,
        mobilePlan: 18
      },
      food: {
        groceriesMonthly: 320,
        restaurantMeal: 22,
        coffee: 3.2,
        waterBottle: 1.3
      },
      transportation: {
        monthlyPass: 40,
        taxiStart: 6,
        gasPerLiter: 1.9
      },
      lifestyle: {
        fitnessMembership: 50,
        cinemaTicket: 10,
        beerAtBar: 6
      },
      summary: {
        budgetTraveler: 1300,
        digitalNomad: 1900,
        expatFamily: 3500
      },
      notes: "Côte d'Azur resort city, Promenade des Anglais area premium, Liberation more local/affordable"
    },
    "Toulouse": {
      city: "Toulouse",
      monthlyRent: {
        studio: 550,
        oneBedroom: 750,
        twoBedroom: 1100,
        threeBedroom: 1600
      },
      utilities: {
        basic: 145,
        internet: 30,
        mobilePlan: 17
      },
      food: {
        groceriesMonthly: 290,
        restaurantMeal: 17,
        coffee: 2.9,
        waterBottle: 1.1
      },
      transportation: {
        monthlyPass: 50,
        taxiStart: 5.5,
        gasPerLiter: 1.84
      },
      lifestyle: {
        fitnessMembership: 42,
        cinemaTicket: 9.5,
        beerAtBar: 4.8
      },
      summary: {
        budgetTraveler: 1100,
        digitalNomad: 1700,
        expatFamily: 3000
      },
      notes: "Aerospace hub, Capitole area central/expensive, Saint-Cyprien across river more affordable"
    },
    "Bordeaux": {
      city: "Bordeaux",
      monthlyRent: {
        studio: 600,
        oneBedroom: 800,
        twoBedroom: 1200,
        threeBedroom: 1800
      },
      utilities: {
        basic: 155,
        internet: 31,
        mobilePlan: 18
      },
      food: {
        groceriesMonthly: 310,
        restaurantMeal: 19,
        coffee: 3.1,
        waterBottle: 1.2
      },
      transportation: {
        monthlyPass: 48,
        taxiStart: 5.8,
        gasPerLiter: 1.86
      },
      lifestyle: {
        fitnessMembership: 44,
        cinemaTicket: 9.8,
        beerAtBar: 5
      },
      summary: {
        budgetTraveler: 1150,
        digitalNomad: 1750,
        expatFamily: 3200
      },
      notes: "Wine capital, historic center premium, Bastide across river emerging/affordable"
    }
  },
  nationalAverage: {
    monthlyRent: {
      studio: 650,
      oneBedroom: 850,
      twoBedroom: 1250,
      threeBedroom: 1850
    },
    utilities: {
      basic: 155,
      internet: 31,
      mobilePlan: 18
    },
    food: {
      groceriesMonthly: 310,
      restaurantMeal: 18,
      coffee: 3.1,
      waterBottle: 1.2
    },
    transportation: {
      monthlyPass: 55,
      taxiStart: 6,
      gasPerLiter: 1.87
    },
    lifestyle: {
      fitnessMembership: 47,
      cinemaTicket: 10,
      beerAtBar: 5.4
    },
    summary: {
      budgetTraveler: 1200,
      digitalNomad: 1800,
      expatFamily: 3300
    }
  }
};