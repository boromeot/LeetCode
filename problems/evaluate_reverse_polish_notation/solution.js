/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    
    const operations = {
        '+' : (n1, n2) => n1 + n2,
        '-' : (n1, n2) => n1 - n2,
        '*' : (n1, n2) => n1 * n2,
        '/' : (n1, n2) => Math.trunc(n1 / n2)
    }
    
    for (let t of tokens) {
        if (operations[t]) {
            let n2 = stack.pop();
            let n1 = stack.pop();
            stack.push(operations[t](n1, n2));
        } else {
            stack.push(Number(t));
        }
    }
    return stack[0];
};