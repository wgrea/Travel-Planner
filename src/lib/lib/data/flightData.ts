// src/lib/data/flightCosts.ts
// Depends entirely on where you're flying FROM

// flight costs based on where you are at needs to be added.

import type { FlightCostData  } from '$lib/types/flight';
// rest of the countries repeat
import { belizeFlightData } from './countries/central-america/belize';
import { costaRicaFlightData } from './countries/central-america/costaRica';
import { guatemalaFlightData } from './countries/central-america/guatemala';
import { panamaFlightData } from './countries/central-america/panama';

export const flightData: Record<string, FlightCostData > = {
  "Belize": belizeFlightData,
  "Costa Rica": costaRicaFlightData,
  "Guatemala": guatemalaFlightData,
  "Panama": panamaFlightData,
  // ... add other countries
};

/*
import { argentinaData } from './countries/south-america/argentina';
import { armeniaData } from './countries/europe/caucasus/armenia';
import { australiaData } from './countries/oceania/australia';
import { azerbaijanData } from './countries/europe/caucasus/azerbaijan';
import { belizeData } from './countries/central-america/belize';
import { boliviaData } from './countries/south-america/bolivia';
import { brazilData } from './countries/south-america/brazil';
import { canadaData } from './countries/north-america/canada'; // ← ADDED CANADA
import { chileData } from './countries/south-america/chile';
import { chinaData } from './countries/east-asia/china';
import { colombiaData } from './countries/south-america/colombia';
import { costaRicaData } from './countries/central-america/costaRica';
import { croatiaData } from './countries/europe/southern-europe/croatia';
import { czechRepublicData } from './countries/europe/eastern-europe/czechRepublic';
import { estoniaData } from './countries/europe/northern-europe/estonia';
import { franceData } from './countries/europe/western-europe/france';
import { georgiaData } from './countries/europe/caucasus/georgia';
import { germanyData } from './countries/europe/western-europe/germany';
import { greeceData } from './countries/europe/southern-europe/greece';
import { guatemalaData } from './countries/central-america/guatemala';
import { indiaData } from './countries/south-asia/india';
import { indonesiaData } from './countries/southeast-asia/indonesia';
import { italyData } from './countries/europe/southern-europe/italy';
import { japanData } from './countries/east-asia/japan';
import { malaysiaData } from './countries/southeast-asia/malaysia';
import { mexicoData } from './countries/north-america/mexico';
import { nepalData } from './countries/south-asia/nepal';
import { newZealandData } from './countries/oceania/newZealand';
import { norwayData } from './countries/europe/northern-europe/norway';
import { panamaData } from './countries/central-america/panama';
import { peruData } from './countries/south-america/peru';
import { philippinesData } from './countries/southeast-asia/philippines';
import { polandData } from './countries/europe/eastern-europe/poland';
import { portugalData } from './countries/europe/western-europe/portugal';
import { romaniaData } from './countries/europe/eastern-europe/romania';
import { sirLankaData } from './countries/south-asia/sirLanka';
import { sloveniaData } from './countries/europe/eastern-europe/slovenia';
import { southKoreaData } from './countries/east-asia/southKorea';
import { spainData } from './countries/europe/western-europe/spain';
import { swedenData } from './countries/europe/northern-europe/sweden';
import { thailandData } from './countries/southeast-asia/thailand';
import { turkeyData } from './countries/middle-east/turkey';
import { unitedArabEmiratesData } from './countries/middle-east/unitedArabEmirates';
import { unitedStatesData } from './countries/north-america/united-states';
import { vietnamData } from './countries/southeast-asia/vietnam';

export const flightData: FlightData = {
  "Australia": {
    "Argentina": argentinaData["Australia"],
    // rest of the countries repeat
    "Armenia": armeniaData["Australia"],
    "Azerbaijan": azerbaijanData["Australia"],
    "Bolivia": boliviaData["Australia"],
    "Brazil": brazilData["Australia"],
    "Chile": chileData["Australia"],
    "China": chinaData["Australia"],
    "Colombia": colombiaData["Australia"],
    "Croatia": croatiaData["Australia"],
    "Czech Republic": czechRepublicData["Australia"],
    "Estonia": estoniaData["Australia"],
    "France": franceData["Australia"],
    "Georgia": georgiaData["Australia"],
    "Germany": germanyData["Australia"],
    "Greece": greeceData["Australia"],
    "India": indiaData["Australia"],
    "Indonesia": indonesiaData["Australia"],
    "Italy": italyData["Australia"],
    "Japan": japanData["Australia"],
    "Malaysia": malaysiaData["Australia"],
    "Mexico": mexicoData["Australia"],
    "Nepal": nepalData["Australia"],
    "New Zealand": newZealandData["Australia"],
    "Norway": norwayData["Australia"],
    "Peru": peruData["Australia"],
    "Philippines": philippinesData["Australia"],
    "Poland": polandData["Australia"],
    "Portugal": portugalData["Australia"],
    "Romania": romaniaData["Australia"],
    "Slovenia": sloveniaData["Australia"],
    "South Korea": southKoreaData["Australia"],
    "Spain": spainData["Australia"],
    "Sri Lanka": sirLankaData["Australia"],
    "Sweden": swedenData["Australia"],
    "Thailand": thailandData["Australia"],
    "Turkey": turkeyData["Australia"],
    "United Arab Emirates": unitedArabEmiratesData["Australia"],
    "United States": unitedStatesData["Australia"],
    "Vietnam": vietnamData["Australia"]
  },
  "China": {
    "Argentina": argentinaData["China"],
    "Armenia": armeniaData["China"],
    "Azerbaijan": azerbaijanData["China"],
    "Australia": australiaData["China"],
    "Bolivia": boliviaData["China"],
    "Brazil": brazilData["China"],
    "Chile": chileData["China"],
    "Colombia": colombiaData["China"],
    "Croatia": croatiaData["China"],
    "Czech Republic": czechRepublicData["China"],
    "Estonia": estoniaData["China"],
    "France": franceData["China"],
    "Georgia": georgiaData["China"],
    "Germany": germanyData["China"],
    "Greece": greeceData["China"],
    "India": indiaData["China"],
    "Indonesia": indonesiaData["China"],
    "Italy": italyData["China"],
    "Japan": japanData["China"],
    "Malaysia": malaysiaData["China"],
    "Mexico": mexicoData["China"],
    "Nepal": nepalData["China"],
    "New Zealand": newZealandData["China"],
    "Norway": norwayData["China"],
    "Peru": peruData["China"],
    "Philippines": philippinesData["China"],
    "Poland": polandData["China"],
    "Portugal": portugalData["China"],
    "Romania": romaniaData["China"],
    "Slovenia": sloveniaData["China"],
    "South Korea": southKoreaData["China"],
    "Spain": spainData["China"],
    "Sri Lanka": sirLankaData["China"],
    "Sweden": swedenData["China"],
    "Thailand": thailandData["China"],
    "Turkey": turkeyData["China"],
    "United Arab Emirates": unitedArabEmiratesData["China"],
    "United States": unitedStatesData["China"],
    "Vietnam": vietnamData["China"]
  },
  "Germany": {
    "Argentina": argentinaData["Germany"],
    "Armenia": armeniaData["Germany"],
    "Azerbaijan": azerbaijanData["Germany"],
    "Australia": australiaData["Germany"],
    "Bolivia": boliviaData["Germany"],
    "Brazil": brazilData["Germany"],
    "Chile": chileData["Germany"],
    "China": chinaData["Germany"],
    "Colombia": colombiaData["Germany"],
    "Croatia": croatiaData["Germany"],
    "Czech Republic": czechRepublicData["Germany"],
    "Estonia": estoniaData["Germany"],
    "France": franceData["Germany"],
    "Georgia": georgiaData["Germany"],
    "Germany": germanyData["Germany"],
    "Greece": greeceData["Germany"],
    "India": indiaData["Germany"],
    "Indonesia": indonesiaData["Germany"],
    "Italy": italyData["Germany"],
    "Japan": japanData["Germany"],
    "Malaysia": malaysiaData["Germany"],
    "Mexico": mexicoData["Germany"],
    "Nepal": nepalData["Germany"],
    "New Zealand": newZealandData["Germany"],
    "Norway": norwayData["Germany"],
    "Peru": peruData["Germany"],
    "Philippines": philippinesData["Germany"],
    "Poland": polandData["Germany"],
    "Portugal": portugalData["Germany"],
    "Romania": romaniaData["Germany"],
    "Slovenia": sloveniaData["Germany"],
    "South Korea": southKoreaData["Germany"],
    "Spain": spainData["Germany"],
    "Sri Lanka": sirLankaData["Germany"],
    "Sweden": swedenData["Germany"],
    "Thailand": thailandData["Germany"],
    "Turkey": turkeyData["Germany"],
    "United Arab Emirates": unitedArabEmiratesData["Germany"],
    "United States": unitedStatesData["Germany"],
    "Vietnam": vietnamData["Germany"]
  },
  "Thailand": {
    "Argentina": argentinaData["Thailand"],
    "Armenia": armeniaData["Thailand"],
    "Azerbaijan": azerbaijanData["Thailand"],
    "Australia": australiaData["Thailand"],
    "Bolivia": boliviaData["Thailand"],
    "Brazil": brazilData["Thailand"],
    "Chile": chileData["Thailand"],
    "China": chinaData["Thailand"],
    "Colombia": colombiaData["Thailand"],
    "Croatia": croatiaData["Thailand"],
    "Czech Republic": czechRepublicData["Thailand"],
    "Estonia": estoniaData["Thailand"],
    "France": franceData["Thailand"],
    "Georgia": georgiaData["Thailand"],
    "Germany": germanyData["Thailand"],
    "Greece": greeceData["Thailand"],
    "India": indiaData["Thailand"],
    "Indonesia": indonesiaData["Thailand"],
    "Italy": italyData["Thailand"],
    "Japan": japanData["Thailand"],
    "Malaysia": malaysiaData["Thailand"],
    "Mexico": mexicoData["Thailand"],
    "Nepal": nepalData["Thailand"],
    "New Zealand": newZealandData["Thailand"],
    "Norway": norwayData["Thailand"],
    "Peru": peruData["Thailand"],
    "Philippines": philippinesData["Thailand"],
    "Poland": polandData["Thailand"],
    "Portugal": portugalData["Thailand"],
    "Romania": romaniaData["Thailand"],
    "Slovenia": sloveniaData["Thailand"],
    "South Korea": southKoreaData["Thailand"],
    "Spain": spainData["Thailand"],
    "Sri Lanka": sirLankaData["Thailand"],
    "Sweden": swedenData["Thailand"],
    "Thailand": thailandData["Thailand"],
    "Turkey": turkeyData["Thailand"],
    "United Arab Emirates": unitedArabEmiratesData["Thailand"],
    "United States": unitedStatesData["Thailand"],
    "Vietnam": vietnamData["Thailand"]
  },
  "United Kingdom": {
    "Argentina": argentinaData["United Kingdom"],
    "Armenia": armeniaData["United Kingdom"],
    "Azerbaijan": azerbaijanData["United Kingdom"],
    "Australia": australiaData["United Kingdom"],
    "Bolivia": boliviaData["United Kingdom"],
    "Brazil": brazilData["United Kingdom"],
    "Chile": chileData["United Kingdom"],
    "China": chinaData["United Kingdom"],
    "Colombia": colombiaData["United Kingdom"],
    "Croatia": croatiaData["United Kingdom"],
    "Czech Republic": czechRepublicData["United Kingdom"],
    "Estonia": estoniaData["United Kingdom"],
    "France": franceData["United Kingdom"],
    "Georgia": georgiaData["United Kingdom"],
    "Germany": germanyData["United Kingdom"],
    "Greece": greeceData["United Kingdom"],
    "India": indiaData["United Kingdom"],
    "Indonesia": indonesiaData["United Kingdom"],
    "Italy": italyData["United Kingdom"],
    "Japan": japanData["United Kingdom"],
    "Malaysia": malaysiaData["United Kingdom"],
    "Mexico": mexicoData["United Kingdom"],
    "Nepal": nepalData["United Kingdom"],
    "New Zealand": newZealandData["United Kingdom"],
    "Norway": norwayData["United Kingdom"],
    "Peru": peruData["United Kingdom"],
    "Philippines": philippinesData["United Kingdom"],
    "Poland": polandData["United Kingdom"],
    "Portugal": portugalData["United Kingdom"],
    "Romania": romaniaData["United Kingdom"],
    "Slovenia": sloveniaData["United Kingdom"],
    "South Korea": southKoreaData["United Kingdom"],
    "Spain": spainData["United Kingdom"],
    "Sri Lanka": sirLankaData["United Kingdom"],
    "Sweden": swedenData["United Kingdom"],
    "Thailand": thailandData["United Kingdom"],
    "Turkey": turkeyData["United Kingdom"],
    "United Arab Emirates": unitedArabEmiratesData["United Kingdom"],
    "United States": unitedStatesData["United Kingdom"],
    "Vietnam": vietnamData["United Kingdom"]
  },
   "United States": {
    "Argentina": argentinaData["United States"],
    "Armenia": armeniaData["United States"],
    "Australia": australiaData["United States"],
    "Azerbaijan": azerbaijanData["United States"],
    "Belize": belizeData["United States"],
    "Bolivia": boliviaData["United States"],
    "Brazil": brazilData["United States"],
    "Canada": canadaData["United States"], // ← ADDED CANADA (alphabetical order)
    "Chile": chileData["United States"],
    "China": chinaData["United States"],
    "Colombia": colombiaData["United States"],
    "Costa Rica": costaRicaData["United States"],
    "Croatia": croatiaData["United States"],
    "Czech Republic": czechRepublicData["United States"],
    "Estonia": estoniaData["United States"],
    "France": franceData["United States"],
    "Georgia": georgiaData["United States"],
    "Germany": germanyData["United States"],
    "Greece": greeceData["United States"],
    "Guatemala": guatemalaData["United States"],
    "India": indiaData["United States"],
    "Indonesia": indonesiaData["United States"],
    "Italy": italyData["United States"],
    "Japan": japanData["United States"],
    "Malaysia": malaysiaData["United States"],
    "Mexico": mexicoData["United States"],
    "Nepal": nepalData["United States"],
    "New Zealand": newZealandData["United States"],
    "Norway": norwayData["United States"],
    "Panama": panamaData["United States"],
    "Peru": peruData["United States"],
    "Philippines": philippinesData["United States"],
    "Poland": polandData["United States"],
    "Portugal": portugalData["United States"],
    "Romania": romaniaData["United States"],
    "Slovenia": sloveniaData["United States"],
    "South Korea": southKoreaData["United States"],
    "Spain": spainData["United States"],
    "Sri Lanka": sirLankaData["United States"],
    "Sweden": swedenData["United States"],
    "Thailand": thailandData["United States"],
    "Turkey": turkeyData["United States"],
    "United Arab Emirates": unitedArabEmiratesData["United States"],
    "Vietnam": vietnamData["United States"]
  }
};

*/

export { defaultFlightInfo } from '$lib/types/flight'; // Could do the same for types/visa.ts if this works
