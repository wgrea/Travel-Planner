<!-- src/routes/filters/components/QuickDecisionHelper.svelte -->
<script lang="ts">
  import { minimalData } from '$lib/data/minimalData';
  
  let budgetPreference = '';
  let vibePreference = '';
  let visaPreference = '';
  
  $: quickResults = getQuickResults();
  
  function getQuickResults() {
    if (!budgetPreference || !vibePreference) return [];
    
    return Object.values(minimalData.countries).filter(country => {
      if (budgetPreference && country.costs.tier !== budgetPreference) return false;
      if (visaPreference && country.visa.difficulty !== visaPreference) return false;
      if (vibePreference && !country.filters.activities.includes(vibePreference)) return false;
      return true;
    }).slice(0, 5);
  }
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">🚀 Quick Decision Helper</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
    <!-- Budget -->
    <select bind:value={budgetPreference} class="bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="">💰 Budget</option>
      <option value="low">Low ($)</option>
      <option value="medium">Medium ($$)</option>
      <option value="high">High ($$$)</option>
    </select>
    
    <!-- Vibe -->
    <select bind:value={vibePreference} class="bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="">🎯 Vibe</option>
      <option value="beach">Beach & Sun</option>
      <option value="cultural">Culture & History</option>
      <option value="food">Food Paradise</option>
      <option value="adventure">Adventure</option>
      <option value="digital_nomad">Digital Nomad</option>
    </select>
    
    <!-- Visa -->
    <select bind:value={visaPreference} class="bg-white border border-gray-300 rounded-lg p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="">🏛️ Visa</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
  
  {#if quickResults.length > 0}
    <div class="quick-results">
      <p class="text-gray-700 mb-3">Top matches:</p>
      <div class="flex flex-wrap gap-3">
        {#each quickResults as country}
          <div class="bg-gray-50 rounded-lg p-3 border border-gray-200 min-w-[200px]">
            <div class="font-semibold text-gray-900">{country.name}</div>
            <div class="text-sm text-gray-600">{country.region}</div>
            <div class="text-xs text-gray-500 mt-1">
              {country.popularCities?.slice(0, 2).map(id => minimalData.cities[id]?.name).join(', ') || ''}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
