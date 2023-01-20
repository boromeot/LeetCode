/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let count = {};

    for (let n of nums) {
        count[n] ? count[n]++ : count[n] = 1;
    }
    let sum = 0;
    for (let k of Object.keys(count)) {
        if (count[k] === 1) sum += +k;
    }
    return sum;
};