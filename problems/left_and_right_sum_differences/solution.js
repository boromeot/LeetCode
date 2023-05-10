/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let lSum = 0, rSum = 0;
    let lNums = [], rNums = [];

    for (let i = 0; i < nums.length; i++) {
        lNums.push(lSum);
        lSum += nums[i];
        rNums.push(rSum);
        rSum += nums[nums.length - 1 - i];
    }


    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(Math.abs(lNums[i] - rNums[nums.length - 1 - i]));
    }
    return res;
};