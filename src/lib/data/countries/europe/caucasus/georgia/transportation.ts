// src/lib/data/countries/europe/caucasus/georgia/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const georgiaTransportation: TransportationCosts = {
  country: "Georgia",
  region: "Europe",
  currency: "GEL",
  cities: {
    "Tbilisi": {
      city: "Tbilisi",
      publicTransport: {
        monthlyPass: 40,
        singleTicket: 1,
        dailyCap: 3,
        reliability: 6,
        coverage: 6,
        notes: "Metro, buses, and minibuses (marshrutkas). Use Metromoney card"
      },
      rideSharing: {
        baseFare: 3,
        costPerKm: 0.50,
        availability: 8,
        exampleTrip: 8
      },
      taxis: {
        startFare: 3,
        costPerKm: 0.70
      },
      rentalCars: {
        economyWeekly: 350,
        compactWeekly: 450,
        insuranceDaily: 25,
        fuelEfficiency: 12  // Hilly city driving
      },
      fuel: {
        gasolinePerLiter: 3.20,  // AI-95
        dieselPerLiter: 3.00
      },
      intercity: {
        trainPer100km: 10,
        busPer100km: 8,
        domesticFlight: 80
      },
      usagePatterns: {
        tourist: 200,
        budgetTraveler: 60,
        digitalNomad: 120,
        resident: 90
      }
    },
    "Batumi": {
      city: "Batumi",
      publicTransport: {
        monthlyPass: 25,
        singleTicket: 0.60,
        reliability: 5,
        coverage: 5,
        notes: "Buses and marshutkas, walking along seaside boulevard"
      },
      rideSharing: {
        baseFare: 2.50,
        costPerKm: 0.45,
        availability: 7,
        exampleTrip: 6
      },
      taxis: {
        startFare: 2,
        costPerKm: 0.60
      },
      rentalCars: {
        economyWeekly: 300,
        compactWeekly: 400,
        insuranceDaily: 22,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 3.25
      },
      intercity: {
        trainPer100km: 8,
        busPer100km: 6
      },
      usagePatterns: {
        tourist: 180,
        budgetTraveler: 55,
        digitalNomad: 110,
        resident: 80
      }
    },
    "Kutaisi": {
      city: "Kutaisi",
      publicTransport: {
        monthlyPass: 20,
        singleTicket: 0.50,
        reliability: 4,
        coverage: 4,
        notes: "Limited bus network, mostly marshrutkas"
      },
      rideSharing: {
        baseFare: 2,
        costPerKm: 0.40,
        availability: 6,
        exampleTrip: 5
      },
      taxis: {
        startFare: 1.50,
        costPerKm: 0.50
      },
      rentalCars: {
        economyWeekly: 280,
        compactWeekly: 380,
        insuranceDaily: 20,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 3.15
      },
      intercity: {
        busPer100km: 7
      },
      usagePatterns: {
        tourist: 150,
        budgetTraveler: 50,
        digitalNomad: 90,
        resident: 70
      }
    },
    "Mestia": {
      city: "Mestia",
      publicTransport: {
        monthlyPass: 0,
        singleTicket: 0,
        reliability: 2,
        coverage: 1,
        notes: "Remote mountain town, 4x4 vehicles needed for exploration"
      },
      rideSharing: {
        baseFare: 0,  // Nonexistent
        costPerKm: 0,
        availability: 1,
        exampleTrip: 0
      },
      taxis: {
        startFare: 5,
        costPerKm: 1
      },
      rentalCars: {
        economyWeekly: 500,
        compactWeekly: 600,
        insuranceDaily: 35,
        fuelEfficiency: 10  // Mountain roads
      },
      fuel: {
        gasolinePerLiter: 3.50  // Higher in remote areas
      },
      intercity: {},
      usagePatterns: {
        tourist: 250,
        budgetTraveler: 100,
        digitalNomad: 0,  // Rare for digital nomads
        resident: 150
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 30,
      singleTicket: 0.70,
      dailyCap: 3,
      reliability: 5,
      coverage: 4
    },
    rideSharing: {
      baseFare: 2.50,
      costPerKm: 0.45,
      availability: 6,
      exampleTrip: 6
    },
    taxis: {
      startFare: 2.50,
      costPerKm: 0.60
    },
    rentalCars: {
      economyWeekly: 330,
      compactWeekly: 430,
      insuranceDaily: 24,
      fuelEfficiency: 13
    },
    fuel: {
      gasolinePerLiter: 3.25,
      dieselPerLiter: 3.00
    },
    intercity: {
      trainPer100km: 9,
      busPer100km: 7,
      domesticFlight: 80
    },
    usagePatterns: {
      tourist: 180,
      budgetTraveler: 60,
      digitalNomad: 100,
      resident: 75
    }
  }
};