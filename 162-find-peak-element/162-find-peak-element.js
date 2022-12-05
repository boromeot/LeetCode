/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let prev = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        let next = nums[i + 1];
        if (next === undefined) next = -Infinity;
        if (prev < n && n > next) {
            return i;
        }
        prev = n;
    }
};