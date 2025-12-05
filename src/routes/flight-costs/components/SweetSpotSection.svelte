<!-- src/routes/flight-costs/components/SweetSpotSection.svelte -->
<script lang="ts">
  interface Props {
    sweetSpot?: string[];
    expensiveMonths?: string[];
  }
  
  let { 
    sweetSpot = [],
    expensiveMonths = []
  }: Props = $props();
</script>

<div class="space-y-4">
  {#if sweetSpot.length > 0}
    <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-emerald-100">
      <h3 class="font-bold text-emerald-800 mb-2 flex items-center gap-2">
        <span>✨</span> Sweet Spot Periods
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each sweetSpot as month}
          <span class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
            {month}
          </span>
        {/each}
      </div>
      <p class="text-sm text-emerald-700 mt-2">
        Best balance of weather, prices, and crowds
      </p>
    </div>
  {/if}
  
  {#if expensiveMonths.length > 0}
    <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100">
      <h3 class="font-bold text-amber-800 mb-2 flex items-center gap-2">
        <span>📈</span> Peak Season / High Prices
      </h3>
      <div class="flex flex-wrap gap-2">
        {#each expensiveMonths as month}
          <span class="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
            {month}
          </span>
        {/each}
      </div>
      <p class="text-sm text-amber-700 mt-2">
        Expect 20-40% higher prices during these months
      </p>
    </div>
  {/if}
</div>