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

<div class="quick-decision-helper mb-8 p-6 bg-white/10 rounded-xl border border-white/30">
  <h3 class="text-xl font-bold mb-4 text-white">🚀 Quick Decision Helper</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <!-- Budget -->
    <select bind:value={budgetPreference} class="bg-white/20 border border-white/30 rounded-lg p-3 text-white">
      <option value="">💰 Budget</option>
      <option value="low">Low ($)</option>
      <option value="medium">Medium ($$)</option>
      <option value="high">High ($$$)</option>
    </select>
    
    <!-- Vibe -->
    <select bind:value={vibePreference} class="bg-white/20 border border-white/30 rounded-lg p-3 text-white">
      <option value="">🎯 Vibe</option>
      <option value="beach">Beach & Sun</option>
      <option value="cultural">Culture & History</option>
      <option value="food">Food Paradise</option>
      <option value="adventure">Adventure</option>
      <option value="digital_nomad">Digital Nomad</option>
    </select>
    
    <!-- Visa -->
    <select bind:value={visaPreference} class="bg-white/20 border border-white/30 rounded-lg p-3 text-white">
      <option value="">🏛️ Visa</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
  
  {#if quickResults.length > 0}
    <div class="quick-results">
      <p class="text-white/80 mb-3">Top matches:</p>
      <div class="flex flex-wrap gap-2">
        {#each quickResults as country}
          <div class="bg-white/10 rounded-lg p-3 border border-white/20 min-w-[200px]">
            <div class="font-bold text-white">{country.name}</div>
            <div class="text-sm text-white/70">{country.region}</div>
            <div class="text-xs text-white/50 mt-1">
              {country.popularCities?.slice(0, 2).map(id => minimalData.cities[id]?.name).join(', ') || ''}
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>