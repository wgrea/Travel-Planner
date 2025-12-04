import type { CityResonanceProfile } from '$lib/types/resonance';

export const greeceResonance: CityResonanceProfile[] = [
  {
    name: 'Greece Overview',
    city: 'Multiple Cities',
    country: 'Greece',
    type: 'country-overview',
    region: 'southern-europe',
    travelStyle: ['slow', 'cultural', 'relaxation', 'historical', 'nature'],
    socialVibe: 'balanced',
    energyLevel: 'medium',
    climate: 'warm',
    vibe: 'chill',
    density: 'mixed',
    popularActivities: [
      'beach relaxation', 'historical sites', 'island hopping', 'food tours',
      'hiking', 'boat tours', 'museum visits', 'sunset watching'
    ],
    foodScene: 'local',
    nightlife: 'vibrant',
    costLevel: 'midrange',
    internetQuality: 7,
    safetyScore: 8,
    tags: [
      'historical', 'islands', 'beaches', 'ancient',
      'mediterranean', 'hospitality', 'sunny', 'seafood'
    ],
    rating: 4.5,
    highlights: [
      'Ancient historical sites and mythology',
      'Stunning Mediterranean islands and beaches',
      'Delicious Mediterranean cuisine and fresh seafood',
      'Warm hospitality and relaxed lifestyle'
    ]
  },
  {
    name: 'Athens',
    city: 'Athens',
    country: 'Greece',
    type: 'city',
    region: 'southern-europe',
    travelStyle: ['cultural', 'historical', 'urban'],
    socialVibe: 'balanced',
    energyLevel: 'medium',
    climate: 'warm',
    vibe: 'chaotic',
    density: 'urban',
    popularActivities: [
      'acropolis visits', 'museum tours', 'ancient agora', 'plaka neighborhood',
      'mount lycabettus', 'changing of the guard', 'flea markets', 'rooftop bars'
    ],
    foodScene: 'mixed',
    nightlife: 'vibrant',
    costLevel: 'midrange',
    internetQuality: 8,
    safetyScore: 7,
    tags: [
      'ancient', 'historical', 'urban', 'chaotic',
      'cultural', 'museums', 'foodie', 'nightlife'
    ],
    rating: 4.3,
    highlights: [
      'Acropolis and Parthenon - ancient wonders',
      'Plaka neighborhood with traditional architecture',
      'National Archaeological Museum treasures',
      'Vibrant neighborhoods like Psyrri and Gazi'
    ],
    description: 'The ancient capital where history meets modern urban life'
  },
  {
    name: 'Santorini',
    city: 'Santorini',
    country: 'Greece',
    type: 'city',
    region: 'southern-europe',
    travelStyle: ['slow', 'relaxation', 'romantic'],
    socialVibe: 'social',
    energyLevel: 'medium',
    climate: 'warm',
    vibe: 'magical',
    density: 'mixed',
    popularActivities: [
      'caldera views', 'sunset watching', 'wine tasting', 'volcano tours',
      'beach visits', 'boat cruises', 'white village exploration', 'photography'
    ],
    foodScene: 'mixed',
    nightlife: 'vibrant',
    costLevel: 'luxury',
    internetQuality: 6,
    safetyScore: 8,
    tags: [
      'romantic', 'caldera', 'sunset', 'volcanic',
      'white-buildings', 'luxury', 'photogenic', 'honeymoon'
    ],
    rating: 4.7,
    highlights: [
      'Breathtaking caldera sunsets from Oia',
      'Unique black and red sand beaches',
      'Local Assyrtiko wine tasting tours',
      'White-washed villages with blue domes'
    ],
    description: 'The iconic volcanic island with stunning caldera views and romantic sunsets'
  },
  {
    name: 'Crete (Heraklion)',
    city: 'Heraklion',
    country: 'Greece',
    type: 'city',
    region: 'southern-europe',
    travelStyle: ['slow', 'cultural', 'nature'],
    socialVibe: 'balanced',
    energyLevel: 'medium',
    climate: 'warm',
    vibe: 'traditional',
    density: 'mixed',
    popularActivities: [
      'knossos palace', 'archeological museum', 'venetian harbor', 'mountain villages',
      'beach days', 'greek cooking classes', 'samaria gorge hike', 'local markets'
    ],
    foodScene: 'local',
    nightlife: 'moderate',
    costLevel: 'midrange',
    internetQuality: 7,
    safetyScore: 8,
    tags: [
      'minoan', 'traditional', 'mountains', 'beaches',
      'archeological', 'hospitality', 'food', 'nature'
    ],
    rating: 4.4,
    highlights: [
      'Ancient Minoan civilization at Knossos Palace',
      'Dramatic Samaria Gorge hiking',
      'Traditional mountain villages like Archanes',
      'Authentic Cretan cuisine and hospitality'
    ],
    description: 'The largest Greek island with Minoan history, dramatic gorges, and traditional villages'
  },
  {
    name: 'Thessaloniki',
    city: 'Thessaloniki',
    country: 'Greece',
    type: 'city',
    region: 'southern-europe',
    travelStyle: ['slow', 'cultural', 'urban'],
    socialVibe: 'social',
    energyLevel: 'medium',
    climate: 'temperate',
    vibe: 'laid-back',
    density: 'urban',
    popularActivities: [
      'white tower', 'byzantine walls', 'waterfront promenade', 'food markets',
      'roman agora', 'modiano market', 'university district', 'cultural festivals'
    ],
    foodScene: 'local',
    nightlife: 'vibrant',
    costLevel: 'midrange',
    internetQuality: 7,
    safetyScore: 8,
    tags: [
      'byzantine', 'student', 'foodie', 'cultural',
      'laid-back', 'historical', 'festivals', 'university'
    ],
    rating: 4.3,
    highlights: [
      'Rich Byzantine history and monuments',
      'Vibrant food scene and markets',
      'Beautiful waterfront promenade',
      'University town with youthful energy'
    ],
    description: 'The cultural capital of Northern Greece with Byzantine heritage and vibrant food scene'
  },
  {
    name: 'Rhodes',
    city: 'Rhodes',
    country: 'Greece',
    type: 'city',
    region: 'southern-europe',
    travelStyle: ['slow', 'historical', 'relaxation'],
    socialVibe: 'balanced',
    energyLevel: 'low',
    climate: 'warm',
    vibe: 'historical',
    density: 'mixed',
    popularActivities: [
      'medieval old town', 'palace of the grand master', 'lindos acropolis', 'butterfly valley',
      'beach relaxation', 'ancient kamiros', 'boat trips', 'castle exploration'
    ],
    foodScene: 'mixed',
    nightlife: 'moderate',
    costLevel: 'midrange',
    internetQuality: 6,
    safetyScore: 8,
    tags: [
      'medieval', 'knights', 'castle', 'historical',
      'island', 'beaches', 'unesco', 'ancient'
    ],
    rating: 4.4,
    highlights: [
      'UNESCO medieval Old Town with cobblestone streets',
      'Ancient Lindos Acropolis with sea views',
      'Butterfly Valley natural reserve',
      'Knights of Rhodes history and castles'
    ],
    description: 'The medieval island with crusader castles, ancient ruins, and beautiful beaches'
  }
];