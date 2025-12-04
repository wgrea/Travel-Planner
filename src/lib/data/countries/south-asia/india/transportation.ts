// src/lib/data/countries/south-asia/india/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const indiaTransportation: TransportationCosts = {
  country: "India",
  region: "South Asia",
  currency: "INR",
  cities: {
    "Delhi": {
      city: "Delhi",
      publicTransport: {
        monthlyPass: 1500,
        singleTicket: 20,
        dailyCap: 60,
        reliability: 7,
        coverage: 8,
        notes: "Extensive Metro system, buses, auto-rickshaws, app-based taxis"
      },
      rideSharing: {
        baseFare: 50,
        costPerKm: 15,
        availability: 9,
        exampleTrip: 200
      },
      taxis: {
        startFare: 60,
        costPerKm: 18
      },
      rentalCars: {
        economyWeekly: 15000,
        compactWeekly: 20000,
        insuranceDaily: 500,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 100,
        dieselPerLiter: 90
      },
      intercity: {
        trainPer100km: 300,
        busPer100km: 200,
        domesticFlight: 3000
      },
      usagePatterns: {
        tourist: 3000,
        budgetTraveler: 1500,
        digitalNomad: 2500,
        resident: 2000
      }
    },
    "Mumbai": {
      city: "Mumbai",
      publicTransport: {
        monthlyPass: 1200,
        singleTicket: 15,
        dailyCap: 50,
        reliability: 8,
        coverage: 8,
        notes: "Local trains (lifeline of city), metro, buses, auto-rickshaws, taxis"
      },
      rideSharing: {
        baseFare: 60,
        costPerKm: 18,
        availability: 9,
        exampleTrip: 250
      },
      taxis: {
        startFare: 70,
        costPerKm: 20
      },
      rentalCars: {
        economyWeekly: 18000,
        compactWeekly: 25000,
        insuranceDaily: 600,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 105,
        dieselPerLiter: 95
      },
      intercity: {
        trainPer100km: 350,
        busPer100km: 250
      },
      usagePatterns: {
        tourist: 3500,
        budgetTraveler: 1800,
        digitalNomad: 3000,
        resident: 2500
      }
    },
    "Bangalore": {
      city: "Bangalore",
      publicTransport: {
        monthlyPass: 2000,
        singleTicket: 25,
        dailyCap: 70,
        reliability: 6,
        coverage: 6,
        notes: "Metro (limited coverage), buses, auto-rickshaws, app-based taxis essential"
      },
      rideSharing: {
        baseFare: 55,
        costPerKm: 16,
        availability: 9,
        exampleTrip: 220
      },
      taxis: {
        startFare: 65,
        costPerKm: 19
      },
      rentalCars: {
        economyWeekly: 16000,
        compactWeekly: 22000,
        insuranceDaily: 550,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 100,
        dieselPerLiter: 90
      },
      intercity: {
        trainPer100km: 320,
        busPer100km: 220
      },
      usagePatterns: {
        tourist: 2800,
        budgetTraveler: 1400,
        digitalNomad: 2300,
        resident: 1900
      }
    },
    "Goa": {
      city: "Goa",
      publicTransport: {
        monthlyPass: 1000,
        singleTicket: 10,
        dailyCap: 40,
        reliability: 4,
        coverage: 3,
        notes: "Limited public transport, rental scooters/bikes popular, taxis expensive"
      },
      rideSharing: {
        baseFare: 80,
        costPerKm: 20,
        availability: 7,
        exampleTrip: 300
      },
      taxis: {
        startFare: 100,
        costPerKm: 25
      },
      rentalCars: {
        economyWeekly: 12000,
        compactWeekly: 18000,
        insuranceDaily: 400,
        fuelEfficiency: 16
      },
      fuel: {
        gasolinePerLiter: 100,
        dieselPerLiter: 90
      },
      intercity: {
        busPer100km: 180
      },
      usagePatterns: {
        tourist: 2500,
        budgetTraveler: 1200,
        digitalNomad: 2000,
        resident: 1500
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 1500,
      singleTicket: 18,
      dailyCap: 55,
      reliability: 6,
      coverage: 6
    },
    rideSharing: {
      baseFare: 60,
      costPerKm: 17,
      availability: 9,
      exampleTrip: 240
    },
    taxis: {
      startFare: 70,
      costPerKm: 20
    },
    rentalCars: {
      economyWeekly: 15000,
      compactWeekly: 21000,
      insuranceDaily: 500,
      fuelEfficiency: 15
    },
    fuel: {
      gasolinePerLiter: 100,
      dieselPerLiter: 90
    },
    intercity: {
      trainPer100km: 320,
      busPer100km: 210,
      domesticFlight: 3500
    },
    usagePatterns: {
      tourist: 3000,
      budgetTraveler: 1500,
      digitalNomad: 2500,
      resident: 2000
    }
  }
};