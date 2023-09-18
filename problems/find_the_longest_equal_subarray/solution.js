/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function(nums, k) {
    const count = {};
    let maxF = 0;

    for (let i = 0, j = 0; i < nums.length; i++) {
        count[nums[i]] ? count[nums[i]]++ : count[nums[i]] = 1;
        maxF = Math.max(maxF, count[nums[i]]);
        if (i - j + 1 - maxF > k) {
            count[nums[j]]--;
            j++;
        }
    }
    return maxF;
};