var assert = require('assert')
var chai = require('chai')
var sinonChai = require('sinon-chai');

const permuteUnique = require('../src/leetcode_47');

const expect = chai.expect;

chai.should()
chai.use(sinonChai)

// var mocha = new Mocha()

// Bit of a hack, sorry!
// mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('leetcode_47', function () {

    it('Input: [1]', function () {
        expect(permuteUnique([1])).to.deep.equal([
            [1]
        ]);
    })

    it('Input: [1,2]', function () {
        expect(permuteUnique([1,2])).to.deep.equal([
            [1,2],
            [2,1]
        ]);
    })

   it('Input: [1,1]', function () {
        expect(permuteUnique([1,1])).to.deep.equal([
            [1,1]
        ]);
    })

    it('Input: [1,1,2]', function () {
        expect(permuteUnique([1,1,2])).to.deep.equal([
            [1,1,2],
            [1,2,1],
            [2,1,1]
        ]);
    })

    it('Input: [2,2,1,1]', function () {
        expect(permuteUnique([2,2,1,1])).to.deep.equal([
            [2,2,1,1],
            [2,1,2,1],
            [2,1,1,2],
            [1,2,2,1],
            [1,2,1,2],
            [1,1,2,2]
        ]);
    })
})