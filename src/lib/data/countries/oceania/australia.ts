// src/lib/data/visa/destinations/oceania/australia.ts
import type { VisaInfo } from '$lib/types/visa';

export const australiaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Highly simple (ETA/e-Visa available)",
      freeLength: "90 days",
      workPolicy: "Student/Work Holiday Visas are common",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Tourist",
      duration: 90,
      cost: 20,
      applicationTime: "1-2 days",
      entryType: "multiple"
    },
    'Germany': {
      ease: "ETA/e-Visa available",
      freeLength: "90 days",
      workPolicy: "Working Holiday Visa available",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 20,
      applicationTime: "1-2 days",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "ETA/e-Visa available",
      freeLength: "90 days",
      workPolicy: "Working Holiday Visa available",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 20,
      applicationTime: "1-2 days",
      entryType: "multiple"
    }
};