/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let dp = new Array(stones.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(stones.length).fill(false);
    }
    dp[0][1] = true;

    for (let i = 1; i < stones.length; i++) {
        for (let j = 0; j < i; j++) {
            const diff = stones[i] - stones[j];
            if (!dp[j][diff]) continue;
            dp[i][diff] = true;
            if (diff - 1 >= 0) dp[i][diff - 1] = true;
            if (diff + 1 <= stones.length) dp[i][diff + 1] = true;
            if (i === stones.length - 1) return true;
        }
    }
    return false;
};