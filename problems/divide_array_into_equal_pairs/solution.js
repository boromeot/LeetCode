/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let set = new Set();
    for (let n of nums) {
        if (set.has(n)) set.delete(n);
        else set.add(n);
    }
    return set.size === 0;
};