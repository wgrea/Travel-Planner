<!-- src/routes/travel-essentials/+page.svelte -->

<!--

🎒 Travel Essentials

Aesthetic: Warm Clean Girl
Colors: Rose/pink (from-rose-50 to-pink-50)
Special Elements:

Packing cube illustrations
Category tabs with soft hover states
Friendly, helpful tone in design


Why: Practical guide, should feel organized and cozy

-->

<!-- src/routes/travel-essentials/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';
  import CategoryNav from './components/CategoryNav.svelte';
  import PackingSection from './components/PackingSection.svelte';
  import DocumentsSection from './components/DocumentsSection.svelte';
  import ElectronicsSection from './components/ElectronicsSection.svelte';
  import HealthSection from './components/HealthSection.svelte';
  import MoneySection from './components/MoneySection.svelte';
  import QuickTips from './components/QuickTips.svelte';

  // Data
  const categories = [
    { id: 'packing', title: 'Packing Lists', icon: '🧳', description: 'Essential items for different types of trips', color: 'from-rose-100 to-pink-100', accent: 'text-rose-700' },
    { id: 'documents', title: 'Important Documents', icon: '📄', description: 'What paperwork you need to bring', color: 'from-blue-100 to-cyan-100', accent: 'text-blue-700' },
    { id: 'electronics', title: 'Tech & Electronics', icon: '🔌', description: 'Gadgets, adapters, and power banks', color: 'from-purple-100 to-indigo-100', accent: 'text-purple-700' },
    { id: 'health', title: 'Health & Safety', icon: '💊', description: 'Medication, first aid, and insurance', color: 'from-emerald-100 to-teal-100', accent: 'text-emerald-700' },
    { id: 'money', title: 'Money & Finances', icon: '💳', description: 'Cash, cards, and payment methods', color: 'from-amber-100 to-yellow-100', accent: 'text-amber-700' }
  ];

  const tripTypes = [
    { type: 'Beach Vacation', icon: '🏖️', essentials: ['Swimwear', 'Sunscreen SPF 50+', 'Beach towel', 'Hat & sunglasses', 'Waterproof phone case', 'Flip flops'], color: 'border-amber-200 bg-amber-50' },
    { type: 'City Break', icon: '🏙️', essentials: ['Comfortable walking shoes', 'Light backpack', 'Portable charger', 'City map/guidebook', 'Dressy outfit', 'Universal adapter'], color: 'border-gray-200 bg-gray-50' },
    { type: 'Mountain Trek', icon: '⛰️', essentials: ['Hiking boots', 'Layered clothing', 'Water bottle', 'First aid kit', 'Headlamp', 'Rain jacket'], color: 'border-emerald-200 bg-emerald-50' },
    { type: 'Business Trip', icon: '💼', essentials: ['Business attire', 'Laptop & charger', 'Portable wifi', 'Business cards', 'Noise-canceling headphones', 'Travel steamer'], color: 'border-blue-200 bg-blue-50' }
  ];

  const essentialDocuments = [
    { item: 'Passport', required: true, notes: '6+ months validity' },
    { item: 'Visa', required: false, notes: 'If required' },
    { item: 'Travel Insurance', required: true, notes: 'With medical coverage' },
    { item: 'Flight Tickets', required: true, notes: 'Printed or digital' },
    { item: 'Hotel Reservations', required: false, notes: 'Confirmation emails' },
    { item: 'Driver\'s License', required: false, notes: 'International if renting' },
    { item: 'Vaccination Certificates', required: false, notes: 'If required' },
    { item: 'Emergency Contacts', required: true, notes: 'Printed copy' }
  ];

  const techEssentials = [
    { item: 'Universal Travel Adapter', priority: 'high' as const },
    { item: 'Portable Power Bank', priority: 'high' as const },
    { item: 'USB Cables', priority: 'high' as const },
    { item: 'Noise-Canceling Headphones', priority: 'medium' as const },
    { item: 'E-reader/Tablet', priority: 'medium' as const },
    { item: 'Portable WiFi Hotspot', priority: 'low' as const },
    { item: 'Travel Router', priority: 'low' as const },
    { item: 'Waterproof Phone Case', priority: 'medium' as const }
  ];

  // State
  let selectedCategory = 'packing';
  let showChecklist = false;
  let newItem = '';
  let checklistItems = [
    { id: 1, name: 'Passport', checked: true },
    { id: 2, name: 'Toothbrush', checked: false },
    { id: 3, name: 'Phone charger', checked: false },
    { id: 4, name: 'Travel adapter', checked: true }
  ];
  let nextItemId = 5;

  // Navigation
  function goBack() {
    goto('/');
  }

  // Event handlers
  function handleCategorySelect(categoryId: string) {
    selectedCategory = categoryId;
  }

  function toggleChecklist() {
    showChecklist = !showChecklist;
  }

  function addItem() {
    if (newItem.trim()) {
      checklistItems = [...checklistItems, {
        id: nextItemId++,
        name: newItem.trim(),
        checked: false
      }];
      newItem = '';
    }
  }

  function removeItem(id: number) {
    checklistItems = checklistItems.filter(item => item.id !== id);
  }

  function toggleItem(id: number) {
    checklistItems = checklistItems.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
  }

  function quickAdd(item: string) {
    newItem = item;
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      addItem();
    }
  }
</script>
<div class="min-h-screen bg-gradient-to-br from-rose-50/40 to-pink-50/40 px-4 py-8 relative overflow-hidden">
  <!-- Subtle packing cube pattern background -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Packing cube illustrations (very subtle) -->
    <div class="absolute top-10 right-[10%] w-24 h-16 bg-rose-200/10 rotate-12 rounded-lg border border-rose-300/20"></div>
    <div class="absolute top-40 left-[15%] w-20 h-20 bg-pink-200/10 -rotate-6 rounded-lg border border-pink-300/20"></div>
    <div class="absolute bottom-32 right-[20%] w-28 h-18 bg-rose-300/10 rotate-45 rounded-lg border border-rose-400/20"></div>
    
    <!-- Soft dots pattern -->
    <div class="absolute top-1/3 left-[30%] w-2 h-2 bg-rose-300/20 rounded-full"></div>
    <div class="absolute bottom-1/4 right-[35%] w-3 h-3 bg-pink-300/20 rounded-full"></div>
    <div class="absolute top-2/3 left-[40%] w-2 h-2 bg-rose-300/15 rounded-full"></div>
  </div>

  <div class="max-w-6xl mx-auto relative z-10">
    <!-- Header with cozy aesthetic -->
    <div class="flex items-center justify-between mb-8">
      
      <div class="text-center flex-1">
        <div class="text-5xl mb-3 animate-bounce-slow">🎒</div>
        <h1 class="text-5xl font-light text-rose-900 mb-2">Travel Essentials</h1>
        <p class="text-rose-700/80 mt-2 font-light">Never forget important items again</p>
      </div>
      
      <div class="w-24"></div> <!-- Spacer for alignment -->
    </div>
    
    <!-- Category Navigation - Warm and friendly -->
    <CategoryNav 
      {categories} 
      {selectedCategory} 
      onCategorySelect={handleCategorySelect} 
    />
    
    <!-- Content Area with cozy cards -->
    <div class="space-y-8 mt-8">
      {#if selectedCategory === 'packing'}
        <div class="bg-gradient-to-br from-white/80 to-rose-50/50 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/60 shadow-lg">
          <PackingSection
            {tripTypes}
            {checklistItems}
            {showChecklist}
            {newItem}
            onToggleChecklist={toggleChecklist}
            onAddItem={addItem}
            onRemoveItem={removeItem}
            onToggleItem={toggleItem}
            onQuickAdd={quickAdd}
            onKeyPress={handleKeyPress}
          />
        </div>
      {/if}
      
      {#if selectedCategory === 'documents'}
        <div class="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/60 shadow-lg">
          <DocumentsSection {essentialDocuments} />
        </div>
      {/if}
      
      {#if selectedCategory === 'electronics'}
        <div class="bg-gradient-to-br from-white/80 to-purple-50/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/60 shadow-lg">
          <ElectronicsSection {techEssentials} />
        </div>
      {/if}
      
      {#if selectedCategory === 'health'}
        <div class="bg-gradient-to-br from-white/80 to-emerald-50/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200/60 shadow-lg">
          <HealthSection />
        </div>
      {/if}
      
      {#if selectedCategory === 'money'}
        <div class="bg-gradient-to-br from-white/80 to-amber-50/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/60 shadow-lg">
          <MoneySection />
        </div>
      {/if}
    </div>
    
    <!-- Quick Tips with cozy styling -->
    <div class="mt-12">
      <div class="bg-gradient-to-r from-rose-50/70 to-pink-50/70 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/60 shadow-lg">
        <QuickTips />
      </div>
    </div>


  </div>
</div>
