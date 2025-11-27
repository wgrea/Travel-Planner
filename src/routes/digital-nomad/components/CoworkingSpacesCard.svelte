<!-- src/routes/digital-nomad/components/CoworkingSpacesCard.svelte -->
<script lang="ts">
  import type { Workspace } from '$lib/data/nomadData';
  
  export let selectedCountry: string;
  export let selectedCity: string;
  export let workPreference: string;
  export let workspaceData: Workspace[] = [];

  // Add reactive tracking to see when props update
  $: console.log('📊 CoworkingSpacesCard UPDATED - workPreference:', workPreference, 'workspaceData:', workspaceData.length);

  // Force reactivity by tracking all props
  $: reactiveKey = `${selectedCountry}-${selectedCity}-${workPreference}-${workspaceData.length}`;
  $: console.log('🔄 CoworkingSpacesCard FORCED UPDATE:', reactiveKey);

  // Your existing filtering logic (keep this as-is)
  $: filteredWorkspaces = workspaceData.filter(space => {
    // Filter by work preference
    if (workPreference === 'coworking' && space.type !== 'coworking') return false;
    if (workPreference === 'cafe' && space.type !== 'cafe') return false;
    if (workPreference === 'hostel' && space.type !== 'public_space') return false;
    if (workPreference === 'hotel' && space.type !== 'hotel') return false;
    return true;
  });

  // Get workspace statistics
  $: workspaceStats = {
    total: filteredWorkspaces.length,
    coworkingSpaces: filteredWorkspaces.filter(space => space.type === 'coworking').length,
    cafes: filteredWorkspaces.filter(space => space.type === 'cafe').length,
    libraries: filteredWorkspaces.filter(space => space.type === 'library').length,
    hotels: filteredWorkspaces.filter(space => space.type === 'hotel').length,
    averageRating: filteredWorkspaces.length > 0 
      ? (filteredWorkspaces.reduce((sum, space) => sum + space.rating, 0) / filteredWorkspaces.length).toFixed(1)
      : '0.0',
    averageWifiSpeed: filteredWorkspaces.length > 0
      ? Math.round(filteredWorkspaces.reduce((sum, space) => sum + space.wifiSpeed, 0) / filteredWorkspaces.length)
      : 0
  };

  // Get price range for current preference
  $: priceRange = (() => {
    const spacesWithPrices = filteredWorkspaces.filter(space => {
      if (workPreference === 'coworking') return space.monthlyPrice;
      if (workPreference === 'cafe') return space.hourlyRate;
      if (workPreference === 'hotel') return space.hourlyRate;
      return false;
    });

    if (spacesWithPrices.length === 0) return null;

    const prices = spacesWithPrices.map(space => {
      if (workPreference === 'coworking') return space.monthlyPrice!;
      return space.hourlyRate!;
    });

    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
      average: Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length)
    };
  })();

  console.log('📊 Component - workspaceData:', workspaceData.length);
  console.log('📊 Component - filtered data:', filteredWorkspaces?.length || workspaceData.length);

</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">
    {#if workPreference === 'coworking'}
      💼 Coworking Spaces
    {:else if workPreference === 'cafe'}
      ☕ Coffee Shops
    {:else if workPreference === 'hostel'}
      🏠 Hostel Workspaces
    {:else if workPreference === 'hotel'}
      🏨 Hotel Workspaces
    {:else}
      💼 Workspaces
    {/if}
    {#if selectedCity}in {selectedCity}{/if}
  </h3>
  
  {#if filteredWorkspaces.length > 0}
    <!-- Statistics Overview -->
    <div class="grid grid-cols-2 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
      <div class="text-center">
        <div class="text-2xl font-bold text-blue-700">{workspaceStats.total}</div>
        <div class="text-sm text-blue-600">Total Spaces</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold text-blue-700">{workspaceStats.averageRating}</div>
        <div class="text-sm text-blue-600">Avg Rating</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold text-blue-700">{workspaceStats.averageWifiSpeed} Mbps</div>
        <div class="text-sm text-blue-600">Avg WiFi Speed</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold text-blue-700">
          {#if priceRange}
            ${priceRange.average}
          {:else}
            -
          {/if}
        </div>
        <div class="text-sm text-blue-600">
          {#if workPreference === 'coworking'}
            Avg Monthly
          {:else}
            Avg Hourly
          {/if}
        </div>
      </div>
    </div>

    <!-- Price Range -->
    {#if priceRange}
      <div class="mb-6 p-4 bg-gray-50 rounded-lg">
        <h4 class="font-medium text-gray-900 mb-2">Price Range</h4>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-600">Low</span>
          <span class="text-sm text-gray-600">High</span>
        </div>
        <div class="flex justify-between items-center mt-1">
          <span class="font-semibold text-green-600">${priceRange.min}</span>
          <span class="font-semibold text-red-600">${priceRange.max}</span>
        </div>
        <div class="mt-2 text-center text-sm text-gray-600">
          Average: <span class="font-semibold text-blue-600">${priceRange.average}</span>
          {#if workPreference === 'coworking'}
            /month
          {:else}
            /hour
          {/if}
        </div>
      </div>
    {/if}

    <!-- Top Rated Spaces -->
    <div>
      <h4 class="font-medium text-gray-900 mb-3">Top Rated Spaces</h4>
      <div class="space-y-3">
        {#each filteredWorkspaces.slice(0, 3) as space}
          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-medium text-gray-900">{space.name}</span>
                <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {space.type}
                </span>
              </div>
              <div class="flex items-center gap-4 text-sm text-gray-600">
                <span class="flex items-center gap-1">
                  ⭐ {space.rating}
                </span>
                <span class="flex items-center gap-1">
                  📶 {space.wifiSpeed} Mbps
                </span>
                <span class="flex items-center gap-1">
                  🔌 {space.powerOutlets}/5
                </span>
                <span class="flex items-center gap-1">
                  {#if space.noiseLevel <= 2}
                    🔇 Quiet
                  {:else if space.noiseLevel <= 3}
                    🔉 Moderate
                  {:else}
                    🔊 Loud
                  {/if}
                </span>
              </div>
            </div>
            <div class="text-right">
              {#if workPreference === 'coworking' && space.monthlyPrice}
                <div class="font-semibold text-blue-600">${space.monthlyPrice}</div>
                <div class="text-xs text-gray-500">monthly</div>
              {:else if space.hourlyRate}
                <div class="font-semibold text-blue-600">${space.hourlyRate}</div>
                <div class="text-xs text-gray-500">hourly</div>
              {:else}
                <div class="text-sm text-gray-500">Free</div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>

    {#if filteredWorkspaces.length > 3}
      <div class="mt-4 text-center">
        <button class="text-blue-600 hover:text-blue-700 text-sm font-medium">
          + {filteredWorkspaces.length - 3} more spaces available
        </button>
      </div>
    {/if}

  {:else}
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
        {:else}
          💻
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