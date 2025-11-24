<!-- src/routes/living-costs/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import { minimalData } from '$lib/data/minimalData';
  import LivingCostCountrySelector from './components/LivingCostCountrySelector.svelte';
  import type { CountryData } from '$lib/components/CountrySelector.svelte';
  import { livingCostsByRegion } from '$lib/data/livingCostData';
  import type { RegionData } from '$lib/data/livingCostData';
  import { convertCurrency, formatCurrency, currencySymbols } from '$lib/utils/currency';
  
  // Import components
  import AccommodationSelector from './components/AccommodationSelector.svelte';
  import TravelStyleSelector from './components/TravelStyleSelector.svelte';
  import CostBreakdown from './components/CostBreakdown.svelte';
  import TripBudgetCalculator from './components/TripBudgetCalculator.svelte';
  import MoneySavingTips from './components/MoneySavingTips.svelte';
  import BackgroundElements from './components/BackgroundElements.svelte';

  // Types
  type TravelStyle = 'budget' | 'midrange' | 'luxury';
  type AccommodationType = 'hostel' | 'guesthouse' | 'hotel' | 'apartment' | 'luxury';

  let selectedCountry: string = '';
  let selectedRegion: string = '';
  let travelStyle: TravelStyle = 'midrange';
  let accommodationType: AccommodationType = 'hotel';
  let tripLength: number = 30;
  let travelerCount: number = 1;
  let totalCost: number = 0;
  let isLoading = false;
  
  // Currency state
  let selectedCurrency = 'USD';

    // Add debug logging
  $: console.log('All regions:', getAllRegions());
  $: console.log('Selected region:', selectedRegion);
  $: console.log('Countries for selected region:', getCountriesByRegion(selectedRegion));
  $: console.log('All countries:', getAllCountries());

  // Replace your existing debug logging with this:
  $: {
    console.log('=== DEBUGGING COUNTRY SELECTOR ===');
    console.log('selectedRegion:', selectedRegion);
    console.log('getCountriesByRegion(selectedRegion):', getCountriesByRegion(selectedRegion));
    console.log('getAllCountries():', getAllCountries());
    console.log('All regions:', getAllRegions());
    console.log('All countries count:', getAllCountries().length);
    console.log('All country names:', getAllCountries().map(c => c.country));
  }

  const availableCurrencies = Object.keys(currencySymbols);

  // Get all regions including flattened subregions
  function getAllRegions(): string[] {
    const regions: string[] = [];
    
    livingCostsByRegion.forEach(region => {
      if (region.region === "Europe" && region.subregions) {
        // For Europe, add all subregions to the main list
        region.subregions.forEach(subregion => {
          regions.push(subregion.subregion);
        });
      } else {
        // For all other regions, add the region name
        regions.push(region.region);
      }
    });
    
    return regions;
  }

  function getAllCountries(): { country: string; region: string; cities: string[] }[] {
    const allCountries: { country: string; region: string; cities: string[] }[] = [];
    
    livingCostsByRegion.forEach(region => {
      if (region.subregions) {
        region.subregions.forEach(subregion => {
          subregion.countries.forEach(country => {
            allCountries.push({
              country: country.country,
              region: subregion.subregion,
              cities: country.cities || []
            });
          });
        });
      } else if (region.countries) {
        region.countries.forEach(country => {
          allCountries.push({
            country: country.country,
            region: region.region,
            cities: country.cities || []
          });
        });
      }
    });
    
    return allCountries.sort((a, b) => a.country.localeCompare(b.country));
  }

  // Replace your getCountriesByRegion function with this:
  function getCountriesByRegion(regionName: string): CountryData[] {
    // If no region selected, return all countries
    if (!regionName) {
      return getAllCountries();
    }
    
    // Check if this is a European subregion
    const europeRegion = livingCostsByRegion.find(r => r.region === "Europe");
    if (europeRegion?.subregions) {
      const subregion = europeRegion.subregions.find(sr => sr.subregion === regionName);
      if (subregion) {
        // Return countries with full CountryData structure
        return subregion.countries.map(country => ({
          country: country.country,
          region: regionName,
          cities: country.cities || [],
          averagePrice: country.baseCosts?.dailyLiving?.midrange || 700
        }));
      }
    }
    
    // It's a regular region - filter from getAllCountries()
    return getAllCountries().filter(country => country.region === regionName);
  }

  function handleCountryChange(country: string) {
    selectedCountry = country;
    const countryData = getAllCountries().find(c => c.country === country);
    if (countryData && countryData.region) {
      selectedRegion = countryData.region;
    }
  }

  function handleRegionChange(region: string) {
    selectedRegion = region;
    
    if (region) {
      const countriesInRegion = getCountriesByRegion(region);
      if (countriesInRegion.length > 0) {
        selectedCountry = countriesInRegion[0].country;
      }
    } else {
      selectedCountry = getAllCountries()[0]?.country || '';
    }
  }

  function setTravelStyle(style: TravelStyle) {
    travelStyle = style;
  }

  function setAccommodationType(type: AccommodationType) {
    accommodationType = type;
  }

  function setTripLength(days: number) {
    tripLength = days;
  }

  function setTravelerCount(count: number) {
    travelerCount = count;
  }
  
  // Currency handler
  function handleCurrencyChange(event: Event) {
    selectedCurrency = (event.target as HTMLSelectElement).value;
    localStorage.setItem('preferred-currency', selectedCurrency);
  }

  // Get current living cost data
  $: currentLivingCostData = livingCostsByRegion
    .flatMap(region => {
      if (region.subregions) {
        return region.subregions.flatMap(subregion => subregion.countries);
      }
      return region.countries || [];
    })
    .find(country => country.country === selectedCountry);

  // Calculate total cost based on selected travel style
  $: if (currentLivingCostData && tripLength && travelerCount) {
    const dailyCost = currentLivingCostData.baseCosts.dailyLiving[travelStyle];
    totalCost = dailyCost * tripLength * travelerCount;
    
    // Convert to selected currency if needed
    if (currentLivingCostData.currency !== selectedCurrency) {
      totalCost = convertCurrency(totalCost, currentLivingCostData.currency, selectedCurrency);
    }
  }
  
  // At the top of your script, after variable declarations
  $: if (!selectedRegion && getAllRegions().length > 0) {
    selectedRegion = getAllRegions()[0];
  }

  $: if (!selectedCountry && getAllCountries().length > 0) {
    selectedCountry = getAllCountries()[0].country;
  }

  // NEW: Set initial country when region is set
  $: if (selectedRegion && !selectedCountry) {
    const countries = getCountriesByRegion(selectedRegion);
    if (countries.length > 0) {
      selectedCountry = countries[0].country;
    }
  }

  // Add these reactive conversions (replace any existing ones)
  $: convertedDailyLiving = currentLivingCostData ? {
    budget: convertCurrency(currentLivingCostData.baseCosts.dailyLiving.budget, currentLivingCostData.currency, selectedCurrency),
    midrange: convertCurrency(currentLivingCostData.baseCosts.dailyLiving.midrange, currentLivingCostData.currency, selectedCurrency),
    luxury: convertCurrency(currentLivingCostData.baseCosts.dailyLiving.luxury, currentLivingCostData.currency, selectedCurrency)
  } : null;

  $: convertedFood = currentLivingCostData ? {
    streetFood: convertCurrency(currentLivingCostData.baseCosts.food.streetFood, currentLivingCostData.currency, selectedCurrency),
    restaurantMeal: convertCurrency(currentLivingCostData.baseCosts.food.restaurantMeal, currentLivingCostData.currency, selectedCurrency),
    groceryWeekly: convertCurrency(currentLivingCostData.baseCosts.food.groceryWeekly, currentLivingCostData.currency, selectedCurrency)
  } : null;

  $: convertedTransport = currentLivingCostData ? {
    localBus: convertCurrency(currentLivingCostData.baseCosts.transportation.localBus, currentLivingCostData.currency, selectedCurrency),
    taxi: convertCurrency(currentLivingCostData.baseCosts.transportation.taxi, currentLivingCostData.currency, selectedCurrency),
    intercityBus: convertCurrency(currentLivingCostData.baseCosts.transportation.intercityBus, currentLivingCostData.currency, selectedCurrency),
    train: convertCurrency(currentLivingCostData.baseCosts.transportation.train, currentLivingCostData.currency, selectedCurrency)
  } : null;

</script>

<div class="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 px-4 py-8 relative overflow-hidden">
  <!-- Background Elements -->
  <BackgroundElements />
  
  <div class="max-w-6xl mx-auto relative z-10">
    
    <!-- Back Button -->
    <button on:click={() => goto('/')} class="group mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm tracking-wide">Back to Main Menu</span>
    </button>

    <!-- Before You Start Section -->
    <div class="mb-12 text-center">
      <p class="text-gray-700 text-sm font-light mb-4 tracking-wide">
        Before planning your budget, make sure you've checked these essentials
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button on:click={() => goto('/visa')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          📝 Visa Requirements
        </button>
        <button on:click={() => goto('/flight-costs')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          ✈️ Flight Costs
        </button>
        <button on:click={() => goto('/filters')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          🔍 Destination Finder
        </button>
      </div>
    </div>

    <!-- Header -->
    <div class="mb-12 text-center">
      <h1 class="text-5xl font-light mb-4 text-gray-900 tracking-tight">Living Costs</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Plan your budget with detailed cost breakdowns and personalized expense tracking
      </p>
    </div>

    <!-- Currency Selector -->
    <div class="mb-6 flex justify-center">
      <div class="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 p-4 shadow-lg">
        <label for="currency-select" class="mr-3 font-medium text-gray-700">Display prices in:</label>
        <select 
          id="currency-select" 
          bind:value={selectedCurrency}
          on:change={handleCurrencyChange}
          class="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        >
          {#each availableCurrencies as currency}
            <option value={currency}>
              {currency} ({currencySymbols[currency]})
            </option>
          {/each}
        </select>
      </div>
    </div>

    <!-- Country Selector Section -->
    <div class="mb-12 p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div class="rounded-lg border border-gray-200 bg-white overflow-hidden">
        <LivingCostCountrySelector 
          {selectedCountry}
          {selectedRegion}
          countryData={getAllCountries()}
          onCountryChange={handleCountryChange}
          onRegionChange={handleRegionChange}
        />
      </div>
    </div>

    {#if isLoading}
      <div class="text-center py-12">
        <div class="inline-block w-8 h-8 border-2 border-gray-300 border-t-emerald-500 rounded-full animate-spin"></div>
        <p class="mt-4 text-gray-600">Loading cost data...</p>
      </div>
    {:else if currentLivingCostData}

      <!-- Travel Style Selector -->
      <div class="mb-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg">
        <!-- In your +page.svelte -->
        <TravelStyleSelector 
          {travelStyle}
          {setTravelStyle}
          {selectedCurrency}
          livingCostData={currentLivingCostData}
        />
      </div>
        
      <!-- Quick Cost Overview -->
      <div class="mb-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg">
        <h2 class="text-2xl font-light mb-4 text-gray-900">Cost Overview for {selectedCountry}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center p-4 bg-emerald-50 rounded-lg">
            <div class="text-2xl font-bold text-emerald-700">
              {convertedDailyLiving ? formatCurrency(convertedDailyLiving.budget, selectedCurrency) : 'N/A'}
            </div>
            <div class="text-sm text-gray-600 mt-1">Budget Travel / day</div>
          </div>
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-2xl font-bold text-blue-700">
              {convertedDailyLiving ? formatCurrency(convertedDailyLiving.midrange, selectedCurrency) : 'N/A'}
            </div>
            <div class="text-sm text-gray-600 mt-1">Mid-range / day</div>
          </div>
          <div class="text-center p-4 bg-purple-50 rounded-lg">
            <div class="text-2xl font-bold text-purple-700">
              {convertedDailyLiving ? formatCurrency(convertedDailyLiving.luxury, selectedCurrency) : 'N/A'}
            </div>
            <div class="text-sm text-gray-600 mt-1">Luxury / day</div>
          </div>
        </div>
      </div>

      <!-- Travel Configuration Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <TripBudgetCalculator 
          bind:tripLength
          {totalCost}
          {travelStyle}
          {selectedCurrency}
        />
      </div> 

      <!-- Cost Breakdown -->
      <div class="mb-12">
        <CostBreakdown 
          livingCostData={currentLivingCostData}
          selectedCurrency={selectedCurrency}
          travelStyle={travelStyle}
        />
      </div>

      <!-- Money Saving Tips -->
      <div class="mb-12">
        <MoneySavingTips 
          tips={currentLivingCostData.tips}
          country={selectedCountry}
        />
      </div>

    {:else}
      <div class="text-center py-12 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200">
        <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        </div>
        <h3 class="text-xl font-light text-gray-900 mb-2">Cost Data Unavailable</h3>
        <p class="text-gray-600 max-w-md mx-auto">
          We're currently gathering detailed cost information for {selectedCountry}. 
          Check back soon or explore other destinations.
        </p>
      </div>
    {/if}

    <!-- Next Steps Section -->
    <div class="mt-12 text-center">
      <p class="text-gray-700 text-sm font-light mb-4 tracking-wide">
        Continue planning your perfect trip
      </p>
      <div class="flex gap-3 justify-center flex-wrap">
        <button on:click={() => goto('/digital-nomad')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          💻 Digital Nomad Essentials
        </button>
        <button on:click={() => goto('/planning')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          📅 Trip Planning
        </button>
        <button on:click={() => goto('/quick-plan')} 
                class="px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
          ⚡ Quick Plan
        </button>
      </div>
    </div>

    <!-- Budget Planning Reminder -->
    <div class="mt-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-emerald-200 max-w-2xl mx-auto">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="text-left">
          <p class="font-medium text-gray-900">Smart Budget Planning</p>
          <p class="text-sm text-gray-600 mt-1">
            Always add 15-20% buffer for unexpected expenses and local experiences
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
