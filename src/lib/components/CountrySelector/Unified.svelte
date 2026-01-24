<script lang="ts">
  import type { CountrySelectorProps, CountryOption } from './types';
  import { getModeConfig, formatCountryOption, getUniqueSortedRegions } from './utils';
  
  const props = $props<CountrySelectorProps>();
  
  // Destructure with defaults
  const {
    mode = 'destination',
    variant = 'default',
    selectedCountry = '',
    selectedRegion = '',
    selectedCity = '',
    originCountry = 'United States',
    selectedPassport = '',
    countries: customCountries = [],
    showStats = true,
    showQuickFilters = true,
    autoSelectFirst = true,
    placeholder = 'Select a country...',
    label,
    disabled = false,
    loading = false,
    onCountryChange = () => {},
    onRegionChange = () => {},
    onCityChange = () => {},
    onPassportChange = () => {}
  } = props;
  
  // Reactive state
  const internalSelectedCity = $state(selectedCity);
  const currentSelectedCountry = $state(selectedCountry);
  const currentSelectedRegion = $state(selectedRegion);
  
  // Get configuration for current mode
  const config = getModeConfig(mode);
  
  // Get countries - use provided or default to empty
  const countries = customCountries;
  
  // Get regions from countries
  const regions = $derived(['All Regions', ...getUniqueSortedRegions(countries)]);
  
  // Filter countries by selected region
  const filteredCountries = $derived(
    currentSelectedRegion && currentSelectedRegion !== 'All Regions'
      ? countries.filter((c: CountryOption) => c.region === currentSelectedRegion)
      : countries
  );
  
  // Get current country data
  const currentCountry = $derived(
    countries.find((c: CountryOption) => c.id === currentSelectedCountry || c.name === currentSelectedCountry)
  );
  
  // Available cities for current country
  const availableCities = $derived(currentCountry?.cities || []);
  
  // Handle region change
  function handleRegionChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const region = target.value;
    
    currentSelectedRegion = region;
    if (onRegionChange) onRegionChange(region);
    
    // Auto-select first country if enabled
    if (autoSelectFirst && filteredCountries.length > 0) {
      const firstCountry = filteredCountries[0];
      handleCountrySelect(firstCountry.id);
    }
  }
  
  // Handle country select
  function handleCountrySelect(countryId: string) {
    currentSelectedCountry = countryId;
    
    if (onCountryChange) {
      const countryData = countries.find((c: CountryOption) => c.id === countryId);
      onCountryChange(countryId, countryData);
    }
    
    // Reset city
    internalSelectedCity = '';
    if (onCityChange) onCityChange('');
  }
  
  // Handle city select
  function handleCitySelect(city: string) {
    internalSelectedCity = city;
    if (onCityChange) onCityChange(city);
  }
  
  // Handle passport select
  function handlePassportSelect(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (onPassportChange) onPassportChange(target.value);
  }
  
  // Update when props change
  $effect(() => {
    currentSelectedCountry = selectedCountry;
  });
  
  $effect(() => {
    currentSelectedRegion = selectedRegion;
  });
  
  $effect(() => {
    internalSelectedCity = selectedCity;
  });
</script>

<!-- Main Container -->
<div class="unified-country-selector">
  <!-- Loading State -->
  {#if loading}
    <div class="flex flex-col items-center p-10 text-gray-500">
      <div class="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-3"></div>
      <p>Loading countries...</p>
    </div>
  
  {:else if countries.length === 0}
    <div class="text-center p-6 text-gray-500 italic">
      <p>No countries available</p>
    </div>
  
  {:else}
    <!-- Header -->
    {#if variant !== 'minimal' && variant !== 'inline'}
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-1">{label || config.title}</h3>
        {#if config.description}
          <p class="text-sm text-gray-600">{config.description}</p>
        {/if}
      </div>
    {/if}
    
    <!-- Visa Passport Selector -->
    {#if mode === 'visa' && variant !== 'minimal'}
      <div class="mb-4">
        <label for="passport-select" class="block text-sm font-medium text-gray-700 mb-1">
          Your Passport Country
        </label>
        <select 
          id="passport-select"
          value={selectedPassport}
          onchange={handlePassportSelect}
          class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select your passport...</option>
          {#each countries as country (country.id)}
            <option value={country.id}>{country.name}</option>
          {/each}
        </select>
      </div>
    {/if}
    
    <!-- Region Filter -->
    {#if variant !== 'inline' && regions.length > 1}
      <div class="mb-4">
        <label for="region-select" class="block text-sm font-medium text-gray-700 mb-1">
          Filter by Region
        </label>
        <select 
          id="region-select"
          value={currentSelectedRegion}
          onchange={handleRegionChange}
          class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {#each regions as region (region)}
            <option value={region}>{region}</option>
          {/each}
        </select>
      </div>
    {/if}
    
    <!-- Country Selector -->
    <div class="mb-4">
      {#if variant !== 'inline'}
        <label for="country-select" class="block text-sm font-medium text-gray-700 mb-1">
          {config.countryLabel}
        </label>
      {/if}
      
      <select 
        id="country-select"
        value={currentSelectedCountry}
        onchange={() => handleCountrySelect(currentSelectedCountry)}
        disabled={disabled}
        class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <option value="">{placeholder}</option>
        {#each filteredCountries as country (country.id)}
          <option value={country.id}>
            {formatCountryOption(country, mode)}
          </option>
        {/each}
      </select>
    </div>
    
    <!-- City Selector -->
    {#if (mode === 'digital-nomad' || mode === 'transportation' || mode === 'living-costs') 
        && availableCities.length > 0 
        && variant !== 'inline'}
      <div class="mb-6">
        <label for="city-select" class="block text-sm font-medium text-gray-700 mb-1">
          City (Optional)
        </label>
        <select 
          id="city-select"
          value={internalSelectedCity}
          onchange={() => handleCitySelect(internalSelectedCity)}
          class="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All cities (average)</option>
          {#each availableCities as city (city)}
            <option value={city}>{city}</option>
          {/each}
        </select>
      </div>
    {/if}
    
    <!-- Stats Panel -->
    {#if showStats && currentSelectedCountry && variant !== 'minimal' && variant !== 'inline'}
      <div class="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-sm font-semibold text-blue-800">Selected Location</h4>
          <span class="text-lg">{config.icon}</span>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="space-y-1">
            <div class="text-xs text-gray-600 uppercase tracking-wide">Country</div>
            <div class="font-medium text-gray-900">{currentCountry?.name}</div>
          </div>
          
          {#if currentCountry?.region}
            <div class="space-y-1">
              <div class="text-xs text-gray-600 uppercase tracking-wide">Region</div>
              <div class="font-medium text-gray-900">{currentCountry.region}</div>
            </div>
          {/if}
          
          {#if internalSelectedCity}
            <div class="space-y-1">
              <div class="text-xs text-gray-600 uppercase tracking-wide">City</div>
              <div class="font-medium text-gray-900">{internalSelectedCity}</div>
            </div>
          {/if}
          
          {#if mode === 'origin' && originCountry}
            <div class="space-y-1">
              <div class="text-xs text-gray-600 uppercase tracking-wide">Departure</div>
              <div class="font-medium text-gray-900">{originCountry}</div>
            </div>
          {/if}
          
          <!-- Mode-specific stats -->
          {#if mode === 'digital-nomad' && currentCountry?.nomadScore}
            <div class="space-y-1">
              <div class="text-xs text-gray-600 uppercase tracking-wide">Nomad Score</div>
              <div class="font-medium text-gray-900">
                {currentCountry.nomadScore}/10
              </div>
            </div>
          {/if}
          
          {#if mode === 'living-costs' && currentCountry?.averagePrice}
            <div class="space-y-1">
              <div class="text-xs text-gray-600 uppercase tracking-wide">Avg. Monthly Cost</div>
              <div class="font-medium text-gray-900">
                ${currentCountry.averagePrice.toLocaleString()}
              </div>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  {/if}
</div>

<!-- Variant-specific styling -->
{#if variant === 'default'}
  <style>
    .unified-country-selector {
      @apply bg-white rounded-xl p-6 border border-gray-200 shadow-sm;
    }
  </style>
{:else if variant === 'minimal'}
  <style>
    .unified-country-selector {
      @apply bg-transparent p-0 border-0 shadow-none;
    }
  </style>
{:else if variant === 'card'}
  <style>
    .unified-country-selector {
      @apply bg-gray-50 rounded-lg p-4 border border-gray-200;
    }
  </style>
{/if}