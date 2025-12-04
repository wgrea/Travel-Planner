// src/lib/types/resonance.ts

// Feel free to add a new filter that is more relavent
// Why are there two of these?
export interface ResonancePreferences {
  // Personality & Travel Style
  travelStyle: 'slow' | 'fast' | 'adventure' | 'relaxation' | 'cultural' |'wellness' | 'beach' | 'food' | 'fun' |'winter' | 'art' | 'authentic' | 'academic' | 'coastal' | 'wine' |  'countryside' | 'music' | 'creative' | 'alternative' | 'photography' | 'off-the-beaten-path' | 'intense' | 'wildlife' | 'spiritual' | 'party' | 'tech' | 'trekking' | 'peaceful' | 'extreme' | 'mystery' | 'culinary';
  socialPreference: 'solo' | 'social' | 'balanced';
  energyLevel: 'high' | 'medium' | 'low';
  
  // Environment & Atmosphere
  climate: 'warm' | 'cool' | 'temperate' | 'any' | 'tropical' | 'subarctic' |  'varies' | 'mountain' | 'coastal' | 'desert' | 'moderate' | 'extreme' | 'alpine' | 'cooler';
  vibe: 'chaotic' | 'chill' | 'balanced' | 'luxury' | 'urban' | 'energetic' | 'historic' | 'artistic' |  'sophisticated' |  'intellectual' | 'cross-cultural' |  'gastronomic' | 'gritty' | 'elegant' | 'idyllic' |  'bohemian' | 'exotic' | 'artsy' | 'majestic' | 'rustic' ;
  density: 'urban' | 'nature' | 'mixed' | 'rural' | 'sparse';
  
  // Activities & Interests
  activities: string[];
  foodScene: 'local' | 'international' | 'mixed' | 'diverse' | 'world-class' | 'specialized' |'traditional' |  'cosmopolitan' |  'regional' | 'cross-cultural' | 'mediterranean' | 'ethnic' | 'artisanal' | 'rustic' |  'excellent' | 'authentic' | 'seafood' | 'basic' | 'mountain' | 'tribal' | 'incredible' | 'fusion' | 'moghul' | 'royal' | 'vegetarian' | 'tourist';
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

// I think it is right here that gets rid of the error messages when I add the tags
export interface CityResonanceProfile {
  name: string;
  city: string;
  country: string;
  type: 'city' | 'country-overview';
  region: string;
  
  // Personality & Vibe
  travelStyle: ('slow' | 'fast' | 'adventure' | 'relaxation' | 'cultural' | 'historical' | 'nature' | 'romantic' | 'urban' | 'luxury' | 'wellness' | 'beach' | 'food' | 'fun' | 'winter'| 'art' |  'authentic' | 'academic' | 'coastal' | 'wine' |  'countryside' | 'music' | 'creative' | 'alternative' | 'photography' | 'off-the-beaten-path' | 'intense' | 'wildlife' | 'spiritual' | 'party' | 'tech' | 'trekking' | 'peaceful' | 'extreme' | 'mystery' | 'culinary' )[];
  socialVibe: 'solo-friendly' | 'social' | 'balanced' | 'vibrant' | 'sophisticated' | 'cosmopolitan' | 'chill' | 'peaceful' | 'adventurous'; 
  energyLevel: 'high' | 'medium' | 'low';
  
  // Environment
  climate: 'warm' | 'cool' | 'temperate' | 'arid' | 'subtropical' | 'tropical' | 'spring-like' | 'subarctic' | 'mediterranean' | 'continental' | 'mediterranean' | 'continental' |  'varies' | 'mountain' | 'coastal' | 'desert' | 'moderate' | 'extreme' | 'alpine' | 'cooler';
  // Some might need to be removed since I kept pressing TAB when there would be predicted words
  vibe: 'chaotic' | 'chill' | 'balanced' | 'luxury' | 'magical' | 'diverse' | 'fast-paced' | 'relaxed' | 'traditional' | 'progressive' | 'laid-back' | 'lively' | 'festive' | 'spiritual' | 'hippie' | 'cosmopolitan' | 'creative' | 'vibrant' |'historical' | 'urban' | 'energetic' | 'historic' | 'artistic' | 'sophisticated' |  'intellectual' | 'cross-cultural' |  'gastronomic' | 'gritty' | 'elegant' | 'idyllic' |  'global' | 'industrial' | 'alternative' | 'scholarly' |  'bohemian' | 'exotic' | 'artsy' | 'majestic' | 'rustic' | 'coastal' | 'wild' | 'intense' | 'scenic' | 'tribal' | 'regal' | 'serene' | 'sacred' | 'extreme' | 'adventurous' | 'island' | 'rural' | 'mysterious' ;
  density: 'urban' | 'nature' | 'mixed' | 'rural' | 'dense' | 'sparse';
  
  // Activities
  popularActivities: string[];
  foodScene: 'local' | 'international' | 'mixed' | 'diverse'| 'world-class' | 'traditional' | 'street-food' | 'hearty' | 'healthy' | 'specialized' |  'cosmopolitan' | 'regional' | 'cross-cultural' | 'mediterranean' | 'ethnic' | 'artisanal' | 'rustic' |  'excellent' | 'authentic' | 'seafood' | 'basic' | 'mountain' | 'tribal' | 'incredible' | 'fusion' | 'moghul' | 'royal' | 'vegetarian' | 'tourist';
  nightlife: 'quiet' | 'moderate' | 'vibrant' | 'student';  
  
  // Practical
  costLevel: 'budget' | 'midrange' | 'expensive' | 'luxury';
  internetQuality: number; // 1-10
  safetyScore: number; // 1-10
  
  // Tags for matching (replaces bestFor)
  tags: string[];
  
  // Additional metadata
  rating?: number;
  highlights: string[];
  description?: string;
}