<!-- src/routes/filters/components/TransportationFilters.svelte -->
<script lang="ts">
  export let transportationPriority: string;
  export let flightAccess: string;
</script>

<h2 class="text-3xl font-bold mt-8 mb-6 border-b border-white/50 pb-3 flex items-center gap-2">
  <span class="text-3xl">✈️</span> Transportation & Access
</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  <div>
    <label for="flight-access" class="block text-lg font-medium mb-2">Flight Access</label>
    <select 
      id="flight-access"
      bind:value={flightAccess} 
      class="w-full p-3 rounded-xl bg-white/25 border-2 border-white/40 text-white focus:outline-none focus:border-white/80"
    >
      <option value="Direct from Chicago" class="text-gray-800">Direct from Chicago</option>
      <option value="Major US Hubs" class="text-gray-800">Major US Hubs</option>
      <option value="Any International" class="text-gray-800">Any International</option>
    </select>
  </div>

  <div>
    <label for="city-transport" class="block text-lg font-medium mb-2">City Transportation</label>
    <select 
      id="city-transport"
      bind:value={transportationPriority} 
      class="w-full p-3 rounded-xl bg-white/25 border-2 border-white/40 text-white focus:outline-none focus:border-white/80"
    >
      <option value="Walkable Cities" class="text-gray-800">Walkable Cities</option>
      <option value="Public Transport" class="text-gray-800">Public Transport</option>
      <option value="Ride Share" class="text-gray-800">Ride Share</option>
    </select>
  </div>
</div>