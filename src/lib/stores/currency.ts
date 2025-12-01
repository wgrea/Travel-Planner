// src/lib/stores/currency.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Get initial currency from localStorage or default to USD
const initialCurrency = browser ? localStorage.getItem('preferred-currency') || 'USD' : 'USD';

export const selectedCurrency = writable<string>(initialCurrency);

// Sync with localStorage
if (browser) {
  selectedCurrency.subscribe(value => {
    localStorage.setItem('preferred-currency', value);
  });
}