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
  
  // New fields for filtering
  visaType?: VisaCategory;    // Main visa category
  visaSubtypes?: string[];    // e.g., ["Tourist", "Business", "Student"]
  processingTime?: string;    // e.g., "1-3 days", "2 weeks"
  costRange?: string;         // e.g., "$40-$80", "Free"
};

// Add new types for filtering
export type VisaCategory = 
  | 'Visa-Free'
  | 'Visa on Arrival'
  | 'e-Visa'
  | 'Visa Required'
  | 'Digital Nomad Visa'
  | 'Freelance Visa'
  | 'Tourist Visa'
  | 'Business Visa'
  | 'Student Visa'
  | 'Work Visa'
  | 'Transit Visa'
  | 'Other';

export interface VisaFilterOptions {
  categories: VisaCategory[];
  subtypes: string[];
  maxProcessingTime?: string;
  maxCost?: number;
  nomadFriendly?: boolean;
  workAllowed?: boolean;
}
