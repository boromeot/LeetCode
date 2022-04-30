/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let i = 0;
    let j = s.length - 1;
    while (i < j) {

        if (!isAlphaNum(s[i])) {
            i++;
        } else if (!isAlphaNum(s[j])) {
            j--;
        } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
};

function isAlphaNum(c) {
    return (
        'A'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= 'Z'.charCodeAt() ||
        'a'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= 'z'.charCodeAt() ||
        '0'.charCodeAt() <= c.charCodeAt() && c.charCodeAt() <= '9'.charCodeAt()
    )
}
// 4004
// 404