<!-- src/routes/flight-costs/components/FlightControlPanel.svelte -->
<script lang="ts">
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import { getAllCountries, getCurrentFlightData } from '$lib/utils/flightUtils';
  import { routeCosts } from '$lib/data/routeCosts';
  import { getAllRegionsUnified, getRegionForCountry, getSubregionForCountry } from '$lib/utils/regionUtils';
  import type { CountryData } from '$lib/utils/flightUtils';
  
  // Export only the props we're actually using
  export let originCountry: string;
  export let selectedCountry: string;
  export let selectedRegion: string;
  export let onOriginChange: (country: string) => void;
  export let onDestinationChange: (country: string) => void;
  export let onRegionChange: (region: string) => void;
  
  // Get all regions for destination filtering
  const allRegions = ['All Regions', ...getAllRegionsUnified()];
  
  // Check if flight exists in EITHER direction
  function hasFlightRoute(origin: string, destination: string): boolean {
    // Check origin → destination
    if (routeCosts[origin]?.[destination]) return true;
    
    // Check destination → origin (bidirectional)
    if (routeCosts[destination]?.[origin]) return true;
    
    return false;
  }
  
  // Get ALL destinations available from current origin (bidirectional, no region filter)
  function getAvailableDestinationsFromOrigin(): string[] {
    const destinations = new Set<string>();
    
    // Get all unique countries from routeCosts (both as origins and destinations)
    const allCountries = new Set<string>();
    
    // Add all origin countries
    Object.keys(routeCosts).forEach(origin => allCountries.add(origin));
    
    // Add all destination countries
    Object.values(routeCosts).forEach(destinationsObj => {
      Object.keys(destinationsObj).forEach(dest => allCountries.add(dest));
    });
    
    // Check each country if there's a flight route from origin
    allCountries.forEach(destination => {
      if (hasFlightRoute(originCountry, destination) && destination !== originCountry) {
        destinations.add(destination);
      }
    });
    
    return Array.from(destinations);
  }
  
  // Get destination CountryData objects based on selected origin (WITH region filtering)
  function getAvailableDestinations(): CountryData[] {
    const destinationsFromOrigin = getAvailableDestinationsFromOrigin();
    
    // Create CountryData objects for each available destination
    const availableDestinations = destinationsFromOrigin.map((country: string) => {
      const region = getRegionForCountry(country);
      const subregion = getSubregionForCountry(country);
      
      // Get flight pattern data for additional info
      const flightPatternData = getCurrentFlightData(country);
      
      return {
        country,
        region: region || 'Global',
        subregion: subregion || region || 'General',
        cities: flightPatternData?.cities || [],
        averagePrice: flightPatternData?.averagePrice,
        sweetSpot: flightPatternData?.sweetSpot,
        cheapestMonths: flightPatternData?.cheapestMonths
      };
    });
    
    // Filter by selected region if not "All Regions"
    let filteredDestinations = availableDestinations;
    if (selectedRegion !== 'All Regions') {
      filteredDestinations = filteredDestinations.filter((c: CountryData) => c.region === selectedRegion);
    }
    
    return filteredDestinations;
  }
  
  // Get number of ALL destinations from current origin (no region filter)
  function getDestinationCount(): number {
    return getAvailableDestinationsFromOrigin().length;
  }
  
  // Get destination count for the selected region
  function getFilteredDestinationCount(): number {
    return getAvailableDestinations().length;
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
        
        <!-- Origin Country Selector - NO REGION FILTERING for origins! -->
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
        
        <!-- Origin Stats -->
        <div class="bg-gradient-to-r from-blue-50/80 to-sky-50/80 rounded-xl p-4 border border-blue-100">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-medium text-gray-900 mb-1">Available Destinations</h4>
              <p class="text-sm text-gray-600">
                From {originCountry} to {getDestinationCount()} countries worldwide
              </p>
              <p class="text-xs text-gray-500 mt-1">
                Filtered to {selectedRegion}: {getFilteredDestinationCount()} countries
              </p>
            </div>
            <div class="text-2xl">🌍</div>
          </div>
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
        
        <!-- Region Filter for Destinations -->
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
        
        <!-- Debug Info -->
        <div class="bg-blue-50/80 rounded-lg p-3 border border-blue-200">
          <div class="text-sm text-blue-800">
            <div class="font-medium mb-1">Flight Data:</div>
            <div class="text-xs space-y-1">
              <div><span class="font-medium">Departure:</span> {originCountry}</div>
              <div><span class="font-medium">Total routes:</span> {getDestinationCount()} countries</div>
              <div><span class="font-medium">Region filter:</span> {selectedRegion}</div>
              <div><span class="font-medium">Filtered results:</span> {getFilteredDestinationCount()} countries</div>
              {#if getFilteredDestinationCount() === 0 && selectedRegion !== 'All Regions'}
                <div class="font-medium text-amber-700 mt-2">
                  💡 No flights from {originCountry} to {selectedRegion}. 
                  Try selecting "All Regions" to see worldwide options.
                </div>
              {/if}
            </div>
          </div>
        </div>
        
        <!-- Destination Country Selector -->
        {#if getFilteredDestinationCount() > 0}
          <div class="ml-13">
            <CountrySelector
              selectorType="destination"
              selectedCountry={selectedCountry}
              selectedRegion={selectedRegion}
              countryData={getAvailableDestinations()}
              onCountryChange={onDestinationChange}
              onRegionChange={onRegionChange}
              mode="flight"
              originCountry={originCountry}
              variant="minimal"
            />
          </div>
        {:else if selectedRegion !== 'All Regions'}
          <!-- Show "no results" only when region is filtered -->
          <div class="text-center py-6 bg-gray-50/50 rounded-lg border border-gray-200">
            <div class="text-4xl mb-3">🌎</div>
            <h4 class="font-medium text-gray-700 mb-2">No Flights to {selectedRegion}</h4>
            <p class="text-sm text-gray-600">
              No flight data found from {originCountry} to {selectedRegion}
            </p>
            <p class="text-xs text-gray-500 mt-2">
              This could mean:
            </p>
            <ul class="text-xs text-gray-600 text-left mt-2 space-y-1 max-w-sm mx-auto">
              <li>• No direct flights to this region from your departure country</li>
              <li>• Flight data hasn't been added for this route yet</li>
              <li>• Consider connecting flights via major hubs</li>
            </ul>
            <button
              type="button"
              onclick={() => onRegionChange('All Regions')}
              class="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
            >
              Show All Regions Worldwide
            </button>
          </div>
        {:else}
          <!-- This shouldn't happen, but just in case -->
          <div class="text-center py-6 bg-gray-50/50 rounded-lg border border-gray-200">
            <div class="text-4xl mb-3">✈️</div>
            <h4 class="font-medium text-gray-700 mb-2">Select a Departure Country</h4>
            <p class="text-sm text-gray-600">
              Choose a departure country above to see available destinations
            </p>
          </div>
        {/if}
        
        <!-- Flight Route Info -->
        {#if selectedCountry && getAvailableDestinations().some((d: CountryData) => d.country === selectedCountry)}
          <div class="bg-gradient-to-r from-green-50/80 to-emerald-50/80 rounded-xl p-4 border border-green-100">
            <div class="flex items-center justify-between mb-3">
              <div>
                <h4 class="font-medium text-gray-900">Selected Route</h4>
                <p class="text-sm text-gray-600 mt-1">
                  {routeCosts[originCountry]?.[selectedCountry] 
                    ? 'Direct flight route' 
                    : 'Reverse route data (flights in opposite direction)'}
                </p>
              </div>
              <div class="text-2xl">↔️</div>
            </div>
            <div class="text-center p-3 bg-white/60 rounded-lg border border-gray-100">
              <p class="text-lg font-semibold text-gray-800">
                ✈️ {originCountry} → {selectedCountry}
              </p>
              <p class="text-sm text-gray-600 mt-1">
                {getFilteredDestinationCount()} destinations available in {selectedRegion}
              </p>
            </div>
          </div>
        {/if}
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