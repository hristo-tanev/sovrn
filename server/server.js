let restify = require('restify')
let mongoose = require('mongoose')
let romanNumerals = require('roman-numerals')

let handleRoutes = require('./routes')

mongoose.connect('mongodb://localhost/sovrn')
const db = mongoose.connection
db.once('open', () => {
  console.log('Connection on database now established.')
})

const server = restify.createServer({
  name: 'sovrn-roman-numerals',
  version: '1.0.0'
})

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

handleRoutes(server)

server.listen(3000)
