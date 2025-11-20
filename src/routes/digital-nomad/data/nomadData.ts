// New file: src/routes/digital-nomad/data/nomadData.ts
export interface NomadData {
  country: string;
  internet: {
    speed: number; // Mbps
    reliability: number; // 1-10
    coworkingSpaces: number; // count in major cities
  };
  costs: {
    coworkingMonthly: number;
    simCardMonthly: number;
    coffeeShopWork: number; // avg daily spend
  };
  visa: {
    digitalNomadVisa: boolean;
    touristVisaLength: number; // days
    requirements: string[];
  };
  community: {
    expatSize: number; // 1-10 scale
    englishLevel: number; // 1-10 scale
    safety: number; // 1-10 scale
  };
}

export const nomadData: NomadData[] = [
  {
    country: 'Thailand',
    internet: {
      speed: 85,
      reliability: 8,
      coworkingSpaces: 45
    },
    costs: {
      coworkingMonthly: 200,
      simCardMonthly: 15,
      coffeeShopWork: 8
    },
    visa: {
      digitalNomadVisa: false,
      touristVisaLength: 30,
      requirements: ['Passport', 'Proof of funds']
    },
    community: {
      expatSize: 9,
      englishLevel: 6,
      safety: 8
    }
  },
  // ... more countries
];