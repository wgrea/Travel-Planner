<!-- src/routes/planning/[tripId]/+page.svelte -->
<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  
  let trip = null;
  
  // Load trip data based on URL parameter
  // You'd implement this to load from localStorage or database
</script>

{#if trip}
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h1 class="text-3xl font-bold text-gray-800">{trip.name}</h1>
        <p class="text-gray-600">{trip.destination} • {trip.totalDays} days • ${trip.budget} budget</p>
      </div>
      
      <!-- Day-by-day itinerary would go here -->
      <div class="space-y-4">
        {#each trip.days as day, index}
          <div class="bg-white rounded-lg shadow p-4">
            <h3 class="font-bold text-lg">Day {index + 1}</h3>
            <!-- Activities, accommodations, etc. -->
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}