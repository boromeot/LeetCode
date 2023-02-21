/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = nums[0];
    let current = 1;
    let longest = 1;
    for (let n of nums) {
        if (n > max) {
            current++;
            longest = Math.max(longest, current);
            max = n;
        } else {
            max = n;
            current = 1; 
        }
    }
    return longest;
};