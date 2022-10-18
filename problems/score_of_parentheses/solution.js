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
            let v = stack.pop(),
            w = stack.pop();
            stack.push(w + Math.max(2 * v, 1));
        }
    }
    return stack.pop();
};