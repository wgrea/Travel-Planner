// src/lib/data/countries/europe/united-kingdom/visa.ts
import type { VisaInfo } from '$lib/types/visa';

export const ukVisaData: Record<string, VisaInfo> = {
    // US citizens → United Kingdom
    'United States': {
      ease: "Visa-free (Electronic Travel Authorisation from 2024)",
      freeLength: "6 months",
      workPolicy: "No work allowed on standard visitor visa",
      nomadVisa: false,
      incomeReq: "Not applicable for visitor visa",
      category: "Easy",
      duration: 180,
      cost: 0, // ETA will have small fee from 2024
      applicationTime: "ETA: minutes to hours",
      entryType: "multiple"
    },
    
    // EU citizens → United Kingdom (using Germany as example)
    'Germany': {
      ease: "Visa-free (Electronic Travel Authorisation from 2024)",
      freeLength: "6 months",
      workPolicy: "No work allowed on standard visitor visa",
      nomadVisa: false,
      incomeReq: "Not applicable for visitor visa",
      category: "Easy",
      duration: 180,
      cost: 0, // ETA will have small fee from 2024
      applicationTime: "ETA: minutes to hours",
      entryType: "multiple"
    },
    
    // Canadian citizens → United Kingdom
    'Canada': {
      ease: "Visa-free (Electronic Travel Authorisation from 2024)",
      freeLength: "6 months",
      workPolicy: "No work allowed on standard visitor visa",
      nomadVisa: false,
      incomeReq: "Not applicable for visitor visa",
      category: "Easy",
      duration: 180,
      cost: 0, // ETA will have small fee from 2024
      applicationTime: "ETA: minutes to hours",
      entryType: "multiple"
    },
    
    // Australian citizens → United Kingdom
    'Australia': {
      ease: "Visa-free (Electronic Travel Authorisation from 2024)",
      freeLength: "6 months",
      workPolicy: "No work allowed on standard visitor visa",
      nomadVisa: false,
      incomeReq: "Not applicable for visitor visa",
      category: "Easy",
      duration: 180,
      cost: 0, // ETA will have small fee from 2024
      applicationTime: "ETA: minutes to hours",
      entryType: "multiple"
    },
    
    // Japanese citizens → United Kingdom
    'Japan': {
      ease: "Visa-free (Electronic Travel Authorisation from 2024)",
      freeLength: "6 months",
      workPolicy: "No work allowed on standard visitor visa",
      nomadVisa: false,
      incomeReq: "Not applicable for visitor visa",
      category: "Easy",
      duration: 180,
      cost: 0, // ETA will have small fee from 2024
      applicationTime: "ETA: minutes to hours",
      entryType: "multiple"
    },
    
    // South Korean citizens → United Kingdom
    'South Korea': {
      ease: "Visa-free (Electronic Travel Authorisation from 2024)",
      freeLength: "6 months",
      workPolicy: "No work allowed on standard visitor visa",
      nomadVisa: false,
      incomeReq: "Not applicable for visitor visa",
      category: "Easy",
      duration: 180,
      cost: 0, // ETA will have small fee from 2024
      applicationTime: "ETA: minutes to hours",
      entryType: "multiple"
    },
    
    // Singaporean citizens → United Kingdom
    'Singapore': {
      ease: "Visa-free (Electronic Travel Authorisation from 2024)",
      freeLength: "6 months",
      workPolicy: "No work allowed on standard visitor visa",
      nomadVisa: false,
      incomeReq: "Not applicable for visitor visa",
      category: "Easy",
      duration: 180,
      cost: 0, // ETA will have small fee from 2024
      applicationTime: "ETA: minutes to hours",
      entryType: "multiple"
    },
    
    // Irish citizens → United Kingdom
    'Ireland': {
      ease: "Visa-free under Common Travel Area",
      freeLength: "Unlimited",
      workPolicy: "Full work rights under Common Travel Area",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Very Easy",
      duration: 0, // Unlimited
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    
    // French citizens → United Kingdom
    'France': {
      ease: "Visa-free (Electronic Travel Authorisation from 2024)",
      freeLength: "6 months",
      workPolicy: "No work allowed on standard visitor visa",
      nomadVisa: false,
      incomeReq: "Not applicable for visitor visa",
      category: "Easy",
      duration: 180,
      cost: 0, // ETA will have small fee from 2024
      applicationTime: "ETA: minutes to hours",
      entryType: "multiple"
    },
    
    // Spanish citizens → United Kingdom
    'Spain': {
      ease: "Visa-free (Electronic Travel Authorisation from 2024)",
      freeLength: "6 months",
      workPolicy: "No work allowed on standard visitor visa",
      nomadVisa: false,
      incomeReq: "Not applicable for visitor visa",
      category: "Easy",
      duration: 180,
      cost: 0, // ETA will have small fee from 2024
      applicationTime: "ETA: minutes to hours",
      entryType: "multiple"
    },
    
    // Italian citizens → United Kingdom
    'Italy': {
      ease: "Visa-free (Electronic Travel Authorisation from 2024)",
      freeLength: "6 months",
      workPolicy: "No work allowed on standard visitor visa",
      nomadVisa: false,
      incomeReq: "Not applicable for visitor visa",
      category: "Easy",
      duration: 180,
      cost: 0, // ETA will have small fee from 2024
      applicationTime: "ETA: minutes to hours",
      entryType: "multiple"
    },
    
    // Chinese citizens → United Kingdom
    'China': {
      ease: "Visa required",
      freeLength: "Varies by visa type",
      workPolicy: "Special work visas available (Skilled Worker, Global Talent)",
      nomadVisa: false,
      incomeReq: "Varies by visa type",
      category: "Moderate",
      duration: 180,
      cost: 100,
      applicationTime: "3 weeks standard processing",
      entryType: "multiple"
    },
    
    // Indian citizens → United Kingdom
    'India': {
      ease: "Visa required",
      freeLength: "Varies by visa type",
      workPolicy: "Special work visas available",
      nomadVisa: false,
      incomeReq: "Varies by visa type",
      category: "Moderate",
      duration: 180,
      cost: 100,
      applicationTime: "3 weeks standard processing",
      entryType: "multiple"
    },
    
    // Russian citizens → United Kingdom
    'Russia': {
      ease: "Visa required",
      freeLength: "Varies by visa type",
      workPolicy: "Restricted",
      nomadVisa: false,
      incomeReq: "Varies",
      category: "Difficult",
      duration: 180,
      cost: 100,
      applicationTime: "4-6 weeks",
      entryType: "single"
    },
    
    // Brazilian citizens → United Kingdom
    'Brazil': {
      ease: "Visa required",
      freeLength: "Varies by visa type",
      workPolicy: "Special work visas available",
      nomadVisa: false,
      incomeReq: "Varies",
      category: "Moderate",
      duration: 180,
      cost: 100,
      applicationTime: "3 weeks standard processing",
      entryType: "multiple"
    }
};