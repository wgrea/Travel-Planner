// src/lib/data/countries/north-america/mexico/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const mexicoTransportation: TransportationCosts = {
  country: "Mexico",
  region: "North America",
  currency: "MXN",
  cities: {
    "Mexico City": {
      city: "Mexico City",
      publicTransport: {
        monthlyPass: 300,
        singleTicket: 5,
        dailyCap: 30,
        reliability: 6,
        coverage: 7,
        notes: "Extensive metro (5 pesos per ride), buses, and Metrobús"
      },
      rideSharing: {
        baseFare: 25,
        costPerKm: 6,
        availability: 9,
        exampleTrip: 80
      },
      taxis: {
        startFare: 8.74,  // Tarifa inicial
        costPerKm: 11.82
      },
      rentalCars: {
        economyWeekly: 1500,
        compactWeekly: 2000,
        insuranceDaily: 150,
        fuelEfficiency: 12  // Heavy traffic
      },
      fuel: {
        gasolinePerLiter: 23.50  // Premium 92 octane
      },
      intercity: {
        busPer100km: 150,
        domesticFlight: 1200
      },
      usagePatterns: {
        tourist: 2000,
        budgetTraveler: 800,
        digitalNomad: 1500,
        resident: 1200
      }
    },
    "Cancún": {
      city: "Cancún",
      publicTransport: {
        monthlyPass: 600,  // Mainly for residents
        singleTicket: 12,
        reliability: 5,
        coverage: 4,
        notes: "Bus system along hotel zone, expensive for tourists"
      },
      rideSharing: {
        baseFare: 30,
        costPerKm: 7,
        availability: 8,
        exampleTrip: 100
      },
      taxis: {
        startFare: 50,  // Tourist zone premium
        costPerKm: 15
      },
      rentalCars: {
        economyWeekly: 1200,
        compactWeekly: 1700,
        insuranceDaily: 120,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 24.00  // Slightly higher in tourist zones
      },
      intercity: {
        busPer100km: 200
      },
      usagePatterns: {
        tourist: 3500,
        budgetTraveler: 1500,
        digitalNomad: 2500,
        resident: 1800
      }
    },
    "Guadalajara": {
      city: "Guadalajara",
      publicTransport: {
        monthlyPass: 280,
        singleTicket: 9.50,
        reliability: 5,
        coverage: 5,
        notes: "Macrobús BRT system and traditional buses"
      },
      rideSharing: {
        baseFare: 20,
        costPerKm: 5.50,
        availability: 7,
        exampleTrip: 65
      },
      taxis: {
        startFare: 10,
        costPerKm: 10
      },
      rentalCars: {
        economyWeekly: 1400,
        compactWeekly: 1900,
        insuranceDaily: 140,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 23.40
      },
      intercity: {
        busPer100km: 130
      },
      usagePatterns: {
        tourist: 1500,
        budgetTraveler: 700,
        digitalNomad: 1200,
        resident: 1000
      }
    },
    "Oaxaca City": {
      city: "Oaxaca City",
      publicTransport: {
        monthlyPass: 200,
        singleTicket: 8,
        reliability: 4,
        coverage: 3,
        notes: "Local buses and colectivos (shared vans)"
      },
      rideSharing: {
        baseFare: 15,
        costPerKm: 5,
        availability: 5,
        exampleTrip: 50
      },
      taxis: {
        startFare: 20,
        costPerKm: 8
      },
      rentalCars: {
        economyWeekly: 1300,
        compactWeekly: 1800,
        insuranceDaily: 130,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 23.60
      },
      intercity: {
        busPer100km: 120
      },
      usagePatterns: {
        tourist: 1200,
        budgetTraveler: 600,
        digitalNomad: 1000,
        resident: 800
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 350,
      singleTicket: 8,
      dailyCap: 30,
      reliability: 5,
      coverage: 5,
      notes: "Varies greatly by region; metro in major cities, buses everywhere"
    },
    rideSharing: {
      baseFare: 22,
      costPerKm: 6,
      availability: 7,
      exampleTrip: 75
    },
    taxis: {
      startFare: 22,
      costPerKm: 11,
      flagFall: 8.74
    },
    rentalCars: {
      economyWeekly: 1400,
      compactWeekly: 1900,
      insuranceDaily: 140,
      fuelEfficiency: 14
    },
    fuel: {
      gasolinePerLiter: 23.60
    },
    intercity: {
      trainPer100km: 0,  // Limited passenger train service
      busPer100km: 150,
      domesticFlight: 1200
    },
    usagePatterns: {
      tourist: 2200,
      budgetTraveler: 950,
      digitalNomad: 1600,
      resident: 1300
    }
  }
};