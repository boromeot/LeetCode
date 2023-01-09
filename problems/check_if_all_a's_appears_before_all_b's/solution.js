/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let boundry = false;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === 'a' && boundry) return false;
        if (c === 'b') boundry = true;
    }
    return true;
};