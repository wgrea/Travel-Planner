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

<table>
  <thead>
    <tr>
      <th>Destination</th><th>Seasonality</th><th>Visa ease</th>
      <th>Cost snapshot</th><th>Vibe</th><th>Nearby alt</th>
    </tr>
  </thead>
  <tbody>
    {#each options as o}
      <tr>
        <td>{o.destination}</td>
        <td>{o.seasonality}</td>
        <td>{o.visaEase}</td>
        <td>{o.cost}</td>
        <td>{o.vibe}</td>
        <td>{o.nearbyAlt}</td>
      </tr>
    {/each}
  </tbody>
</table>