/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length, m = word2.length;

    let dp = new Array(n + 1);

    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(m + 1);
    }

    for (let i = 0; i < n + 1; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j < m + 1; j++) {
        dp[0][j] = j;
    }

    for (let r = 1; r < n + 1; r++) {
        for (let c = 1; c < m + 1; c++) {
            if (word1[r - 1] === word2[c - 1]) {
                dp[r][c] = dp[r-1][c-1];
            } else {
                dp[r][c] = Math.min(dp[r][c-1], dp[r-1][c]) + 1;
            }
        }
    }
    return dp[n][m];
};