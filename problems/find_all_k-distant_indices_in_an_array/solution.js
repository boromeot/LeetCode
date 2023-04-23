/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    const N = nums.length;
    let set = new Set();

    for (let i = 0; i < N; i++) {
        if (nums[i] === key) {
            for (let j = Math.max(0, i - k); j < Math.min(N, i + k + 1); j++) {
                set.add(j);
            }
        }
    }
    return Array.from(set);
};