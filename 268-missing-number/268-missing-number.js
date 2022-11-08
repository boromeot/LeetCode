/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let realSum = nums.length,
        actSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        realSum += i;
        actSum += nums[i];
    }
    return realSum - actSum;
};