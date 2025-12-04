// src/lib/data/countries/europe/southern-europe/turkey.ts
import type { VisaInfo } from '$lib/types/visa';

export const turkeyVisaData: Record<string, VisaInfo> = {
    'United States': {
      ease: "E-Visa available",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$1,500/month",
      category: "Easy",
      duration: 90,
      cost: 50,
      applicationTime: "24 hours",
      entryType: "multiple",
      extensionsPossible: true
    },
    'Germany': {
      ease: "Visa-free",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$1,500/month",
      category: "Easy",
      duration: 90,
      cost: 0,
      applicationTime: "Not applicable",
      entryType: "multiple"
    },
    'United Kingdom': {
      ease: "E-Visa available",
      freeLength: "90 days",
      workPolicy: "Digital Nomad Visa available",
      nomadVisa: true,
      incomeReq: "$1,500/month",
      category: "Easy",
      duration: 90,
      cost: 50,
      applicationTime: "24 hours",
      entryType: "multiple"
    }
};