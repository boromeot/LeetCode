/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    
    const string = [];
    
    backtrack(0, 0);
    return res;
    
    function backtrack(open, closed) {
        if (open > n || closed > n ||
            closed > open) {
            return;
        }
        
        if (open === n && closed === n ) {
            res.push(string.join(''));
            return;
        }
        
        string.push('(');
        backtrack(open + 1, closed);
        string.pop();
        string.push(')');
        backtrack(open, closed + 1);
        string.pop();
    }
};