// src/lib/data/resonanceData.ts

/* I think notes that should be taken should be in the data.ts
There is only one country that is listed when I select #party, what else could party go to or how can I be specific for what types of parties?

*/
import type { CityResonanceProfile } from '$lib/types/resonance';

// Import country resonance data
// In your resonance data file
import { argentinaResonance } from './countries/south-america/argentina/resonance';
import { thailandResonance } from './countries/southeast-asia/thailand/resonance';
import { brazilResonance } from './countries/south-america/brazil/resonance';
import { vietnamResonance } from './countries/southeast-asia/vietnam/resonance';
import { indonesiaResonance } from './countries/southeast-asia/indonesia/resonance';
import { portugalResonance } from './countries/europe/western-europe/portugal/resonance';
import { spainResonance } from './countries/europe/western-europe/spain/resonance';
import { georgiaResonance } from './countries/europe/caucasus/georgia/resonance';
import { mexicoResonance } from './countries/north-america/mexico/resonance';
import { azerbaijanResonance } from './countries/europe/caucasus/azerbaijan/resonance';
import { turkeyResonance } from './countries/europe/southern-europe/turkey/resonance';
import { unitedStatesResonance } from './countries/north-america/united-states/resonance';
import { greeceResonance } from './countries/europe/southern-europe/greece/resonance';
import { panamaResonance } from './countries/central-america/panama';
// Countries we've completed (add these to your imports):
import { japanResonance } from './countries/east-asia/japan';
import { italyResonance } from './countries/europe/southern-europe/italy';
import { franceResonance } from './countries/europe/western-europe/france';
import { laosResonance } from './countries/southeast-asia/laos';
import { indiaResonance } from './countries/south-asia/india';
import { bangladeshResonance} from './countries/south-asia/bangladesh';
import { nepalResonance } from './countries/south-asia/nepal';
import { moroccoResonance } from './countries/northern-africa/morocco';
import { ukResonance } from './countries/europe/western-europe/united-kingdom';

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
          greeceResonance,
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
// Not the whole file. Above just lists the countries and regions.
// Feel free to add a new filter that is more relavent

/* I don't know what file I should leave these in but I will list the ideas I want to add
- Free Scuba Diving (I meant free swim, not $0 swim but that would be cool to include), Surfing
- Skiing, snowboarding, mountain exploration
- Drinking culture, breweries, wineries
- Festivals, music festivals, art festivals, raves
- Speed dating, singles mixers, social meetups
- expat/nomad communities (maybe already in there but more for improvement)
- Anime lovers, bollywood fans, k-pop enthusiasts
- Tech hubs, startup scenes, innovation centers
- Spiritual retreats, meditation centers, yoga hubs
- Wildlife experiences, safaris, birdwatching
- what about 18+ events like munches, play parties, etc.?
- where are conventions more common?
- How about events where physial touch is more prevalent?
- definitely should add the events I am adding from another project. Another planning app, but not a traveling app. 
- where physical touch (from the opposite gender) is more common at bars or parties

- maybe types of drinks from other cultures might be a separate project


- I guess to add more tags to a country, just show what i already have for a country. 
*/

// ORGANIZED TAG CATEGORIES (replaces redundant systems)
// These show what you can select

// What does this do since there are two export const that have tags. These don't get a red line when a new piece of data shows up
export const tagCategories = {
  // Experience Types - What kind of trip is this?
  experience: [
    'adventure', 'cultural', 'relaxation', 'party', 'digital-nomad', 'backpacker', 'local-experience', 'historical'
  ],
  
  // Vibe & Atmosphere - How does it feel?
  vibe: [
    'magical', 'chaotic', 'chill', 'balanced', 'lively', 'laid-back', 'festive',
    'spiritual', 'hippie', 'cosmopolitan', 'traditional', 'passionate', 'progressive'
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
// These show what you can select
//Delete this part after
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