let clients = require('restify-clients')

let client = clients.createJsonClient({
  url: 'http://localhost:3000',
  version: '~1.0'
})

client.get('/roman/XXX', (error, request, response, object) => {
  if (error) {
    console.log('The number is not a valid roman numeral.')
    return
  }

  console.log(object)
})
