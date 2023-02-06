/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let set = new Set();
    let max = -1;
    for (let n of nums) {
        set.add(n);
        if (set.has(n * -1)) {
            max = Math.max(max, Math.abs(n));
        }
    }
    return max;
};