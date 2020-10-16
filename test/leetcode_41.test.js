var assert = require('assert')
var chai = require('chai')
var sinonChai = require('sinon-chai');

const firstMissingPositive = require('../src/leetcode_41');

const expect = chai.expect;

chai.should()
chai.use(sinonChai)

// var mocha = new Mocha()

// Bit of a hack, sorry!
// mocha.suite.emit('pre-require', this, 'solution', mocha)

describe('leetcode_41', function () {
    it('Input: nums = [1,2,0]', function () {
        expect(firstMissingPositive([1,2,0])).to.equal(3);
    })

    it('Input: nums = [3,4,-1,1]', function () {
        expect(firstMissingPositive([3,4,-1,1])).to.equal(2);
    })

    it('Input: nums = [7,8,9,11,12]', function () {
        expect(firstMissingPositive([7,8,9,11,12])).to.equal(1);
    })

    it('Input: nums = [4,3,2,1]', function () {
        expect(firstMissingPositive([4,3,2,1])).to.equal(5);
    })

    it('Input: nums = [-1,3,2,1]', function () {
        expect(firstMissingPositive([-1,3,2,1])).to.equal(4);
    })

    it('Leetcode case 1', function () {
        expect(firstMissingPositive([99,94,96,11,92,5,91,89,57,85,66,63,84,81,79,61,74,78,77,30,64,13,58,18,70,69,51,12,32,34,9,43,39,8,1,38,49,27,21,45,47,44,53,52,48,19,50,59,3,40,31,82,23,56,37,41,16,28,22,33,65,42,54,20,29,25,10,26,4,60,67,83,62,71,24,35,72,55,75,0,2,46,15,80,6,36,14,73,76,86,88,7,17,87,68,90,95,93,97,98])).to.equal(100);
    })
})