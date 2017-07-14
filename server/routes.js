let isValidArabic = require('../utils')
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
}

module.exports = handleRoutes
