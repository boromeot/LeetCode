/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = 1;
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(product);
        product *= nums[i];
    }
    
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        arr[i] *= product;
        product *= nums[i];
    }
    
    return arr;
};

//[ 1, 2,3,4]
//[24,12,8,6]

//[ 1, 1,2,6] product of all numbers left of current
//[24,12,4,1] product of all numbers right of current