// src/lib/data/visa/destinations/south-america/peru.ts
import type { VisaInfo } from '$lib/types/visa';

export const peruData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "183 days",
      workPolicy: "No specific digital nomad visa",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 183,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "183 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 183,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free",
      freeLength: "183 days",
      workPolicy: "No local work allowed",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 183,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};