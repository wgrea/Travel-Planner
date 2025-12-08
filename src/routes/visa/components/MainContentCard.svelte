<!-- src/routes/visa/components/MainContentCard.svelte -->
<script lang="ts">
  // Import existing components
  import VisaResults from './VisaResults.svelte';
  import VisaTypeDetails from './VisaTypeDetails.svelte';
  import DocumentChecklist from './DocumentChecklist.svelte';
  import VisaFilter from './VisaFilter.svelte';
  import VisaMatrix from './VisaMatrix.svelte';
  import QuickInfoPanel from './QuickInfoPanel.svelte';
  import type { VisaTypeDetails as VisaTypeDetailsType } from '$lib/utils/visa';
  import type { VisaFilter as VisaFilterType } from '$lib/utils/visa';
  
  let { 
    showMatrix,
    homeCountry,
    selectedDestination,
    selectedRegion,
    currentVisaInfo,
    destinationCountryData,
    visaDetails,
    filteredDestinations,
    visaFilter,
    error,
    onToggleMatrix,
    onDestinationChange
  } = $props<{
    showMatrix: boolean;
    homeCountry: string;
    selectedDestination: string;
    selectedRegion: string;
    currentVisaInfo: any;
    destinationCountryData: any;
    visaDetails: VisaTypeDetailsType[];
    filteredDestinations: any[];
    visaFilter: VisaFilterType;
    error: string;
    onToggleMatrix: () => void;
    onDestinationChange: (country: string) => void;
  }>();
</script>

<div class="bg-white rounded-2xl shadow-lg p-6">
  <!-- Toggle View - More Compact -->
  <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
    <div>
      <h2 class="text-xl font-semibold text-gray-900">
        {showMatrix ? 'Browse Destinations' : 'Visa Details for ' + selectedDestination}
      </h2>
      <p class="text-sm text-gray-600 mt-1">
        {selectedRegion === 'All Regions' ? 'Worldwide' : `Region: ${selectedRegion}`}
      </p>
    </div>
    <button
      type="button"
      onclick={onToggleMatrix}
      class="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
    >
      {showMatrix ? 'Single Country' : 'Browse All'}
    </button>
  </div>
  
  {#if showMatrix}
    <!-- Matrix View -->
    <div class="space-y-6">
      <!-- Filters -->
      <div class="bg-gray-50 rounded-xl p-4">
        <VisaFilter passportCountry={homeCountry} bind:filter={visaFilter} />
      </div>
      
      <!-- Results -->
      <VisaMatrix 
        destinations={filteredDestinations}
        onDestinationSelect={onDestinationChange}
      />
    </div>
  {:else}
    <!-- Single Country View -->
    {#if selectedDestination}
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left Column: Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <VisaResults 
            homeCountry={homeCountry}
            destinationCountry={selectedDestination}
            visaInfo={currentVisaInfo}
            countryData={destinationCountryData}
            error={error}
          />
          
          {#if visaDetails.length > 0}
            <div class="bg-gray-50 rounded-xl p-4">
              <VisaTypeDetails visaDetails={visaDetails} />
            </div>
          {/if}
          
          <DocumentChecklist visaInfo={currentVisaInfo} />
        </div>
        
        <!-- Right Column: Quick Actions -->
        <div>
          <QuickInfoPanel
            {homeCountry}
            {selectedDestination}
            onBrowseSimilar={onToggleMatrix}
          />
        </div>
      </div>
    {:else}
      <!-- Prompt to select a destination -->
      <div class="text-center py-12">
        <div class="text-5xl mb-4">✈️</div>
        <h3 class="text-lg font-semibold text-gray-700 mb-2">
          Select a Destination
        </h3>
        <p class="text-gray-600">
          Choose a country above to see detailed visa information
        </p>
      </div>
    {/if}
  {/if}
</div>