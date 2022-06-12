/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const a = new Array(nums.length).fill(1);
    
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                a[i] = Math.max(a[i], 1 + a[j]);
            }
        }
    }
    return Math.max(...a);
    
};