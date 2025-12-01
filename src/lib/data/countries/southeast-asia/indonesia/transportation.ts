import type { TransportationCosts } from '$lib/types/transportation';

export const indonesiaTransportation: TransportationCosts = {
  country: "Indonesia",
  region: "Southeast Asia",
  currency: "IDR",
  cities: {
    "Jakarta": {
      city: "Jakarta",
      publicTransport: {
        monthlyPass: 300000,  // TransJakarta monthly pass
        singleTicket: 3500,
        dailyCap: 10000,
        reliability: 5,
        coverage: 6,
        notes: "TransJakarta BRT system, MRT (north-south line), and commuter trains"
      },
      rideSharing: {
        baseFare: 8000,
        costPerKm: 2500,
        availability: 9,
        exampleTrip: 20000
      },
      taxis: {
        startFare: 7500,
        costPerKm: 4000
      },
      rentalCars: {
        economyWeekly: 1200000,
        compactWeekly: 1600000,
        insuranceDaily: 80000,
        fuelEfficiency: 10  // Very low due to heavy traffic
      },
      fuel: {
        gasolinePerLiter: 13500,
        dieselPerLiter: 10000
      },
      intercity: {
        trainPer100km: 150000,
        busPer100km: 80000,
        domesticFlight: 800000
      },
      usagePatterns: {
        tourist: 2000000,
        budgetTraveler: 1000000,
        digitalNomad: 1500000,
        resident: 1200000
      }
    },
    "Bali": {
      city: "Bali",
      publicTransport: {
        monthlyPass: 0,
        singleTicket: 0,
        reliability: 2,
        coverage: 2,
        notes: "No formal public transport, rent scooter or use ride-sharing"
      },
      rideSharing: {
        baseFare: 10000,
        costPerKm: 3000,
        availability: 7,
        exampleTrip: 25000
      },
      taxis: {
        startFare: 7000,
        costPerKm: 5000
      },
      rentalCars: {
        economyWeekly: 1000000,
        compactWeekly: 1400000,
        insuranceDaily: 70000,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 14000
      },
      intercity: {
        busPer100km: 100000
      },
      usagePatterns: {
        tourist: 1800000,
        budgetTraveler: 800000,
        digitalNomad: 1300000,
        resident: 1000000
      }
    },
    "Yogyakarta": {
      city: "Yogyakarta",
      publicTransport: {
        monthlyPass: 180000,  // Busway pass
        singleTicket: 3500,
        reliability: 4,
        coverage: 4,
        notes: "Trans Jogja bus system, becak (rickshaws), and andong (horse cart)"
      },
      rideSharing: {
        baseFare: 6000,
        costPerKm: 2200,
        availability: 6,
        exampleTrip: 15000
      },
      taxis: {
        startFare: 6500,
        costPerKm: 3500
      },
      rentalCars: {
        economyWeekly: 800000,
        compactWeekly: 1200000,
        insuranceDaily: 60000,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 13500
      },
      intercity: {
        trainPer100km: 120000,
        busPer100km: 70000
      },
      usagePatterns: {
        tourist: 1200000,
        budgetTraveler: 600000,
        digitalNomad: 900000,
        resident: 700000
      }
    },
    "Bandung": {
      city: "Bandung",
      publicTransport: {
        monthlyPass: 200000,
        singleTicket: 3000,
        reliability: 3,
        coverage: 3,
        notes: "City buses and angkot (public minivans)"
      },
      rideSharing: {
        baseFare: 7000,
        costPerKm: 2500,
        availability: 7,
        exampleTrip: 18000
      },
      taxis: {
        startFare: 7000,
        costPerKm: 4000
      },
      rentalCars: {
        economyWeekly: 900000,
        compactWeekly: 1300000,
        insuranceDaily: 65000,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 13600
      },
      intercity: {
        trainPer100km: 130000,
        busPer100km: 75000
      },
      usagePatterns: {
        tourist: 1500000,
        budgetTraveler: 700000,
        digitalNomad: 1100000,
        resident: 850000
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 250000,
      singleTicket: 3500,
      dailyCap: 10000,
      reliability: 4,
      coverage: 4
    },
    rideSharing: {
      baseFare: 8000,
      costPerKm: 2500,
      availability: 7,
      exampleTrip: 20000
    },
    taxis: {
      startFare: 7000,
      costPerKm: 4000
    },
    rentalCars: {
      economyWeekly: 1000000,
      compactWeekly: 1400000,
      insuranceDaily: 70000,
      fuelEfficiency: 12
    },
    fuel: {
      gasolinePerLiter: 13600,
      dieselPerLiter: 10000
    },
    intercity: {
      trainPer100km: 130000,
      busPer100km: 80000,
      domesticFlight: 800000
    },
    usagePatterns: {
      tourist: 1700000,
      budgetTraveler: 800000,
      digitalNomad: 1300000,
      resident: 1000000
    }
  }
};