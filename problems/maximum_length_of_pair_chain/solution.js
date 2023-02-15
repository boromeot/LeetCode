/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    let l = 0,
        r = 1;
    let chain = 1;
    while (r < pairs.length) {
        if (pairs[l][1] < pairs[r][0]) {
            chain++;
            l = r;
        } 
        r++;
    }
    return chain;
};

// [1,2] -> [3,4] -> [5, 6]


// [1,2], [7,8], [4,5]
// [1,2], [4,5], [7,8]
//   l      r

// [1,7], [2,4], [5,6], [7,8]

// [2,4], [5,6], [1,7], [7,8]
//          l             r