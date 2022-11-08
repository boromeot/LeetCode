/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    bt(nums, []);
    return res;
    
    function bt(nums, perm) {
        if (nums.length === 0) {
            res.push(perm);
            return;
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            bt([...nums.slice(0, i), ...nums.slice(i+1)], [...perm, nums[i]]);
        }
    }
};