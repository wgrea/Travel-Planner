<!-- src/routes/visa/components/DestinationCard.svelte -->
<script lang="ts">
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import { getRegionForCountry, getSubregionForCountry } from '$lib/utils/regionUtils';
  import { visaData } from '$lib/data/visa';
  
  let { 
    selectedDestination,
    selectedRegion,
    selectedSubregion,
    selectedPassport,
    onDestinationChange,
    onPassportChange
  } = $props<{
    selectedDestination: string;
    selectedRegion: string;
    selectedSubregion: string;
    selectedPassport: string;
    onDestinationChange: (country: string) => void;
    onPassportChange: (country: string) => void;
  }>();
  
  // Get visa countries function - with region and subregion filtering
  const getAvailableVisaCountries = () => {
    const destinations = Object.keys(visaData);
    const countries = destinations.map((country: string) => ({
      country,
      region: getRegionForCountry(country) || 'Global',
      subregion: getSubregionForCountry(country) || getRegionForCountry(country) || 'General'
    }));
    
    // Filter by selected region if not "All Regions"
    let filtered = countries;
    if (selectedRegion !== 'All Regions') {
      filtered = filtered.filter((c: any) => c.region === selectedRegion);
    }
    
    // Filter by selected subregion if not "All Subregions"
    if (selectedSubregion !== 'All Subregions') {
      filtered = filtered.filter((c: any) => c.subregion === selectedSubregion);
    }
    
    return filtered;
  };
</script>

<div class="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl 
  hover:shadow-2xl transition-shadow duration-500">
  <div class="flex items-center gap-3 mb-6">
    <div class="w-12 h-12 rounded-full bg-green-100/80 flex items-center justify-center">
      <span class="text-2xl">🏁</span>
    </div>
    <div>
      <h3 class="text-lg font-medium text-gray-900">Destination</h3>
      <p class="text-sm text-gray-600">
        {selectedRegion === 'All Regions' 
          ? 'Select your destination country' 
          : selectedSubregion === 'All Subregions'
            ? `Destinations in ${selectedRegion}`
            : `Destinations in ${selectedSubregion}`}
      </p>
    </div>
  </div>
  
  <!-- Use CountrySelector for destination -->
  <CountrySelector 
    selectedCountry={selectedDestination}
    selectedRegion={selectedRegion}
    countryData={getAvailableVisaCountries()}
    onCountryChange={onDestinationChange}
    onRegionChange={() => {}} 
    mode="visa"
    selectedPassport={selectedPassport}
    onPassportChange={onPassportChange}
    variant="minimal"
  />
</div>