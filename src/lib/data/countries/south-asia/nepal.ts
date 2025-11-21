// src/lib/data/visa/destinations/south-asia/nepal.ts
import type { VisaInfo } from '$lib/types/visa';

export const nepalData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    },
    'Germany': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    },
    'United Kingdom': {
      ease: "Visa on arrival",
      freeLength: "30 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 30,
      cost: 50,
      applicationTime: "On arrival",
      entryType: "single",
      extensionsPossible: true,
      extensionDuration: 60
    }
};