<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { navigating } from '$app/stores';
  import "../app.css";
  import favicon from '$lib/assets/favicon.ico';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{#if $navigating}
  <div class="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse z-[60]"></div>
{/if}

<Header 
  showBackButton={true}
  showQuickLinks={true}
/>

<main class="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
  <!-- WIDER CONTAINER: Changed from max-w-7xl to max-w-screen-2xl -->
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {@render children()}
  </div>
</main>

<Footer />