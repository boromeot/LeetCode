/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (stack.at(-1) === 'A' && c === 'B' || stack.at(-1) === 'C' && c === 'D') {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.length;
};