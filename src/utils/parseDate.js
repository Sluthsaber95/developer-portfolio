const parseDate = (dateString) => {
  const correctFormat = /\d{2}\.\d{2}\.\d{4}/g
  if(typeof dateString !== 'string' || !correctFormat.test(dateString)){
    throw new Error("correctFormat.test(dateString): " + correctFormat.test(dateString))
  }
  const fullDate = dateString.split('.').map(x => parseInt(x))
  const date = fullDate[0]
  const month = fullDate[1] - 1
  const year = fullDate[2]
  return Date.UTC(year, month, date)
}

export default parseDate;