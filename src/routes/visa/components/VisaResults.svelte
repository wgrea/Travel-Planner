<!-- src/routes/visa/components/VisaResults.svelte -->
<!-- src/routes/visa/components/VisaResults.svelte -->
<script lang="ts">
  import type { VisaInfo } from '$lib/types/visa';
  import type { Country } from '$lib/types/minimalData';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import { selectedCurrency } from '$lib/stores/currency';

  // Use $props() like flight costs
  let { homeCountry, destinationCountry, visaInfo, countryData, error } = $props<{
    homeCountry: string;
    destinationCountry: string;
    visaInfo: VisaInfo;
    countryData: Country | undefined;
    error: string;
  }>();

  // FIX: Use $derived instead of legacy $:
  const currentCurrency = $derived($selectedCurrency);

  // Simple format function like flight costs
  function formatIncome(incomeReq: string | undefined): string {
    if (!incomeReq) return 'Not specified';
    
    const amountMatch = incomeReq.match(/(\d+(?:,\d+)?)/);
    if (amountMatch) {
      const amount = parseInt(amountMatch[1].replace(/,/g, ''));
      const convertedAmount = convertCurrency(amount, 'USD', currentCurrency);
      return `${formatCurrency(convertedAmount, currentCurrency)}/month`;
    }
    
    return incomeReq;
  }

  // Add the missing function
  function isDigitalNomadSection(): boolean {
    return !!(
      visaInfo.category?.toLowerCase().includes('digital') || 
      visaInfo.ease?.toLowerCase().includes('nomad') ||
      (visaInfo.incomeReq && visaInfo.incomeReq.includes('$'))
    );
  }

  // FIX: Use $effect for side effects instead of legacy $:
  $effect(() => {
    console.log('🔄 VisaResults update:', {
      currency: currentCurrency,
      incomeReq: visaInfo?.incomeReq,
      reactive: true
    });
  });
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
    <span class="text-sm font-semibold text-stone-900">
      {formatIncome(visaInfo.incomeReq)}
    </span>
  </div>

  <!-- Work Policy -->
  <div class="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between items-center">
    <span class="text-sm font-medium text-stone-700">Work Policy</span>
    <span class="text-sm font-semibold text-stone-900">{visaInfo.workPolicy}</span>
  </div>

  <!-- Digital Nomad Visa Section -->
  {#if isDigitalNomadSection()}
    <div class="p-4 rounded-lg bg-blue-50 border border-blue-200 flex justify-between items-center">
      <span class="text-sm font-medium text-blue-700">Digital Nomad Visa</span>
      <span class="text-sm font-semibold text-blue-900">
        Available - {formatIncome(visaInfo.incomeReq)}
      </span>
    </div>
  {/if}
</div>