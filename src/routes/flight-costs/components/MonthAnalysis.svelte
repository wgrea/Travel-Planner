<!-- src/routes/flight-costs/components/MonthAnalysis.svelte -->
<script lang="ts">
  import { getCountriesForMonthAnalysis, getCountryRegion } from '$lib/utils/flightUtils';
  import { selectedCurrency } from '$lib/stores/currency';
  import type { FlightPattern } from '$lib/data/flightPatternData';
  import { convertCurrency } from '$lib/utils/currency'; // ADD THIS


  // Use $props() for runes mode
  const { selectedMonth: initialMonth = '', originCountry = 'United States' } = $props<{
    selectedMonth?: string;
    originCountry?: string;
  }>();

  // Create reactive state
  let selectedMonth = $state(initialMonth);
  let origin = $state(originCountry);
  let analysisMode = $state<'category' | 'list'>('category');
  
  type CountryAnalysis = {
    country: string;
    region: string;
    monthCategory: 'cheapest' | 'sweetspot' | 'expensive';
    price: number;
    pattern: FlightPattern;
  };

  let analyzedCountries = $state<CountryAnalysis[]>([]);
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Analyze countries for selected month
  $effect(() => {
    if (selectedMonth) {
      analyzeCountriesForMonth();
    }
  });

  function analyzeCountriesForMonth() {
    // Use the new function that properly separates concerns
    const analysis = getCountriesForMonthAnalysis(selectedMonth, origin);
    
    // Transform to our analysis format
    const results: CountryAnalysis[] = [];
    
    // Add cheapest countries
    analysis.cheapest.forEach(item => {
      results.push({
        country: item.country,
        region: getCountryRegion(item.country),
        monthCategory: 'cheapest',
        price: item.price,
        pattern: item.pattern
      });
    });
    
    // Add sweetspot countries
    analysis.sweetspot.forEach(item => {
      results.push({
        country: item.country,
        region: getCountryRegion(item.country),
        monthCategory: 'sweetspot',
        price: item.price,
        pattern: item.pattern
      });
    });
    
    // Add expensive countries
    analysis.expensive.forEach(item => {
      results.push({
        country: item.country,
        region: getCountryRegion(item.country),
        monthCategory: 'expensive',
        price: item.price,
        pattern: item.pattern
      });
    });

    analyzedCountries = results;
  }

  function formatPrice(price: number): string {
    // Convert from USD to selected currency
    const convertedPrice = convertCurrency(price, 'USD', $selectedCurrency);
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: $selectedCurrency
    }).format(convertedPrice);
  }

  function getCategoryStats(category: CountryAnalysis['monthCategory']) {
    const countries = analyzedCountries.filter(c => c.monthCategory === category);
    const avgPrice = countries.length > 0 
      ? countries.reduce((sum, c) => sum + c.price, 0) / countries.length 
      : 0;
    
    return {
      count: countries.length,
      avgPrice,
      countries: countries.slice(0, 5) // Show top 5
    };
  }

  const cheapestStats = $derived(getCategoryStats('cheapest'));
  const sweetspotStats = $derived(getCategoryStats('sweetspot'));
  const expensiveStats = $derived(getCategoryStats('expensive'));
</script>

<div class="mt-8 space-y-6">
  <!-- Month Selector -->
  <div class="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/50">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-800">📅 Select a Month to Analyze</h3>
      <div class="flex gap-2">
        <button
          class="px-3 py-1 text-sm rounded-lg transition-colors {analysisMode === 'category' ? 'bg-blue-600 text-white' : 'bg-white/60'}"
          onclick={() => analysisMode = 'category'}
        >
          By Category
        </button>
        <button
          class="px-3 py-1 text-sm rounded-lg transition-colors {analysisMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white/60'}"
          onclick={() => analysisMode = 'list'}
        >
          Full List
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-2">
      {#each months as month}
        <button
          class="p-2 text-center rounded-lg transition-all {selectedMonth === month ? 'scale-105 shadow-lg' : 'hover:scale-102'} {month === selectedMonth ? 
            'bg-blue-600 text-white border-2 border-blue-400' : 
            'bg-white/60 hover:bg-white/80 border border-white/70'}"
          onclick={() => selectedMonth = month}
        >
          <div class="text-xs font-medium">{month.slice(0, 3)}</div>
        </button>
      {/each}
    </div>
  </div>

  {#if selectedMonth && analyzedCountries.length > 0}
    <div class="space-y-6">
      <!-- Analysis Title -->
      <div class="text-center">
        <h3 class="text-xl font-bold text-gray-800 mb-2">
          Best Countries to Visit in {selectedMonth}
        </h3>
        <p class="text-gray-600">
          Flights from {origin}, based on seasonal pricing patterns
        </p>
      </div>

      {#if analysisMode === 'category'}
        <!-- Category View -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Cheapest Countries -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200 shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span class="text-2xl">💰</span>
              </div>
              <div>
                <h4 class="font-bold text-green-800">Cheapest Months</h4>
                <p class="text-green-600 text-sm">{cheapestStats.count} countries</p>
              </div>
            </div>
            
            <div class="space-y-3">
              {#each cheapestStats.countries as country}
                <div class="bg-white/80 rounded-lg p-3 flex justify-between items-center hover:bg-white transition-colors">
                  <div>
                    <div class="font-medium text-gray-900">{country.country}</div>
                    <div class="text-xs text-gray-500">{country.region}</div>
                    <div class="text-xs text-green-600 mt-1">
                      {country.pattern.cheapestMonths?.join(', ')}
                    </div>
                  </div>
                  <div class="text-green-700 font-bold">{formatPrice(country.price)}</div>
                </div>
              {:else}
                <div class="text-center text-gray-500 py-4">No cheap countries this month</div>
              {/each}
            </div>
          </div>

          <!-- Sweet Spot Countries -->
          <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-5 border border-yellow-200 shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span class="text-2xl">🎯</span>
              </div>
              <div>
                <h4 class="font-bold text-yellow-800">Sweet Spot Months</h4>
                <p class="text-yellow-600 text-sm">{sweetspotStats.count} countries</p>
              </div>
            </div>
            
            <div class="space-y-3">
              {#each sweetspotStats.countries as country}
                <div class="bg-white/80 rounded-lg p-3 flex justify-between items-center hover:bg-white transition-colors">
                  <div>
                    <div class="font-medium text-gray-900">{country.country}</div>
                    <div class="text-xs text-gray-500">{country.region}</div>
                    <div class="text-xs text-yellow-600 mt-1">
                      Sweet spot: {country.pattern.sweetSpot?.join(', ')}
                    </div>
                  </div>
                  <div class="text-yellow-700 font-bold">{formatPrice(country.price)}</div>
                </div>
              {:else}
                <div class="text-center text-gray-500 py-4">No sweet spot countries this month</div>
              {/each}
            </div>
          </div>

          <!-- Expensive Countries -->
          <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-5 border border-red-200 shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span class="text-2xl">💸</span>
              </div>
              <div>
                <h4 class="font-bold text-red-800">Peak Season Months</h4>
                <p class="text-red-600 text-sm">{expensiveStats.count} countries</p>
              </div>
            </div>
            
            <div class="space-y-3">
              {#each expensiveStats.countries as country}
                <div class="bg-white/80 rounded-lg p-3 flex justify-between items-center hover:bg-white transition-colors">
                  <div>
                    <div class="font-medium text-gray-900">{country.country}</div>
                    <div class="text-xs text-gray-500">{country.region}</div>
                    <div class="text-xs text-red-600 mt-1">
                      Peak: {country.pattern.expensiveMonths?.join(', ')}
                    </div>
                  </div>
                  <div class="text-red-700 font-bold">{formatPrice(country.price)}</div>
                </div>
              {:else}
                <div class="text-center text-gray-500 py-4">No expensive countries this month</div>
              {/each}
            </div>
          </div>
        </div>
        
        <!-- Data Source Explanation -->
        <div class="bg-blue-50/50 border border-blue-200 rounded-xl p-4 mt-6">
          <div class="flex items-center gap-2 text-blue-800 mb-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            <span class="font-medium">How this analysis works:</span>
          </div>
          <div class="text-sm text-blue-700">
            <p class="mb-1">• <strong>Flight Patterns</strong> define seasonal categories (cheapest/sweet spot/expensive months)</p>
            <p class="mb-1">• <strong>Route Costs</strong> provide actual flight prices for each origin-destination pair</p>
            <p>• Countries are categorized based on where the selected month falls in their seasonal pattern</p>
          </div>
        </div>
      {:else}
  <!-- Responsive List View -->
  <div class="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden border border-white/50">
    <!-- Desktop Table Header -->
    <div class="hidden md:grid md:grid-cols-12 gap-4 p-4 bg-white/80 border-b border-white/70">
      <div class="col-span-3 font-semibold text-gray-700">Country</div>
      <div class="col-span-2 font-semibold text-gray-700">Region</div>
      <div class="col-span-3 font-semibold text-gray-700">Seasonal Pattern</div>
      <div class="col-span-2 font-semibold text-gray-700">Months</div>
      <div class="col-span-2 font-semibold text-gray-700 text-right">Price</div>
    </div>
    
    <!-- Mobile/Desktop Content -->
    <div class="divide-y divide-white/50 max-h-96 overflow-y-auto">
      {#each analyzedCountries as country}
        <!-- Mobile Card View -->
        <div class="md:hidden p-4 border-b border-white/50 bg-white/40">
          <div class="flex justify-between items-start mb-2">
            <div>
              <div class="font-bold text-gray-900">{country.country}</div>
              <div class="text-sm text-gray-600">{country.region}</div>
            </div>
            <div class="text-right">
              <div class="font-bold text-lg {country.monthCategory === 'cheapest' ? 'text-green-700' : 
                   country.monthCategory === 'sweetspot' ? 'text-yellow-700' : 
                   'text-red-700'}">
                {formatPrice(country.price)}
              </div>
            </div>
          </div>
          
          <div class="mb-3">
            <span class="px-3 py-1 rounded-full text-xs font-medium 
              {country.monthCategory === 'cheapest' ? 'bg-green-100 text-green-800' : 
               country.monthCategory === 'sweetspot' ? 'bg-yellow-100 text-yellow-800' : 
               'bg-red-100 text-red-800'}">
              {country.monthCategory === 'cheapest' ? '💰 Cheapest Season' :
               country.monthCategory === 'sweetspot' ? '🎯 Sweet Spot' : '💸 Peak Season'}
            </span>
          </div>
          
          <div class="text-sm text-gray-600">
            <div class="font-medium mb-1">
              {#if country.monthCategory === 'cheapest'}
                Best Months:
              {:else if country.monthCategory === 'sweetspot'}
                Sweet Spot Months:
              {:else}
                Peak Months:
              {/if}
            </div>
            <div class="text-xs">
              {#if country.monthCategory === 'cheapest'}
                {country.pattern.cheapestMonths?.join(', ')}
              {:else if country.monthCategory === 'sweetspot'}
                {country.pattern.sweetSpot?.join(', ')}
              {:else}
                {country.pattern.expensiveMonths?.join(', ')}
              {/if}
            </div>
          </div>
        </div>
        
        <!-- Desktop Grid View -->
        <div class="hidden md:grid md:grid-cols-12 gap-4 p-4 hover:bg-white/50 transition-colors">
          <div class="col-span-3 font-medium text-gray-900">{country.country}</div>
          <div class="col-span-2 text-gray-600 text-sm">{country.region}</div>
          <div class="col-span-3">
            <span class="px-3 py-1 rounded-full text-xs font-medium 
              {country.monthCategory === 'cheapest' ? 'bg-green-100 text-green-800' : 
               country.monthCategory === 'sweetspot' ? 'bg-yellow-100 text-yellow-800' : 
               'bg-red-100 text-red-800'}">
              {country.monthCategory === 'cheapest' ? '💰 Cheapest Season' :
               country.monthCategory === 'sweetspot' ? '🎯 Sweet Spot' : '💸 Peak Season'}
            </span>
          </div>
          <div class="col-span-2 text-xs text-gray-600">
            {#if country.monthCategory === 'cheapest'}
              Cheap: {country.pattern.cheapestMonths?.join(', ')}
            {:else if country.monthCategory === 'sweetspot'}
              Sweet: {country.pattern.sweetSpot?.join(', ')}
            {:else}
              Peak: {country.pattern.expensiveMonths?.join(', ')}
            {/if}
          </div>
          <div class="col-span-2 text-right font-bold 
            {country.monthCategory === 'cheapest' ? 'text-green-700' : 
             country.monthCategory === 'sweetspot' ? 'text-yellow-700' : 
             'text-red-700'}">
            {formatPrice(country.price)}
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
      <!-- Summary Statistics -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div class="bg-white/60 p-4 rounded-xl border border-white/70">
          <div class="text-sm text-gray-600">Total Countries</div>
          <div class="text-2xl font-bold text-gray-900">{analyzedCountries.length}</div>
          <div class="text-xs text-gray-500">With available data</div>
        </div>
        <div class="bg-white/60 p-4 rounded-xl border border-white/70">
          <div class="text-sm text-gray-600">Average Price</div>
          <div class="text-2xl font-bold text-gray-900">
            {formatPrice(analyzedCountries.reduce((sum, c) => sum + c.price, 0) / analyzedCountries.length)}
          </div>
          <div class="text-xs text-gray-500">From {origin}</div>
        </div>
        <div class="bg-white/60 p-4 rounded-xl border border-white/70">
          <div class="text-sm text-gray-600">Best Value</div>
          <div class="text-xl font-bold text-green-700">
            {analyzedCountries.length > 0 ? analyzedCountries[0].country : 'None'}
          </div>
          <div class="text-xs text-green-600">{formatPrice(analyzedCountries[0]?.price || 0)}</div>
        </div>
        <div class="bg-white/60 p-4 rounded-xl border border-white/70">
          <div class="text-sm text-gray-600">Peak Season</div>
          <div class="text-xl font-bold text-red-700">
            {analyzedCountries.length > 0 ? analyzedCountries[analyzedCountries.length - 1].country : 'None'}
          </div>
          <div class="text-xs text-red-600">{formatPrice(analyzedCountries[analyzedCountries.length - 1]?.price || 0)}</div>
        </div>
      </div>
    </div>
  {:else if selectedMonth}
    <div class="text-center py-12 bg-white/40 rounded-xl border border-white/50">
      <div class="text-4xl mb-4">📊</div>
      <h3 class="text-xl font-semibold text-gray-700 mb-2">Analyzing Flight Data</h3>
      <p class="text-gray-600">Checking seasonal patterns and flight prices for {selectedMonth}...</p>
      <div class="mt-4">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    </div>
  {:else}
    <div class="text-center py-12 bg-white/40 rounded-xl border border-white/50">
      <div class="text-4xl mb-4">✈️</div>
      <h3 class="text-xl font-semibold text-gray-700 mb-2">Select a Month to Begin Analysis</h3>
      <p class="text-gray-600">Choose a month in 'By Country' to see a list of months here.</p>
      <div class="mt-4 text-sm text-gray-500">
        <p>• <strong>Cheapest</strong>: Low season, best prices</p>
        <p>• <strong>Sweet Spot</strong>: Good weather & reasonable prices</p>
        <p>• <strong>Peak Season</strong>: Best weather but highest prices</p>
      </div>
    </div>
  {/if}
</div>
