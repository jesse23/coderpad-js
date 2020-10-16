// #22 - Generate Parentheses

const trv = (weight, length, n, stack) => {
    if (length === 0) {
        // res.push(stack.join(''));
        return [stack.join('')];
    }

    let res = [];
    if (weight < n && weight < length) {
        res = res.concat(trv(weight + 1, length - 1, n, stack.concat(['('])));
    }

    if (weight > 0) {
        res = res.concat(trv(weight - 1, length - 1, n, stack.concat([')'])));
    }
    return res;
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    return trv(0, 2 * n, n, []);
};


module.exports = generateParenthesis;