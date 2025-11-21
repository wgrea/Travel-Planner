// src/lib/data/visa/destinations/south-america/bolivia.ts
import type { VisaInfo } from '$lib/types/visa';

export const boliviaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 160,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};