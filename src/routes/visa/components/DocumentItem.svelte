<!-- src/routes/visa/components/DocumentItem.svelte -->
<script lang="ts">
  export let document: string;
</script>

<div class="flex items-center justify-between p-4 rounded-lg bg-stone-50 border border-stone-200 hover:bg-stone-100 transition-colors">
  <span class="text-sm text-stone-700 font-light">{document}</span>
  <button class="text-xs bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-full transition-colors font-medium">
    Prepare
  </button>
</div>