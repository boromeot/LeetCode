/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length - 1; i++)  {
        let l = nums[i],
            r = nums[i + 1];
        if (r <= l) {
            res += l + 1 - r;
            nums[i + 1] += l + 1 - r;
        }
    }
    return res;
};