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
The top bottoms for before have disappeared. I do not know why.
I want to change the aesthetic of the country selector. Since I am using the same code accross pages, rather than make a new one for every page, I am thinking of finding the right aesthetic and not make it look obvious that it is from another page. I hope I can also make each one look different. 
also, why did the passport required disappear. 
I definitely need to look back at old messages to add that code back.


-->

<script lang="ts">
  import { goto } from '$app/navigation';

  function navigate(path: string) {
    goto(path);
  }

  const menuItems = [
    {
      title: "Flight Costs & Timing",
      description: "Find best seasons and flight prices",
      icon: "✈️",
      path: "/flight-costs",
      color: "from-blue-300 to-cyan-300",
      bgColor: "bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50"
    },
    {
      title: "Living Costs", 
      description: "Accommodation, food, and daily expenses",
      icon: "🏠",
      path: "/living-costs", 
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-400 via-emerald-500 to-teal-300"
    },
    {
      title: "Digital Nomad",
      description: "Coworking, wifi, and remote work essentials", 
      icon: "💻",
      path: "/digital-nomad",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-400 via-indigo-500 to-blue-300"
    },
    {
      title: "Visa Requirements",
      description: "Check visa needs and application process",
      icon: "📝",
      path: "/visa",
      color: "from-stone-400 to-stone-600", // Fixed - use same gradient format as others
      bgColor: "bg-gradient-to-br from-stone-500 via-stone-600 to-stone-700"
    },
    {
      title: "Destination Finder",
      description: "Find places that match your travel style",
      icon: "🔍", 
      path: "/filters",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-300"
    },
    {
      title: "Travel Resonance",
      description: "Cultural fit and personal compatibility",
      icon: "🌊",
      path: "/resonance", 
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-300"
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-12 relative overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    <div class="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg animate-float"></div>
    <div class="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-purple-400/20 backdrop-blur-md border border-white/20 shadow-lg animate-float-delayed"></div>
    <div class="absolute bottom-32 left-[20%] w-40 h-40 rounded-full bg-blue-400/15 backdrop-blur-md border border-white/20 shadow-lg animate-float-slow"></div>
    <div class="absolute bottom-20 right-[25%] w-28 h-28 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg animate-float"></div>
    
    <div class="absolute top-1/2 right-[8%] text-4xl opacity-50 animate-swim-delayed">✈️</div>
    <div class="absolute bottom-1/4 left-[12%] text-3xl opacity-40 animate-swim-slow">🌍</div>

    <div class="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent rotate-12 opacity-60"></div>
    <div class="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent -rotate-12 opacity-50"></div>
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
  </div>

  <div class="max-w-6xl mx-auto relative z-10">
    <!-- Header -->
    <div class="text-center mb-16">
      <div class="inline-block mb-6 relative">
        <div class="absolute inset-0 bg-white/10 blur-2xl"></div>
        <div class="relative text-8xl filter drop-shadow-lg">🌎</div>
      </div>
      
      <h1 class="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] tracking-tight">
        Travel Planner
      </h1>
      
      <p class="text-white/80 text-xl font-light tracking-wide drop-shadow-md max-w-2xl mx-auto">
        Your comprehensive guide to planning the perfect trip. Find destinations, compare costs, and organize everything in one place.
      </p>
    </div>

    <!-- Main Menu Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {#each menuItems as item}
        <button
          on:click={() => navigate(item.path)}
          class="group relative overflow-hidden rounded-2xl p-8 text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 bg-gradient-to-br {item.color} border border-white/20 backdrop-blur-sm"
        >
          <!-- Background shine effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Content -->
          <div class="relative z-10">
            <div class="text-4xl mb-4 filter drop-shadow-lg">{item.icon}</div>
            <h3 class="text-2xl font-bold text-white mb-2 drop-shadow-md">{item.title}</h3>
            <p class="text-white/90 text-sm font-light drop-shadow-sm">{item.description}</p>
          </div>
          
          <!-- Hover arrow -->
          <div class="absolute bottom-4 right-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
            <span class="text-lg">→</span>
          </div>
        </button>
      {/each}
    </div>

    <!-- Quick Stats or Featured Section -->
    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <h2 class="text-2xl font-bold text-white mb-6 text-center">Why Use Travel Planner?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div class="text-white/90">
          <div class="text-3xl mb-2">💰</div>
          <h3 class="font-semibold mb-2">Save Money</h3>
          <p class="text-sm text-white/70">Find the best prices and hidden deals</p>
        </div>
        <div class="text-white/90">
          <div class="text-3xl mb-2">⏱️</div>
          <h3 class="font-semibold mb-2">Save Time</h3>
          <p class="text-sm text-white/70">All your travel research in one place</p>
        </div>
        <div class="text-white/90">
          <div class="text-3xl mb-2">🎯</div>
          <h3 class="font-semibold mb-2">Perfect Match</h3>
          <p class="text-sm text-white/70">Find destinations that fit your style</p>
        </div>
      </div>
    </div>

    <!-- Documentation Link -->
    <p class="text-white/95 text-sm font-light mt-6 text-center">
      Process
      <a href="/docs"
        class="font-semibold hover:text-white transition-colors border-b-2 border-white/50 hover:border-white ml-2">
        📚 Documentation
      </a>
    </p>
  </div>
</div>

<style>
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-float-delayed {
    animation: float 7s ease-in-out 1s infinite;
  }
  .animate-float-slow {
    animation: float 8s ease-in-out 2s infinite;
  }
  .animate-swim-delayed {
    animation: swim 10s ease-in-out 2s infinite;
  }
  .animate-swim-slow {
    animation: swim 12s ease-in-out 4s infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @keyframes swim {
    0%, 100% { transform: translateX(0px) translateY(0px); }
    25% { transform: translateX(10px) translateY(-10px); }
    50% { transform: translateX(0px) translateY(-20px); }
    75% { transform: translateX(-10px) translateY(-10px); }
  }
</style>