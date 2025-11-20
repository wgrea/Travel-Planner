// src/lib/utils/filterStorage.ts
import { browser } from '$app/environment';

export const saveFilters = (filters: any) => {
  if (browser) {
    localStorage.setItem('travelFilters', JSON.stringify(filters));
  }
};

export const loadFilters = () => {
  if (browser) {
    const saved = localStorage.getItem('travelFilters');
    return saved ? JSON.parse(saved) : null;
  }
  return null;
};