let should = require('chai').should()
let expect = require('chai').expect
let supertest = require('supertest')
let api = supertest('http://localhost:3000')

describe('Serving GET /arabic/:number', () => {
  it('number is valid and can be converted', (done) => {
    const test = {
      inputValue: '30',
      convertedValue: 'XXX'
    }

    api.get(('/arabic/' + test.inputValue))
       .set('Accept', 'application/json')
       .expect(200)
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

  it('number is not valid and cannot be converted', (done) => {
    api.get('/arabic/1p12')
       .set('Accept', 'application/json')
       .expect(400, done)
  })
})
