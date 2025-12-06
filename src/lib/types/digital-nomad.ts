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
