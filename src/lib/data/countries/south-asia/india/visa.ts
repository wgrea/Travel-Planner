// src/lib/data/visa/destinations/south-asia/india/visa.ts
import type { VisaInfo } from '$lib/types/visa';

export const indiaVisaData: Record<string, VisaInfo> = {
    // US citizens → India
    'United States': {
      ease: "E-Visa available",
      freeLength: "60 days",
      workPolicy: "No local work allowed on tourist visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Moderate",
      duration: 60,
      cost: 25,
      applicationTime: "3-5 business days",
      entryType: "multiple"
    },
    'Germany': {
      ease: "E-Visa available",
      freeLength: "60 days",
      workPolicy: "No local work allowed on tourist visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Moderate",
      duration: 60,
      cost: 25,
      applicationTime: "3-5 business days",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "E-Visa available",
      freeLength: "60 days",
      workPolicy: "No local work allowed on tourist visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Moderate",
      duration: 60,
      cost: 25,
      applicationTime: "3-5 business days",
      entryType: "multiple"
    }
};