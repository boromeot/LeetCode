/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function(clips, time) {
    clips.sort((a, b) => a[0] - b[0]);
    const dp = new Array(time + 1).fill(101);
    dp[0] = 0;
    for (let [s, e] of clips) {
        for (let i = s; i <= e; i++) {
            dp[i] = Math.min(dp[i], dp[s] + 1);
        }
    }
    if (dp[time] === 101) return -1;
    return dp[time];
};