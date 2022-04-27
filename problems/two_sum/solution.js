/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let diff = target - n;
        
        if (map.has(diff)) {
            return [map.get(diff), i]
        } 
        map.set(n, i);
    }
    return [-1, -1];
}
// 1 3 4 2
// 1 3 4 2, target = 6