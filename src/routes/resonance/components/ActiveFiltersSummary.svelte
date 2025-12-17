<!-- src/routes/resonance/components/ActiveFiltersSummary.svelte -->
<script lang="ts">
  export let totalActiveFilters: number;
  export let selectedTags: string[] = [];
  export let activities: string[] = [];
  export let budgetSelected: boolean = false;
  export let climateSelected: boolean = false;
  export let connectedFiltersCount: number = 0;
  export let filtersExpanded: boolean = false;
  export let onToggleExpanded: () => void;
  export let onClearAll: () => void;
</script>

<div class="p-4 border-b border-blue-200/50">
  <div class="flex items-center justify-between">
    <div class="flex-1">
      <h4 class="text-sm font-semibold text-blue-900">Active Filters ({totalActiveFilters})</h4>
      <div class="flex items-center gap-2 mt-1">
        <!-- Filter Count Summary -->
        <div class="text-xs text-blue-700">
          {selectedTags.length} tags • {activities.length} activities • 
          {(budgetSelected ? 1 : 0) + (climateSelected ? 1 : 0)} preferences
        </div>
        
        <!-- Matches Summary -->
        {#if totalActiveFilters > 0}
          <div class="text-xs px-2 py-0.5 rounded-full 
            {connectedFiltersCount === (selectedTags.length + activities.length) ? 'bg-green-100 text-green-700' : 
             connectedFiltersCount > 0 ? 'bg-amber-100 text-amber-700' : 
             'bg-red-100 text-red-700'}">
            {connectedFiltersCount}/{selectedTags.length + activities.length} connected to locations
          </div>
        {/if}
      </div>
    </div>
    
    <div class="flex items-center gap-2">
      <!-- Expand/Collapse Button -->
      <button
        on:click={onToggleExpanded}
        class="text-xs text-blue-600 hover:text-blue-800 font-medium bg-blue-100 hover:bg-blue-200 px-2 py-1 rounded transition-colors flex items-center gap-1"
        title="{filtersExpanded ? 'Collapse filters' : 'Expand filters'}"
      >
        {#if filtersExpanded}
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
          </svg>
          Hide
        {:else}
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
          Show ({totalActiveFilters})
        {/if}
      </button>
      
      <!-- Clear All Button -->
      <button
        on:click={onClearAll}
        class="text-xs text-red-600 hover:text-red-800 font-medium bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
      >
        Clear All
      </button>
    </div>
  </div>
</div>