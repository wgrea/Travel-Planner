<!-- src/routes/digital-nomad/components/MainContent.svelte -->
<script lang="ts">
  import InternetQualityCard from './InternetQualityCard.svelte';
  import CoworkingSpacesCard from './CoworkingSpacesCard.svelte';
  import VisaInfoCard from './VisaInfoCard.svelte';
  import CommunitySafetyCard from './CommunitySafetyCard.svelte';
  import PopularCoworkingSpaces from './PopularCoworkingSpaces.svelte';
  import type { Workspace } from '$lib/data/nomadData';
  import type { NomadData } from '$lib/data/nomadData';

  // Use $props() instead of export let
  let {
    selectedCountry,
    selectedCity,
    workPreference,
    countryData,
    workspaceData = [],
    visaData,
    currency = 'USD'
  } = $props();

  // Add reactive tracking
  $effect(() => {
    console.log('🎯 MainContent UPDATED - workPreference:', workPreference, 'workspaceData:', workspaceData.length);
  });
</script>

<div>
  <!-- Two Column Layout -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
    <InternetQualityCard 
      {selectedCountry} 
      {selectedCity} 
      {countryData}
    />
    <CoworkingSpacesCard
      {workspaceData}
      {selectedCountry}
      {selectedCity}
      {workPreference}
      {currency}
    />
    <VisaInfoCard 
      {selectedCountry}
      {visaData}
    />
    <CommunitySafetyCard 
      {selectedCountry} 
      {selectedCity}
      {countryData}
    />
  </div>

  <!-- Popular Coworking Spaces -->
  <div class="mb-12">
    <PopularCoworkingSpaces
      {workspaceData}
      {selectedCountry}
      {selectedCity}
      {workPreference}
      {currency} 
    />
  </div>

  <!-- Additional Resources Section -->
  <div class="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
    <h2 class="text-2xl font-light text-gray-900 mb-6 text-center">Digital Nomad Resources</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="text-center p-6 bg-white rounded-xl border border-gray-200">
        <div class="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-green-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 class="font-medium text-gray-900 mb-2">Safety Tips</h3>
        <p class="text-sm text-gray-600">Essential safety guidelines for remote workers</p>
      </div>
      
      <div class="text-center p-6 bg-white rounded-xl border border-gray-200">
        <div class="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 class="font-medium text-gray-900 mb-2">Community</h3>
        <p class="text-sm text-gray-600">Connect with other digital nomads</p>
      </div>
      
      <div class="text-center p-6 bg-white rounded-xl border border-gray-200">
        <div class="w-12 h-12 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="font-medium text-gray-900 mb-2">Time Zones</h3>
        <p class="text-sm text-gray-600">Manage remote work across time zones</p>
      </div>
    </div>
  </div>
</div>
