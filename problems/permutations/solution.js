/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    dfs([], new Array(nums.length).fill(false));
    return res;
    function dfs(perm, used) {
        if (perm.length === nums.length) {
            res.push(perm.slice());
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                perm.push(nums[i]);
                used[i] = true;
                
                dfs(perm, used);
                
                perm.pop();
                used[i] = false;
            }             // [1,2]
        }
    }
};