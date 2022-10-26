/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    n = BigInt(n)
    if (n == 0) {
        return false;
    }
    
    return (n & (n - BigInt(1))) === BigInt(0)
};