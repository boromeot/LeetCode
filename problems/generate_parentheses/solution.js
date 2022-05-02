/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const stack = [];
    const res = [];
    
    function backTrack(openN, closeN) {
        if (openN === n && closeN === n) {
            res.push(stack.join(''));
            return;
        }
        
        if (openN < n) {
            stack.push('(');
            backTrack(openN + 1, closeN);
            stack.pop();
        }
        
        if (closeN < openN) {
            stack.push(')');
            backTrack(openN, closeN + 1);
            stack.pop();
        }
    }
    backTrack(0, 0);
    return res;
};
// ()
// ()(), (())