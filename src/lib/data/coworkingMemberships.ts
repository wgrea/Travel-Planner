// In src/lib/data/coworkingMemberships.ts
import type { CoworkingMembership } from './nomadData';

export const globalCoworkingMemberships: CoworkingMembership[] = [
  {
    name: "WeWork All Access",
    monthlyPrice: 299,
    coverage: ["US", "UK", "Germany", "Japan", "Australia", "India", "Singapore", "Canada", "France", "Spain", "Netherlands", "UAE"],
    dayPassAvailable: true,
    dayPassPrice: 35,
    trialDays: 1,
    benefits: [
      "24/7 access to all locations",
      "High-speed internet",
      "Meeting room credits",
      "Community events",
      "Printing facilities",
      "Free refreshments"
    ],
    bestFor: "Frequent global travelers needing consistent quality worldwide",
    website: "https://www.wework.com"
  },
  {
    name: "Regus / IWG Global",
    monthlyPrice: 199,
    coverage: ["120+ countries worldwide"],
    dayPassAvailable: true,
    dayPassPrice: 30,
    trialDays: 0,
    benefits: [
      "Largest global network",
      "Business address service",
      "24/7 access",
      "Meeting rooms",
      "Mail handling"
    ],
    bestFor: "Business travelers needing official addresses and global presence",
    website: "https://www.regus.com"
  },
  {
    name: "Local Coworking Alliance",
    monthlyPrice: 80,
    coverage: ["Regional networks vary by country"],
    dayPassAvailable: true,
    dayPassPrice: 15,
    trialDays: 3,
    benefits: [
      "Local community feel",
      "Lower costs",
      "More flexible terms",
      "Cultural integration",
      "Local event access"
    ],
    bestFor: "Long-term stays in specific regions or countries",
    website: "" // Use empty string instead of null
  },
  {
    name: "Hotel Chain Partnerships",
    monthlyPrice: 0,
    coverage: ["Global (major hotel brands)"],
    dayPassAvailable: false,
    trialDays: 0,
    benefits: [
      "Free with hotel stay",
      "Lobby workspace",
      "Business centers",
      "Usually quiet",
      "Professional environment"
    ],
    bestFor: "Hotel guests wanting convenient workspace access",
    website: "" // Use empty string instead of null
  }
];

// Function to check which memberships are available in a country
export function getMembershipsForCountry(countryName: string): CoworkingMembership[] {
  const countryLower = countryName.toLowerCase();
  
  return globalCoworkingMemberships.filter(membership => {
    if (membership.coverage.includes("worldwide") || membership.coverage.includes("120+")) {
      return true;
    }
    
    // Check for specific country coverage
    return membership.coverage.some((country: string) => {
      const coverageLower = country.toLowerCase();
      if (coverageLower === "us" && (countryLower.includes("united states") || countryLower.includes("usa"))) return true;
      if (coverageLower === "uk" && (countryLower.includes("united kingdom") || countryLower.includes("britain"))) return true;
      if (coverageLower === "uae" && (countryLower.includes("united arab emirates") || countryLower.includes("dubai"))) return true;
      
      return coverageLower === countryLower || countryLower.includes(coverageLower);
    });
  });
}