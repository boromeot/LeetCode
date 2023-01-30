/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return createStack(s).join('')  === createStack(t).join('');
}

function createStack(string) {
    let stack = [];
    for (let c of string) {
        if (c !== '#') {
            stack.push(c);
        } else {
            stack.pop();
        }
    }
    return stack;
}