//src/lib/data/countries/southeast-asia/thailand/resonance.ts
import type { CityResonanceProfile } from '$lib/types/resonance'; // Add this import

export const thailandResonance: CityResonanceProfile[] = [
  {
    name: 'Thailand Overview',
    city: 'Multiple Cities',
    country: 'Thailand',
    type: 'country-overview',
    region: 'southeast-asia',
    travelStyle: ['fast', 'slow', 'cultural', 'adventure', 'relaxation'],
    socialVibe: 'social',
    energyLevel: 'high',
    climate: 'warm', // Changed from 'tropical'
    vibe: 'balanced',
    density: 'mixed',
    popularActivities: [
      'temple hopping', 'island hopping', 'street food', 'beach relaxation',
      'jungle trekking', 'night markets', 'muay thai', 'elephant sanctuaries'
    ],
    foodScene: 'local', // Changed from 'street'
    nightlife: 'vibrant',
    costLevel: 'budget',
    internetQuality: 7,
    safetyScore: 7,
    tags: [
      'street-food', 'buddhist', 'islands', 'beaches',
      'temples', 'jungle', 'nightlife', 'friendly'
    ],
    rating: 4.6,
    highlights: [
      'World-class street food culture',
      'Stunning islands and beaches',
      'Ancient temples and Buddhist culture',
      'Affordable luxury and experiences'
    ]
  },
  {
    name: 'Bangkok',
    city: 'Bangkok',
    country: 'Thailand',
    type: 'city',
    region: 'southeast-asia',
    travelStyle: ['fast', 'cultural', 'adventure'],
    socialVibe: 'social',
    energyLevel: 'high',
    climate: 'warm', // Changed from 'tropical'
    vibe: 'chaotic',
    density: 'urban',
    popularActivities: [
      'temple visits', 'street food tours', 'night markets', 'river cruises',
      'rooftop bars', 'shopping malls', 'muay thai matches', 'floating markets'
    ],
    foodScene: 'local', // Changed from 'street'
    nightlife: 'vibrant',
    costLevel: 'budget',
    internetQuality: 8,
    safetyScore: 6,
    tags: [
      'street-food', 'megacity', 'temples', 'shopping', 'nightlife',
      'chaotic', 'cultural', 'modern', 'traditional'
    ],
    rating: 4.5,
    highlights: [
      'Incredible street food on every corner',
      'Grand Palace and Wat Arun temples',
      'Vibrant nightlife and rooftop bars',
      'Floating markets and canal tours'
    ],
    description: 'The vibrant, chaotic capital where ancient temples meet modern skyscrapers'
  },
  {
    name: 'Chiang Mai',
    city: 'Chiang Mai',
    country: 'Thailand',
    type: 'city',
    region: 'southeast-asia',
    travelStyle: ['slow', 'cultural'], // Removed 'digital-nomad'
    socialVibe: 'balanced',
    energyLevel: 'medium',
    climate: 'warm', // Changed from 'tropical'
    vibe: 'chill',
    density: 'mixed',
    popularActivities: [
      'temple exploration', 'cooking classes', 'elephant sanctuaries', 'night markets',
      'jungle trekking', 'meditation retreats', 'cafe working', 'waterfalls'
    ],
    foodScene: 'mixed',
    nightlife: 'moderate',
    costLevel: 'budget',
    internetQuality: 8,
    safetyScore: 8,
    tags: [
      'digital-nomad', 'temples', 'mountains', 'cafe-culture',
      'cultural', 'laid-back', 'food', 'nature'
    ],
    rating: 4.7,
    highlights: [
      'Hundreds of ancient Buddhist temples',
      'Thriving digital nomad community',
      'Authentic Thai cooking classes',
      'Ethical elephant sanctuaries'
    ],
    description: 'The cultural capital of Northern Thailand with mountains, temples, and nomad community'
  },
  {
    name: 'Phuket',
    city: 'Phuket',
    country: 'Thailand',
    type: 'city',
    region: 'southeast-asia',
    travelStyle: ['relaxation', 'adventure'], // Removed 'luxury'
    socialVibe: 'social',
    energyLevel: 'medium',
    climate: 'warm', // Changed from 'tropical'
    vibe: 'balanced',
    density: 'mixed',
    popularActivities: [
      'beach relaxation', 'island hopping', 'snorkeling', 'nightlife', 'water sports', 'sunset views', 'spa treatments'
    ],
    foodScene: 'mixed',
    nightlife: 'vibrant',
    costLevel: 'midrange',
    internetQuality: 7,
    safetyScore: 7,
    tags: [
      'islands', 'beaches', 'nightlife', 'touristy',
      'resorts', 'water-sports', 'scenic'
    ],
    rating: 4.4,
    highlights: [
      'Stunning beaches and turquoise waters',
      'World-class luxury resorts and spas',
      'Vibrant Patong nightlife',
      'Access to Phi Phi Islands and James Bond Island'
    ],
    description: 'Thailand\'s largest island offering luxury resorts, vibrant nightlife, and stunning beaches'
  },
  {
    name: 'Koh Phangan',
    city: 'Koh Phangan',
    country: 'Thailand',
    type: 'city',
    region: 'southeast-asia',
    travelStyle: ['slow', 'adventure'], // Removed 'party'
    socialVibe: 'social',
    energyLevel: 'medium',
    climate: 'warm', // Changed from 'tropical'
    vibe: 'chill',
    density: 'mixed',
    popularActivities: [
      'full moon party', 'beach yoga', 'jungle hiking', 'waterfalls',
      'beach parties', 'snorkeling', 'detox retreats', 'sunset watching'
    ],
    foodScene: 'local',
    nightlife: 'vibrant',
    costLevel: 'budget',
    internetQuality: 6,
    safetyScore: 6,
    tags: [
      'island', 'party', 'yoga', 'hippie', 'beach',
      'backpacker', 'spiritual', 'nature'
    ],
    rating: 4.3,
    highlights: [
      'World-famous Full Moon Party',
      'Yoga and wellness retreats',
      'Secluded beaches and waterfalls',
      'Bohemian and hippie culture'
    ],
    description: 'The iconic party island with full moon celebrations and bohemian beach culture'
  },
  {
    name: 'Pai',
    city: 'Pai',
    country: 'Thailand',
    type: 'city',
    region: 'southeast-asia',
    travelStyle: ['slow', 'relaxation'], // Removed 'nature'
    socialVibe: 'balanced',
    energyLevel: 'low',
    climate: 'temperate', // Changed from 'tropical' to 'temperate' (more accurate for mountains)
    vibe: 'chill',
    density: 'nature', // Changed from 'rural' to 'nature'
    popularActivities: [
      'hot springs', 'waterfall visits', 'canyon exploration', 'motorbike touring',
      'cafe hopping', 'yoga classes', 'mountain hiking', 'local markets'
    ],
    foodScene: 'local',
    nightlife: 'quiet',
    costLevel: 'budget',
    internetQuality: 5,
    safetyScore: 8,
    tags: [
      'hippie', 'mountains', 'nature', 'laid-back',
      'backpacker', 'scenic', 'rural'
    ],
    rating: 4.4,
    highlights: [
      'Stunning mountain scenery and valleys',
      'Natural hot springs and waterfalls',
      'Bohemian hippie culture',
      'Pai Canyon sunset views'
    ],
    description: 'A peaceful mountain town with hippie vibes, hot springs, and breathtaking nature'
  }
];