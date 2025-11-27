// src/lib/types/resonance.ts
// this is the type for the filterData.ts 
// Will change the names later on to make them match

export interface ResonancePreferences {
  // Personality & Travel Style
  travelStyle: 'slow' | 'fast' | 'adventure' | 'relaxation' | 'cultural';
  socialPreference: 'solo' | 'social' | 'balanced';
  energyLevel: 'high' | 'medium' | 'low';
  
  // Environment & Atmosphere
  climate: 'warm' | 'cool' | 'temperate' | 'any';
  vibe: 'chaotic' | 'chill' | 'balanced' | 'luxury';
  density: 'urban' | 'nature' | 'mixed';
  
  // Activities & Interests
  activities: string[];
  foodScene: 'local' | 'international' | 'mixed';
  nightlife: 'quiet' | 'moderate' | 'vibrant';
  
  // Practical
  budget: 'budget' | 'midrange' | 'luxury';
  internetImportance: number; // 1-10
  safetyImportance: number; // 1-10
}
import type { Workspace } from '$lib/data/nomadData';
export interface ResonancePreferences {
  // ... keep existing preferences the same ...
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

// Remove CountryResonanceProfile, just use CityResonanceProfile for both
export interface CityResonanceProfile {
  name: string;
  city: string;
  country: string;
  type: 'city' | 'country-overview';
  region: string;
  
  // Personality & Vibe
  travelStyle: ('slow' | 'fast' | 'adventure' | 'relaxation' | 'cultural')[];
  socialVibe: 'solo-friendly' | 'social' | 'balanced';
  energyLevel: 'high' | 'medium' | 'low';
  
  // Environment
  climate: 'warm' | 'cool' | 'temperate';
  vibe: 'chaotic' | 'chill' | 'balanced' | 'luxury';
  density: 'urban' | 'nature' | 'mixed';
  
  // Activities
  popularActivities: string[];
  foodScene: 'local' | 'international' | 'mixed';
  nightlife: 'quiet' | 'moderate' | 'vibrant';
  
  // Practical
  costLevel: 'budget' | 'midrange' | 'luxury';
  internetQuality: number; // 1-10
  safetyScore: number; // 1-10
  
  // Tags for matching
  tags: string[];
  
  // Additional metadata
  rating?: number;
  bestFor: string[];
  highlights: string[];
  description?: string;
}