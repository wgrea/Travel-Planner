// src/lib/data/countries/middle-east/morocco/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const moroccoTransportation: TransportationCosts = {
  country: "Morocco",
  region: "North Africa",
  currency: "MAD",
  cities: {
    "Marrakech": {
      city: "Marrakech",
      publicTransport: {
        monthlyPass: 300,
        singleTicket: 4,
        reliability: 6,
        coverage: 5,
        notes: "City buses, horse carriages (calèches), taxis, app-based rides rare"
      },
      rideSharing: {
        baseFare: 10,
        costPerKm: 4,
        availability: 4,
        exampleTrip: 30
      },
      taxis: {
        startFare: 8,
        costPerKm: 3.5
      },
      rentalCars: {
        economyWeekly: 2000,
        compactWeekly: 2800,
        insuranceDaily: 150,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 12,
        dieselPerLiter: 10
      },
      intercity: {
        trainPer100km: 80,
        busPer100km: 60,
        domesticFlight: 800
      },
      usagePatterns: {
        tourist: 500,
        budgetTraveler: 250,
        digitalNomad: 400,
        resident: 350
      }
    },
    "Casablanca": {
      city: "Casablanca",
      publicTransport: {
        monthlyPass: 350,
        singleTicket: 5,
        reliability: 7,
        coverage: 7,
        notes: "Tram system, buses, trains, taxis. Best public transport in Morocco"
      },
      rideSharing: {
        baseFare: 12,
        costPerKm: 5,
        availability: 6,
        exampleTrip: 35
      },
      taxis: {
        startFare: 10,
        costPerKm: 4
      },
      rentalCars: {
        economyWeekly: 2200,
        compactWeekly: 3000,
        insuranceDaily: 180,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 12,
        dieselPerLiter: 10
      },
      intercity: {
        trainPer100km: 70,
        busPer100km: 55,
        domesticFlight: 700
      },
      usagePatterns: {
        tourist: 600,
        budgetTraveler: 300,
        digitalNomad: 500,
        resident: 450
      }
    },
    "Fes": {
      city: "Fes",
      publicTransport: {
        monthlyPass: 250,
        singleTicket: 3,
        reliability: 5,
        coverage: 4,
        notes: "Buses, taxis, walking in medina. Limited modern transport"
      },
      rideSharing: {
        baseFare: 9,
        costPerKm: 3.5,
        availability: 4,
        exampleTrip: 25
      },
      taxis: {
        startFare: 7,
        costPerKm: 3
      },
      rentalCars: {
        economyWeekly: 1800,
        compactWeekly: 2500,
        insuranceDaily: 130,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 12.5,
        dieselPerLiter: 10.5
      },
      intercity: {
        trainPer100km: 85,
        busPer100km: 65
      },
      usagePatterns: {
        tourist: 400,
        budgetTraveler: 200,
        digitalNomad: 350,
        resident: 300
      }
    },
    "Tangier": {
      city: "Tangier",
      publicTransport: {
        monthlyPass: 280,
        singleTicket: 4,
        reliability: 6,
        coverage: 5,
        notes: "Buses, taxis, ferries to Spain, growing transport options"
      },
      rideSharing: {
        baseFare: 11,
        costPerKm: 4.5,
        availability: 5,
        exampleTrip: 32
      },
      taxis: {
        startFare: 9,
        costPerKm: 3.8
      },
      rentalCars: {
        economyWeekly: 1900,
        compactWeekly: 2700,
        insuranceDaily: 140,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 12,
        dieselPerLiter: 10
      },
      intercity: {
        trainPer100km: 75,
        busPer100km: 58,
        domesticFlight: 750
      },
      usagePatterns: {
        tourist: 450,
        budgetTraveler: 225,
        digitalNomad: 380,
        resident: 320
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 300,
      singleTicket: 4,
      reliability: 6,
      coverage: 5
    },
    rideSharing: {
      baseFare: 11,
      costPerKm: 4,
      availability: 5,
      exampleTrip: 30
    },
    taxis: {
      startFare: 9,
      costPerKm: 3.8
    },
    rentalCars: {
      economyWeekly: 2000,
      compactWeekly: 2800,
      insuranceDaily: 150,
      fuelEfficiency: 14
    },
    fuel: {
      gasolinePerLiter: 12,
      dieselPerLiter: 10
    },
    intercity: {
      trainPer100km: 78,
      busPer100km: 60,
      domesticFlight: 750
    },
    usagePatterns: {
      tourist: 490,
      budgetTraveler: 245,
      digitalNomad: 410,
      resident: 355
    }
  }
};