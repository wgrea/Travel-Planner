<!-- src/routes/filters/components/TransportationFilters.svelte -->
<script lang="ts">
  export let transportationPriority: string;
  export let flightAccess: string;
</script>

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
    <span class="text-2xl">✈️</span> Transportation & Access
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label for="flight-access" class="block text-gray-700 font-medium mb-2">Flight Access</label>
      <select 
        id="flight-access"
        bind:value={flightAccess} 
        class="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="Direct from Chicago">Direct from Chicago</option>
        <option value="Major US Hubs">Major US Hubs</option>
        <option value="Any International">Any International</option>
      </select>
    </div>

    <div>
      <label for="city-transport" class="block text-gray-700 font-medium mb-2">City Transportation</label>
      <select 
        id="city-transport"
        bind:value={transportationPriority} 
        class="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="Walkable Cities">Walkable Cities</option>
        <option value="Public Transport">Public Transport</option>
        <option value="Ride Share">Ride Share</option>
      </select>
    </div>
  </div>
</div>