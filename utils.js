function isValidArabic(number) {
  for (i of number) {
    if (i < '0' || i > '9') {
      return false
    }
  }

  return true
}

module.exports = isValidArabic
