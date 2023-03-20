/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = 0;
    let neg = 0;
    for (let n of nums) {
        if (n < 0) neg++;
        else if (n > 0) pos++;
    }
    return Math.max(pos, neg);
};