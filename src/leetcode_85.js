
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    // const dp = Array.apply(null, Array(matrix.length)).map(() => [])
    if(matrix.length === 0) {
        return 0;
    }

    const getMaxMatrix = (heights) => {
        const stack = [-1];
        let max = 0;
        for(let i = 0; i < heights.length; i++) {
            while(stack[stack.length-1] !== -1 && heights[stack[stack.length-1]] >= heights[i]) {
                max = Math.max(max, heights[stack.pop()] * (i - stack[stack.length-1] - 1));
            }
            stack.push(i);
        }
        
        while(stack[stack.length-1] !== -1) {
            max = Math.max(max, heights[stack.pop()] * (heights.length - stack[stack.length-1] - 1));
        }
        return max;
    }

    let res = 0;
    const heights = Array(matrix[0].length).fill(0);
    for( let i = 0; i < matrix.length; i++ ) {
        const length = matrix[i].length;
        for( let j = 0; j < length; j++ ) {
            if( matrix[i][j] === '1') {
                heights[j]++;
            } else {
                heights[j] = 0;
            }
        }
        // console.log(heights, getMaxMatrix(heights));
        res = Math.max(res, getMaxMatrix(heights));
    }

    return res;
};


module.exports = maximalRectangle;

