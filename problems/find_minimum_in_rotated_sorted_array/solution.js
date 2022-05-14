/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0,
        r = nums.length - 1;
    
    let min = nums[0];
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        
        if (nums[l] <= nums[m]) {
            min = Math.min(min, nums[l]);
            l = m + 1;
        } else {
            min = Math.min(min, nums[m]);
            r = m - 1;
        }
    }
    return min;    
}; // [4,5,6,7,0,1,2]
//     l     m     r