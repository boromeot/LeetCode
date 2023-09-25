/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let res = 0;
    let sum = 0;
    for (let i = 0, j = 0; i < nums.length; i++) {
        while ((sum & nums[i]) != 0) {
            sum ^= nums[j];
            j++
        }
        sum |= nums[i];
        res = Math.max(res, i - j + 1);
    }
    return res;
};