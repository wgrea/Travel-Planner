<!-- src/routes/digital-nomad/components/CoworkingSpacesCard.svelte -->
<script lang="ts">
  const membershipTypes = [
    { type: 'Day Pass', price: '$15-25', bestFor: 'Short stays, testing spaces' },
    { type: '10-Day Pack', price: '$120-200', bestFor: '2-week trips, flexibility' },
    { type: 'Monthly Unlimited', price: '$150-300', bestFor: 'Serious remote workers' },
    { type: 'Dedicated Desk', price: '$300-500', bestFor: 'Long-term, need consistency' }
  ];
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">💼 Coworking Spaces</h3>
  <div class="space-y-3">
    {#each membershipTypes as membership}
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <div>
          <div class="text-gray-900 font-medium">{membership.type}</div>
          <div class="text-gray-600 text-sm">{membership.bestFor}</div>
        </div>
        <div class="text-blue-600 font-semibold">{membership.price}</div>
      </div>
    {/each}
  </div>
</div>