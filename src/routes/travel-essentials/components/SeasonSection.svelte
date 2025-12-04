<!-- src/routes/travel-essentials/components/SeasonalSection.svelte -->
<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
  <h2 class="text-2xl font-light text-gray-900 mb-8">Seasonal Essentials</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 class="text-xl font-medium text-gray-900 mb-6">Summer Travel</h3>
      <div class="space-y-3">
        {#each ['Lightweight clothing', 'Wide-brim hat', 'High SPF sunscreen', 'Aloe vera gel', 'Insect repellent', 'Portable fan', 'Reusable water bottle', 'Quick-dry towel'] as item}
          <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
            <span class="text-orange-600">☀️</span>
            <span class="text-gray-700">{item}</span>
          </div>
        {/each}
      </div>
    </div>
    <div>
      <h3 class="text-xl font-medium text-gray-900 mb-6">Winter Travel</h3>
      <div class="space-y-3">
        {#each ['Thermal layers', 'Waterproof boots', 'Warm gloves', 'Winter coat', 'Lip balm', 'Hand warmers', 'Moisturizer', 'Neck warmer'] as item}
          <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <span class="text-blue-600">❄️</span>
            <span class="text-gray-700">{item}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>