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

export type SocialVibe = 
  | 'solo-friendly' | 'social' | 'balanced' | 'vibrant' | 'sophisticated' 
  | 'cosmopolitan' | 'chill' | 'peaceful' | 'adventurous';

export type Climate = 
  // Temperature-based
  | 'tropical' | 'subtropical' | 'temperate' | 'continental' | 'polar' | 'arctic'
  // Moisture-based  
  | 'arid' | 'semi-arid' | 'humid' | 'dry' | 'mediterranean'
  // Specific types
  | 'desert' | 'mountain' | 'alpine' | 'coastal' | 'rainforest' 
  | 'oceanic' | 'tundra' | 'savanna' | 'steppe'
  // General/custom
  | 'warm' | 'cool' | 'any' | 'varies' | 'moderate' | 'extreme' 
  | 'cooler' | 'spring-like'
  // Special
  | 'subarctic';

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
  | 'vegetarian' | 'tourist' | 'street-food' | 'hearty' | 'healthy';

export type BudgetLevel = 
  | 'budget' | 'midrange' | 'luxury' | 'any' | 'budget-midrange' | 'midrange-luxury' | 'all-levels';

// ==================== INTERFACES ====================

export interface ResonancePreferences {
  // REMOVE travelStyle, ADD pace and interests
  pace: 'slow' | 'medium' | 'fast';
  socialPreference: 'solo' | 'social' | 'balanced';
  energyLevel: 'high' | 'medium' | 'low';
  
  // Environment & Atmosphere
  climate: Climate;
  vibe: Vibe;
  density: 'urban' | 'nature' | 'mixed' | 'rural' | 'sparse';
  
  // Activities & Interests - NOW USING TAGS
  interests: string[]; // These come from tagCategories
  activities: string[]; // These come from activityCategories
  
  // Keep these
  foodScene: FoodScene;
  nightlife: 'quiet' | 'moderate' | 'vibrant';
  budget: BudgetLevel;
  internetImportance: number;
  safetyImportance: number;
  country: string;
  region: string;
}

// In src/lib/types/resonance.ts, update the ResonanceScore interface:
export interface ResonanceScore {
  name: string;
  city: string;
  country: string;
  score: number;
  breakdown: {
    pace: number;
    interests: number; // ← ADD THIS LINE (was missing)
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
  
  // Personality & Vibe - ADD pace, REMOVE travelStyle
  pace: 'slow' | 'medium' | 'fast'; // NEW
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
  internetQuality: number;
  safetyScore: number;
  
  // Tags for matching - KEEP THIS
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

