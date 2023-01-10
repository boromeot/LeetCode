/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a, b) => a - b);
    let min = nums[k - 1] - nums[0];
    for (let i = k; i < nums.length; i++) {
        min = Math.min(min, nums[i] - nums[i - k + 1]);
    }
    return min;
};