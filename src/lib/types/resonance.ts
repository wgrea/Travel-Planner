// src/lib/types/resonance.ts

// ==================== DOCUMENTATION ====================
/*
HOW TO ADD NEW DATA:
1. For new travel styles/vibes/climate/etc: Add to the string union types below
2. For new countries/cities: Add to resonanceData.ts following the CityResonanceProfile structure
3. For new tags/activities: Add to the arrays in resonanceData.ts

TIPS:
- Keep descriptions in sync between interfaces
- Use consistent naming (kebab-case for multi-word values)
- Test with a small dataset first before adding many entries
*/

// ==================== CORE TYPES ====================

// Centralized string union types - SINGLE SOURCE OF TRUTH
export type TravelStyle = 
  | 'slow' | 'fast' | 'adventure' | 'relaxation' | 'cultural' | 'wellness' 
  | 'beach' | 'food' | 'fun' | 'winter' | 'art' | 'authentic' | 'academic' 
  | 'coastal' | 'wine' | 'countryside' | 'music' | 'creative' | 'alternative' 
  | 'photography' | 'off-the-beaten-path' | 'intense' | 'wildlife' | 'spiritual' 
  | 'party' | 'tech' | 'trekking' | 'peaceful' | 'extreme' | 'mystery' | 'culinary'
  // NEW: Add your requested interests here
  | 'scuba-diving' | 'surfing' | 'skiing' | 'snowboarding' | 'mountain-exploration'
  | 'drinking-culture' | 'breweries' | 'wineries' | 'festivals' | 'music-festivals'
  | 'art-festivals' | 'raves' | 'speed-dating' | 'singles-mixers' | 'social-meetups'
  | 'expat-community' | 'digital-nomad' | 'anime' | 'bollywood' | 'k-pop'
  | 'tech-hub' | 'startup-scene' | 'innovation-center' | 'spiritual-retreat'
  | 'meditation' | 'yoga' | 'wildlife-experience' | 'safari' | 'bird-watching'
  | 'conventions' | 'social-touch' | 'dance-culture';

export type SocialVibe = 
  | 'solo-friendly' | 'social' | 'balanced' | 'vibrant' | 'sophisticated' 
  | 'cosmopolitan' | 'chill' | 'peaceful' | 'adventurous';

export type Climate = 
  | 'warm' | 'cool' | 'temperate' | 'any' | 'tropical' | 'subarctic' | 'varies' 
  | 'mountain' | 'coastal' | 'desert' | 'moderate' | 'extreme' | 'alpine' | 'cooler';

export type Vibe = 
  | 'chaotic' | 'chill' | 'balanced' | 'luxury' | 'magical' | 'diverse' 
  | 'fast-paced' | 'relaxed' | 'traditional' | 'progressive' | 'laid-back' 
  | 'lively' | 'festive' | 'spiritual' | 'hippie' | 'cosmopolitan' | 'creative' 
  | 'vibrant' | 'historical' | 'urban' | 'energetic' | 'artistic' | 'sophisticated' 
  | 'intellectual' | 'cross-cultural' | 'gastronomic' | 'gritty' | 'elegant' 
  | 'idyllic' | 'global' | 'industrial' | 'alternative' | 'scholarly' | 'bohemian' 
  | 'exotic' | 'artsy' | 'majestic' | 'rustic' | 'coastal' | 'wild' | 'intense' 
  | 'scenic' | 'tribal' | 'regal' | 'serene' | 'sacred' | 'extreme' | 'adventurous' 
  | 'island' | 'rural' | 'mysterious';

export type FoodScene = 
  | 'local' | 'international' | 'mixed' | 'diverse' | 'world-class' | 'specialized' 
  | 'traditional' | 'cosmopolitan' | 'regional' | 'cross-cultural' | 'mediterranean' 
  | 'ethnic' | 'artisanal' | 'rustic' | 'excellent' | 'authentic' | 'seafood' 
  | 'basic' | 'mountain' | 'tribal' | 'incredible' | 'fusion' | 'moghul' | 'royal' 
  | 'vegetarian' | 'tourist';

export type BudgetLevel = 
  | 'budget' | 'midrange' | 'luxury' | 'any' | 'budget-midrange' | 'midrange-luxury' | 'all-levels';

// ==================== INTERFACES ====================

export interface ResonancePreferences {
  // Personality & Travel Style
  travelStyle: TravelStyle;
  socialPreference: 'solo' | 'social' | 'balanced';
  energyLevel: 'high' | 'medium' | 'low';
  
  // Environment & Atmosphere
  climate: Climate;
  vibe: Vibe;
  density: 'urban' | 'nature' | 'mixed' | 'rural' | 'sparse';
  
  // Activities & Interests
  activities: string[];
  foodScene: FoodScene;
  nightlife: 'quiet' | 'moderate' | 'vibrant';
  
  // Practical
  budget: BudgetLevel;
  internetImportance: number;
  safetyImportance: number;
  
  // Location filtering
  country: string;
  region: string;
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
  // Basic Info
  name: string;
  city: string;
  country: string;
  type: 'city' | 'country-overview';
  region: string;
  
  // Personality & Vibe
  travelStyle: TravelStyle[];
  socialVibe: SocialVibe;
  energyLevel: 'high' | 'medium' | 'low';
  
  // Environment
  climate: Climate;
  vibe: Vibe;
  density: 'urban' | 'nature' | 'mixed' | 'rural' | 'dense' | 'sparse';
  
  // Activities
  popularActivities: string[];
  foodScene: FoodScene;
  nightlife: 'quiet' | 'moderate' | 'vibrant' | 'student';
  
  // Practical
  costLevel: 'budget' | 'midrange' | 'expensive' | 'luxury';
  internetQuality: number; // 1-10
  safetyScore: number; // 1-10
  
  // Tags for matching
  tags: string[];
  
  // Additional metadata
  rating?: number;
  highlights: string[];
  description?: string;
}

// ==================== HELPER TYPES ====================

// Type for location data structure
export interface RegionData {
  region: string;
  countries?: CityResonanceProfile[][];
  subregions?: {
    subregion: string;
    countries: CityResonanceProfile[][];
  }[];
}