/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    
    const subset = [];
    // [1,2]
    dfs(0);
    return res;
    function dfs(l) {
        if (l === nums.length) {
            res.push(subset.slice());
            return;
        }
        
        subset.push(nums[l]);
        dfs(l + 1);
        subset.pop();
        dfs(l + 1);
    }
};