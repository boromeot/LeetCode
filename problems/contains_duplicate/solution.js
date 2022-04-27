/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const found = new Map();
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (found.has(n)) {
            return true;
        }
        found.set(n, 1);
    }
    return false;
}