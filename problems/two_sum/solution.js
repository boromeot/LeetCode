/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}; // { num: index }
    
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const diff = target - n; // diff + n = target : => : 
        if (map[diff] !== undefined) return [i, map[diff]];
        map[n] = i;
    }
};