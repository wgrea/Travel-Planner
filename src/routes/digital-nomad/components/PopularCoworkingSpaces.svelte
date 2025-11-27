<!-- src/routes/digital-nomad/components/PopularCoworkingSpaces.svelte -->
<script lang="ts">
  import { popularWorkspaces } from '$lib/data/coworkingSpaces';
  
  export let selectedCountry: string;
  export let selectedCity: string; // ADD THIS
  export let workPreference: string;
  
  $: countryWorkspaces = popularWorkspaces[selectedCountry] || [];
  
  // Filter by city if selected
  $: filteredWorkspaces = selectedCity 
    ? countryWorkspaces.filter(space => space.city === selectedCity)
    : countryWorkspaces;
  
  // Then filter by work preference
  $: finalWorkspaces = filteredWorkspaces.filter(space => {
    if (workPreference === 'coworking') return space.type === 'coworking';
    if (workPreference === 'cafe') return space.type === 'cafe';
    if (workPreference === 'hostel') return space.type === 'hotel' || space.type === 'public_space';
    if (workPreference === 'hotel') return space.type === 'hotel';
    return true;
  });
  
  function getTypeIcon(type: string): string {
    switch(type) {
      case 'coworking': return '💼';
      case 'cafe': return '☕';
      case 'library': return '📚';
      case 'hotel': return '🏨';
      case 'public_space': return '🏛️';
      default: return '💻';
    }
  }
  
  function getTypeColor(type: string): string {
    switch(type) {
      case 'coworking': return 'bg-blue-100 text-blue-800';
      case 'cafe': return 'bg-orange-100 text-orange-800';
      case 'library': return 'bg-green-100 text-green-800';
      case 'hotel': return 'bg-purple-100 text-purple-800';
      case 'public_space': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
  
  function getPriceDisplay(space: any): string {
    if (space.dayPassPrice) return `Day Pass: $${space.dayPassPrice}`;
    if (space.hourlyRate) return `~$${space.hourlyRate}/hour`;
    return 'Free';
  }
</script>

<div class="bg-white rounded-2xl p-6 mt-8 border border-gray-200 shadow-sm">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-semibold text-gray-900">🏢 Popular Workspaces {#if selectedCity}in {selectedCity}{/if}</h3>
    <div class="text-sm text-gray-500">
      {finalWorkspaces.length} {finalWorkspaces.length === 1 ? 'space' : 'spaces'} found
    </div>
  </div>
  
  {#if filteredWorkspaces.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each filteredWorkspaces as space}
        <div class="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-colors hover:shadow-md">
          <!-- Header with type and rating -->
          <div class="flex items-start justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-lg">{getTypeIcon(space.type)}</span>
              <span class="px-2 py-1 text-xs font-medium rounded-full {getTypeColor(space.type)}">
                {space.type.replace('_', ' ')}
              </span>
            </div>
            <div class="flex items-center gap-1 text-yellow-500">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="text-sm font-medium">{space.rating}</span>
            </div>
          </div>
          
          <!-- Space name and city -->
          <h4 class="text-gray-900 font-medium mb-1">{space.name}</h4>
          <div class="text-gray-600 text-sm mb-3">{space.city}</div>
          
          <!-- Pricing -->
          <div class="flex justify-between items-center mb-3 p-2 bg-white rounded border">
            <span class="text-gray-700 text-sm">Cost:</span>
            <span class="font-medium text-blue-600 text-sm">{getPriceDisplay(space)}</span>
          </div>
          
          <!-- Workspace metrics -->
          <div class="grid grid-cols-3 gap-2 text-xs mb-3">
            <div class="text-center p-1 bg-white rounded border">
              <div class="font-medium text-gray-900">{space.wifiSpeed} Mbps</div>
              <div class="text-gray-500">WiFi</div>
            </div>
            <div class="text-center p-1 bg-white rounded border">
              <div class="font-medium text-gray-900">{space.powerOutlets}/5</div>
              <div class="text-gray-500">Outlets</div>
            </div>
            <div class="text-center p-1 bg-white rounded border">
              <div class="font-medium text-gray-900">{space.noiseLevel}/5</div>
              <div class="text-gray-500">Noise</div>
            </div>
          </div>
          
          <!-- Best for -->
          <div class="mb-2">
            <div class="text-xs text-gray-500 mb-1">Best for:</div>
            <div class="flex flex-wrap gap-1">
              {#each space.bestFor.slice(0, 2) as useCase}
                <span class="px-2 py-0.5 bg-white text-gray-700 rounded text-xs border">
                  {useCase}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="text-center py-8 text-gray-500">
      <svg class="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
      <p>No {workPreference} workspaces found in {selectedCountry}</p>
      <p class="text-sm mt-2">Try changing your work preference or check back soon!</p>
    </div>
  {/if}
</div>