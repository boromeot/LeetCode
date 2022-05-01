/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c in map) {
            if (stack.length <= 0 || stack.at(-1) !== map[c]) return false;
            stack.pop();    
        } else {
          stack.push(c)  ;
        }
    }
    return stack.length === 0;
};