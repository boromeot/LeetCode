/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let nums = [0, 1];
    if (n === 0) return 0;
    for (let i = 0; i <= n; i++) {
        if (2 <= 2 * i && 2 * i <= n) {
            nums[2 * i] = nums[i];
        }
        if (2 <= 2 * i + 1 && 2 * i + 1 <= n) {
            nums[2 * i + 1] = nums[i] + nums[i + 1];
        }
    }
    return Math.max(...nums);
};