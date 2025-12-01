<!-- src/routes/visa/components/VisaMatrix.svelte -->
<script lang="ts">
  import type { VisaInfo } from '$lib/types/visa';
  import type { Country } from '$lib/types/minimalData';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  import { selectedCurrency } from '$lib/stores/currency';

  // Use $props() like flight costs
  let { visaInfo, countryData } = $props<{
    visaInfo: VisaInfo;
    countryData: Country | undefined;
  }>();

  // Copy EXACTLY what flight costs does
  const currentCurrency = $derived($selectedCurrency);

  function formatMatrixIncome(incomeReq: string | undefined): string {
    if (!incomeReq) return 'Not required';
    
    const amountMatch = incomeReq.match(/(\d+(?:,\d+)?)/);
    if (amountMatch) {
      const amount = parseInt(amountMatch[1].replace(/,/g, ''));
      const convertedAmount = convertCurrency(amount, 'USD', currentCurrency);
      return `${formatCurrency(convertedAmount, currentCurrency)}/month`;
    }
    
    return incomeReq;
  }
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
  <div class="text-center p-3 bg-stone-50 rounded-lg">
    <div class="font-medium text-stone-700 mb-1">Visa Type</div>
    <div class="text-stone-900 font-semibold">{visaInfo.category}</div>
  </div>
  
  <div class="text-center p-3 bg-stone-50 rounded-lg">
    <div class="font-medium text-stone-700 mb-1">Income Required</div>
    <div class="text-stone-900 font-semibold">
      {formatMatrixIncome(visaInfo.incomeReq)}
    </div>
  </div>
  
  <div class="text-center p-3 bg-stone-50 rounded-lg">
    <div class="font-medium text-stone-700 mb-1">Digital Nomad Visa</div>
    <div class="text-stone-900 font-semibold">
      {visaInfo.nomadVisa ? 'Available' : 'Not available'}
    </div>
  </div>
  
  <!-- Add more matrix items as needed -->
</div>