const filterYear = ( dateParse ) => {
  const currentYear = new Date().getFullYear()
  const publishedYear = dateParse.slice(-4)
  const dateChosen = currentYear === publishedYear
    ? dateParse.slice(0, -5)
    : dateParse
  return dateChosen
}
export default filterYear;