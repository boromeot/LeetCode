/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    const map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    for (let c of s) {
        if (map[c]) {
            if (stack.at(-1) === map[c]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
};

// 1. (())()

// 2. )))))

// 