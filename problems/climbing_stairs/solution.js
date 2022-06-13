/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let one = 1,
        two = 1;
    
    for (let i = n - 2; i >= 0; i--) {
        let temp = one;
        one += two;
        two = temp;
    }
    return one;
};