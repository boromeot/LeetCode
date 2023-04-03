/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function(a, b) {
    let stack = [];
    while (a || b) {
        if (stack.at(-1) === 'a' && stack.at(-2) === 'a') {
            stack.push('b');
            b--;
        } else if (stack.at(-1) === 'b' && stack.at(-2) === 'b') {
            stack.push('a');
            a--;
        } else if ( a > b)  {
            stack.push('a');
            a--;
        } else {
            stack.push('b');
            b--;
        }
    }
    return stack.join('');
};