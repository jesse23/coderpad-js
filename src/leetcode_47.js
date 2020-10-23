/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const trv = (idx, arr) => {
        let res = [];

        if( idx === arr.length ) {
            res.push([...arr]);
        }

        const dup = {};
        for (let i = idx; i < arr.length; i++) {
            const curr = arr[idx];
            const next = arr[i];

            if( idx === i ) {
                res = res.concat(trv(idx + 1, arr));
                dup[next] = true;
            } if ( curr !== next && !dup[next] ) {
                arr[idx] = next;
                arr[i] = curr;
                res = res.concat(trv(idx + 1, arr));
                arr[idx] = curr;
                arr[i] = next;
                dup[next] = true;
            } 
        }
        return res;
    }

    return trv(0, nums);
};

module.exports = permuteUnique;