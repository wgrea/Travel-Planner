<section id="currency-integration">
  <h2 class="text-2xl font-semibold mb-4 text-gray-800">💱 Currency Conversion Implementation</h2>
  <div class="space-y-4">
    <div class="bg-white p-4 rounded-lg border border-gray-200">
      <h3 class="font-semibold text-gray-800">The Challenge</h3>
      <p class="text-gray-700">Living costs data comes in local currencies, but users want to see prices in their preferred currency</p>
    </div>
    
    <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
      <h3 class="font-semibold text-purple-800">Solution Architecture</h3>
      <ul class="list-disc ml-6 text-purple-700 space-y-2">
        <li><strong>Centralized currency utilities</strong>: Single source of truth for exchange rates</li>
        <li><strong>Reactive conversion</strong>: Costs update automatically when currency changes</li>
        <li><strong>Fallback handling</strong>: Graceful degradation when currencies are missing</li>
        <li><strong>Local storage</strong>: Remember user's currency preference</li>
      </ul>
    </div>
  </div>
</section>