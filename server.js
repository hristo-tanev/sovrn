let restify = require('restify')
let romanNumerals = require('roman-numerals')

const server = restify.createServer({
  name: 'sovrn-roman-numericals',
  version: '1.0.0'
})

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

server.get('/roman/:number', (request, response, next) => {
  let { number } = request.params
  let anumber = ''
  try {
    anumber = romanNumerals.toArabic(number.toUpperCase())
  } catch(error) {
    if (error) {
      response.send(400)
    }
  }

  response.send({ inputValue: number, convertedValue: anumber })
  return next()
})

server.listen(3000)
