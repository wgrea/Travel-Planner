<!-- src/routes/filters/components/SocialLifestyleFilters.svelte -->
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

<div class="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
  <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
    <span class="text-2xl">🫂</span> Social & Lifestyle
  </h2>

  <div class="space-y-6">
    <!-- Original Combined Search Criteria -->
    <div>
      <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="text-xl">🔍</span> Basic Requirements
      </h3>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        <label class="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 border border-gray-200 cursor-pointer transition-colors duration-200 hover:bg-blue-50 hover:border-blue-200">
          <input type="checkbox" bind:checked={isCheap} class="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500">
          <span class="text-gray-900 text-sm font-medium">💸 Cheap</span>
        </label>
        
        <label class="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 border border-gray-200 cursor-pointer transition-colors duration-200 hover:bg-blue-50 hover:border-blue-200">
          <input type="checkbox" bind:checked={isVisaFree} class="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500">
          <span class="text-gray-900 text-sm font-medium">🛂 Visa-Free</span>
        </label>

        <label class="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 border border-gray-200 cursor-pointer transition-colors duration-200 hover:bg-blue-50 hover:border-blue-200">
          <input type="checkbox" bind:checked={isWarmWeather} class="w-5 h-5 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500">
          <span class="text-gray-900 text-sm font-medium">☀️ Warm</span>
        </label>

        <div class="p-3 rounded-lg bg-gray-50 border border-gray-200">
          <label for="maxDays" class="block text-sm text-gray-600 mb-1">Max Stay (Days):</label>
          <input type="number" id="maxDays" bind:value={maxDays} min="30" max="365" class="w-full text-md font-semibold bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500 text-emerald-600"/>
        </div>
      </div>
    </div>

    <!-- Digital Nomad Lifestyle -->
    <div>
      <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span class="text-xl">💻</span> Digital Nomad Needs
      </h3>
      <div class="space-y-4">
        <div>
          <label for="internet-speed" class="block text-gray-700 font-medium mb-2">
            🚀 Min. Internet Speed: <span class="text-blue-600 font-bold">{minInternetSpeed} Mbps</span>
          </label>
          <input 
            id="internet-speed"
            type="range"
            min="10"
            max="200"
            step="10"
            bind:value={minInternetSpeed}
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          >
        </div>

        <div>
          <label for="safety-score" class="block text-gray-700 font-medium mb-2">
            🚨 Safety Score (Min): <span class="text-blue-600 font-bold">{safetyScore} / 5</span>
          </label>
          <input 
            id="safety-score"
            type="range"
            min="1"
            max="5"
            step="1"
            bind:value={safetyScore}
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          >
        </div>
      </div>
    </div>

    <!-- Social Preferences -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="text-md font-medium text-gray-900 mb-3">Social Environment</h4>
        <div class="space-y-2">
          {#each ['Hug Culture', 'Touch-Friendly', 'Meetups Like Parties', 'Young Population', 'Tech Community'] as pref}
            <label class="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 cursor-pointer hover:bg-blue-50">
              <input 
                type="checkbox" 
                bind:group={socialEnvironment} 
                value={pref}
                class="w-4 h-4 text-pink-600 bg-white border-gray-300 rounded focus:ring-pink-500"
              >
              <span class="text-gray-900 text-sm">{pref}</span>
            </label>
          {/each}
        </div>
      </div>

      <div>
        <h4 class="text-md font-medium text-gray-900 mb-3">Legal & Business</h4>
        <div class="space-y-2">
          {#each ['Freelancer Visa', 'Low Tax', 'Crypto Legal', 'Stripe Support', 'Easy Banking'] as pref}
            <label class="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 cursor-pointer hover:bg-green-50">
              <input 
                type="checkbox" 
                bind:group={legalPreferences} 
                value={pref}
                class="w-4 h-4 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500"
              >
              <span class="text-gray-900 text-sm">{pref}</span>
            </label>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
