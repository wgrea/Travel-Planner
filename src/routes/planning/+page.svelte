<!-- src/routes/planning/+page.svelte -->

<!-- Split into separate files -->

<script lang="ts">
  import { minimalData } from '$lib/data/minimalData';
  import type { Country } from '$lib/types/minimalData';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  
  let currentStep = 1;
  let tripName = '';
  let selectedDestination = '';
  let startDate = '';
  let endDate = '';
  let travelStyle = 'comfort';
  let totalBudget = 2000;
  
  // Fix the reactive declarations
  $: totalDays = calculateTotalDays();
  $: availableDestinations = Object.values(minimalData.countries);
  $: country = selectedDestination ? minimalData.countries[selectedDestination] : null;
  
  function calculateTotalDays(): number {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end.getTime() - start.getTime();
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;
  }
  
  function createTrip() {
    const newTrip = {
      id: Date.now().toString(),
      name: tripName,
      destination: selectedDestination,
      startDate,
      endDate,
      totalDays,
      budget: totalBudget,
      travelStyle,
      days: [],
      totalCost: 0,
      shared: false,
      createdAt: new Date().toISOString()
    };
    
    if (browser) {
      const savedTrips = JSON.parse(localStorage.getItem('willTrips') || '[]');
      savedTrips.push(newTrip);
      localStorage.setItem('willTrips', JSON.stringify(savedTrips));
    }
    
    // Navigate to itinerary detail page
    goto(`/planning/${newTrip.id}`);
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-8">
  <div class="max-w-2xl mx-auto">
    <!-- Progress Steps -->
    <div class="mb-8">
      <div class="flex justify-between mb-2">
        {#each [1, 2, 3, 4] as i}
          <div class="text-center">
            <div class="w-8 h-8 rounded-full mx-auto flex items-center justify-center text-white font-bold {currentStep >= i ? 'bg-white/40' : 'bg-white/20'}">
              {i}
            </div>
          </div>
        {/each}
      </div>
      <div class="text-center text-white/80 text-sm">
        {#if currentStep === 1}Trip Basics{:else if currentStep === 2}Destination{:else if currentStep === 3}Dates & Budget{:else}Review{/if}
      </div>
    </div>
    
    <!-- Step 1: Trip Basics -->
    {#if currentStep === 1}
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white mb-6">Plan Your Trip</h1>
        
        <div class="space-y-4">
          <div>
            <label for="tripName" class="block text-white text-left mb-2">Trip Name</label>
            <input 
              id="tripName"
              bind:value={tripName}
              placeholder="Thailand Adventure 2024"
              class="w-full p-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-white/60"
            />
          </div>
          
          <div>
            <label for="travelStyle" class="block text-white text-left mb-2">Travel Style</label>
            <select 
              id="travelStyle"
              bind:value={travelStyle} 
              class="w-full p-4 rounded-xl bg-white/20 border-2 border-white/30 text-white"
            >
              <option value="budget">💰 Budget Backpacker</option>
              <option value="comfort">💸 Comfort Traveler</option>
              <option value="luxury">💎 Luxury Explorer</option>
            </select>
          </div>
          
          <button
            on:click={() => currentStep = 2}
            disabled={!tripName}
            class="w-full p-4 bg-white/30 border-2 border-white/40 rounded-xl text-white font-bold hover:bg-white/40 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next → Choose Destination
          </button>
        </div>
      </div>
    {/if}
    
    <!-- Step 2: Destination -->
    {#if currentStep === 2}
      <div>
        <h1 class="text-4xl font-bold text-white mb-6 text-center">Choose Destination</h1>
        
        <div class="space-y-3 max-h-96 overflow-y-auto">
          {#each availableDestinations as country}
            <button
              on:click={() => selectedDestination = country.id}
              class:selected={selectedDestination === country.id}
              class="w-full p-4 text-left rounded-xl bg-white/20 border-2 border-white/30 hover:border-white/50 transition-all text-white"
            >
              <div class="flex justify-between items-start">
                <div>
                  <div class="font-bold text-lg">{country.name}</div>
                  <div class="text-sm opacity-80">{country.region}</div>
                </div>
                <span class="px-2 py-1 bg-white/30 rounded text-sm uppercase">
                  {country.costs.tier}
                </span>
              </div>
              
              <div class="flex flex-wrap gap-1 mt-2">
                {#each country.filters.activities.slice(0, 3) as activity}
                  <span class="px-2 py-1 bg-white/20 rounded text-xs">{activity}</span>
                {/each}
              </div>
            </button>
          {/each}
        </div>
        
        <div class="flex gap-4 mt-6">
          <button on:click={() => currentStep = 1} class="flex-1 p-3 bg-white/20 border border-white/30 rounded-xl text-white">
            ← Back
          </button>
          <button 
            on:click={() => currentStep = 3}
            disabled={!selectedDestination}
            class="flex-1 p-3 bg-white/30 border-2 border-white/40 rounded-xl text-white font-bold disabled:opacity-50"
          >
            Next → Dates & Budget
          </button>
        </div>
      </div>
    {/if}
    
    <!-- Step 3: Dates & Budget -->
    {#if currentStep === 3}
      <div>
        <h1 class="text-4xl font-bold text-white mb-6 text-center">Dates & Budget</h1>
        
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="startDate" class="block text-white text-left mb-2">Start Date</label>
              <input 
                id="startDate"
                type="date"
                bind:value={startDate}
                class="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
              />
            </div>
            <div>
              <label for="endDate" class="block text-white text-left mb-2">End Date</label>
              <input 
                id="endDate"
                type="date"
                bind:value={endDate}
                class="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
              />
            </div>
          </div>
          
          {#if totalDays > 0}
            <div class="text-center text-white/80">
              {totalDays} day{totalDays === 1 ? '' : 's'} total
            </div>
          {/if}
          
          <div>
            <label for="totalBudget" class="block text-white text-left mb-2">
              Total Budget: ${totalBudget}
            </label>
            <input 
              id="totalBudget"
              type="range"
              bind:value={totalBudget}
              min="500"
              max="10000"
              step="100"
              class="w-full"
            />
            <div class="flex justify-between text-white/60 text-sm">
              <span>$500</span>
              <span>$5,000</span>
              <span>$10,000</span>
            </div>
          </div>
          
          <div class="flex gap-4 mt-6">
            <button on:click={() => currentStep = 2} class="flex-1 p-3 bg-white/20 border border-white/30 rounded-xl text-white">
              ← Back
            </button>
            <button 
              on:click={() => currentStep = 4}
              disabled={!startDate || !endDate}
              class="flex-1 p-3 bg-white/30 border-2 border-white/40 rounded-xl text-white font-bold disabled:opacity-50"
            >
              Next → Review
            </button>
          </div>
        </div>
      </div>
    {/if}
    
    <!-- Step 4: Review -->
    {#if currentStep === 4}
      <div>
        <h1 class="text-4xl font-bold text-white mb-6 text-center">Review Your Trip</h1>

        <div class="bg-white/20 rounded-xl p-6 border border-white/30 text-white mb-6">
          <h2 class="text-2xl font-bold mb-4">{tripName}</h2>
          {#if country}
            <p class="text-lg mb-2">{country.name}</p>
            <p class="text-white/80 mb-4">{country.region}</p>
          {/if}
          <div class="space-y-2">
            <div class="flex justify-between">
              <span>Dates:</span>
              <span class="font-bold">{startDate} to {endDate} ({totalDays} days)</span>
            </div>
            <div class="flex justify-between">
              <span>Travel Style:</span>
              <span class="font-bold capitalize">{travelStyle}</span>
            </div>
            <div class="flex justify-between">
              <span>Total Budget:</span>
              <span class="font-bold">${totalBudget}</span>
            </div>
            <div class="flex justify-between">
              <span>Daily Budget:</span>
              <span class="font-bold">${Math.round(totalBudget / totalDays)}/day</span>
            </div>
          </div>
        </div>
        
        <div class="flex gap-4">
          <button on:click={() => currentStep = 3} class="flex-1 p-3 bg-white/20 border border-white/30 rounded-xl text-white">
            ← Back
          </button>
          <button 
            on:click={createTrip}
            class="flex-1 p-3 bg-green-500/80 border-2 border-green-400 rounded-xl text-white font-bold hover:bg-green-600"
          >
            🗺️ Create Itinerary →
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .selected {
    border-color: rgb(34 211 238) !important;
    background-color: rgba(34, 211, 238, 0.3) !important;
  }
  
  /* Style the range input */
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
  }
  
  input[type="range"]::-webkit-slider-track {
    background: rgba(255, 255, 255, 0.2);
    height: 8px;
    border-radius: 4px;
  }
  
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: white;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }
</style>