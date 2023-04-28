/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let start = 1;
    let sum = 0;
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        min = Math.min(min, sum);
    }
    if (min < 0) start = Math.abs(min) + 1;
    return start;
};