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
          const n = new Numeral({ type: 'roman', input_value: number, converted_value: anumber })
          n.save()
          response.send({ inputValue: number, convertedValue: anumber })
        } catch(error) {
          if (error) {
            response.send(400)
          }
        }
      } else {
        response.send({ inputValue: numeral[0].input_value, convertedValue: numeral[0].converted_value })
      }
    })

    return next()
  })
}

module.exports = handleRoutes
