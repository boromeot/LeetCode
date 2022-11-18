/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false;
    
    function divide(dividend, divisor) {
        while (dividend % divisor === 0) {
            dividend = dividend / divisor;
        }
        return dividend;
    }
    
    for (let factor of [2, 3, 5]) {
        n = divide(n, factor);
    }
    return n === 1;
};