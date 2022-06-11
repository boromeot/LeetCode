/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let l = 0;
    let res = Infinity;
    
    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];
        
        while (sum >= target && l <= r) {
            res = Math.min(res, r - l + 1);
            sum -= nums[l];
            l++;
        }
        
    }
    return res === Infinity ? 0 : res;
};