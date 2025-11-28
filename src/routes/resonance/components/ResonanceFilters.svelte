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
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg sticky top-8">
  
  <!-- Active Filters with X Buttons -->
  {#if activeFilters.length > 0}
    <div class="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
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
          <div class="group relative bg-white border border-blue-300 text-blue-800 px-3 py-2 rounded-full flex items-center gap-2 transition-all duration-200 hover:bg-blue-50 hover:border-blue-400 shadow-sm">
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
  <div class="space-y-4 mb-6">
    <div>
      <label for="budget-select" class="block text-sm font-medium mb-2 text-gray-700">Budget Level</label>
      <select 
        id="budget-select"
        bind:value={preferences.budget}
        on:change={handleBudgetChange}
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
        on:change={handleClimateChange}
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
        on:input={handleInternetChange}
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
        on:input={handleSafetyChange}
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
      {#if activeFilters.length > 0}
        <div class="text-sm font-normal opacity-90">({activeFilters.length} filters active)</div>
      {/if}
    {/if}
  </button>
</div>
