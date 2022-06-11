/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let cur = 1, pre = 0, res = 0;
        for (let i = 1; i < s.length; i++) {
            if (s.charAt(i) == s.charAt(i - 1)) cur++;
            else {
                res += Math.min(cur, pre);
                pre = cur;
                cur = 1;
            }
        }
        return res + Math.min(cur, pre);
};