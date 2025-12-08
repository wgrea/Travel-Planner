<!-- src/routes/visa/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { 
    getVisaInfo, 
    getVisaTypeDetails,
    filterDestinationsByVisa,
    type VisaFilter as VisaFilterType,
    createDefaultVisaFilter,
    type VisaTypeDetails as VisaTypeDetailsType
  } from '$lib/utils/visa';
  import { minimalData } from '$lib/data/minimalData';
  import { visaData } from '$lib/data/visa';
  import { getRegionForCountry, getSubregionForCountry } from '$lib/utils/regionUtils';
  import { selectedCurrency } from '$lib/stores/currency';
  
  // Import our new components
  import VisaHeader from './components/VisaHeader.svelte';
  import RegionFilters from './components/RegionFilters.svelte';
  import VisaStatsBanner from './components/VisaStatsBanner.svelte';
  import PassportCard from './components/PassportCard.svelte';
  import DestinationCard from './components/DestinationCard.svelte';
  import MainContentCard from './components/MainContentCard.svelte';

  // State
  let homeCountry = $state('United States');
  let selectedPassport = $state('United States');
  let selectedDestination = $state('Thailand');
  let selectedRegion = $state('All Regions');
  let selectedSubregion = $state('All Subregions');
  let isLoading = $state(false);
  let error = $state('');
  let showMatrix = $state(false);
  
  // Filter state
  let visaFilter: VisaFilterType = $state(createDefaultVisaFilter());
  
  // Get visa counts for the selected passport
  function getVisaCountsForPassport(passportCountry: string) {
    const destinations = Object.keys(visaData);
    let totalVisas = 0;
    let visaFree = 0;
    let nomadVisas = 0;
    
    destinations.forEach(destination => {
      const visaInfo = visaData[destination]?.[passportCountry];
      if (visaInfo) {
        totalVisas++;
        if (visaInfo.category.toLowerCase().includes('visa-free') || 
            visaInfo.category.toLowerCase().includes('visa exempt')) {
          visaFree++;
        }
        if (visaInfo.nomadVisa) {
          nomadVisas++;
        }
      }
    });
    
    return { totalVisas, visaFree, nomadVisas };
  }
  
  // Current currency from store
  const currentCurrency = $derived($selectedCurrency);
  
  // Derived values
  const currentVisaInfo = $derived(getVisaInfo(homeCountry, selectedDestination));
  const destinationCountryData = $derived.by(() => {
    const key = selectedDestination.toLowerCase();
    return minimalData.countries[key] || null;
  });
  const visaDetails = $derived.by(() => 
    getVisaTypeDetails(homeCountry, selectedDestination, currentCurrency)
  );
  const filteredDestinations = $derived.by(() =>
    homeCountry ? filterDestinationsByVisa(homeCountry, visaFilter, currentCurrency) : []
  );
  const visaCounts = $derived.by(() => getVisaCountsForPassport(homeCountry));
  
  // Event handlers
  function handlePassportChange(country: string) {
    homeCountry = country;
    selectedPassport = country;
    localStorage.setItem('selectedPassport', country);
  }
  
  function handleDestinationChange(country: string) {
    selectedDestination = country;
  }
  
  function handleRegionChange(region: string) {
    selectedRegion = region;
    selectedSubregion = 'All Subregions';
  }
  
  function handleSubregionChange(subregion: string) {
    selectedSubregion = subregion;
  }
  
  function toggleMatrixView() {
    showMatrix = !showMatrix;
  }
</script>

<div class="min-h-screen bg-gradient-to-b from-stone-50 to-slate-50 px-4 py-8 md:py-12">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <VisaHeader 
      title="Visa Requirements for Digital Nomads"
      description="Check visa options, processing times, costs, and find remote-work friendly destinations"
    />
    
    <!-- Region Filters -->
    <RegionFilters 
      {selectedRegion}
      {selectedSubregion}
      onRegionChange={handleRegionChange}
      onSubregionChange={handleSubregionChange}
    />
    
    <!-- Visa Stats Banner -->
    <VisaStatsBanner 
      {selectedRegion}
      {selectedSubregion}
      {visaCounts}
    />
    
    <!-- Dual Selector Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Passport Card -->
      <PassportCard 
        {homeCountry}
        {selectedRegion}
        {selectedSubregion}
        {visaCounts}
        onPassportChange={handlePassportChange}
      />
      
      <!-- Destination Card -->
      <DestinationCard 
        {selectedDestination}
        {selectedRegion}
        {selectedSubregion}
        {selectedPassport}
        onDestinationChange={handleDestinationChange}
        onPassportChange={handlePassportChange}
      />
    </div>
    
    <!-- Main Content Card -->
    <MainContentCard 
      {showMatrix}
      {homeCountry}
      {selectedDestination}
      {selectedRegion}
      {currentVisaInfo}
      {destinationCountryData}
      {visaDetails}
      {filteredDestinations}
      {visaFilter}
      {error}
      onToggleMatrix={toggleMatrixView}
      onDestinationChange={handleDestinationChange}
    />
  </div>
</div>