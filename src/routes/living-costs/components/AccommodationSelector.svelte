<!-- src/routes/living-costs/components/AccommodationSelector.svelte -->
<script lang="ts">
  import type { LivingCostData, TravelStyle } from '$lib/types/living-costs';
  
  // Use $props() instead of export let
  let {
    livingCostData = null,
    travelStyle = 'midrange' as TravelStyle
  } = $props<{
    livingCostData?: LivingCostData | null;
    travelStyle?: TravelStyle;
  }>();
  
  // Helper function to safely get accommodation costs
  function getAccommodationCost(type: 'hostel' | 'budgetHotel' | 'guesthouse' | 'hotel' | 'apartment' | 'boutiqueHotel'): number {
    if (!livingCostData?.baseCosts?.accommodation) return 0;
    
    const accommodation = livingCostData.baseCosts.accommodation;
    
    // Check budget accommodation
    if (['hostel', 'budgetHotel', 'guesthouse'].includes(type)) {
      const budget = accommodation.budget;
      if (!budget) return 0;
      
      switch (type) {
        case 'hostel': return budget.hostel || 0;
        case 'budgetHotel': return budget.budgetHotel || 0;
        case 'guesthouse': return budget.guesthouse || 0;
        default: return 0;
      }
    }
    
    // Check midrange accommodation
    if (['hotel', 'apartment', 'boutiqueHotel'].includes(type)) {
      const midrange = accommodation.midrange;
      if (!midrange) return 0;
      
      switch (type) {
        case 'hotel': return midrange.hotel || 0;
        case 'apartment': return midrange.apartment || 0;
        case 'boutiqueHotel': return midrange.boutiqueHotel || 0;
        default: return 0;
      }
    }
    
    return 0;
  }
  
  // Helper to get monthly rent
  function getMonthlyRent(type: 'studio' | 'oneBedroom' | 'threeBedroom'): number {
    if (!livingCostData?.baseCosts?.accommodation?.monthlyRent) return 0;
    
    const monthlyRent = livingCostData.baseCosts.accommodation.monthlyRent;
    
    switch (type) {
      case 'studio': return monthlyRent.studio || 0;
      case 'oneBedroom': return monthlyRent.oneBedroom || 0;
      case 'threeBedroom': return monthlyRent.threeBedroom || 0;
      default: return 0;
    }
  }
  
  // Safe getters with defaults using $derived
  const hostelCost = $derived(getAccommodationCost('hostel'));
  const budgetHotelCost = $derived(getAccommodationCost('budgetHotel'));
  const guesthouseCost = $derived(getAccommodationCost('guesthouse'));
  const hotelCost = $derived(getAccommodationCost('hotel'));
  const apartmentCost = $derived(getAccommodationCost('apartment'));
  const boutiqueHotelCost = $derived(getAccommodationCost('boutiqueHotel'));
  
  const studioRent = $derived(getMonthlyRent('studio'));
  const oneBedroomRent = $derived(getMonthlyRent('oneBedroom'));
  const threeBedroomRent = $derived(getMonthlyRent('threeBedroom'));
</script>

<div class="accommodation-selector">
  {#if !livingCostData}
    <div class="text-center text-gray-500 py-4">
      No accommodation data available
    </div>
  {:else}
    <!-- Example UI - customize based on your actual component -->
    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="p-4 bg-emerald-50 rounded-lg">
          <div class="text-sm text-emerald-600">Hostel</div>
          <div class="text-lg font-semibold">${hostelCost}/night</div>
        </div>
        <div class="p-4 bg-emerald-50 rounded-lg">
          <div class="text-sm text-emerald-600">Budget Hotel</div>
          <div class="text-lg font-semibold">${budgetHotelCost}/night</div>
        </div>
        <div class="p-4 bg-blue-50 rounded-lg">
          <div class="text-sm text-blue-600">Hotel</div>
          <div class="text-lg font-semibold">${hotelCost}/night</div>
        </div>
        <div class="p-4 bg-blue-50 rounded-lg">
          <div class="text-sm text-blue-600">Apartment</div>
          <div class="text-lg font-semibold">${apartmentCost}/night</div>
        </div>
      </div>
      
      <!-- Monthly Rent Section -->
      <div class="border-t pt-4">
        <h4 class="text-sm font-medium text-gray-700 mb-3">Monthly Rent</h4>
        <div class="grid grid-cols-3 gap-3">
          <div class="p-3 bg-gray-50 rounded">
            <div class="text-xs text-gray-600">Studio</div>
            <div class="font-medium">${studioRent}/month</div>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <div class="text-xs text-gray-600">1 Bedroom</div>
            <div class="font-medium">${oneBedroomRent}/month</div>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <div class="text-xs text-gray-600">3 Bedroom</div>
            <div class="font-medium">${threeBedroomRent}/month</div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .accommodation-selector {
    min-height: 200px;
  }
</style>