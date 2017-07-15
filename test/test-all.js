let should = require('chai').should()
let expect = require('chai').expect
let supertest = require('supertest')
let api = supertest('http://localhost:3000')

const numeralTypeTest = (type, done) => {
  api.get(('/all/' + type))
     .set('Accept', 'application/json')
     .expect(200)
     .end((error, response) => {
       response.status.should.equal(200)
       response.body.should.be.a('object')
       response.body.should.have.property('all')
       response.body.all.should.be.a('array')
       done()
     })
}

describe('Serving GET /all/:numeralType', () => {
  it('numeral type is set to /roman', (done) => {
    numeralTypeTest('roman', done)
  })

  it('invalid numeral type is passed', (done) => {
    api.get('/all/ryurri')
       .expect(400, done)
  })
})
