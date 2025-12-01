// src/lib/types/resonance.ts

// Feel free to add a new filter that is more relavent
export interface ResonancePreferences {
  // Personality & Travel Style
  travelStyle: 'slow' | 'fast' | 'adventure' | 'relaxation' | 'cultural';
  socialPreference: 'solo' | 'social' | 'balanced';
  energyLevel: 'high' | 'medium' | 'low';
  
  // Environment & Atmosphere
  climate: 'warm' | 'cool' | 'temperate' | 'any';
  vibe: 'chaotic' | 'chill' | 'balanced' | 'luxury';
  density: 'urban' | 'nature' | 'mixed' | 'rural';
  
  // Activities & Interests
  activities: string[];
  foodScene: 'local' | 'international' | 'mixed';
  nightlife: 'quiet' | 'moderate' | 'vibrant';
  
  // Practical
  budget: 'budget' | 'midrange' | 'luxury' | 'any' | 'budget-midrange' | 'midrange-luxury' | 'all-levels';
  internetImportance: number;
  safetyImportance: number;
  
  // NEW: Location filtering
  country: string;
  region: string; // NEW: Replaces city
}

export interface ResonanceScore {
  name: string;
  city: string;
  country: string;
  score: number;
  breakdown: {
    travelStyle: number;
    social: number;
    environment: number;
    activities: number;
    practical: number;
  };
  matchReasons: string[];
}

export interface CityResonanceProfile {
  name: string;
  city: string;
  country: string;
  type: 'city' | 'country-overview';
  region: string;
  
  // Personality & Vibe
  travelStyle: ('slow' | 'fast' | 'adventure' | 'relaxation' | 'cultural' | 'historical' | 'nature')[];
  socialVibe: 'solo-friendly' | 'social' | 'balanced';
  energyLevel: 'high' | 'medium' | 'low';
  
  // Environment
  climate: 'warm' | 'cool' | 'temperate' | 'arid' | 'subtropical';
  vibe: 'chaotic' | 'chill' | 'balanced' | 'luxury' | 'magical';
  density: 'urban' | 'nature' | 'mixed' | 'rural';
  
  // Activities
  popularActivities: string[];
  foodScene: 'local' | 'international' | 'mixed';
  nightlife: 'quiet' | 'moderate' | 'vibrant';
  
  // Practical
  costLevel: 'budget' | 'midrange' | 'luxury';
  internetQuality: number; // 1-10
  safetyScore: number; // 1-10
  
  // Tags for matching (replaces bestFor)
  tags: string[];
  
  // Additional metadata
  rating?: number;
  highlights: string[];
  description?: string;
}