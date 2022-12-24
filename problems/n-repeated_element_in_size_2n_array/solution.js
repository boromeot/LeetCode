/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const n = nums.length / 2;
    const count = {};

    for (let num of nums) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
        if (count[num] === n) return num;
    }
};