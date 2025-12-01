import type { TransportationCosts } from '$lib/types/transportation';

export const vietnamTransportation: TransportationCosts = {
  country: "Vietnam",
  region: "Southeast Asia",
  currency: "VND",
  cities: {
    "Hanoi": {
      city: "Hanoi",
      publicTransport: {
        monthlyPass: 500000,
        singleTicket: 7000,
        dailyCap: 30000,
        reliability: 7,
        coverage: 7,
        notes: "Bus network covers most areas, Grab bikes are popular for short trips"
      },
      rideSharing: {
        baseFare: 10000,
        costPerKm: 9000,
        availability: 9,
        exampleTrip: 35000
      },
      taxis: {
        startFare: 12000,
        costPerKm: 14000
      },
      rentalCars: {
        economyWeekly: 2000000,
        compactWeekly: 2500000,
        insuranceDaily: 150000,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 24500
      },
      intercity: {
        trainPer100km: 150000,
        busPer100km: 100000,
        domesticFlight: 1500000
      },
      usagePatterns: {
        tourist: 2500000,
        budgetTraveler: 1200000,
        digitalNomad: 1800000,
        resident: 1500000
      }
    },
    "Ho Chi Minh City": {
      city: "Ho Chi Minh City",
      publicTransport: {
        monthlyPass: 400000,
        singleTicket: 5000,
        dailyCap: 25000,
        reliability: 6,
        coverage: 6,
        notes: "Bus system plus emerging metro line (Line 1 operational)"
      },
      rideSharing: {
        baseFare: 12000,
        costPerKm: 9500,
        availability: 9,
        exampleTrip: 40000
      },
      taxis: {
        startFare: 12000,
        costPerKm: 15000
      },
      rentalCars: {
        economyWeekly: 2200000,
        compactWeekly: 2700000,
        insuranceDaily: 160000,
        fuelEfficiency: 12  // Lower due to heavy traffic
      },
      fuel: {
        gasolinePerLiter: 24800
      },
      intercity: {
        trainPer100km: 160000,
        busPer100km: 110000,
        domesticFlight: 1400000
      },
      usagePatterns: {
        tourist: 2800000,
        budgetTraveler: 1300000,
        digitalNomad: 1900000,
        resident: 1600000
      }
    },
    "Da Nang": {
      city: "Da Nang",
      publicTransport: {
        monthlyPass: 200000,
        singleTicket: 8000,
        reliability: 5,
        coverage: 4,
        notes: "Limited bus network, motorbike taxis and ride-sharing dominate"
      },
      rideSharing: {
        baseFare: 8000,
        costPerKm: 7000,
        availability: 7,
        exampleTrip: 25000
      },
      taxis: {
        startFare: 10000,
        costPerKm: 12000
      },
      rentalCars: {
        economyWeekly: 1500000,
        compactWeekly: 2000000,
        insuranceDaily: 120000,
        fuelEfficiency: 15  // Better traffic flow
      },
      fuel: {
        gasolinePerLiter: 24500
      },
      intercity: {
        busPer100km: 80000
      },
      usagePatterns: {
        tourist: 1800000,
        budgetTraveler: 1000000,
        digitalNomad: 1500000,
        resident: 1200000
      }
    },
    "Hoi An": {
      city: "Hoi An",
      publicTransport: {
        monthlyPass: 0,
        singleTicket: 0,
        reliability: 1,
        coverage: 1,
        notes: "Walking city, rent bicycle for local transport"
      },
      rideSharing: {
        baseFare: 10000,
        costPerKm: 8000,
        availability: 5,
        exampleTrip: 30000
      },
      taxis: {
        startFare: 15000,
        costPerKm: 13000
      },
      rentalCars: {
        economyWeekly: 1800000,
        compactWeekly: 2300000,
        insuranceDaily: 130000,
        fuelEfficiency: 16
      },
      fuel: {
        gasolinePerLiter: 24700
      },
      intercity: {},
      usagePatterns: {
        tourist: 1200000,
        budgetTraveler: 600000,
        digitalNomad: 900000,
        resident: 700000
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 400000,
      singleTicket: 7000,
      dailyCap: 30000,
      reliability: 6,
      coverage: 5
    },
    rideSharing: {
      baseFare: 10000,
      costPerKm: 8500,
      availability: 8,
      exampleTrip: 35000
    },
    taxis: {
      startFare: 12000,
      costPerKm: 14000
    },
    rentalCars: {
      economyWeekly: 2000000,
      compactWeekly: 2500000,
      insuranceDaily: 140000,
      fuelEfficiency: 14
    },
    fuel: {
      gasolinePerLiter: 24600
    },
    intercity: {
      trainPer100km: 150000,
      busPer100km: 100000,
      domesticFlight: 1450000
    },
    usagePatterns: {
      tourist: 2300000,
      budgetTraveler: 1100000,
      digitalNomad: 1700000,
      resident: 1400000
    }
  }
};