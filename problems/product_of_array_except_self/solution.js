/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = [];
    let prod = 1;
    
    for (let n of nums) {
        res.push(prod);
        prod *= n;
    }

    prod = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= prod;
        prod *= nums[i];
    }
    return res;
};