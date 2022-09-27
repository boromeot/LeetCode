/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let c = target - n;
        if (map.has(c)) return [map.get(c), i];
        map.set(n, i);
    }  
};