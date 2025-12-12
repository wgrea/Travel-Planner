// Create a file: src/lib/utils/countryDataEnhancer.ts
import type { NomadData, MoneySavingTips, FreeWorkspace } from '$lib/data/nomadData';

export function enhanceCountryData(
  baseData: NomadData,
  options?: {
    freeWorkspaces?: FreeWorkspace[];
    moneySavingTips?: Partial<MoneySavingTips>;
    touristyCities?: string[];
    coworkingMemberships?: any[];
  }
): NomadData {
  return {
    ...baseData,
    
    // Ensure all required fields exist
    internet: {
      ...baseData.internet,
      freePublicWifiSpots: baseData.internet.freePublicWifiSpots || 5 // Default
    },
    
    costs: {
      ...baseData.costs,
      libraryAccess: 0 // Always free
    },
    
    community: {
      ...baseData.community,
      nomadGroups: baseData.community.nomadGroups || [] // Default empty
    },
    
    // Add new data if provided
    freeWorkspaces: options?.freeWorkspaces || [],
    
    moneySavingTips: options?.moneySavingTips 
      ? {
          general: options.moneySavingTips.general || [],
          touristAreas: options.moneySavingTips.touristAreas || [],
          nonTouristAreas: options.moneySavingTips.nonTouristAreas || [],
          byPreference: options.moneySavingTips.byPreference || {
            coworking: [],
            cafe: [],
            library: [],
            hostel: [],
            hotel: []
          }
        }
      : undefined,
    
    coworkingMemberships: options?.coworkingMemberships || [],
    
    touristyCities: options?.touristyCities || []
  };
}