/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    let product = 1;
    let j = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        res.push(product);
        product *= nums[i];
    }
    product = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] *= product;
        product *= nums[j];
    }
    return res;
};
//[ 1,  2, 3, 4]

//[ 1,  1, 2, 6]
//  0   1  2  3


//[1, 4, 12, 24]
//-4 -3  -2  -1

// 0 + 1 = 1
// 1 + 2 = 3
// 2 + 3 = 5