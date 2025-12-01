<!-- src/routes/transportation-costs/components/PublicTransportCard.svelte -->
<script lang="ts">
  import type { CityTransportation } from '$lib/types/transportation';
  export let data: CityTransportation;
  export let getConvertedAmount: (amount: number) => string;
</script>

<div class="border border-gray-200 rounded-xl p-4">
  <h3 class="font-semibold text-lg mb-3">🚆 Public Transport</h3>
  <div class="space-y-2 text-sm">
    {#if data.publicTransport.monthlyPass > 0}
      <div class="flex justify-between">
        <span>Monthly Pass:</span>
        <span class="font-medium">{getConvertedAmount(data.publicTransport.monthlyPass)}</span>
      </div>
    {:else}
      <div class="flex justify-between text-gray-500">
        <span>Monthly Pass:</span>
        <span class="font-medium">Not available</span>
      </div>
    {/if}

    <div class="flex justify-between">
      <span>Single Ticket:</span>
      <span class="font-medium">{getConvertedAmount(data.publicTransport.singleTicket)}</span>
    </div>

    {#if data.publicTransport.dailyCap && data.publicTransport.dailyCap > 0}
      <div class="flex justify-between">
        <span>Daily Cap:</span>
        <span class="font-medium">{getConvertedAmount(data.publicTransport.dailyCap)}</span>
      </div>
    {/if}

    <div class="flex justify-between">
      <span>Reliability:</span>
      <span class="font-medium">{data.publicTransport.reliability}/10</span>
    </div>

    <div class="flex justify-between">
      <span>Coverage:</span>
      <span class="font-medium">{data.publicTransport.coverage}/10</span>
    </div>

    {#if data.publicTransport.notes}
      <div class="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-600">
        {data.publicTransport.notes}
      </div>
    {/if}
  </div>
</div>