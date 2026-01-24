<!-- src/lib/components/comparison/Grid.svelte -->
<script lang="ts">
  let { 
    countries = [] as string[], 
    mode = 'living-costs' as 'living-costs' | 'nomad' | 'flights' | 'visa',
    children,
    // Use any type to avoid TypeScript errors
    oncountryclick = (() => {}) as any,
    oneditselection = (() => {}) as any,
    onbacktosingle = (() => {}) as any
  } = $props();
  
  const emptyMessages = $derived({
    'living-costs': 'Select countries to compare living costs',
    'nomad': 'Select countries to compare workspace options',
    'flights': 'Select countries to compare flight prices',
    'visa': 'Select countries to compare visa requirements'
  });
  
  const modeColors = $derived({
    'living-costs': 'border-emerald-200',
    'nomad': 'border-blue-200',
    'flights': 'border-purple-200',
    'visa': 'border-amber-200'
  });
</script>

<div class="comparison-grid">
  <!-- Empty state -->
  {#if countries.length === 0}
    <div class="bg-white rounded-xl border p-8 text-center {modeColors[mode]}">
      <div class="mx-auto w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4">
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">No countries selected</h3>
      <p class="text-gray-600 max-w-md mx-auto">
        {emptyMessages[mode]}
      </p>
      <button
        onclick={() => oneditselection()}
        class="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm font-medium"
        type="button"
      >
        Select Countries to Compare
      </button>
    </div>
  {:else}
    <!-- Render the content provided by the parent -->
    {@render children({ 
      countries, 
      mode, 
      oncountryclick: (country: string) => oncountryclick({ detail: { country } })
    })}
  {/if}
</div>