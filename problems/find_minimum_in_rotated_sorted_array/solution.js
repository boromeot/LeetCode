/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0,
        r = nums.length - 1;
    
    let min = Infinity;
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        
        if (nums[l] <= nums[m]) { // nums[l] -> nums[m] is sorted
            min = Math.min(min, nums[l]);
            l = m + 1;
        } else { // nums[m] -> nums[r] is sorted
            min = Math.min(min, nums[m]);
            r = m - 1;
        }
    }
    
    return min;
    
};

/*
min = Infinity -> 3 -> 1
[3,4,5,6,1,2]
 l   m     r
       l m r
       
       l
       m
       r
*/