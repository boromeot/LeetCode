/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let g = nums.length - 1;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= g) {
            g = i;
        } 
        if (g === 0) return true;
    }
    return false;
};