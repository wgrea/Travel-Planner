// src/lib/data/filterData.ts
import type { CountryResonanceProfile } from '$lib/types/resonance';

// Import country resonance data
import { argentinaResonance } from './countries/south-america/argentina';
// import { brazilResonance } from './countries/south-america/brazil';
// import { thailandResonance } from './countries/southeast-asia/thailand';
// Add more imports as you create them...

// Activity categories for both nomads and vacationers
export const activityCategories = {
  outdoor: [
    'hiking', 'beaches', 'surfing', 'diving', 'skiing', 'trekking',
    'wildlife safari', 'kayaking', 'cycling', 'rock climbing', 'camping'
  ],
  cultural: [
    'historical sites', 'museums', 'temples', 'local festivals', 'art galleries',
    'architecture', 'traditional villages', 'cultural performances', 'street art'
  ],
  urban: [
    'city exploration', 'food tours', 'shopping', 'nightlife', 'cafes',
    'local markets', 'photography', 'theater', 'live music'
  ],
  relaxation: [
    'spa & wellness', 'yoga', 'meditation', 'hot springs', 'beach relaxation',
    'nature retreats', 'quiet reading', 'stargazing'
  ],
  adventure: [
    'zip-lining', 'paragliding', 'rafting', 'bungee jumping', 'off-road',
    'cave exploration', 'volcano hiking', 'desert safari'
  ],
  food: [
    'wine tasting', 'cooking classes', 'street food', 'fine dining',
    'local cuisine', 'food markets', 'brewery tours', 'coffee culture'
  ],
  social: [
    'meetups', 'language exchange', 'dance classes', 'group tours',
    'community events', 'sports events', 'festivals'
  ]
};

// Region-based structure matching your existing pattern
export const resonanceDataByRegion = [
  {
    region: "South America",
    countries: [
      argentinaResonance,
      // brazilResonance,
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
      // thailandResonance,
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

// Helper function to flatten all countries for filtering
export const getAllCountries = (): CountryResonanceProfile[] => {
  return resonanceDataByRegion.flatMap(region => 
    region.countries ? region.countries : 
    region.subregions?.flatMap(sub => sub.countries) || []
  );
};

// Helper function to get all unique activities
export const getAllActivities = (): string[] => {
  const allActivities = new Set<string>();
  getAllCountries().forEach(country => {
    country.popularActivities.forEach(activity => allActivities.add(activity));
  });
  return Array.from(allActivities).sort();
};

// Helper function to get all unique tags
export const getAllTags = (): string[] => {
  const allTags = new Set<string>();
  getAllCountries().forEach(country => {
    country.tags.forEach(tag => allTags.add(tag));
  });
  return Array.from(allTags).sort();
};

// Helper to get countries by region
export const getCountriesByRegion = (region: string): CountryResonanceProfile[] => {
  const regionData = resonanceDataByRegion.find(r => r.region === region);
  if (!regionData) return [];
  
  return regionData.countries ? regionData.countries : 
         regionData.subregions?.flatMap(sub => sub.countries) || [];
};

// Helper to get all unique "bestFor" categories
export const getAllBestFor = (): string[] => {
  const allBestFor = new Set<string>();
  getAllCountries().forEach(country => {
    country.bestFor.forEach(category => allBestFor.add(category));
  });
  return Array.from(allBestFor).sort();
};