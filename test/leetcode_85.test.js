var assert = require('assert')
var chai = require('chai')
var sinonChai = require('sinon-chai');

const maximalRectangle = require('../src/leetcode_85');

const expect = chai.expect;

chai.should()
chai.use(sinonChai)

// var mocha = new Mocha()

// Bit of a hack, sorry!
// mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('leetcode_85', function () {
    it('Input: matrix = []', function () {
        expect(maximalRectangle([])).to.equal(0);
    })

    it('Input: matrix = [["0","0"]]', function () {
        expect(maximalRectangle([
            ["0", "0"]
        ])).to.equal(0);
    })

    it('Input: matrix = [["1"]]', function () {
        expect(maximalRectangle([
            ["1"]
        ])).to.equal(1);
    })

    it('Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', function () {
        expect(maximalRectangle([
            ["1", "0", "1", "0", "0"],
            ["1", "0", "1", "1", "1"],
            ["1", "1", "1", "1", "1"],
            ["1", "0", "0", "1", "0"]
        ])).to.equal(6);
    })

    it('Inuput: another 5*5 xeample', function () {
        expect(maximalRectangle([
            ["1", "0", "1", "1", "1"],
            ["0", "1", "0", "1", "0"],
            ["1", "1", "0", "1", "1"],
            ["1", "1", "0", "1", "1"],
            ["0", "1", "1", "1", "1"]
        ])).to.equal(6);
    })

     it('Inuput: another 2*2 exeample', function () {
        expect(maximalRectangle([
            ["1", "0"],
            ["0", "1"]
        ])).to.equal(1);
    })

     it('Inuput: another 2*2 exeample 1', function () {
        expect(maximalRectangle([
            ["0", "1"],
            ["1", "0"]
        ])).to.equal(1);
    })   

})