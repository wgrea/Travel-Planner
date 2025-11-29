<!-- src/routes/digital-nomad/support/+page.svelte -->
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
      <h1 class="text-5xl font-light mb-4 text-gray-900">Digital Nomad Support</h1>
      <p class="text-gray-700 text-lg font-light max-w-2xl mx-auto">
        Communities, mental health resources, and embassy support for living and working abroad
      </p>
    </div>

    <!-- Content -->
    <div class="space-y-8">
      
      <!-- Expat and Nomad Communities -->
      <div class="p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">👥 Expat and Nomad Communities</h2>
        <p class="text-gray-600 mb-6">
          Global and local networks that connect you with others living abroad—often your best way to find support, housing, job leads, or friends.
        </p>
        <div class="space-y-4">
          <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">I</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">InterNations</h3>
              <p class="text-gray-600 text-sm">One of the largest global expat communities with local events in cities worldwide, professional networking, and discussion forums.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">W</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">WeWorkRemotely Community</h3>
              <p class="text-gray-600 text-sm">Active community of remote workers sharing job opportunities, location advice, and connecting through virtual and in-person events.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
            <div class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">G</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">GoExpat</h3>
              <p class="text-gray-600 text-sm">One-stop hub of expat resources including relocation guides, forums, and practical articles for international living.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
            <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">D</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">Digital Nomad World & NomadList</h3>
              <p class="text-gray-600 text-sm">Organize digital nomad communities worldwide, helping you meet others working remotely, join local meetups, and access travel visa, safety, and cost information.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
            <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">N</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">The Nomadic Network & Nomads Talk</h3>
              <p class="text-gray-600 text-sm">Host online and in-person events for travelers looking to build community and share experiences.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
            <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">E</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">Expatica</h3>
              <p class="text-gray-600 text-sm">One of the largest expat platforms, offering guides on living, working, and social life in dozens of countries.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mental Health Resources -->
      <div class="p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">💙 Counseling and Mental Health Resources</h2>
        <p class="text-gray-600 mb-6">
          Living abroad can bring loneliness, culture stress, or adjustment challenges. These options provide professional support:
        </p>
        <div class="space-y-4">
          <div class="flex items-start gap-4 p-4 bg-teal-50 rounded-lg">
            <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">T</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">The Truman Group</h3>
              <p class="text-gray-600 text-sm">Provides therapy and psychological support via secure video sessions specifically for expats and nomads, with English-speaking, culturally sensitive clinicians.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg">
            <div class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">N</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">NAMI International</h3>
              <p class="text-gray-600 text-sm">Shares mental health program directories for different countries and online options if you can't access U.S. services abroad.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-pink-50 rounded-lg">
            <div class="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">U</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">United for Global Mental Health</h3>
              <p class="text-gray-600 text-sm">Connects you to free or low-cost mental health resources internationally if you're struggling in isolation or crisis.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Government and Embassy Resources -->
      <div class="p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">🏛️ Government and Embassy Resources</h2>
        <p class="text-gray-600 mb-6">
          Institutional safety and guidance systems abroad—your equivalent of campus support services.
        </p>
        <div class="space-y-4">
          <div class="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
            <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">US</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">U.S. State Department</h3>
              <p class="text-gray-600 text-sm">"Living Abroad" page includes checklists for registering with embassies, accessing consular assistance, and understanding safety and healthcare abroad.</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
            <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mt-1 flex-shrink-0">
              <span class="text-sm font-semibold">IC</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">International Citizens Group</h3>
              <p class="text-gray-600 text-sm">Publishes guides on visas, insurance, and legal considerations to make long-term stays easier.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Tips -->
      <div class="p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-blue-200">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">💡 Quick Support Tips</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-4 bg-blue-50 rounded-lg">
            <h3 class="font-semibold text-gray-900 mb-2">Register with Embassy</h3>
            <p class="text-gray-600 text-sm">Always register with your home country's embassy when arriving in a new country for safety updates.</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <h3 class="font-semibold text-gray-900 mb-2">Join Local Groups</h3>
            <p class="text-gray-600 text-sm">Find local expat Facebook groups or Meetup events to build your support network quickly.</p>
          </div>
          <div class="p-4 bg-yellow-50 rounded-lg">
            <h3 class="font-semibold text-gray-900 mb-2">Know Emergency Numbers</h3>
            <p class="text-gray-600 text-sm">Save local emergency numbers and your embassy's contact information in your phone.</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg">
            <h3 class="font-semibold text-gray-900 mb-2">Mental Health Check-ins</h3>
            <p class="text-gray-600 text-sm">Schedule regular check-ins with friends/family back home to maintain emotional connections.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>