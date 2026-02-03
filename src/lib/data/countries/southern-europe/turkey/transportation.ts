import type { TransportationCosts } from '$lib/types/transportation';

export const turkeyTransportation: TransportationCosts = {
  country: "Turkey",
  region: "Southern Europe",
  currency: "TRY",
  cities: {
    "Istanbul": {
      city: "Istanbul",
      publicTransport: {
        monthlyPass: 200,
        singleTicket: 7.67,
        dailyCap: 35,
        reliability: 8,
        coverage: 8,
        notes: "Istanbulkart (transport card) recommended for all public transport"
      },
      rideSharing: {
        baseFare: 10,
        costPerKm: 6,
        availability: 9,
        exampleTrip: 40
      },
      taxis: {
        startFare: 9.80,
        costPerKm: 6.30,
        flagFall: 9.80
      },
      rentalCars: {
        economyWeekly: 1500,
        compactWeekly: 2000,
        insuranceDaily: 80,
        fuelEfficiency: 12
      },
      fuel: {
        gasolinePerLiter: 18.50
      },
      intercity: {
        trainPer100km: 60,
        busPer100km: 50,
        domesticFlight: 400
      },
      usagePatterns: {
        tourist: 350,
        budgetTraveler: 200,
        digitalNomad: 250,
        resident: 180
      }
    },
    "Ankara": {
      city: "Ankara",
      publicTransport: {
        monthlyPass: 180,
        singleTicket: 6.50,
        dailyCap: 30,
        reliability: 7,
        coverage: 7,
        notes: "AnkaraKart for public transport, metro system extensive"
      },
      rideSharing: {
        baseFare: 9,
        costPerKm: 5.50,
        availability: 8,
        exampleTrip: 35
      },
      taxis: {
        startFare: 8.50,
        costPerKm: 5.80
      },
      rentalCars: {
        economyWeekly: 1400,
        compactWeekly: 1800,
        insuranceDaily: 70,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 18.30
      },
      intercity: {
        trainPer100km: 55,
        busPer100km: 45,
        domesticFlight: 350
      },
      usagePatterns: {
        tourist: 200,
        budgetTraveler: 180,
        digitalNomad: 220,
        resident: 150
      }
    },
    "Izmir": {
      city: "Izmir",
      publicTransport: {
        monthlyPass: 170,
        singleTicket: 6.00,
        dailyCap: 28,
        reliability: 7,
        coverage: 7,
        notes: "IzmirimKart for transport, ferry service across bay"
      },
      rideSharing: {
        baseFare: 8.50,
        costPerKm: 5.20,
        availability: 8,
        exampleTrip: 32
      },
      taxis: {
        startFare: 8.00,
        costPerKm: 5.50
      },
      rentalCars: {
        economyWeekly: 1300,
        compactWeekly: 1700,
        insuranceDaily: 65,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 18.40
      },
      intercity: {
        trainPer100km: 50,
        busPer100km: 40,
        domesticFlight: 300
      },
      usagePatterns: {
        tourist: 220,
        budgetTraveler: 170,
        digitalNomad: 200,
        resident: 140
      }
    },
    "Antalya": {
      city: "Antalya",
      publicTransport: {
        monthlyPass: 160,
        singleTicket: 5.50,
        dailyCap: 25,
        reliability: 6,
        coverage: 6,
        notes: "AntalyaKart for buses, limited tram service"
      },
      rideSharing: {
        baseFare: 9.00,
        costPerKm: 5.80,
        availability: 7,
        exampleTrip: 38
      },
      taxis: {
        startFare: 8.80,
        costPerKm: 5.90
      },
      rentalCars: {
        economyWeekly: 1200,
        compactWeekly: 1600,
        insuranceDaily: 60,
        fuelEfficiency: 13
      },
      fuel: {
        gasolinePerLiter: 18.60
      },
      intercity: {
        busPer100km: 45,
        domesticFlight: 350
      },
      usagePatterns: {
        tourist: 300,
        budgetTraveler: 160,
        digitalNomad: 250,
        resident: 130
      }
    },
    "Cappadocia (Nevşehir)": {
      city: "Nevşehir",
      publicTransport: {
        monthlyPass: 120,
        singleTicket: 4.00,
        dailyCap: 15,
        reliability: 5,
        coverage: 4,
        notes: "Limited public transport, tour buses and taxis main options"
      },
      rideSharing: {
        baseFare: 10.00,
        costPerKm: 6.50,
        availability: 6,
        exampleTrip: 45
      },
      taxis: {
        startFare: 10.00,
        costPerKm: 6.50
      },
      rentalCars: {
        economyWeekly: 1100,
        compactWeekly: 1500,
        insuranceDaily: 55,
        fuelEfficiency: 14
      },
      fuel: {
        gasolinePerLiter: 18.80
      },
      intercity: {
        busPer100km: 40
      },
      usagePatterns: {
        tourist: 250,
        budgetTraveler: 120,
        digitalNomad: 200,
        resident: 100
      }
    }
  },
  nationalAverage: {
    publicTransport: {
      monthlyPass: 180,
      singleTicket: 6.50,
      dailyCap: 30,
      reliability: 7,
      coverage: 6
    },
    rideSharing: {
      baseFare: 9.00,
      costPerKm: 5.80,
      availability: 8,
      exampleTrip: 35
    },
    taxis: {
      startFare: 9.00,
      costPerKm: 6.00,
      flagFall: 9.00
    },
    rentalCars: {
      economyWeekly: 1400,
      compactWeekly: 1800,
      insuranceDaily: 70,
      fuelEfficiency: 13
    },
    fuel: {
      gasolinePerLiter: 18.50
    },
    intercity: {
      trainPer100km: 55,
      busPer100km: 45,
      domesticFlight: 350
    },
    usagePatterns: {
      tourist: 250,
      budgetTraveler: 180,
      digitalNomad: 220,
      resident: 150
    }
  }
};