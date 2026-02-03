// src/lib/data/nomadData.ts
// Might need to change the name since this is about coworking spaces while there are other pages that talk about how to work abroad and also a support page

// Import nomad data from all countries
import { thailandNomadData } from './countries/southeast-asia/thailand/index'; 
import { vietnamNomadData } from './countries/southeast-asia/vietnam/index'; 
import { indonesiaNomadData } from './countries/southeast-asia/indonesia/index';
import { portugalNomadData } from './countries/western-europe/portugal/index';
import { spainNomadData } from './countries/western-europe/spain/index';
import { georgiaNomadData } from './countries/caucasus/georgia/index';
import { mexicoNomadData } from './countries/north-america/mexico';
import { argentinaNomadData } from './countries/south-america/argentina/index';
import { azerbaijanNomadData } from './countries/caucasus/azerbaijan/index';
import { brazilNomadData } from './countries/south-america/brazil/index';
import { turkeyNomadData } from './countries/southern-europe/turkey/index';
import { unitedStatesNomadData } from './countries/north-america/united-states/index';
import { greeceNomadData } from './countries/southern-europe/greece/index';
import { panamaNomadData } from './countries/central-america/panama/index';
import { japanNomadData } from './countries/east-asia/japan/index';
import { italyNomadData } from './countries/southern-europe/italy/index';
import { franceNomadData } from './countries/western-europe/france/index';
import { laosNomadData } from './countries/southeast-asia/laos/index';
import { indiaNomadData } from './countries/south-asia/india/index';
import { bangladeshNomadData} from './countries/south-asia/bangladesh/index';
import { nepalNomadData } from './countries/south-asia/nepal/index';
import { moroccoNomadData } from './countries/northern-africa/morocco/index';
import { ukNomadData } from './countries/western-europe/united-kingdom/index';

export const nomadDataByRegion: RegionNomadData[] = [
    {
    region: "East Asia",
    countries: [
      japanNomadData,
    ]
  },
  {
    region: "South Asia",
    countries: [
      indiaNomadData,
      nepalNomadData,
      bangladeshNomadData,
    ]
  },
  {
    region: "Southeast Asia",
    countries: [
      thailandNomadData,
      vietnamNomadData,
      indonesiaNomadData,
      laosNomadData,
    ]
  },
  {
    region: "Europe",
    subregions: [
      {
        subregion: "Southern Europe",
        countries: [
          turkeyNomadData,
          greeceNomadData,
          italyNomadData
        ]
      },
      {
        subregion: "Western Europe",
        countries: [
          franceNomadData,
          ukNomadData,
          portugalNomadData,
          spainNomadData,
        ]
      },
      {
        subregion: "Caucasus", 
        countries: [
          georgiaNomadData,
          azerbaijanNomadData,
        ]
      }
    ]
  },
    {
    region: "Central America", 
    countries: [
      panamaNomadData
    ]
  },
  {
    region: "North Africa",
    countries: [
      moroccoNomadData,
    ]
  },
  {
    region: "North America",
    countries: [
      mexicoNomadData,
      unitedStatesNomadData,
    ]
  },
  {
    region: "South America", 
    countries: [
      // colombiaNomadData,
      argentinaNomadData,
      brazilNomadData,
    ]
  }
];

// src/lib/data/nomadData.ts
// Countries are already imported above
// Make sure to keep libraries in free. Do not put then in coworking spots. Do not put paid coworking spots in free UNLESS if the spot is free which so far, it is unlikey that the coworking spot is.
// Make sure to show a good country example
// I do not think I am showing the coworking memberships on the page yet
// Put each number in USD since the currency calculator default is USD

export interface Workspace {
  name: string;
  city: string;
  country: string;
  type: 'coworking' | 'cafe' | 'hostel' | 'hotel' | 'library' | 'public_space' | 'cafe_coworking' | 'coliving' | 'coliving_hostel'; // ADD 'coliving' and 'coliving_hostel'
  dayPassPrice?: number;
  monthlyPrice?: number;
  hourlyRate?: number;
  rating: number;
  amenities: string[];
  bestFor: string[];
  wifiSpeed: number;
  powerOutlets: number;
  noiseLevel: number;
  hours?: string;
  address?: string;
  website?: string;
  freeTrialDays?: number;
  membershipDiscount?: number;
  touristArea?: boolean;
  notes?: string;
  
  // Budget and categorization
  budgetCategory?: 'zero_spend' | 'already_paid' | 'small_purchase' | 'direct_payment';
  includedWithStay?: boolean;
  minimumPurchase?: number;
  dayPassForNonGuests?: boolean;
  
  // Hostel-specific
  hostelType?: 'party' | 'quiet_work' | 'wifi_focused' | 'basic' | 'social';
  
  // Seasonal pricing
  seasonalPricingRef?: string;
  peakStayLimit?: string;
  peakStayMin?: string;
  communityEvents?: string;
  dedicatedDesks?: boolean;
  // Also add to NomadData:
  hostelTypes?: Record<string, {
    description: string;
    recommendedFor: string[];
    notRecommendedFor: string[];
    avgWifiSpeed: number;
    noiseLevel: string;
    examples: string[];
  }>;
  seasonalStrategies?: Record<string, {
    months: string[];
    strategy: string;
    priceAdjustment: string;
    bookingAdvice: string;
    workEnvironment: string;
  }>;
}

export interface FreeWorkspace {
  name: string;
  city: string;
  type: 'library' | 'community_center' | 'public_space' | 'university' | 'mall' | 'park';
  description: string;
  cost: 'free' | 'donation' | 'purchase_required';
  wifi: boolean;
  wifiSpeed?: number;
  powerOutlets: boolean;
  hours: string;
  amenities: string[];
  bestFor: string[];
  noiseLevel: number;
  address?: string;
  notes?: string;
  
  // ADD THIS:
  budgetCategory?: 'zero_spend' | 'small_purchase'; // Maps to our selector
}

export interface CoworkingMembership {
  name: string;
  monthlyPrice: number;
  coverage: string[];
  dayPassAvailable: boolean;
  dayPassPrice?: number;
  trialDays: number;
  benefits: string[];
  bestFor: string;
  website?: string;
}

export interface MoneySavingTips {
  general: string[];
  touristAreas: string[];
  nonTouristAreas: string[];
  byPreference: {
    coworking: string[];
    cafe: string[];
    library: string[];
    hostel: string[];
    hotel: string[];
  };
}

export interface NomadData {
  country: string;
  cities?: string[];
  internet: {
    speed: number;
    reliability: number;
    coworkingSpaces: number;
    freePublicWifiSpots?: number;
  };
  costs: {
    coworkingMonthly: number;
    simCardMonthly: number;
    coffeeShopWork: number;
    libraryAccess?: number;
  };
  community: {
    expatSize: number;
    englishLevel: number;
    safety: number;
    nomadGroups?: string[];
  };
  workspaces?: Workspace[];
  freeWorkspaces?: FreeWorkspace[];
  moneySavingTips?: MoneySavingTips;
  coworkingMemberships?: CoworkingMembership[];
  touristyCities?: string[];
  hostelTypes?: {
    [key: string]: {
      description: string;
      recommendedFor: string[];
      notRecommendedFor: string[];
      avgWifiSpeed: number;
      noiseLevel: string;
      examples: string[];
    };
  };
  seasonalStrategies?: {
    [key: string]: {
      months: string[];
      strategy: string;
      priceAdjustment: string;
      bookingAdvice: string;
      workEnvironment: string;
    };
  };
}

export interface SubregionNomadData {
  subregion: string;
  countries: NomadData[];
}

export interface RegionNomadData {
  region: string;
  subregions?: SubregionNomadData[];
  countries?: NomadData[];
}

// FLAT ARRAY
export const nomadData: NomadData[] = nomadDataByRegion.flatMap(region => {
  if (region.subregions) {
    return region.subregions.flatMap(subregion => subregion.countries);
  } else if (region.countries) {
    return region.countries;
  }
  return [];
});

// HELPER FUNCTIONS
export function getNomadDataByCountry(countryName: string): NomadData | undefined {
  return nomadData.find(country => country.country.toLowerCase() === countryName.toLowerCase());
}

export function getAllRegions(): string[] {
  return nomadDataByRegion.map(region => region.region);
}

// Add these helper functions to nomadData.ts

export function getNomadDataByRegion(regionName: string): NomadData[] {
  const region = nomadDataByRegion.find(r => r.region === regionName);
  if (!region) return [];
  
  if (region.subregions) {
    return region.subregions.flatMap(subregion => subregion.countries);
  }
  return region.countries || [];
}

export function getNomadDataBySubregion(regionName: string, subregionName: string): NomadData[] {
  const region = nomadDataByRegion.find(r => r.region === regionName);
  if (!region || !region.subregions) return [];
  
  const subregion = region.subregions.find(s => s.subregion === subregionName);
  return subregion ? subregion.countries : [];
}

export function getSubregionsByRegion(regionName: string): string[] {
  const region = nomadDataByRegion.find(r => r.region === regionName);
  if (!region || !region.subregions) return [];
  return region.subregions.map(subregion => subregion.subregion);
}

// In nomadData.ts, update the getBudgetCategory function:
export function getBudgetCategory(workspace: Workspace | FreeWorkspace): string {
  if ('cost' in workspace) {
    // FreeWorkspace
    if (workspace.cost === 'free') return 'zero_spend';
    if (workspace.cost === 'purchase_required') return 'small_purchase';
    return 'zero_spend';
  } else {
    // Workspace
    const w = workspace as Workspace;
    
    // Cafes are small purchase
    if (w.type === 'cafe') return 'small_purchase';
    
    // Free libraries
    if (w.type === 'library' && (!w.dayPassPrice || w.dayPassPrice === 0)) 
      return 'zero_spend';
    
    // Hostels and Hotels are "already_paid" if they have includedWithStay or low/no day pass
    if ((w.type === 'hostel' || w.type === 'hotel')) {
      // If workspace is explicitly marked as included with stay
      if (w.includedWithStay === true) return 'already_paid';
      
      // If day pass is very cheap or free (typical for hostels)
      if (w.dayPassPrice && w.dayPassPrice <= 50) return 'already_paid';
      
      // Default for hostels/hotels with no explicit pricing
      return 'already_paid';
    }
    
    // Coworking spaces with day passes
    if (w.dayPassPrice && w.dayPassPrice > 0) return 'direct_payment';
    
    // Default for coworking spaces
    if (w.type === 'coworking') return 'direct_payment';
    
    // Public spaces
    if (w.type === 'public_space') return 'zero_spend';
    
    return 'direct_payment';
  }
}

export function filterWorkspacesByBudget(
  workspaces: Workspace[], 
  freeWorkspaces: FreeWorkspace[], 
  category: string
): (Workspace | FreeWorkspace)[] {
  const allSpaces = [...workspaces, ...freeWorkspaces];
  return allSpaces.filter(space => getBudgetCategory(space) === category);
}