<!-- src/routes/digital-nomad/components/CoworkingSpacesCard.svelte -->
<script lang="ts">
  import type { Workspace, FreeWorkspace } from '$lib/data/nomadData';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';

  // Use $props() instead of export let
  let {
    workspaceData = [],
    freeWorkspaceData = [],
    currency = 'USD',
    selectedCountry,
    selectedCity,
    workPreference
  } = $props();

  // Simple state for showing all
  let showAll = $state(false);

  // Helper function
  function formatPrice(price: number): string {
    if (!price) return 'Free';
    return formatCurrency(convertCurrency(price, 'USD', currency), currency);
  }

  // SIMPLE FILTERING - no circular dependencies
  function getFilteredWorkspaces() {
    // For libraries and free spots, use freeWorkspaceData
    if (workPreference === 'library' || workPreference === 'free') {
      return freeWorkspaceData.filter((space: FreeWorkspace) => {
        if (workPreference === 'library') return space.type === 'library';
        if (workPreference === 'free') return space.cost === 'free';
        return true;
      });
    }
    
    // For paid options, use workspaceData
    return workspaceData.filter((space: Workspace) => {
      if (workPreference === 'coworking') return space.type === 'coworking';
      if (workPreference === 'cafe') return space.type === 'cafe';
      if (workPreference === 'hostel') return space.type === 'public_space';
      if (workPreference === 'hotel') return space.type === 'hotel';
      return true;
    });
  }

  // Use derived values for display
  const filteredWorkspaces = $derived(getFilteredWorkspaces());
  const displayedWorkspaces = $derived(showAll ? filteredWorkspaces : filteredWorkspaces.slice(0, 3));

  // Toggle function
  function toggleShowAll() {
    showAll = !showAll;
  }
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">
    {#if workPreference === 'coworking'}
      💼 Coworking Spaces
    {:else if workPreference === 'cafe'}
      ☕ Coffee Shops
    {:else if workPreference === 'library'}
      📚 Public Libraries
    {:else if workPreference === 'free'}
      🎯 Free Public Spots
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
    <!-- Statistics (only for paid workspaces) -->
    {#if workPreference !== 'library' && workPreference !== 'free'}
      <div class="grid grid-cols-2 gap-4 mb-6 p-4 bg-blue-50 rounded-lg">
        <div class="text-center">
          <div class="text-2xl font-bold text-blue-700">{filteredWorkspaces.length}</div>
          <div class="text-sm text-blue-600">Total Spaces</div>
        </div>
        <div class="text-center">
          <div class="text-2xl font-bold text-blue-700">
            {#if filteredWorkspaces[0]?.rating}
              {(filteredWorkspaces.reduce((sum, space) => sum + (space.rating || 0), 0) / filteredWorkspaces.length).toFixed(1)}
            {:else}
              N/A
            {/if}
          </div>
          <div class="text-sm text-blue-600">Avg Rating</div>
        </div>
      </div>
    {/if}

    <!-- Workspaces List -->
    <div class="space-y-3">
      {#each displayedWorkspaces as space (space.name || space.name)}
        <div class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <!-- Your workspace display code here -->
          <div class="font-medium text-gray-900">{space.name}</div>
          <div class="text-sm text-gray-600">{space.city}</div>
          <!-- Add your badge display here -->
        </div>
      {/each}
    </div>

    <!-- View More / View Less button -->
    {#if filteredWorkspaces.length > 3}
      <div class="mt-4 text-center">
        <button 
          onclick={toggleShowAll}
          class="text-blue-600 hover:text-blue-700 text-sm font-medium px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
        >
          {#if showAll}
            ↑ Show less
          {:else}
            + {filteredWorkspaces.length - 3} more spaces available
          {/if}
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
        {:else if workPreference === 'library'}
          📚
        {:else if workPreference === 'free'}
          🎯
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
