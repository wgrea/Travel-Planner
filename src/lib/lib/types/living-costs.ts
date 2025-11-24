// src/lib/types/living-costs.ts

// Updated with ALL your countries
export type CountryCode = 
  | 'Argentina'
  | 'Armenia'
  | 'Australia'
  | 'Azerbaijan'
  | 'Belize'
  | 'Bolivia'
  | 'Brazil'
  | 'Canada'
  | 'Chile'
  | 'China'
  | 'Colombia'
  | 'Costa Rica'
  | 'Croatia'
  | 'Czech Republic'
  | 'Estonia'
  | 'France'
  | 'Georgia'
  | 'Germany'
  | 'Greece'
  | 'Guatemala'
  | 'India'
  | 'Indonesia'
  | 'Italy'
  | 'Japan'
  | 'Malaysia'
  | 'Mexico'
  | 'Nepal'
  | 'New Zealand'
  | 'Norway'
  | 'Panama'
  | 'Peru'
  | 'Philippines'
  | 'Poland'
  | 'Portugal'
  | 'Romania'
  | 'Slovenia'
  | 'South Korea'
  | 'Spain'
  | 'Sri Lanka'
  | 'Sweden'
  | 'Thailand'
  | 'Turkey'
  | 'United Arab Emirates'
  | 'United States'
  | 'Vietnam';

// Define the type here since it's missing
export interface LivingCostData {
  country: string;
  countryCode: CountryCode; // Added countryCode
  cities: string[];
  currency: string;
  baseCosts: {
    accommodation: {
      budget: {
        hostel: number;
        budgetHotel: number;
        guesthouse: number;
      };
      midrange: {
        hotel: number;
        apartment: number;
        boutiqueHotel: number;
      };
      luxury: {
        hotel: number;
        resort: number;
        villa: number;
      };
      monthlyRent: {
        studio: number;
        oneBedroom: number;
        threeBedroom: number;
      };
    };
    dailyLiving: {
      budget: number;
      midrange: number;
      luxury: number;
      breakdown: {
        food: number;
        transport: number;
        activities: number;
        misc: number;
      };
    };
    transportation: {
      localBus: number;
      taxi: number;
      intercityBus: number;
      train: number;
    };
    food: {
      streetFood: number;
      restaurantMeal: number;
      groceryWeekly: number;
    };
  };
  tips: string[];
  bestAreas: {
    budget: string[];
    midrange: string[];
    luxury: string[];
  };
  lastUpdated: string;
}

export interface AccommodationCosts {
  budget: {
    hostel: number;
    budgetHotel: number;
    guesthouse: number;
  };
  midrange: {
    hotel: number;
    apartment: number;
    boutiqueHotel: number;
  };
  luxury: {
    hotel: number;
    resort: number;
    villa: number;
  };
  monthlyRent: {
    studio: number;
    oneBedroom: number;
    threeBedroom: number;
  };
}

export interface DailyLivingCosts {
  budget: number;  // Total daily cost for budget travel
  midrange: number; // Total daily cost for midrange travel  
  luxury: number;   // Total daily cost for luxury travel
  breakdown: {
    food: number;
    transport: number;
    activities: number;
    misc: number;
  };
}