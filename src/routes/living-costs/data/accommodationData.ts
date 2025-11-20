// New file: src/routes/living-costs/data/accommodationData.ts
export interface AccommodationCost {
  country: string;
  accommodation: {
    hostel: number; // per night
    airbnb: number; // per night
    hotel: number; // per night
    guesthouse: number; // per night
  };
  food: {
    budget: number; // per day
    midRange: number; // per day  
    luxury: number; // per day
  };
  transportation: {
    local: number; // per day
    taxi: number; // per trip
    rental: number; // per day
  };
}

export const accommodationData: AccommodationCost[] = [
  {
    country: 'Thailand',
    accommodation: {
      hostel: 15,
      airbnb: 45,
      hotel: 80,
      guesthouse: 25
    },
    food: {
      budget: 10,
      midRange: 25,
      luxury: 50
    },
    transportation: {
      local: 5,
      taxi: 8,
      rental: 20
    }
  },
  // ... more countries
];