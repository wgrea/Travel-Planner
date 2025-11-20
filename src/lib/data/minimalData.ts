// src/lib/data/minimalData.ts
// Unless necessary, avoid making a masterData.ts file
import type { MinimalData } from '$lib/types/minimalData';

export const minimalData: MinimalData = {
  countries: {
    'thailand': {
      id: 'thailand',
      name: 'Thailand',
      continent: 'Asia',
      region: 'Southeast Asia',
      popularCities: ['bangkok', 'chiang-mai'],
      visa: { difficulty: 'easy' },
      costs: { tier: 'low' },
      filters: { activities: ['beach', 'cultural', 'food'] },
      seasonality: { bestMonths: [11, 12, 1, 2], worstMonths: [4, 5, 6, 7, 8, 9] } // Add this
    },
    'portugal': {
      id: 'portugal', 
      name: 'Portugal',
      continent: 'Europe',
      region: 'Western Europe',
      popularCities: ['lisbon', 'porto'],
      visa: { difficulty: 'medium' },
      costs: { tier: 'medium' },
      filters: { activities: ['cultural', 'food', 'historic'] },
      seasonality: { bestMonths: [4, 5, 6, 9, 10], worstMonths: [7, 8, 12, 1] } // Add this
    }
  },
  cities: {
    'bangkok': { 
      id: 'bangkok', 
      name: 'Bangkok', 
      countryCode: 'thailand', 
      costTier: 'low', 
      vibe: ['urban'] 
    },
    'chiang-mai': { 
      id: 'chiang-mai', 
      name: 'Chiang Mai', 
      countryCode: 'thailand', 
      costTier: 'low', 
      vibe: ['cultural'] 
    },
    'lisbon': { 
      id: 'lisbon', 
      name: 'Lisbon', 
      countryCode: 'portugal', 
      costTier: 'medium', 
      vibe: ['historic'] 
    }
  },
  filters: {
    continents: ['Asia', 'Europe'],
    regions: ['Southeast Asia', 'Western Europe'],
    activities: ['beach', 'cultural', 'food', 'historic'],
    costTiers: ['low', 'medium', 'high'],
    visaDifficulties: ['easy', 'medium', 'hard']
  }
};
