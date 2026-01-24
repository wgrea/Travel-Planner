<!-- src/lib/components/comparison/SelectedCountries.svelte -->
<script lang="ts">
  let { 
    countries = [],
    mode = 'living-costs' as 'living-costs' | 'nomad' | 'flights' | 'visa',
    onremovecountry = () => {}
  } = $props();
  
  const modeColors = $derived({
    'living-costs': {
      bg: 'bg-emerald-100',
      text: 'text-emerald-800',
      border: 'border-emerald-200',
      hover: 'hover:bg-emerald-200'
    },
    'nomad': {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      border: 'border-blue-200',
      hover: 'hover:bg-blue-200'
    },
    'flights': {
      bg: 'bg-purple-100',
      text: 'text-purple-800',
      border: 'border-purple-200',
      hover: 'hover:bg-purple-200'
    },
    'visa': {
      bg: 'bg-amber-100',
      text: 'text-amber-800',
      border: 'border-amber-200',
      hover: 'hover:bg-amber-200'
    }
  });
  
  const colors = $derived(modeColors[mode]);
</script>

{#if countries.length > 0}
  <div class="flex flex-wrap gap-2 mb-4">
    <span class="text-sm text-gray-600 self-center mr-2">Selected:</span>
    {#each countries as country}
      <div class="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 {colors.bg} {colors.text} {colors.border} border">
        {country}
        <button
          onclick={() => onremovecountry({ detail: { country } })}
          class="ml-1 text-current hover:opacity-70"
          aria-label={`Remove ${country}`}
          type="button"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    {/each}
  </div>
{/if}