<!-- src/routes/flight-costs/components/FlightControlPanel.svelte -->
<script lang="ts">
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import { getAllRegionsUnified, getRegionForCountry, getSubregionForCountry } from '$lib/utils/regionUtils';
  import { routeCosts } from '$lib/data/routeCosts';
  import { getCurrentFlightData } from '$lib/utils/flightUtils';
  
  let {
    originCountry,
    selectedDestination,
    selectedRegion,
    flightCounts,
    onOriginChange,
    onDestinationChange,
    onRegionChange
  } = $props<{
    originCountry: string;
    selectedDestination: string;
    selectedRegion: string;
    flightCounts: { totalFlights: number; directFlights: number; reverseFlights: number };
    onOriginChange: (country: string) => void;
    onDestinationChange: (country: string) => void;
    onRegionChange: (region: string) => void;
  }>();
  
  // Get all regions for region dropdown
  const allRegions = ['All Regions', ...getAllRegionsUnified()];
  
  // Function to get available flight countries for the CountrySelector
  function getAvailableFlightCountries() {
    const allCountries = new Set<string>();
    
    // Get all countries that have flight data (as origins or destinations)
    Object.keys(routeCosts).forEach(origin => {
      allCountries.add(origin);
      Object.keys(routeCosts[origin] || {}).forEach(dest => allCountries.add(dest));
    });
    
    // Convert to objects with region info
    const countries = Array.from(allCountries).map((country: string) => {
      const region = getRegionForCountry(country);
      const subregion = getSubregionForCountry(country);
      const flightPattern = getCurrentFlightData(country);
      
      return {
        country,
        region: region || 'Global',
        subregion: subregion || region || 'General',
        cities: flightPattern?.cities || [],
        averagePrice: flightPattern?.averagePrice,
        sweetSpot: flightPattern?.sweetSpot,
        cheapestMonths: flightPattern?.cheapestMonths
      };
    });
    
    // Filter by selected region if not "All Regions"
    let filtered = countries;
    if (selectedRegion !== 'All Regions') {
      filtered = filtered.filter((c: any) => {
        // Check if region matches
        if (c.region === selectedRegion) return true;
        
        // Check if subregion matches
        if (c.subregion === selectedRegion) return true;
        
        // Special case for Europe
        if (selectedRegion === 'Europe' && c.region?.includes('Europe')) return true;
        
        return false;
      });
    }
    
    // Filter to only destinations available from origin country
    const availableFromOrigin = new Set<string>();
    
    // Check direct routes
    if (routeCosts[originCountry]) {
      Object.keys(routeCosts[originCountry]).forEach(dest => availableFromOrigin.add(dest));
    }
    
    // Check reverse routes (bidirectional)
    Object.entries(routeCosts).forEach(([country, routes]) => {
      if (routes[originCountry] && country !== originCountry) {
        availableFromOrigin.add(country);
      }
    });
    
    return filtered.filter((c: any) => availableFromOrigin.has(c.country));
  }
</script>

<div class="space-y-6">
  <!-- Single Unified Card -->
  <div class="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <!-- Card Header with Title -->
    <div class="p-6 border-b border-gray-100">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
          <span class="text-2xl">✈️</span>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-gray-900">Flight Route Planner</h2>
          <p class="text-sm text-gray-600">Find flights and compare seasonal prices</p>
        </div>
      </div>
    </div>
    
    <!-- Main Content Area -->
    <div class="p-6 space-y-8">
      <!-- Origin Section -->
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <span class="text-xl text-blue-600">🛫</span>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Flying From</h3>
            <p class="text-sm text-gray-600">Select your departure country</p>
          </div>
        </div>
        
        <!-- Origin Country Selector -->
        <div class="ml-13">
          <CountrySelector
            selectorType="origin"
            selectedCountry={originCountry}
            selectedRegion="All Regions"
            onCountryChange={onOriginChange}
            onRegionChange={() => {}}
            variant="minimal"
          />
        </div>
      </div>
      
      <!-- Flight Stats Card -->
      <div class="bg-gradient-to-r from-blue-50/80 to-sky-50/80 rounded-xl p-5 border border-blue-100/80">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h4 class="font-medium text-gray-900">Flight Availability</h4>
            <p class="text-sm text-gray-600 mt-1">
              {selectedRegion === 'All Regions' 
                ? 'Worldwide destinations' 
                : `Destinations in ${selectedRegion}`}
            </p>
          </div>
          <div class="text-2xl">✨</div>
        </div>
        
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="text-center p-3 bg-white/60 rounded-lg border border-gray-100">
            <div class="text-2xl font-bold text-gray-900">{flightCounts.totalFlights}</div>
            <div class="text-xs text-gray-600 mt-1">Total</div>
          </div>
          <div class="text-center p-3 bg-white/60 rounded-lg border border-green-100">
            <div class="text-2xl font-bold text-green-600">{flightCounts.directFlights}</div>
            <div class="text-xs text-green-700 mt-1">Direct</div>
          </div>
          <div class="text-center p-3 bg-white/60 rounded-lg border border-purple-100">
            <div class="text-2xl font-bold text-purple-600">{flightCounts.reverseFlights}</div>
            <div class="text-xs text-purple-700 mt-1">Reverse</div>
          </div>
        </div>
        
        <div class="text-center p-3 bg-white/60 rounded-lg border border-gray-100">
          <p class="text-sm text-gray-700">
            From <span class="font-medium">{originCountry}</span> to 
            <span class="font-medium text-blue-600"> {flightCounts.totalFlights} destinations</span> worldwide
          </p>
          <p class="text-xs text-gray-500 mt-1">
            {getAvailableFlightCountries().length} available in {selectedRegion}
          </p>
        </div>
      </div>
      
      <!-- Destination Section -->
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
            <span class="text-xl text-green-600">🏁</span>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Destination</h3>
            <p class="text-sm text-gray-600">Select your destination country</p>
          </div>
        </div>
        
        <!-- Region Filter -->
        <div class="ml-13">
          <div class="flex items-center gap-3 mb-3">
            <span class="text-sm text-gray-700 font-medium">Filter Destinations by Region</span>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            {#each allRegions as region}
              <button
                type="button"
                onclick={() => onRegionChange(region)}
                class={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedRegion === region
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            {/each}
          </div>
          <div class="text-sm text-gray-600 mb-4">
            {selectedRegion === 'All Regions' 
              ? 'Showing all destinations worldwide'
              : `Showing destinations in ${selectedRegion}`}
          </div>
        </div>
        
        <!-- In the Destination Country Selector section of FlightControlPanel.svelte -->
        <div class="ml-13">
        <CountrySelector
            selectorType="destination"
            selectedCountry={selectedDestination}
            selectedRegion={selectedRegion}
            countryData={getAvailableFlightCountries()}
            onCountryChange={onDestinationChange}
            onRegionChange={onRegionChange}
            mode="flight"
            variant="minimal"
            selectedPassport={originCountry} 
        />
        </div>
      </div>
    </div>
    
    <!-- Card Footer with Quick Info -->
    <div class="p-6 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Global departure selection</span>
          </div>
        </div>
        <div class="text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Region-filtered destinations</span>
          </div>
        </div>
        <div class="text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            <span>Bidirectional flight data</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>