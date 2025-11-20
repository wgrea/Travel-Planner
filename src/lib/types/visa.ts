// src/lib/types/visa.ts
export type VisaInfo = {
  ease: string;
  freeLength: string;
  workPolicy: string;
  nomadVisa: boolean;
  incomeReq: string;
  category: string;
};

export type CountryCode = 
  | 'Australia' 
  | 'Georgia' 
  | 'Sri Lanka' 
  | 'Malaysia' 
  | 'Brazil' 
  | 'China' 
  | 'Thailand'
  | 'Portugal'
  | 'Spain'
  | 'Mexico';

export type VisaData = Record<CountryCode, VisaInfo>;