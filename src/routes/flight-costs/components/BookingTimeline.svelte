<!-- src/routes/flight-costs/components/BookingTimeline.svelte -->
<script lang="ts">
  interface Props {
    averagePrice?: number;
    currentCurrency?: string;
  }
  
  let { 
    averagePrice = 0,
    currentCurrency = 'USD'
  }: Props = $props();
  
  const getTimelinePrice = (monthsInAdvance: number) => {
    const discounts: Record<number, number> = {
      1: 1.2,
      3: 1.1,
      4: 0.95,
      5: 0.85,
      6: 0.9,
    };
    return averagePrice * (discounts[monthsInAdvance] || 1);
  };
</script>

<div class="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/70">
  <h3 class="font-medium text-gray-800 mb-4 flex items-center gap-2">
    <span>📊</span> Booking Timeline Analysis
  </h3>
  
  <div class="space-y-3">
    {#each [1, 3, 4, 5, 6] as months}
      <div class="flex items-center justify-between p-2 hover:bg-white/50 rounded-lg">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full flex items-center justify-center
            {months === 4 || months === 5 
              ? 'bg-green-100 text-green-700' 
              : months === 1
              ? 'bg-red-100 text-red-700'
              : 'bg-blue-100 text-blue-700'}">
            {months}
          </div>
          <div>
            <div class="font-medium text-gray-800">
              {months} {months === 1 ? 'Month' : 'Months'} in Advance
            </div>
            {#if months === 4 || months === 5}
              <div class="text-xs text-green-600">⭐ Recommended</div>
            {:else if months === 1}
              <div class="text-xs text-red-600">Try to avoid if possible</div>
            {/if}
          </div>
        </div>
        <div class="text-right">
          <div class="font-bold text-gray-900">
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: currentCurrency
            }).format(getTimelinePrice(months))}
          </div>
          <div class="text-xs text-gray-500">
            {months === 4 || months === 5 ? 'Best Value' : 'Estimated'}
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  <div class="mt-4 pt-4 border-t border-gray-200">
  <p class="text-sm text-gray-600">
      <span class="font-medium">💡 Tip:</span> For international flights, booking <strong>4-5 months in advance</strong> 
      typically offers the best balance of price and availability. 
      While last-minute deals (6-8 weeks out) can sometimes work, 
      <strong>booking early is generally safer and often cheaper</strong>.
    </p>
  </div>
</div>