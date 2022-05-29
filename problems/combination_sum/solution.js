/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    const res = [];    
    dfs(0, [], 0);

    return res;
    function dfs(l, combo, sum) {

        if (sum === target) {
            res.push(combo.slice());
            return;
        }
        
        if (sum > target || l >= candidates.length) {
            return;
        }
        combo.push(candidates[l]);
        
        sum += candidates[l];
        
        dfs(l, combo, sum);
        combo.pop();
        dfs(l + 1, combo, sum - candidates[l]);
    }
    
};
//[1, 2] target = 3