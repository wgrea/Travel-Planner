// src/lib/utils/aiDataUpdater.ts
import { minimalData } from '$lib/data/minimalData';

export interface CountryUpdate {
  countryId: string;
  updates: {
    costs?: {
      hostel_avg_night?: number;
      airbnb_avg_night?: number;
      meal_avg?: number;
      train_avg_intercity?: number;
      local_transit_daypass?: number;
    };
    visa?: {
      visa_free_days?: number;
      visa_types?: string[];
      evisa_available?: boolean;
      requirements_summary?: string;
    };
    seasonality?: {
      best_months?: string[];
      peak_months?: string[];
      shoulder_months?: string[];
      best_time_description?: string;
    };
  };
  source: string;
  timestamp: string;
}

export function createAIPrompt(countryName: string, existingData: any): string {
  return `
Update travel data for ${countryName}. Current data:
${JSON.stringify(existingData, null, 2)}

Please provide updated information in this exact JSON format:

{
  "countryId": "${existingData.id}",
  "updates": {
    "costs": {
      "hostel_avg_night": number,
      "airbnb_avg_night": number,
      "meal_avg": number,
      "train_avg_intercity": number,
      "local_transit_daypass": number
    },
    "visa": {
      "visa_free_days": number,
      "visa_types": ["type1", "type2"],
      "evisa_available": boolean,
      "requirements_summary": "string description"
    },
    "seasonality": {
      "best_months": ["Jan", "Feb", "Mar"],
      "peak_months": ["Dec", "Jan"],
      "shoulder_months": ["Mar", "Apr", "Oct", "Nov"],
      "best_time_description": "November to February for dry season"
    }
  },
  "source": "ai_update_${new Date().toISOString().split('T')[0]}",
  "timestamp": "${new Date().toISOString()}"
}

Please ensure all numbers are current USD estimates and information is accurate for 2024.
`;
}

export function applyAIUpdate(update: CountryUpdate) {
  const country = minimalData.countries[update.countryId];
  if (country) {
    // Merge updates
    Object.keys(update.updates).forEach(k => {
      const key = k as keyof CountryUpdate['updates'];
      if (update.updates[key]) {
        // Use type assertion to avoid type errors
        (country as any)[key] = { ...(country as any)[key], ...update.updates[key] };
      }
    });
    // Remove lastUpdated line since it doesn't exist in Country type
  }
  return minimalData;
}