<!-- src/routes/filters/components/Results.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import type { ResonanceScore } from '$lib/types/resonance';
  
  export let matches: ResonanceScore[] = [];
  export let isLoading: boolean = false;
  export let totalFilters: number = 0;
</script>

{#if matches.length > 0}
  <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-gray-900">
        Your Perfect Matches <span class="text-indigo-600">({matches.length} locations)</span>
      </h2>
      <div class="text-sm text-gray-500">
        Sorted by resonance score
      </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {#each matches as match, index}
        <div class="p-6 border-2 border-indigo-100 rounded-xl bg-gradient-to-br from-white to-indigo-50/30 hover:shadow-lg transition-all duration-300 hover:border-indigo-200 group">
          <!-- Rank & Header -->
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                #{index + 1}
              </div>
              <div>
                <!-- FIX: Show the actual name (city or country overview) -->
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                  {match.name}
                </h3>
                <div class="flex items-center gap-2 mt-1">
                  <div class="text-sm text-gray-600">
                    <!-- FIX: Show city, country properly -->
                    {match.city === 'Multiple Cities' ? match.country : `${match.city}, ${match.country}`}
                  </div>
                  {#if match.city !== 'Multiple Cities'}
                    <div class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      City
                    </div>
                  {:else}
                    <div class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Country
                    </div>
                  {/if}
                </div>
                <div class="flex items-center gap-2 mt-1">
                  <div class="text-2xl font-bold text-indigo-600">{match.score}%</div>
                  <div class="text-sm text-gray-500">match</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Match Reasons -->
          <div class="flex flex-wrap gap-2 mb-4">
            {#each match.matchReasons as reason}
              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                {reason}
              </span>
            {/each}
          </div>

          <!-- Score Breakdown -->
          <div class="grid grid-cols-2 gap-4 text-sm mb-4">
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-500">Travel Style</span>
                <span class="font-semibold text-purple-600">{match.breakdown.travelStyle}%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Social Fit</span>
                <span class="font-semibold text-blue-600">{match.breakdown.social}%</span>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="text-gray-500">Environment</span>
                <span class="font-semibold text-green-600">{match.breakdown.environment}%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-500">Activities</span>
                <span class="font-semibold text-orange-600">{match.breakdown.activities}%</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-2 pt-4 border-t border-gray-100">
            <button 
              on:click={() => goto('/living-costs')}
              class="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              💰 Costs
            </button>
            <button 
              on:click={() => goto('/digital-nomad')}
              class="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              💻 Nomad Info
            </button>
            <button 
              on:click={() => goto('/visa')}
              class="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              📝 Visa
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
{:else if !isLoading && totalFilters > 0}
  <!-- Ready State -->
  <div class="text-center py-16 bg-white/80 rounded-2xl border border-gray-200">
    <div class="text-6xl mb-6 opacity-60">🎯</div>
    <h3 class="text-2xl font-light text-gray-700 mb-4">Ready to Find Your Matches</h3>
    <p class="text-gray-600 max-w-md mx-auto mb-6">
      You've selected {totalFilters} filters. Click the button to discover countries that match your preferences.
    </p>
    <div class="text-4xl opacity-40 animate-bounce">👇</div>
  </div>
{:else if !isLoading}
  <!-- Empty State -->
  <div class="text-center py-20 bg-white/80 rounded-2xl border border-gray-200">
    <div class="text-7xl mb-6 opacity-60">🌍</div>
    <h3 class="text-2xl font-light text-gray-700 mb-4">Start Your Journey</h3>
    <p class="text-gray-600 max-w-md mx-auto mb-8">
      Select some tags, categories, or activities above to find destinations that resonate with your travel style.
    </p>
    <div class="text-4xl opacity-40 animate-pulse">✨</div>
  </div>
{/if}
