// src/lib/types/digital-nomad.ts
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