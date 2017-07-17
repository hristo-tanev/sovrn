let checkAndConvert = require('../utils')
let Numeral = require('../models/Numeral')

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

  server.get('/all/:numeralType', (request, response, next) => {
    let { numeralType } = request.params
    if (numeralType == 'roman' || numeralType == 'arabic') {
      Numeral.find({ type: numeralType }, (error, numerals) => {
        if (error) {
          response.send(400)
        }

        response.json({ all: numerals })
      })
    } else {
      response.send(400)
    }

    return next()
  })

  server.get('/remove/all', (request, response, next) => {
    Numeral.remove({}, (error, numerals) => {
      if (error) {
        response.send(500)
      }

      console.log(numerals.result.n)
    })

    response.send(200)
    return next()
  })
}

module.exports = handleRoutes
