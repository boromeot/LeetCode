/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let total = 0,
        maxSum = nums[0],
        curMax = 0,
        minSum = nums[0],
        curMin = 0;

    for (let n of nums) {
        curMax = Math.max(curMax + n, n);
        maxSum = Math.max(maxSum, curMax);
        curMin = Math.min(curMin + n, n);
        minSum = Math.min(minSum, curMin);
        total += n;
    }
    if (maxSum <= 0) return maxSum;
    return Math.max(maxSum, total - minSum);
};