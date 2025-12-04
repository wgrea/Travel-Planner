// src/lib/data/countries/east-asia/japan/transportation.ts
import type { TransportationCosts } from '$lib/types/transportation';

export const japanTransportation: TransportationCosts = {
  country: "Japan",
  region: "East Asia",
  currency: "JPY",
  cities: {
    "Tokyo": {
      city: "Tokyo",
      publicTransport: {
        monthlyPass: 20000,
        singleTicket: 180,
        dailyCap: 800,
        reliability: 10,
        coverage: 10,
        notes: "Extensive metro, JR trains, buses. Suica/Pasmo cards recommended"
      },
      rideSharing: {
        baseFare: 500,
        costPerKm: 300,
        availability: 9,
        exampleTrip: 2000
      },
      taxis: {
        startFare: 420,
        costPerKm: 320
      },
      rentalCars: {
        economyWeekly: 50000,
        compactWeekly: 70000,
        insuranceDaily: 1500,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 160,
        dieselPerLiter: 140
      },
      intercity: {
        shinkansenPer100km: 5000,
        busPer100km: 1500,
        domesticFlight: 15000
      },
      usagePatterns: {
        tourist: 15000,
        budgetTraveler: 8000,
        digitalNomad: 12000,
        resident: 10000
      }
    },
    "Kyoto": {
      city: "Kyoto",
      publicTransport: {
        monthlyPass: 15000,
        singleTicket: 230,
        dailyCap: 600,
        reliability: 9,
        coverage: 8,
        notes: "Buses are primary transport, subway limited. Day passes available"
      },
      rideSharing: {
        baseFare: 450,
        costPerKm: 280,
        availability: 8,
        exampleTrip: 1800
      },
      taxis: {
        startFare: 410,
        costPerKm: 310
      },
      rentalCars: {
        economyWeekly: 45000,
        compactWeekly: 65000,
        insuranceDaily: 1400,
        fuelEfficiency: 16
      },
      fuel: {
        gasolinePerLiter: 160,
        dieselPerLiter: 140
      },
      intercity: {
        shinkansenPer100km: 4500,
        busPer100km: 1300
      },
      usagePatterns: {
        tourist: 12000,
        budgetTraveler: 6000,
        digitalNomad: 9000,
        resident: 7500
      }
    },
    "Osaka": {
      city: "Osaka",
      publicTransport: {
        monthlyPass: 18000,
        singleTicket: 200,
        dailyCap: 700,
        reliability: 9,
        coverage: 9,
        notes: "Efficient subway system, JR trains, private railways"
      },
      rideSharing: {
        baseFare: 480,
        costPerKm: 290,
        availability: 9,
        exampleTrip: 1900
      },
      taxis: {
        startFare: 420,
        costPerKm: 320
      },
      rentalCars: {
        economyWeekly: 48000,
        compactWeekly: 68000,
        insuranceDaily: 1450,
        fuelEfficiency: 15
      },
      fuel: {
        gasolinePerLiter: 160,
        dieselPerLiter: 140
      },
      intercity: {
        shinkansenPer100km: 4700,
        busPer100km: 1400
      },
      usagePatterns: {
        tourist: 13000,
        budgetTraveler: 6500,
        digitalNomad: 10000,
        resident: 8500
      }
    },
    "Fukuoka": {
      city: "Fukuoka",
      publicTransport: {
        monthlyPass: 12000,
        singleTicket: 210,
        dailyCap: 500,
        reliability: 9,
        coverage: 8,
        notes: "Subway system, buses, efficient for city size"
      },
      rideSharing: {
        baseFare: 400,
        costPerKm: 260,
        availability: 8,
        exampleTrip: 1600
      },
      taxis: {
        startFare: 390,
        costPerKm: 300
      },
      rentalCars: {
        economyWeekly: 40000,
        compactWeekly: 60000,
        insuranceDaily: 1300,
        fuelEfficiency: 16
      },
      fuel: {
        gasolinePerLiter: 155,
        dieselPerLiter: 135
      },
      intercity: {
        shinkansenPer100km: 5200,
        busPer100km: 1200
      },
      usagePatterns: {
        tourist: 10000,
        budgetTraveler: 5000,
        digitalNomad: 8000,
        resident: 6500
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 17000,
      singleTicket: 210,
      dailyCap: 700,
      reliability: 9,
      coverage: 9
    },
    rideSharing: {
      baseFare: 460,
      costPerKm: 285,
      availability: 8,
      exampleTrip: 1850
    },
    taxis: {
      startFare: 410,
      costPerKm: 315
    },
    rentalCars: {
      economyWeekly: 46000,
      compactWeekly: 66000,
      insuranceDaily: 1400,
      fuelEfficiency: 15
    },
    fuel: {
      gasolinePerLiter: 160,
      dieselPerLiter: 140
    },
    intercity: {
      shinkansenPer100km: 5000,
      busPer100km: 1400,
      domesticFlight: 20000
    },
    usagePatterns: {
      tourist: 13000,
      budgetTraveler: 6500,
      digitalNomad: 10000,
      resident: 8500
    }
  }
};