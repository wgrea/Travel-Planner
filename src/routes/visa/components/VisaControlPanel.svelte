<!-- src/routes/visa/components/VisaControlPanel.svelte -->
<script lang="ts">
  import CountrySelector from '$lib/components/CountrySelector.svelte';
  import { getAllRegionsUnified, getSubregionForCountry, getRegionForCountry } from '$lib/utils/regionUtils';
  import { visaData } from '$lib/data/visa';
  
  let {
    homeCountry,
    selectedDestination,
    selectedRegion,
    selectedSubregion,
    visaCounts,
    onPassportChange,
    onDestinationChange,
    onRegionChange,
    onSubregionChange
  } = $props<{
    homeCountry: string;
    selectedDestination: string;
    selectedRegion: string;
    selectedSubregion: string;
    visaCounts: { totalVisas: number; visaFree: number; nomadVisas: number };
    onPassportChange: (country: string) => void;
    onDestinationChange: (country: string) => void;
    onRegionChange: (region: string) => void;
    onSubregionChange: (subregion: string) => void;
  }>();
  
  // Get all regions for region dropdown
  const allRegions = ['All Regions', ...getAllRegionsUnified()];
  
  // Get subregions for selected region
  const subregionsForSelectedRegion = (): string[] => {
    if (selectedRegion === 'All Regions') {
      return ['All Subregions'];
    }
    
    const subregions = new Set<string>();
    const allDestinations = Object.keys(visaData);
    
    allDestinations.forEach((country: string) => {
      const destCountries = Object.keys(visaData[country] || {});
      destCountries.forEach((passport: string) => {
        if (getRegionForCountry(passport) === selectedRegion) {
          const subregion = getSubregionForCountry(passport);
          if (subregion && subregion !== selectedRegion) {
            subregions.add(subregion);
          }
        }
      });
    });
    
    return ['All Subregions', ...Array.from(subregions).sort()];
  };
  
  // Function to get available visa countries for the CountrySelector
  function getAvailableVisaCountries() {
    const destinations = Object.keys(visaData);
    const countries = destinations.map((country: string) => ({
      country,
      region: getRegionForCountry(country) || 'Global',
      subregion: getSubregionForCountry(country) || getRegionForCountry(country) || 'General'
    }));
    
    // Filter by selected region if not "All Regions"
    let filtered = countries;
    if (selectedRegion !== 'All Regions') {
      filtered = filtered.filter((c: any) => c.region === selectedRegion);
    }
    
    // Filter by selected subregion if not "All Subregions"
    if (selectedSubregion !== 'All Subregions') {
      filtered = filtered.filter((c: any) => c.subregion === selectedSubregion);
    }
    
    return filtered;
  }
</script>

<div class="space-y-6">
  <!-- Single Unified Card -->
  <div class="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <!-- Card Header with Title -->
    <div class="p-6 border-b border-gray-100">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
          <span class="text-2xl">🌍</span>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-gray-900">Visa & Destination Planner</h2>
          <p class="text-sm text-gray-600">Check visa requirements and find destinations</p>
        </div>
      </div>
    </div>
    
    <!-- Main Content Area -->
    <div class="p-6 space-y-8">
      <!-- Passport Section -->
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <span class="text-xl text-blue-600">📘</span>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Your Passport</h3>
            <p class="text-sm text-gray-600">Select your passport country</p>
          </div>
        </div>
        
        <!-- Passport Country Selector -->
        <div class="ml-13"> <!-- Added indentation for visual hierarchy -->
          <CountrySelector
            selectorType="passport"
            selectedCountry={homeCountry}
            selectedRegion={selectedRegion}
            onCountryChange={onPassportChange}
            onRegionChange={onRegionChange}
            variant="minimal"
          />
        </div>
      </div>
      
      <!-- Visa Stats Card -->
      <div class="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-xl p-5 border border-blue-100/80">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h4 class="font-medium text-gray-900">Visa Availability</h4>
            <p class="text-sm text-gray-600 mt-1">
              {selectedRegion === 'All Regions' 
                ? 'Worldwide destinations' 
                : selectedSubregion === 'All Subregions'
                  ? `Destinations in ${selectedRegion}`
                  : `Destinations in ${selectedSubregion}`}
            </p>
          </div>
          <div class="text-2xl">✨</div>
        </div>
        
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="text-center p-3 bg-white/60 rounded-lg border border-gray-100">
            <div class="text-2xl font-bold text-gray-900">{visaCounts.totalVisas}</div>
            <div class="text-xs text-gray-600 mt-1">Total</div>
          </div>
          <div class="text-center p-3 bg-white/60 rounded-lg border border-green-100">
            <div class="text-2xl font-bold text-green-600">{visaCounts.visaFree}</div>
            <div class="text-xs text-green-700 mt-1">Visa-Free</div>
          </div>
          <div class="text-center p-3 bg-white/60 rounded-lg border border-purple-100">
            <div class="text-2xl font-bold text-purple-600">{visaCounts.nomadVisas}</div>
            <div class="text-xs text-purple-700 mt-1">Nomad</div>
          </div>
        </div>
        
        <div class="text-center p-3 bg-white/60 rounded-lg border border-gray-100">
          <p class="text-sm text-gray-700">
            <span class="font-medium">{homeCountry}</span> passport holders can travel to 
            <span class="font-medium text-blue-600"> {visaCounts.totalVisas} destinations</span> worldwide
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
        
        <!-- Destination Country Selector -->
        <div class="ml-13"> <!-- Added indentation for visual hierarchy -->
          <CountrySelector
            selectorType="destination"
            selectedCountry={selectedDestination}
            selectedRegion={selectedRegion}
            countryData={getAvailableVisaCountries()}
            onCountryChange={onDestinationChange}
            onRegionChange={onRegionChange}
            mode="visa"
            variant="minimal"
            selectedPassport={homeCountry}
            onPassportChange={onPassportChange}
          />
        </div>
      </div>
    </div>
    
    <!-- Card Footer with Quick Info -->
    <div class="p-6 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Real-time visa data</span>
          </div>
        </div>
        <div class="text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>Filter by region and subregion</span>
          </div>
        </div>
        <div class="text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-purple-500"></span>
            <span>Digital nomad friendly</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>