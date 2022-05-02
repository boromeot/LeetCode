/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const operators = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
        '/' : (a, b) => Math.trunc( a / b)
    }
    
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (operators[token]) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            stack.push(operators[token](num1, num2));
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};