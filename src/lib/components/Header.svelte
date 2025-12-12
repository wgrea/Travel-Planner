<!-- src/lib/components/Header.svelte - Update the container width -->
<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  const { 
    showBackButton = true, 
    showQuickLinks = true 
  } = $props();

  // State for mobile menu
  let mobileMenuOpen = $state(false);

  // All navigation items including digital nomad sub-pages
  const navItems = [
    { icon: '❤️', label: 'Destinations', path: '/resonance' },
    { icon: '✈️', label: 'Flights', path: '/flight-costs' },
    { icon: '🏠', label: 'Living Costs', path: '/living-costs' },
    { icon: '🚗', label: 'Transportation', path: '/transportation-costs' },
    { icon: '🛂', label: 'Visa Info', path: '/visa' },
    { icon: '💻', label: 'Digital Nomad', path: '/digital-nomad' },
    { icon: '🎒', label: 'Packing', path: '/travel-essentials' },
    // Digital nomad sub-pages
    { icon: '📋', label: 'DN Support', path: '/digital-nomad/support' },
    { icon: '💼', label: 'Work Anywhere', path: '/digital-nomad/how-to-work-from-anywhere' }
  ];

  // Function to close mobile menu
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }

  // Handle Escape key for mobile menu
  $effect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    }
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  });

  // Enhanced color system (just for border)
  function getPageTheme(pathname: string) {
    const themes: Record<string, { border: string; text: string }> = {
      '/': {
        border: 'border-blue-200',
        text: 'text-blue-900'
      },
      '/resonance': {
        border: 'border-rose-200',
        text: 'text-rose-900'
      },
      '/flight-costs': {
        border: 'border-blue-200',
        text: 'text-blue-900'
      },
      '/living-costs': {
        border: 'border-emerald-200',
        text: 'text-emerald-900'
      },
      '/transportation-costs': {
        border: 'border-amber-200',
        text: 'text-amber-900'
      },
      '/visa': {
        border: 'border-gray-200',
        text: 'text-gray-900'
      },
      '/digital-nomad': {
        border: 'border-indigo-200',
        text: 'text-indigo-900'
      },
      '/travel-essentials': {
        border: 'border-rose-200',
        text: 'text-rose-900'
      }
    };
    
    return themes[pathname] || {
      border: 'border-gray-200',
      text: 'text-gray-900'
    };
  }

  const pageTheme = $derived(getPageTheme($page.url.pathname));
</script>

<!-- Header with wider container -->
<header class={`sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b ${pageTheme.border} shadow-sm`}>
  <!-- WIDER CONTAINER: Changed from max-w-7xl to max-w-screen-2xl -->
  <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Left: Back Button or Logo -->
      <div class="flex items-center">
        {#if showBackButton && $page.url.pathname !== '/'}
          <button
            onclick={() => goto('/')}
            class={`flex items-center gap-2 ${pageTheme.text} hover:opacity-80 transition-colors group mr-4`}
          >
            <span class="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span class="text-sm hidden sm:inline">Home</span>
          </button>
        {/if}
        
        <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div class="text-2xl">🌍</div>
          <span class={`font-semibold ${pageTheme.text} hidden sm:inline`}>Echotrip</span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-1" aria-label="Main navigation">
        {#each navItems as item}
          {#if item.path !== $page.url.pathname}
            <a
              href={item.path}
              class="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 hover:text-gray-900"
              title={item.label}
              aria-label={item.label}
            >
              <span class="text-lg">{item.icon}</span>
            </a>
          {/if}
        {/each}
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        onclick={() => mobileMenuOpen = !mobileMenuOpen}
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {#if mobileMenuOpen}
          <span class="text-xl" aria-hidden="true">✕</span>
        {:else}
          <span class="text-xl" aria-hidden="true">☰</span>
        {/if}
      </button>
    </div>
  </div>
</header>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
  <!-- Backdrop - covers entire screen, higher than header -->
  <div 
    class="md:hidden fixed inset-0 bg-black/50 z-50" 
    onclick={closeMobileMenu}
    role="button"
    tabindex="0"
    aria-label="Close menu"
    onkeydown={(e) => e.key === 'Enter' && closeMobileMenu()}
  ></div>
  
  <!-- Menu Panel - slides in from right, higher than header -->
  <div 
    class="md:hidden fixed right-0 top-0 h-full w-64 bg-white shadow-xl z-50 animate-slide-in-right"
    role="dialog"
    aria-modal="true"
    aria-label="Mobile navigation menu"
    id="mobile-menu"
  >
    <div class="p-6 h-full overflow-y-auto">
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center gap-2">
          <div class="text-2xl">🌍</div>
          <span class="font-semibold text-gray-900">Travel Planner</span>
        </div>
        <button 
          onclick={closeMobileMenu}
          class="p-2 rounded-lg hover:bg-gray-100"
          aria-label="Close menu"
        >
          <span class="text-xl" aria-hidden="true">✕</span>
        </button>
      </div>
      
      <nav class="space-y-1" aria-label="Mobile navigation">
        {#each navItems as item}
          <a
            href={item.path}
            onclick={closeMobileMenu}
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors {item.path === $page.url.pathname ? 'bg-gray-100' : ''}"
          >
            <span class="text-xl">{item.icon}</span>
            <span class="font-medium">{item.label}</span>
          </a>
        {/each}
      </nav>
      
      <!-- Coming Soon Note -->
      <div class="mt-8 pt-6 border-t border-gray-200">
        <div class="text-xs text-gray-500 mb-2">Coming Soon:</div>
        <div class="space-y-1">
          <div class="flex items-center gap-3 p-3 rounded-lg bg-gray-50/50">
            <span class="text-xl">💾</span>
            <div>
              <div class="font-medium text-gray-700">Saved Trips</div>
              <div class="text-xs text-gray-500">Save and organize your plans</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes slide-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  
  .animate-slide-in-right {
    animation: slide-in-right 0.2s ease-out;
  }
</style>