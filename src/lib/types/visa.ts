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
