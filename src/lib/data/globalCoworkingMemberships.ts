// src/lib/data/globalCoworkingMemberships.ts
export interface GlobalCoworkingMembership {
  name: string;
  monthlyPrice: number;
  coverage: string[];
  dayPassAvailable: boolean;
  dayPassPrice?: number;
  trialDays: number;
  benefits: string[];
  bestFor: string;
  website: string;
}

export const globalCoworkingMemberships: GlobalCoworkingMembership[] = [
  {
    name: "WeWork All Access",
    monthlyPrice: 299,
    coverage: ["Global - 800+ locations", "Major cities worldwide"],
    dayPassAvailable: true,
    dayPassPrice: 39,
    trialDays: 1,
    benefits: ["Unlimited coworking access", "Meeting room credits", "Global network", "Premium amenities"],
    bestFor: "Frequent travelers and remote teams",
    website: "https://www.wework.com"
  },
  {
    name: "Regus Pass",
    monthlyPrice: 199,
    coverage: ["Global - 3000+ locations", "Business centers worldwide"],
    dayPassAvailable: true,
    dayPassPrice: 29,
    trialDays: 0,
    benefits: ["Flexible workspace access", "Business address", "Admin support", "Networking events"],
    bestFor: "Business professionals and entrepreneurs",
    website: "https://www.regus.com"
  },
  {
    name: "Spaces Explorer",
    monthlyPrice: 249,
    coverage: ["Global - 500+ locations", "Creative hubs"],
    dayPassAvailable: true,
    dayPassPrice: 35,
    trialDays: 3,
    benefits: ["Creative workspaces", "Community events", "Wellness programs", "Co-working + lounge"],
    bestFor: "Creatives and startups",
    website: "https://www.spacesworks.com"
  },
  {
    name: "Croissant",
    monthlyPrice: 99,
    coverage: ["Multiple cities", "Boutique coworking spaces"],
    dayPassAvailable: false,
    trialDays: 7,
    benefits: ["Access to curated spaces", "Flexible membership", "Local community", "Café partnerships"],
    bestFor: "Digital nomads and freelancers",
    website: "https://www.getcroissant.com"
  },
  {
    name: "Knotel",
    monthlyPrice: 349,
    coverage: ["Major global cities", "Enterprise-grade offices"],
    dayPassAvailable: true,
    dayPassPrice: 45,
    trialDays: 0,
    benefits: ["Private offices", "Team suites", "Custom build-outs", "Enterprise services"],
    bestFor: "Growing teams and companies",
    website: "https://www.knotel.com"
  },
  {
    name: "Impact Hub",
    monthlyPrice: 179,
    coverage: ["100+ locations globally", "Social enterprise focus"],
    dayPassAvailable: true,
    dayPassPrice: 25,
    trialDays: 1,
    benefits: ["Social impact community", "Workshops and events", "Mentorship programs", "Sustainable spaces"],
    bestFor: "Social entrepreneurs and NGOs",
    website: "https://www.impacthub.net"
  },
  {
    name: "The Wing",
    monthlyPrice: 215,
    coverage: ["US and International", "Women-focused spaces"],
    dayPassAvailable: true,
    dayPassPrice: 35,
    trialDays: 1,
    benefits: ["Women-led community", "Professional development", "Networking events", "Wellness amenities"],
    bestFor: "Women professionals and entrepreneurs",
    website: "https://www.thewing.com"
  },
  {
    name: "Industrious",
    monthlyPrice: 299,
    coverage: ["US Major Cities", "Premium workspaces"],
    dayPassAvailable: true,
    dayPassPrice: 40,
    trialDays: 0,
    benefits: ["Luxury workspaces", "Concierge service", "Wellness rooms", "Business support"],
    bestFor: "Executives and premium brands",
    website: "https://www.industriousoffice.com"
  }
];