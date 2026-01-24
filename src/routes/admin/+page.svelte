<!-- src/routes/admin/+page.svelte -->
<script lang="ts">
  import { getAllCountryStatus, type CountryStatus } from '$lib/utils/countryStatus';
  
  let countryStatus: CountryStatus[] = [];
  let loading = false;
  let filter: 'all' | 'incomplete' | 'complete' = 'all';
  
  async function loadStatus() {
    loading = true;
    try {
      countryStatus = await getAllCountryStatus();
    } catch (error) {
      console.error('Failed to load country status:', error);
    } finally {
      loading = false;
    }
  }
  
  loadStatus();
  
  $: filteredCountries = countryStatus.filter(country => {
    if (filter === 'all') return true;
    if (filter === 'complete') return country.complete;
    if (filter === 'incomplete') return !country.complete;
    return true;
  });
  
  $: incompleteCount = countryStatus.filter(c => !c.complete).length;
  $: completeCount = countryStatus.filter(c => c.complete).length;
</script>

<div class="p-6">
  <h1 class="text-3xl font-bold mb-6">Travel Planner Admin Dashboard</h1>
  
  <!-- Stats -->
  <div class="grid grid-cols-3 gap-4 mb-6">
    <div class="bg-blue-50 p-4 rounded-lg">
      <p class="text-sm text-gray-600">Total Countries</p>
      <p class="text-2xl font-bold">{countryStatus.length}</p>
    </div>
    <div class="bg-green-50 p-4 rounded-lg">
      <p class="text-sm text-gray-600">Complete</p>
      <p class="text-2xl font-bold">{completeCount}</p>
    </div>
    <div class="bg-yellow-50 p-4 rounded-lg">
      <p class="text-sm text-gray-600">Needs Work</p>
      <p class="text-2xl font-bold">{incompleteCount}</p>
    </div>
  </div>
  
  <!-- Filters -->
  <div class="flex gap-2 mb-6">
    <button
      class="px-4 py-2 rounded-lg {filter === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-200'}"
      on:click={() => filter = 'all'}
    >
      All
    </button>
    <button
      class="px-4 py-2 rounded-lg {filter === 'complete' ? 'bg-green-600 text-white' : 'bg-green-200'}"
      on:click={() => filter = 'complete'}
    >
      Complete
    </button>
    <button
      class="px-4 py-2 rounded-lg {filter === 'incomplete' ? 'bg-yellow-600 text-white' : 'bg-yellow-200'}"
      on:click={() => filter = 'incomplete'}
    >
      Needs Work
    </button>
  </div>
  
  <!-- Loading State -->
  {#if loading && countryStatus.length === 0}
    <div class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <p class="mt-2 text-gray-600">Loading country data...</p>
    </div>
  
  <!-- No Results -->
  {:else if filteredCountries.length === 0}
    <div class="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
      <p class="text-gray-500">No countries match your filter</p>
    </div>
  
  <!-- Countries List -->
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each filteredCountries as country}
        <div class="border rounded-lg p-4 {country.complete ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'} hover:shadow-md transition-shadow">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-semibold text-lg">{country.name}</h3>
              <p class="text-sm text-gray-600">{country.region}</p>
            </div>
            <span class="text-xs px-2 py-1 rounded-full {country.complete ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}">
              {country.complete ? '✅ Complete' : '⚠️ Needs Work'}
            </span>
          </div>
          
          {#if !country.complete && country.missingModules.length > 0}
            <div class="mt-3 pt-3 border-t border-gray-200">
              <p class="text-sm font-medium text-gray-700 mb-1">Missing modules:</p>
              <div class="flex flex-wrap gap-1">
                {#each country.missingModules as module}
                  <span class="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                    {module}
                  </span>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>