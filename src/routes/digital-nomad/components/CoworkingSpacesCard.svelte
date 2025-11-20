<script lang="ts">
  const membershipTypes = [
    { type: 'Day Pass', price: '$15-25', bestFor: 'Short stays, testing spaces' },
    { type: '10-Day Pack', price: '$120-200', bestFor: '2-week trips, flexibility' },
    { type: 'Monthly Unlimited', price: '$150-300', bestFor: 'Serious remote workers' },
    { type: 'Dedicated Desk', price: '$300-500', bestFor: 'Long-term, need consistency' }
  ];
</script>

<div class="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
  <h3 class="text-2xl font-bold text-white mb-4">💼 Coworking Spaces</h3>
  <div class="space-y-3">
    {#each membershipTypes as membership}
      <div class="flex justify-between items-center p-3 bg-white/10 rounded-lg">
        <div>
          <div class="text-white font-semibold">{membership.type}</div>
          <div class="text-white/70 text-sm">{membership.bestFor}</div>
        </div>
        <div class="text-white font-bold">{membership.price}</div>
      </div>
    {/each}
  </div>
</div>