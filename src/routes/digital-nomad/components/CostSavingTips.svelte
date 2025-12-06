<!-- src/routes/digital-nomad/components/CostSavingTips.svelte -->
<script lang="ts">
  let { selectedCountry, selectedCity, workPreference, isTouristArea, currency = 'USD' } = $props();
  
  // Tips based on location type
  const touristAreaTips = [
    'Avoid cafes in main tourist squares - prices are higher',
    'Look for coworking spaces in business districts, not tourist zones',
    'Public libraries away from tourist centers are less crowded',
    'Consider working from your accommodation during peak hours',
    'Use hotel lobbies of business hotels (less tourist-focused)'
  ];
  
  const nonTouristAreaTips = [
    'Local cafes are more laptop-friendly and affordable',
    'Community centers often have free workspace days',
    'Small town libraries may offer better amenities for remote workers',
    'Local markets sometimes have seating areas with Wi-Fi',
    'Ask locals for hidden gem workspaces'
  ];
  
  const tipsBasedOnPreference: Record<string, string[]> = { // Add explicit type
    coworking: [
      'Ask for weekly/monthly rates instead of daily',
      'Check if they offer free trial days',
      'Look for community discounts through local groups',
      'Consider shared office spaces instead of branded chains'
    ],
    cafe: [
      'Go during off-peak hours (2-5 PM)',
      'Order the house special instead of imported drinks',
      'Tip well if staying long - builds goodwill',
      'Rotate between 2-3 cafes to avoid overstaying welcome'
    ],
    library: [
      'Bring your own power bank',
      'Use noise-cancelling headphones',
      'Check holiday hours in advance',
      'Arrive early for the best seats'
    ],
    hostel: [
      'Book dorms with workspace areas included',
      'Look for hostels with coworking membership partnerships',
      'Use common areas during quiet morning hours',
      'Ask about weekly rates for longer stays'
    ],
    hotel: [
      'Business hotels often have better lobby workspaces',
      'Use hotel restaurants during non-meal times',
      'Ask about day passes for business centers',
      'Loyalty programs can include workspace access'
    ],
    free: [
      'Combine multiple free spaces in one day',
      'Use libraries for focused work, cafes for meetings',
      'Always have backup options ready',
      'Check opening hours in advance'
    ],
    all: [
      'Mix free and paid options throughout the week',
      'Use free spaces for deep work, paid spaces for meetings',
      'Plan your week around different workspace types'
    ]
  };
</script>

<div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 h-full">
  <h3 class="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-3">
    <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
      <span class="text-amber-600">💡</span>
    </div>
    Location-Specific Cost Tips
  </h3>
  
  <!-- Tourist vs Non-Tourist Alert -->
  <div class="mb-6">
    {#if isTouristArea}
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
            <span class="text-amber-600 font-bold">⚠️</span>
          </div>
          <div>
            <h4 class="font-semibold text-amber-800">Tourist Area Detected</h4>
            <p class="text-sm text-amber-700">{selectedCity} is a tourist hotspot - adjust your strategy</p>
          </div>
        </div>
        
        <ul class="space-y-2">
          {#each touristAreaTips as tip}
            <li class="text-sm text-amber-800 flex items-start gap-2">
              <span class="text-amber-500 mt-1">•</span>
              <span>{tip}</span>
            </li>
          {/each}
        </ul>
      </div>
    {:else}
      <div class="bg-green-50 border border-green-200 rounded-xl p-4">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <span class="text-green-600 font-bold">✅</span>
          </div>
          <div>
            <h4 class="font-semibold text-green-800">Less Touristy Area</h4>
            <p class="text-sm text-green-700">{selectedCity} offers better value for remote work</p>
          </div>
        </div>
        
        <ul class="space-y-2">
          {#each nonTouristAreaTips as tip}
            <li class="text-sm text-green-800 flex items-start gap-2">
              <span class="text-green-500 mt-1">•</span>
              <span>{tip}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
  
  <!-- Preference-Specific Tips -->
  <div class="mb-6">
    <h4 class="font-medium text-gray-800 mb-3">Tips for {workPreference.charAt(0).toUpperCase() + workPreference.slice(1)} Work</h4>
    <div class="space-y-3">
      {#each tipsBasedOnPreference[workPreference] as tip}
        <div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <div class="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-gray-600 text-xs">✓</span>
          </div>
          <p class="text-sm text-gray-700">{tip}</p>
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Money Loop Avoidance -->
  <div class="pt-6 border-t border-gray-200">
    <h4 class="font-medium text-gray-800 mb-3">Avoid the Money Loop</h4>
    <div class="grid grid-cols-2 gap-3 text-sm">
      <div class="bg-blue-50 p-3 rounded-lg">
        <p class="font-medium text-blue-700 mb-1">Plan Your Week</p>
        <p class="text-blue-600">Mix free and paid workspaces strategically</p>
      </div>
      <div class="bg-purple-50 p-3 rounded-lg">
        <p class="font-medium text-purple-700 mb-1">Local Networks</p>
        <p class="text-purple-600">Join nomad groups for shared discounts</p>
      </div>
    </div>
  </div>
</div>
