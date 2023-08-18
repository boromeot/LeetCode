/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let res = 0;
    let product = 1;
    for (let i = 0, j = 0; i < nums.length; i++) {
        product *= nums[i];
        while (product >= k) {
            product /= nums[j];
            j++;
        }
        if (product < k) res += i - j + 1;
    }
    if (res < 0) return 0;
    return res;
};