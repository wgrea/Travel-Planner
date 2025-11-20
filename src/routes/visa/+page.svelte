<!-- src/routes/visa/+page.svelte -->
<!-- Official/Professional Aesthetic -->

<!--
I will not worry about the look for now.
-->

<script lang="ts">
  import { goto } from '$app/navigation';
  import { getVisaInfo, getAvailableCountries, checkVisaRequirements } from '$lib/utils/visa';
  import type { CountryCode } from '$lib/types/visa';
  
  // Import the shared CountrySelector
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import type { CountryData } from '$lib/components/CountrySelector.svelte';

  let homeCountry: string = 'United States';
  let destinationCountry: CountryCode = 'Thailand';
  let selectedRegion: string = '';
  let isLoading = false;
  let error = '';
  
  $: currentVisaInfo = getVisaInfo(destinationCountry);

  // Convert visa countries to CountryData format
  function getVisaCountries(): CountryData[] {
    return getAvailableCountries().map(country => ({
      country: country,
      region: getRegionForCountry(country),
      cities: getCitiesForCountry(country)
    }));
  }

  function getRegionForCountry(country: string): string {
    const regionMap: Record<string, string> = {
      'Thailand': 'Southeast Asia',
      'Portugal': 'Western Europe',
      'Spain': 'Southern Europe',
      'Mexico': 'North America',
      'Brazil': 'South America',
      'Australia': 'Oceania',
      'Japan': 'East Asia',
      'Georgia': 'Eastern Europe',
      'Sri Lanka': 'South Asia',
      'Malaysia': 'Southeast Asia',
      'China': 'East Asia',
      'Indonesia': 'Southeast Asia',
      'Vietnam': 'Southeast Asia',
      'Czech Republic': 'Eastern Europe',
      'Costa Rica': 'Central America',
      'United Kingdom': 'Western Europe',
      'Germany': 'Western Europe',
      'Colombia': 'South America'
    };
    return regionMap[country] || 'Other';
  }

  function getCitiesForCountry(country: string): string[] {
    const cityMap: Record<string, string[]> = {
      'Thailand': ['Bangkok', 'Chiang Mai', 'Phuket'],
      'Portugal': ['Lisbon', 'Porto', 'Faro'],
      'Spain': ['Madrid', 'Barcelona', 'Valencia'],
      'Mexico': ['Mexico City', 'Cancun', 'Guadalajara'],
      'Brazil': ['Rio de Janeiro', 'São Paulo', 'Florianópolis'],
      // Add more as needed
    };
    return cityMap[country] || [];
  }

  function handleCountryChange(country: string) {
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
  
  $: if (homeCountry && destinationCountry) {
    handleCheckVisaRequirements();
  }
</script>

<div class="min-h-screen bg-gradient-to-b from-stone-50 via-neutral-50 to-stone-100 px-4 py-8 md:py-12">
  <div class="max-w-4xl mx-auto">
    <!-- Back Button -->
    <button
      on:click={() => goto('/')}
      class="group mb-8 inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors duration-200"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm tracking-wide">Back to Main Menu</span>
    </button>
    
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

        <!-- 🛂 PASSPORT REMINDER BANNER -->
    <div class="mb-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-6 h-6 mt-0.5">
          <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div>
          <h3 class="text-lg font-medium text-amber-900 mb-2">Passport Check Required</h3>
          <div class="text-amber-800 text-sm space-y-2">
            <p class="font-medium">Before you proceed, ensure you have:</p>
            <ul class="list-disc list-inside space-y-1 ml-2">
              <li>A valid passport (most countries require 6 months validity beyond your travel dates)</li>
              <li>At least 2-4 blank pages for visa stamps</li>
              <li>Your passport is not damaged or tampered with</li>
            </ul>
            <p class="text-amber-700 font-medium mt-3">No passport yet? Allow 8-12 weeks for standard processing.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Before You Start Section -->
    <div class="mb-10 text-center">
      <p class="text-stone-500 text-sm font-light mb-4 tracking-wide">
        Explore destinations before checking requirements
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button on:click={() => goto('/filters')} 
                class="px-5 py-2.5 rounded-full bg-white border border-stone-200 text-stone-700 hover:border-stone-300 hover:shadow-sm transition-all duration-200 text-sm font-medium">
          Destination Finder
        </button>
        <button on:click={() => goto('/resonance')} 
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
      <!-- Main Content Card with CountrySelector -->
      <div class="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-stone-200 mb-6">
        <h2 class="text-2xl font-light mb-8 text-stone-900 pb-4 border-b border-stone-200">
          Check Visa Requirements
        </h2>
        
        <!-- Home Country Selector -->
        <div class="mb-8">
          <label for="home-country" class="block text-sm font-medium mb-2.5 text-stone-700 tracking-wide">
            Passport Country
          </label>
          <select 
            id="home-country"
            bind:value={homeCountry}
            class="w-full max-w-md p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Schengen Area">Schengen Area</option>
            <option value="India">India</option>
          </select>
        </div>

        <!-- Replace the entire Destination Country section with this: -->
        <div class="mb-8">
          <div class="rounded-lg border border-stone-200 bg-white overflow-hidden">
            <CountrySelector 
              selectedCountry={destinationCountry}
              selectedRegion={selectedRegion}
              countryData={getVisaCountries()}
              onCountryChange={handleCountryChange}
              onRegionChange={handleRegionChange}
              showInsights={false}
            />
          </div>
        </div>

        {#if error}
          <div class="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6 text-sm">
            {error}
          </div>
        {/if}

        <!-- Results Display -->
        <div class="space-y-3">
          <h3 class="text-lg font-medium mt-2 mb-5 text-stone-800">
            {homeCountry} → {destinationCountry}
          </h3>
          
          <!-- Visa Ease Index -->
          <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
            <span class="text-sm font-medium text-stone-700">Visa Ease Index</span>
            <span class="text-sm font-semibold text-stone-900">{currentVisaInfo.ease}</span>
          </div>

          <!-- Visa-Free Length -->
          <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
            <span class="text-sm font-medium text-stone-700">Visa-Free Stay Length</span>
            <span class="text-sm font-semibold text-stone-900">{currentVisaInfo.freeLength}</span>
          </div>

          <!-- Income Requirement -->
          <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
            <span class="text-sm font-medium text-stone-700">Income Requirement</span>
            <span class="text-sm font-semibold text-stone-900">{currentVisaInfo.incomeReq}</span>
          </div>

          <!-- Work Policy -->
          <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
            <span class="text-sm font-medium text-stone-700">Work Policy</span>
            <span class="text-sm font-semibold text-stone-900">{currentVisaInfo.workPolicy}</span>
          </div>
        </div>
      </div>

      <!-- Rest of the components remain the same -->
      <!-- Visa Matrix -->
      <div class="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-stone-200 mb-6">
        <h2 class="text-2xl font-light mb-8 text-stone-900 pb-4 border-b border-stone-200">
          Visa Fit Matrix
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {#each [
            { label: 'Visa Type', value: currentVisaInfo.category },
            { label: 'Income Required', value: currentVisaInfo.incomeReq },
            { label: 'Documents', value: 'Passport + Proof of income' },
            { label: 'Emotional Fit', value: 'High' },
            { label: 'Housing', value: 'Easy to find' },
            { label: 'Tax Implications', value: 'Foreign income often exempt' },
            { label: 'Digital Nomad Visa', value: currentVisaInfo.nomadVisa ? 'Available' : 'Not available' }
          ] as item}
            <div class="text-center p-4 rounded-lg bg-stone-50 border border-stone-200">
              <div class="font-medium text-xs mb-2 text-stone-500 uppercase tracking-wider">{item.label}</div>
              <div class="text-stone-900 text-sm font-light">{item.value}</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Document Checklist -->
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
        
        <div class="space-y-3">
          {#each [
            { name: 'Valid Passport (6+ months validity)', priority: 'high', description: 'Most countries require passport valid for 6 months beyond travel dates' },
            { name: 'Passport scan + expiration check', priority: 'medium', description: 'Digital copy for applications' },
            { name: 'Proof of income template', priority: 'medium', description: 'Bank statements, employment letter, or client contracts' },
            { name: 'Health insurance policy', priority: 'medium', description: 'International coverage required for many visas' },
            { name: 'Background check (if needed)', priority: 'low', description: 'Required for long-term stays in some countries' },
            { name: 'Resume + portfolio links', priority: 'low', description: 'For digital nomad visa applications' },
            { name: 'Bank statements (3 months)', priority: 'medium', description: 'Proof of sufficient funds' }
          ] as item, index}
            <div class="flex items-center justify-between p-4 rounded-lg bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors group">
              <div class="flex items-center gap-3">
                {#if item.priority === 'high'}
                  <div class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
                {:else if item.priority === 'medium'}
                  <div class="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full"></div>
                {:else}
                  <div class="flex-shrink-0 w-2 h-2 bg-stone-400 rounded-full"></div>
                {/if}
                <div>
                  <span class="text-sm text-stone-700 font-light block">{item.name}</span>
                  <span class="text-xs text-stone-500 mt-1 block">{item.description}</span>
                </div>
              </div>
              <button class="text-xs bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-full transition-colors font-medium opacity-0 group-hover:opacity-100">
                Prepare
              </button>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Next Steps -->
    <div class="mt-12 text-center">
      <p class="text-stone-500 text-sm font-light mb-5 tracking-wide">
        Continue planning your journey
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button on:click={() => goto('/flight-costs')} 
                class="px-6 py-3 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-all duration-200 font-medium text-sm shadow-sm">
          Flight Costs
        </button>
        <button on:click={() => goto('/living-costs')} 
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