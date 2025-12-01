<!-- src/routes/transportation-costs/components/MonthlyCostSummary.svelte -->
<script lang="ts">
  export let monthlyCost: number;
  export let usagePattern: string;
  export let originalCurrency: string;
  export let currency: string;
  export let getConvertedAmount: (amount: number) => string;
  export let getOriginalAmount: (amount: number) => string;
</script>

<div class="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
  <div class="text-center">
    <div class="text-sm text-blue-600 font-medium mb-1">Estimated Monthly Cost</div>
    <div class="text-3xl font-bold text-blue-800">
      {getConvertedAmount(monthlyCost)}
    </div>
    <div class="text-sm text-blue-600 mt-1">
      Based on {usagePattern} usage pattern
      {#if originalCurrency !== currency}
        <div class="text-xs opacity-75 mt-1">
          Original: {getOriginalAmount(monthlyCost)}
        </div>
      {/if}
    </div>
  </div>
</div>