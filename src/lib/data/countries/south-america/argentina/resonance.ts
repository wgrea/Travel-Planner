// src/lib/data/countries/south-america/argentina/resonance.ts
import type { CityResonanceProfile } from '$lib/types/resonance'; // Add this import

export const argentinaResonance: CityResonanceProfile[] = [
  {
    name: 'Argentina Overview',
    city: 'Multiple Cities',
    country: 'Argentina',
    type: 'country-overview',
    region: 'south-america',
    travelStyle: ['slow', 'cultural', 'adventure'],
    socialVibe: 'social',
    energyLevel: 'medium',
    climate: 'temperate',
    vibe: 'balanced',
    density: 'mixed',
    popularActivities: [
      'wine tasting', 'tango', 'hiking', 'city exploration', 'food tours',
      'steak houses', 'malbec wine', 'patagonia trekking', 'gaucho culture'
    ],
    foodScene: 'mixed',
    nightlife: 'vibrant',
    costLevel: 'midrange',
    internetQuality: 7,
    safetyScore: 7,
    tags: [
      'wine', 'tango', 'european-influence', 'spanish',
      'steak', 'patagonia', 'gaucho', 'passionate'
    ],
    rating: 4.5,
    highlights: [
      'World-class wine regions',
      'Tango culture in Buenos Aires',
      'Patagonian wilderness',
      'European-style architecture'
    ]
  },
  {
    name: 'Buenos Aires',
    city: 'Buenos Aires',
    country: 'Argentina',
    type: 'city',
    region: 'south-america',
    travelStyle: ['fast', 'cultural', 'adventure'],
    socialVibe: 'social',
    energyLevel: 'high',
    climate: 'temperate',
    vibe: 'chaotic',
    density: 'urban',
    popularActivities: [
      'tango dancing', 'city exploration', 'food tours', 'steak houses',
      'cafe culture', 'art galleries', 'street art', 'football matches'
    ],
    foodScene: 'mixed',
    nightlife: 'vibrant',
    costLevel: 'midrange',
    internetQuality: 8,
    safetyScore: 6,
    tags: [
      'tango', 'urban', 'cosmopolitan', 'cafe-culture', 'nightlife',
      'artsy', 'historical', 'passionate', 'steak'
    ],
    rating: 4.7,
    highlights: [
      'World-class steak and Malbec wine',
      'Tango shows in San Telmo',
      'European-style architecture',
      '24/7 cafe culture'
    ],
    description: 'The Paris of South America with passionate tango and non-stop energy'
  },
  {
    name: 'Mendoza',
    city: 'Mendoza',
    country: 'Argentina', 
    type: 'city',
    region: 'south-america',
    travelStyle: ['slow', 'relaxation', 'adventure'],
    socialVibe: 'balanced',
    energyLevel: 'medium',
    climate: 'temperate',
    vibe: 'chill',
    density: 'mixed',
    popularActivities: [
      'wine tasting', 'vineyard tours', 'hiking', 'mountain biking',
      'hot springs', 'cooking classes', 'olive oil tasting'
    ],
    foodScene: 'local',
    nightlife: 'moderate',
    costLevel: 'midrange',
    internetQuality: 7,
    safetyScore: 8,
    tags: [
      'wine', 'mountains', 'outdoors', 'relaxing', 'malbec',
      'adventure', 'scenic', 'culinary'
    ],
    rating: 4.5,
    highlights: [
      'World-renowned Malbec wine region',
      'Stunning Andes mountain backdrop', 
      'Thermal springs and spa treatments',
      'Olive oil and gourmet food tours'
    ],
    description: 'Argentina\'s premier wine region with breathtaking mountain scenery'
  },
  {
    name: 'Cordoba',
    city: 'Cordoba',
    country: 'Argentina',
    type: 'city',
    region: 'south-america',
    travelStyle: ['cultural', 'slow'],
    socialVibe: 'social',
    energyLevel: 'medium',
    climate: 'temperate',
    vibe: 'balanced',
    density: 'urban',
    popularActivities: [
      'university tours', 'historical sites', 'local music', 'cafe studying',
      'nightlife', 'street markets', 'artisan crafts'
    ],
    foodScene: 'local', 
    nightlife: 'vibrant',
    costLevel: 'budget',
    internetQuality: 7,
    safetyScore: 7,
    tags: [
      'student-city', 'university', 'cultural', 'historical',
      'nightlife', 'local-experience', 'artsy'
    ],
    rating: 4.3,
    highlights: [
      'Vibrant student nightlife and culture',
      'Historical Jesuit architecture',
      'Affordable living costs',
      'Local music and art scene'
    ],
    description: 'Argentina\'s student capital with rich history and budget-friendly living'
  }
];
