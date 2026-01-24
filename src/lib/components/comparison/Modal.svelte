<!-- src/lib/components/comparison/Modal.svelte -->
<script lang="ts">
  let { 
    isOpen = $bindable(false),
    selectedCountries = $bindable([]),
    mode = 'living-costs' as 'living-costs' | 'nomad' | 'flights' | 'visa',
    allCountries = [] as string[],
    onselected = () => {}
  } = $props();
  
  function toggleCountry(country: string) {
    if (selectedCountries.includes(country)) {
      selectedCountries = selectedCountries.filter(c => c !== country);
    } else {
      if (selectedCountries.length < 4) {
        selectedCountries = [...selectedCountries, country];
      }
    }
  }
  
  function handleSelect() {
    onselected({ detail: { countries: selectedCountries } });
    isOpen = false;
  }
  
  function handleClose() {
    isOpen = false;
  }
  
  // Mode-specific titles
  const modeTitles = $derived({
    'living-costs': 'Compare Living Costs',
    'nomad': 'Compare Workspace Options',
    'flights': 'Compare Flight Prices',
    'visa': 'Compare Visa Requirements'
  });
  
  // Mode-specific colors
  const modeColors = $derived({
    'living-costs': {
      border: 'border-emerald-200',
      bg: 'bg-emerald-600',
      text: 'text-emerald-900',
      hover: 'hover:bg-emerald-50',
      borderSelected: 'border-emerald-500',
      textSelected: 'text-emerald-500'
    },
    'nomad': {
      border: 'border-blue-200',
      bg: 'bg-blue-600',
      text: 'text-blue-900',
      hover: 'hover:bg-blue-50',
      borderSelected: 'border-blue-500',
      textSelected: 'text-blue-500'
    },
    'flights': {
      border: 'border-purple-200',
      bg: 'bg-purple-600',
      text: 'text-purple-900',
      hover: 'hover:bg-purple-50',
      borderSelected: 'border-purple-500',
      textSelected: 'text-purple-500'
    },
    'visa': {
      border: 'border-amber-200',
      bg: 'bg-amber-600',
      text: 'text-amber-900',
      hover: 'hover:bg-amber-50',
      borderSelected: 'border-amber-500',
      textSelected: 'text-amber-500'
    }
  });
  
  const colors = $derived(modeColors[mode]);
</script>

{#if isOpen}
<div class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
  <div class="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
    <!-- Header -->
    <div class="px-6 py-4 border-b {colors.border}">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold {colors.text}">{modeTitles[mode]}</h3>
        <button
          onclick={handleClose}
          class="text-gray-400 hover:text-gray-500"
          aria-label="Close modal"
          type="button"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <p class="text-sm text-gray-600 mt-1">
        Select up to 4 countries to compare
      </p>
    </div>
    
    <!-- Country Selection Area -->
    <div class="flex-1 overflow-y-auto p-6">
      {#if allCountries.length === 0}
        <div class="text-center py-8 text-gray-500">
          Loading countries...
        </div>
      {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {#each allCountries as country}
          <button
            onclick={() => toggleCountry(country)}
            class="p-4 rounded-lg border text-left {colors.hover} transition-colors flex items-center justify-between"
            class:border-2={selectedCountries.includes(country)}
            class:border-gray-200={!selectedCountries.includes(country)}
            class:{colors.borderSelected}={selectedCountries.includes(country)}
            type="button"
          >
            <span class="font-medium">{country}</span>
            {#if selectedCountries.includes(country)}
              <svg class="w-5 h-5 {colors.textSelected}" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            {/if}
          </button>
          {/each}
        </div>
      {/if}
    </div>
    
    <!-- Footer -->
    <div class="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
      <div class="text-sm text-gray-600">
        {selectedCountries.length} {selectedCountries.length === 1 ? 'country' : 'countries'} selected
      </div>
      <div class="flex gap-3">
        <button
          onclick={handleClose}
          class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          type="button"
        >
          Cancel
        </button>
        <button
          onclick={handleSelect}
          disabled={selectedCountries.length === 0}
          class="px-4 py-2 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed {colors.bg}"
          type="button"
        >
          Compare Selected
        </button>
      </div>
    </div>
  </div>
</div>
{/if}