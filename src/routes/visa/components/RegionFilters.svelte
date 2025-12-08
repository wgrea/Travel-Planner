<!-- src/routes/visa/components/RegionFilters.svelte -->
<script lang="ts">
  import { getAllRegionsUnified, getSubregionForCountry, getRegionForCountry } from '$lib/utils/regionUtils';
  import { getPassportCountries } from '$lib/utils/visa';
  
  let { 
    selectedRegion,
    selectedSubregion,
    onRegionChange,
    onSubregionChange
  } = $props<{
    selectedRegion: string;
    selectedSubregion: string;
    onRegionChange: (region: string) => void;
    onSubregionChange: (subregion: string) => void;
  }>();
  
  const allRegions = ['All Regions', ...getAllRegionsUnified()];
  
  // Get subregions for the selected region
  const subregionsForSelectedRegion = (): string[] => {
    if (selectedRegion === 'All Regions' || selectedRegion === '') {
      return ['All Subregions'];
    }
    
    const subregions = new Set<string>();
    const allPassports = getPassportCountries();
    
    allPassports.forEach((country: string) => {
      if (getRegionForCountry(country) === selectedRegion) {
        const subregion = getSubregionForCountry(country);
        if (subregion && subregion !== selectedRegion) {
          subregions.add(subregion);
        }
      }
    });
    
    return ['All Subregions', ...Array.from(subregions).sort()];
  };
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <!-- Region Filter -->
  <div class="bg-white/40 backdrop-blur-md rounded-xl border border-white/50 p-4">
    <label for="region-select" class="block text-sm font-medium mb-2 text-gray-700">
      Filter by Region
    </label>
    <select
      id="region-select"
      bind:value={selectedRegion}
      onchange={(e) => {
        const target = e.currentTarget as HTMLSelectElement;
        onRegionChange(target.value);
      }}
      class="w-full p-3 rounded-lg border border-gray-300 bg-white/80 backdrop-blur-sm 
        text-gray-800 focus:outline-none focus:border-blue-400 focus:ring-2 
        focus:ring-blue-100 transition-all duration-200"
    >
      {#each allRegions as region}
        <option value={region}>{region}</option>
      {/each}
    </select>
  </div>
</div>