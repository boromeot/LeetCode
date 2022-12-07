/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    let choices = [];
    for (let i = 1; i < n + 1; i++) {
        choices.push(i);
    }
    backtracking(choices, []);
    return res;

    function backtracking(choices, path) {
        if (path.length === k) {
            res.push(path);
            return;
        }

        for (let i = choices.length - 1; i >= 0; i--) {
            let n = choices.pop();
            backtracking([...choices], [...path, n]);
        }
    }
};