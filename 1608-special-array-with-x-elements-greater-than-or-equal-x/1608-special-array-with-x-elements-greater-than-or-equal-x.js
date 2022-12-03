/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    for (let x = 1; x <= nums.length; ++x) {
        let count = x;
        for (let n of nums) {
            if (count < 0) break;
            if (n >= x) count--;
        }
        if (count === 0) return x;
    }
    return -1;
};
//[4,4,4]