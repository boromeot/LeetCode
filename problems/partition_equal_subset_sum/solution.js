/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((p, c) => p + c);
    
    if (sum % 2 === 1) return false;

    const target = sum / 2;
    let dp = new Set([0]);
    
    for (let i = 0; i < nums.length; i++) {
        let clone = new Set(dp);
        for (let n of dp.values()) {
            if (nums[i] + n === target) return true;
            clone.add(nums[i] + n);
        }
        dp = clone;
    }
    return false;
};