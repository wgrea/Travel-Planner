// src/lib/data/resonanceData.ts
import type { CityResonanceProfile } from '$lib/types/resonance';

// Import country resonance data
import { argentinaResonance } from './countries/south-america/argentina/resonance';
import { thailandResonance } from './countries/southeast-asia/thailand/resonance';
import { brazilResonance } from './countries/south-america/brazil/resonance';

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
    region: "North America",
    countries: [
      // mexicoResonance,
      // canadaResonance,
      // unitedStatesResonance,
    ]
  },
  {
    region: "Europe",
    subregions: [
      {
        subregion: "Western Europe",
        countries: [
          // portugalResonance,
          // spainResonance,
          // franceResonance,
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
          // italyResonance,
          // greeceResonance,
          // croatiaResonance,
        ]
      },
      {
        subregion: "Caucasus",
        countries: [
          // georgiaResonance,
          // azerbaijanResonance,
          // armeniaResonance,
        ]
      }
    ]
  },
  {
    region: "Southeast Asia",
    countries: [
      thailandResonance,
      // vietnamResonance,
      // indonesiaResonance,
      // malaysiaResonance,
      // philippinesResonance,
    ]
  },
  {
    region: "East Asia",
    countries: [
      // japanResonance,
      // southKoreaResonance,
      // taiwanResonance,
      // chinaResonance,
    ]
  },
  {
    region: "South Asia",
    countries: [
      // indiaResonance,
      // nepalResonance,
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
      // panamaResonance,
      // guatemalaResonance,
    ]
  }
];

// ORGANIZED TAG CATEGORIES (replaces redundant systems)
export const tagCategories = {
  // Experience Types - What kind of trip is this?
  experience: [
    'adventure', 'cultural', 'relaxation', 'party', 'digital-nomad', 'backpacker', 'local-experience'
  ],
  
  // Vibe & Atmosphere - How does it feel?
  vibe: [
    'chaotic', 'chill', 'balanced', 'lively', 'laid-back', 'festive',
    'spiritual', 'hippie', 'cosmopolitan', 'traditional', 'passionate'
  ],
  
  // Geography & Setting - Where is it?
  geography: [
    'beaches', 'mountains', 'islands', 'jungle', 'urban', 'rural',
    'coastal', 'river', 'nature', 'remote', 'scenic', 'biodiversity'
  ],
  
  // Culture & Activities - What's happening?
  culture: ['arts', 'music', 'dance', 'food', 'nightlife', 'historical', 'student-city', 'university', 'cafe-culture', 'sports', 'culinary'],
  // Specific Features - Unique characteristics
  specific: ['tango', 'samba', 'carnival', 'wine', 'malbec', 'steak', 'street-food', 'capoeira', 'buddhist', 'temples', 'afro-brazilian', 'gaucho', 'patagonia']
};

// ACTIVITY CATEGORIES - Things to actually DO
export const activityCategories = {
  outdoor: [
    'hiking', 'beach relaxation', 'jungle trekking', 'surfing', 'water sports',
    'mountain biking', 'wildlife spotting', 'waterfall visits', 'sandboarding'
  ],
  
  cultural: [
    'temple visits', 'museums', 'art galleries', 'historical sites', 
    'cooking classes', 'cultural events', 'religious festivals', 'opera house'
  ],
  
  food: [
    'street food tours', 'wine tasting', 'fine dining', 'local markets',
    'food tours', 'steak houses', 'cafe culture', 'seafood dining'
  ],
  
  urban: [
    'city exploration', 'shopping', 'nightlife', 'rooftop bars',
    'street art tours', 'theater', 'football matches', 'shopping malls'
  ],
  
  adventure: [ // I don't think I should see Thailand when I select 'amazon river tours'
    'amazon river tours', 'elephant sanctuaries', 'canyon exploration',
    'motorbike touring', 'boat expeditions', 'jungle hiking', 'full moon party'
  ],
  
  relaxation: [
    'spa treatments', 'hot springs', 'yoga classes', 'meditation retreats',
    'beach yoga', 'detox retreats', 'sunset watching', 'lagoon activities'
  ],
  
  social: [
    'samba clubs', 'tango dancing', 'beach parties', 'local music',
    'night markets', 'street parties', 'capoeira shows', 'music performances'
  ]
};

// Helper function to flatten all locations for filtering - FIXED
export const getAllLocations = (): CityResonanceProfile[] => {
  const allLocations: CityResonanceProfile[] = [];
  
  resonanceDataByRegion.forEach(region => {
    // Handle direct countries
    if (region.countries) {
      region.countries.forEach(countryArray => {
        countryArray.forEach(location => {
          allLocations.push(location);
        });
      });
    }
    
    // Handle subregions
    if (region.subregions) {
      region.subregions.forEach(subregion => {
        subregion.countries.forEach(countryArray => {
          countryArray.forEach(location => {
            allLocations.push(location);
          });
        });
      });
    }
  });
  
  return allLocations;
};

// Get all tags from the organized categories
export const getAllTags = (): string[] => {
  return Object.values(tagCategories).flat().sort();
};

// Get all activities from the organized categories  
export const getAllActivities = (): string[] => {
  return Object.values(activityCategories).flat().sort();
};

// Helper to get locations by region - FIXED
export const getLocationsByRegion = (regionName: string): CityResonanceProfile[] => {
  const region = resonanceDataByRegion.find(r => r.region === regionName);
  if (!region) return [];
  
  const locations: CityResonanceProfile[] = [];
  
  // Handle direct countries
  if (region.countries) {
    region.countries.forEach(countryArray => {
      countryArray.forEach(location => {
        locations.push(location);
      });
    });
  }
  
  // Handle subregions
  if (region.subregions) {
    region.subregions.forEach(subregion => {
      subregion.countries.forEach(countryArray => {
        countryArray.forEach(location => {
          locations.push(location);
        });
      });
    });
  }
  
  return locations;
};