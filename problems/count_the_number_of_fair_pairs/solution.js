/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b);
    return helper(nums, upper) - helper(nums, lower - 1);
};

function helper(nums, val) {
    let res = 0;
    for (let i = 0, j = nums.length - 1; i < j; i++) {
        while (i < j && nums[i] + nums[j] > val) j--;
        res += j - i;
    }
    return res;
}