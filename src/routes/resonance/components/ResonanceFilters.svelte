<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ResonancePreferences, CityResonanceProfile } from '$lib/types/resonance';
  
  // Import our new components
  import FilterDebugItem from './FilterDebugItem.svelte';
  import ActiveFiltersSummary from './ActiveFiltersSummary.svelte';
  
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

  // Track if filters are expanded
  let filtersExpanded = false;
  
  // Track expanded individual filters
  let expandedFilters: Set<string> = new Set();

  // Get tag debug info
  function getTagDebugInfo(tag: string) {
    if (!allLocations || !allLocations.length) return { 
      hasMatches: false, 
      count: 0,
      locations: []
    };
    
    const matchingLocations = allLocations.filter(l => l.tags && l.tags.includes(tag));
    
    const locations = matchingLocations.map(l => ({
      city: l.name,
      country: l.country,
      fullText: `${l.name}, ${l.country}`
    }));
    
    return {
      hasMatches: matchingLocations.length > 0,
      count: matchingLocations.length,
      locations: locations
    };
  }

  // Get activity debug info
  function getActivityDebugInfo(activity: string) {
    if (!allLocations || !allLocations.length) return { 
      hasMatches: false, 
      count: 0,
      locations: []
    };
    
    const activityLower = activity.toLowerCase();
    const matchingLocations = allLocations.filter(l => 
      l.popularActivities && 
      l.popularActivities.some(a => a.toLowerCase().includes(activityLower))
    );
    
    const locations = matchingLocations.map(l => ({
      city: l.name,
      country: l.country,
      fullText: `${l.name}, ${l.country}`
    }));
    
    return {
      hasMatches: matchingLocations.length > 0,
      count: matchingLocations.length,
      locations: locations
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
  
  // Count how many filters have matches (tags & activities only)
  $: connectedFiltersCount = activeFiltersWithDebug.filter(filter => 
    (filter.type === 'tag' || filter.type === 'activity') 
      ? filter.debugInfo?.hasMatches 
      : false
  ).length;

  // Helper to get unconnected filters
  function getUnconnectedFilters() {
    return activeFiltersWithDebug.filter(filter => 
      (filter.type === 'tag' || filter.type === 'activity') 
        ? !filter.debugInfo?.hasMatches 
        : false
    );
  }

  // Toggle expanded view for individual filter locations
  function toggleFilterExpand(filterValue: string) {
    if (expandedFilters.has(filterValue)) {
      expandedFilters.delete(filterValue);
    } else {
      expandedFilters.add(filterValue);
    }
  }

  // Check if a filter is expanded
  function isFilterExpanded(filterValue: string): boolean {
    return expandedFilters.has(filterValue);
  }

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
  
  <!-- Combined Active Filters & Tag Connections Box -->
  {#if totalActiveFilters > 0}
    <div class="mb-6 bg-gradient-to-br from-blue-50/70 to-cyan-50/70 backdrop-blur-sm rounded-xl border border-blue-200/60 overflow-hidden">
      <!-- Active Filters Summary Component -->
      <ActiveFiltersSummary
        {totalActiveFilters}
        {selectedTags}
        activities={preferences.activities}
        budgetSelected={preferences.budget !== 'any'}
        climateSelected={preferences.climate !== 'any'}
        {connectedFiltersCount}
        {filtersExpanded}
        onToggleExpanded={() => filtersExpanded = !filtersExpanded}
        onClearAll={() => dispatch('clearAll')}
      />
      
      <!-- Expanded Filters Content (Collapsible) -->
      {#if filtersExpanded}
        <div class="p-4 max-h-96 overflow-y-auto">
          <div class="space-y-3">
            {#each activeFiltersWithDebug as filter}
              <FilterDebugItem
                {filter}
                onRemove={handleRemoveFilter}
                expanded={isFilterExpanded(filter.value)}
                onToggleExpand={toggleFilterExpand}
              />
            {/each}
          </div>
        </div>
      {:else}
        <!-- Collapsed View - Show only unconnected filters as warnings -->
        {#if getUnconnectedFilters().length > 0}
          <div class="p-3 bg-amber-50/50 border-t border-amber-200/50">
            <div class="flex items-center gap-2 text-xs text-amber-800">
              <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              <span>
                {getUnconnectedFilters().length} filters not connected to any locations
                <button 
                  on:click={() => filtersExpanded = true}
                  class="text-amber-700 hover:text-amber-900 underline ml-1"
                >
                  Review
                </button>
              </span>
            </div>
          </div>
        {/if}
      {/if}
    </div>
  {/if}

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