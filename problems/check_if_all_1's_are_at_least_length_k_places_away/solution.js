/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {

    let distance = k;
    for (let n of nums) {
        if (n === 1) {
            if (distance < k) return false;
            distance = 0;
        } else {
            distance++;
        }
    }
    return true;
};