// src/lib/data/visaData.ts
import type { VisaData } from '$lib/types/visa';

export const visaData: VisaData = {
  "Australia": {
    ease: "Highly simple (ETA/e-Visa available)",
    freeLength: "90 days",
    workPolicy: "Student/Work Holiday Visas are common",
    nomadVisa: false,
    incomeReq: "Not applicable",
    category: "Tourist"
  },
  "Georgia": {
    ease: "Instant (no application needed)",
    freeLength: "365 days",
    workPolicy: "Visa-free remote work allowed",
    nomadVisa: true,
    incomeReq: "None required",
    category: "Instant"
  },
  "Sri Lanka": {
    ease: "Fully online ETA portal",
    freeLength: "Digital Nomad Visa (1 year)",
    workPolicy: "Minimal paperwork required",
    nomadVisa: true,
    incomeReq: "Not clearly defined",
    category: "Easy"
  },
  "Malaysia": {
    ease: "Online application",
    freeLength: "DE Rantau Visa (3-12 months)",
    workPolicy: "Digital field only",
    nomadVisa: true,
    incomeReq: "$24,000/year",
    category: "Easy"
  },
  "Brazil": {
    ease: "Online with consulate visit",
    freeLength: "Digital Nomad Visa (1 year)",
    workPolicy: "Remote work only",
    nomadVisa: true,
    incomeReq: "$1,500/month or savings",
    category: "Easy"
  },
  "China": {
    ease: "Complex (visa required)",
    freeLength: "0 days (visa required)",
    workPolicy: "Strict work permit needed",
    nomadVisa: false,
    incomeReq: "Varies",
    category: "Hard"
  },
  "Thailand": {
    ease: "Online application",
    freeLength: "Up to 5 years (Destination Thailand Visa)",
    workPolicy: "No Thai clients allowed",
    nomadVisa: true,
    incomeReq: "$2,000/month",
    category: "Easy"
  },
  "Portugal": {
    ease: "Moderate application",
    freeLength: "1 year+ (D7/D8 Visa)",
    workPolicy: "Freelance friendly",
    nomadVisa: true,
    incomeReq: "~$3,000/month or savings",
    category: "Moderate"
  },
  "Spain": {
    ease: "Moderate application",
    freeLength: "1 year (Self-Employed)",
    workPolicy: "Business plan needed",
    nomadVisa: true,
    incomeReq: "~$2,400/month",
    category: "Moderate"
  },
  "Mexico": {
    ease: "Consulate application",
    freeLength: "6-12 months (Temporary Resident)",
    workPolicy: "Flexible proof accepted",
    nomadVisa: true,
    incomeReq: "~$2,600/month or savings",
    category: "Moderate"
  }
};

export const defaultVisaInfo = {
  ease: "Information not available",
  freeLength: "Check official sources",
  workPolicy: "Research required",
  incomeReq: "Unknown",
  category: "Unknown",
  nomadVisa: false
};