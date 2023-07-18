/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumPartition = function(s, k) {
    let num = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let digit = +s[i];
        num = (num * 10) + digit;
        if (num > k) {
            num = digit;
            count++;
        }
        if (digit > k) return -1;
    }
    return count + 1;
};