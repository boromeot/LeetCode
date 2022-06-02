/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let l = 1,
        r = 1;
    
    for (let i = 0; i < n - 1; i++)  {
        let temp = l;
        l = l + r;
        r = temp;
    }
    return l;
};

// 0 1 2 3 4 5
// 8 5 3 2 1 1
//         l r