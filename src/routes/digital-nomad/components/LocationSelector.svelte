<!-- src/routes/digital-nomad/components/LocationSelector.svelte -->
<script lang="ts">
  import { nomadData } from '$lib/data/nomadData';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';

  // Use $props() instead of export let
  let {
    currency = 'USD',
    selectedCountry,
    selectedCity
  } = $props();

  function formatPrice(price: number): string {
    return formatCurrency(convertCurrency(price, 'USD', currency), currency);
  }
  
  // Get cities from nomadData
  const availableCities = $derived(
    selectedCountry 
      ? (nomadData.find(country => country.country === selectedCountry)?.cities || [])
      : []
  );
  
  // Get city details from nomadData
  function getCityDetails(city: string, country: string) {
    const countryData = nomadData.find(c => c.country === country);
    if (!countryData) {
      return {
        digitalNomadScore: 7,
        costOfLiving: {
          accommodation: { midrange: 800 },
          dailyLiving: { midrange: 30 }
        },
        hasCoworkingSpaces: true,
        isPopular: true,
        vibe: ['Friendly', 'Affordable']
      };
    }
    
    return {
      digitalNomadScore: countryData.community?.expatSize || 7,
      costOfLiving: {
        accommodation: { midrange: countryData.costs?.coworkingMonthly || 800 },
        dailyLiving: { midrange: countryData.costs?.coffeeShopWork || 30 }
      },
      hasCoworkingSpaces: (countryData.workspaces?.length || 0) > 0,
      isPopular: true,
      vibe: ['Friendly', 'Affordable']
    };
  }
  
  const cityDetails = $derived(
    selectedCountry && selectedCity ? getCityDetails(selectedCity, selectedCountry) : null
  );
  
  // Auto-select first city when country changes
  $effect(() => {
    if (selectedCountry && availableCities.length > 0 && !availableCities.includes(selectedCity)) {
      selectedCity = availableCities[0];
    }
  });
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label for="city-select" class="block text-gray-700 text-sm font-medium mb-2">Select City</label>
    <select 
      id="city-select"
      bind:value={selectedCity} 
      class="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:bg-gray-100 disabled:text-gray-500"
      disabled={!selectedCountry || availableCities.length === 0}
    >
      <option value="">Select a city</option>
      {#each availableCities as city}
        <option value={city}>{city}</option>
      {/each}
    </select>
  </div>
  
  <!-- Enhanced LocationSelector for digital nomad page -->
  <!-- City Info Card section -->
  {#if selectedCountry && selectedCity && cityDetails}
    <div class="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
      <div class="flex-1">
        <div class="text-blue-800 font-medium">Exploring {selectedCity}</div>
        <div class="text-blue-600 text-sm">
          Digital Nomad Score: {cityDetails.digitalNomadScore}/10 • 
          Monthly Cost: ~{formatPrice(cityDetails.costOfLiving.accommodation.midrange + (cityDetails.costOfLiving.dailyLiving.midrange * 30))}
        </div>
        <div class="flex gap-2 mt-1">
          {#if cityDetails.hasCoworkingSpaces}
            <span class="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">Coworking Spaces</span>
          {/if}
          {#if cityDetails.isPopular}
            <span class="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full">Popular Spot</span>
          {/if}
          {#each cityDetails.vibe.slice(0, 2) as vibe}
            <span class="px-2 py-0.5 bg-orange-100 text-orange-800 text-xs rounded-full">{vibe}</span>
          {/each}
        </div>
      </div>
    </div>
  {:else if selectedCountry && selectedCity}
    <div class="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div class="text-center">
        <div class="text-gray-800 font-medium">Exploring {selectedCity}</div>
        <div class="text-gray-600 text-sm">Digital nomad hotspot in {selectedCountry}</div>
      </div>
    </div>
  {/if}
</div>