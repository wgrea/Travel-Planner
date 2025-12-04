// src/lib/data/countries/europe/western-europe/france/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const franceTransportation: TransportationCosts = {
  country: "France",
  region: "Western Europe",
  currency: "EUR",
  cities: {
    "Paris": {
      city: "Paris",
      publicTransport: {
        monthlyPass: 75,
        singleTicket: 1.9,
        dailyCap: 7.5,
        reliability: 8,
        coverage: 9,
        notes: "Extensive Metro, RER, buses, trams. Navigo card for residents/commuters"
      },
      rideSharing: {
        baseFare: 4,
        costPerKm: 1.3,
        availability: 9,
        exampleTrip: 18
      },
      taxis: {
        startFare: 7,
        costPerKm: 1.5
      },
      rentalCars: {
        economyWeekly: 280,
        compactWeekly: 380,
        insuranceDaily: 25,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 1.95,
        dieselPerLiter: 1.85
      },
      intercity: {
        tgvPer100km: 25,
        trainPer100km: 18,
        busPer100km: 10,
        domesticFlight: 100
      },
      usagePatterns: {
        tourist: 150,
        budgetTraveler: 75,
        digitalNomad: 120,
        resident: 100
      }
    },
    "Lyon": {
      city: "Lyon",
      publicTransport: {
        monthlyPass: 65,
        singleTicket: 1.9,
        dailyCap: 6,
        reliability: 8,
        coverage: 8,
        notes: "Metro, trams, buses, funiculars. TCL network efficient"
      },
      rideSharing: {
        baseFare: 3.5,
        costPerKm: 1.2,
        availability: 8,
        exampleTrip: 15
      },
      taxis: {
        startFare: 6,
        costPerKm: 1.4
      },
      rentalCars: {
        economyWeekly: 250,
        compactWeekly: 350,
        insuranceDaily: 22,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 1.9,
        dieselPerLiter: 1.8
      },
      intercity: {
        tgvPer100km: 22,
        trainPer100km: 15,
        busPer100km: 8
      },
      usagePatterns: {
        tourist: 120,
        budgetTraveler: 60,
        digitalNomad: 100,
        resident: 85
      }
    },
    "Marseille": {
      city: "Marseille",
      publicTransport: {
        monthlyPass: 55,
        singleTicket: 1.7,
        dailyCap: 5.2,
        reliability: 7,
        coverage: 7,
        notes: "Metro, trams, buses, ferries to islands"
      },
      rideSharing: {
        baseFare: 3.2,
        costPerKm: 1.1,
        availability: 8,
        exampleTrip: 12
      },
      taxis: {
        startFare: 5.5,
        costPerKm: 1.3
      },
      rentalCars: {
        economyWeekly: 230,
        compactWeekly: 330,
        insuranceDaily: 20,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 1.92,
        dieselPerLiter: 1.82
      },
      intercity: {
        tgvPer100km: 20,
        trainPer100km: 14,
        busPer100km: 7
      },
      usagePatterns: {
        tourist: 110,
        budgetTraveler: 55,
        digitalNomad: 90,
        resident: 70
      }
    },
    "Nice": {
      city: "Nice",
      publicTransport: {
        monthlyPass: 40,
        singleTicket: 1.5,
        dailyCap: 5,
        reliability: 7,
        coverage: 7,
        notes: "Trams, buses, coastal trains to Monaco/Menton"
      },
      rideSharing: {
        baseFare: 3.5,
        costPerKm: 1.3,
        availability: 8,
        exampleTrip: 16
      },
      taxis: {
        startFare: 6,
        costPerKm: 1.5
      },
      rentalCars: {
        economyWeekly: 260,
        compactWeekly: 360,
        insuranceDaily: 23,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 1.98,
        dieselPerLiter: 1.88
      },
      intercity: {
        trainPer100km: 16,
        busPer100km: 9
      },
      usagePatterns: {
        tourist: 130,
        budgetTraveler: 65,
        digitalNomad: 110,
        resident: 90
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 60,
      singleTicket: 1.8,
      dailyCap: 6,
      reliability: 7,
      coverage: 8
    },
    rideSharing: {
      baseFare: 3.6,
      costPerKm: 1.2,
      availability: 8,
      exampleTrip: 15
    },
    taxis: {
      startFare: 6,
      costPerKm: 1.4
    },
    rentalCars: {
      economyWeekly: 255,
      compactWeekly: 355,
      insuranceDaily: 23,
      fuelEfficiency: 14
    },
    fuel: {
      gasolinePerLiter: 1.94,
      dieselPerLiter: 1.84
    },
    intercity: {
      tgvPer100km: 22,
      trainPer100km: 16,
      busPer100km: 9,
      domesticFlight: 110
    },
    usagePatterns: {
      tourist: 130,
      budgetTraveler: 65,
      digitalNomad: 105,
      resident: 85
    }
  }
};