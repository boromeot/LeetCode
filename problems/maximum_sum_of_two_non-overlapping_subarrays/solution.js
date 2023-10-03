/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, L, M) {
    let prefix = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    return maxSum(prefix, L, M);

    function maxSum(p, L, M) {
        let res = 0;
        let maxL = 0;

        let ans = 0;
        let maxR = 0;
        for (let i = L + M; i < p.length; i++) {
            maxL = Math.max(maxL, p[i - M] - p[i - M - L]);
            res = Math.max(res, maxL + p[i] - p[i - M]);

            maxR = Math.max(maxR, p[i - L] - p[i - L - M]);
            ans = Math.max(ans, maxR + p[i] - p[i - L]);
        }
        return Math.max(res, ans);
    }
};
//[0, 6,  5,  2,  2,  5,  1,  9,  4]
//[0, 6, 11, 13, 15, 20, 21, 30, 34]