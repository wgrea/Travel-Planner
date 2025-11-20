<!-- src/routes/flight-costs/components/DataTable.svelte -->
<script lang="ts">
  export let title: string;
  export let icon: string;
  export let data: any[];
  export let columns: string[];
</script>

<div class="bg-white/15 backdrop-blur-xl rounded-[28px] p-6 border-2 border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.2)] text-white">
  <h2 class="text-2xl font-bold mb-4 border-b border-white/50 pb-2 flex items-center gap-2">
    <span>{icon}</span> {title}
  </h2>
  <div class="overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b border-white/30">
          {#each columns as column}
            <th class="text-left py-3 px-2 font-semibold">{column}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        <slot name="rows" {data} />
      </tbody>
    </table>
  </div>
  <slot name="footer" />
</div>