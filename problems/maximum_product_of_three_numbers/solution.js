/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b);
    let max1 = nums[0] * nums[1] * nums[nums.length - 1];
    let max2 = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    if (max1 > max2) return max1;
    else return max2;
};

// 1, 2, 3 , 4, -8, -9,