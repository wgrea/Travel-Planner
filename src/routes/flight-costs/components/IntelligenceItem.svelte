<!-- src/routes/flight-costs/components/IntelligenceItem.svelte -->
<script lang="ts">
  export let emoji: string;
  export let title: string;
  export let text: string;
</script>

<div class="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors duration-200 group">
  <span class="text-lg mt-0.5 flex-shrink-0">{emoji}</span>
  <div>
    <p class="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">{title}</p>
    <p class="text-sm text-gray-700 mt-1 leading-relaxed">{text}</p>
  </div>
</div>