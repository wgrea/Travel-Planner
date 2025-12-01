<!-- src/routes/transportation-costs/components/QuickStats.svelte -->
<script lang="ts">
  export let currency: string;
</script>

<div class="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-xl p-8 text-white">
  <h3 class="font-semibold mb-4 flex items-center gap-2">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
    Quick Stats
  </h3>
  <div class="space-y-3 text-sm">
    <div class="flex justify-between items-center">
      <span class="opacity-90">Monthly Transport</span>
      <span class="font-semibold">
        {#if currency === 'USD'}$50-200
        {:else if currency === 'EUR'}€46-184
        {:else if currency === 'GBP'}£40-158
        {:else if currency === 'THB'}฿1,775-7,100
        {:else if currency === 'VND'}₫1.2M-4.9M
        {:else if currency === 'JPY'}¥7,425-29,700
        {:else if currency === 'INR'}₹4,150-16,600
        {:else}$50-200{/if}
      </span>
    </div>
    <div class="flex justify-between items-center">
      <span class="opacity-90">Ride Share 5km</span>
      <span class="font-semibold">
        {#if currency === 'USD'}$3-8
        {:else if currency === 'EUR'}€2.8-7.4
        {:else if currency === 'GBP'}£2.4-6.3
        {:else if currency === 'THB'}฿107-284
        {:else if currency === 'VND'}₫73,500-196,000
        {:else if currency === 'JPY'}¥445-1,188
        {:else if currency === 'INR'}₹250-665
        {:else}$3-8{/if}
      </span>
    </div>
    <div class="flex justify-between items-center">
      <span class="opacity-90">Public Transport</span>
      <span class="font-semibold">
        {#if currency === 'USD'}$1-3/day
        {:else if currency === 'EUR'}€0.9-2.8/day
        {:else if currency === 'GBP'}£0.8-2.4/day
        {:else if currency === 'THB'}฿35-106/day
        {:else if currency === 'VND'}₫24,500-73,500/day
        {:else if currency === 'JPY'}¥148-445/day
        {:else if currency === 'INR'}₹83-250/day
        {:else}$1-3/day{/if}
      </span>
    </div>
  </div>
</div>