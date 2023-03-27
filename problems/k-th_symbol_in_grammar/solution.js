/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    let strLenHalf = Math.pow(2, n - 2);
    let isZero = true;

    while (n > 1) {
        if (k > strLenHalf) {
            isZero = !isZero;
            k -= strLenHalf;
        }
        n--;
        strLenHalf /= 2;
    }
    return isZero ? 0 : 1;
};