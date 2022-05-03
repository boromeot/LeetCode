/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    let min = Number.MAX_SAFE_INTEGER;
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        min = Math.min(min, nums[m]);
        
        if (nums[l] <= nums[m]) {
            min = Math.min(min, nums[l]);
            l = m + 1;
        } else {
            min = Math.min(min, nums[m]);
            r = m - 1;
        }
        
    }
    return min;
}; // [4,5,1,2,3]