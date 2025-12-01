// src/lib/data/countries/north-america/mexico/visa.ts
import type { VisaInfo } from '$lib/types/visa';

export const mexicoVisaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free for tourism",
      freeLength: "180 days",
      workPolicy: "Temporary Resident Visa for remote work",
      nomadVisa: true,
      incomeReq: "~$2,600/month or savings",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free for tourism",
      freeLength: "180 days",
      workPolicy: "Temporary Resident Visa for remote work",
      nomadVisa: true,
      incomeReq: "~$2,600/month or savings",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free for tourism",
      freeLength: "180 days",
      workPolicy: "Temporary Resident Visa for remote work",
      nomadVisa: true,
      incomeReq: "~$2,600/month or savings",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};