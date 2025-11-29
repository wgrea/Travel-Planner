<!-- src/routes/digital-nomad/how-to-work-from-anywhere/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-8">
  <div class="max-w-4xl mx-auto">

    <!-- Back Button -->
    <button on:click={() => goto('/digital-nomad')} class="group mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span class="font-medium text-sm">Back to Digital Nomad</span>
    </button>

    <!-- Header -->
    <div class="mb-12 text-center">
      <h1 class="text-5xl font-light mb-4 text-gray-900">How to Work From Anywhere</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        A practical guide shaped by visas, costs, and nomad essentials
      </p>
    </div>

    <!-- Content -->
    <div class="space-y-8">

<!-- Finding Remote Jobs -->
<div class="p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 mt-8">
  <h2 class="text-2xl font-semibold text-gray-900 mb-6">💼 Finding Remote Jobs</h2>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="p-4 bg-blue-50 rounded-lg">
      <h3 class="font-semibold text-gray-900 mb-2">Job Boards (Chance Layer)</h3>
      <ul class="text-gray-600 text-sm space-y-1">
        <li>• RemoteOK</li>
        <li>• We Work Remotely</li>
        <li>• FlexJobs</li>
        <li>• AngelList</li>
      </ul>
      <p class="text-gray-500 text-xs mt-2">
        Boards are useful, but they’re only part of the chance equation.
      </p>
    </div>
    <div class="p-4 bg-green-50 rounded-lg">
      <h3 class="font-semibold text-gray-900 mb-2">Networking (Signal Layer)</h3>
      <ul class="text-gray-600 text-sm space-y-1">
        <li>• LinkedIn Remote Groups</li>
        <li>• Digital Nomad Facebook Groups</li>
        <li>• Remote Work Meetups</li>
        <li>• 1st‑degree connections → comment meaningfully</li>
        <li>• 2nd‑degree connections → send intro messages, ask for referrals when natural</li>
      </ul>
      <p class="text-gray-500 text-xs mt-2">
        Authentic conversations and referral bridges often matter more than listings.
      </p>
    </div>
  </div>
</div>

<!-- In-Demand Remote Skills -->
<div class="p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 mt-8">
  <h2 class="text-2xl font-semibold text-gray-900 mb-6">🚀 In-Demand Remote Skills</h2>
  <div class="grid md:grid-cols-3 gap-4">
    <div class="p-4 bg-purple-50 rounded-lg text-center">
      <div class="text-2xl mb-2">💻</div>
      <h3 class="font-semibold text-gray-900">Tech</h3>
      <p class="text-gray-600 text-sm">
        Web development, DevOps, Cybersecurity<br/>
        <span class="text-gray-500 text-xs">Portable overlaps: full‑stack, product design, transferable skills from systems programming, computer vision, embedded systems.</span>
      </p>
    </div>
    <div class="p-4 bg-yellow-50 rounded-lg text-center">
      <div class="text-2xl mb-2">✍️</div>
      <h3 class="font-semibold text-gray-900">Creative</h3>
      <p class="text-gray-600 text-sm">
        Content writing, Design, Video editing<br/>
        <span class="text-gray-500 text-xs">Side projects can prove async collaboration and make your portfolio remote‑ready.</span>
      </p>
    </div>
    <div class="p-4 bg-red-50 rounded-lg text-center">
      <div class="text-2xl mb-2">📊</div>
      <h3 class="font-semibold text-gray-900">Business</h3>
      <p class="text-gray-600 text-sm">
        Digital marketing, Project management, Sales<br/>
        <span class="text-gray-500 text-xs">Focus on skills that scale across industries and geographies.</span>
      </p>
    </div>
  </div>
</div>


      <!-- Navigation Capsules -->
      <div class="flex gap-2 justify-center mt-8 text-sm">
        <button on:click={() => goto('/visa')} class="px-3 py-1 rounded-full bg-blue-100 hover:bg-blue-200">📝 Visa</button>
        <button on:click={() => goto('/flight-costs')} class="px-3 py-1 rounded-full bg-yellow-100 hover:bg-yellow-200">✈️ Flight Costs</button>
        <button on:click={() => goto('/living-costs')} class="px-3 py-1 rounded-full bg-green-100 hover:bg-green-200">🏠 Living Costs</button>
        <button on:click={() => goto('/resonance')} class="px-3 py-1 rounded-full bg-purple-100 hover:bg-purple-200">🌊 Resonance</button>
      </div>
    </div>
  </div>
</div>

