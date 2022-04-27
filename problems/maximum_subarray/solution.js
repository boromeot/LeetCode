/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = 0;
        }
        currSum += nums[i];
        maxSub = Math.max(maxSub, currSum);
    }
    return maxSub;
};
//[-2,1,-3,4,-1,2,1,-5,4]