/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let l = 1,
        r = num;
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        
        if (m * m === num) return true;
        if (m * m < num) {
            l = m + 1;
        }
        if (m * m > num) {
            r = m - 1;
        }
    }
    return false;
};