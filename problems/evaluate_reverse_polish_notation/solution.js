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
        const symbol = tokens[i];
        if (ops[symbol]) {
            const b = Number(stack.pop()),
                  a = Number(stack.pop());
            stack.push(ops[symbol](a, b));
        } else {
            stack.push(symbol);
        }
     }
     return stack[0];
};