/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, 
        r = nums.length - 1;
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        
        if (nums[m] === target) return m;
        
        if (nums[l] <= nums[m]) { //Window is sorted from l -> m
            if (nums[l] <= target && target <= nums[m]) { // Target is within nums[l] -> nums[m]
                r = m - 1;
            } else { // Target is within nums[m] -> nums[r]
                l = m + 1;
            }
            
        } else { //Window is sorted from m -> r
            if (nums[m] <= target && target <= nums[r]) { // Target is within num[m] -> nums[r]
                l = m + 1;
            } else { // Target is within nums[l] -> nums[m]
                r = m - 1;
            }
        }
    }
    return -1;
};

/*
[4,5,6,7,0,1,2]
 l     m     r
if (nums[l] <= nums[r]) nums[l] ---> nums[r] is sorted

else if (nums[l] > nums[r]) { nums[l] ---> nums[r] is not sorted
    

} 

*/