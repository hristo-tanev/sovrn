let checkAndConvert = require('../utils')

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

    } else {
      response.send(400)
    }

    return next()
  })
}

module.exports = handleRoutes
