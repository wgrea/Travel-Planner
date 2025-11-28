<!-- src/routes/filters/components/ConnectedFilters.svelte -->
<script lang="ts" context="module">
  import { writable, derived } from 'svelte/store';
  import { minimalData } from '$lib/data/minimalData';
  import type { Country, City } from '$lib/types/minimalData';
  
  // Filter stores
  export const selectedContinent = writable<string>('');
  export const selectedRegion = writable<string>('');
  export const selectedActivities = writable<string[]>([]);
  export const selectedCostTier = writable<string>('');
  export const selectedVisaDifficulty = writable<string>('');
  export const selectedCountry = writable<string>('');
  export const selectedCity = writable<string>('');

  // Derived stores
  export const availableRegions = derived(selectedContinent, ($continent: string) => 
    $continent ? minimalData.filters.regions.filter((region: string) => 
      Object.values(minimalData.countries).some((country: unknown) => {
        const c = country as Country;
        return c.continent === $continent && c.region === region;
      })
    ) : []
  );

  export const filteredCountries = derived(
    [selectedContinent, selectedRegion, selectedActivities, selectedCostTier, selectedVisaDifficulty],
    ([$continent, $region, $activities, $costTier, $visaDifficulty]) => {
      return Object.values(minimalData.countries).filter((country: unknown) => {
        const c = country as Country;
        if ($continent && c.continent !== $continent) return false;
        if ($region && c.region !== $region) return false;
        if ($activities.length > 0 && !$activities.some(activity => 
          c.filters.activities.includes(activity))
        ) return false;
        if ($costTier && c.costs.tier !== $costTier) return false;
        if ($visaDifficulty && c.visa.difficulty !== $visaDifficulty) return false;
        return true;
      });
    }
  );

  export const availableCities = derived([selectedCountry], ([$country]) => {
    if (!$country) return [] as City[];
    const countryData = minimalData.countries[$country];
    if (!countryData) return [] as City[];
    
    return countryData.popularCities
      .map((cityId: string) => minimalData.cities[cityId])
      .filter((city): city is City => city !== undefined);
  });

  selectedCountry.subscribe(() => {
    selectedCity.set('');
  });
</script>

<script lang="ts">
  function clearAllFilters() {
    selectedContinent.set('');
    selectedRegion.set('');
    selectedCountry.set('');
    selectedCity.set('');
    selectedActivities.set([]);
    selectedCostTier.set('');
    selectedVisaDifficulty.set('');
  }
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <div class="flex items-center justify-between mb-6">
    <h3 class="text-xl font-semibold text-gray-900">🌍 Destination Filters</h3>
    <button 
      on:click={clearAllFilters}
      class="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      Clear All
    </button>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <!-- Continent Filter -->
    <div>
      <label for="continent-select" class="block text-sm font-medium text-gray-700 mb-2">Continent</label>
      <select 
        id="continent-select"
        bind:value={$selectedContinent}
        class="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Continents</option>
        {#each minimalData.filters.continents as continent}
          <option value={continent}>{continent}</option>
        {/each}
      </select>
    </div>

    <!-- Region Filter -->
    <div>
      <label for="region-select" class="block text-sm font-medium text-gray-700 mb-2">Region</label>
      <select 
        id="region-select"
        bind:value={$selectedRegion} 
        disabled={!$availableRegions.length}
        class="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
      >
        <option value="">All Regions</option>
        {#each $availableRegions as region}
          <option value={region}>{region}</option>
        {/each}
      </select>
    </div>

    <!-- Country Selection -->
    <div>
      <label for="country-select" class="block text-sm font-medium text-gray-700 mb-2">Country</label>
      <select 
        id="country-select"
        bind:value={$selectedCountry}
        class="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Select Country</option>
        {#each $filteredCountries as country}
          <option value={(country as Country).id}>{(country as Country).name}</option>
        {/each}
      </select>
    </div>

    <!-- City Selection -->
    {#if $selectedCountry}
      <div>
        <label for="city-select" class="block text-sm font-medium text-gray-700 mb-2">City</label>
        <select 
          id="city-select"
          bind:value={$selectedCity}
          class="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select City</option>
          {#each $availableCities as city}
            <option value={(city as City).id}>
              {(city as City).name} {(city as City).alternativeType ? `(${(city as City).alternativeType})` : ''}
            </option>
          {/each}
        </select>
      </div>
    {/if}
  </div>

  <!-- Activities Section -->
  <div class="mb-4">
    <h4 class="block text-sm font-medium text-gray-700 mb-3">Activities & Interests</h4>
    <div class="flex flex-wrap gap-2">
      {#each minimalData.filters.activities as activity}
        <button 
          class="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border {$selectedActivities.includes(activity) ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'}"
          on:click={() => {
            if ($selectedActivities.includes(activity)) {
              selectedActivities.update(activities => activities.filter(a => a !== activity));
            } else {
              selectedActivities.update(activities => [...activities, activity]);
            }
          }}
        >
          {activity}
        </button>
      {/each}
    </div>
  </div>

  <!-- Additional Quick Filters -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- Cost Tier Filter -->
    <div>
      <label for="cost-tier-select" class="block text-sm font-medium text-gray-700 mb-2">Cost Tier</label>
      <select 
        id="cost-tier-select"
        bind:value={$selectedCostTier}
        class="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Any Cost</option>
        <option value="low">💰 Low Cost</option>
        <option value="medium">💰💰 Medium Cost</option>
        <option value="high">💰💰💰 High Cost</option>
      </select>
    </div>

    <!-- Visa Difficulty Filter -->
    <div>
      <label for="visa-select" class="block text-sm font-medium text-gray-700 mb-2">Visa Difficulty</label>
      <select 
        id="visa-select"
        bind:value={$selectedVisaDifficulty}
        class="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Any Visa</option>
        <option value="easy">✅ Easy</option>
        <option value="medium">⚠️ Medium</option>
        <option value="hard">❌ Difficult</option>
      </select>
    </div>
  </div>

  <!-- Selected Filters Summary -->
  {#if $selectedContinent || $selectedRegion || $selectedCountry || $selectedActivities.length > 0 || $selectedCostTier || $selectedVisaDifficulty}
    <div class="mt-4 pt-4 border-t border-gray-200">
      <p class="text-sm font-medium text-gray-700 mb-2">Active Filters:</p>
      <div class="flex flex-wrap gap-2">
        {#if $selectedContinent}
          <span class="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 rounded text-xs text-gray-700">
            🌍 {$selectedContinent} 
            <button on:click={() => selectedContinent.set('')} class="hover:text-gray-900">×</button>
          </span>
        {/if}
        {#if $selectedRegion}
          <span class="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 rounded text-xs text-gray-700">
            🗺️ {$selectedRegion} 
            <button on:click={() => selectedRegion.set('')} class="hover:text-gray-900">×</button>
          </span>
        {/if}
        {#if $selectedCountry}
          <span class="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 rounded text-xs text-gray-700">
            🇺🇳 {$selectedCountry} 
            <button on:click={() => selectedCountry.set('')} class="hover:text-gray-900">×</button>
          </span>
        {/if}
        {#if $selectedCity}
          <span class="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 rounded text-xs text-gray-700">
            🏙️ {$selectedCity} 
            <button on:click={() => selectedCity.set('')} class="hover:text-gray-900">×</button>
          </span>
        {/if}
        {#each $selectedActivities as activity}
          <span class="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 rounded text-xs text-gray-700">
            {activity} 
            <button on:click={() => selectedActivities.update(activities => activities.filter(a => a !== activity))} class="hover:text-gray-900">×</button>
          </span>
        {/each}
      </div>
    </div>
  {/if}
</div>
