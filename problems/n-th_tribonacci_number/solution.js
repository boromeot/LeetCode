/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    dp = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        dp[i % 3] = dp.reduce((a, b) => a + b);
    }
    return dp[n % 3];
};