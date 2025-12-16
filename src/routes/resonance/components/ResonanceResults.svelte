<script lang="ts">
  import type { ResonanceScore } from '$lib/types/resonance';
  
  export let matches: ResonanceScore[] = [];
  export let isLoading: boolean = false;
  export let totalFilters: number = 0;
  export let hasSearched: boolean = false;
  
  // Remove the duplicate declaration: let hasSearched = false;
  // The hasSearched is now passed as a prop from the parent
  
  // Get readable match reasons
  function getReadableMatchReasons(match: ResonanceScore): string[] {
    const reasons: string[] = [];
    
    // Pace reason
    if (match.breakdown?.social > 70) {
      reasons.push('Perfect medium pace');
    } else if (match.breakdown?.social > 50) {
      reasons.push('Good pace match');
    }
    
    // Social vibe reason
    if (match.breakdown?.social > 70) {
      reasons.push('Great for balanced travelers');
    } else if (match.breakdown?.social > 50) {
      reasons.push('Good social vibe match');
    }
    
    // Activities
    if (match.breakdown?.activities > 70) {
      reasons.push('Excellent activity match');
    } else if (match.breakdown?.activities > 0) {
      reasons.push('Some activities match');
    } else {
      reasons.push('No activities selected');
    }
    
    // Environment
    if (match.breakdown?.environment > 70) {
      reasons.push('Perfect climate match');
    } else if (match.breakdown?.environment > 50) {
      reasons.push('Good environment match');
    }
    
    // Practical factors
    if (match.breakdown?.practical > 70) {
      reasons.push('Excellent practical match');
    } else if (match.breakdown?.practical > 50) {
      reasons.push('Good practical factors');
    }
    
    return reasons.slice(0, 3);
  }
  
  // Get cost level description
  function getCostDescription(practicalScore: number): string {
    if (practicalScore >= 80) return 'Very budget-friendly';
    if (practicalScore >= 70) return 'Budget-friendly';
    if (practicalScore >= 60) return 'Moderate cost';
    if (practicalScore >= 50) return 'Mid-range';
    return 'Higher cost';
  }
  
  // Get safety description
  function getSafetyDescription(practicalScore: number): string {
    if (practicalScore >= 80) return 'Very safe';
    if (practicalScore >= 70) return 'Good';
    if (practicalScore >= 60) return 'Average safety';
    if (practicalScore >= 50) return 'Standard safety';
    return 'Check details';
  }
  
  // Get internet description
  function getInternetDescription(practicalScore: number): string {
    if (practicalScore >= 80) return 'Excellent';
    if (practicalScore >= 70) return 'Good';
    if (practicalScore >= 60) return 'Average';
    if (practicalScore >= 50) return 'Basic';
    return 'Check details';
  }
</script>

{#if matches.length > 0}
  <div class="p-6">
    <div class="flex justify-between items-center mb-8">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">
          Found {matches.length} Matching {matches.length === 1 ? 'Location' : 'Locations'}
        </h2>
        <p class="text-gray-600 mt-1">
          Sorted by best match to your preferences
        </p>
      </div>
    </div>
    
    <div class="space-y-4">
      {#each matches as match, index}
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all duration-300 group">
          <!-- Match Header -->
          <div class="flex items-start justify-between mb-6">
            <div>
              <div class="flex items-center gap-3 mb-2">
                <div class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  #{index + 1}
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900">{match.name}</h3>
                  <p class="text-gray-600">{match.city === 'Multiple Cities' ? match.country : `${match.city}, ${match.country}`}</p>
                </div>
              </div>
              
              <!-- Overall Score -->
              <div class="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full">
                <span class="text-lg font-bold text-indigo-700">{match.score}%</span>
                <span class="text-sm text-gray-600">match</span>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Left: Why it matches -->
            <div class="space-y-4">
              <h4 class="font-semibold text-gray-900">Why it matches:</h4>
              <div class="space-y-2">
                {#each getReadableMatchReasons(match) as reason}
                  <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-lg border border-gray-200">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="text-gray-700">{reason}</span>
                  </div>
                {/each}
              </div>
              
              <!-- Cost, Safety, Internet -->
              <div class="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                <div class="text-center p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-100">
                  <div class="text-xs text-gray-500 mb-1">Cost level</div>
                  <div class="font-semibold text-emerald-700">{getCostDescription(match.breakdown?.practical || 0)}</div>
                </div>
                <div class="text-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100">
                  <div class="text-xs text-gray-500 mb-1">Safety</div>
                  <div class="font-semibold text-blue-700">{getSafetyDescription(match.breakdown?.practical || 0)}</div>
                </div>
                <div class="text-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                  <div class="text-xs text-gray-500 mb-1">Internet</div>
                  <div class="font-semibold text-purple-700">{getInternetDescription(match.breakdown?.practical || 0)}</div>
                </div>
              </div>
            </div>
            
            <!-- Right: Match details -->
            <div class="space-y-4">
              <!-- Match scores breakdown -->
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Match breakdown:</h4>
                <div class="space-y-2">
                  <div>
                    <div class="flex justify-between text-sm mb-1">
                      <span class="text-gray-700">Social vibe</span>
                      <span class="font-medium text-gray-900">{match.breakdown?.social || 0}%</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-green-500 rounded-full" style="width: {match.breakdown?.social || 0}%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-sm mb-1">
                      <span class="text-gray-700">Environment</span>
                      <span class="font-medium text-gray-900">{match.breakdown?.environment || 0}%</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-blue-500 rounded-full" style="width: {match.breakdown?.environment || 0}%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-sm mb-1">
                      <span class="text-gray-700">Practical</span>
                      <span class="font-medium text-gray-900">{match.breakdown?.practical || 0}%</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div class="h-full bg-purple-500 rounded-full" style="width: {match.breakdown?.practical || 0}%"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Match reasons from database -->
              {#if match.matchReasons && match.matchReasons.length > 0}
                <div class="pt-4 border-t border-gray-200">
                  <h4 class="font-semibold text-gray-900 mb-2">Key matching features:</h4>
                  <div class="flex flex-wrap gap-2">
                    {#each match.matchReasons.slice(0, 6) as reason}
                      <span class="inline-block bg-indigo-50 text-indigo-700 text-xs px-3 py-1.5 rounded-lg border border-indigo-100">
                        {reason}
                      </span>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{:else if !isLoading && hasSearched && totalFilters > 0}
  <!-- No results found after searching -->
  <div class="text-center p-12">
    <div class="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
      <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-gray-900 mb-3">No Matches Found</h3>
    <p class="text-gray-600 max-w-md mx-auto mb-6">
      Your {totalFilters} filters didn't match any destinations. Try:
    </p>
    <div class="max-w-md mx-auto space-y-2 text-left">
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <div class="w-2 h-2 rounded-full bg-green-500"></div>
        <span>Remove filters with "No matches"</span>
      </div>
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <div class="w-2 h-2 rounded-full bg-blue-500"></div>
        <span>Try broader categories or different tags</span>
      </div>
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <div class="w-2 h-2 rounded-full bg-purple-500"></div>
        <span>Adjust budget, climate, or safety preferences</span>
      </div>
    </div>
  </div>
{:else if !isLoading && totalFilters > 0}
  <!-- Ready to Search State - Only shows BEFORE first search -->
  <div class="text-center p-12">
    <div class="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
      <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd"/>
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-gray-900 mb-3">Ready to Find Your Matches</h3>
    <p class="text-gray-600 max-w-md mx-auto mb-6">
      You've selected {totalFilters} filters. Click "Find My Matches" above to discover destinations.
    </p>
    <div class="text-4xl text-gray-300 animate-pulse">👆</div>
  </div>
{:else if !isLoading}
  <!-- Empty State -->
  <div class="text-center p-16">
    <div class="w-28 h-28 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
      <svg class="w-14 h-14 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-gray-900 mb-3">Start Your Journey</h3>
    <p class="text-gray-600 max-w-md mx-auto mb-8">
      Select tags, activities, or adjust filters above to find destinations that resonate with your travel style.
    </p>
    <div class="text-4xl text-gray-300 animate-pulse">✨</div>
  </div>
{/if}

{#if isLoading}
  <!-- Loading State -->
  <div class="p-12 text-center">
    <div class="inline-block relative">
      <div class="w-16 h-16 border-4 border-indigo-200 rounded-full"></div>
      <div class="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
    </div>
    <h3 class="text-xl font-semibold text-gray-900 mt-6">Finding Your Perfect Matches...</h3>
    <p class="text-gray-600 mt-2">Searching through destinations based on your preferences</p>
  </div>
{/if}