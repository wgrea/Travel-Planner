<!-- src/routes/living-costs/components/MoneySavingTips.svelte -->
<script lang="ts">
  export let tips: string[] = [];
  export let country: string = '';
</script>

<div class="bg-white rounded-2xl p-6 mt-8 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">
    {#if country}💡 Money Saving Tips for {country}{:else}💡 Money Saving Tips{/if}
  </h3>
  
  {#if tips && tips.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each tips as tip, index}
        <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div class="text-gray-900 font-medium mb-2">Tip #{index + 1}</div>
          <div class="text-gray-600 text-sm">{tip}</div>
        </div>
      {/each}
    </div>
  {:else}
    <!-- Fallback tips -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div class="text-gray-900 font-medium mb-2">🏠 Accommodation</div>
        <div class="text-gray-600 text-sm">Book monthly for 20-30% discounts on Airbnbs and guesthouses</div>
      </div>
      <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div class="text-gray-900 font-medium mb-2">🍜 Food</div>
        <div class="text-gray-600 text-sm">Eat where locals eat - street food is delicious and affordable</div>
      </div>
      <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div class="text-gray-900 font-medium mb-2">🚗 Transportation</div>
        <div class="text-gray-600 text-sm">Use local apps instead of taxis for better prices</div>
      </div>
      <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div class="text-gray-900 font-medium mb-2">📱 Connectivity</div>
        <div class="text-gray-600 text-sm">Buy local SIM cards instead of international roaming</div>
      </div>
    </div>
  {/if}
</div>