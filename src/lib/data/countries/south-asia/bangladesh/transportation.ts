// src/lib/data/countries/south-asia/bangladesh/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const bangladeshTransportation: TransportationCosts = {
  country: "Bangladesh",
  region: "South Asia",
  currency: "BDT",
  cities: {
    "Dhaka": {
      city: "Dhaka",
      publicTransport: {
        monthlyPass: 1000,
        singleTicket: 20,
        reliability: 4,
        coverage: 5,
        notes: "CNG auto-rickshaws, rickshaws, buses, app-based rides (Pathao, Uber)"
      },
      rideSharing: {
        baseFare: 60,
        costPerKm: 20,
        availability: 8,
        exampleTrip: 150
      },
      taxis: {
        startFare: 80,
        costPerKm: 25
      },
      rentalCars: {
        economyWeekly: 18000,
        compactWeekly: 25000,
        insuranceDaily: 500,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 110,
        dieselPerLiter: 95
      },
      intercity: {
        trainPer100km: 200,
        busPer100km: 150,
        domesticFlight: 5000
      },
      usagePatterns: {
        tourist: 2500,
        budgetTraveler: 1200,
        digitalNomad: 2000,
        resident: 1800
      }
    },
    "Chittagong": {
      city: "Chittagong",
      publicTransport: {
        monthlyPass: 800,
        singleTicket: 15,
        reliability: 4,
        coverage: 4,
        notes: "Auto-rickshaws, CNGs, local buses, app-based rides available"
      },
      rideSharing: {
        baseFare: 55,
        costPerKm: 18,
        availability: 7,
        exampleTrip: 120
      },
      taxis: {
        startFare: 70,
        costPerKm: 22
      },
      rentalCars: {
        economyWeekly: 16000,
        compactWeekly: 22000,
        insuranceDaily: 450,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 112,
        dieselPerLiter: 96
      },
      intercity: {
        trainPer100km: 180,
        busPer100km: 130
      },
      usagePatterns: {
        tourist: 2000,
        budgetTraveler: 1000,
        digitalNomad: 1600,
        resident: 1400
      }
    },
    "Sylhet": {
      city: "Sylhet",
      publicTransport: {
        monthlyPass: 600,
        singleTicket: 12,
        reliability: 4,
        coverage: 3,
        notes: "Smaller city, walking possible in center, auto-rickshaws main transport"
      },
      rideSharing: {
        baseFare: 50,
        costPerKm: 16,
        availability: 6,
        exampleTrip: 100
      },
      taxis: {
        startFare: 65,
        costPerKm: 20
      },
      rentalCars: {
        economyWeekly: 15000,
        compactWeekly: 20000,
        insuranceDaily: 400,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 115,
        dieselPerLiter: 98
      },
      intercity: {
        trainPer100km: 200,
        busPer100km: 140
      },
      usagePatterns: {
        tourist: 1500,
        budgetTraveler: 800,
        digitalNomad: 1200,
        resident: 1000
      }
    },
    "Cox's Bazar": {
      city: "Cox's Bazar",
      publicTransport: {
        monthlyPass: 500,
        singleTicket: 10,
        reliability: 3,
        coverage: 2,
        notes: "Beach town, walking on beach road, auto-rickshaws and motorcycles"
      },
      rideSharing: {
        baseFare: 70,
        costPerKm: 22,
        availability: 5,
        exampleTrip: 200
      },
      taxis: {
        startFare: 90,
        costPerKm: 28
      },
      rentalCars: {
        economyWeekly: 17000,
        compactWeekly: 23000,
        insuranceDaily: 500,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 118,
        dieselPerLiter: 100
      },
      intercity: {
        busPer100km: 160
      },
      usagePatterns: {
        tourist: 1800,
        budgetTraveler: 900,
        digitalNomad: 1400,
        resident: 1200
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 700,
      singleTicket: 15,
      reliability: 4,
      coverage: 4
    },
    rideSharing: {
      baseFare: 60,
      costPerKm: 19,
      availability: 7,
      exampleTrip: 140
    },
    taxis: {
      startFare: 75,
      costPerKm: 24
    },
    rentalCars: {
      economyWeekly: 16500,
      compactWeekly: 22500,
      insuranceDaily: 460,
      fuelEfficiency: 13
    },
    fuel: {
      gasolinePerLiter: 114,
      dieselPerLiter: 97
    },
    intercity: {
      trainPer100km: 190,
      busPer100km: 145,
      domesticFlight: 6000
    },
    usagePatterns: {
      tourist: 2000,
      budgetTraveler: 1000,
      digitalNomad: 1600,
      resident: 1400
    }
  }
};