// src/lib/data/visa.ts



import type { VisaInfo } from '$lib/types/visa';
import { mexicoVisaData } from './countries/north-america/mexico';
import { azerbaijanVisaData } from './countries/europe/caucasus/azerbaijan';  // You're missing this!
import { thailandVisaData } from './countries/southeast-asia/thailand';
import { unitedStatesVisaData } from './countries/north-america/united-states/visa';
import { vietnamVisaData } from './countries/southeast-asia/vietnam';
import { germanyVisaData } from './countries/europe/western-europe/germany';
import { spainVisaData } from './countries/europe/western-europe/spain';
import { canadaVisaData } from './countries/north-america/canada';
import { indonesiaVisaData } from './countries/southeast-asia/indonesia';
import { argentinaVisaData } from './countries/south-america/argentina';
import { brazilVisaData } from './countries/south-america/brazil';
import { portugalVisaData } from './countries/europe/western-europe/portugal';
import { georgiaVisaData } from './countries/europe/caucasus/georgia';
import { greeceVisaData } from './countries/europe/southern-europe/greece';
import { turkeyVisaData } from './countries/europe/southern-europe/turkey';
import { panamaVisaData } from './countries/central-america/panama';
import { japanVisaData } from './countries/east-asia/japan';
import { italyVisaData } from './countries/europe/southern-europe/italy';
import { franceVisaData} from './countries/europe/western-europe/france';
import { laosVisaData} from './countries/southeast-asia/laos';
import { indiaVisaData} from './countries/south-asia/india';
import { bangladeshVisaData} from './countries/south-asia/bangladesh';
import { nepalVisaData} from './countries/south-asia/nepal';
import { moroccoVisaData} from './countries/northern-africa/morocco';
import { ukVisaData} from './countries/europe/western-europe/united-kingdom';

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