// src/lib/data/visa/destinations/southeast-asia/vietnam/resonance.ts
import type { CityResonanceProfile } from '$lib/types/resonance';

export const vietnamResonance: CityResonanceProfile[] = [
  {
    name: 'Vietnam Overview',
    city: 'Multiple Cities',
    country: 'Vietnam',
    type: 'country-overview',
    region: 'southeast-asia',
    
    // Personality & Vibe - FIXED: Only allowed values
    travelStyle: ['slow', 'fast', 'cultural', 'adventure', 'relaxation'],
    socialVibe: 'balanced',
    energyLevel: 'high',
    
    // Environment
    climate: 'warm',
    vibe: 'balanced',
    density: 'mixed',
    
    // Activities
    popularActivities: [
      'street food tours', 'historical sites', 'motorbike touring', 
      'beach relaxation', 'jungle trekking', 'city exploration', 'temple visits'
    ],
    foodScene: 'local',
    nightlife: 'vibrant',
    
    // Practical - FIXED: Only 'budget' | 'midrange' | 'luxury'
    costLevel: 'budget',
    internetQuality: 7,
    safetyScore: 7,
    
    // Tags
    tags: [
      'street-food', 'cultural', 'historical', 'adventure', 
      'beaches', 'mountains', 'local-experience', 'traditional'
    ],
    
    // Additional metadata
    rating: 4.4,
    highlights: [
      'World\'s best street food culture',
      'Motorbike trips through stunning landscapes',
      'Ancient cultural heritage and history',
      'Diverse landscapes from mountains to beaches'
    ],
    description: 'A country of incredible natural beauty, rich history, and some of the world\'s best cuisine.'
  },
  {
    name: 'Hanoi',
    city: 'Hanoi',
    country: 'Vietnam',
    type: 'city',
    region: 'southeast-asia',
    
    // Personality & Vibe - FIXED
    travelStyle: ['cultural', 'slow', 'adventure'],
    socialVibe: 'balanced',
    energyLevel: 'high',
    
    // Environment
    climate: 'warm',
    vibe: 'chaotic',
    density: 'urban',
    
    // Activities
    popularActivities: ['street food tours', 'historical sites', 'city exploration', 'motorbike touring', 'temple visits'],
    foodScene: 'local',
    nightlife: 'moderate',
    
    // Practical - FIXED
    costLevel: 'budget',
    internetQuality: 8,
    safetyScore: 7,
    
    // Tags
    tags: ['cultural', 'street-food', 'historical', 'urban', 'traditional', 'buddhist', 'temples'],
    
    // Additional metadata
    rating: 4.3,
    highlights: [
      'Ancient Old Quarter with 36 streets',
      'Ho Chi Minh Mausoleum complex',
      'Street food capital of Vietnam',
      'French colonial architecture',
      'Vibrant night markets'
    ],
    description: 'The historic capital with chaotic energy, rich culture, and incredible street food.'
  },
  {
    name: 'Ho Chi Minh City',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    type: 'city',
    region: 'southeast-asia',
    
    // FIXED: 'party' is not allowed, use 'fast' instead
    travelStyle: ['fast', 'cultural', 'adventure'],
    socialVibe: 'social',
    energyLevel: 'high',
    
    climate: 'warm',
    vibe: 'chaotic',
    density: 'urban',
    
    popularActivities: ['nightlife', 'shopping', 'historical sites', 'food tours', 'city exploration'],
    foodScene: 'mixed',
    nightlife: 'vibrant',
    
    // FIXED: 'budget-midrange' is not allowed, choose one
    costLevel: 'budget',
    internetQuality: 9,
    safetyScore: 6,
    
    tags: ['urban', 'nightlife', 'shopping', 'historical', 'cosmopolitan'],
    
    rating: 4.2,
    highlights: [
      'War Remnants Museum',
      'Ben Thanh Market',
      'Bui Vien Walking Street',
      'French colonial landmarks',
      'Modern skyscrapers and rooftop bars'
    ],
    description: 'Vietnam\'s bustling economic hub with vibrant nightlife and fascinating history.'
  },
  {
    name: 'Da Nang',
    city: 'Da Nang',
    country: 'Vietnam',
    type: 'city',
    region: 'southeast-asia',
    
    travelStyle: ['relaxation', 'slow', 'adventure'],
    socialVibe: 'balanced',
    energyLevel: 'medium',
    
    climate: 'warm',
    vibe: 'balanced',
    density: 'mixed',
    
    popularActivities: ['beach relaxation', 'water sports', 'mountain biking', 'city exploration', 'food tours'],
    foodScene: 'mixed',
    nightlife: 'moderate',
    
    // FIXED
    costLevel: 'midrange',
    internetQuality: 8,
    safetyScore: 8,
    
    tags: ['beaches', 'relaxation', 'balanced', 'coastal', 'digital-nomad'],
    
    rating: 4.4,
    highlights: [
      'My Khe Beach (China Beach)',
      'Marble Mountains',
      'Dragon Bridge',
      'Ba Na Hills with Golden Bridge',
      'Excellent seafood restaurants'
    ],
    description: 'Coastal city with beautiful beaches, modern infrastructure, and easy access to cultural sites.'
  },
  {
    name: 'Hoi An',
    city: 'Hoi An',
    country: 'Vietnam',
    type: 'city',
    region: 'southeast-asia',
    
    travelStyle: ['slow', 'cultural', 'relaxation'],
    socialVibe: 'balanced',
    energyLevel: 'low',
    
    climate: 'warm',
    vibe: 'chill',
    density: 'mixed',
    
    popularActivities: ['historical sites', 'beach relaxation', 'cooking classes', 'shopping', 'bicycle tours'],
    foodScene: 'local',
    nightlife: 'quiet',
    
    // FIXED
    costLevel: 'midrange',
    internetQuality: 7,
    safetyScore: 9,
    
    tags: ['cultural', 'relaxation', 'chill', 'historical', 'traditional', 'arts'],
    
    rating: 4.6,
    highlights: [
      'Ancient Town UNESCO World Heritage',
      'Tailor shops for custom clothing',
      'Lantern-lit streets at night',
      'An Bang Beach',
      'Cooking classes and food tours'
    ],
    description: 'Ancient trading port with preserved architecture, lantern-lit streets, and charming atmosphere.'
  },
  {
    name: 'Ha Long Bay',
    city: 'Ha Long',
    country: 'Vietnam',
    type: 'city',
    region: 'southeast-asia',
    
    travelStyle: ['adventure', 'relaxation'],
    socialVibe: 'balanced',
    energyLevel: 'medium',
    
    climate: 'warm',
    vibe: 'chill',
    density: 'nature',
    
    popularActivities: ['boat expeditions', 'kayaking', 'cave exploration', 'sunset watching', 'photography'],
    foodScene: 'local',
    nightlife: 'quiet',
    
    // FIXED: 'midrange-luxury' is not allowed
    costLevel: 'midrange',
    internetQuality: 5,
    safetyScore: 8,
    
    tags: ['nature', 'scenic', 'adventure', 'biodiversity', 'coastal', 'remote'],
    
    rating: 4.7,
    highlights: [
      'UNESCO World Heritage limestone karsts',
      'Overnight cruise experiences',
      'Sung Sot Cave (Surprise Cave)',
      'Ti Top Island',
      'Floating fishing villages'
    ],
    description: 'UNESCO World Heritage site with thousands of limestone islands and emerald waters.'
  },
  {
    name: 'Sapa',
    city: 'Sapa',
    country: 'Vietnam',
    type: 'city',
    region: 'southeast-asia',
    
    travelStyle: ['adventure', 'cultural', 'slow'],
    socialVibe: 'balanced',
    energyLevel: 'medium',
    
    climate: 'temperate',
    vibe: 'chill',
    density: 'nature',
    
    popularActivities: ['hiking', 'mountain trekking', 'rice terrace views', 'local village visits', 'photography'],
    foodScene: 'local',
    nightlife: 'quiet',
    
    costLevel: 'budget',
    internetQuality: 4,
    safetyScore: 8,
    
    tags: ['mountains', 'nature', 'adventure', 'cultural', 'rural', 'scenic'],
    
    rating: 4.5,
    highlights: [
      'Terraced rice fields',
      'Fansipan Mountain (Indochina\'s highest peak)',
      'Local hill tribe villages',
      'Trekking through valleys',
      'Cool mountain climate'
    ],
    description: 'Mountainous region with stunning terraced rice fields and ethnic minority cultures.'
  }
];