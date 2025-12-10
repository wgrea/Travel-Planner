<!-- src/routes/resonance/components/ResonanceFilters.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ResonancePreferences } from '$lib/types/resonance';
  
  export let preferences: ResonancePreferences;
  export let selectedTags: string[] = [];
  export let isLoading: boolean = false;

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

  const paceOptions = [
    { value: 'slow', label: '🐌 Slow & Immersive', desc: 'Long stays, deep exploration' },
    { value: 'medium', label: '🚶 Balanced Pace', desc: 'Mix of exploration & relaxation' },
    { value: 'fast', label: '⚡ Fast-paced', desc: 'Quick visits, many destinations' },
    { value: 'flexible', label: '🌊 Go with the Flow', desc: 'Adapt to opportunities' }
  ];

  const socialOptions = [
    { value: 'solitary', label: '🧘 Solitary', desc: 'Quiet, personal time' },
    { value: 'small', label: '👥 Small Groups', desc: 'Intimate socializing' },
    { value: 'balanced', label: '⚖️ Balanced', desc: 'Mix of solo & social' },
    { value: 'social', label: '🎉 Social', desc: 'Meeting many people' }
  ];

  const dispatch = createEventDispatcher<{
    updatePreferences: { field: string; value: any };
    toggleTag: string;
    removeTag: string;
    removeActivity: string;
    clearAll: void;
    findMatches: void;
  }>();

  // Get active filters for display with X buttons
  $: activeFilters = [
    ...selectedTags.map(tag => ({ type: 'tag', value: tag, label: tag })),
    ...preferences.activities.map(activity => ({ type: 'activity', value: activity, label: activity })),
    ...(preferences.budget && preferences.budget !== 'any' ? [{ 
      type: 'budget', 
      value: preferences.budget, 
      label: `Budget: ${budgetOptions.find(opt => opt.value === preferences.budget)?.label || preferences.budget}` 
    }] : []),
    ...(preferences.climate && preferences.climate !== 'any' ? [{ 
      type: 'climate', 
      value: preferences.climate, 
      label: `Climate: ${climateOptions.find(opt => opt.value === preferences.climate)?.label || preferences.climate}` 
    }] : [])
  ];

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

  // Helper to get internet recommendation - FIXED LOGIC
  $: internetRecommendation = (() => {
    if (preferences.internetImportance >= 9) {
      return { 
        color: 'text-amber-600', // Changed from green to amber
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
        color: 'text-green-600', // Changed from amber to green
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

  // Helper to get safety recommendation - FIXED LOGIC
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
  
  <!-- Active Filters with X Buttons -->
  {#if activeFilters.length > 0}
    <div class="mb-6 p-4 bg-blue-50/70 backdrop-blur-sm rounded-lg border border-blue-200">
      <div class="flex items-center justify-between mb-3">
        <h4 class="text-sm font-semibold text-blue-900">Active Filters ({activeFilters.length})</h4>
        <button
          on:click={() => dispatch('clearAll')}
          class="text-xs text-blue-600 hover:text-blue-800 font-medium underline"
        >
          Clear All
        </button>
      </div>
      <div class="flex flex-wrap gap-2">
        {#each activeFilters as filter}
          <div class="group relative bg-white/80 border border-blue-300 text-blue-800 px-3 py-2 rounded-full flex items-center gap-2 transition-all duration-200 hover:bg-blue-50 hover:border-blue-400 shadow-sm">
            <span class="text-xs font-medium max-w-[120px] truncate">{filter.label}</span>
            <button
              on:click={() => handleRemoveFilter(filter)}
              class="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold transition-all duration-200 hover:bg-blue-600 hover:scale-110 flex-shrink-0"
              title="Remove filter"
            >
              ×
            </button>
          </div>
        {/each}
      </div>
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

    <!-- Internet Importance with Recommendations -->
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
      
      <!-- Recommendation text -->
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

    <!-- Safety Priority with Recommendations -->
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
      
      <!-- Recommendation text -->
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
        {#if activeFilters.length > 0}
          <span class="text-sm font-normal opacity-90 mt-1">({activeFilters.length} filters active)</span>
        {/if}
      </div>
      <!-- Pulse effect on hover -->
      <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/0 via-indigo-400/20 to-purple-500/0 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
    {/if}
  </button>

  <!-- CSS for active button states -->
  <style>
    button.active {
      @apply bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-400 text-indigo-700 shadow-sm;
    }
    button:not(.active) {
      @apply bg-white/50 border-gray-300 text-gray-700 hover:bg-gray-50;
    }
    
    /* Custom slider styling */
    .slider::-webkit-slider-thumb {
      @apply appearance-none w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 cursor-pointer shadow-lg;
    }
    .slider::-moz-range-thumb {
      @apply w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 cursor-pointer border-0 shadow-lg;
    }
    
    /* Mobile specific adjustments */
    @media (max-width: 768px) {
      .sticky {
        position: relative;
        top: 0;
      }
    }
    
    /* Custom animation for the button pulse */
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 0.8; }
    }
    .animate-pulse-slow {
      animation: pulse-slow 2s ease-in-out infinite;
    }
  </style>
</div>