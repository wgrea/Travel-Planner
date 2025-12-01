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
  AZN: 1.70,     // Azerbaijani Manat (1 USD = 1.70 AZN)
  TRY: 30.15,    // Turkish Lira (1 USD = 30.15 TRY)
  GEL: 2.67,     // Georgian Lari (1 USD = 2.67 GEL)
  NPR: 133.45,   // Nepalese Rupee (1 USD = 133.45 NPR)
  ARS: 815.50,   // Argentine Peso (1 USD = 815 ARS)
  PAB: 1.00,     // Panamanian Balboa (1:1 with USD)
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
  ARS: '$',      // Argentine Peso uses $
  PAB: 'B/.',    // Panamanian Balboa
};

// src/lib/utils/currency.ts
export function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
  console.log('🔧 convertCurrency DEBUG:', { 
    amount, 
    fromCurrency, 
    toCurrency,
    fromRate: exchangeRates[fromCurrency],
    toRate: exchangeRates[toCurrency]
  });
  
  if (fromCurrency === toCurrency) return amount;
  
  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    console.error('❌ Missing exchange rate:', { fromCurrency, toCurrency });
    return amount;
  }
  
  // Convert to USD first, then to target currency
  const fromRate = exchangeRates[fromCurrency];
  const toRate = exchangeRates[toCurrency];
  
  const usdAmount = amount / fromRate;
  const result = usdAmount * toRate;
  
  console.log('🔧 Conversion result:', { 
    original: amount,
    usdAmount, 
    result,
    calculation: `${amount} / ${fromRate} * ${toRate} = ${result}`
  });
  
  return result;
}

// src/lib/utils/currency.ts - Update formatCurrency function
export function formatCurrency(amount: number, currency: string): string {
  console.log('🔧 formatCurrency DEBUG:', { 
    amount, 
    currency,
    symbol: currencySymbols[currency],
    availableSymbols: currencySymbols
  });
  
  const symbol = currencySymbols[currency] || currency;
  
  console.log('🔧 Using symbol:', symbol);
  
  // Handle currencies that typically don't use decimals
  const noDecimalCurrencies = ['JPY', 'KRW', 'VND', 'IDR'];
  if (noDecimalCurrencies.includes(currency)) {
    const formatted = `${symbol}${Math.round(amount).toLocaleString()}`;
    console.log('🔧 No decimal format:', formatted);
    return formatted;
  }
  
  const formatted = `${symbol}${amount.toFixed(2)}`;
  console.log('🔧 Standard format:', formatted);
  return formatted;
}