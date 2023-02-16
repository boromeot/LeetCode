/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let l = 1,
        r = n;
    let lSum = 1,
        rSum = n;
    
    while (l < r) {
        if (lSum < rSum) {
            l++;
            lSum += l;
        } else if (lSum > rSum) {
            r--;
            rSum += r;
        } else {
            r--; rSum += r;
            l++; lSum += l;
        }
    }
    if (lSum === rSum) return l;
    return -1;
};
// 1, 2, 3, 4, 5, 6, 7, 8