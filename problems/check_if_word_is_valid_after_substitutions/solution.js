/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let c of s) {
        if (c === 'c') {
            if (stack.pop() !== 'b') return false;
            if (stack.pop() !== 'a') return false;
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
};