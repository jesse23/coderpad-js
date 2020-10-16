/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let res = 1;
    const cache = {};
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if (curr > 0) {
            if (curr === res) {
                while (cache[++res]) {}
            } else {
                if (curr - 1 < nums.length ) {
                    cache[curr] = true;
                }
            }
        }
    }
    return res;
};

module.exports = firstMissingPositive;