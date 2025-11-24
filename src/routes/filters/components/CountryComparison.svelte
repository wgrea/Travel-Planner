<!-- src/routes/filters/components/CountryComparison.svelte -->
<script lang="ts">
  import { minimalData } from '$lib/data/minimalData';
  
  export let countriesToCompare: string[] = [];
  
  function removeFromComparison(countryId: string) {
    countriesToCompare = countriesToCompare.filter(id => id !== countryId);
  }
</script>

{#if countriesToCompare.length > 0}
<div class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 p-4 shadow-lg z-50">
  <div class="max-w-4xl mx-auto flex items-center justify-between">
    <div class="flex gap-4">
      {#each countriesToCompare as countryId}
        {#if minimalData.countries[countryId]}
          <div class="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 border border-blue-200">
            <span class="font-semibold text-gray-900">{minimalData.countries[countryId].name}</span>
            <button on:click={() => removeFromComparison(countryId)} class="text-red-500 hover:text-red-700 text-sm">
              ❌
            </button>
          </div>
        {/if}
      {/each}
    </div>
    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
      Compare {countriesToCompare.length} Countries →
    </button>
  </div>
</div>
{/if}