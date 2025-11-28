<!-- src/routes/digital-nomad/components/PopularCoworkingSpaces.svelte -->
<script lang="ts">
  import type { Workspace } from '$lib/data/nomadData';

  export let selectedCountry: string;
  export let selectedCity: string;
  export let workPreference: string;
  export let workspaceData: Workspace[] = [];

  $: reactiveKey = `${selectedCountry}-${selectedCity}-${workPreference}-${workspaceData.length}`;
  $: console.log('🔄 PopularCoworkingSpaces FORCED UPDATE:', reactiveKey);
  $: console.log('📊 PopularCoworkingSpaces UPDATED - workPreference:', workPreference, 'workspaceData:', workspaceData.length);
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">
    {#if workPreference === 'coworking'}
      🏢 Popular Coworking Spaces
    {:else if workPreference === 'cafe'}
      ☕ Popular Coffee Shops
    {:else if workPreference === 'hostel'}
      🏠 Popular Hostel Workspaces
    {:else if workPreference === 'hotel'}
      🏨 Popular Hotel Workspaces
    {/if}
    {#if selectedCity}in {selectedCity}{/if}
  </h3>
  
  {#if workspaceData.filter(space => space.type === workPreference).length > 0}
  <div class="space-y-4">
    {#each workspaceData.filter(space => space.type === workPreference) as space}
      <div class="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-2">
            <span class="font-semibold text-gray-900">{space.name}</span>
            <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full capitalize">
              {space.type}
            </span>
            <span class="flex items-center gap-1 text-sm text-yellow-600">
              ⭐ {space.rating}
            </span>
          </div>
          
          <div class="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
            <div class="flex items-center gap-1">
              📶 {space.wifiSpeed} Mbps
            </div>
            <div class="flex items-center gap-1">
              🔌 {space.powerOutlets}/5 outlets
            </div>
            <div class="flex items-center gap-1">
              {#if space.noiseLevel <= 2}
                🔇 Quiet
              {:else if space.noiseLevel <= 3}
                🔉 Moderate
              {:else}
                🔊 Loud
              {/if}
            </div>
            <div class="flex items-center gap-1">
              {#if space.type === 'coworking' && space.monthlyPrice}
                💰 ${space.monthlyPrice}/mo
              {:else if space.hourlyRate}
                💰 ${space.hourlyRate}/hr
              {:else}
                💰 Free
              {/if}
            </div>
          </div>
          
          {#if space.amenities && space.amenities.length > 0}
            <div class="flex flex-wrap gap-1 mb-2">
              {#each space.amenities.slice(0, 3) as amenity}
                <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  {amenity}
                </span>
              {/each}
              {#if space.amenities.length > 3}
                <span class="text-xs text-gray-500">
                  +{space.amenities.length - 3} more
                </span>
              {/if}
            </div>
          {/if}
          
          {#if space.bestFor && space.bestFor.length > 0}
            <p class="text-sm text-gray-600">
              <span class="font-medium">Best for:</span> {space.bestFor.join(', ')}
            </p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
  
    <!-- FIXED: Show "View all" button when there are MORE than 5 filtered workspaces -->
    {#if workspaceData.filter(space => space.type === workPreference).length > 5}
      <div class="mt-4 text-center">
        <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View all {workspaceData.filter(space => space.type === workPreference).length} spaces
        </button>
      </div>
    {/if}  
  
{:else if workspaceData.filter(space => space.type === workPreference).length === 0}
  <div class="text-center py-8 text-gray-500">
    <div class="w-12 h-12 mx-auto mb-3 text-gray-400">
      {#if workPreference === 'coworking'}
        💼
      {:else if workPreference === 'cafe'}
        ☕
      {:else if workPreference === 'hostel'}
        🏠
      {:else if workPreference === 'hotel'}
        🏨
      {/if}
    </div>
    <p class="text-gray-600 mb-2">No {workPreference} spaces found</p>
    <p class="text-sm text-gray-500">
      {#if selectedCity}
        No {workPreference} data available for {selectedCity}, {selectedCountry}
      {:else}
        No {workPreference} data available for {selectedCountry}
      {/if}
    </p>
  </div>
{/if}
</div>
