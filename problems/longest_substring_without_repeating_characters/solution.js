/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let res = 0;

    for (let i = 0, j = 0; i < s.length; i++) {
        while(set.has(s[i])) {
            set.delete(s[j]);
            j++;
        }
        set.add(s[i]);
        res = Math.max(res, i - j + 1);
    }
    return res;
};