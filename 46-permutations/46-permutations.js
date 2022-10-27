/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    bt(res, new Set(), nums);
    return res;
    
    function bt(res, perm, nums) {
        if (perm.size === nums.length) {
            res.push(Array.from(perm));
            return;
        }
        
        
        for (let i = 0; i < nums.length; i++) {
            if (perm.has(nums[i])) continue;
            perm.add(nums[i]);
            bt(res, perm, nums);
            perm.delete(nums[i]);
        }
    }
};