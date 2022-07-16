/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    let dp = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        let n1 = dp[i - 2] || 0,
            n2 = dp[i - 3] || 0;
        dp[i] = nums[i] + Math.max(n1, n2);
    }
    return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
}; 