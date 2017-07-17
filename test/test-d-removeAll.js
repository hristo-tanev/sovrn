let should = require('chai').should()
let expect = require('chai').expect
let supertest = require('supertest')
let api = supertest('http://localhost:3000')

describe('Serving DELETE /remove/all', () => {
  it('successful removal of all elements in the DB', (done) => {
    api.get('/remove/all')
       .set('Accept', 'application/json')
       .expect(200, done)
  })

  it('unsuccessful removal of all elements in the DB', (done) => {
    api.get('/remove/all')
       .set('Accept', 'application/json')
       .expect(500, done)
  })
})
