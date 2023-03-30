/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums)

    return Math.min(nums.at(-1) - nums[2], nums.at(-3) - nums[0], nums.at(-2) - nums[1]);
};