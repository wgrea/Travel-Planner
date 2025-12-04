<!-- src/routes/flight-costs/components/PriceAnalysisSection.svelte -->
<script lang="ts">
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';
  
  // Remove "export" from interface inside <script>
  interface PriceAnalysisData {
    cheapestMonths?: string[];
    averagePrice?: number;
  }
  
  // Use $props() for component props
  let { 
    data = {},
    currentCurrency = 'USD' 
  } = $props<{
    data?: PriceAnalysisData;
    currentCurrency?: string;
  }>();
</script>

<div class="card">
  <h3 class="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2">
    <span class="text-amber-500">💰</span> Price Analysis
  </h3>
  <div class="space-y-3">
    {#if data.cheapestMonths && data.cheapestMonths.length > 0}
      <div class="info-card bg-green-50 text-green-800 border border-green-200">
        <span class="font-medium">Cheapest Months:</span>
        <span class="font-bold">{data.cheapestMonths.join(', ')}</span>
      </div>
    {/if}
    {#if data.averagePrice}
      <div class="info-card bg-amber-50 text-amber-800 border border-amber-200">
        <span class="font-medium">Average Price:</span>
        <span class="font-bold">
          {formatCurrency(
            convertCurrency(data.averagePrice, 'USD', currentCurrency),
            currentCurrency
          )}
        </span>
      </div>
    {/if}
  </div>
</div>

<style>
  .card {
    @apply bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300;
  }
  
  .info-card {
    @apply flex justify-between items-center p-3 rounded-lg font-medium;
  }
</style>