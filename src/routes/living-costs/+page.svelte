<!-- src/routes/living-costs/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import PageWrapper from '$lib/components/PageWrapper.svelte';
  import SingleCountryView from './components/SingleCountryView.svelte';
  import ComparisonModal from '$lib/components/comparison/Modal.svelte';
  import ComparisonView from './components/ComparisonView.svelte'; // Your living-costs specific one
  import { selectedCurrency } from '$lib/stores/currency';
  
  // State
  let viewMode: 'single' | 'compare' = 'single';
  let comparisonCountries: string[] = [];
  let showComparisonModal = false;
  let currentCurrency = '';
  
  // Mock data for available countries
  const availableCountries = [
    'Thailand', 'Vietnam', 'Portugal', 'Mexico', 'Turkey', 
    'Georgia', 'Argentina', 'Japan', 'Spain', 'Italy'
  ];
  
  // Store subscription
  onMount(() => {
    const unsubscribe = selectedCurrency.subscribe(value => {
      currentCurrency = value;
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
  {#if viewMode === 'single'}
    <SingleCountryView 
      {currentCurrency}
      on:showcomparison={handleShowComparison}
    />
  {:else}
    <!-- Use your living-costs specific ComparisonView -->
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