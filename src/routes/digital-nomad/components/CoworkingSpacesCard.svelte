<!-- src/routes/digital-nomad/components/CoworkingSpacesCard.svelte -->
<script lang="ts">
  import type { Workspace, FreeWorkspace } from '$lib/data/nomadData';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import { getBudgetCategory } from '$lib/data/nomadData';

  // Use $props() instead of export let
  let {
    workspaceData = [],
    currency = 'USD',
    selectedCountry,
    selectedCity,
    workPreference
  } = $props();

  // Simple state for showing all
  let showAll = $state(false);

  // Helper functions
  function formatPrice(price: number): string {
    if (!price) return 'Free';
    return formatCurrency(convertCurrency(price, 'USD', currency), currency);
  }

  function getBudgetLabel(category: string): string {
    switch(category) {
      case 'zero_spend': return '🎯 No Spend Today';
      case 'already_paid': return '🏠 Already Paid';
      case 'small_purchase': return '☕ Small Purchase';
      case 'direct_payment': return '💻 Pay for Workspace';
      default: return 'Workspace';
    }
  }

  function getBudgetColor(category: string): string {
    switch(category) {
      case 'zero_spend': return 'bg-green-100 text-green-800 border-green-200';
      case 'already_paid': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'small_purchase': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'direct_payment': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }

  // FIXED: Ensure workspaceData is an array
  const workspaceArray = $derived(Array.isArray(workspaceData) ? workspaceData : []);
  
  // FIXED: These are now regular functions that return arrays, not $derived
  function getFilteredByBudget(): (Workspace | FreeWorkspace)[] {
    if (!workPreference || !workspaceArray.length) return [];
    
    return workspaceArray.filter((space: Workspace | FreeWorkspace) => {
      const budgetCategory = getBudgetCategory(space);
      return budgetCategory === workPreference;
    });
  }

  function getFilteredByCity(): (Workspace | FreeWorkspace)[] {
    const filtered = getFilteredByBudget();
    if (!selectedCity) return filtered;
    
    return filtered.filter((space: Workspace | FreeWorkspace) => {
      if ('city' in space) {
        return space.city === selectedCity;
      }
      return true;
    });
  }

  // FIXED: Convert to arrays for display
  const filteredByCity = $derived(getFilteredByCity());
  const displayedWorkspaces = $derived(showAll ? filteredByCity : filteredByCity.slice(0, 3));

  // Toggle function
  function toggleShowAll() {
    showAll = !showAll;
  }
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">
    {getBudgetLabel(workPreference || '')}
    {#if selectedCity}in {selectedCity}{/if}
  </h3>
  
  <!-- Budget Category Description -->
  <div class="mb-6 p-4 rounded-lg border {getBudgetColor(workPreference || '')}">
    <p class="text-sm font-medium mb-2">
      {#if workPreference === 'zero_spend'}
        🎯 Truly free options - no purchase required
      {:else if workPreference === 'already_paid'}
        🏠 Workspaces included with your accommodation
      {:else if workPreference === 'small_purchase'}
        ☕ Small purchase required (drink/snack)
      {:else if workPreference === 'direct_payment'}
        💻 Dedicated workspaces with day passes
      {/if}
    </p>
    <p class="text-xs opacity-80">
      {#if workPreference === 'already_paid'}
        These are free to use if you're staying at these accommodations
      {:else if workPreference === 'small_purchase'}
        Typically requires buying a coffee or food item
      {/if}
    </p>
  </div>
  
  {#if filteredByCity.length > 0}
    <!-- Statistics - SIMPLIFIED: Only show total count -->
    <div class="mb-6 p-4 bg-gray-50 rounded-lg">
      <div class="text-center">
        <div class="text-2xl font-bold text-gray-700">{filteredByCity.length}</div>
        <div class="text-sm text-gray-600">
          {#if filteredByCity.length === 1}
            Workspace Found
          {:else}
            Workspaces Found
          {/if}
        </div>
      </div>
    </div>

    <!-- Workspaces List -->
    <div class="space-y-3">
      {#each displayedWorkspaces as space (space.name || space.name)}
        <div class="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 
          hover:shadow-sm transition-all duration-200">
          <div class="flex justify-between items-start mb-2">
            <div>
              <div class="font-medium text-gray-900">{space.name}</div>
              <div class="text-sm text-gray-600 flex items-center gap-2">
                {#if 'city' in space}
                  <span>{space.city}</span>
                {/if}
                <span class="text-xs px-2 py-1 rounded-full {getBudgetColor(getBudgetCategory(space))}">
                  {getBudgetLabel(getBudgetCategory(space))}
                </span>
              </div>
            </div>
            
            <!-- Price Display -->
            {#if 'dayPassPrice' in space && space.dayPassPrice && space.dayPassPrice > 0}
              <div class="text-right">
                <div class="font-semibold text-gray-900">{formatPrice(space.dayPassPrice)}</div>
                <div class="text-xs text-gray-500">day pass</div>
              </div>
            {:else if 'cost' in space && space.cost === 'purchase_required'}
              <div class="text-right">
                <div class="font-semibold text-gray-900">Small Purchase</div>
                <div class="text-xs text-gray-500">required</div>
              </div>
            {:else}
              <div class="text-right">
                <div class="font-semibold text-green-600">Free</div>
                {#if getBudgetCategory(space) === 'already_paid'}
                  <div class="text-xs text-blue-600">when staying</div>
                {/if}
              </div>
            {/if}
          </div>
          
          <!-- Type and Amenities -->
          <div class="flex flex-wrap gap-2 mt-3">
            {#if 'type' in space}
              <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                {#if space.type === 'coworking'}
                  💼 Coworking
                {:else if space.type === 'cafe'}
                  ☕ Cafe
                {:else if space.type === 'hostel'}
                  🏠 Hostel
                {:else if space.type === 'hotel'}
                  🏨 Hotel
                {:else if space.type === 'library'}
                  📚 Library
                {:else if space.type === 'public_space'}
                  🏞️ Public Space
                {:else}
                  {space.type}
                {/if}
              </span>
            {/if}
            
            <!-- Show key amenities -->
            {#if 'amenities' in space && space.amenities && space.amenities.length > 0}
              {#each space.amenities.slice(0, 2) as amenity}
                <span class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                  {amenity}
                </span>
              {/each}
            {/if}
          </div>
          
          <!-- Special Notes -->
          {#if getBudgetCategory(space) === 'already_paid' && 'includedWithStay' in space && space.includedWithStay}
            <div class="mt-3 p-2 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200">
              🏠 Workspace included when staying here
            </div>
          {/if}
          
          {#if 'cost' in space && space.cost === 'purchase_required'}
            <div class="mt-3 p-2 bg-yellow-50 text-yellow-700 text-xs rounded border border-yellow-200">
              ⚠️ Small purchase (food/drink) required
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- View More / View Less button -->
    {#if filteredByCity.length > 3}
      <div class="mt-6 text-center">
        <button 
          onclick={toggleShowAll}
          class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 
            transition-colors text-sm font-medium"
        >
          {#if showAll}
            ↑ Show less
          {:else}
            ↓ Show {filteredByCity.length - 3} more options
          {/if}
        </button>
      </div>
    {/if}

  {:else}
    <div class="text-center py-8 text-gray-500">
      <div class="w-12 h-12 mx-auto mb-3 text-gray-400">
        {#if workPreference === 'zero_spend'}
          🎯
        {:else if workPreference === 'already_paid'}
          🏠
        {:else if workPreference === 'small_purchase'}
          ☕
        {:else if workPreference === 'direct_payment'}
          💻
        {:else}
          💼
        {/if}
      </div>
      <p class="text-gray-600 mb-2">
        No {getBudgetLabel(workPreference || '')} options found
      </p>
      <p class="text-sm text-gray-500">
        {#if selectedCity}
          No {workPreference} options in {selectedCity}, {selectedCountry}
        {:else}
          No {workPreference} options in {selectedCountry}
        {/if}
      </p>
    </div>
  {/if}
</div>