/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    let sum = 0;
    const combo = [];
    const res = [];

    bt(0);
    return res;

    // [1,2,2,2,5]
    function bt(i) {
        if (sum > target) return;
        if (sum === target) {
            res.push(combo.slice());
            return;
        }

        let prev = -1;
        for (let j = i; j < candidates.length; j++) {
            if (candidates[j] === prev) continue;

            combo.push(candidates[j]);
            sum += candidates[j];
            
            bt(j + 1);

            combo.pop();
            sum -= candidates[j];
            prev = candidates[j];
        }
    }
};