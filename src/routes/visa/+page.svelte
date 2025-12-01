<!-- src/routes/visa/+page.svelte -->
<!-- 
// Detailed visa requirements
// Specific document checklists  
// Processing times and costs
// Country-by-country comparisons



I also want to add the price it is to apply
-->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { getVisaInfo, checkVisaRequirements, getPassportCountries } from '$lib/utils/visa';
  import { minimalData } from '$lib/data/minimalData';
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import type { CountryData } from '$lib/components/CountrySelector.svelte';
  import type { CountryCode } from '$lib/types/visa';
  
  // Import components
  import VisaResults from './components/VisaResults.svelte';
  import VisaMatrix from './components/VisaMatrix.svelte';
  import DocumentChecklist from './components/DocumentChecklist.svelte';
  import PassportBanner from './components/PassportBanner.svelte';
  import { getVisaCountries } from './utils/visaData';
  
  // Add currency imports
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import { selectedCurrency } from '$lib/stores/currency';

  // Use $state for reactive variables
  let homeCountry = $state('United States');
  let destinationCountry = $state<CountryCode>('Thailand');
  let selectedRegion = $state('');
  let isLoading = $state(false);
  let error = $state('');
  
  // Use $derived for reactive values
  const currentCurrency = $derived($selectedCurrency);
  const currentVisaInfo = $derived(getVisaInfo(homeCountry, destinationCountry));
  const destinationCountryData = $derived(minimalData.countries[destinationCountry.toLowerCase()]);

  // Get available passport countries and country data
  const passportCountries = getPassportCountries();
  const countryData = getVisaCountries();

  function handlePassportChange(country: string) {
    homeCountry = country;
  }

  function handleDestinationChange(country: string) {
    destinationCountry = country as CountryCode;
  }

  function handleRegionChange(region: string) {
    selectedRegion = region;
  }

  async function handleCheckVisaRequirements() {
    isLoading = true;
    error = '';
    try {
      await checkVisaRequirements(homeCountry, destinationCountry);
    } catch (err) {
      error = 'Failed to load visa information';
    } finally {
      isLoading = false;
    }
  }
  
  // Use $effect for side effects
  $effect(() => {
    if (homeCountry && destinationCountry) {
      handleCheckVisaRequirements();
    }
  });
</script>

<div class="min-h-screen bg-gradient-to-b from-stone-50 via-neutral-50 to-stone-100 px-4 py-8 md:py-12">
  <div class="max-w-4xl mx-auto">
    <!-- Back Button - Fixed onclick -->
    <button
      onclick={() => goto('/')}
      class="group mb-8 inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors duration-200"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm tracking-wide">Back to Main Menu</span>
    </button>
    
    <!-- Currency Selector -->
    <CurrencySelector />

    <!-- Title Section -->
    <div class="mb-10 text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 mb-6">
        <svg class="w-8 h-8 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-light mb-3 text-stone-900 tracking-tight">
        Visa & Entry Requirements
      </h1>
      
      <p class="text-stone-600 text-base font-light tracking-wide max-w-2xl mx-auto">
        Navigate documentation requirements and plan your international journey with clarity and confidence.
      </p>
    </div>

    <!-- Passport Banner Component -->
    <PassportBanner />

    <!-- Before You Start Section - Fixed onclick -->
    <div class="mb-10 text-center">
      <p class="text-stone-500 text-sm font-light mb-4 tracking-wide">
        Explore destinations before checking requirements
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button onclick={() => goto('/resonance')} 
                class="px-5 py-2.5 rounded-full bg-white border border-stone-200 text-stone-700 hover:border-stone-300 hover:shadow-sm transition-all duration-200 text-sm font-medium">
          Destination Finder
        </button>
        <button onclick={() => goto('/resonance')} 
                class="px-5 py-2.5 rounded-full bg-white border border-stone-200 text-stone-700 hover:border-stone-300 hover:shadow-sm transition-all duration-200 text-sm font-medium">
          Resonance
        </button>
      </div>
    </div>

    {#if isLoading}
      <div class="text-center py-12">
        <div class="inline-block w-8 h-8 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin"></div>
        <p class="mt-4 text-stone-600 text-sm font-light">Checking visa requirements...</p>
      </div>
    {:else}
      <!-- Country Selector Card -->
      <div class="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-stone-200 mb-6">
        <h2 class="text-2xl font-light mb-8 text-stone-900 pb-4 border-b border-stone-200">
          Check Visa Requirements
        </h2>
        
        <!-- Use the lib CountrySelector component directly -->
        <div class="rounded-lg border border-stone-200 bg-white overflow-hidden">
          <CountrySelector 
            selectedPassport={homeCountry}
            selectedDestination={destinationCountry}
            selectedRegion={selectedRegion}
            {countryData}
            onPassportChange={handlePassportChange}
            onDestinationChange={handleDestinationChange}
            onRegionChange={handleRegionChange}
            showInsights={true}
          />
        </div>
      </div>

      <!-- Results Components -->
      {#if currentVisaInfo}
        <div class="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-stone-200 mb-6">
          <VisaResults 
            {homeCountry}
            {destinationCountry}
            visaInfo={currentVisaInfo}
            countryData={destinationCountryData}
            {error}
          />
        </div>

        <div class="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-stone-200 mb-6">
          <h2 class="text-2xl font-light mb-8 text-stone-900 pb-4 border-b border-stone-200">
            Visa Fit Matrix
          </h2>
          <!-- src/routes/visa/+page.svelte -->
            <!-- Remove selectedCurrency from VisaMatrix too -->
            <VisaMatrix 
              visaInfo={currentVisaInfo}
              countryData={destinationCountryData}
            />
        </div>

        <div class="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-stone-200 mb-6">
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
            <h2 class="text-2xl font-light text-stone-900">
              Document Checklist
            </h2>
            <div class="flex items-center gap-2 text-amber-700 text-sm font-medium">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Start with passport first
            </div>
          </div>
          <DocumentChecklist 
            visaInfo={currentVisaInfo}
          />
        </div>
      {/if}
    {/if}

    <!-- Next Steps - Fixed onclick -->
    <div class="mt-12 text-center">
      <p class="text-stone-500 text-sm font-light mb-5 tracking-wide">
        Continue planning your journey
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button onclick={() => goto('/flight-costs')} 
                class="px-6 py-3 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-all duration-200 font-medium text-sm shadow-sm">
          Flight Costs
        </button>
        <button onclick={() => goto('/living-costs')} 
                class="px-6 py-3 rounded-full bg-white border border-stone-300 text-stone-700 hover:border-stone-400 hover:shadow-sm transition-all duration-200 font-medium text-sm">
          Living Costs
        </button>
      </div>
      
      <!-- Additional Passport Reminder -->
      <div class="mt-8 p-4 bg-stone-50 rounded-lg border border-stone-200 max-w-md mx-auto">
        <p class="text-stone-600 text-xs font-light text-center">
          💡 Remember: Your passport is your key to international travel. 
          Check expiration dates and blank pages before booking flights.
        </p>
      </div>
    </div>
  </div>
</div>