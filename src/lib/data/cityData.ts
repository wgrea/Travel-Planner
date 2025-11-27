// src/lib/data/cityData.ts
export interface CityCostData {
  accommodation: {
    budget: number;  // Monthly rent for 1-bedroom in city center (USD)
    midrange: number;
    luxury: number;
  };
  dailyLiving: {
    budget: number;  // Daily expenses excluding accommodation (USD)
    midrange: number;
    luxury: number;
  };
  coworking: {
    monthly: number; // Monthly coworking space cost (USD)
    dayPass: number;
  };
  transportation: {
    monthly: number; // Public transport monthly pass (USD)
    taxi: number;    // Per km
  };
}

export interface CityData {
  name: string;
  country: string;
  region: string;
  isPopular: boolean;
  hasCoworkingSpaces: boolean;
  digitalNomadScore: number; // 1-10 scale
  costOfLiving: CityCostData;
  vibe: string[]; // e.g., ['beach', 'urban', 'cultural']
    internet?: {  // ADD THIS OPTIONAL FIELD
    speed: number;
    reliability: number;
    coworkingSpaces: number;
  };
}

export const cityOptions: Record<string, string[]> = {
  // ... your existing city options ...
};

export const cityDetails: Record<string, CityData[]> = {
  'Thailand': [
    { 
      name: 'Bangkok', 
      country: 'Thailand', 
      region: 'Southeast Asia', 
      isPopular: true, 
      hasCoworkingSpaces: true, 
      digitalNomadScore: 9,
      vibe: ['urban', 'food', 'cultural'],
      costOfLiving: {
        accommodation: { budget: 400, midrange: 800, luxury: 1500 },
        dailyLiving: { budget: 20, midrange: 40, luxury: 80 },
        coworking: { monthly: 200, dayPass: 15 },
        transportation: { monthly: 30, taxi: 1 }
      }
    },
    { 
      name: 'Chiang Mai', 
      country: 'Thailand', 
      region: 'Southeast Asia', 
      isPopular: true, 
      hasCoworkingSpaces: true, 
      digitalNomadScore: 8,
      vibe: ['cultural', 'mountain', 'food'],
      costOfLiving: {
        accommodation: { budget: 250, midrange: 500, luxury: 1000 },
        dailyLiving: { budget: 15, midrange: 30, luxury: 60 },
        coworking: { monthly: 150, dayPass: 12 },
        transportation: { monthly: 15, taxi: 0.8 }
      }
    }
  ],
  'Argentina': [
    { 
      name: 'Buenos Aires', 
      country: 'Argentina', 
      region: 'South America', 
      isPopular: true, 
      hasCoworkingSpaces: true, 
      digitalNomadScore: 8,
      vibe: ['urban', 'cultural', 'food'],
      costOfLiving: {
        accommodation: { budget: 350, midrange: 600, luxury: 1200 },
        dailyLiving: { budget: 25, midrange: 45, luxury: 85 },
        coworking: { monthly: 180, dayPass: 15 },
        transportation: { monthly: 20, taxi: 0.5 }
      }
    },
    { 
      name: 'Mendoza', 
      country: 'Argentina', 
      region: 'South America', 
      isPopular: false, 
      hasCoworkingSpaces: true, 
      digitalNomadScore: 6,
      vibe: ['wine', 'mountain', 'relaxed'],
      costOfLiving: {
        accommodation: { budget: 280, midrange: 450, luxury: 800 },
        dailyLiving: { budget: 20, midrange: 35, luxury: 65 },
        coworking: { monthly: 120, dayPass: 10 },
        transportation: { monthly: 15, taxi: 0.4 }
      }
    }
  ]
  // Add more cities...
};

// Helper functions
export function getCitiesByCountry(country: string): string[] {
  return cityOptions[country] || [];
}

export function getCityDetails(cityName: string, country: string): CityData | undefined {
  return cityDetails[country]?.find(city => city.name === cityName);
}

export function getPopularCitiesByCountry(country: string): string[] {
  return cityDetails[country]?.filter(city => city.isPopular).map(city => city.name) || [];
}

export function getCitiesWithCoworkingSpaces(country: string): string[] {
  return cityDetails[country]?.filter(city => city.hasCoworkingSpaces).map(city => city.name) || [];
}

// NEW: Get city cost data
export function getCityCostData(cityName: string, country: string): CityCostData | undefined {
  return getCityDetails(cityName, country)?.costOfLiving;
}

// NEW: Get cities by cost range
export function getCitiesByCostRange(country: string, maxMonthlyBudget: number): string[] {
  return cityDetails[country]?.filter(city => 
    city.costOfLiving.accommodation.budget + (city.costOfLiving.dailyLiving.budget * 30) <= maxMonthlyBudget
  ).map(city => city.name) || [];
}