/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let res = -Infinity;

    for (let i = 0, j = 0; i < nums.length; i++) {
         sum += nums[i];
         while (i - j + 1 === k) {
            res = Math.max(res, sum / k);
            sum -= nums[j];
            j++;
         }
    }

    return res;
};