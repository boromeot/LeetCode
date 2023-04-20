/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];

    let string = '';

    for (let c of s) {
        if (c === ')') {
            while (stack.at(-1) !== '(') {
                string += stack.pop();
            }
            stack.pop();
            stack.push(...string);
            string = '';
        } else {
            stack.push(c);
        }
    }
    return stack.join('');
};