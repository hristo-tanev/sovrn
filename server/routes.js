let romanNumerals = require('roman-numerals')

let Numeral = require('../models/Numeral')

const handleRoutes = (server) => {
  server.get('/roman/:number', (request, response, next) => {
    let { number } = request.params
    Numeral.findOne({ type: 'roman', input_value: number }, (error, numeral) => {
      if (error) {
        response.send(400)
      }

      if (numeral == null) {
        try {
          const anumber = romanNumerals.toArabic(number.toUpperCase())
          const n = new Numeral({ type: 'roman', input_value: number, converted_value: anumber.toString() })
          n.save()
          response.json({ inputValue: number, convertedValue: anumber.toString() })
        } catch(error) {
          response.send(400)
        }
      } else {
        response.json({ inputValue: numeral.input_value, convertedValue: numeral.converted_value })
      }
    })

    return next()
  })
}

module.exports = handleRoutes
