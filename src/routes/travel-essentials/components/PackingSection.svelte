<!-- src/routes/travel-essentials/components/PackingSection.svelte -->
<script lang="ts">
  export let tripTypes: any[];
  export let checklistItems: any[];
  export let showChecklist: boolean;
  export let newItem: string;
  
  export let onToggleChecklist: () => void;
  export let onAddItem: () => void;
  export let onRemoveItem: (id: number) => void;
  export let onToggleItem: (id: number) => void;
  export let onQuickAdd: (item: string) => void;
  export let onKeyPress: (event: KeyboardEvent) => void;
</script>

<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
  <div class="flex items-center justify-between mb-8">
    <div>
      <h2 class="text-2xl font-light text-gray-900 mb-2">Smart Packing Lists</h2>
      <p class="text-gray-600">Custom lists for different types of trips</p>
    </div>
    <button
      on:click={onToggleChecklist}
      class="px-6 py-3 bg-rose-100 text-rose-700 rounded-lg hover:bg-rose-200 transition-colors font-medium"
    >
      {showChecklist ? 'Hide Checklist' : 'Create Your Own'}
    </button>
  </div>

  <!-- Trip Type Packing Lists -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    {#each tripTypes as trip}
      <div class="rounded-xl border-2 {trip.color} p-5">
        <div class="text-2xl mb-3">{trip.icon}</div>
        <h3 class="font-medium text-gray-900 mb-3">{trip.type}</h3>
        <ul class="space-y-2">
          {#each trip.essentials as item}
            <li class="flex items-start gap-2">
              <span class="text-gray-400 mt-0.5">✓</span>
              <span class="text-sm text-gray-700">{item}</span>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>

  <!-- Interactive Checklist -->
  {#if showChecklist}
    <div class="border-t border-gray-100 pt-8">
      <h3 class="text-xl font-medium text-gray-900 mb-6">Create Your Packing Checklist</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <input 
              type="text" 
              placeholder="Add an item to your list..."
              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100"
              bind:value={newItem}
              on:keypress={onKeyPress}
            />
            <button 
              on:click={onAddItem}
              class="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
            >
              Add
            </button>
          </div>
          <div class="bg-gray-50 rounded-lg p-4">
            <p class="text-sm text-gray-600 mb-3">Quick add:</p>
            <div class="flex flex-wrap gap-2">
              <button 
                on:click={() => onQuickAdd('Toothbrush')}
                class="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50"
              >
                Toothbrush
              </button>
              <button 
                on:click={() => onQuickAdd('Charger')}
                class="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50"
              >
                Charger
              </button>
              <button 
                on:click={() => onQuickAdd('Underwear')}
                class="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50"
              >
                Underwear
              </button>
              <button 
                on:click={() => onQuickAdd('Medications')}
                class="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50"
              >
                Medications
              </button>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 rounded-xl p-5">
          <h4 class="font-medium text-gray-900 mb-4">Your Packing List</h4>
          <div class="space-y-3">
            {#each checklistItems as item}
              <div class="flex items-center gap-3 bg-white p-3 rounded-lg transition-all hover:shadow-sm">
                <input 
                  type="checkbox" 
                  class="rounded text-rose-500" 
                  checked={item.checked}
                  on:change={() => onToggleItem(item.id)}
                />
                <span class="flex-1 text-gray-700 {item.checked ? 'line-through text-gray-400' : ''}">
                  {item.name}
                </span>
                <button 
                  on:click={() => onRemoveItem(item.id)}
                  class="text-gray-400 hover:text-red-500 transition-colors"
                >
                  ×
                </button>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>