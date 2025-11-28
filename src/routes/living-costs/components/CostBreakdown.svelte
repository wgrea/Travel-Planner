<!-- src/routes/living-costs/components/CostBreakdown.svelte -->
<script lang="ts">
  import type { LivingCostData } from '$lib/types/living-costs';
  import { getNumericCost } from '$lib/utils/living-costs';
  import { convertCurrency, formatCurrency } from '$lib/utils/currency';

  export let livingCostData: any;
  export let selectedCurrency: string = 'USD';
  export let travelStyle: 'budget' | 'midrange' | 'luxury';
  
</script>

{#if livingCostData}
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <!-- Daily Expenses -->
  <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">🍽️ Daily Expenses</h3>
    <div class="space-y-3">
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <div class="text-gray-700">Street Food</div>
        <div class="text-emerald-600 font-semibold">
          {formatCurrency(
            convertCurrency(
              livingCostData.baseCosts.food.streetFood,
              livingCostData.currency,
              selectedCurrency
            ),
            selectedCurrency
          )}
        </div>
      </div>
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <div class="text-gray-700">Restaurant Meal</div>
        <div class="text-emerald-600 font-semibold">
          {formatCurrency(
            convertCurrency(
              livingCostData.baseCosts.food.restaurantMeal,
              livingCostData.currency,
              selectedCurrency
            ),
            selectedCurrency
          )}
        </div>
      </div>
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <div class="text-gray-700">Local Transportation</div>
        <div class="text-emerald-600 font-semibold">
          {formatCurrency(
            convertCurrency(
              livingCostData.baseCosts.transportation.localBus,
              livingCostData.currency,
              selectedCurrency
            ),
            selectedCurrency
          )}
        </div>
      </div>
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
        <div class="text-gray-700">Taxi Ride</div>
        <div class="text-emerald-600 font-semibold">
          {formatCurrency(
            convertCurrency(
              livingCostData.baseCosts.transportation.taxi,
              livingCostData.currency,
              selectedCurrency
            ),
            selectedCurrency
          )}
        </div>
      </div>
    </div>
  </div>

  <!-- Accommodation Costs -->
  <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">🏨 Accommodation (per night)</h3>
    <div class="space-y-3">
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg {travelStyle === 'budget' ? 'ring-2 ring-emerald-500' : ''}">
        <div class="text-gray-700">Hostel</div>
        <div class="text-emerald-600 font-semibold">
          {formatCurrency(
            convertCurrency(
              livingCostData.baseCosts.accommodation.budget.hostel,
              livingCostData.currency,
              selectedCurrency
            ),
            selectedCurrency
          )}
        </div>
      </div>
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg {travelStyle === 'budget' ? 'ring-2 ring-emerald-500' : ''}">
        <div class="text-gray-700">Budget Hotel</div>
        <div class="text-emerald-600 font-semibold">
          {formatCurrency(
            convertCurrency(
              livingCostData.baseCosts.accommodation.budget.budgetHotel,
              livingCostData.currency,
              selectedCurrency
            ),
            selectedCurrency
          )}
        </div>
      </div>
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg {travelStyle === 'midrange' ? 'ring-2 ring-emerald-500' : ''}">
        <div class="text-gray-700">Mid-range Hotel</div>
        <div class="text-emerald-600 font-semibold">
          {formatCurrency(
            convertCurrency(
              livingCostData.baseCosts.accommodation.midrange.hotel,
              livingCostData.currency,
              selectedCurrency
            ),
            selectedCurrency
          )}
        </div>
      </div>
      <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg {travelStyle === 'luxury' ? 'ring-2 ring-emerald-500' : ''}">
        <div class="text-gray-700">Luxury Hotel</div>
        <div class="text-emerald-600 font-semibold">
          {formatCurrency(
            convertCurrency(
              livingCostData.baseCosts.accommodation.luxury.hotel,
              livingCostData.currency,
              selectedCurrency
            ),
            selectedCurrency
          )}
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Monthly Rent Section -->
<div class="bg-white rounded-2xl p-6 mt-8 border border-gray-200 shadow-sm">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">🏠 Monthly Rent (Long-term)</h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
      <div class="font-semibold text-blue-700 text-lg">
        {formatCurrency(
          convertCurrency(
            livingCostData.baseCosts.accommodation.monthlyRent.studio,
            livingCostData.currency,
            selectedCurrency
          ),
          selectedCurrency
        )}
      </div>
      <div class="text-sm text-gray-600 mt-1">Studio Apartment</div>
    </div>
    <div class="text-center p-4 bg-green-50 rounded-lg border border-green-100">
      <div class="font-semibold text-green-700 text-lg">
        {formatCurrency(
          convertCurrency(
            livingCostData.baseCosts.accommodation.monthlyRent.oneBedroom,
            livingCostData.currency,
            selectedCurrency
          ),
          selectedCurrency
        )}
      </div>
      <div class="text-sm text-gray-600 mt-1">1-Bedroom</div>
    </div>
    <div class="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
      <div class="font-semibold text-purple-700 text-lg">
        {formatCurrency(
          convertCurrency(
            livingCostData.baseCosts.accommodation.monthlyRent.threeBedroom,
            livingCostData.currency,
            selectedCurrency
          ),
          selectedCurrency
        )}
      </div>
      <div class="text-sm text-gray-600 mt-1">3-Bedroom</div>
    </div>
  </div>
</div>
{:else}
<!-- Fallback when no data -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">🍽️ Daily Expenses</h3>
    <div class="text-gray-500 text-center py-8">Cost data loading...</div>
  </div>
  <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">🏨 Accommodation</h3>
    <div class="text-gray-500 text-center py-8">Cost data loading...</div>
  </div>
</div>
{/if}
