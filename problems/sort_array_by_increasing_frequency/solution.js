/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let count = {};
    for (let n of nums) {
        count[n] ? count[n]++ : count[n] = 1;
    }
    return nums.sort((a, b) => count[a] - count[b] || b - a);
};