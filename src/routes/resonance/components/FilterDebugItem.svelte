<!-- src/routes/resonance/components/FilterDebugItem.svelte -->
<script lang="ts">
  import type { ResonancePreferences, CityResonanceProfile } from '$lib/types/resonance';
  
  export let filter: {
    type: string;
    value: string;
    label: string;
    debugInfo: {
      hasMatches: boolean;
      count: number;
      locations: Array<{
        city: string;
        country: string;
        fullText: string;
      }>;
    } | null;
  };
  
  export let onRemove: (filter: any) => void;
  export let expanded: boolean = false;
  export let onToggleExpand: (filterValue: string) => void;
  
  // Helper to count unique countries
  function getUniqueCountries(): number {
    if (!filter.debugInfo?.locations) return 0;
    const countries = new Set(filter.debugInfo.locations.map(l => l.country));
    return countries.size;
  }
</script>

<div class="group bg-white/90 rounded-lg border {filter.debugInfo?.hasMatches ? 'border-blue-200' : 'border-red-200'} p-3 shadow-sm">
  <!-- Filter header with remove button -->
  <div class="flex justify-between items-start mb-2">
    <div class="flex items-center gap-2">
      <span class="font-medium text-gray-800 text-sm truncate max-w-[200px]">{filter.label}</span>
      {#if filter.type === 'tag' || filter.type === 'activity'}
        {#if filter.debugInfo?.hasMatches}
          <span class="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex-shrink-0">
            {filter.debugInfo.count} match{#if filter.debugInfo.count !== 1}es{/if}
          </span>
        {:else}
          <span class="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full flex-shrink-0">
            No matches
          </span>
        {/if}
      {/if}
    </div>
    <button
      on:click={() => onRemove(filter)}
      class="text-gray-400 hover:text-red-500 text-lg leading-none p-1 hover:bg-red-50 rounded flex-shrink-0"
      title="Remove this filter"
    >
      ×
    </button>
  </div>
  
  <!-- Debug info for tags and activities -->
  {#if (filter.type === 'tag' || filter.type === 'activity') && filter.debugInfo}
    {#if filter.debugInfo.hasMatches}
      <div class="text-xs text-gray-600 space-y-2">
        <!-- Locations - Show city, country -->
        {#if filter.debugInfo.locations.length > 0}
          <div>
            <div class="font-medium text-gray-700 mb-1 flex items-center gap-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              Connected to:
            </div>
            <div class="space-y-1">
              <!-- Show initial locations (first 3) or all if expanded -->
              {#each filter.debugInfo.locations.slice(0, expanded ? filter.debugInfo.locations.length : 3) as location}
                <div class="flex items-center gap-1">
                  <span class="inline-block bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs w-full">
                    {location.fullText}
                  </span>
                </div>
              {/each}
              
              <!-- Show "Show more/less" button if there are more than 3 locations -->
              {#if filter.debugInfo.locations.length > 3}
                <button
                  on:click={() => onToggleExpand(filter.value)}
                  class="text-xs text-blue-600 hover:text-blue-800 font-medium mt-1 flex items-center gap-1"
                >
                  {#if expanded}
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
                    </svg>
                    Show less
                  {:else}
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                    Show {filter.debugInfo.locations.length - 3} more
                  {/if}
                </button>
              {/if}
            </div>
          </div>
        {/if}
        
        <!-- Additional stats at bottom -->
        <div class="pt-2 border-t border-gray-200">
          <div class="flex items-center justify-between text-xs text-gray-500">
            <span>Total matches: <span class="font-medium">{filter.debugInfo.count}</span></span>
            <span>
              Countries: 
              <span class="font-medium">
                {getUniqueCountries()}
              </span>
            </span>
          </div>
        </div>
      </div>
    {:else}
      <p class="text-xs text-red-600 italic">
        ⚠️ This {filter.type} isn't connected to any locations in our database.
      </p>
    {/if}
  {:else if filter.type === 'budget' || filter.type === 'climate'}
    <!-- Show info for budget/climate filters -->
    <div class="text-xs text-gray-600">
      <div class="flex items-center gap-1 text-gray-700">
        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        {#if filter.type === 'budget'}
          <span>Filtering for {filter.label.replace('Budget: ', '')} locations</span>
        {:else}
          <span>Filtering for {filter.label.replace('Climate: ', '')} climate</span>
        {/if}
      </div>
    </div>
  {/if}
</div>