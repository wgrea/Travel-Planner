<!-- src/routes/filters/components/ResultsSection.svelte -->
<script lang="ts">
  import { minimalData } from '$lib/data/minimalData';
  // Import stores from the Svelte component
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

  // Use the derived store from ConnectedFilters
  $: matchingCountries = getMatchingCountries();
  
  function getMatchingCountries(): Country[] {
    return $filteredCountries.filter((country: Country) => {
      // Apply your additional filters
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

<div class="mt-8 border-t border-white/50 pt-6">
  <!-- Results Summary -->
  <div class="mb-6 p-4 bg-white/10 rounded-xl border border-white/30">
    <p class="text-lg font-semibold mb-2">🎯 Found {matchingCountries.length} Matching Destinations</p>
    <p class="text-md font-light italic text-white/80 mb-4">
      {filteredResultText}
    </p>
    
    <!-- Matching Countries Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {#each matchingCountries.slice(0, 6) as country}
        <div class="bg-white/5 rounded-lg p-4 border border-white/20 hover:border-white/40 transition-all">
          <div class="flex justify-between items-start mb-2">
            <h4 class="font-bold text-lg text-white">{country.name}</h4>
            <span class="px-2 py-1 bg-cyan-500/50 rounded text-xs uppercase">
              {country.costs.tier}
            </span>
          </div>
          
          <div class="flex flex-wrap gap-1 mb-3">
            {#each country.filters.activities.slice(0, 3) as activity}
              <span class="px-2 py-1 bg-cyan-500/30 rounded text-xs border border-cyan-400/30">{activity}</span>
            {/each}
          </div>
          
          <div class="text-sm text-white/70 space-y-1">
            <div>🏛️ Visa: {country.visa.difficulty}</div>
            <div>💰 Cost: {country.costs.tier}</div>
            <div>🎯 Region: {country.region}</div>
          </div>
          
          {#if country.popularCities.length > 0}
            <div class="mt-3 pt-2 border-t border-white/20">
              <p class="text-xs text-white/60 mb-1">Popular Cities:</p>
              <div class="flex flex-wrap gap-1">
                {#each country.popularCities.slice(0, 2) as cityId}
                  {#if minimalData.cities[cityId]}
                    <span class="px-2 py-1 bg-white/10 rounded text-xs">
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
      <div class="text-center py-8 text-white/60">
        <div class="text-4xl mb-2">🤔</div>
        <p>No destinations match all your filters. Try adjusting some criteria!</p>
      </div>
    {/if}
  </div>

  <!-- Action Buttons -->
  <div class="flex flex-col sm:flex-row gap-4">
    <button 
      on:click={savePreferences}
      class="flex-1 group relative p-4 text-lg font-semibold rounded-xl bg-cyan-500/80 backdrop-blur-sm text-white border-2 border-cyan-400 hover:bg-cyan-600 hover:border-cyan-500 transition-all duration-300 shadow-md"
    >
      <span class="relative flex items-center justify-center gap-2">
        <span class="text-2xl">💾</span> Save Will's Preferences
      </span>
    </button>
    
    <button class="flex-1 group relative p-4 text-lg font-semibold rounded-xl bg-lime-500/80 backdrop-blur-sm text-white border-2 border-lime-400 hover:bg-lime-600 hover:border-lime-500 transition-all duration-300 shadow-md">
      <span class="relative flex items-center justify-center gap-2">
        <span class="text-2xl">🌍</span> Compare Top 3 Destinations
      </span>
    </button>
  </div>
</div>