import type { TransportationCosts } from '$lib/types/transportation';

export const panamaTransportation: TransportationCosts = {
  country: "Panama",
  region: "Central America",
  currency: "USD",
  cities: {
    "Panama City": {
      city: "Panama City",
      publicTransport: {
        monthlyPass: 30,
        singleTicket: 0.35,
        dailyCap: 2,
        reliability: 7,
        coverage: 7,
        notes: "Metro Bus system, Metro Line 1 & 2, MiBus"
      },
      rideSharing: {
        baseFare: 2.5,
        costPerKm: 1,
        availability: 9,
        exampleTrip: 8
      },
      taxis: {
        startFare: 2,
        costPerKm: 1.2
      },
      rentalCars: {
        economyWeekly: 300,
        compactWeekly: 400,
        insuranceDaily: 20,
        fuelEfficiency: 10
      },
      fuel: {
        gasolinePerLiter: 1,
        dieselPerLiter: 0.9
      },
      intercity: {
        busPer100km: 15,
        domesticFlight: 150
      },
      usagePatterns: {
        tourist: 150,
        budgetTraveler: 75,
        digitalNomad: 120,
        resident: 100
      }
    },
    "Boquete": {
      city: "Boquete",
      publicTransport: {
        monthlyPass: 25,
        singleTicket: 0.5,
        reliability: 5,
        coverage: 4,
        notes: "Local buses and shared taxis, limited schedule"
      },
      rideSharing: {
        baseFare: 3,
        costPerKm: 1.2,
        availability: 6,
        exampleTrip: 10
      },
      taxis: {
        startFare: 2.5,
        costPerKm: 1.5
      },
      rentalCars: {
        economyWeekly: 250,
        compactWeekly: 350,
        insuranceDaily: 18,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 1.1,
        dieselPerLiter: 1
      },
      intercity: {
        busPer100km: 12
      },
      usagePatterns: {
        tourist: 100,
        budgetTraveler: 50,
        digitalNomad: 80,
        resident: 65
      }
    },
    "Bocas del Toro": {
      city: "Bocas del Toro",
      publicTransport: {
        monthlyPass: 20,
        singleTicket: 0.75,
        reliability: 4,
        coverage: 3,
        notes: "Water taxis between islands, limited land transport"
      },
      rideSharing: {
        baseFare: 4,
        costPerKm: 1.5,
        availability: 5,
        exampleTrip: 15
      },
      taxis: {
        startFare: 3,
        costPerKm: 1.8
      },
      rentalCars: {
        economyWeekly: 280,
        compactWeekly: 380,
        insuranceDaily: 22,
        fuelEfficiency: 11
      },
      fuel: {
        gasolinePerLiter: 1.2,
        dieselPerLiter: 1.1
      },
      intercity: {
        busPer100km: 20,
        domesticFlight: 180
      },
      usagePatterns: {
        tourist: 120,
        budgetTraveler: 60,
        digitalNomad: 90,
        resident: 70
      }
    },
    "Coronado": {
      city: "Coronado",
      publicTransport: {
        monthlyPass: 35,
        singleTicket: 1,
        reliability: 6,
        coverage: 5,
        notes: "Private shuttles, limited public buses, car-dependent"
      },
      rideSharing: {
        baseFare: 3.5,
        costPerKm: 1.3,
        availability: 7,
        exampleTrip: 12
      },
      taxis: {
        startFare: 3,
        costPerKm: 1.6
      },
      rentalCars: {
        economyWeekly: 320,
        compactWeekly: 420,
        insuranceDaily: 25,
        fuelEfficiency: 10
      },
      fuel: {
        gasolinePerLiter: 1.05,
        dieselPerLiter: 0.95
      },
      intercity: {
        busPer100km: 10
      },
      usagePatterns: {
        tourist: 130,
        budgetTraveler: 65,
        digitalNomad: 100,
        resident: 85
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 28,
      singleTicket: 0.65,
      dailyCap: 2.5,
      reliability: 6,
      coverage: 5
    },
    rideSharing: {
      baseFare: 3,
      costPerKm: 1.25,
      availability: 7,
      exampleTrip: 10
    },
    taxis: {
      startFare: 2.5,
      costPerKm: 1.5
    },
    rentalCars: {
      economyWeekly: 290,
      compactWeekly: 390,
      insuranceDaily: 20,
      fuelEfficiency: 11
    },
    fuel: {
      gasolinePerLiter: 1.1,
      dieselPerLiter: 1
    },
    intercity: {
      busPer100km: 15,
      domesticFlight: 160
    },
    usagePatterns: {
      tourist: 120,
      budgetTraveler: 60,
      digitalNomad: 95,
      resident: 75
    }
  }
};