/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let zeros = 0;
    let zero = false;

    let res = 0;

    for (let i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros++;
            zero = true;
        }
    
        while (zeros > 1) {
            if (nums[j] === 0) zeros--;
            j++;
        }
        res = Math.max(i - j + 1 - zeros, res);
    }
    if (zero) return res;
    return nums.length - 1;
};