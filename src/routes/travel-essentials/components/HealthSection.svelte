<!-- src/routes/travel-essentials/components/HealthSection.svelte -->
<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
  <h2 class="text-2xl font-light text-gray-900 mb-8">Health & Safety Essentials</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 class="text-xl font-medium text-gray-900 mb-6">First Aid Kit</h3>
      <div class="space-y-3">
        {#each ['Band-aids', 'Antiseptic wipes', 'Pain relievers', 'Antihistamines', 'Motion sickness pills', 'Anti-diarrheal medication', 'Prescription medications', 'Hand sanitizer'] as item}
          <div class="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
            <span class="text-emerald-600">✓</span>
            <span class="text-gray-700">{item}</span>
          </div>
        {/each}
      </div>
    </div>
    <div>
      <h3 class="text-xl font-medium text-gray-900 mb-6">Travel Health Tips</h3>
      <div class="space-y-4">
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">🩺 Vaccinations</h4>
          <p class="text-sm text-gray-700">Check required vaccines 4-6 weeks before travel</p>
        </div>
        <div class="bg-blue-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">💧 Water Safety</h4>
          <p class="text-sm text-gray-700">Stick to bottled water in areas with questionable water quality</p>
        </div>
        <div class="bg-red-50 p-4 rounded-lg">
          <h4 class="font-medium text-gray-900 mb-2">📞 Emergency Numbers</h4>
          <p class="text-sm text-gray-700">Save local emergency numbers and embassy contacts</p>
        </div>
      </div>
    </div>
  </div>
</div>