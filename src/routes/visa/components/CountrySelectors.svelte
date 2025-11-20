<!-- src/routes/visa/components/CountrySelectors.svelte -->
<script lang="ts">
  import { getAvailableCountries } from '$lib/utils/visa';
  import type { CountryCode } from '$lib/types/visa';

  export let homeCountry: string;
  export let destinationCountry: CountryCode;
  
  const homeCountries = ['United States', 'Canada', 'Schengen Area', 'India'];
</script>

<div class="grid md:grid-cols-2 gap-6 mb-10">
  <div>
    <label for="home-country" class="block text-sm font-medium mb-2.5 text-stone-700 tracking-wide">
      Your Passport
    </label>
    <select 
      id="home-country"
      bind:value={homeCountry}
      class="w-full p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
    >
      {#each homeCountries as country}
        <option value={country}>{country}</option>
      {/each}
    </select>
  </div>
  <div>
    <label for="destination-country" class="block text-sm font-medium mb-2.5 text-stone-700 tracking-wide">
      Destination Country
    </label>
    <select 
      id="destination-country"
      bind:value={destinationCountry}
      class="w-full p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:border-stone-400 focus:bg-white transition-all duration-200 text-sm"
    >
      {#each getAvailableCountries() as country}
        <option value={country}>{country}</option>
      {/each}
    </select>
  </div>
</div>