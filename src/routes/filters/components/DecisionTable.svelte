<!-- filters/components/DecisionTable.svelte -->
<script lang="ts">
  export let options: Array<{
    destination: string;
    seasonality: string;
    visaEase: string;
    cost: string;
    vibe: string;
    nearbyAlt?: string;
  }>;
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm overflow-x-auto">
  <table class="w-full min-w-full">
    <thead>
      <tr class="border-b border-gray-200">
        <th class="text-left py-3 px-4 text-sm font-semibold text-gray-900">Destination</th>
        <th class="text-left py-3 px-4 text-sm font-semibold text-gray-900">Seasonality</th>
        <th class="text-left py-3 px-4 text-sm font-semibold text-gray-900">Visa ease</th>
        <th class="text-left py-3 px-4 text-sm font-semibold text-gray-900">Cost snapshot</th>
        <th class="text-left py-3 px-4 text-sm font-semibold text-gray-900">Vibe</th>
        <th class="text-left py-3 px-4 text-sm font-semibold text-gray-900">Nearby alt</th>
      </tr>
    </thead>
    <tbody>
      {#each options as o}
        <tr class="border-b border-gray-100 hover:bg-gray-50">
          <td class="py-3 px-4 text-sm text-gray-900 font-medium">{o.destination}</td>
          <td class="py-3 px-4 text-sm text-gray-700">{o.seasonality}</td>
          <td class="py-3 px-4 text-sm text-gray-700">{o.visaEase}</td>
          <td class="py-3 px-4 text-sm text-gray-700">{o.cost}</td>
          <td class="py-3 px-4 text-sm text-gray-700">{o.vibe}</td>
          <td class="py-3 px-4 text-sm text-gray-700">{o.nearbyAlt || '-'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>