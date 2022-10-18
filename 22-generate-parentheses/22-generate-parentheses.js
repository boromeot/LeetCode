/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    bt(n, n, '');
    return res;
    
    function bt(l, r, str) {
        if (l === 0 && r === 0) {
            res.push(str);
            return;
        }
        if (l > 0) {
            bt(l - 1, r, str + '(');
        }
        if (l < r) {
            bt(l, r - 1, str + ')');
        }
    }
};