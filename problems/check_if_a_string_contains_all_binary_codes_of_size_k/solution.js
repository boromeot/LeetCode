/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const count = Math.pow(2, k);
    const set = new Set();

    let l = 0;
    for (let i = 0; i < s.length + 1; i++) {
        if (i - l === k) {
            set.add(s.slice(l, i));
            l++;
        }
    }
    return set.size === count;
};