/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        let rob2 = dp[i - 2] + n || 0;
        let rob3 = dp[i - 3] + n || 0;
        let rob1 = dp[i - 1] || 0;
        dp[i] = Math.max(rob1, rob2, rob3, n);
    }
    return dp[nums.length - 1];
};