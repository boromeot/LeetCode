/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    let stack = [];
    for (let c of s) {
        if (map[c]) {
            if (map[c] !== stack.pop()) return false;
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
};