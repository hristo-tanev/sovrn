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
       response.body.all[0].should.have.property('_id')
       response.body.all[0].should.have.property('input_value')
       response.body.all[0].should.have.property('converted_value')
       done()
     })
}

describe('Serving GET /all/:numeralType', () => {
  it('numeral type is set to /roman', (done) => {
    numeralTypeTest('roman', done)
  })

  it('numeral type is set to /arabic', (done) => {
    numeralTypeTest('arabic', done)
  })

  it('invalid numeral type is passed', (done) => {
    api.get('/all/ryurri')
       .expect(400, done)
  })
})
