/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[i] < nums[stack.at(-1)]) {
            stack.push(i);
        }
    }
    let ans = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums[stack.at(-1)] <= nums[i]) {
            ans = Math.max(ans, i - stack.pop());
        }
        if (stack.length === 0) break;
    }
    return ans;
};                