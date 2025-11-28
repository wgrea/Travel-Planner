<!-- src/routes/visa/components/DocumentItem.svelte -->
<script lang="ts">
  export let document: {
    name: string;
    priority: 'high' | 'medium' | 'low';
  };

  $: priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-amber-100 text-amber-800 border-amber-200', 
    low: 'bg-stone-100 text-stone-800 border-stone-200'
  };
</script>

<div class="flex items-center justify-between p-4 rounded-lg border hover:bg-stone-50 transition-colors group {priorityColors[document.priority]}">
  <div class="flex items-center gap-3">
    {#if document.priority === 'high'}
      <div class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
    {:else if document.priority === 'medium'}
      <div class="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full"></div>
    {:else}
      <div class="flex-shrink-0 w-2 h-2 bg-stone-400 rounded-full"></div>
    {/if}
    <span class="text-sm font-light">{document.name}</span>
  </div>
  <button class="text-xs bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-full transition-colors font-medium opacity-0 group-hover:opacity-100">
    Prepare
  </button>
</div>
