/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let target = nums.reduce((prev, curr) => prev + curr) - x;
    
    let l = 0;
    let preSum = 0;
    let k = -1;
    
    for (let r = 0; r < nums.length; r++) {
        preSum += nums[r];
        
        while (preSum > target) {
            preSum -= nums[l];
            l++;
        }
        if (preSum === target) {
            k = Math.max(k, r - l + 1);
        }
    }
    return k === -1 ? -1 : nums.length - k;
};

// [1, 1, 4, 2, 3] x = 5
// [1, 2, 6, 8, 11] sum = 11, 11 - 5 = 6
// 