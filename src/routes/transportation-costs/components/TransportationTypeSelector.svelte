<!-- src/routes/transportation-costs/components/TransportationTypeSelector.svelte -->
<script lang="ts">
  export let usagePattern: 'tourist' | 'budgetTraveler' | 'digitalNomad' | 'resident' = 'digitalNomad';
  // Use a different name for class prop
  export let className: string = '';
  
  const patterns = [
    { value: 'tourist', label: 'Tourist', description: 'Taxis + occasional public transport' },
    { value: 'budgetTraveler', label: 'Budget Traveler', description: 'Primarily public transport' },
    { value: 'digitalNomad', label: 'Digital Nomad', description: 'Mix of transport modes' },
    { value: 'resident', label: 'Resident', description: 'Monthly pass + occasional rides' }
  ];
</script>

<div class="bg-white rounded-lg shadow-md p-6 {className}">
  <h2 class="text-xl font-semibold mb-4">Usage Pattern</h2>
  
  <div class="space-y-3">
    {#each patterns as pattern}
      <label class="flex items-start p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
        <input 
          type="radio" 
          name="usagePattern" 
          value={pattern.value} 
          bind:group={usagePattern}
          class="mt-1 mr-3"
        />
        <div class="flex-1">
          <div class="font-medium text-gray-900">{pattern.label}</div>
          <div class="text-sm text-gray-600">{pattern.description}</div>
        </div>
      </label>
    {/each}
  </div>
</div>