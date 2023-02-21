/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
    let max = new Array(nums.length),
        min = new Array(nums.length);
    let res = 0;
    for (let i in nums) {
        const n = nums[i];
        max[i] = Math.max(n, (n + max[i - 1]) || -Infinity);
        min[i] = Math.min(n, (n + min[i - 1]) || Infinity);
        res = Math.max(res, Math.abs(max[i]), Math.abs(min[i]));
    }

    // let res = 0;
    // for (let i in min) {
    //     res = Math.max(res, Math.abs(max[i]), Math.abs(min[i]));
    // }
    return res;
};