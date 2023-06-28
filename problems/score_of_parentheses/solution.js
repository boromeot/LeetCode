/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [];
    stack.push(0);
    
    for (let c of s) {
        if (c === '(') {
            stack.push(0);
        } else {
            let a = stack.pop(),
            b = stack.pop();
            stack.push(b + Math.max(2 * a, 1));
        }
    }
    return stack.pop();
};