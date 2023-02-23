/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
    let dp = new Array(nums.length);
    let prev = -1;

    for (let i in nums) {
        const n = nums[i];
        if (n < left) {
            dp[i] = dp[i - 1] || 0;
        } else if (n > right) {
            dp[i] = 0;
            prev = i;
        } else if (n >= left && n <= right) {
            dp[i] = i - prev;
        }
    }
    return dp.reduce((a, b) => a + b);
};