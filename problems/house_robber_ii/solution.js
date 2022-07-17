/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1 || nums.length === 2) {
        let n1 = nums[0] || 0;
        let n2 = nums[1] || 0;
        return Math.max(n1, n2);
    }
    
    const len = nums.length;
    
    let dp = new Array(nums.length);
    for (let i = 0; i < nums.length - 1; i++) {
        let n1 = dp[i - 2] || 0;
        let n2 = dp[i - 3] || 0;
        dp[i] = nums[i] + Math.max(n1, n2);
    }
    let max1 = Math.max(dp[len - 3], dp[len - 2]);
    
    let dp2 = new Array(nums.length);
    for (let i = 1; i < nums.length; i++) {
        let n1 = dp2[i - 2] || 0;
        let n2 = dp2[i - 3] || 0;
        dp2[i] = nums[i] + Math.max(n1, n2);
    }
    let max2 = Math.max(dp2[len - 1], dp2[len - 2]);
    return Math.max(max1, max2);
};