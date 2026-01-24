<!-- src/routes/living-costs/components/ViewModeToggle.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let viewMode: 'single' | 'compare' = 'single';
  export let comparisonCount = 0;
  
  const dispatch = createEventDispatcher();
  
  function handleSingleClick() {
    dispatch('modechange', { mode: 'single' });
  }
  
  function handleCompareClick() {
    dispatch('modechange', { mode: 'compare' });
  }
</script>

<div class="mb-8 flex justify-center">
  <div class="inline-flex rounded-lg border border-emerald-200 bg-white p-1">
    <button
      class="px-6 py-2 rounded-md text-sm font-medium transition-colors"
      class:bg-emerald-100={viewMode === 'single'}
      class:text-emerald-700={viewMode === 'single'}
      class:text-emerald-600={viewMode !== 'single'}
      onclick={handleSingleClick}
      type="button"
    >
      Single Country
    </button>
    <button
      class="px-6 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
      class:bg-emerald-100={viewMode === 'compare'}
      class:text-emerald-700={viewMode === 'compare'}
      class:text-emerald-600={viewMode !== 'compare'}
      onclick={handleCompareClick}
      type="button"
    >
      Compare Countries
      {#if comparisonCount > 0}
        <span class="bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-full">
          {comparisonCount}
        </span>
      {/if}
    </button>
  </div>
</div>