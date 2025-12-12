<!-- src/route/+page.svelte --> 
<!-- Tailwind CSS --> 

<!-- 
1. Modify How to WFA and Support
2. Clean up the redundant parts + Aesthetic improvements


Looking at your Travel Planner project structure and your goals, here are my recommendations:

## 1. **Cheapest/Most Expensive Month Feature**
## 2. **Global Coworking Memberships Page**
## 3. **Navigation & User Flow**
## 4. **Mobile Responsiveness
## 5. **Aesthetics of the Components**
## 6. ## Make sure every file is pushed to github ##

-->

<!--
Make sure the visa page and the flight costs page don't list countries that don't have data ready yet.

Maybe keep the header and footer the same throughout the site.

Countries to still add, but make sure you show certain files first to remain good UX:
- South Korea
- China
- Taiwan
- Algeria
- Armenia
- Austria
- Germany
- Poland
- Slovenia
- Sweden

- Norway
- Finland
- Denmark
- Sir Lanka
- New Zealand
- Philippines
- Bolivia
- Columbia
- Chile
- Peru

- Australia
- Canada
- Russia
- Egypt
- South Africa
- United Arab Emirates
- Croatia
- Guatamala
- costa Rica
- Belize

- Nicaragua
- Honduras


-->

<!--
I need to add trust like where does the information come from besides DeepSeek, Perplexity, etc.

-->

<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  function navigate(path: string) {
    goto(path);
  }

  const menuItems = [
    {
      title: "Destination Finder",
      description: "Find places that match your travel style",
      icon: "🔍", 
      path: "/resonance",
      color: "from-amber-50 to-orange-50",
      accent: "text-amber-700"
    },  
    {
      title: "Visa Requirements",
      description: "Check visa needs and application process",
      icon: "📝",
      path: "/visa",
      color: "from-stone-50 to-stone-100",
      accent: "text-stone-700"
    },  
    {
      title: "Travel Essentials",
      description: "Packing lists and travel must-haves",
      icon: "🎒",
      path: "/travel-essentials",
      color: "from-rose-50 to-pink-50",
      accent: "text-rose-700"
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
    }
  ];

  // Digital Nomad sub-pages - smaller and more subtle
  const digitalNomadSubPages = [
    {
      title: "Supports & Communities",
      description: "Expat networks and mental health resources",
      icon: "👥",
      path: "/digital-nomad/support",
      color: "from-gray-50 to-gray-100",
      accent: "text-gray-600"
    },
    {
      title: "Work From Anywhere",
      description: "Remote jobs and location-independent careers",
      icon: "💼",
      path: "/digital-nomad/how-to-work-from-anywhere",
      color: "from-gray-50 to-gray-100",
      accent: "text-gray-600"
    }
  ];
</script>
<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 section-padding relative overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <div class="absolute top-20 left-[10%] w-32 h-32 radius-large
      bg-gradient-to-br from-blue-200/30 to-cyan-200/30 
      border border-white/40 shadow-lg backdrop-blur-sm
      animate-float-slow">
    </div>
    
    <div class="absolute top-40 right-[15%] w-24 h-24 radius-large 
      bg-indigo-100/30 border border-indigo-100/50 shadow-sm
      animate-float-medium [animation-delay:1s]">
    </div>
    
    <div class="absolute bottom-32 left-[20%] w-40 h-40 radius-large 
      bg-emerald-100/20 border border-emerald-100/40 shadow-sm
      animate-float-slow [animation-delay:2s]">
    </div>
    
    <div class="absolute bottom-20 right-[25%] w-28 h-28 radius-large 
      bg-amber-100/20 border border-amber-100/40 shadow-sm
      animate-float-medium [animation-delay:1.5s]">
    </div>
    
    <div class="absolute top-1/2 right-[8%] text-4xl opacity-10">✈️</div>
    <div class="absolute bottom-1/4 left-[12%] text-3xl opacity-10">🌍</div>
  </div>

  <div class="max-w-6xl mx-auto relative z-10">
    <!-- Header -->
    <div class="text-center mb-12">
      <div class="inline-block mb-6 relative">
        <div class="absolute inset-0 bg-white/20 blur-2xl rounded-full"></div>
        <div class="relative text-7xl filter drop-shadow-lg">🌎</div>
      </div>
      
      <h1 class="text-5xl font-display font-light mb-4">
        Echotrip
      </h1>
      
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Your comprehensive guide to planning the perfect trip. Find destinations, compare costs, and organize everything in one place.
      </p>
    </div>

<!-- Main Menu Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-standard mb-12">
  {#each menuItems as item}
    <button
      on:click={() => navigate(item.path)}
      aria-label="Go to {item.title}"
      class="group relative text-left transition-all duration-300 hover:scale-105"
    >
      <!-- Apply gradient background to the card -->
      <div class="card-standard card-padding bg-gradient-to-br {item.color}">
        <!-- Content -->
        <div class="relative z-10">
          <div class="text-3xl mb-3 {item.accent}">{item.icon}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p class="text-gray-600 text-sm font-light">{item.description}</p>
        </div>
        
        <!-- Hover arrow -->
        <div class="absolute bottom-6 right-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300">
          <span class="text-lg">→</span>
        </div>
      </div>
    </button>
  {/each}
</div>

<!-- Digital Nomad Sub-pages Section -->
<div class="mb-12">
  <div class="text-center mb-4">
    <h2 class="text-lg font-medium text-gray-700">For Remote Workers</h2>
    <p class="text-gray-500 text-sm mt-1">Additional resources for digital nomads</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
    {#each digitalNomadSubPages as item}
      <button
        on:click={() => navigate(item.path)}
        aria-label="Go to {item.title}"
        class="group relative text-left transition-all duration-200 hover:scale-102"
      >
        <!-- Apply gradient to the smaller cards too -->
        <div class="card-standard p-4 bg-gradient-to-br {item.color}">
          <!-- Content -->
          <div class="relative z-10">
            <div class="text-xl mb-2 {item.accent}">{item.icon}</div>
            <h3 class="text-base font-medium text-gray-700 mb-1">{item.title}</h3>
            <p class="text-gray-500 text-xs font-light">{item.description}</p>
          </div>
          
          <!-- Hover arrow - smaller -->
          <div class="absolute bottom-4 right-4 text-gray-400 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all duration-200">
            <span class="text-sm">→</span>
          </div>
        </div>
      </button>
    {/each}
  </div>
</div>

    <!-- Features Section -->
    <div class="card-standard card-padding mb-6">
      <h2 class="text-2xl font-light text-gray-900 mb-6 text-center">Why Use Echotrip?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-standard text-center">
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
    <div class="card-standard card-padding">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 radius-large bg-blue-100 flex items-center justify-center text-blue-600">
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
  </div>
</div>