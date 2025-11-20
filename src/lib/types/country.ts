// src/lib/types/country.ts - Enhanced version
export type NearbyAlt = {
  name: string;
  distance_km: number;
  vibe: string;
  cheaper_than_primary?: boolean;
  highlights?: string[];
};

export type City = {
  id: string;
  name: string;
  countryCode: string;
  isPrimary?: boolean;
  costTier: 'low' | 'medium' | 'high';
  vibe: string[]; // e.g., ['historic', 'beach', 'digital_nomad']
  highlights: string[];
  nearbyCities?: string[]; // references to other city IDs
  distanceFromPrimary?: number; // km
  alternativeType?: 'cheaper' | 'quieter' | 'more_scenic' | 'more_urban';
  travelTimeFromPrimary?: string; // "2 hours by train"
};

export type Country = {
  id: string;
  name: string;
  iso2: string;
  continent: string;
  region: string; // More specific than continent (e.g., "Southeast Asia")
  popularCities: string[]; // Array of city IDs
  visa: {
    visa_free_days?: number;
    visa_types?: string[];
    evisa_available?: boolean;
    requirements_summary?: string;
    difficulty: 'easy' | 'medium' | 'hard'; // For filtering
  };
  costs: {
    tier: 'low' | 'medium' | 'high'; // Overall cost tier for quick filtering
    airbnb_avg_night?: number;
    hostel_avg_night?: number;
    meal_avg?: number;
    train_avg_intercity?: number;
    local_transit_daypass?: number;
  };
  seasonality: {
    best_months: string[];
    peak_months?: string[];
    shoulder_months?: string[];
    offpeak_months?: string[];
    best_time_description?: string; // "November to February"
    worst_time_description?: string; // "June to August - monsoon season"
  };
  filters: {
    activities: string[]; // beach, hiking, cultural, etc.
    pace: 'relaxed' | 'moderate' | 'fast';
    crowd_level: 'quiet' | 'moderate' | 'busy';
  };
  lastUpdated: string;
};