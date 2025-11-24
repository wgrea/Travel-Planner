<!-- src/routes/filters/components/ResultsSection.svelte -->
<script lang="ts">
  import { minimalData } from '$lib/data/minimalData';
  import {
    selectedContinent,
    selectedRegion,
    selectedActivities,
    selectedCostTier,
    selectedVisaDifficulty,
    filteredCountries
  } from './ConnectedFilters.svelte';
  import type { Country } from '$lib/types/minimalData';

  export let filteredResultText: string = '';
  export let activities: string[] = [];
  export let monthlyBudget: [number, number] = [0, 0];
  export let isCheap: boolean = false;
  export let isVisaFree: boolean = false;

  $: matchingCountries = getMatchingCountries();
  
  function getMatchingCountries(): Country[] {
    return $filteredCountries.filter((country: Country) => {
      if (isCheap && country.costs.tier !== 'low') return false;
      if (isVisaFree && country.visa.difficulty !== 'easy') return false;
      return true;
    });
  }

  function savePreferences() {
    const preferences = {
      monthlyBudget,
      activities,
      selectedContinent: $selectedContinent,
      selectedRegion: $selectedRegion,
      selectedActivities: $selectedActivities,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('willTravelPreferences', JSON.stringify(preferences));
    alert('Preferences saved! 🎉');
  }
</script>

<div class="mt-8 border-t border-gray-200 pt-6">
  <!-- Results Summary -->
  <div class="mb-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
    <p class="text-lg font-semibold text-gray-900 mb-2">🎯 Found {matchingCountries.length} Matching Destinations</p>
    <p class="text-md text-gray-600 mb-4">
      {filteredResultText}
    </p>
    
    <!-- Matching Countries Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {#each matchingCountries.slice(0, 6) as country}
        <div class="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-all">
          <div class="flex justify-between items-start mb-2">
            <h4 class="font-semibold text-gray-900">{country.name}</h4>
            <span class="px-2 py-1 bg-blue-100 rounded text-xs uppercase text-blue-800">
              {country.costs.tier}
            </span>
          </div>
          
          <div class="flex flex-wrap gap-1 mb-3">
            {#each country.filters.activities.slice(0, 3) as activity}
              <span class="px-2 py-1 bg-blue-50 rounded text-xs border border-blue-100 text-blue-700">{activity}</span>
            {/each}
          </div>
          
          <div class="text-sm text-gray-600 space-y-1">
            <div>🏛️ Visa: {country.visa.difficulty}</div>
            <div>💰 Cost: {country.costs.tier}</div>
            <div>🎯 Region: {country.region}</div>
          </div>
          
          {#if country.popularCities.length > 0}
            <div class="mt-3 pt-2 border-t border-gray-200">
              <p class="text-xs text-gray-500 mb-1">Popular Cities:</p>
              <div class="flex flex-wrap gap-1">
                {#each country.popularCities.slice(0, 2) as cityId}
                  {#if minimalData.cities[cityId]}
                    <span class="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                      {minimalData.cities[cityId].name}
                    </span>
                  {/if}
                {/each}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
    
    {#if matchingCountries.length === 0}
      <div class="text-center py-8 text-gray-500">
        <div class="text-4xl mb-2">🤔</div>
        <p>No destinations match all your filters. Try adjusting some criteria!</p>
      </div>
    {/if}
  </div>

  <!-- Action Buttons -->
  <div class="flex flex-col sm:flex-row gap-4">
    <button 
      on:click={savePreferences}
      class="flex-1 p-4 text-lg font-semibold rounded-xl bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 shadow-sm"
    >
      <span class="flex items-center justify-center gap-2">
        <span class="text-xl">💾</span> Save Will's Preferences
      </span>
    </button>
    
    <button class="flex-1 p-4 text-lg font-semibold rounded-xl bg-emerald-600 text-white border-2 border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700 transition-all duration-300 shadow-sm">
      <span class="flex items-center justify-center gap-2">
        <span class="text-xl">🌍</span> Compare Top 3 Destinations
      </span>
    </button>
  </div>
</div>