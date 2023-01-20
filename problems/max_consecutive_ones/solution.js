/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let count = 0;
    for (let n of nums) {
        if (n === 1) count++;
        else count = 0;
        max = Math.max(max, count);
    }
    return max;
};