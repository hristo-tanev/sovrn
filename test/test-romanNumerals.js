let should = require('chai').should()
let expect = require('chai').expect
let supertest = require('supertest')
let api = supertest('http://localhost:3000')

describe('Serving GET /roman/:number', () => {
  it('the input roman numeral is valid and can be converted', (done) => {
    const test = {
      inputValue: 'XXX',
      convertedValue: '30'
    }

    api.get(('/roman/' + test.inputValue))
       .set('Accept', 'application/json')
       .expect(400)
       .end((error, response) => {
         response.status.should.equal(200)
         response.body.should.be.a('object')
         response.body.should.have.property('inputValue')
         response.body.should.have.property('convertedValue')
         response.body.inputValue.should.equal(test.inputValue)
         response.body.convertedValue.should.equal(test.convertedValue)
         done()
       })
  })

  it('the input roman numeral is not valid and cannot be converted', (done) => {
    api.get('/roman/XXXp')
       .set('Accept', 'application/json')
       .expect(400, done)
  })
})
