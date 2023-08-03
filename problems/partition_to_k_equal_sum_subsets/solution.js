/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const sum = nums.reduce((a, b) => a + b);
    if (sum % k !== 0) return false;
    nums.sort((a, b) => b - a);
    const target = sum / k;
    const chosen = new Array(nums.length).fill(false);

    return bt(0, k, 0);

    function bt(i, k, s) {
        if (k === 0) return true;
        if (s === target) {
            return bt(0, k - 1, 0);
        }

        for (let j = i; j < nums.length; j++) {
            if (chosen[j] || s + nums[j] > target) continue;
            chosen[j] = true;
            if (bt(j + 1, k, s + nums[j])) return true;
            chosen[j] = false;
        }
        return false;
    }
};