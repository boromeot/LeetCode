/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];
    for (let c of s) {
        const top = stack.at(-1);
        if (top?.toLowerCase() === c.toLowerCase() && top !== c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join('');
};