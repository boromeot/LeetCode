/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = new Array(2);
    let l = 0, r = nums.length - 1;

    while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum === target) return [l + 1, r + 1];
        if (sum > target) r--;
        else if (sum < target) l++;
    }
    return res;
};