let restify = require('restify')

const server = restify.createServer({
  name: 'sovrn-roman-numericals',
  version: '1.0.0'
})

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

server.get('/roman/:number', (request, response, next) => {
  let { number } = request.params
  if (number == 'XXX') {
    // to do
  }

  response.send({ inputValue: number })
  return next()
})

server.listen(3000)
