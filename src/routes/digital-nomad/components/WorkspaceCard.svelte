<!-- src/routes/digital-nomad/components/WorkspaceCard.svelte -->
<script lang="ts">
  import type { NomadData, Workspace } from '$lib/data/nomadData';
  import { formatCurrency } from '$lib/utils/currency';
  
  let { 
    data,
    city = '',
    currency = 'USD'
  } = $props<{
    data: NomadData;
    city?: string;
    currency?: string;
  }>();
  
  // Simple computed property without $derived
  const workFriendlySpaces = (() => {
    const spaces: Workspace[] = data?.workspaces || [];
    
    const filtered = spaces.filter((space: Workspace) => {
      const isAccommodation = space.type === 'hostel' || space.type === 'hotel';
      const hasGoodWifi = space.wifiSpeed >= 30;
      const hasWorkAmenities = space.amenities?.some((amenity: string) => 
        amenity.toLowerCase().includes('work') ||
        amenity.toLowerCase().includes('business') ||
        amenity.toLowerCase().includes('laptop')
      );
      
      return (isAccommodation && hasGoodWifi) || hasWorkAmenities;
    });
    
    return city ? filtered.filter((s: Workspace) => s.city === city) : filtered;
  })();
</script>

<div class="bg-white rounded-xl border border-blue-200 p-6">
  <h3 class="text-lg font-semibold text-blue-900 mb-6">
    Work-Friendly Accommodations
    {#if city}in {city}{/if}
  </h3>
  
  {#if workFriendlySpaces.length === 0}
    <div class="text-center py-8 text-gray-500">
      <p>No work-friendly accommodations found</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each workFriendlySpaces as space (space.name)}
        <div class="border border-blue-100 rounded-lg p-4 hover:border-blue-300 transition-colors">
          <div class="flex justify-between items-start mb-3">
            <div>
              <h4 class="font-medium text-blue-900">{space.name}</h4>
              <div class="text-sm text-gray-500">{space.type} • {space.city}</div>
            </div>
            {#if space.rating}
              <div class="text-sm font-medium text-amber-600">{space.rating}★</div>
            {/if}
          </div>
          
          <!-- Work Features -->
          <div class="space-y-3">
            <!-- WiFi Speed -->
            <div>
              <div class="text-sm text-gray-600 mb-1">WiFi Speed</div>
              <div class="flex items-center gap-2">
                <div class="flex-1 bg-gray-100 rounded-full h-2">
                  <div 
                    class="bg-blue-500 h-2 rounded-full" 
                    style="width: {Math.min(space.wifiSpeed / 100 * 100, 100)}%"
                  ></div>
                </div>
                <span class="text-sm font-medium">{space.wifiSpeed} Mbps</span>
              </div>
            </div>
            
            <!-- Price -->
            <div class="grid grid-cols-2 gap-3">
              {#if space.dayPassPrice}
                <div class="bg-blue-50 rounded-lg p-2">
                  <div class="text-xs text-blue-600">Day Pass</div>
                  <div class="font-medium">{formatCurrency(space.dayPassPrice, currency)}</div>
                </div>
              {/if}
              
              {#if space.monthlyPrice}
                <div class="bg-blue-50 rounded-lg p-2">
                  <div class="text-xs text-blue-600">Monthly</div>
                  <div class="font-medium">{formatCurrency(space.monthlyPrice, currency)}</div>
                </div>
              {/if}
            </div>
            
            <!-- Work Amenities -->
            {#if space.bestFor?.length}
              <div class="text-sm text-gray-700">
                <span class="font-medium">Best for:</span> {space.bestFor.slice(0, 2).join(', ')}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>