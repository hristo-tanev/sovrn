let restify = require('restify')
let romanNumerals = require('roman-numerals')
let mongoose = require('mongoose')

let Numeral = require('./models/Numeral')

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

server.get('/roman/:number', (request, response, next) => {
  let { number } = request.params
  try {
    const anumber = romanNumerals.toArabic(number.toUpperCase())
    response.send({ inputValue: number, convertedValue: anumber })
  } catch(error) {
    if (error) {
      response.send(400)
    }
  }

  return next()
})

server.listen(3000)
