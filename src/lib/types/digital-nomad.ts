// src/lib/types/digital-nomad.ts

// Re-export all types from nomadData.ts for backward compatibility
export type {
  Workspace,
  FreeWorkspace,
  CoworkingMembership,
  MoneySavingTips,
  NomadData,
  SubregionNomadData,
  RegionNomadData
} from '$lib/data/nomadData';

// Keep these specific to digital-nomad if needed
export interface DigitalNomadCountry {
  country: string;
  region: string;
  cities: string[];
}

export interface WorkspaceData {
  internet?: any;
  coworkingSpaces?: any;
  community?: any;
  safety?: any;
}

// ADD NEW BUDGET TYPES
export type BudgetCategory = 'zero_spend' | 'already_paid' | 'small_purchase' | 'direct_payment';

export interface BudgetFilteredWorkspace {
  name: string;
  type: string;
  budgetCategory: BudgetCategory;
  price?: number;
  includedWithStay?: boolean;
  minimumPurchase?: number;
  notes?: string;
}