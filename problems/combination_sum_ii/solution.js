/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    const combo = [];
    let sum = 0;
    candidates.sort((a, b) => a - b);
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
        dfs(l + 1);
        
        sum -= candidates[l];
        combo.pop();
        while(candidates[l] === candidates[l + 1]) {
            l++;
        }
        dfs(l + 1);
    }
    
};