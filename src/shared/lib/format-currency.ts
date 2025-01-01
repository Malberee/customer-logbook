export const formatCurrency = (value: number) => {
  const numberFormatter = Intl.NumberFormat('ua-UK', {
    style: 'currency',
    currency: 'UAH',
  })

  return numberFormatter.format(value)
}
