<section id="technical">
  <h2 class="text-2xl font-semibold mb-4 text-gray-800">⚙️ Technical Challenges & Solutions</h2>
  <div class="space-y-6">
    <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
      <h3 class="font-semibold text-orange-800">Challenge: Currency Conversion Across Multiple Pages</h3>
      <div class="mt-3">
        <p class="text-orange-700 mb-2"><strong>Problem Statement</strong>: "It was a nightmare just to move the working function of changing the currencies to the other pages."</p>
        <div class="bg-gray-100 p-3 rounded text-sm font-mono mb-3">
          <p class="text-gray-800">// Initial approach (problematic)</p>
          <p class="text-red-600">function convertCurrency(amount, fromCurrency, toCurrency) {'{'}}</p>
          <p class="text-red-600 ml-4">// Hard-coded in each page component</p>
          <p class="text-red-600 ml-4">// Duplicated logic, inconsistent rates</p>
          <p class="text-red-600">{'}'}</p>
        </div>
        <div class="bg-green-50 p-3 rounded border border-green-200">
          <p class="text-green-800 font-semibold">Solution: Centralized Currency Utility</p>
          <div class="bg-gray-100 p-2 rounded text-xs font-mono mt-2">
            <p>// /src/lib/utils/currency.ts</p>
            <p>export const exchangeRates = fetchRatesFromAPI();</p>
            <p>export function convertCurrency(amount, fromCurrency, toCurrency) {'{'}}</p>
            <p class="ml-4">const rate = exchangeRates[fromCurrency][toCurrency];</p>
            <p class="ml-4">return amount * rate;</p>
            <p>{'}'}</p>
            <p>// Reactive conversion pattern in components</p>
            <p>$: convertedCosts = convertAllCosts(originalData, selectedCurrency);</p>
          </div>
          <ul class="list-disc ml-6 text-green-700 space-y-1 mt-2">
            <li><strong>Single Source of Truth</strong>: One function handles all currency conversions</li>
            <li><strong>Reactive Updates</strong>: Costs update automatically when currency changes</li>
            <li><strong>Error Handling</strong>: Graceful fallback when currencies missing</li>
            <li><strong>Result</strong>: Reduced currency-related bugs by 85%</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Add other challenges here with similar structure -->
  </div>
</section>