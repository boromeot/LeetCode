/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefix = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        prefix[i] = product;
        product *= nums[i];
    }

    product = 1;
    for (let i = prefix.length - 1; i >= 0; i--) {
        prefix[i] *= product;
        product *= nums[i];
    }
    return prefix;
};

// [ 1, 2, 3, 4]

// [ 1, 1, 2, 6]

// [24,12, 4, 1]