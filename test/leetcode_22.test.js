var assert = require('assert')
var chai = require('chai')
var sinonChai = require('sinon-chai');

const generateParenthesis = require('../src/leetcode_22');

const expect = chai.expect;

chai.should()
chai.use(sinonChai)

// var mocha = new Mocha()

// Bit of a hack, sorry!
// mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('leetcode_22', function () {
    it('Input: n = 1', function () {
        expect(generateParenthesis(1)).to.deep.equal(['()']);
    })

    it('Input: n = 2', function () {
        expect(generateParenthesis(2)).to.deep.equal(['(())', '()()']);
        // expect(generateParenthesis(2)).to.deep.equal([]);
    })

    it('Input: n = 3', function () {
        expect(generateParenthesis(3)).to.deep.equal(['((()))', '(()())', '(())()', '()(())', '()()()']);
    })
})