// src/lib/utils/visa.ts
import { visaData, defaultVisaInfo } from '$lib/data/visaData';
import type { CountryCode, VisaInfo } from '$lib/types/visa';

export function getVisaInfo(country: string): VisaInfo {
  return visaData[country as CountryCode] || defaultVisaInfo;
}

export function getAvailableCountries(): CountryCode[] {
  return Object.keys(visaData) as CountryCode[];
}

export function checkVisaRequirements(homeCountry: string, destinationCountry: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate API call - in real app, this would fetch from an API
      resolve();
    }, 500);
  });
}