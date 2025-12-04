<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { navigating } from '$app/stores';
  import "../app.css";
  import favicon from '$lib/assets/favicon.ico';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{#if $navigating}
  <div class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse z-50"></div>
{/if}

{@render children()}