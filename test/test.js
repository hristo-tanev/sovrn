let assert = require('assert')
let clients = require('restify-clients')

let client = clients.createJsonClient({
  url: 'http://localhost:3000',
  version: '~1.0'
})

describe('From roman numeral to arabic number', () => {
  it('the input roman numeral is valid and can be converted', () => {
    let test = {
      inputValue: 'XXX',
      convertedValue: 30
    }

    client.get('/roman/' + test.inputValue, (error, request, response, object) => {
      assert.equal(response.status, 200)
      assert.equal(object, test)
    })
  })

  it('the input roman numeral is not valid and cannot be converted', () => {
    client.get('/roman/XXXp', (error, request, response, object) => {
      assert.equal(response.status, 400)
    })
  })
})
