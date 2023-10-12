/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let fib1 = 1;
    let fib2 = 1;
    for (let i = n - 2; i >= 0; i--) {
        const temp = fib2;
        fib2 = fib1 + fib2;
        fib1 = temp;
    }
    return fib2;
};