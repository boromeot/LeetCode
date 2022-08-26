/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let l = 0,
        r = 0;
    
    while (r < t.length) {
        if (s[l] === t[r]) l++;
        if (l === s.length) return true;
        r++;
    }
    return l === s.length;
};