<!-- src/lib/components/comparison/View.svelte -->
<script lang="ts">
  let { 
    countries = [], 
    mode = 'living-costs' as 'living-costs' | 'nomad' | 'flights' | 'visa' 
  } = $props();
  
  let oneditselection: () => void = () => {};
  let onbacktosingle: () => void = () => {};
  
  function handleEditSelection() {
    oneditselection?.();
  }
  
  function handleBackToSingle() {
    onbacktosingle?.();
  }
  
  const modeTitles = $derived({
    'living-costs': 'Living Costs',
    'nomad': 'Digital Nomad',
    'flights': 'Flight Costs',
    'visa': 'Visa Requirements'
  });
  
  const modeSubtitles = $derived({
    'living-costs': 'Side-by-side cost comparison. Click any country for detailed view.',
    'nomad': 'Compare workspace options and internet quality. Click any country for detailed view.',
    'flights': 'Compare flight prices and routes. Click any country for detailed view.',
    'visa': 'Compare visa requirements and processing times. Click any country for detailed view.'
  });
  
  const modeClasses = $derived({
    'living-costs': {
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      subtitle: 'text-emerald-600',
      bg: 'bg-emerald-600',
      textWhite: 'text-white'
    },
    'nomad': {
      border: 'border-blue-200',
      text: 'text-blue-900',
      subtitle: 'text-blue-600',
      bg: 'bg-blue-600',
      textWhite: 'text-white'
    },
    'flights': {
      border: 'border-purple-200',
      text: 'text-purple-900',
      subtitle: 'text-purple-600',
      bg: 'bg-purple-600',
      textWhite: 'text-white'
    },
    'visa': {
      border: 'border-amber-200',
      text: 'text-amber-900',
      subtitle: 'text-amber-600',
      bg: 'bg-amber-600',
      textWhite: 'text-white'
    }
  });
  
  const config = $derived(modeClasses[mode]);
</script>

<div class="bg-white rounded-xl border p-6 mb-6 {config.border}">
  <div class="flex items-center justify-between mb-4">
    <div>
      <h2 class="text-xl font-semibold mb-1 {config.text}">
        {#if countries.length === 0}
          Compare Countries ({modeTitles[mode]})
        {:else}
          Comparing {countries.length} {countries.length === 1 ? 'Country' : 'Countries'} ({modeTitles[mode]})
        {/if}
      </h2>
      <p class="text-sm mt-1 {config.subtitle}">
        {modeSubtitles[mode]}
      </p>
    </div>
    <div class="flex gap-2">
      {#if countries.length > 0}
        <button
          onclick={handleEditSelection}
          class="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-opacity-90 {config.bg} {config.textWhite}"
          type="button"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Edit Selection
        </button>
      {/if}
      <button
        onclick={handleBackToSingle}
        class="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-sm font-medium"
        type="button"
      >
        Back to Single View
      </button>
    </div>
  </div>
</div>