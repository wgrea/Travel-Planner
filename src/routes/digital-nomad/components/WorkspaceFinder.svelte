<!-- src/routes/digital-nomad/components/WorkspaceFinder.svelte -->
<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import { getBudgetCategory, filterWorkspacesByBudget } from '$lib/data/nomadData';
  import type { Workspace, FreeWorkspace, NomadData } from '$lib/data/nomadData';
  import { onMount } from 'svelte';
  
  onMount(() => {
    console.log('WorkspaceFinder mounted - this should appear only once');
  });
  
  // Use $props() - ONLY props that come from parent
  let {
    countryData,
    selectedCity = '',
    selectedCountry = '', // ADD THIS
    currency = 'USD'
  } = $props();
  
  // Keep local state
  let workPreference = $state('zero_spend');
  let showAll = $state(false);
  let showAllBudgets = $state(false);

  // Helper functions
  function formatPrice(price: number): string {
    if (!price) return 'Free';
    return formatCurrency(convertCurrency(price, 'USD', currency), currency);
  }

  // Update the getBudgetLabel function
  function getBudgetLabel(category: string): string {
    if (!category) return '📊 All Budgets';
    switch(category) {
      case 'zero_spend': return '🎯 No Spend Today';
      case 'already_paid': return '🏠 Already Paid';
      case 'small_purchase': return '☕ Small Purchase';
      case 'direct_payment': return '💻 Pay for Workspace';
      default: return '📊 All Budgets';
    }
  }

  // ADD THIS FUNCTION IF MISSING
  function getBudgetColor(category: string): string {
    switch(category) {
      case 'zero_spend': return 'bg-green-100 text-green-800 border-green-200';
      case 'already_paid': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'small_purchase': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'direct_payment': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-indigo-100 text-indigo-800 border-indigo-200'; // For "All Budgets"
    }
  }

  // Update the budget options
  const budgetOptions = [
    { 
      value: '', 
      label: 'All Budgets', 
      icon: '📊', 
      description: 'Show all workspace options' 
    },
    { 
      value: 'zero_spend', 
      label: 'No Spend Today', 
      icon: '🎯', 
      description: 'Truly free options, no purchase needed' 
    },
    { 
      value: 'already_paid', 
      label: 'Already Paid', 
      icon: '🏠', 
      description: 'Use workspace at your accommodation' 
    },
    { 
      value: 'small_purchase', 
      label: 'Small Purchase', 
      icon: '☕', 
      description: 'Buy a drink or snack to work' 
    },
    { 
      value: 'direct_payment', 
      label: 'Pay for Workspace', 
      icon: '💻', 
      description: 'Dedicated workspaces with day passes' 
    }
  ];

  // Update the filter logic
  function getFilteredWorkspaces(): (Workspace | FreeWorkspace)[] {
    if (!countryData) return [];
    
    const workspaces = countryData.workspaces || [];
    const freeWorkspaces = countryData.freeWorkspaces || [];

    // If no workPreference selected (or empty string), show all
    if (!workPreference) {
      const allSpaces = [...workspaces, ...freeWorkspaces];
      
      // Filter by city if selected
      if (!selectedCity) return allSpaces;
      
      return allSpaces.filter((space: Workspace | FreeWorkspace) => {
        if ('city' in space) {
          return space.city === selectedCity;
        }
        return true;
      });
    }
    
    // Filter by current workPreference
    const budgetFiltered = filterWorkspacesByBudget(workspaces, freeWorkspaces, workPreference);
    
    // Filter by city if selected
    if (!selectedCity) return budgetFiltered;
    
    return budgetFiltered.filter((space: Workspace | FreeWorkspace) => {
      if ('city' in space) {
        return space.city === selectedCity;
      }
      return true;
    });
  }

  // Create derived values
  const filteredWorkspaces = $derived(getFilteredWorkspaces());
  const displayedWorkspaces = $derived(showAll ? filteredWorkspaces : filteredWorkspaces.slice(0, 3));

  function toggleShowAll() {
    showAll = !showAll;
  }
</script>

<div class="bg-white rounded-2xl border border-gray-200 shadow-sm">
  <!-- Header -->
  <div class="p-6 border-b border-gray-200">
    <h2 class="text-xl font-semibold text-gray-900 mb-2">💰 Workspace Budget Style</h2>
    <p class="text-sm text-gray-600 mb-6">
      Choose based on how much you want to spend <em>today</em>. "Already Paid" shows workspaces included with accommodation you're already paying for.
    </p>
    
    <!-- Budget Selector -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      {#each budgetOptions as option}
        <button
          class={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center text-center ${
            workPreference === option.value 
              ? option.value === 'zero_spend' 
                ? 'bg-green-50 border-green-200 shadow-sm ring-2 ring-green-100' 
                : option.value === 'already_paid'
                ? 'bg-blue-50 border-blue-200 shadow-sm ring-2 ring-blue-100'
                : option.value === 'small_purchase'
                ? 'bg-yellow-50 border-yellow-200 shadow-sm ring-2 ring-yellow-100'
                : 'bg-purple-50 border-purple-200 shadow-sm ring-2 ring-purple-100'
              : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm'
          }`}
          onclick={() => workPreference = option.value} 
          title={option.description}
        >
          <div class="text-xl mb-1">{option.icon}</div>
          <div class="text-gray-900 font-medium text-xs mb-1">{option.label}</div>
          <div class="text-[10px] text-gray-500 leading-tight">{option.description}</div>
        </button>
      {/each}
    </div>
  </div>
  
  <!-- Results Section -->
  <div class="p-6">
    <!-- Selected Category Header -->
    <div class="mb-6">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-semibold text-gray-900">
          {#if showAllBudgets}
            📊 All Workspaces
          {:else}
            {getBudgetLabel(workPreference)}
          {/if}
          {#if selectedCity}in {selectedCity}{/if}
          {#if !selectedCity}in {selectedCountry}{/if}
        </h3>
        {#if filteredWorkspaces.length > 0}
          <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
            {filteredWorkspaces.length} found
          </span>
        {/if}
      </div>
      
      <!-- Budget Category Description -->
      <div class="mb-6 p-4 rounded-lg border {getBudgetColor(showAllBudgets ? 'direct_payment' : workPreference)}">
        <p class="text-sm font-medium mb-2">
          {#if showAllBudgets}
            📊 Showing All Budget Categories
          {:else if workPreference === 'zero_spend'}
            🎯 Truly Free - No Purchase Needed
          {:else if workPreference === 'already_paid'}
            🏠 Workspace at Your Accommodation
          {:else if workPreference === 'small_purchase'}
            ☕ Small Purchase Required
          {:else if workPreference === 'direct_payment'}
            💻 Pay for Dedicated Workspace
          {/if}
        </p>
        
        {#if showAllBudgets}
          <p class="text-xs opacity-80">
            Showing all workspace types across all budget categories
          </p>
        {:else if workPreference === 'already_paid'}
          <!-- Special info box for accommodation workspaces -->
          <div class="mt-2 p-2 bg-blue-50 text-blue-800 text-xs rounded border border-blue-300">
            <div class="flex items-start gap-1">
              <span class="mt-0.5">ℹ️</span>
              <div>
                <p class="font-medium">How this works:</p>
                <ul class="mt-1 space-y-1">
                  <li>• <span class="font-bold">Free</span> when you stay at these places</li>
                  <li>• <span class="font-bold">Day passes</span> available if not staying</li>
                  <li>• Perfect for <span class="font-bold">budget travelers</span></li>
                </ul>
              </div>
            </div>
          </div>
        {:else}
          <p class="text-xs opacity-80">
            {#if workPreference === 'small_purchase'}
              Typically buy a drink or snack (prices shown)
            {:else if workPreference === 'direct_payment'}
              Day passes or memberships (prices shown)
            {:else if workPreference === 'zero_spend'}
              Public spaces with no purchase required
            {/if}
          </p>
        {/if}
      </div>
    </div>
    
    <!-- Workspaces List -->
    {#if filteredWorkspaces.length > 0}
      <div class="space-y-3">
        {#each displayedWorkspaces as space (space.name)}
          <div class="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 
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
      {#if filteredWorkspaces.length > 3}
        <div class="mt-6 text-center">
          <button 
            onclick={toggleShowAll}
            class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 
              transition-colors text-sm font-medium"
          >
            {#if showAll}
              ↑ Show less
            {:else}
              ↓ Show {filteredWorkspaces.length - 3} more options
            {/if}
          </button>
        </div>
      {/if}

    {:else}
      <!-- No results message -->
      <div class="text-center py-8 text-gray-500">
        <div class="w-12 h-12 mx-auto mb-3 text-gray-400">
          {#if showAllBudgets}
            📊
          {:else if workPreference === 'zero_spend'}
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
          No workspace options found
        </p>
        <p class="text-sm text-gray-500">
          {#if selectedCity}
            No workspace options in {selectedCity}
          {:else}
            No workspace options available
          {/if}
        </p>
      </div>
    {/if}
  </div>
</div>