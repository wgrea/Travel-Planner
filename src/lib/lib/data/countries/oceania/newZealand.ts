// src/lib/data/countries/oceania/newZealand.ts
import type { VisaInfo } from '$lib/types/visa';

export const newZealandData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Working Holiday Visa available",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Working Holiday Visa available",
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
      freeLength: "180 days",
      workPolicy: "Working Holiday Visa available",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 180,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};