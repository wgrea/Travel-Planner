// src/lib/utils/currency.ts
export const exchangeRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  CAD: 1.35,
  AUD: 1.52,
  JPY: 148.50,
  THB: 35.50,    // Thai Baht
  VND: 24500,    // Vietnamese Dong
  IDR: 15600,    // Indonesian Rupiah
  MYR: 4.68,     // Malaysian Ringgit
  PHP: 56.20,    // Philippine Peso
  INR: 83.10,    // Indian Rupee
  CNY: 7.18,     // Chinese Yuan
  KRW: 1320,     // South Korean Won
  AZN: 1.70,     // Azerbaijani Manat
  TRY: 30.15,    // Turkish Lira
  GEL: 2.67,     // Georgian Lari
  NPR: 133.45,   // Nepalese Rupee
  ARS: 815.50,   // Argentine Peso
  PAB: 1.00,     // Panamanian Balboa
  
  // ADD THESE MISSING CURRENCIES:
  MXN: 17.50,    // Mexican Peso (1 USD = ~17.50 MXN)
  BRL: 5.20,     // Brazilian Real (1 USD = ~5.20 BRL)
  
  // Also add other common currencies you might need:
  CHF: 0.88,     // Swiss Franc
  NZD: 1.63,     // New Zealand Dollar
  SGD: 1.34,     // Singapore Dollar
  HKD: 7.82,     // Hong Kong Dollar
  SEK: 10.50,    // Swedish Krona
  NOK: 10.80,    // Norwegian Krone
  DKK: 6.90,     // Danish Krone
  PLN: 4.00,     // Polish Zloty
  CZK: 23.00,    // Czech Koruna
  HUF: 360.00,   // Hungarian Forint
  RON: 4.55,     // Romanian Leu
  BGN: 1.83,     // Bulgarian Lev
  UAH: 38.50,    // Ukrainian Hryvnia
  ZAR: 18.90,    // South African Rand
  EGP: 31.00,    // Egyptian Pound
  AED: 3.67,     // UAE Dirham
  SAR: 3.75,     // Saudi Riyal
  QAR: 3.64,     // Qatari Riyal
  KWD: 0.31,     // Kuwaiti Dinar
  OMR: 0.38,     // Omani Rial
  BHD: 0.38,     // Bahraini Dinar
  CLP: 850.00,   // Chilean Peso
  COP: 3950.00,  // Colombian Peso
  PEN: 3.75,     // Peruvian Sol
  UYU: 39.00,    // Uruguayan Peso
  LKR: 320.00,   // Sri Lankan Rupee
  BDT: 110.00,   // Bangladeshi Taka
  PKR: 280.00,   // Pakistani Rupee
  KZT: 460.00,   // Kazakhstani Tenge
  RUB: 92.00,    // Russian Ruble
};

export const currencySymbols: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  CAD: 'C$',
  AUD: 'A$',
  JPY: '¥',
  THB: '฿',
  VND: '₫',
  IDR: 'Rp',
  MYR: 'RM',
  PHP: '₱',
  INR: '₹',
  CNY: '¥',
  KRW: '₩',
  AZN: '₼',
  TRY: '₺', 
  GEL: '₾',
  NPR: 'रू',
  ARS: '$',
  PAB: 'B/.',
  
  // ADD SYMBOLS FOR NEW CURRENCIES:
  MXN: '$',      // Mexican Peso uses $
  BRL: 'R$',     // Brazilian Real
  
  // Add other symbols:
  CHF: 'CHF',
  NZD: 'NZ$',
  SGD: 'S$',
  HKD: 'HK$',
  SEK: 'kr',
  NOK: 'kr',
  DKK: 'kr',
  PLN: 'zł',
  CZK: 'Kč',
  HUF: 'Ft',
  RON: 'lei',
  BGN: 'лв',
  UAH: '₴',
  ZAR: 'R',
  EGP: '£',
  AED: 'د.إ',
  SAR: '﷼',
  QAR: '﷼',
  KWD: 'د.ك',
  OMR: '﷼',
  BHD: '.د.ب',
  CLP: '$',
  COP: '$',
  PEN: 'S/',
  UYU: '$',
  LKR: 'Rs',
  BDT: '৳',
  PKR: '₨',
  KZT: '₸',
  RUB: '₽',
};

// src/lib/utils/currency.ts
export function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
  // Only log in development
  if (import.meta.env.MODE === 'development') {
    console.log('🔧 convertCurrency DEBUG:', { 
      amount, 
      fromCurrency, 
      toCurrency,
      fromRate: exchangeRates[fromCurrency],
      toRate: exchangeRates[toCurrency]
    });
  }
  
  if (fromCurrency === toCurrency) return amount;
  
  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    console.error('❌ Missing exchange rate:', { fromCurrency, toCurrency });
    return amount;
  }
  
  // Normal conversion
  const fromRate = exchangeRates[fromCurrency];
  const toRate = exchangeRates[toCurrency];
  
  const usdAmount = amount / fromRate;
  const result = usdAmount * toRate;
  
  // Only log in development
  if (import.meta.env.MODE === 'development') {
    console.log('🔧 Conversion result:', { 
      original: amount,
      usdAmount, 
      result,
      calculation: `${amount} / ${fromRate} * ${toRate} = ${result}`
    });
  }
  
  return result;
}

export function formatCurrency(amount: number, currency: string): string {
  // Only log in development
  if (import.meta.env.MODE === 'development') {
    console.log('🔧 formatCurrency DEBUG:', { 
      amount, 
      currency,
      symbol: currencySymbols[currency],
      availableSymbols: currencySymbols
    });
  }
  
  const symbol = currencySymbols[currency] || currency;
  
  if (import.meta.env.MODE === 'development') {
    console.log('🔧 Using symbol:', symbol);
  }
  
  // Handle currencies that typically don't use decimals
  const noDecimalCurrencies = ['JPY', 'KRW', 'VND', 'IDR'];
  if (noDecimalCurrencies.includes(currency)) {
    const formatted = `${symbol}${Math.round(amount).toLocaleString()}`;
    if (import.meta.env.MODE === 'development') {
      console.log('🔧 No decimal format:', formatted);
    }
    return formatted;
  }
  
  const formatted = `${symbol}${amount.toFixed(2)}`;
  if (import.meta.env.MODE === 'development') {
    console.log('🔧 Standard format:', formatted);
  }
  return formatted;
}