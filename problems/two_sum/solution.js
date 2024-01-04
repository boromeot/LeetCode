/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const tar = target - n;
        if (map[tar] !== undefined) return [map[tar], i]
        map[n] = i;
    }
    return [-1, -1];
};