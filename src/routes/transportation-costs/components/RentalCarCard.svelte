<!-- src/routes/transportation-costs/components/RentalCarCard.svelte -->
<script lang="ts">
  import type { CityTransportation } from '$lib/types/transportation';
  export let data: CityTransportation;
  export let getConvertedAmount: (amount: number) => string;
</script>

<div class="border border-gray-200 rounded-xl p-4">
  <h3 class="font-semibold text-lg mb-3">🚗 Ride Sharing</h3>
  <div class="space-y-2 text-sm">
    {#if data.rideSharing.baseFare > 0}
      <div class="flex justify-between">
        <span>Base Fare:</span>
        <span class="font-medium">{getConvertedAmount(data.rideSharing.baseFare)}</span>
      </div>
    {:else}
      <div class="flex justify-between text-gray-500">
        <span>Base Fare:</span>
        <span class="font-medium">Not available</span>
      </div>
    {/if}

    <!-- ... rest of ride sharing content ... -->
  </div>
</div>