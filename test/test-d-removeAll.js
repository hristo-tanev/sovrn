let expect = require('chai').expect
let supertest = require('supertest')
let api = supertest('http://localhost:3000')

const expectStatusToBe = (status, done) => {
  api.del('/remove/all')
     .set('Accept', 'application/json')
     .expect(status, done)
}

describe('Serving DELETE /remove/all', () => {
  it('successful removal of all elements in the DB', (done) => {
    expectStatusToBe(200, done)
  })

  it('unsuccessful removal of all elements in the DB', (done) => {
    expectStatusToBe(500, done)
  })
})
