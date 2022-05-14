/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const ops = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
        '/' : (a, b) => Math.trunc(a / b)
    }
    for (let i = 0; i < tokens.length; i++) {
        let c = tokens[i];
        if (c in ops) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            stack.push(ops[c](num1, num2));
        } else {
            stack.push(Number(c));
        }
    }
    return stack[0];
};