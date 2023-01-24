/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let l = 0,
        r = 1;
    while (r < s.length) {
        if (s[l] === '0' && s[r] === '1') return false;
        l++, r++;
    }
    return true;
};