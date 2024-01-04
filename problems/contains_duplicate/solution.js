/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const count = {};
    for (let n of nums) {
        count[n] ? count[n]++ : count[n] = 1;
    }
    for (let v of Object.values(count)) {
        if (v > 1) return true;
    }
    return false;
};