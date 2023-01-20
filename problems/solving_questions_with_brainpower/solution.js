/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let dp = new Array(questions.length);

    for (let i = questions.length - 1; i >= 0; i--) {
        let l = dp[i + 1] || 0,
            r = questions[i][0] + (dp[i + questions[i][1] + 1] || 0);
        dp[i] = Math.max(l, r);
    }
    return dp[0];
};