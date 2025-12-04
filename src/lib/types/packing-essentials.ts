// src/lib/types/packing-essentials.ts
export interface Category {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  accent: string;
}

export interface TripType {
  type: string;
  icon: string;
  essentials: string[];
  color: string;
}

export interface DocumentItem {
  item: string;
  required: boolean;
  notes: string;
}

export interface TechEssential {
  item: string;
  priority: 'low' | 'medium' | 'high';
}

export interface ChecklistItem {
  id: number;
  name: string;
  checked: boolean;
}

// Helper type for the header component
export type GoBackFunction = () => void;