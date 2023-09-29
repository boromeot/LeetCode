/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const count = new Map();
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (count.get(nums[i])) count.set(nums[i], count.get(nums[i]) + 1);
        else count.set(nums[i], 1);
        const freq = count.get(nums[i]);
        if (res[freq - 1] === undefined) res[freq - 1] = [nums[i]];
        else res[freq - 1].push(nums[i]);
    }
    return res;
};