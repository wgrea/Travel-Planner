// src/lib/types/visa.ts
export type VisaInfo = {
  // Core visa info
  ease: string;
  freeLength: string;
  workPolicy: string;
  nomadVisa: boolean;
  incomeReq: string;
  category: string;
  
  // New detailed fields
  duration?: number;           // Visa duration in days
  cost?: number;              // Visa cost in USD
  applicationTime?: string;   // "On arrival", "2 weeks", "1 month", etc.
  entryType?: string;         // "single", "multiple"
  extensionsPossible?: boolean; // If visa can be extended
  extensionDuration?: number; // Extension length in days
  
  // Regional info
  region?: string;
  subregion?: string; // Optional - only for Europe for now
};

// Updated with ALL your countries
export type CountryCode = 
  | 'Argentina'
  | 'Armenia'
  | 'Australia'
  | 'Azerbaijan'
  | 'Belize'
  | 'Bolivia'
  | 'Brazil'
  | 'Canada'
  | 'Chile'
  | 'China'
  | 'Colombia'
  | 'Costa Rica'
  | 'Croatia'
  | 'Czech Republic'
  | 'Estonia'
  | 'France'
  | 'Georgia'
  | 'Germany'
  | 'Greece'
  | 'Guatemala'
  | 'India'
  | 'Indonesia'
  | 'Italy'
  | 'Japan'
  | 'Malaysia'
  | 'Mexico'
  | 'Nepal'
  | 'New Zealand'
  | 'Norway'
  | 'Panama'
  | 'Peru'
  | 'Philippines'
  | 'Poland'
  | 'Portugal'
  | 'Romania'
  | 'Slovenia'
  | 'South Korea'
  | 'Spain'
  | 'Sri Lanka'
  | 'Sweden'
  | 'Thailand'
  | 'Turkey'
  | 'United Arab Emirates'
  | 'United States'
  | 'Vietnam';

export type VisaData = Record<string, Record<string, VisaInfo>>; // Home -> Dest -> VisaInfo