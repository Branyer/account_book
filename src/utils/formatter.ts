// export const formatCompactNumber = (value : number) => {

//     return Intl.NumberFormat("en", {
//         notation: "compact",
//       }).format(value)

// }

export const formatter = (value: number, options : Intl.NumberFormatOptions = {}) => {

  return Intl.NumberFormat("en-US", {
    ...options
  }).format(value)

}