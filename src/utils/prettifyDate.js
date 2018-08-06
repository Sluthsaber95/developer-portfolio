const prettifyDate = (dateSet, datePresent = true) => {
if(typeof dateSet !== 'number' && dateSet % 1 !== 0){
  throw new Error('Parameter is not an integer')
}
  const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const date = dateSet.getUTCDate()
  const month = monthList[dateSet.getUTCMonth()]
  const year = dateSet.getUTCFullYear()
  const position = (date) => {
    switch (date) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }
  if (datePresent) return `${month} ${date}${position(date)} ${year}`
  return `${month} ${year}`
}

export default prettifyDate;