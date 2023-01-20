/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    let index = 0;
    for (let num of nums) {
        if (num !== 0) {
            nums[index] = num;
            index++;
        }
    }

    while (index !== nums.length) {
        nums[index] = 0;
        index++;
    }
    return nums;
};