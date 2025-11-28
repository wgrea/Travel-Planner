<!-- src/routes/filters/components/ResonanceFilters.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ResonancePreferences } from '$lib/types/resonance';
  
  export let preferences: ResonancePreferences;
  export let selectedTags: string[] = [];
  export let selectedBestFor: string[] = [];
  export let totalFilters: number = 0;
  export let isLoading: boolean = false;

  // Remove unused exports since we're not using them in this component
  // export let allTags: string[] = [];
  // export let allBestFor: string[] = [];
  // export let allActivities: string[] = [];

  const travelStyles = [
    { value: 'slow', label: 'Slow Travel', emoji: '🐢', description: 'Immerse yourself deeply' },
    { value: 'fast', label: 'Fast-paced', emoji: '⚡', description: 'See as much as possible' },
    { value: 'adventure', label: 'Adventure', emoji: '🧗', description: 'Active exploration' },
    { value: 'relaxation', label: 'Relaxation', emoji: '🏖️', description: 'Unwind and recharge' },
    { value: 'cultural', label: 'Cultural', emoji: '🏛️', description: 'History and traditions' }
  ];

  const socialOptions = [
    { value: 'solo', label: 'Solo Travel', emoji: '🙋' },
    { value: 'social', label: 'Very Social', emoji: '👥' },
    { value: 'balanced', label: 'Balanced', emoji: '⚖️' }
  ];

  const energyOptions = [
    { value: 'high', label: 'High Energy', emoji: '🔥' },
    { value: 'medium', label: 'Medium Energy', emoji: '💫' },
    { value: 'low', label: 'Low Energy', emoji: '😌' }
  ];

  const dispatch = createEventDispatcher<{
    updatePreferences: { field: string; value: any };
    toggleTag: string;
    toggleBestFor: string;
    clearAll: void;
    findMatches: void;
  }>();
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg sticky top-8">

  <!-- Budget & Practical -->
  <div class="space-y-4 mb-6">
    <div>
      <label for="budget-select" class="block text-sm font-medium mb-2 text-gray-700">Budget Level</label>
      <select 
        id="budget-select"
        bind:value={preferences.budget}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="budget">Budget Friendly 💰</option>
        <option value="midrange">Comfortable Mid-range 💵</option>
        <option value="luxury">Luxury Experience 💎</option>
      </select>
    </div>

    <!-- In ResonanceFilters.svelte, after the budget section -->
    <!-- Make sure there is no contradition from the living costs page -->
    <div class="text-xs text-gray-500 mt-1">
    {#if preferences.budget === 'budget'}
        💡 Typically $20-40/day for budget travel
    {:else if preferences.budget === 'midrange'}  
        💡 Typically $40-80/day for comfortable travel
    {:else if preferences.budget === 'luxury'}
        💡 Typically $80+/day for luxury experiences
    {/if}
    </div>

    <div>
      <label for="climate-select" class="block text-sm font-medium mb-2 text-gray-700">Preferred Climate</label>
      <select 
        id="climate-select"
        bind:value={preferences.climate}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        <option value="warm">Warm & Sunny ☀️</option>
        <option value="cool">Cool & Crisp ❄️</option>
        <option value="temperate">Temperate & Mild 🌤️</option>
        <option value="any">Any Climate</option>
      </select>
    </div>

    <div>
      <label for="internet-slider" class="block text-sm font-medium mb-2 text-gray-700">
        Internet Importance: {preferences.internetImportance}/10
      </label>
      <input 
        id="internet-slider"
        type="range" 
        min="1" 
        max="10" 
        bind:value={preferences.internetImportance}
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
    </div>

    <div>
      <label for="safety-slider" class="block text-sm font-medium mb-2 text-gray-700">
        Safety Priority: {preferences.safetyImportance}/10
      </label>
      <input 
        id="safety-slider"
        type="range" 
        min="1" 
        max="10" 
        bind:value={preferences.safetyImportance}
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
      />
    </div>
  </div>

  <!-- Find Matches Button -->
  <button
    on:click={() => dispatch('findMatches')}
    disabled={isLoading || totalFilters === 0}
    class="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
  >
    {#if isLoading}
      <span class="flex items-center justify-center gap-2">
        <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Finding Matches...
      </span>
    {:else}
      Find Destination Matches
      {#if totalFilters > 0}
        <div class="text-sm font-normal opacity-90">({totalFilters} filters active)</div>
      {/if}
    {/if}
  </button>

  <!-- Active Filters Preview -->
  {#if totalFilters > 0}
    <div class="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
      <h4 class="text-sm font-medium text-blue-900 mb-2">Active Filters:</h4>
      <div class="flex flex-wrap gap-1">
        {#each selectedTags as tag}
          <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
            #{tag}
          </span>
        {/each}
        {#each selectedBestFor as category}
          <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
            ✓ {category}
          </span>
        {/each}
        {#each preferences.activities as activity}
          <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
            🎯 {activity}
          </span>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .slider::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #8b5cf6;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  .slider::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #8b5cf6;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
</style>