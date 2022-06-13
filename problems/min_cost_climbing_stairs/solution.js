/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const cLen = cost.length;
    const dp = new Array(cost.length + 1).fill(Infinity);
    dp[0] = cost[0];
    dp[1] = cost[1];
    
    for (let i = 2; i < cost.length + 1; i++) {
        let n = cost[i] || 0;
        dp[i] = Math.min(n + dp[i - 1], n + dp[i - 2]);
    }
    return Math.min(dp[cLen - 1], dp[cLen]);
};