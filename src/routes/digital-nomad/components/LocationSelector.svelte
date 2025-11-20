<!-- src/routes/digital-nomad/components/LocationSelector.svelte -->
<script lang="ts">
  import CountrySelector from "$lib/components/CountrySelector.svelte";
  
  export let selectedCountry: string;
  export let selectedCity: string;
  export let availableCities: string[] = [];
  
  // You'll need to define these based on your CountrySelector requirements
  export let selectedRegion: string = '';
  export let countryData: any[] = []; // Replace 'any' with your actual country data type
  
  // Handle country change
  function handleCountryChange(country: string) {
    selectedCountry = country;
    updateAvailableCities();
  }
  
  // Handle region change
  function handleRegionChange(region: string) {
    selectedRegion = region;
  }
  
  // Update available cities when country changes
  function updateAvailableCities() {
    if (selectedCountry) {
      availableCities = cityOptions[selectedCountry] || [];
      // Reset city if it's not available in the new country
      if (selectedCity && !availableCities.includes(selectedCity)) {
        selectedCity = '';
      }
    }
  }
  
  $: updateAvailableCities();
  
  const cityOptions: Record<string, string[]> = {
    'Thailand': ['Bangkok', 'Chiang Mai', 'Phuket', 'Koh Samui'],
    'Vietnam': ['Ho Chi Minh', 'Hanoi', 'Da Nang'],
    'Indonesia': ['Bali', 'Jakarta'],
    'Portugal': ['Lisbon', 'Porto'],
    'Colombia': ['Medellin', 'Bogota']
  };
</script>

<!-- src/routes/digital-nomad/components/LocationSelector.svelte -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div role="group">
    <label class="block text-white/90 text-sm font-medium mb-2">
      Select Country
      <CountrySelector 
        selectedCountry={selectedCountry}
        selectedRegion={selectedRegion}
        countryData={countryData}
        onCountryChange={handleCountryChange}
        onRegionChange={handleRegionChange}
        showInsights={false}
      />
    </label>
  </div>
  
  <div>
    <label for="city-select" class="block text-white/90 text-sm font-medium mb-2">Select City</label>
    <select 
      id="city-select"
      bind:value={selectedCity} 
      class="w-full rounded-lg bg-white/90 border border-white/50 px-4 py-3 text-gray-800"
      disabled={!selectedCountry}
    >
      <option value="">Select a city</option>
      {#each availableCities as city}
        <option value={city}>{city}</option>
      {/each}
    </select>
  </div>
</div>