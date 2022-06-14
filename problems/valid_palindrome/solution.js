/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let set = new Set('abcdefghijklmnopqrstuvwxyz0123456789'.split(''));

    let l = 0,
        r = s.length - 1;
    
    s = s.toLowerCase();
    
    while (l < r) {
       if (!set.has(s[l])) {
           l++;
       } else if (!set.has(s[r])) {
           r--;
       } else {
           if (s[l] !== s[r]) return false;
           l++;
           r--;
       }
    }
    return true;
};