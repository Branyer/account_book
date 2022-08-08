export const formatCurrency = (amount: number, currency: string = 'USD') => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: currency,
}).format(amount)