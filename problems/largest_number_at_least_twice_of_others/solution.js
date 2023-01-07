/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = -Infinity,
        secondMax = -Infinity,
        index = -1;
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n > max) {
            secondMax = max;
            max = n;
            index = i;
        } else if (n > secondMax){
            secondMax = n;
        }
    }
    return max >= secondMax * 2 ? index : -1;
};