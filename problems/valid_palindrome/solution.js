/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0,
        r = s.length - 1;
    
    while (l < r) {
        if (!isAlphaNum(s[l])) {
            l++;
            continue;
        } else if (!isAlphaNum(s[r])) {
            r--;
        } else {
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++;
            r--;
        }
    }
    return true;
}

function isAlphaNum(c) {
    return (
        'A'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= 'Z'.charCodeAt() ||
        'a'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= 'z'.charCodeAt() ||
        '0'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= '9'.charCodeAt()
    )
}
// 4004
// 404