/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m < n) {
        [m, n] = [n, m];
    }
    let row = new Array(n).fill(1);
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n; j++) {
            row[j] = row[j] + (row[j - 1] || 0);
        }
    }
    return row[n - 1];
}

// dp[i][j] = dp[i - 1][j] + dp[i][j - 1] | i
    