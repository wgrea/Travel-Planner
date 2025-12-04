<!-- src/routes/travel-essentials/components/CategoryNav.svelte -->
<script lang="ts">
  export let categories: any[];
  export let selectedCategory: string;
  export let onCategorySelect: (id: string) => void;
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
  {#each categories as category}
    <button
      on:click={() => onCategorySelect(category.id)}
      class={`p-4 rounded-xl border-2 transition-all duration-200 ${
        selectedCategory === category.id 
          ? 'border-rose-300 bg-white shadow-md scale-105' 
          : 'border-gray-200 bg-white/50 hover:bg-white hover:border-gray-300'
      }`}
    >
      <div class="text-2xl mb-2 {category.accent}">{category.icon}</div>
      <h3 class="font-medium text-gray-900 text-sm mb-1">{category.title}</h3>
      <p class="text-xs text-gray-500">{category.description}</p>
    </button>
  {/each}
</div>