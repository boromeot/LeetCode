/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    
    
    for (let c of s) {
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            if (map[stack.at(-1)] !== c) {
                return false;            
            }
            stack.pop();
        } 
    }
    return stack.length === 0;
};