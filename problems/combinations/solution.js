/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const combo = [];

    bt(1);
    return res;

    function bt(i) {
        if (combo.length === k) {
            res.push(combo.slice());
            return;
        }

        for (let j = i; j < n + 1; j++) {
            combo.push(j);
            bt(j + 1);
            combo.pop();
        }
    }
};