var chai = require('chai')
var sinon = require('sinon')
var sinonChai = require('sinon-chai')

chai.should()
chai.use(sinonChai)

function hello(name, cb) {
  cb(`hello ${name}`)
}

describe('Sinon example', function() {
  it('OOTB sinon example', function() {
    var cb = sinon.spy()
    hello('world', cb)
    cb.should.have.been.calledWith('hello world')
  })
})
