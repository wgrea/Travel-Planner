<!-- src/routes/resonance/components/ResonanceFilters.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ResonancePreferences, CityResonanceProfile } from '$lib/types/resonance';
  
  export let preferences: ResonancePreferences;
  export let selectedTags: string[] = [];
  export let isLoading: boolean = false;
  export let allLocations: CityResonanceProfile[] = [];

  const budgetOptions = [
    { value: 'any', label: 'Any Budget Level' },
    { value: 'budget', label: 'Budget Only 💰' },
    { value: 'midrange', label: 'Comfortable Only 💵' },
    { value: 'luxury', label: 'Luxury Only 💎' },
    { value: 'budget-midrange', label: 'Budget + Comfortable 🪙' },
    { value: 'midrange-luxury', label: 'Comfortable + Luxury 💎' },
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
    removeTag: string;
    removeActivity: string;
    clearAll: void;
    findMatches: void;
  }>();

  // Get tag debug info
  function getTagDebugInfo(tag: string) {
    if (!allLocations || !allLocations.length) return { 
      hasMatches: false, 
      count: 0, 
      countries: [], 
      sampleCities: [] 
    };
    
    const matchingLocations = allLocations.filter(l => l.tags && l.tags.includes(tag));
    const countries = [...new Set(matchingLocations.map(l => l.country))];
    
    return {
      hasMatches: matchingLocations.length > 0,
      count: matchingLocations.length,
      countries: countries,
      sampleCities: matchingLocations.slice(0, 2).map(l => l.name)
    };
  }

  // Get activity debug info - FIXED: Use popularActivities instead of activities
  function getActivityDebugInfo(activity: string) {
    if (!allLocations || !allLocations.length) return { 
      hasMatches: false, 
      count: 0, 
      countries: [], 
      sampleCities: [] 
    };
    
    // Convert activity to lowercase for case-insensitive matching
    const activityLower = activity.toLowerCase();
    const matchingLocations = allLocations.filter(l => 
      l.popularActivities && 
      l.popularActivities.some(a => a.toLowerCase().includes(activityLower))
    );
    
    const countries = [...new Set(matchingLocations.map(l => l.country))];
    
    return {
      hasMatches: matchingLocations.length > 0,
      count: matchingLocations.length,
      countries: countries,
      sampleCities: matchingLocations.slice(0, 2).map(l => l.name)
    };
  }

  // Get all active filters with debug info
  $: activeFiltersWithDebug = [
    // Tags
    ...selectedTags.map(tag => ({ 
      type: 'tag', 
      value: tag, 
      label: tag,
      debugInfo: getTagDebugInfo(tag)
    })),
    // Activities
    ...preferences.activities.map(activity => ({ 
      type: 'activity', 
      value: activity, 
      label: activity,
      debugInfo: getActivityDebugInfo(activity)
    })),
    // Budget filter
    ...(preferences.budget && preferences.budget !== 'any' ? [{ 
      type: 'budget', 
      value: preferences.budget, 
      label: `Budget: ${budgetOptions.find(opt => opt.value === preferences.budget)?.label || preferences.budget}`,
      debugInfo: null
    }] : []),
    // Climate filter
    ...(preferences.climate && preferences.climate !== 'any' ? [{ 
      type: 'climate', 
      value: preferences.climate, 
      label: `Climate: ${climateOptions.find(opt => opt.value === preferences.climate)?.label || preferences.climate}`,
      debugInfo: null
    }] : [])
  ];

  $: totalActiveFilters = activeFiltersWithDebug.length;

  function handleRemoveFilter(filter: { type: string; value: string }) {
    switch (filter.type) {
      case 'tag':
        dispatch('removeTag', filter.value);
        break;
      case 'activity':
        dispatch('removeActivity', filter.value);
        break;
      case 'budget':
        dispatch('updatePreferences', { field: 'budget', value: 'any' });
        break;
      case 'climate':
        dispatch('updatePreferences', { field: 'climate', value: 'any' });
        break;
    }
  }

  function handlePreferenceChange(field: string, value: any) {
    dispatch('updatePreferences', { field, value });
  }

  function handleBudgetChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    handlePreferenceChange('budget', target.value);
  }

  function handleClimateChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    handlePreferenceChange('climate', target.value);
  }

  function handleInternetChange(event: Event) {
    const target = event.target as HTMLInputElement;
    handlePreferenceChange('internetImportance', parseInt(target.value));
  }

  function handleSafetyChange(event: Event) {
    const target = event.target as HTMLInputElement;
    handlePreferenceChange('safetyImportance', parseInt(target.value));
  }

  // Helper to get internet recommendation
  $: internetRecommendation = (() => {
    if (preferences.internetImportance >= 9) {
      return { 
        color: 'text-amber-600',
        icon: '📡',
        text: 'Strict requirement',
        tip: 'Fewer destination options - only premium internet locations'
      };
    } else if (preferences.internetImportance >= 8) {
      return { 
        color: 'text-blue-600',
        icon: '💻',
        text: 'Work capable',
        tip: 'Good destination options - remote work possible'
      };
    } else if (preferences.internetImportance >= 6) {
      return { 
        color: 'text-green-600',
        icon: '📶',
        text: 'Flexible',
        tip: 'Many destination options - basic internet OK'
      };
    } else {
      return { 
        color: 'text-emerald-600',
        icon: '🌐',
        text: 'Maximum options',
        tip: 'All destinations available - internet not a priority'
      };
    }
  })();

  // Helper to get safety recommendation
  $: safetyRecommendation = (() => {
    if (preferences.safetyImportance >= 9) {
      return { 
        color: 'text-amber-600',
        icon: '🛡️',
        text: 'Maximum safety',
        tip: 'Very few destinations - only safest locations'
      };
    } else if (preferences.safetyImportance >= 8) {
      return { 
        color: 'text-blue-600',
        icon: '🔒',
        text: 'Balanced safety',
        tip: 'Good safety with many destination options'
      };
    } else if (preferences.safetyImportance >= 6) {
      return { 
        color: 'text-green-600',
        icon: '🗺️',
        text: 'Adventurous',
        tip: 'More destination options - moderate safety'
      };
    } else {
      return { 
        color: 'text-emerald-600',
        icon: '🌍',
        text: 'Maximum flexibility',
        tip: 'All destinations available - safety not a priority'
      };
    }
  })();
</script>

<div class="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/50 shadow-lg sticky top-8">
  

  <!-- Budget & Practical -->
  <div class="space-y-6 mb-6">
    <div>
      <label for="budget-select" class="block text-sm font-medium mb-2 text-gray-700">Budget Level</label>
      <select 
        id="budget-select"
        bind:value={preferences.budget}
        on:change={handleBudgetChange}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50"
      >
        {#each budgetOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
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
    </div>

    <div>
      <label for="climate-select" class="block text-sm font-medium mb-2 text-gray-700">Preferred Climate</label>
      <select 
        id="climate-select"
        bind:value={preferences.climate}
        on:change={handleClimateChange}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50"
      >
        {#each climateOptions as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </div>

    <!-- Internet Importance -->
    <div class="p-4 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-lg border border-blue-200">
      <div class="flex justify-between items-center mb-2">
        <label for="internet-importance-slider" class="text-sm font-medium text-gray-700">Internet Importance</label>
        <span class="text-sm font-semibold text-gray-800">
          {preferences.internetImportance}/10 {internetRecommendation.icon}
        </span>
      </div>
      <input 
        type="range" 
        min="1" 
        max="10" 
        bind:value={preferences.internetImportance}
        on:input={handleInternetChange}
        class="w-full h-2 bg-gradient-to-r from-gray-300 to-blue-300 rounded-lg appearance-none cursor-pointer slider"
      />
      
      <div class="mt-3">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-sm font-medium {internetRecommendation.color}">
            {internetRecommendation.icon} {internetRecommendation.text}
          </span>
        </div>
        <p class="text-xs text-gray-600">{internetRecommendation.tip}</p>
        <div class="text-xs text-gray-500 mt-2">
          {#if preferences.internetImportance >= 8}
            ✅ Good for digital nomads & remote work
          {:else if preferences.internetImportance >= 6}
            ⚠️ May work for light tasks, check reviews
          {:else}
            🌍 Internet not a priority - more options available
          {/if}
        </div>
      </div>
    </div>

    <!-- Safety Priority -->
    <div class="p-4 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-lg border border-green-200">
      <div class="flex justify-between items-center mb-2">
        <label for="safety-priority-slider" class="text-sm font-medium text-gray-700">Safety Priority</label>
        <span class="text-sm font-semibold text-gray-800">
          {preferences.safetyImportance}/10 {safetyRecommendation.icon}
        </span>
      </div>
      <input 
        type="range" 
        min="1" 
        max="10" 
        bind:value={preferences.safetyImportance}
        on:input={handleSafetyChange}
        class="w-full h-2 bg-gradient-to-r from-gray-300 to-green-300 rounded-lg appearance-none cursor-pointer slider"
      />
      
      <div class="mt-3">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-sm font-medium {safetyRecommendation.color}">
            {safetyRecommendation.icon} {safetyRecommendation.text}
          </span>
        </div>
        <p class="text-xs text-gray-600">{safetyRecommendation.tip}</p>
        <div class="text-xs text-gray-500 mt-2">
          {#if preferences.safetyImportance >= 9}
            ⚠️ Highly restrictive - fewer destination options
          {:else if preferences.safetyImportance >= 8}
            ✅ Balanced - good safety with decent options
          {:else if preferences.safetyImportance >= 7}
            🌍 More adventurous destinations available
          {:else}
            🗺️ Maximum destination flexibility
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Find Matches Button -->
  <button
    on:click={() => dispatch('findMatches')}
    disabled={isLoading}
    class="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl relative group"
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
      <div class="flex flex-col items-center">
        <span class="text-base">Find Destination Matches</span>
        {#if totalActiveFilters > 0}
          <span class="text-sm font-normal opacity-90 mt-1">({totalActiveFilters} filters active)</span>
        {/if}
      </div>
      <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/0 via-indigo-400/20 to-purple-500/0 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
    {/if}
  </button>

    <!-- Combined Active Filters & Tag Connections Box -->
  {#if totalActiveFilters > 0}
    <div class="mb-6 p-4 bg-gradient-to-br from-blue-50/70 to-cyan-50/70 backdrop-blur-sm rounded-xl border border-blue-200/60">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h4 class="text-sm font-semibold text-blue-900">Active Filters ({totalActiveFilters})</h4>
          <p class="text-xs text-blue-700 mt-1">Click X to remove individual filters</p>
        </div>
        <button
          on:click={() => dispatch('clearAll')}
          class="text-xs text-red-600 hover:text-red-800 font-medium bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
        >
          Clear All
        </button>
      </div>
      
      <div class="space-y-3">
        {#each activeFiltersWithDebug as filter}
          <div class="group bg-white/90 rounded-lg border {filter.debugInfo?.hasMatches ? 'border-blue-200' : 'border-red-200'} p-3 shadow-sm">
            <!-- Filter header with remove button -->
            <div class="flex justify-between items-start mb-2">
              <div class="flex items-center gap-2">
                <span class="font-medium text-gray-800 text-sm">{filter.label}</span>
                {#if filter.type === 'tag' || filter.type === 'activity'}
                  {#if filter.debugInfo?.hasMatches}
                    <span class="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      {filter.debugInfo.count} match{#if filter.debugInfo.count !== 1}es{/if}
                    </span>
                  {:else}
                    <span class="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                      No matches
                    </span>
                  {/if}
                {/if}
              </div>
              <button
                on:click={() => handleRemoveFilter(filter)}
                class="text-gray-400 hover:text-red-500 text-lg leading-none p-1 hover:bg-red-50 rounded"
                title="Remove this filter"
              >
                ×
              </button>
            </div>
            
            <!-- Debug info for tags and activities -->
            {#if (filter.type === 'tag' || filter.type === 'activity') && filter.debugInfo}
              {#if filter.debugInfo.hasMatches}
                <div class="text-xs text-gray-600 space-y-2">
                  <!-- Countries -->
                  <div>
                    <div class="font-medium text-gray-700 mb-1">Connected to:</div>
                    <div class="flex flex-wrap gap-1">
                      {#each filter.debugInfo.countries as country}
                        <span class="inline-block bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs">
                          {country}
                        </span>
                      {/each}
                    </div>
                  </div>
                  
                  <!-- Sample cities -->
                  {#if filter.debugInfo.sampleCities.length > 0}
                    <div>
                      <div class="font-medium text-gray-700 mb-1">Sample locations:</div>
                      <div class="flex flex-wrap gap-1">
                        {#each filter.debugInfo.sampleCities as city}
                          <span class="inline-block bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs">
                            {city}
                          </span>
                        {/each}
                        {#if filter.debugInfo.count > 2}
                          <span class="text-gray-500 text-xs self-center">
                            +{filter.debugInfo.count - 2} more
                          </span>
                        {/if}
                      </div>
                    </div>
                  {/if}
                </div>
              {:else}
                <p class="text-xs text-red-600 italic">
                  ⚠️ This {filter.type} isn't connected to any locations in our database.
                </p>
              {/if}
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <style>
    button.active {
      @apply bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-400 text-indigo-700 shadow-sm;
    }
    button:not(.active) {
      @apply bg-white/50 border-gray-300 text-gray-700 hover:bg-gray-50;
    }
    
    .slider::-webkit-slider-thumb {
      @apply appearance-none w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 cursor-pointer shadow-lg;
    }
    .slider::-moz-range-thumb {
      @apply w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 cursor-pointer border-0 shadow-lg;
    }
    
    @media (max-width: 768px) {
      .sticky {
        position: relative;
        top: 0;
      }
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 0.8; }
    }
    .animate-pulse-slow {
      animation: pulse-slow 2s ease-in-out infinite;
    }
  </style>
</div>