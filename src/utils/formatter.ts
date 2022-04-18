export const formatCompactNumber = (value : number) => {

    return Intl.NumberFormat("en", {
        notation: "compact",
      }).format(value)

}

export const formatMoneyNumber = (value: number, currency: string) => {

  return Intl.NumberFormat("en-US", {
    style: 'currency',
    currency,
    compactDisplay: "short",
    maximumSignificantDigits: 3
  }).format(value)


}