/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let res = 0;
    bt(0, 0);
    return res;
    
    function bt(i, sum) {
        if (i >= nums.length) {
            if (sum === target) res++;
            return;
        }
        
        bt(i + 1, sum + nums[i]);
        bt(i + 1, sum - nums[i]);
    }
    
};