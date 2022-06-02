/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    const combo = [];
    let sum = 0;

    dfs(0);
    
    return res;
    function dfs(l) {
        if (sum === target) {
            res.push(combo.slice());
            return;
        }
        
        if (sum > target || l >= candidates.length) {
            return;
        }
        
        sum += candidates[l];
        combo.push(candidates[l]);
        dfs(l);
        sum -= candidates[l];
        combo.pop();
        dfs(l + 1);
    }
    
};
//[1, 2] target = 3