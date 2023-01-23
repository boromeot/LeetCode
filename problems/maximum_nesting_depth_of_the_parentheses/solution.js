/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let res = 0;
    for (let c of s) {
        if (c === '(') {
            stack.push(c);
        } else if (c === ')') {
            stack.pop();
        }
        res = Math.max(res, stack.length);
    }
    return res;
};