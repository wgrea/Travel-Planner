// src/lib/utils/resonanceMatcher.ts
import type { ResonancePreferences, ResonanceScore, CountryResonanceProfile } from '$lib/types/resonance';

export class ResonanceMatcher {
  static calculateMatch(preferences: ResonancePreferences, country: CountryResonanceProfile): ResonanceScore {
    let totalScore = 0;
    const breakdown = {
      travelStyle: 0,
      social: 0,
      environment: 0,
      activities: 0,
      practical: 0
    };
    const matchReasons: string[] = [];

    // Travel Style Matching (25%)
    const styleMatch = this.calculateTravelStyleMatch(preferences.travelStyle, country.travelStyle);
    breakdown.travelStyle = styleMatch.score;
    if (styleMatch.reason) matchReasons.push(styleMatch.reason);

    // Social Matching (20%)
    const socialMatch = this.calculateSocialMatch(preferences.socialPreference, country.socialVibe);
    breakdown.social = socialMatch.score;
    if (socialMatch.reason) matchReasons.push(socialMatch.reason);

    // Environment Matching (25%)
    const envMatch = this.calculateEnvironmentMatch(preferences, country);
    breakdown.environment = envMatch.score;
    if (envMatch.reason) matchReasons.push(envMatch.reason);

    // Activities Matching (20%)
    const activityMatch = this.calculateActivityMatch(preferences, country);
    breakdown.activities = activityMatch.score;
    if (activityMatch.reason) matchReasons.push(activityMatch.reason);

    // Practical Matching (10%)
    const practicalMatch = this.calculatePracticalMatch(preferences, country);
    breakdown.practical = practicalMatch.score;
    if (practicalMatch.reason) matchReasons.push(practicalMatch.reason);

    // Calculate total score (weighted)
    totalScore = (
      breakdown.travelStyle * 0.25 +
      breakdown.social * 0.20 +
      breakdown.environment * 0.25 +
      breakdown.activities * 0.20 +
      breakdown.practical * 0.10
    );

    return {
      country: country.country,
      score: Math.round(totalScore),
      breakdown,
      matchReasons: matchReasons.slice(0, 3) // Top 3 reasons
    };
  }

  private static calculateTravelStyleMatch(userStyle: string, countryStyles: string[]): { score: number; reason?: string } {
    const match = countryStyles.includes(userStyle);
    return {
      score: match ? 100 : 40,
      reason: match ? `Perfect for ${userStyle} travel` : undefined
    };
  }

  private static calculateSocialMatch(userSocial: string, countrySocial: string): { score: number; reason?: string } {
    const socialMatrix: Record<string, Record<string, number>> = {
      'solo': { 'solo-friendly': 100, 'balanced': 70, 'social': 40 },
      'social': { 'social': 100, 'balanced': 80, 'solo-friendly': 50 },
      'balanced': { 'balanced': 100, 'social': 80, 'solo-friendly': 70 }
    };
    
    const score = socialMatrix[userSocial]?.[countrySocial] || 50;
    return {
      score,
      reason: score >= 80 ? `Great for ${userSocial} travelers` : undefined
    };
  }

  private static calculateEnvironmentMatch(preferences: ResonancePreferences, country: CountryResonanceProfile): { score: number; reason?: string } {
    let score = 0;
    const reasons: string[] = [];

    // Climate match
    if (preferences.climate === 'any' || preferences.climate === country.climate) {
      score += 40;
      reasons.push(`Perfect ${country.climate} climate`);
    } else {
      score += 20;
    }

    // Vibe match
    if (preferences.vibe === country.vibe) {
      score += 40;
      reasons.push(`${country.vibe.charAt(0).toUpperCase() + country.vibe.slice(1)} atmosphere`);
    } else {
      score += 25;
    }

    // Density match
    if (preferences.density === country.density) {
      score += 20;
    } else {
      score += 10;
    }

    return {
      score,
      reason: reasons[0]
    };
  }

  private static calculateActivityMatch(preferences: ResonancePreferences, country: CountryResonanceProfile): { score: number; reason?: string } {
    const matchingActivities = preferences.activities.filter(activity => 
      country.popularActivities.includes(activity.toLowerCase())
    );
    
    const activityScore = (matchingActivities.length / Math.max(preferences.activities.length, 1)) * 80;
    const baseScore = Math.min(activityScore + 20, 100); // Ensure minimum 20 points

    return {
      score: baseScore,
      reason: matchingActivities.length > 0 ? `Great for ${matchingActivities[0]}` : 'Diverse activities available'
    };
  }

  private static calculatePracticalMatch(preferences: ResonancePreferences, country: CountryResonanceProfile): { score: number; reason?: string } {
    let score = 0;

    // Budget match
    if (preferences.budget === country.costLevel) {
      score += 40;
    } else {
      score += 20;
    }

    // Internet importance
    const internetScore = (country.internetQuality / 10) * (preferences.internetImportance * 3);
    score += Math.min(internetScore, 40);

    // Safety importance
    const safetyScore = (country.safetyScore / 10) * (preferences.safetyImportance * 2);
    score += Math.min(safetyScore, 20);

    return {
      score: Math.min(score, 100),
      reason: country.internetQuality >= 8 ? 'Great internet connectivity' : undefined
    };
  }

  static findTopMatches(preferences: ResonancePreferences, countries: CountryResonanceProfile[], limit: number = 10): ResonanceScore[] {
    const scores = countries.map(country => 
      this.calculateMatch(preferences, country)
    );

    return scores
      .sort((a: ResonanceScore, b: ResonanceScore) => b.score - a.score)
      .slice(0, limit)
      .filter((score: ResonanceScore) => score.score >= 60); // Only show decent matches
  }
}