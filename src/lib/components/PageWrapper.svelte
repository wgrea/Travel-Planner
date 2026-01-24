<!-- src/lib/components/PageWrapper.svelte -->
<script lang="ts">
  import CurrencySelector from './CurrencySelector.svelte';
  
  let { 
    title = '', 
    subtitle = '', 
    mode = 'living-costs' as 'living-costs' | 'nomad' | 'flights' | 'visa',
    children 
  } = $props();
  
  const modeConfig = {
    'living-costs': {
      gradient: 'from-emerald-50 to-teal-50',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
      iconColor: 'text-emerald-600',
      titleColor: 'text-emerald-900',
      subtitleColor: 'text-emerald-700'
    },
    'nomad': {
      gradient: 'from-blue-50 to-indigo-50',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-900',
      subtitleColor: 'text-blue-700'
    },
    'flights': {
      gradient: 'from-purple-50 to-pink-50',
      icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10h12',
      iconColor: 'text-purple-600',
      titleColor: 'text-purple-900',
      subtitleColor: 'text-purple-700'
    },
    'visa': {
      gradient: 'from-amber-50 to-orange-50',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      iconColor: 'text-amber-600',
      titleColor: 'text-amber-900',
      subtitleColor: 'text-amber-700'
    }
  };
  
  const config = $derived(modeConfig[mode]);
</script>

<div class="min-h-screen bg-gradient-to-br {config.gradient} px-4 py-8 relative overflow-hidden">
  <!-- Background pattern -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div 
      class="absolute inset-0 bg-gradient-to-r from-transparent via-current/5 to-transparent"
      class:text-emerald-400={mode === 'living-costs'}
      class:text-blue-400={mode === 'nomad'}
      class:text-purple-400={mode === 'flights'}
      class:text-amber-400={mode === 'visa'}
    ></div>
    <div 
      class="absolute inset-0 bg-gradient-to-b from-transparent via-current/3 to-transparent"
      class:text-teal-400={mode === 'living-costs'}
      class:text-indigo-400={mode === 'nomad'}
      class:text-pink-400={mode === 'flights'}
      class:text-orange-400={mode === 'visa'}
    ></div>
  </div>

  <div class="max-w-6xl mx-auto relative z-10">
    <!-- Currency Selector -->
    <div 
      class="mb-8 bg-white/90 backdrop-blur-sm rounded-xl border p-4 inline-block"
      class:border-emerald-200={mode === 'living-costs'}
      class:border-blue-200={mode === 'nomad'}
      class:border-purple-200={mode === 'flights'}
      class:border-amber-200={mode === 'visa'}
    >
      <CurrencySelector />
    </div>

    <!-- Page Header -->
    <div class="mb-8 text-center">
      <div 
        class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border mb-6 shadow-sm"
        class:border-emerald-200={mode === 'living-costs'}
        class:border-blue-200={mode === 'nomad'}
        class:border-purple-200={mode === 'flights'}
        class:border-amber-200={mode === 'visa'}
      >
        <svg class="w-8 h-8 {config.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={config.icon} />
        </svg>
      </div>
      
      <h1 class="text-4xl font-light mb-3 tracking-tight {config.titleColor}">
        {title}
      </h1>
      <p class="text-base font-light max-w-2xl mx-auto {config.subtitleColor}">
        {subtitle}
      </p>
    </div>

    <!-- Content using @render -->
    {@render children()}
  </div>
</div>