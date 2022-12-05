/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0, r = nums.length -1;
    let m = Math.trunc((l + r) / 2);
    
    while (l <= r) {
        let m = Math.trunc((l + r) / 2);
        let curr = nums[m];;
        let next = nums[m + 1];
        if (nums[m + 1] === undefined) next = -Infinity;
        
        if (curr < next) {
            l = m + 1;
        } else if (curr > next) {
            r = m - 1;
        }
    }
    
    return l;
};