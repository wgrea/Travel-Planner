<!-- src/lib/components/CountrySelector.svelte -->
<script lang="ts">
  import { visaData } from '$lib/data/visaData'; // I wonder why this data file needs to be there while there are other data files
  
  export interface CountryData {
    country: string;
    region: string;
    cities?: string[];
    averagePrice?: number;
    sweetSpot?: string[];
    cheapestMonths?: string[];
  }

    interface Props {
    // Make passport props optional
    selectedPassport?: string;
    selectedDestination?: string;
    // Add flight-specific props
    selectedCountry?: string;
    // Keep other props
    selectedRegion: string;
    countryData: CountryData[];
    onPassportChange?: (country: string) => void;
    onDestinationChange?: (country: string) => void;
    onCountryChange?: (country: string) => void;
    onRegionChange: (region: string) => void;
    showInsights?: boolean;
    variant?: 'default' | 'minimal' | 'flight';
    mode?: 'visa' | 'flight'; // Add mode to distinguish usage
  }
  
  let { 
    selectedPassport = '', 
    selectedDestination = '',
    selectedCountry = '',
    selectedRegion, 
    countryData, 
    onPassportChange = () => {},
    onDestinationChange = () => {},
    onCountryChange = () => {},
    onRegionChange,
    showInsights = true,
    variant = 'default',
    mode = 'visa'
  }: Props = $props();

  // Determine which country to use based on mode
  const effectiveCountry = mode === 'flight' ? selectedCountry : selectedDestination;
  const onEffectiveCountryChange = mode === 'flight' ? onCountryChange : onDestinationChange;

  // Get available passport countries from visaData
  const passportCountries = Object.keys(visaData);
  
  // Helper functions
  function getAllRegions(): string[] {
    const regions = new Set(countryData.map(item => item.region));
    return Array.from(regions).sort();
  }

  function getCountriesByRegion(region: string): CountryData[] {
    return countryData.filter(item => item.region === region);
  }

  let regions = $derived(getAllRegions());
  let filteredDestinations = $derived(
    selectedRegion 
      ? getCountriesByRegion(selectedRegion)
      : countryData
  );

  let selectedDestinationData = $derived(
    countryData.find((item: CountryData) => item.country === selectedDestination)
  );

  // Get visa info for the selected combination
  let visaInfo = $derived(
    visaData[selectedPassport]?.[selectedDestination] || null
  );

  function handleRegionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const newRegion = target.value;
    onRegionChange(newRegion);
    
    if (newRegion) {
      const countriesInRegion = getCountriesByRegion(newRegion);
      if (countriesInRegion.length > 0) {
        onDestinationChange(countriesInRegion[0].country);
      }
    }
  }

  function handleDestinationChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    onDestinationChange(target.value);
  }

  function handlePassportChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    onPassportChange(target.value);
  }
</script>

<div class="text-stone-900 {variant === 'minimal' ? '' : 'bg-white rounded-2xl p-8 border border-stone-200 shadow-sm'}">
  {#if variant === 'default'}
    <h2 class="text-2xl font-light mb-8 text-stone-900 pb-4 border-b border-stone-200">
      Select Your Journey
    </h2>
  {/if}
  
  <!-- Passport Country Selection -->
  <div class="mb-6">
    <label for="passport-select" class="block text-sm font-medium mb-3 text-stone-700 tracking-wide">
      Your Passport Country
    </label>
    <select 
      id="passport-select"
      value={selectedPassport}
      onchange={handlePassportChange}
      class="w-full max-w-md p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
    >
      {#each passportCountries as country}
        <option value={country} class="text-stone-800">{country}</option>
      {/each}
    </select>
  </div>

  <!-- Region Selection -->
  <div class="mb-6">
    <label for="region-select" class="block text-sm font-medium mb-3 text-stone-700 tracking-wide">
      Filter Destination by Region
    </label>
    <select 
      id="region-select"
      value={selectedRegion}
      onchange={handleRegionChange}
      class="w-full max-w-md p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
    >
      <option value="" class="text-stone-500">All Regions</option>
      {#each regions as region}
        <option value={region} class="text-stone-800">{region}</option>
      {/each}
    </select>
  </div>

  <!-- Destination Country Selection -->
  <div class="mb-6">
    <label for="destination-select" class="block text-sm font-medium mb-3 text-stone-700 tracking-wide">
      Select Destination Country
    </label>
    <select 
      id="destination-select"
      value={selectedDestination}
      onchange={handleDestinationChange}
      class="w-full max-w-md p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
    >
      {#each filteredDestinations as country}
        <option value={country.country} class="text-stone-800">{country.country}</option>
      {/each}
    </select>
  </div>

  <!-- Quick Region Buttons -->
  <div class="mb-6">
    <p class="text-xs text-stone-500 mb-3 font-light tracking-wide">Quick region filters:</p>
    <div class="flex flex-wrap gap-2">
      {#each regions as region}
        <button
          type="button"
          onclick={() => {
            onRegionChange(region);
            const countriesInRegion = getCountriesByRegion(region);
            if (countriesInRegion.length > 0) {
              onDestinationChange(countriesInRegion[0].country);
            }
          }}
          class="px-3 py-1.5 bg-white border border-stone-200 hover:border-stone-300 rounded-lg text-stone-700 text-xs font-medium tracking-wide transition-all duration-200 hover:shadow-sm"
        >
          {region}
        </button>
      {/each}
      <button
        type="button"
        onclick={() => {
          onRegionChange('');
          onDestinationChange(countryData[0]?.country || '');
        }}
        class="px-3 py-1.5 bg-stone-50 border border-stone-200 hover:border-stone-300 rounded-lg text-stone-600 text-xs font-medium tracking-wide transition-all duration-200"
      >
        Clear Filter
      </button>
    </div>
  </div>

  <!-- Visa Information -->
  {#if visaInfo && variant === 'default'}
    <div class="mt-8 pt-6 border-t border-stone-200">
      <h3 class="text-lg font-light mb-4 text-stone-900">
        Visa Information for {selectedPassport} → {selectedDestination}
      </h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200">
          <span class="text-sm font-medium text-stone-700 block mb-2">Visa Ease</span>
          <span class="text-sm font-light text-stone-900">{visaInfo.ease}</span>
        </div>
        
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200">
          <span class="text-sm font-medium text-stone-700 block mb-2">Stay Length</span>
          <span class="text-sm font-light text-stone-900">{visaInfo.freeLength}</span>
        </div>
        
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200">
          <span class="text-sm font-medium text-stone-700 block mb-2">Work Policy</span>
          <span class="text-sm font-light text-stone-900">{visaInfo.workPolicy}</span>
        </div>
        
        {#if visaInfo.nomadVisa}
          <div class="p-4 rounded-lg bg-stone-50 border border-stone-200">
            <span class="text-sm font-medium text-stone-700 block mb-2">Digital Nomad Visa</span>
            <span class="text-sm font-light text-stone-900">Available - {visaInfo.incomeReq}</span>
          </div>
        {/if}
      </div>
      
      <div class="mt-4 p-4 rounded-lg bg-stone-50 border border-stone-200">
        <span class="text-sm font-medium text-stone-700 block mb-2">Category</span>
        <span class="text-sm font-light text-stone-900 capitalize">{visaInfo.category}</span>
      </div>
    </div>
  {/if}

  <!-- Country Insights -->
  {#if showInsights && selectedDestinationData && variant === 'default'}
    <div class="space-y-4 mt-8 pt-6 border-t border-stone-200">
      <h3 class="text-lg font-light mb-4 text-stone-900">
        Travel Insights for {selectedDestination}
      </h3>
      
      {#if selectedDestinationData.sweetSpot}
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
          <span class="text-sm font-medium text-stone-700">Best Time to Visit</span>
          <span class="text-sm font-light text-stone-900">{selectedDestinationData.sweetSpot[0]}</span>
        </div>
      {/if}

      {#if selectedDestinationData.cheapestMonths}
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
          <span class="text-sm font-medium text-stone-700">Most Affordable</span>
          <span class="text-sm font-light text-stone-900">{selectedDestinationData.cheapestMonths[0]}</span>
        </div>
      {/if}

      {#if selectedDestinationData.averagePrice}
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
          <span class="text-sm font-medium text-stone-700">Average Flight Price</span>
          <span class="text-sm font-light text-stone-900">${selectedDestinationData.averagePrice}</span>
        </div>
      {/if}

      {#if selectedDestinationData.cities}
        <div class="p-4 rounded-lg bg-stone-50 border border-stone-200">
          <span class="text-sm font-medium text-stone-700 mb-3 block">Popular Cities</span>
          <div class="flex flex-wrap gap-2">
            {#each selectedDestinationData.cities as city}
              <span class="px-2.5 py-1 bg-white border border-stone-200 rounded text-stone-700 text-xs font-light">
                {city}
              </span>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>
