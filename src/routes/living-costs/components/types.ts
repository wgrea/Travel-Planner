// src/routes/living-costs/components/types.ts
// should this be in the lib/type folder?

export type TravelStyle = 'budget' | 'midrange' | 'luxury';
export type AccommodationType = 'hostel' | 'guesthouse' | 'hotel' | 'apartment' | 'luxury';

// Re-export from main types if needed
export type { LivingCostData } from '$lib/types/living-costs';
export type { CountryData } from '$lib/components/CountrySelector.svelte';