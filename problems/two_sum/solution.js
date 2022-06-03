/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    //target = 9
    //cNum = 1
    //diff = 9 - 1 -> 8
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) return [i, map.get(diff)];
        map.set(nums[i], i);
    }
    
};