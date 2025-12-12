// src/lib/data/resonanceData.ts


// ==================== DATA STRUCTURE ====================
// This is where you add actual country/city data

import type { CityResonanceProfile, RegionData } from '$lib/types/resonance';

// Import country resonance data
// In your resonance data file
import { argentinaResonance } from './countries/south-america/argentina/index';
import { thailandResonance } from './countries/southeast-asia/thailand/index';
import { brazilResonance } from './countries/south-america/brazil/index';
import { vietnamResonance } from './countries/southeast-asia/vietnam/index';
import { indonesiaResonance } from './countries/southeast-asia/indonesia/index';
import { portugalResonance } from './countries/europe/western-europe/portugal/index';
import { spainResonance } from './countries/europe/western-europe/spain/index';
import { georgiaResonance } from './countries/europe/caucasus/georgia/index';
import { mexicoResonance } from './countries/north-america/mexico/index';
import { azerbaijanResonance } from './countries/europe/caucasus/azerbaijan/index';
import { turkeyResonance } from './countries/europe/southern-europe/turkey/index';
import { unitedStatesResonance } from './countries/north-america/united-states/index';
import { greeceResonance } from './countries/europe/southern-europe/greece/index';
import { panamaResonance } from './countries/central-america/panama/index';
// Countries we've completed (add these to your imports):
import { japanResonance } from './countries/east-asia/japan/index';
import { italyResonance } from './countries/europe/southern-europe/italy/index';
import { franceResonance } from './countries/europe/western-europe/france/index';
import { laosResonance } from './countries/southeast-asia/laos/index';
import { indiaResonance } from './countries/south-asia/india/index';
import { bangladeshResonance} from './countries/south-asia/bangladesh/index';
import { nepalResonance } from './countries/south-asia/nepal/index';
import { moroccoResonance } from './countries/northern-africa/morocco/index';
import { ukResonance } from './countries/europe/western-europe/united-kingdom/index';

// Define proper TypeScript interfaces for the data structure
interface ResonanceSubregion {
  subregion: string;
  countries: CityResonanceProfile[][];
}

interface ResonanceRegion {
  region: string;
  countries?: CityResonanceProfile[][];
  subregions?: ResonanceSubregion[];
}

// Region-based structure matching your existing pattern
export const resonanceDataByRegion: ResonanceRegion[] = [
  {
    region: "South America",
    countries: [
      argentinaResonance,
      brazilResonance,
      // colombiaResonance,
      // peruResonance,
      // chileResonance,
    ]
  },
  {
    region: "North Africa",
    countries: [
      moroccoResonance,
    ]
  },
  {
    region: "North America",
    countries: [
      mexicoResonance,
      // canadaResonance,
      unitedStatesResonance,
    ]
  },
  {
    region: "Europe",
    subregions: [
      {
        subregion: "Western Europe",
        countries: [
          portugalResonance,
          spainResonance,
          franceResonance,
          ukResonance,
          // irelandResonance,
          // germanyResonance,
        ]
      },
      {
        subregion: "Eastern Europe", 
        countries: [
          // polandResonance,
          // czechRepublicResonance,
          // romaniaResonance,
        ]
      },
      {
        subregion: "Southern Europe",
        countries: [
          italyResonance,
          greeceResonance, // Listed cities to add later
          turkeyResonance,
          // croatiaResonance,
        ]
      },
      {
        subregion: "Caucasus",
        countries: [
          georgiaResonance,
          azerbaijanResonance,
          // armeniaResonance,
        ]
      }
    ]
  },
  {
    region: "Southeast Asia",
    countries: [
      thailandResonance,
      vietnamResonance,
      indonesiaResonance,
      laosResonance,
      // malaysiaResonance,
      // philippinesResonance,
    ]
  },
  {
    region: "East Asia",
    countries: [
      japanResonance,
      // southKoreaResonance,
      // taiwanResonance,
      // chinaResonance,
    ]
  },
  {
    region: "South Asia",
    countries: [
      indiaResonance,
      nepalResonance,
      bangladeshResonance,
      // sriLankaResonance,
    ]
  },
  {
    region: "Middle East",
    countries: [
      // unitedArabEmiratesResonance,
      // egyptResonance,
    ]
  },
  {
    region: "Oceania",
    countries: [
      // australiaResonance,
      // newZealandResonance,
    ]
  },
  {
    region: "Central America",
    countries: [
      // costaRicaResonance,
      panamaResonance,
      // guatemalaResonance,
    ]
  }
];

// src/lib/data/resonanceData.ts

// ==================== TAG SYSTEM ====================
// SINGLE SOURCE OF TRUTH for all tags

export const tagCategories = {
  // Experience Types - What kind of trip is this?
  experience: [
    'adventure', 'cultural', 'relaxation', 'party', 'digital-nomad', 
    'backpacker', 'local-experience', 'historical',
    'scuba-diving', 'surfing', 'skiing', 'snowboarding', 'mountain-exploration',
    'drinking-culture', 'breweries', 'wineries', 'festivals', 'music-festivals',
    'art-festivals', 'raves', 'speed-dating', 'singles-mixers', 'social-meetups',
    'expat-community', 'tech-hub', 'startup-scene', 'innovation-center',
    'spiritual-retreat', 'meditation', 'yoga', 'wildlife-experience', 'safari',
    'bird-watching', 'conventions', 'social-touch', 'dance-culture'
  ],
  
  // Vibe & Atmosphere - How does it feel?
  vibe: [
    'magical', 'chaotic', 'chill', 'balanced', 'lively', 'laid-back', 'festive',
    'spiritual', 'hippie', 'cosmopolitan', 'traditional', 'passionate', 'progressive',
    'romantic', 'mysterious', 'energetic', 'peaceful', 'vibrant', 'exciting'
  ],
  
  // Geography & Setting - Where is it?
  geography: [
    'beaches', 'mountains', 'islands', 'jungle', 'urban', 'rural',
    'coastal', 'river', 'nature', 'remote', 'scenic', 'biodiversity',
    'lakes', 'desert', 'volcano', 'forest', 'rainforest', 'archipelago'
  ],
  
  // Culture & Activities - What's happening?
  culture: [
    'arts', 'music', 'dance', 'food', 'nightlife', 'historical', 
    'student-city', 'university', 'cafe-culture', 'sports', 'culinary',
    'anime', 'bollywood', 'k-pop', 'theater', 'opera', 'museums', 'galleries',
    'architecture', 'fashion', 'design', 'literature', 'film', 'gaming'
  ],
  
  // Specific Features - Unique characteristics
  specific: [
    'tango', 'samba', 'carnival', 'wine', 'malbec', 'steak', 
    'street-food', 'capoeira', 'buddhist', 'temples', 
    'afro-brazilian', 'gaucho', 'patagonia',
    'sushi', 'pizza', 'tapas', 'curry', 'bbq', 'chocolate', 'cheese',
    'whisky', 'tequila', 'vodka', 'rum', 'coffee', 'tea'
  ]
};

// ==================== ACTIVITY SYSTEM ====================

export const activityCategories = {
  outdoor: [
    'hiking', 'beach relaxation', 'jungle trekking', 'surfing', 'water sports',
    'mountain biking', 'wildlife spotting', 'waterfall visits', 'sandboarding',
    // NEW: Additional outdoor
    'scuba diving', 'snorkeling', 'kayaking', 'rock climbing', 'camping',
    'horseback riding', 'skiing', 'snowboarding', 'ice skating', 'zip-lining'
  ],
  
  cultural: [
    'temple visits', 'museums', 'art galleries', 'historical sites', 
    'cooking classes', 'cultural events', 'religious festivals', 'opera house',
    // NEW: Additional cultural
    'language classes', 'traditional crafts', 'local ceremonies', 'heritage tours',
    'archaeological sites', 'castle visits', 'palace tours', 'monument viewing'
  ],
  
  food: [
    'street food tours', 'wine tasting', 'fine dining', 'local markets',
    'food tours', 'steak houses', 'cafe culture', 'seafood dining',
    // NEW: Additional food
    'brewery tours', 'distillery visits', 'cooking workshops', 'farm-to-table',
    'chocolate making', 'cheese tasting', 'coffee plantation tours', 'food festivals'
  ],
  
  urban: [
    'city exploration', 'shopping', 'nightlife', 'rooftop bars',
    'street art tours', 'theater', 'football matches', 'shopping malls',
    // NEW: Additional urban
    'museum hopping', 'gallery crawls', 'convention attendance', 'tech meetups',
    'startup events', 'networking mixers', 'speed dating', 'social dancing'
  ],
  
  adventure: [
    'amazon river tours', 'elephant sanctuaries', 'canyon exploration',
    'motorbike touring', 'boat expeditions', 'jungle hiking', 'full moon party',
    // NEW: Additional adventure
    'safari tours', 'wildlife photography', 'bird watching expeditions',
    'volcano hiking', 'cave exploration', 'glacier walking', 'desert camping'
  ],
  
  relaxation: [
    'spa treatments', 'hot springs', 'yoga classes', 'meditation retreats',
    'beach yoga', 'detox retreats', 'sunset watching', 'lagoon activities',
    // NEW: Additional relaxation
    'wellness retreats', 'massage therapy', 'thermal baths', 'sound healing',
    'forest bathing', 'mindfulness workshops', 'stress relief programs'
  ],
  
  social: [
    'samba clubs', 'tango dancing', 'beach parties', 'local music',
    'night markets', 'street parties', 'capoeira shows', 'music performances',
    // NEW: Additional social
    'expat meetups', 'language exchange', 'board game nights', 'dance classes',
    'singles events', 'community festivals', 'cultural mixers', 'hobby groups'
  ] 
};

// ==================== HELPER FUNCTIONS ====================

export const getAllLocations = (): CityResonanceProfile[] => {
  const allLocations: CityResonanceProfile[] = [];
  
  resonanceDataByRegion.forEach(region => {
    if (region.countries) {
      region.countries.forEach(countryArray => {
        allLocations.push(...countryArray);
      });
    }
    
    if (region.subregions) {
      region.subregions.forEach(subregion => {
        subregion.countries.forEach(countryArray => {
          allLocations.push(...countryArray);
        });
      });
    }
  });
  
  return allLocations;
};

export const getAllTags = (): string[] => {
  const allTags: string[] = [];
  Object.values(tagCategories).forEach(category => {
    allTags.push(...(category as readonly string[]));
  });
  return [...new Set(allTags)].sort();
};

export const getAllActivities = (): string[] => {
  const allActivities: string[] = [];
  Object.values(activityCategories).forEach(category => {
    allActivities.push(...(category as readonly string[]));
  });
  return [...new Set(allActivities)].sort();
};

export const getLocationsByRegion = (regionName: string): CityResonanceProfile[] => {
  const region = resonanceDataByRegion.find(r => r.region === regionName);
  if (!region) return [];
  
  const locations: CityResonanceProfile[] = [];
  
  if (region.countries) {
    region.countries.forEach(countryArray => {
      locations.push(...countryArray);
    });
  }
  
  if (region.subregions) {
    region.subregions.forEach(subregion => {
      subregion.countries.forEach(countryArray => {
        locations.push(...countryArray);
      });
    });
  }
  
  return locations;
};

// ==================== VALIDATION HELPERS ====================
// Use these to check your data

export const validateLocation = (location: CityResonanceProfile): string[] => {
  const errors: string[] = [];
  
  // Check tags exist in tagCategories
  location.tags.forEach(tag => {
    const allTags = getAllTags();
    if (!allTags.includes(tag)) {
      errors.push(`Invalid tag: "${tag}" - not found in tagCategories`);
    }
  });
  
  // Check activities exist in activityCategories
  location.popularActivities.forEach(activity => {
    const allActivities = getAllActivities();
    if (!allActivities.includes(activity)) {
      errors.push(`Invalid activity: "${activity}" - not found in activityCategories`);
    }
  });
  
  return errors;
};

/*
Top Priority (Cover multiple interests):

South Korea - Covers: k-pop, anime, tech-hub, conventions

Australia - Covers: scuba-diving, surfing, wildlife, breweries

Costa Rica - Covers: surfing, wildlife, yoga, bird-watching, expat-community

South Africa - Covers: safari, wineries, mountain-exploration

Second Tier:
5. Philippines - Covers: scuba-diving, beaches, digital-nomad
6. Egypt - Covers: scuba-diving (Red Sea), historical, spiritual
7. Canada - Covers: skiing, mountain-exploration, multicultural
8. Netherlands - Covers: raves, social-meetups, progressive culture

Niche Focus:
9. Switzerland/Austria - Covers: skiing, mountain-exploration
10. Belgium - Covers: breweries, EU hub
11. Cuba - Covers: dance-culture, vintage, music
*/