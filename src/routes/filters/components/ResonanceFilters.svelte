<!-- src/routes/filters/components/ResonanceFilters.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ResonancePreferences } from '$lib/types/resonance';
  
  export let preferences: ResonancePreferences;
  export let selectedTags: string[] = [];
  export let totalFilters: number = 0;
  export let isLoading: boolean = false;

  // MAKE SURE THIS IS YOUR UPDATED ARRAY (7 options)
  const budgetOptions = [
    { value: 'any', label: 'Any Budget Level' },
    { value: 'budget', label: 'Budget Only 💰' },
    { value: 'midrange', label: 'Comfortable Only 💵' },
    { value: 'luxury', label: 'Luxury Only 💎' },
    { value: 'budget-midrange', label: 'Budget + Comfortable 🪙' },
    { value: 'midrange-luxury', label: 'Comfortable + Luxury �️' },
    { value: 'all-levels', label: 'All Budget Levels 🌟' }
  ];

  const climateOptions = [
    { value: 'any', label: 'Any Climate' },
    { value: 'warm', label: 'Warm & Sunny ☀️' },
    { value: 'cool', label: 'Cool & Crisp ❄️' },
    { value: 'temperate', label: 'Temperate & Mild 🌤️' }
  ];

  const dispatch = createEventDispatcher<{
    updatePreferences: { field: string; value: any };
    toggleTag: string;
    clearAll: void;
    findMatches: void;
  }>();
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg sticky top-8">

  <!-- Budget & Practical -->
  <div class="space-y-4 mb-6">
    <div>
      <label for="budget-select" class="block text-sm font-medium mb-2 text-gray-700">Budget Level</label>
      <!-- MAKE SURE YOU'RE USING budgetOptions HERE -->
      <select 
        id="budget-select"
        bind:value={preferences.budget}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        {#each budgetOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </div>

    <!-- Budget tooltip -->
    <div class="text-xs text-gray-500 mt-1">
      {#if preferences.budget === 'budget'}
        💡 Only budget-friendly locations
      {:else if preferences.budget === 'midrange'}  
        💡 Only comfortable mid-range locations
      {:else if preferences.budget === 'luxury'}
        💡 Only luxury experiences
      {:else if preferences.budget === 'budget-midrange'}
        💡 Budget + comfortable locations
      {:else if preferences.budget === 'midrange-luxury'}
        💡 Comfortable + luxury locations  
      {:else if preferences.budget === 'all-levels'}
        💡 All budget levels (most options)
      {:else}
        💡 Showing all locations
      {/if}
    </div>

    <div>
      <label for="climate-select" class="block text-sm font-medium mb-2 text-gray-700">Preferred Climate</label>
      <select 
        id="climate-select"
        bind:value={preferences.climate}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      >
        {#each climateOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
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
    disabled={isLoading}
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