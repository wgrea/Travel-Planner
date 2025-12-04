<!-- src/routes/visa/+page.svelte -->

<!--
📝 Visa Requirements

Aesthetic: Professional Clean Girl
Colors: Stone/neutral (from-stone-50 to-slate-50)
Special Elements:

Checklist aesthetics
Document-style cards
Minimal decoration (this is serious info)


Why: Legal info needs to feel authoritative and clear

-->

<script lang="ts">
  import { goto } from '$app/navigation';
  import { 
    getVisaInfo, 
    checkVisaRequirements, 
    getPassportCountries,
    getVisaCountries
  } from '$lib/utils/visa';
  import { minimalData } from '$lib/data/minimalData';
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  
  // Import components
  import VisaResults from './components/VisaResults.svelte';
  import VisaMatrix from './components/VisaMatrix.svelte';
  import DocumentChecklist from './components/DocumentChecklist.svelte';
  import PassportBanner from './components/PassportBanner.svelte';
  
  // Add currency imports
  import CurrencySelector from '$lib/components/CurrencySelector.svelte';
  import { selectedCurrency } from '$lib/stores/currency';

  // Use $state for reactive variables
  let homeCountry = $state('United States');
  let destinationCountry = $state('Thailand');
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
    destinationCountry = country;
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

<div class="min-h-screen bg-gradient-to-b from-stone-50 to-slate-50 px-4 py-8 md:py-12 relative overflow-hidden">
  <!-- Minimal decorative lines (very subtle) -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-0 left-1/4 right-1/4 h-px bg-stone-200/30"></div>
    <div class="absolute bottom-0 left-1/3 right-1/3 h-px bg-stone-200/30"></div>
    <div class="absolute top-1/3 left-0 right-0 h-px bg-stone-200/20"></div>
  </div>

  <div class="max-w-4xl mx-auto relative z-10">
    <!-- Back Button - Minimalist -->
    <button
      onclick={() => goto('/')}
      class="group mb-8 inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors duration-200"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm">Back to Main Menu</span>
    </button>
    
    <!-- Currency Selector - Simplified -->
    <div class="mb-6">
      <CurrencySelector />
    </div>

    <!-- Title Section - Clean & Minimal -->
    <div class="mb-10 text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 
        border border-stone-200 shadow-sm">
        <svg class="w-7 h-7 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      
      <h1 class="text-4xl md:text-5xl font-light mb-3 text-stone-900 tracking-tight">
        Visa & Entry Requirements
      </h1>
      
      <p class="text-stone-600 text-base font-light tracking-wide max-w-2xl mx-auto">
        Navigate documentation requirements with clarity and precision.
      </p>
    </div>

    <!-- Passport Banner Component - Clean version -->
    <PassportBanner />

    <!-- Before You Start Section - Minimal buttons -->
    <div class="mb-10 text-center">
      <p class="text-stone-500 text-sm font-light mb-4 tracking-wide uppercase letter-spacing-wider">
        Explore First
      </p>
      <div class="flex gap-2 justify-center flex-wrap">
        <button onclick={() => goto('/resonance')} 
          class="px-4 py-2 rounded-lg bg-white border border-stone-200 text-stone-700 
          hover:border-stone-300 hover:bg-stone-50 transition-all duration-200 text-sm font-normal">
          Destination Finder
        </button>
        <button onclick={() => goto('/resonance')} 
          class="px-4 py-2 rounded-lg bg-stone-100 border border-stone-200 text-stone-700 
          hover:border-stone-300 hover:bg-stone-200 transition-all duration-200 text-sm font-normal">
          Find Your Match
        </button>
      </div>
    </div>

    {#if isLoading}
      <div class="text-center py-12">
        <div class="inline-block w-6 h-6 border-2 border-stone-300 border-t-stone-600 rounded-full animate-spin"></div>
        <p class="mt-3 text-stone-500 text-sm font-light">Checking requirements...</p>
      </div>
    {:else}
      <!-- Country Selector Card - Document-style -->
      <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-stone-200 mb-8">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-2 h-8 bg-stone-800 rounded-full"></div>
          <h2 class="text-xl font-medium text-stone-900">
            Check Visa Requirements
          </h2>
        </div>
        
        <!-- Country Selector -->
        <div class="rounded-lg border border-stone-200 bg-white">
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
        <!-- Visa Results - Card style -->
        <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-stone-200 mb-8">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div class="w-2 h-8 bg-stone-800 rounded-full"></div>
              <h2 class="text-xl font-medium text-stone-900">Requirements Summary</h2>
            </div>
            <span class="text-xs text-stone-500 font-light">Legal Information</span>
          </div>
          
          <VisaResults 
            {homeCountry}
            {destinationCountry}
            visaInfo={currentVisaInfo}
            countryData={destinationCountryData}
            {error}
          />
        </div>

        <!-- Visa Matrix - Grid style -->
        <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-stone-200 mb-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-2 h-8 bg-stone-800 rounded-full"></div>
            <h2 class="text-xl font-medium text-stone-900">Visa Fit Matrix</h2>
          </div>
          
          <VisaMatrix 
            visaInfo={currentVisaInfo}
            countryData={destinationCountryData}
          />
        </div>

        <!-- Document Checklist - Minimalist -->
        <div class="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-stone-200 mb-8">
          <div class="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
            <div class="flex items-center gap-3">
              <div class="w-2 h-8 bg-amber-600 rounded-full"></div>
              <h2 class="text-xl font-medium text-stone-900">Document Checklist</h2>
            </div>
            <div class="flex items-center gap-2 text-amber-700 text-sm font-medium">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Start with passport
            </div>
          </div>
          
          <DocumentChecklist 
            visaInfo={currentVisaInfo}
          />
        </div>
      {/if}
    {/if}

    <!-- Next Steps - Clean buttons -->
    <div class="mt-12 text-center">
      <p class="text-stone-500 text-sm font-light mb-5 uppercase tracking-wider">
        Continue Planning
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button onclick={() => goto('/flight-costs')} 
          class="px-5 py-2.5 rounded-lg bg-stone-900 text-white hover:bg-stone-800 
          transition-all duration-200 font-normal text-sm">
          Flight Costs
        </button>
        <button onclick={() => goto('/living-costs')} 
          class="px-5 py-2.5 rounded-lg bg-white border border-stone-300 text-stone-700 
          hover:border-stone-400 hover:bg-stone-50 transition-all duration-200 font-normal text-sm">
          Living Costs
        </button>
        <button onclick={() => goto('/travel-essentials')} 
          class="px-5 py-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 
          hover:border-rose-300 hover:bg-rose-100 transition-all duration-200 font-normal text-sm">
          🎒 Travel Essentials
        </button>
      </div>
    </div>

    <!-- Passport Reminder - Minimal alert -->
    <div class="mt-8 p-4 bg-amber-50/30 rounded-lg border border-amber-200 max-w-md mx-auto">
      <div class="flex items-start gap-2">
        <svg class="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <p class="text-stone-600 text-xs font-light">
          Your passport must be valid for at least 6 months beyond your travel dates. Check expiration before booking.
        </p>
      </div>
    </div>

    <!-- Quick Links - Subtle -->
    <div class="mt-8 text-center">
      <p class="text-stone-400 text-xs mb-3">Recommended Tools</p>
      <div class="flex gap-2 justify-center flex-wrap">
        <button onclick={() => goto('/resonance')} 
          class="px-3 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 
          transition-colors duration-200 text-xs font-light">
          🔍 Find Destinations
        </button>
        <button onclick={() => goto('/travel-essentials')} 
          class="px-3 py-1.5 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 
          transition-colors duration-200 text-xs font-light">
          🎒 Packing Lists
        </button>
      </div>
    </div>
  </div>
</div>
