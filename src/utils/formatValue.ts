export const formatValue = (value: number): string => {
  return value.toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency: 'EUR',
    style: 'currency',
  })
}