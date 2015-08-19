/* global describe, it */

var imgdye = require('..')
require('chai').should()

describe('imgdye', function () {
  it('should be a function', function () {
    imgdye.should.be.a('function')
    imgdye.name.should.equal('imgdye')
  })
})
