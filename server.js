let restify = require('restify')

let check = require('./utils/NumeralsCheck')

const server = restify.createServer({
  name: 'sovrn-roman-numericals',
  version: '1.0.0'
})

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

server.get('/roman/:number', (request, response, next) => {
  let { number } = request.params
  if (!check.isRoman(number)) {
    response.send(400)
  }

  response.send({ inputValue: number })
  return next()
})

server.listen(3000)
