<!-- src/routes/digital-nomad/components/LocationSelector.svelte -->
<script lang="ts">
  export let selectedCountry: string;
  export let selectedCity: string;
  export let availableCities: string[] = [];
  
  const cityOptions: Record<string, string[]> = {
    'Thailand': ['Bangkok', 'Chiang Mai', 'Phuket', 'Koh Samui'],
    'Vietnam': ['Ho Chi Minh', 'Hanoi', 'Da Nang'],
    'Indonesia': ['Bali', 'Jakarta'],
    'Portugal': ['Lisbon', 'Porto'],
    'Colombia': ['Medellin', 'Bogota'],
    'Spain': ['Barcelona', 'Madrid', 'Valencia'],
    'Mexico': ['Mexico City', 'Playa del Carmen', 'Tulum']
  };
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label for="country-select" class="block text-gray-700 text-sm font-medium mb-2">Select Country</label>
    <select 
      id="country-select"
      bind:value={selectedCountry} 
      class="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
    >
      <option value="Thailand">Thailand</option>
      <option value="Vietnam">Vietnam</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Portugal">Portugal</option>
      <option value="Colombia">Colombia</option>
      <option value="Spain">Spain</option>
      <option value="Mexico">Mexico</option>
    </select>
  </div>
  
  <div>
    <label for="city-select" class="block text-gray-700 text-sm font-medium mb-2">Select City</label>
    <select 
      id="city-select"
      bind:value={selectedCity} 
      class="w-full rounded-lg bg-white border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:bg-gray-100 disabled:text-gray-500"
      disabled={!selectedCountry}
    >
      <option value="">Select a city</option>
      {#each availableCities as city}
        <option value={city}>{city}</option>
      {/each}
    </select>
  </div>
</div>