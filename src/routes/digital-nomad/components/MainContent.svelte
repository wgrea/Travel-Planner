<!-- src/routes/digital-nomad/components/MainContent.svelte -->
<script lang="ts">
  import InternetQualityCard from './InternetQualityCard.svelte';
  import CommunitySafetyCard from './CommunitySafetyCard.svelte';
  import WorkspaceFinder from './WorkspaceFinder.svelte'; // This should work
  import type { NomadData } from '$lib/data/nomadData';

  // Use $props() instead of export let
  let {
    selectedCountry,
    selectedCity,
    countryData,
    visaData,
    currency = 'USD'
  } = $props();
</script>

<div>
  <!-- Workspace Finder -->
  <div class="mb-12">
    <WorkspaceFinder
      {countryData}
      {selectedCity}
      {currency}
    />
  </div>

    <!-- Optional: Small stats inline with workspace finder -->
  {#if countryData}
    <div class="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="text-center">
          <div class="text-lg font-bold text-gray-800">
            {countryData.internet?.speed || 'N/A'} Mbps
          </div>
          <div class="text-gray-600">Average Internet Speed</div>
        </div>
        <div class="text-center">
          <div class="text-lg font-bold text-gray-800">
            {countryData.community?.safety || 'N/A'}/10
          </div>
          <div class="text-gray-600">Safety Rating</div>
        </div>
      </div>
    </div>
  {/if}
</div>