<!-- src/route/+page.svelte --> 
<!-- Tailwind CSS --> 

<!-- 
Later I want to add:
- later should add a page about forms like a tax form
- If there is something I want to jot down. I don't want to just jot it down on a separate doc. I want to save it on this app.
After essentials:
- Keep font style the same accross the site
- Aesthetics

Way later:
- Links to visas 
- fun things to do around the city
- Map
-->

<!--
How about a note sheet that follows you througout the site (while I figure how to save stuff)
Make sure all countries have each import that you have ready before sharing your project
-->

<script lang="ts">
  import { goto } from '$app/navigation';

  function navigate(path: string) {
    goto(path);
  }

  const menuItems = [
    {
      title: "Visa Requirements",
      description: "Check visa needs and application process",
      icon: "📝",
      path: "/visa",
      color: "from-stone-50 to-stone-100",
      accent: "text-stone-700"
    },  
    {
      title: "Flight Costs & Timing",
      description: "Find best seasons and flight prices",
      icon: "✈️",
      path: "/flight-costs",
      color: "from-blue-50 to-cyan-50",
      accent: "text-blue-700"
    },
    {
      title: "Living Costs", 
      description: "Accommodation, food, and daily expenses",
      icon: "🏠",
      path: "/living-costs", 
      color: "from-emerald-50 to-teal-50",
      accent: "text-emerald-700"
    },
    {
      title: "Digital Nomad",
      description: "Coworking, wifi, and remote work essentials", 
      icon: "💻",
      path: "/digital-nomad",
      color: "from-indigo-50 to-purple-50",
      accent: "text-indigo-700"
    },
    {
      title: "Destination Finder",
      description: "Find places that match your travel style",
      icon: "🔍", 
      path: "/filters",
      color: "from-amber-50 to-orange-50",
      accent: "text-amber-700"
    },
    {
      title: "Travel Resonance",
      description: "Cultural fit and personal compatibility",
      icon: "🌊",
      path: "/resonance", 
      color: "from-cyan-50 to-teal-50",
      accent: "text-cyan-700"
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8 relative overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <div class="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-blue-50/80 border border-blue-100 shadow-sm"></div>
    <div class="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-indigo-50/80 border border-indigo-100 shadow-sm"></div>
    <div class="absolute bottom-32 left-[20%] w-40 h-40 rounded-full bg-emerald-50/80 border border-emerald-100 shadow-sm"></div>
    <div class="absolute bottom-20 right-[25%] w-28 h-28 rounded-full bg-amber-50/80 border border-amber-100 shadow-sm"></div>
    
    <div class="absolute top-1/2 right-[8%] text-4xl opacity-20">✈️</div>
    <div class="absolute bottom-1/4 left-[12%] text-3xl opacity-15">🌍</div>
  </div>

  <div class="max-w-6xl mx-auto relative z-10">
    <!-- Header -->
    <div class="text-center mb-12">
      <div class="inline-block mb-6 relative">
        <div class="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>
        <div class="relative text-7xl filter drop-shadow-lg">🌎</div>
      </div>
      
      <h1 class="text-5xl font-light mb-4 text-gray-900 tracking-tight">
        Travel Planner
      </h1>
      
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Your comprehensive guide to planning the perfect trip. Find destinations, compare costs, and organize everything in one place.
      </p>
    </div>

    <!-- Main Menu Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {#each menuItems as item}
        <button
          on:click={() => navigate(item.path)}
          class="group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br {item.color} border border-gray-200 hover:border-gray-300"
        >
          <!-- Content -->
          <div class="relative z-10">
            <div class="text-3xl mb-3 {item.accent}">{item.icon}</div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p class="text-gray-600 text-sm font-light">{item.description}</p>
          </div>
          
          <!-- Hover arrow -->
          <div class="absolute bottom-4 right-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300">
            <span class="text-lg">→</span>
          </div>
        </button>
      {/each}
    </div>

    <!-- Features Section -->
    <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-8">
      <h2 class="text-2xl font-light text-gray-900 mb-6 text-center">Why Use Travel Planner?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div class="text-gray-700">
          <div class="text-3xl mb-3">💰</div>
          <h3 class="font-medium text-gray-900 mb-2">Save Money</h3>
          <p class="text-sm text-gray-600">Find the best prices and hidden deals</p>
        </div>
        <div class="text-gray-700">
          <div class="text-3xl mb-3">⏱️</div>
          <h3 class="font-medium text-gray-900 mb-2">Save Time</h3>
          <p class="text-sm text-gray-600">All your travel research in one place</p>
        </div>
        <div class="text-gray-700">
          <div class="text-3xl mb-3">🎯</div>
          <h3 class="font-medium text-gray-900 mb-2">Perfect Match</h3>
          <p class="text-sm text-gray-600">Find destinations that fit your style</p>
        </div>
      </div>
    </div>

    <!-- Quick Tips Section -->
    <div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm max-w-2xl mx-auto">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="text-left">
          <p class="font-medium text-gray-900">Getting Started</p>
          <p class="text-sm text-gray-600 mt-1">
            Begin with the Destination Finder to narrow down locations, then explore costs and visa requirements.
          </p>
        </div>
      </div>
    </div>

    <!-- Documentation Link -->
    <div class="text-center mt-8">
      <p class="text-gray-700 text-sm font-light">
        Process
        <a href="/docs"
          class="font-medium text-gray-900 hover:text-blue-600 transition-colors border-b border-gray-300 hover:border-blue-600 ml-2">
          📚 Documentation
        </a>
      </p>
    </div>
  </div>
</div>