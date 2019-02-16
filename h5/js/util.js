function priceFormat (value) {
  if (value < 100) {
    return `${value / 100}`
  } else {
    if (value % 100 === 0) {
      return `${value / 100}.00`
    } else {
      return `${value / 100}`
    }
  }
}
