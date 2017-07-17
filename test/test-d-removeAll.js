let should = require('chai').should()
let expect = require('chai').expect
let supertest = require('supertest')
let api = supertest('http://localhost:3000')

describe('Serving DELETE /remove/all', () => {
  it('unsuccessful removal of elements in DB', (done) => {
    api.get('/remove/all')
       .set('Accept', 'application/json')
       .expect(500, done)
  })
})
