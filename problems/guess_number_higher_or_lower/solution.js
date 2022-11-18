/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 1,
        r = n;
    let m = pickMid(l, r);
    

    
    while (l <= r) {
        if (guess(m) === -1) {
            r = m - 1;
            m = pickMid(l, r);
        } else if (guess(m) === 1) {
            l = m + 1;
            m = pickMid(l, r);
        } else if (guess(m) === 0) {
            return m;
        }
    }
    return -1;
    
    function pickMid(start, end) {
        return Math.floor((start + end) / 2);
    }
};