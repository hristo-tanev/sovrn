function isRomanSymbol(sym) {
  let symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  return (symbols.indexOf(sym) != -1)
}

const functions = {
  isRoman: function(number) {
    for (digit of number) {
      if (!isRomanSymbol(digit)) {
        return false
      }
    }

    return true
  }
}

for (let k in functions) {
  module.exports[k] = functions[k]
}
