//src/lib/data/countries/europe/northern-europe/norway.ts
import type { VisaInfo } from '$lib/types/visa';

export const norwayData: Record<string, VisaInfo> = {
    'United States': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Independent Contractor Visa available",
      nomadVisa: true,
      incomeReq: "~$3,800/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'Germany': {
      ease: "Freedom of movement (EU/EEA)",
      freeLength: "Unlimited",
      workPolicy: "No restrictions for EU/EEA citizens",
      nomadVisa: false,
      incomeReq: "Not applicable",
      category: "Easy",
      duration: 0,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "Visa-free for 90 days",
      freeLength: "90 days in Schengen area",
      workPolicy: "Independent Contractor Visa available",
      nomadVisa: true,
      incomeReq: "~$3,800/month",
      category: "Moderate",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    }
};