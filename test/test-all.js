let should = require('chai').should()
let expect = require('chai').expect
let supertest = require('supertest')
let api = supertest('http://localhost:3000')

describe('Serving GET /all/:numeralType', () => {
  it('invalid numeral type is passed', (done) => {
    api.get('/all/ryurri')
       .expect(400, done)
  })
})
