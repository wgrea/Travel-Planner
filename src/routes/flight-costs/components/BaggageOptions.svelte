<script lang="ts">
  interface Props {
    basePrice?: number;
    currentCurrency?: string;
  }
  
  let { 
    basePrice = 0,
    currentCurrency = 'USD'
  }: Props = $props();
  
  let selectedBaggage: 'hand' | 'one' | 'multiple' = $state('multiple');
  
  const baggageAdjustments = {
    hand: -80,
    one: -40,
    multiple: 0
  };
  
  const adjustedPrice = $derived(basePrice + baggageAdjustments[selectedBaggage]);
</script>

<div class="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/70">
  <h3 class="font-medium text-gray-800 mb-3 flex items-center gap-2">
    <span>🎒</span> Baggage Options
  </h3>
  
  <div class="space-y-3 mb-4">
    {#each [
      { id: 'hand' as const, label: 'Hand Luggage Only', desc: 'Just carry-on', savings: 80 },
      { id: 'one' as const, label: 'One Checked Bag', desc: 'One checked + carry-on', savings: 40 },
      { id: 'multiple' as const, label: 'Multiple Bags', desc: 'Full luggage allowance', savings: 0 }
    ] as option (option.id)}
      <label class="flex items-center justify-between p-3 rounded-lg cursor-pointer
        hover:bg-white/50 transition-colors
        {selectedBaggage === option.id ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50/50'}">
        <div class="flex items-center gap-3">
          <input
            type="radio"
            id={`baggage-${option.id}`}
            name="baggage"
            value={option.id}
            checked={selectedBaggage === option.id}
            onchange={() => { selectedBaggage = option.id; }}
            class="w-4 h-4 text-blue-600"
            onkeydown={(e) => {
              if (e.key === 'Enter') {
                selectedBaggage = option.id;
              }
            }}
          />
          <span>
            <div class="font-medium text-gray-800">{option.label}</div>
            <div class="text-sm text-gray-600">{option.desc}</div>
          </span>
        </div>
        {#if option.savings > 0}
          <div class="text-sm font-medium text-green-600">
            Save {currentCurrency} {option.savings}
          </div>
        {/if}
      </label>
    {/each}
  </div>
  
  <div class="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
    <div class="flex justify-between items-center">
      <div>
        <div class="text-sm text-gray-600">Adjusted Price</div>
        <div class="text-2xl font-bold text-gray-900">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currentCurrency
          }).format(adjustedPrice)}
        </div>
      </div>
      {#if selectedBaggage !== 'multiple'}
        <div class="text-sm text-green-700 font-medium">
          Save {currentCurrency} {Math.abs(baggageAdjustments[selectedBaggage])}
        </div>
      {/if}
    </div>
  </div>
</div>