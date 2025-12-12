// src/lib/data/visa.ts
    // What I think is Vietnam is selected in departure country, so what is on here will go into "Select Departure Country" and the file go into the "Browse Countries" section

import type { VisaInfo } from '$lib/types/visa';
import { mexicoVisaData } from './countries/north-america/mexico/index';
import { azerbaijanVisaData } from './countries/europe/caucasus/azerbaijan/index'; 
import { thailandVisaData } from './countries/southeast-asia/thailand/index';
import { unitedStatesVisaData } from './countries/north-america/united-states/index';
import { vietnamVisaData } from './countries/southeast-asia/vietnam/index';
import { germanyVisaData } from './countries/europe/western-europe/germany';
import { spainVisaData } from './countries/europe/western-europe/spain/index';
import { canadaVisaData } from './countries/north-america/canada';
import { indonesiaVisaData } from './countries/southeast-asia/indonesia/index';
import { argentinaVisaData } from './countries/south-america/argentina/index';
import { brazilVisaData } from './countries/south-america/brazil/index';
import { portugalVisaData } from './countries/europe/western-europe/portugal/index';
import { georgiaVisaData } from './countries/europe/caucasus/georgia/index';
import { greeceVisaData } from './countries/europe/southern-europe/greece/index';
import { turkeyVisaData } from './countries/europe/southern-europe/turkey/index';
import { panamaVisaData } from './countries/central-america/panama/index';
import { japanVisaData } from './countries/east-asia/japan/index';
import { italyVisaData } from './countries/europe/southern-europe/italy/index';
import { franceVisaData} from './countries/europe/western-europe/france/index';
import { laosVisaData} from './countries/southeast-asia/laos/index';
import { indiaVisaData} from './countries/south-asia/india/index';
import { bangladeshVisaData} from './countries/south-asia/bangladesh/index';
import { nepalVisaData} from './countries/south-asia/nepal/index';
import { moroccoVisaData} from './countries/northern-africa/morocco/index';
import { ukVisaData} from './countries/europe/western-europe/united-kingdom/index';

export const visaData: Record<string, Record<string, VisaInfo>> = {
  // Destination: Mexico | Visa requirements FOR entering Mexico
  "Mexico": mexicoVisaData,  // US/Germany/UK citizens → Mexico
  // Destination: Thailand | Visa requirements FOR entering Thailand  
  "Thailand": thailandVisaData,  // US/Canada/etc citizens → Thailand
  // Destination: Vietnam | Visa requirements FOR entering Vietnam
  "Vietnam": vietnamVisaData,  // Various citizens → Vietnam
  // Destination: United States | Visa requirements FOR entering USA
  "United States": unitedStatesVisaData,  // Various citizens → USA
  // Destination: Canada | Visa requirements FOR entering Mexico
  "Canada": canadaVisaData,
  "Indonesia": indonesiaVisaData,
  "Argentina": argentinaVisaData,
  "Brazil": brazilVisaData,
  "Portugal": portugalVisaData,
  // Destination: Georgia | Visa requirements FOR entering Mexico
  "Georgia": georgiaVisaData,
  "Azerbaijan": azerbaijanVisaData,
  "Germany": germanyVisaData,
  "Spain": spainVisaData,
  "Greece": greeceVisaData,
  "Turkey": turkeyVisaData,
  "Panama": panamaVisaData,
  "Japan": japanVisaData,
  "Italy": italyVisaData,
  "France": franceVisaData,
  "Laos": laosVisaData,
  "India": indiaVisaData,
  "Bangladesh": bangladeshVisaData,
  "Nepal": nepalVisaData,
  "Morocco": moroccoVisaData,
  "United Kingdom": ukVisaData,
  // Add more DESTINATION countries...
};

export const defaultVisaInfo: VisaInfo = {
  ease: "Information not available",
  freeLength: "Check official sources",
  workPolicy: "Research required",
  incomeReq: "Unknown",
  category: "Unknown",
  nomadVisa: false,
  duration: 0,
  cost: 0,
  applicationTime: "Unknown",
  entryType: "single"
};