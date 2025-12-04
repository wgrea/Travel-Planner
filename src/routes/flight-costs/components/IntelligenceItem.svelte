<!-- src/routes/flight-costs/components/IntelligenceItem.svelte -->
<script lang="ts">
  export let emoji = '';
  export let title = '';
  export let text = '';
</script>

<div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-white transition-colors">
  <span class="text-xl">{emoji}</span>
  <div>
    <p class="font-medium text-gray-800">{title}</p>
    <p class="text-sm text-gray-600">{text}</p>
  </div>
</div>