/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    
    for (let n of nums) {
        sum += n;
        max = Math.max(max, sum);
        if (sum < 0) sum = 0;
    }
    return max;
};