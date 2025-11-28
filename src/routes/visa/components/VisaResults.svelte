<!-- src/routes/visa/components/VisaResults.svelte -->
<script lang="ts">
  import type { VisaInfo } from '$lib/types/visa';
  import type { Country } from '$lib/types/minimalData'; // Changed from MinimalCountry

  export let homeCountry: string;
  export let destinationCountry: string;
  export let visaInfo: VisaInfo;
  export let countryData: Country | undefined; // Changed from MinimalCountry
  export let error: string;
</script>

{#if error}
  <div class="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6 text-sm">
    {error}
  </div>
{/if}

<!-- Results Display -->
<div class="space-y-3">
  <div class="flex items-center justify-between mb-5">
    <h3 class="text-lg font-medium text-stone-800">
      {homeCountry} → {destinationCountry}
    </h3>
    {#if countryData?.visa}
      <div class="flex items-center gap-2">
        <span class="text-xs text-stone-500 font-medium">Visa Difficulty:</span>
        <span class="text-xs font-semibold px-2 py-1 rounded-full capitalize 
          {countryData.visa.difficulty === 'easy' ? 'bg-green-100 text-green-800' : 
           countryData.visa.difficulty === 'medium' ? 'bg-amber-100 text-amber-800' : 
           'bg-red-100 text-red-800'}">
          {countryData.visa.difficulty}
        </span>
      </div>
    {/if}
  </div>
  
  <!-- Visa Ease Index -->
  <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
    <span class="text-sm font-medium text-stone-700">Visa Ease Index</span>
    <span class="text-sm font-semibold text-stone-900">{visaInfo.ease}</span>
  </div>

  <!-- Visa-Free Length -->
  <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
    <span class="text-sm font-medium text-stone-700">Visa-Free Stay Length</span>
    <span class="text-sm font-semibold text-stone-900">{visaInfo.freeLength}</span>
  </div>

  <!-- Income Requirement -->
  <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
    <span class="text-sm font-medium text-stone-700">Income Requirement</span>
    <span class="text-sm font-semibold text-stone-900">{visaInfo.incomeReq}</span>
  </div>

  <!-- Work Policy -->
  <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
    <span class="text-sm font-medium text-stone-700">Work Policy</span>
    <span class="text-sm font-semibold text-stone-900">{visaInfo.workPolicy}</span>
  </div>
</div>
