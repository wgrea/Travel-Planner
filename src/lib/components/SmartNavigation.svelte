<!-- src/lib/components/SmartNavigation.svelte -->
<script lang="ts">
  import { page } from '$app/stores';

  // All planning tools grouped by category
  const planningTools = [
    {
      title: 'Find Destination',
      description: 'Match with places you\'ll love',
      path: '/resonance',
      icon: '❤️',
      color: 'border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700',
      category: 'discovery',
      priority: 1
    },
    {
      title: 'Visa Requirements',
      description: 'Check entry requirements',
      path: '/visa',
      icon: '🛂',
      color: 'border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-700',
      category: 'logistics',
      priority: 2
    },
    {
      title: 'Flight Costs',
      description: 'Find best deals & timing',
      path: '/flight-costs',
      icon: '✈️',
      color: 'border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700',
      category: 'costs',
      priority: 3
    },
    {
      title: 'Living Costs',
      description: 'Daily expenses & accommodation',
      path: '/living-costs',
      icon: '🏠',
      color: 'border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-700',
      category: 'costs',
      priority: 3
    },
    {
      title: 'Transportation',
      description: 'Local transport costs',
      path: '/transportation-costs',
      icon: '🚗',
      color: 'border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-700',
      category: 'costs',
      priority: 3
    },
    {
      title: 'Digital Nomad',
      description: 'Remote work essentials',
      path: '/digital-nomad',
      icon: '💻',
      color: 'border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700',
      category: 'logistics',
      priority: 4
    },
    {
      title: 'Travel Essentials',
      description: 'Packing lists & checklist',
      path: '/travel-essentials',
      icon: '🎒',
      color: 'border-pink-200 bg-pink-50 hover:bg-pink-100 text-pink-700',
      category: 'preparation',
      priority: 5
    }
  ];

  // Get current path from store
  const currentPath = $derived($page.url.pathname);
  
  // Get tools except current page
  const otherTools = $derived(
    planningTools
      .filter(tool => tool.path !== currentPath)
      .sort((a, b) => a.priority - b.priority)
  );
</script>

<!-- Related Planning Tools Section -->
<div class="mb-8">
  <div class="flex items-center gap-2 mb-4">
    <div class="w-1 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
    <h3 class="text-lg font-semibold text-gray-800">
      {#if $page.url.pathname === '/'}
        Start Your Travel Planning
      {:else}
        More Planning Tools
      {/if}
    </h3>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each otherTools as tool}
      <a
        href={tool.path}
        class="group p-4 rounded-xl border hover:shadow-md transition-all duration-300 
               hover:scale-105 {tool.color}"
      >
        <div class="flex items-center gap-3 mb-2">
          <div class="text-2xl group-hover:scale-110 transition-transform">{tool.icon}</div>
          <div class="flex-1">
            <h4 class="font-semibold">{tool.title}</h4>
            <p class="text-sm opacity-80 mt-1">{tool.description}</p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>