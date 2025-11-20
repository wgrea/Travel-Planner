<!-- src/routes/quick-plan/+page.svelte -->
<script lang="ts">
  import { minimalData } from '$lib/data/minimalData';
  import type { Country } from '$lib/types/minimalData'; // Import from types file
  import { goto } from '$app/navigation';
  
  let step = 1;
  let budget = '';
  let vibe = '';
  let season = '';
  let visa = '';
  
  const budgets = [
    { value: 'low', label: '💰 Budget ($)', description: 'Hostels, street food, buses' },
    { value: 'medium', label: '💸 Moderate ($$)', description: 'Airbnbs, restaurants, some flights' },
    { value: 'high', label: '💎 Luxury ($$$)', description: 'Hotels, fine dining, convenience' }
  ];
  
  const vibes = [
    { value: 'beach', label: '🏖️ Beach & Sun', emoji: '🏖️' },
    { value: 'cultural', label: '🏛️ Culture & History', emoji: '🏛️' },
    { value: 'food', label: '🍜 Food Paradise', emoji: '🍜' },
    { value: 'historic', label: '🏰 Historic', emoji: '🏰' },
    { value: 'adventure', label: '🧗 Adventure', emoji: '🧗' },
    { value: 'urban', label: '🏙️ Urban Exploration', emoji: '🏙️' }
  ];
  
  $: results = getQuickResults();
  
  function getQuickResults(): Country[] {
    if (step < 4) return [];
    
    return Object.values(minimalData.countries).filter((country: Country) => {
      if (budget && country.costs.tier !== budget) return false;
      if (vibe && !country.filters.activities.includes(vibe)) return false;
      if (visa && country.visa.difficulty !== visa) return false;
      return true;
    }).slice(0, 6);
  }
  
  function nextStep() {
    if (step < 4) step++;
  }
  
  function prevStep() {
    if (step > 1) step--;
  }
</script>

<!-- The rest of your template remains the same -->
<div class="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-300 p-8">
  <!-- ... your existing template code ... -->
</div>

<div class="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-300 p-8">
  <div class="max-w-2xl mx-auto">
    <!-- Progress -->
    <div class="mb-8">
      <div class="flex justify-between mb-2">
        {#each [1, 2, 3, 4] as i}
          <div class="text-center">
            <div class="w-8 h-8 rounded-full mx-auto flex items-center justify-center text-white font-bold {step >= i ? 'bg-white/40' : 'bg-white/20'}">
              {i}
            </div>
          </div>
        {/each}
      </div>
      <div class="text-center text-white/80 text-sm">
        {#if step === 1}Budget{:else if step === 2}Vibe{:else if step === 3}Season & Visa{:else}Results{/if}
      </div>
    </div>
    
    <!-- Step 1: Budget -->
    {#if step === 1}
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white mb-4">What's your budget?</h1>
        <div class="space-y-3">
          {#each budgets as option}
            <button
              on:click={() => { budget = option.value; nextStep(); }}
              class="w-full p-6 text-left rounded-xl bg-white/20 border-2 border-white/30 hover:border-white/50 transition-all text-white"
            >
              <div class="text-2xl mb-2">{option.label.split(' ')[0]}</div>
              <div class="font-bold text-lg">{option.label}</div>
              <div class="text-sm opacity-80">{option.description}</div>
            </button>
          {/each}
        </div>
      </div>
    {/if}
    
    <!-- Step 2: Vibe -->
    {#if step === 2}
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white mb-4">What kind of experience?</h1>
        <div class="grid grid-cols-2 gap-3">
          {#each vibes as option}
            <button
              on:click={() => { vibe = option.value; nextStep(); }}
              class="p-4 rounded-xl bg-white/20 border-2 border-white/30 hover:border-white/50 transition-all text-white"
            >
              <div class="text-2xl mb-1">{option.emoji}</div>
              <div class="font-medium">{option.label.split(' ')[0]}</div>
            </button>
          {/each}
        </div>
      </div>
    {/if}
    
    <!-- Step 3: Season & Visa -->
    {#if step === 3}
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white mb-6">Any preferences?</h1>
        
        <div class="space-y-4">
          <div>
            <h3 class="text-white mb-3">🗓️ Travel Time</h3>
            <select bind:value={season} class="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white">
              <option value="">Any time works</option>
              <option value="summer">Summer (Jun-Aug)</option>
              <option value="winter">Winter (Dec-Feb)</option>
              <option value="spring">Spring (Mar-May)</option>
              <option value="fall">Fall (Sep-Nov)</option>
            </select>
          </div>
          
          <div>
            <h3 class="text-white mb-3">🏛️ Visa Preference</h3>
            <select bind:value={visa} class="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white">
              <option value="">No preference</option>
              <option value="easy">Easy visa process</option>
              <option value="medium">Medium difficulty</option>
              <option value="hard">Willing to handle complex visas</option>
            </select>
          </div>
          
          <button
            on:click={nextStep}
            class="w-full p-4 bg-white/30 border-2 border-white/40 rounded-xl text-white font-bold hover:bg-white/40 transition-all"
          >
            Find My Destinations →
          </button>
        </div>
      </div>
    {/if}
    
    <!-- Step 4: Results -->
    {#if step === 4}
      <div>
        <h1 class="text-4xl font-bold text-white mb-6 text-center">Your Perfect Matches</h1>
        
        {#if results.length === 0}
          <div class="text-center text-white/80 py-8">
            <div class="text-6xl mb-4">🤔</div>
            <p class="text-lg">No destinations match your criteria perfectly.</p>
            <p class="text-sm mt-2">Try adjusting your filters for more options.</p>
            <button 
              on:click={() => step = 1}
              class="mt-4 px-6 py-2 bg-white/30 border border-white/40 rounded-xl text-white font-bold hover:bg-white/40 transition-all"
            >
              Start Over
            </button>
          </div>
        {:else}
          <div class="space-y-4">
            {#each results as country (country.id)}
              <div class="bg-white/20 rounded-xl p-4 border border-white/30 text-white">
                <div class="flex justify-between items-start">
                  <h3 class="font-bold text-xl">{country.name}</h3>
                  <span class="px-2 py-1 bg-white/30 rounded text-sm capitalize">{country.costs.tier}</span>
                </div>
                
                <div class="text-sm mb-2 opacity-80">
                  {country.region} • {country.continent}
                </div>
                
                <div class="text-sm space-y-1">
                  <div>🏛️ Visa: <span class="capitalize">{country.visa.difficulty}</span></div>
                  <div>🎯 Activities: {country?.filters?.activities?.join(', ') || ''}</div>
                </div>
                
                {#if country.popularCities.length > 0}
                  <div class="mt-3 pt-3 border-t border-white/20">
                    <div class="text-xs text-white/60 mb-1">Popular cities:</div>
                    <div class="flex gap-2">
                      {#each country.popularCities as cityId}
                        {#if minimalData.cities[cityId]}
                          <span class="text-sm bg-white/20 px-2 py-1 rounded">
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
          
          <div class="mt-6 flex gap-4">
            <button on:click={prevStep} class="flex-1 p-3 bg-white/20 border border-white/30 rounded-xl text-white">
              ← Back
            </button>
            <button on:click={() => step = 1} class="flex-1 p-3 bg-white/30 border border-white/40 rounded-xl text-white font-bold">
              Start Over
            </button>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>