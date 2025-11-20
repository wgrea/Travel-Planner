<!-- src/routes/filters/components/SocialLifestyleFilters.svelte -->

<!--
Improvements:
- Show the countries
- I do not want to use numbers because they can vary


-->

<script lang="ts">
  export let socialEnvironment: string[];
  export let legalPreferences: string[];
  export let isCheap: boolean;
  export let isVisaFree: boolean;
  export let isWarmWeather: boolean;
  export let maxDays: number;
  export let minInternetSpeed: number;
  export let safetyScore: number;
</script>

<h2 class="text-3xl font-bold mt-8 mb-6 border-b border-white/50 pb-3 flex items-center gap-2">
  <span class="text-3xl">🫂</span> Social & Lifestyle
</h2>

<div class="space-y-8">
  <!-- Original Combined Search Criteria -->
  <div>
    <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
      <span class="text-2xl">🔍</span> Basic Requirements
    </h3>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <label class="flex items-center space-x-2 p-3 rounded-xl bg-white/20 border border-white/40 cursor-pointer transition-colors duration-200 hover:bg-white/30">
        <input type="checkbox" bind:checked={isCheap} class="w-5 h-5 form-checkbox text-blue-500 bg-white/40 border-white/60 rounded-md focus:ring-blue-400">
        <span class="text-lg">💸 Cheap</span>
      </label>
      
      <label class="flex items-center space-x-2 p-3 rounded-xl bg-white/20 border border-white/40 cursor-pointer transition-colors duration-200 hover:bg-white/30">
        <input type="checkbox" bind:checked={isVisaFree} class="w-5 h-5 form-checkbox text-blue-500 bg-white/40 border-white/60 rounded-md focus:ring-blue-400">
        <span class="text-lg">🛂 Visa-Free</span>
      </label>

      <label class="flex items-center space-x-2 p-3 rounded-xl bg-white/20 border border-white/40 cursor-pointer transition-colors duration-200 hover:bg-white/30">
        <input type="checkbox" bind:checked={isWarmWeather} class="w-5 h-5 form-checkbox text-blue-500 bg-white/40 border-white/60 rounded-md focus:ring-blue-400">
        <span class="text-lg">☀️ Warm</span>
      </label>

      <div class="p-3 rounded-xl bg-white/20 border border-white/40">
        <label for="maxDays" class="block text-sm font-light mb-1">Max Stay (Days):</label>
        <input type="number" id="maxDays" bind:value={maxDays} min="30" max="365" class="w-full text-lg font-bold bg-transparent border-b border-white/60 focus:outline-none text-lime-300"/>
      </div>
    </div>
  </div>

  <!-- Digital Nomad Lifestyle -->
  <div>
    <h3 class="text-xl font-semibold mb-4 flex items-center gap-2">
      <span class="text-2xl">💻</span> Digital Nomad Needs
    </h3>
    <div class="space-y-4">
      <div>
        <label for="internet-speed" class="block text-lg font-medium mb-2">
          🚀 Min. Internet Speed: <span class="text-yellow-300 font-bold">{minInternetSpeed} Mbps</span>
        </label>
        <input 
          id="internet-speed"
          type="range"
          min="10"
          max="200"
          step="10"
          bind:value={minInternetSpeed}
          class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/50"
        >
      </div>

      <div>
        <label for="safety-score" class="block text-lg font-medium mb-2">
          🚨 Safety Score (Min): <span class="text-cyan-200 font-bold">{safetyScore} / 5</span>
        </label>
        <input 
          id="safety-score"
          type="range"
          min="1"
          max="5"
          step="1"
          bind:value={safetyScore}
          class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/50"
        >
      </div>
    </div>
  </div>

  <!-- Social Preferences -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h4 class="text-lg font-medium mb-3">Social Environment</h4>
      <div class="space-y-2">
        {#each ['Hug Culture', 'Touch-Friendly', 'Meetups Like Parties', 'Young Population', 'Tech Community'] as pref}
          <label class="flex items-center space-x-2 p-2 rounded-lg bg-white/15 cursor-pointer">
            <input 
              type="checkbox" 
              bind:group={socialEnvironment} 
              value={pref}
              class="w-4 h-4 form-checkbox text-pink-500 bg-white/40 border-white/60 rounded"
            >
            <span class="text-white/90">{pref}</span>
          </label>
        {/each}
      </div>
    </div>

    <div>
      <h4 class="text-lg font-medium mb-3">Legal & Business</h4>
      <div class="space-y-2">
        {#each ['Freelancer Visa', 'Low Tax', 'Crypto Legal', 'Stripe Support', 'Easy Banking'] as pref}
          <label class="flex items-center space-x-2 p-2 rounded-lg bg-white/15 cursor-pointer">
            <input 
              type="checkbox" 
              bind:group={legalPreferences} 
              value={pref}
              class="w-4 h-4 form-checkbox text-green-500 bg-white/40 border-white/60 rounded"
            >
            <span class="text-white/90">{pref}</span>
          </label>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  /* Range slider styles for this component */
  input[type="range"] {
    background: linear-gradient(to right, rgb(34 197 94) 0%, rgb(34 197 94) var(--range-progress, 50%), rgb(255 255 255 / 0.5) var(--range-progress, 50%), rgb(255 255 255 / 0.5) 100%);
  }
  
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: white;
    border: 2px solid rgb(34 197 94);
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  }
</style>