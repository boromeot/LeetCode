/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    const combo = [];
    let sum = 0;

    bt(0);
    return res;

    function bt(k) {
        if (sum > target) return;
        if (sum === target) {
            res.push(combo.slice());
            return;
        }

        for (let i = k; i < candidates.length; i++) {
            const n = candidates[i];
            sum += n;
            combo.push(n);
            bt(i);
            sum -= n;
            combo.pop();
        }
    }
};