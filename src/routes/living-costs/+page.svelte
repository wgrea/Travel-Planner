<!-- src/routes/living-costs/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import PageWrapper from '$lib/components/PageWrapper.svelte';
  import SingleCountryView from './components/SingleCountryView.svelte';
  import ComparisonModal from '$lib/components/comparison/Modal.svelte';
  import ComparisonView from './components/ComparisonView.svelte';
  import { selectedCurrency } from '$lib/stores/currency';
  
  // State - USE $state for reactive variables
  let viewMode = $state<'single' | 'compare'>('single');
  let comparisonCountries = $state<string[]>([]);
  let showComparisonModal = $state(false);
  let currentCurrency = $state('');
  let seasonalPricing = $state<'low' | 'sweet' | 'peak'>('sweet');
  
  // Mock data for available countries
  const availableCountries = [
    'Thailand', 'Vietnam', 'Portugal', 'Mexico', 'Turkey', 
    'Georgia', 'Argentina', 'Japan', 'Spain', 'Italy'
  ];
  
  // Store subscription
  onMount(() => {
    const unsubscribe = selectedCurrency.subscribe(value => {
      currentCurrency = value; // This works because currentCurrency is $state
    });
    return unsubscribe;
  });
  
  // Event handlers
  function handleComparisonSelected(event: { detail: { countries: string[] } }) {
    comparisonCountries = event.detail.countries;
    viewMode = 'compare';
  }
  
  function handleCountryClick(event: { detail: { country: string } }) {
    // Switch to single view with this country
    console.log('Switching to:', event.detail.country);
    viewMode = 'single';
  }
  
  function handleEditSelection() {
    showComparisonModal = true;
  }
  
  function handleBackToSingle() {
    viewMode = 'single';
  }
  
  function handleRemoveCountry(event: { detail: { country: string } }) {
    comparisonCountries = comparisonCountries.filter(c => c !== event.detail.country);
  }
  
  function handleShowComparison() {
    showComparisonModal = true;
  }
</script>

<PageWrapper
  title="Living Costs Calculator"
  subtitle="Precise budgeting with clean data visualization and detailed breakdowns"
  mode="living-costs"
>
  <!-- NEW: Seasonal Pricing Tabs - MOVE ABOVE everything -->
  <div class="mb-8 flex bg-white rounded-xl border border-gray-200 p-1">
    <button
      class={`px-6 py-3 rounded-lg font-medium flex-1 transition-all ${
        seasonalPricing === 'low' 
          ? 'bg-emerald-500 text-white shadow-sm' 
          : 'hover:bg-gray-50 text-gray-700'
      }`}
      onclick={() => seasonalPricing = 'low'}
    >
      🌡️ Low Season
    </button>
    <button
      class={`px-6 py-3 rounded-lg font-medium flex-1 transition-all ${
        seasonalPricing === 'sweet' 
          ? 'bg-amber-500 text-white shadow-sm' 
          : 'hover:bg-gray-50 text-gray-700'
      }`}
      onclick={() => seasonalPricing = 'sweet'}
    >
      ⭐ Sweet Spot
    </button>
    <button
      class={`px-6 py-3 rounded-lg font-medium flex-1 transition-all ${
        seasonalPricing === 'peak' 
          ? 'bg-red-500 text-white shadow-sm' 
          : 'hover:bg-gray-50 text-gray-700'
      }`}
      onclick={() => seasonalPricing = 'peak'}
    >
      🔥 Peak Season
    </button>
  </div>

  {#if viewMode === 'single'}
    <SingleCountryView 
      {currentCurrency}
      {seasonalPricing}
      on:showcomparison={handleShowComparison}
    />
  {:else}
    <ComparisonView
      countries={comparisonCountries}
      on:countryclick={handleCountryClick}
      on:editselection={handleEditSelection}
      on:backtosingle={handleBackToSingle}
      on:removecountry={handleRemoveCountry}
    />
  {/if}
</PageWrapper>

<ComparisonModal
  bind:isOpen={showComparisonModal}
  bind:selectedCountries={comparisonCountries}
  allCountries={availableCountries}
  mode="living-costs"
  onselected={handleComparisonSelected}
/>