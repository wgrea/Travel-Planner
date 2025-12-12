import type { CityResonanceProfile } from '$lib/types/resonance';

export const panamaResonance: CityResonanceProfile[] = [
  {
    name: 'Panama Overview',
    city: 'Multiple Cities',
    country: 'Panama',
    type: 'country-overview',
    region: 'central-america',
    pace: 'medium',
    socialVibe: 'balanced',
    energyLevel: 'medium',
    climate: 'tropical',
    vibe: 'balanced',
    density: 'mixed',
    popularActivities: [
      'canal viewing', 'beach hopping', 'rainforest hiking', 'island exploring',
      'coffee tasting', 'surfing', 'snorkeling', 'bird watching',
      'scuba diving', 'whale watching', 'monkey spotting', 'kayaking',
      'fishing trips', 'cultural festivals', 'colonial architecture tours'
    ],
    foodScene: 'mixed',
    nightlife: 'moderate',
    costLevel: 'midrange',
    internetQuality: 7,
    safetyScore: 7,
    tags: [
      'panama-canal', 'tropical', 'expat-friendly', 'beaches',
      'rainforest', 'biodiversity', 'tax-haven',
      'scuba-diving', 'surfing', 'expat-community', 'digital-nomad',
      'bird-watching', 'rainforest-exploration', 'island-hopping', 'architecture'
    ],
    rating: 4.4,
    highlights: [
      'Famous Panama Canal engineering marvel',
      'Biodiverse rainforests and cloud forests',
      'Beautiful Caribbean and Pacific coastlines',
      'Strong expat community and modern infrastructure'
    ]
  },
  {
    name: 'Panama City',
    city: 'Panama City',
    country: 'Panama',
    type: 'city',
    region: 'central-america',
    pace: 'fast', // Added: Panama City is fast-paced
    socialVibe: 'balanced',
    energyLevel: 'high',
    climate: 'tropical',
    vibe: 'urban',
    density: 'urban',
    popularActivities: [
      'panama canal observation', 'casco viejo exploration', 'skyscraper viewing',
      'amador causeway biking', 'biomuseo visit', 'shopping malls', 'nightlife'
    ],
    foodScene: 'diverse',
    nightlife: 'vibrant',
    costLevel: 'midrange',
    internetQuality: 8,
    safetyScore: 6,
    tags: [
      'capital', 'modern-skyline', 'panama-canal', 'cosmopolitan',
      'financial-hub', 'historic-district', 'urban'
    ],
    rating: 4.5,
    highlights: [
      'Modern skyscraper skyline juxtaposed with historic Casco Viejo',
      'Panama Canal and Miraflores Locks',
      'Biomuseo (designed by Frank Gehry)',
      'Amador Causeway with ocean views'
    ],
    description: 'Cosmopolitan capital with modern skyscrapers, historic districts, and the famous Panama Canal.'
  },
  {
    name: 'Boquete',
    city: 'Boquete',
    country: 'Panama',
    type: 'city',
    region: 'central-america',
    pace: 'slow', // Changed from travelStyle array
    socialVibe: 'balanced',
    energyLevel: 'low',
    climate: 'spring-like',
    vibe: 'chill',
    density: 'mixed',
    popularActivities: [
      'coffee plantation tours', 'volcano hiking', 'hot springs', 'bird watching',
      'river rafting', 'ziplining', 'local markets', 'yoga retreats'
    ],
    foodScene: 'local',
    nightlife: 'quiet',
    costLevel: 'midrange',
    internetQuality: 7,
    safetyScore: 9,
    tags: [
      'cloud-forest', 'coffee', 'retirees', 'nature',
      'mountains', 'spring-climate', 'expat-community',
      'digital-nomad', 'retirement-community', 'coffee-tours',
      'volcano-hiking', 'bird-watching', 'wellness-retreats'
    ],
    rating: 4.7,
    highlights: [
      'Spring-like climate in the cloud forest',
      'World-famous Geisha coffee plantations',
      'Volcán Barú hiking and sunrise views',
      'Large expat and retiree community'
    ],
    description: 'Mountain town with perfect spring-like climate, famous coffee, and large expat community.'
  },
  {
    name: 'Bocas del Toro',
    city: 'Bocas del Toro',
    country: 'Panama',
    type: 'city',
    region: 'central-america',
    pace: 'medium', // Changed from travelStyle array
    socialVibe: 'social',
    energyLevel: 'medium',
    climate: 'tropical',
    vibe: 'chill',
    density: 'mixed',
    popularActivities: [
      'island hopping', 'snorkeling', 'surfing', 'bioluminescent bay tours',
      'beach relaxation', 'reggae bars', 'sea kayaking', 'sloth spotting'
    ],
    foodScene: 'local',
    nightlife: 'moderate',
    costLevel: 'budget',
    internetQuality: 6,
    safetyScore: 7,
    tags: [
      'caribbean', 'islands', 'surfing', 'beach-life',
      'backpacker', 'laid-back', 'biodiversity',
      'surf-spots', 'scuba-diving', 'snorkeling', 'reggae-culture',
      'bioluminescent-bays', 'sloth-sanctuary', 'stilt-houses'
    ],
    rating: 4.6,
    highlights: [
      'Caribbean island archipelago with laid-back vibe',
      'Excellent surfing and snorkeling spots',
      'Bioluminescent bay tours',
      'Reggae-influenced beach culture'
    ],
    description: 'Caribbean island archipelago with a laid-back vibe, great surfing, and vibrant marine life.'
  },
  {
    name: 'Coronado',
    city: 'Coronado',
    country: 'Panama',
    type: 'city',
    region: 'central-america',
    pace: 'slow', // Changed from travelStyle array
    socialVibe: 'balanced',
    energyLevel: 'low',
    climate: 'tropical',
    vibe: 'chill',
    density: 'mixed',
    popularActivities: [
      'beach club visits', 'golfing', 'pool relaxation', 'gated community living',
      'weekend markets', 'sunset viewing', 'casual dining', 'community events'
    ],
    foodScene: 'mixed',
    nightlife: 'quiet',
    costLevel: 'luxury',
    internetQuality: 8,
    safetyScore: 9,
    tags: [
      'beach-town', 'gated-communities', 'retirement', 'golf',
      'exclusive', 'pacific-coast', 'resort-style'
    ],
    rating: 4.4,
    highlights: [
      'Pacific coast beach town with gated communities',
      'Popular with retirees and expats',
      'Excellent golf courses and beach clubs',
      'High security and modern amenities'
    ],
    description: 'Pacific coast beach town popular with retirees and expats, featuring gated communities and golf courses.'
  },
  {
    name: 'El Valle de Antón',
    city: 'El Valle',
    country: 'Panama',
    type: 'city',
    region: 'central-america',
    pace: 'slow', // Changed from travelStyle array
    socialVibe: 'balanced',
    energyLevel: 'low',
    climate: 'spring-like',
    vibe: 'chill',
    density: 'nature',
    popularActivities: [
      'hiking crater rim', 'hot springs', 'waterfall visits', 'petroglyph viewing',
      'butterfly haven', 'organic markets', 'bird watching', 'weekend getaways'
    ],
    foodScene: 'local',
    nightlife: 'quiet',
    costLevel: 'budget',
    internetQuality: 6,
    safetyScore: 9,
    tags: [
      'crater-town', 'weekend-getaway', 'nature', 'hot-springs',
      'hiking', 'local-market', 'mountain-town'
    ],
    rating: 4.3,
    highlights: [
      'Unique town located in a volcanic crater',
      'Natural hot springs and waterfalls',
      'Popular weekend getaway from Panama City',
      'Local organic markets and fresh produce'
    ],
    description: 'Unique town located in a volcanic crater, known for hot springs, waterfalls, and weekend getaways.'
  }
]