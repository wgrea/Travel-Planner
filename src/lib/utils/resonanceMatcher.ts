// src/lib/utils/resonanceMatcher.ts
import type { ResonancePreferences, ResonanceScore, CityResonanceProfile } from '$lib/types/resonance';

export class ResonanceMatcher {
  static calculateMatch(preferences: ResonancePreferences, location: CityResonanceProfile): ResonanceScore {
    let totalScore = 0;
    const breakdown = {
      pace: 0,
      interests: 0, // This will store tag matches
      social: 0,
      environment: 0,
      activities: 0,
      practical: 0
    };
    const matchReasons: string[] = [];

    // 1. Pace Matching (15%)
    const paceMatch = this.calculatePaceMatch(preferences.pace, location.pace);
    breakdown.pace = paceMatch.score;
    if (paceMatch.reason) matchReasons.push(paceMatch.reason);

    // 2. Interest Matching (30%) - USING TAGS
    const interestMatch = this.calculateInterestMatch(preferences.interests, location.tags);
    breakdown.interests = interestMatch.score; // ← Store in interests, NOT added to pace!
    if (interestMatch.reason) matchReasons.push(interestMatch.reason);

    // 3. Social Matching (15%)
    const socialMatch = this.calculateSocialMatch(preferences.socialPreference, location.socialVibe);
    breakdown.social = socialMatch.score;
    if (socialMatch.reason) matchReasons.push(socialMatch.reason);

    // 4. Environment Matching (15%)
    const envMatch = this.calculateEnvironmentMatch(preferences, location);
    breakdown.environment = envMatch.score;
    if (envMatch.reason) matchReasons.push(envMatch.reason);

    // 5. Activities Matching (20%)
    const activityMatch = this.calculateActivityMatch(preferences.activities, location.popularActivities);
    breakdown.activities = activityMatch.score;
    if (activityMatch.reason) matchReasons.push(activityMatch.reason);

    // 6. Practical Matching (15%)
    const practicalMatch = this.calculatePracticalMatch(preferences, location);
    breakdown.practical = practicalMatch.score;
    if (practicalMatch.reason) matchReasons.push(practicalMatch.reason);

    // 7. Calculate total score with weights
    totalScore = (
      (breakdown.pace * 0.15) +       // Pace: 15%
      (breakdown.interests * 0.30) +  // Interests (tags): 30%
      (breakdown.social * 0.15) +     // Social: 15%
      (breakdown.environment * 0.15) + // Environment: 15%
      (breakdown.activities * 0.15) +  // Activities: 15%
      (breakdown.practical * 0.10)     // Practical: 10%
    );

    const validReasons = matchReasons.filter(reason => reason !== undefined);
    
    return {
      name: location.name,
      city: location.city,
      country: location.country,
      score: Math.round(totalScore),
      breakdown,
      matchReasons: validReasons.slice(0, 3) // Only show valid reasons
    };
  }

  private static calculatePaceMatch(userPace: 'slow' | 'medium' | 'fast', locationPace: 'slow' | 'medium' | 'fast'): { score: number; reason?: string } {
    if (userPace === locationPace) {
      return {
        score: 100,
        reason: `Perfect ${userPace} pace` // Only for perfect matches
      };
    }
    
    const paceMatrix = {
      'slow': { 'slow': 100, 'medium': 70, 'fast': 40 },
      'medium': { 'slow': 80, 'medium': 100, 'fast': 80 },
      'fast': { 'slow': 40, 'medium': 70, 'fast': 100 }
    };
    
    const score = paceMatrix[userPace][locationPace];
    return {
      score,
      reason: undefined // No reason for non-perfect matches
    };
  }

  private static calculateInterestMatch(userInterests: string[], locationTags: string[]): { score: number; reason?: string } {
    if (userInterests.length === 0) {
      return { score: 50, reason: undefined }; // No reason
    }
    
    const matchingInterests = userInterests.filter(interest => 
      locationTags.includes(interest.toLowerCase())
    );
    
    const matchPercentage = matchingInterests.length / Math.max(userInterests.length, 1);
    const score = matchPercentage * 100;
    
    // Only give reason for good matches
    if (matchingInterests.length >= 3) {
      return {
        score,
        reason: `Matches ${matchingInterests.length} interests`
      };
    }
    
    return {
      score,
      reason: undefined
    };
  }

  private static calculateSocialMatch(userSocial: string, locationSocial: string): { score: number; reason?: string } {
    // Define matrix with proper typing
    const socialMatrix: Record<string, Record<string, number>> = {
      'solo': { 'solo-friendly': 100, 'balanced': 70, 'social': 40 },
      'social': { 'social': 100, 'balanced': 80, 'solo-friendly': 50 },
      'balanced': { 'balanced': 100, 'social': 80, 'solo-friendly': 70 }
    };
    
    // Safe access with fallback
    const score = socialMatrix[userSocial]?.[locationSocial] || 50;
    
    return {
      score,
      reason: score >= 80 ? `Great for ${userSocial} travelers` : undefined
    };
  }

  // In calculateEnvironmentMatch, only give reason for good climate matches:
  private static calculateEnvironmentMatch(preferences: ResonancePreferences, location: CityResonanceProfile): { score: number; reason?: string } {
    let score = 0;
    const reasons: string[] = [];

    // Climate match - only mention if it's perfect
    if (preferences.climate !== 'any' && preferences.climate === location.climate) {
      score += 40;
      reasons.push(`${location.climate} climate`);
    } else {
      score += 20;
    }

    // Vibe match - only mention if perfect
    if (preferences.vibe !== 'balanced' && preferences.vibe === location.vibe) {
      score += 40;
      reasons.push(`${location.vibe} vibe`);
    } else {
      score += 25;
    }

    // Density match
    if (preferences.density === location.density) {
      score += 20;
    } else {
      score += 10;
    }

    return {
      score,
      reason: reasons.length > 0 ? reasons[0] : undefined
    };
  }

  private static calculateActivityMatch(userActivities: string[], locationActivities: string[]): { score: number; reason?: string } {
    if (userActivities.length === 0) {
      return { score: 0, reason: 'No activities selected' };
    }
    
    const matchingActivities = userActivities.filter(activity => 
      locationActivities.includes(activity.toLowerCase())
    );
    
    const activityScore = (matchingActivities.length / Math.max(userActivities.length, 1)) * 100;
    
    return {
      score: Math.round(activityScore),
      reason: matchingActivities.length > 0 ? `Great for ${matchingActivities[0]}` : 'No matching activities'
    };
  }

  private static calculatePracticalMatch(preferences: ResonancePreferences, location: CityResonanceProfile): { score: number; reason?: string } {
    let score = 0;

    // Budget match
    if (preferences.budget === location.costLevel) {
      score += 40;
    } else {
      score += 20;
    }

    // Internet: Score based on meeting MINIMUM requirement
    const internetMeetsRequirement = location.internetQuality >= preferences.internetImportance;
    if (internetMeetsRequirement) {
      score += 30; // Full points if meets requirement
    } else if (preferences.internetImportance <= 5) {
      score += 20; // Partial points if requirement is low
    } else {
      score += 5; // Minimal points if doesn't meet high requirement
    }

    // Safety: Score based on meeting MINIMUM requirement  
    const safetyMeetsRequirement = location.safetyScore >= preferences.safetyImportance;
    if (safetyMeetsRequirement) {
      score += 30; // Full points if meets requirement
    } else if (preferences.safetyImportance <= 5) {
      score += 20; // Partial points if requirement is low
    } else {
      score += 5; // Minimal points if doesn't meet high requirement
    }

    return {
      score: Math.round(Math.min(score, 100)),
      reason: undefined // No generic reasons
    };
  }

  static findTopMatches(preferences: ResonancePreferences, locations: CityResonanceProfile[], limit: number = 10): ResonanceScore[] {
    const scores = locations.map(location => 
      this.calculateMatch(preferences, location)
    );

    return scores
      .sort((a: ResonanceScore, b: ResonanceScore) => b.score - a.score)
      .slice(0, limit)
      .filter((score: ResonanceScore) => score.score >= 60);
  }
}