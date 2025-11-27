// src/lib/utils/visa.ts
import { visaData, defaultVisaInfo } from '$lib/data/visaData';
import type { CountryCode, VisaInfo } from '$lib/types/visa';

// Updated to accept both home country and destination country
export function getVisaInfo(homeCountry: string, destinationCountry: CountryCode): VisaInfo {
  return visaData[homeCountry]?.[destinationCountry] || defaultVisaInfo;
}

export function getAvailableCountries(): CountryCode[] {
  // Get all destination countries from the first passport country (United States)
  const firstPassportCountry = Object.keys(visaData)[0];
  return Object.keys(visaData[firstPassportCountry] || {}) as CountryCode[];
}

// Alternative: Get all unique destination countries across all passport countries
export function getAllDestinationCountries(): CountryCode[] {
  const allDestinations = new Set<CountryCode>();
  
  Object.values(visaData).forEach(passportData => {
    Object.keys(passportData).forEach(destination => {
      allDestinations.add(destination as CountryCode);
    });
  });
  
  return Array.from(allDestinations);
}

export function getPassportCountries(): string[] {
  return Object.keys(visaData);
}

export function checkVisaRequirements(homeCountry: string, destinationCountry: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate API call - in real app, this would fetch from an API
      resolve();
    }, 500);
  });
}

// Helper function to check if a specific visa combination exists
export function hasVisaData(homeCountry: string, destinationCountry: CountryCode): boolean {
  return !!visaData[homeCountry]?.[destinationCountry];
}