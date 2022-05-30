/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    
    const subset = [];
    nums.sort((a, b) => a - b);
    
    dfs(0);
    return res;
    
    function dfs(l) {
        if (l >= nums.length) {
            res.push(subset.slice());
            return;
        }
        
        subset.push(nums[l]);
        dfs(l + 1);
        
        subset.pop();
        while(nums[l] === nums[l + 1]) {
            l++;
        }
        dfs(l + 1);
    }
};