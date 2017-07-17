const handlers = require('./routesHandlers')

const handleRoutes = (server) => {
  server.get('/roman/:number', handlers.toArabic)
  server.get('/arabic/:number', handlers.toRoman)
  server.get('/all/:numeralType', handlers.getAllByType)
  server.del('/remove/all', handlers.removeAll)
}

module.exports = handleRoutes
