<!-- src/routes/living-costs/components/AccommodationSelector.svelte -->
<script lang="ts">
  import type { LivingCostData } from '$lib/types/living-costs';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';

  export let accommodationType: string;
  export let selectedCurrency: string = 'USD';
  export let livingCostData: LivingCostData | undefined; // Add this prop

  const accommodationTypes = [
    { value: 'hostel', label: 'Hostel', icon: '🛏️', description: 'Dorm beds, shared facilities' },
    { value: 'guesthouse', label: 'Guesthouse', icon: '🏡', description: 'Private rooms, local vibe' },
    { value: 'airbnb', label: 'Airbnb', icon: '🏠', description: 'Apartments, home experience' },
    { value: 'hotel', label: 'Hotel', icon: '🏨', description: 'Hotels, resorts, amenities' }
  ];

  // Function to get formatted accommodation price
  function getAccommodationPrice(type: string): string {
    if (!livingCostData) {
      // Fallback to approximate ranges if no data
      const fallbackRanges: Record<string, string> = {
        hostel: '15-25',
        guesthouse: '25-45',
        airbnb: '45-80',
        hotel: '80-150'
      };
      return `${fallbackRanges[type]}/night`;
    }

    let basePrice: number;
    
    switch (type) {
      case 'hostel':
        basePrice = livingCostData.baseCosts.accommodation.budget.hostel;
        break;
      case 'guesthouse':
        basePrice = livingCostData.baseCosts.accommodation.budget.guesthouse;
        break;
      case 'airbnb':
        basePrice = livingCostData.baseCosts.accommodation.midrange.apartment;
        break;
      case 'hotel':
        basePrice = livingCostData.baseCosts.accommodation.midrange.hotel;
        break;
      default:
        basePrice = livingCostData.baseCosts.accommodation.midrange.hotel;
    }

    const convertedPrice = convertCurrency(
      basePrice, 
      livingCostData.currency, 
      selectedCurrency
    );
    
    // Format as range (±20% for visual appeal)
    const min = Math.round(convertedPrice * 0.8);
    const max = Math.round(convertedPrice * 1.2);
    
    return `${formatCurrency(min, selectedCurrency)}-${formatCurrency(max, selectedCurrency)}/night`;
  }
</script>

<div class="bg-white rounded-2xl p-6 mb-8 border border-gray-200 shadow-sm">
  <h2 class="text-xl font-semibold text-gray-900 mb-4">🛌 Accommodation Type</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each accommodationTypes as accommodation}
      <button
        class={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
          accommodationType === accommodation.value 
            ? 'bg-emerald-50 border-emerald-200 shadow-sm' 
            : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
        }`}
        on:click={() => accommodationType = accommodation.value}
      >
        <div class="text-2xl mb-2">{accommodation.icon}</div>
        <div class="text-gray-900 font-medium mb-1">{accommodation.label}</div>
        <div class="text-gray-600 text-sm mb-3">{accommodation.description}</div>
        <div class="text-emerald-600 font-semibold text-sm">
          {getAccommodationPrice(accommodation.value)}
        </div>
      </button>
    {/each}
  </div>
</div>
