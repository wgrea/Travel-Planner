// src/lib/data/visa/destinations/south-america/chile.ts
import type { VisaInfo } from '$lib/types/visa';

export const chileData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Temporary Residence for remote work",
      nomadVisa: true,
      incomeReq: "$1,800/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple",
      extensionsPossible: true
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Temporary Residence for remote work",
      nomadVisa: true,
      incomeReq: "$1,800/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Temporary Residence for remote work",
      nomadVisa: true,
      incomeReq: "$1,800/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};