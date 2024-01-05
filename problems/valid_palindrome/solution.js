/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0, r = s.length - 1;
    const set = new Set('abcdefghijklmnopqrstuvwxyz1234567890'.split(''));
    s = s.toLowerCase();

    while (l < r) {
        if (!set.has(s[l])) l++;
        else if (!set.has(s[r])) r--;
        else if (s[l] !== s[r]) return false;
        else l++, r--;
    }
    return true;
};