/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let res = new Array(nums.length).fill(-1);
    
    
    for (let i = 0; i < nums.length*2; i++) {
        while (stack.length > 0 && nums[stack.at(-1)] < nums[i % nums.length]) {
            res[stack.pop()] = nums[i % nums.length];
        }
        if (i < nums.length) stack.push(i);
    }
    return res;
};