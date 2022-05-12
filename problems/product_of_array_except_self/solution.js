/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        left.push(product);
        product *= nums[i];
    }
    
    const res = [];
    product = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        left[j] *= product;
        product *= nums[j];
    }
    return left;
};
//[ 1,  2, 3, 4]

//[ 1,  1, 2, 6]
//  0   1  2  3

//[1, 4, 12, 24]
//-4 -3  -2  -1

// 0 + 1 = 1
// 1 + 2 = 3
// 2 + 3 = 5