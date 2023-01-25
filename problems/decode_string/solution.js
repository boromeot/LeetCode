/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const digits = new Set(['1','2','3','4','5','6','7','8','9','0']);
    const stack = [];
    for (let c of s) {
        if (c !== ']') {
            stack.push(c);
        } else {
            let substr = '';
            while (stack.at(-1) !== '[') {
                substr = stack.pop() + substr;
            }
            stack.pop();
            let n = '';
            while (stack.length && digits.has(stack.at(-1))) {
                n = stack.pop() + n;
            }
            stack.push(substr.repeat(Number(n)));
        }
    }
    return stack.join('');
};