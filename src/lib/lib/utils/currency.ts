// src/lib/utils/currency.ts
// Simple exchange rates (you can update these periodically)
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
};

export function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
  if (fromCurrency === toCurrency) return amount;
  
  // Convert to USD first, then to target currency
  const usdAmount = amount / exchangeRates[fromCurrency];
  return usdAmount * exchangeRates[toCurrency];
}

export function formatCurrency(amount: number, currency: string): string {
  const symbol = currencySymbols[currency] || currency;
  
  // Handle currencies that typically don't use decimals
  const noDecimalCurrencies = ['JPY', 'KRW', 'VND', 'IDR'];
  if (noDecimalCurrencies.includes(currency)) {
    return `${symbol}${Math.round(amount).toLocaleString()}`;
  }
  
  return `${symbol}${amount.toFixed(2)}`;
}