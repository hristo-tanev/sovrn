let romanNumerals = require('roman-numerals')

let Numeral = require('../models/Numeral')
let isValidArabic = require('../utils')

const convertNumeral = (response, type, numeral) => {
  let number = '', n = new Numeral()
  try {
    if (type == 'roman') {
      number = romanNumerals.toArabic(numeral.toUpperCase())
    } else {
      number = romanNumerals.toRoman(numeral.toUpperCase())
    }

    if (type == 'roman' || isValidArabic(numeral)) {
      n = new Numeral({ type, input_value: numeral, converted_value: number.toString() })
      n.save()
      response.json({ inputValue: numeral, convertedValue: number.toString() })
    } else {
      response.send(400)
    }
  } catch (error) {
    response.send(400)
  }
}

const checkAndConvert = (response, type, number) => {
  Numeral.findOne({ type, input_value: number }, (error, numeral) => {
    if (error) {
      response.send(400)
    }

    if (numeral == null) {
      convertNumeral(response, type, number)
    } else {
      response.json({ inputValue: numeral.input_value, convertedValue: numeral.converted_value })
    }
  })
}

const handleRoutes = (server) => {
  server.get('/roman/:number', (request, response, next) => {
    let { number } = request.params
    checkAndConvert(response, 'roman', number)

    return next()
  })

  server.get('/arabic/:number', (request, response, next) => {
    let { number } = request.params
    checkAndConvert(response, 'arabic', number)

    return next()
  })
}

module.exports = handleRoutes
