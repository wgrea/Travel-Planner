<!-- src/routes/visa/components/PassportCard.svelte -->
<script lang="ts">
  import { getPassportCountries } from '$lib/utils/visa';
  import { getRegionForCountry, getSubregionForCountry } from '$lib/utils/regionUtils';
  
  let { 
    homeCountry,
    selectedRegion,
    selectedSubregion,
    onPassportChange,
    visaCounts
  } = $props<{
    homeCountry: string;
    selectedRegion: string;
    selectedSubregion: string;
    onPassportChange: (country: string) => void;
    visaCounts: { totalVisas: number; visaFree: number; nomadVisas: number };
  }>();
  
  // Get filtered passport countries
  const filteredPassportCountries = (): string[] => {
    const allPassports = getPassportCountries();
    
    let filtered = allPassports;
    
    // Filter by region
    if (selectedRegion !== 'All Regions') {
      filtered = filtered.filter((country: string) => 
        getRegionForCountry(country) === selectedRegion
      );
    }
    
    // Filter by subregion
    if (selectedSubregion !== 'All Subregions') {
      filtered = filtered.filter((country: string) => 
        getSubregionForCountry(country) === selectedSubregion
      );
    }
    
    return filtered;
  };
</script>

<div class="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl 
  hover:shadow-2xl transition-shadow duration-500">
  <div class="flex items-center gap-3 mb-6">
    <div class="w-12 h-12 rounded-full bg-blue-100/80 flex items-center justify-center">
      <span class="text-2xl">📘</span>
    </div>
    <div>
      <h3 class="text-lg font-medium text-gray-900">Your Passport</h3>
      <p class="text-sm text-gray-600">
        {selectedRegion === 'All Regions' 
          ? 'Select your passport country' 
          : selectedSubregion === 'All Subregions'
            ? `Passport countries in ${selectedRegion}`
            : `Passport countries in ${selectedSubregion}`}
      </p>
    </div>
  </div>
  
  <div class="space-y-4">
    <!-- Passport Country Selector -->
    <div>
      <label for="passport-country-select" class="block text-sm font-medium mb-2 text-gray-700">
        Select Passport Country
      </label>
      <select
        id="passport-country-select"
        bind:value={homeCountry}
        onchange={(e) => {
          const target = e.currentTarget as HTMLSelectElement;
          onPassportChange(target.value);
        }}
        class="w-full p-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm 
          text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 
          focus:ring-blue-100 transition-all duration-200"
      >
        {#each filteredPassportCountries() as country (country)}
          <option value={country}>{country}</option>
        {/each}
      </select>
      <p class="text-xs text-gray-500 mt-2">
        {filteredPassportCountries().length} passport countries available
        {selectedSubregion !== 'All Subregions' ? ` in ${selectedSubregion}` : 
         selectedRegion !== 'All Regions' ? ` in ${selectedRegion}` : ' worldwide'}
      </p>
    </div>
    
    <!-- Current Selection Info -->
    <div class="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-3 border border-gray-200">
      <div class="flex items-center justify-between text-sm">
        <div class="text-gray-700">
          <span class="font-medium">Selected:</span> {homeCountry}
        </div>
        <div class="text-gray-600">
          {getRegionForCountry(homeCountry)}
          {getSubregionForCountry(homeCountry) !== getRegionForCountry(homeCountry) 
            ? ` • ${getSubregionForCountry(homeCountry)}` 
            : ''}
        </div>
      </div>
    </div>
    
    <!-- Visa Stats -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-4 border border-blue-200">
      <div class="grid grid-cols-3 gap-4 text-sm">
        <div class="text-center">
          <div class="text-lg font-bold text-blue-600">{visaCounts.totalVisas}</div>
          <div class="text-xs text-blue-700">Total Destinations</div>
        </div>
        <div class="text-center">
          <div class="text-lg font-bold text-green-600">{visaCounts.visaFree}</div>
          <div class="text-xs text-green-700">Visa-Free</div>
        </div>
        <div class="text-center">
          <div class="text-lg font-bold text-purple-600">{visaCounts.nomadVisas}</div>
          <div class="text-xs text-purple-700">Nomad Visas</div>
        </div>
      </div>
      <p class="text-xs text-gray-600 mt-3 text-center">
        {homeCountry} passport holders can travel to {visaCounts.totalVisas} destinations worldwide
      </p>
    </div>
  </div>
</div>