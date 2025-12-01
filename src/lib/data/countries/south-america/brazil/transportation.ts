// src/lib/data/countries/south-america/brazil/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const brazilTransportation: TransportationCosts = {
  country: "Brazil",
  region: "South America",
  currency: "BRL",
  cities: {
    "Rio de Janeiro": {
      city: "Rio de Janeiro",
      publicTransport: {
        monthlyPass: 260,  // ~$52 USD
        singleTicket: 4.8,
        dailyCap: 9.6,
        reliability: 6,
        coverage: 6,
        notes: "Metrô Rio (subway), VLT light rail, and extensive bus network"
      },
      rideSharing: {
        baseFare: 6.5,
        costPerKm: 2.5,
        availability: 9,
        exampleTrip: 25
      },
      taxis: {
        startFare: 5.8,
        costPerKm: 3.8
      },
      rentalCars: {
        economyWeekly: 600,
        compactWeekly: 800,
        insuranceDaily: 35,
        fuelEfficiency: 12  // Km per liter, affected by hills and traffic
      },
      fuel: {
        gasolinePerLiter: 6.2,
        dieselPerLiter: 5.8
      },
      intercity: {
        trainPer100km: 45,
        busPer100km: 35,
        domesticFlight: 300
      },
      usagePatterns: {
        tourist: 450,
        budgetTraveler: 200,
        digitalNomad: 350,
        resident: 300
      }
    },
    "São Paulo": {
      city: "São Paulo",
      publicTransport: {
        monthlyPass: 280,  // ~$56 USD
        singleTicket: 5,
        dailyCap: 10,
        reliability: 7,
        coverage: 7,
        notes: "Extensive metro, CPTM trains, and bus system. Avoid rush hours"
      },
      rideSharing: {
        baseFare: 7,
        costPerKm: 2.8,
        availability: 10,
        exampleTrip: 30
      },
      taxis: {
        startFare: 6.2,
        costPerKm: 4.2
      },
      rentalCars: {
        economyWeekly: 650,
        compactWeekly: 850,
        insuranceDaily: 40,
        fuelEfficiency: 10  // Very low due to heavy traffic
      },
      fuel: {
        gasolinePerLiter: 6.3,
        dieselPerLiter: 5.9
      },
      intercity: {
        trainPer100km: 50,
        busPer100km: 40,
        domesticFlight: 320
      },
      usagePatterns: {
        tourist: 500,
        budgetTraveler: 250,
        digitalNomad: 400,
        resident: 350
      }
    },
    "Florianópolis": {
      city: "Florianópolis",
      publicTransport: {
        monthlyPass: 180,  // ~$36 USD
        singleTicket: 4,
        dailyCap: 8,
        reliability: 5,
        coverage: 4,
        notes: "Limited bus system, scooter/rental car recommended for island exploration"
      },
      rideSharing: {
        baseFare: 6,
        costPerKm: 2.3,
        availability: 8,
        exampleTrip: 22
      },
      taxis: {
        startFare: 5.5,
        costPerKm: 3.5
      },
      rentalCars: {
        economyWeekly: 550,
        compactWeekly: 700,
        insuranceDaily: 30,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 6.1,
        dieselPerLiter: 5.7
      },
      intercity: {
        busPer100km: 38,
        domesticFlight: 280
      },
      usagePatterns: {
        tourist: 380,
        budgetTraveler: 180,
        digitalNomad: 300,
        resident: 250
      }
    },
    "Salvador": {
      city: "Salvador",
      publicTransport: {
        monthlyPass: 200,  // ~$40 USD
        singleTicket: 4.2,
        dailyCap: 8.4,
        reliability: 5,
        coverage: 5,
        notes: "Bus system and limited subway (two lines)"
      },
      rideSharing: {
        baseFare: 5.8,
        costPerKm: 2.2,
        availability: 7,
        exampleTrip: 20
      },
      taxis: {
        startFare: 5.3,
        costPerKm: 3.3
      },
      rentalCars: {
        economyWeekly: 520,
        compactWeekly: 680,
        insuranceDaily: 28,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 6.2,
        dieselPerLiter: 5.8
      },
      intercity: {
        busPer100km: 36,
        domesticFlight: 290
      },
      usagePatterns: {
        tourist: 350,
        budgetTraveler: 170,
        digitalNomad: 280,
        resident: 230
      }
    },
    "Belo Horizonte": {
      city: "Belo Horizonte",
      publicTransport: {
        monthlyPass: 220,  // ~$44 USD
        singleTicket: 4.5,
        dailyCap: 9,
        reliability: 6,
        coverage: 6,
        notes: "Bus system with integrated MOVE system, limited subway"
      },
      rideSharing: {
        baseFare: 6.2,
        costPerKm: 2.4,
        availability: 8,
        exampleTrip: 24
      },
      taxis: {
        startFare: 5.6,
        costPerKm: 3.6
      },
      rentalCars: {
        economyWeekly: 580,
        compactWeekly: 750,
        insuranceDaily: 32,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 6.15,
        dieselPerLiter: 5.75
      },
      intercity: {
        trainPer100km: 42,
        busPer100km: 37,
        domesticFlight: 310
      },
      usagePatterns: {
        tourist: 400,
        budgetTraveler: 190,
        digitalNomad: 320,
        resident: 270
      }
    },
    "Fortaleza": {
      city: "Fortaleza",
      publicTransport: {
        monthlyPass: 190,  // ~$38 USD
        singleTicket: 4.1,
        dailyCap: 8.2,
        reliability: 5,
        coverage: 5,
        notes: "Bus system and VLT (light rail) in development"
      },
      rideSharing: {
        baseFare: 5.9,
        costPerKm: 2.2,
        availability: 7,
        exampleTrip: 21
      },
      taxis: {
        startFare: 5.4,
        costPerKm: 3.4
      },
      rentalCars: {
        economyWeekly: 530,
        compactWeekly: 690,
        insuranceDaily: 29,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 6.18,
        dieselPerLiter: 5.78
      },
      intercity: {
        busPer100km: 35,
        domesticFlight: 295
      },
      usagePatterns: {
        tourist: 370,
        budgetTraveler: 175,
        digitalNomad: 290,
        resident: 240
      }
    },
    "Brasília": {
      city: "Brasília",
      publicTransport: {
        monthlyPass: 240,  // ~$48 USD
        singleTicket: 4.7,
        dailyCap: 9.4,
        reliability: 6,
        coverage: 5,
        notes: "Designed for cars, limited public transport, metro covers main axis"
      },
      rideSharing: {
        baseFare: 6.8,
        costPerKm: 2.7,
        availability: 8,
        exampleTrip: 28
      },
      taxis: {
        startFare: 6,
        costPerKm: 4
      },
      rentalCars: {
        economyWeekly: 620,
        compactWeekly: 820,
        insuranceDaily: 38,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 6.25,
        dieselPerLiter: 5.85
      },
      intercity: {
        busPer100km: 42,
        domesticFlight: 330
      },
      usagePatterns: {
        tourist: 420,
        budgetTraveler: 210,
        digitalNomad: 340,
        resident: 290
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 230,
      singleTicket: 4.5,
      dailyCap: 9,
      reliability: 6,
      coverage: 5
    },
    rideSharing: {
      baseFare: 6.3,
      costPerKm: 2.4,
      availability: 8,
      exampleTrip: 25
    },
    taxis: {
      startFare: 5.7,
      costPerKm: 3.7
    },
    rentalCars: {
      economyWeekly: 580,
      compactWeekly: 760,
      insuranceDaily: 33,
      fuelEfficiency: 12
    },
    fuel: {
      gasolinePerLiter: 6.2,
      dieselPerLiter: 5.8
    },
    intercity: {
      trainPer100km: 45,
      busPer100km: 38,
      domesticFlight: 305
    },
    usagePatterns: {
      tourist: 400,
      budgetTraveler: 195,
      digitalNomad: 320,
      resident: 270
    }
  }
};